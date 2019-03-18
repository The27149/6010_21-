namespace point21{
    export class MBtnPlay{
        public view:VBtnPlay;

        private isMouseDown:boolean = false;
        private sliderHidden:boolean = true;              //滑动条是否是隐藏状态
        public currentBetPos:number = 3;                       //当前下注位置,默认在中间位置
        public bet_max: number = 300;                          //最大注
        public bet_min: number = 3;                            //最小注
        private showAsBetComplete:boolean;                      //按钮是否显示为下注完成
        public activyPos:number;                                //当前正在操作的位置(服务器上的位置)
        public activyId:number = 0;                                //当前正在操作的牌（左中右）
        public card1:number;
        public card2:number;

        public roomType:number;                                 //房间类型

        constructor(){}
        protected requestGS(...params: Array<any>): void { bx.Framework.notify(bx.GConst.n_gs_send, ...params); }

        instanceView(v:fui.room.FUI_btnPlay):void{
            this.view = new VBtnPlay(v);
            this.bindEvent();
        }

        //重置
        reset():void{
            this.view.hide();
        }

        //设置底注 最大注 最小注
        setBaseBet(arr:Array<number>):void{
            this.bet_max = arr[1] / 100;
            this.bet_min = arr[0] / 100;
            //if(MRoom.selfMoney < this.bet_max) this.bet_max = Math.floor(MRoom.selfMoney);
            this.view.setBaseBet(this.bet_max,this.bet_min);
        }

        //绑定事件
        bindEvent():void{
            let _view:fui.room.FUI_btnPlay = this.view._view;
            _view.m_minBet.onClick(this,this.onClick_minBet);
            _view.m_maxBet.onClick(this,this.onClick_maxBet);
            _view.m_bet.onClick(this,this.onClick_bet);
            _view.m_continueBet.onClick(this,this.onClick_continueBet);
            _view.m_insurance.onClick(this,this.onClick_insurance);
            _view.m_insuranceNot.onClick(this,this.onClick_insuranceNot);
            _view.m_stopCard.onClick(this,this.onClick_stopCard);
            _view.m_needCard.onClick(this,this.onClick_needCard);
            _view.m_divideCard.onClick(this,this.onClick_divideCard);
            _view.m_double.onClick(this,this.onClick_double);
            _view.m_continueGame.onClick(this,this.onClick_continueGame);

            let slider = this.view._view.m_betSlider;
            slider.m_grip.on(Laya.Event.MOUSE_DOWN,this,this.mouseDown);
            slider.m_title.on(Laya.Event.MOUSE_DOWN,this,this.mouseDown);
            slider.on(Laya.Event.MOUSE_MOVE,this,this.mouseMove);
            slider.on(Laya.Event.MOUSE_UP,this,this.mouseUp);
            slider.on(Laya.Event.MOUSE_OUT,this,this.mouseOut);
            slider.m_bg.onClick(this,this.mouseClick);
        }

        //进入某个行为集(0:下注类，1:要牌类，2：保险类，3：继续游戏)
        inStage(stage:number):void{
            this.view.show(stage);
            if(stage === 0){
                this.view.setSliderVisible(false);
                this.sliderHidden = true;
                this.currentBetPos = 3;
                this.showAsBetComplete = false;
                if(!this.view.betValue || !this.isEnoughMoney()) this.view.btnUnable('continueBet');
                this.view.setContinueBetContent(0);
                if(MRoom.selfMoney < this.bet_min){
                    this.view.btnUnable('minBet');
                    this.view.btnUnable('maxBet');
                    this.view.btnUnable('bet');
                    this.view.btnUnable('continueBet');
                }else if(this.view.betValue && MRoom.selfMoney < this.view.betValue){
                    this.view.btnUnable('continueBet');
                }
            }else if(stage == 1){
                if(this.card1 && (this.card1 % 16 == this.card2 % 16) && (this.activyId == 0)){
                    this.view.btnEnable('divideCard');
                }else{
                    this.view.btnUnable('divideCard');
                }
                if(!this.isEnoughMoney()){
                    this.view.btnUnable('divideCard');
                    this.view.btnUnable('double');
                }
            }else if(stage == 2){
                let insuranceMoney = this.view.betValue / 2;
                if(MRoom.selfMoney < insuranceMoney){
                    this.view.btnUnable('insurance');
                }
            }
        }

        /**
         * 判断当前余额是否大于当前下注金额
         */
        isEnoughMoney():boolean{
            return MRoom.selfMoney > this.view.betValue;
        }

        //设置cards
        setCards(pos:number){
            for(let item of MRoom.cards){
                if(item.pos == pos){
                    this.card1 = item.value[0];
                    this.card2 = item.value[1];
                }
            }
        }

        //按下
        mouseDown():void{
            Laya.Mouse.cursor = 'pointer';
            this.isMouseDown = true;
            this.view.getMouseRange();
        }

        //移动
        mouseMove(e):void{
            if(this.isMouseDown){
                this.view.setSliderOnBet();        
            }
        }

        //抬起
        mouseUp():void{
            Laya.Mouse.cursor = 'default';
            this.isMouseDown = false;
        }

        //移出
        mouseOut():void{
            Laya.Mouse.cursor = 'default';
            this.isMouseDown = false;
        }

        //点击
        mouseClick():void{
            this.view.onClickSlider();
        }

        //点击下注按钮
        onClick_bet():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            if(this.sliderHidden){
                this.view.setSliderVisible(true);
                this.sliderHidden = false;
                this.view.betValue = this.bet_min;
                this.view.setMaxOrMin(0);
            }else{
                this.bet_req();
            }
        }

        //发起下注请求
        bet_req():void{
            let req:protos.userOperationReq = <protos.userOperationReq>{};
            req.op = (this.currentBetPos === 3) ? 1 : 2;
            req.value = [this.view.betValue * 100];
            if(this.currentBetPos != 3) req.value.unshift(MRoom.getIdOnSever(this.currentBetPos));
            this.requestGS(protos.CCMD.userOperationReq,req);
        }

        //确定下注 响应
        resp_bet(){
            this.view.setSliderVisible(false);
            this.sliderHidden = true;
            this.view.btnEnable('continueBet');
            this.showAsBetComplete = true;
            this.view.setContinueBetContent(1);
            this.afterBet();
        }

        //点击最小注按钮
        onClick_minBet():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            this.view.betValue = this.bet_min;
            this.view.setMaxOrMin(0);
            this.bet_req();
        }

        //点击最大注按钮
        onClick_maxBet():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            this.view.betValue = this.bet_max;
            this.view.setMaxOrMin(1);
            this.bet_req();
        }

        //点击续压
        onClick_continueBet():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            if(!this.showAsBetComplete){
                this.bet_req();
            }else{
                this.req_betComplete();
            }
        }

        //发送下注完成
        req_betComplete():void{
            let req:protos.userOperationReq = <protos.userOperationReq>{};
            req.op = 3;
            this.requestGS(protos.CCMD.userOperationReq,req);
        }

        //下注后状态改变 前三个变灰
        afterBet():void{
            this.view.btnUnable('minBet');
            this.view.btnUnable('maxBet');
            this.view.btnUnable('bet');
        }
        
        //下注前 状态恢复
        beforeBet():void{
            this.view.btnEnable('minBet');
            this.view.btnEnable('maxBet');
            this.view.btnEnable('bet');
        }

        //点击买保险按钮
        onClick_insurance():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            let req:protos.userOperationReq = <protos.userOperationReq>{};
            req.op = 4;
            req.value = [this.activyPos];
            this.requestGS(protos.CCMD.userOperationReq,req);
        }

        //点击不买保险按钮
        onClick_insuranceNot():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            let req:protos.userOperationReq = <protos.userOperationReq>{};
            req.op = 5;
            req.value = [this.activyPos];
            this.requestGS(protos.CCMD.userOperationReq,req);
        }

        //点击停牌
        onClick_stopCard():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            let req:protos.userOperationReq = <protos.userOperationReq>{};
            req.op = 9;
            req.value = [this.activyPos,this.activyId];
            this.requestGS(protos.CCMD.userOperationReq,req);
        }

        //点击要牌
        onClick_needCard():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            let req:protos.userOperationReq = <protos.userOperationReq>{};
            req.op = 8;
            req.value = [this.activyPos,this.activyId];
            this.requestGS(protos.CCMD.userOperationReq,req);
        }

        //要牌响应
        resp_needCard():void{
            this.view.btnUnable('divideCard');
            this.view.btnUnable('double');
        }

        //点击分牌
        onClick_divideCard():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            let req:protos.userOperationReq = <protos.userOperationReq>{};
            req.op = 7;
            req.value = [this.activyPos,this.activyId];
            this.requestGS(protos.CCMD.userOperationReq,req);
        }

        //点击双倍
        onClick_double():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            let req:protos.userOperationReq = <protos.userOperationReq>{};
            req.op = 6;
            req.value = [this.activyPos,this.activyId];
            this.requestGS(protos.CCMD.userOperationReq,req);
        }

        //点击继续游戏
        onClick_continueGame():void{
            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('btn'));
            bx.Framework.notify(bx.GConst.n_set_room_type, this.roomType);
            bx.Framework.notify(bx.GConst.n_click_continue_game_btn);
        }

        //隐藏视图
        hideView():void{
            this.view.hide();
        }

        layout():void{
            if(bx.Stage.getStage().isLandscape){
                this.view._view.m_h_v.selectedIndex = 0;
            }else{
                this.view._view.m_h_v.selectedIndex = 1;
            }
            
        }
        
    }
}