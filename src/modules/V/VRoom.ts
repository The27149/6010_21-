namespace point21{
    export class VRoom extends bx.Layout<fairygui.GComponent>{
        public _view:fui.room.FUI_roomView;
        private dealDuration:number = 300;         //发牌过程持续时间
        private insuranceList:Array<fairygui.GList>;  //五个保险列表
        private insuranceList_hide:Array<fui.room.FUI_chip>;  //五个保险列表,隐藏占位的
        private chips:Array<fairygui.GLoader>;       //五个筹码条
        private seatIdArr:Array<fairygui.GTextField>;   //五个座位号视图

        private timeVal:number;                     //倒计时剩余时间
        private isPlayingClockSound:boolean = false;              //正在播放倒计时声音
        private tongshaSk: bx.Skeleton[] = [];           //通杀的骨骼动画
        private tongpeiSk: bx.Skeleton[] = [];           //通赔的骨骼动画

        constructor(){
            super('fui.room.FUI_roomView',"room_dt");
            this._view = this.ui as fui.room.FUI_roomView;
            this.dispatchView();
            this.insuranceList = [this._view.m_insurance1,this._view.m_insurance2,this._view.m_insurance3,this._view.m_insurance4,this._view.m_insurance5];
            this.insuranceList_hide = [this._view.m_insurance1_hide,this._view.m_insurance2_hide,this._view.m_insurance3_hide,this._view.m_insurance4_hide,this._view.m_insurance5_hide];
            this.chips = [this._view.m_chip1,this._view.m_chip2,this._view.m_chip3,this._view.m_chip4,this._view.m_chip5];
            this.seatIdArr = [this._view.m_numb1,this._view.m_numb2,this._view.m_numb3,this._view.m_numb4,this._view.m_numb5];
            this.init();
        }

        //初始化
        init():void{
            // this._view.m_result1.m_win. = 0;
            // this._view.m_result1.m_fail.pivotX = 0;
            // this._view.m_result5.m_win.pivotX = 1;
            // this._view.m_result5.m_fail.pivotX = 1;
            this.tongshaSk[0] = new bx.Skeleton('tongsha1.sk'),
            this.tongshaSk[1] = new bx.Skeleton('tongsha2.sk'),
            this.tongpeiSk[0] = new bx.Skeleton('tongpei1.sk'),
            this.tongpeiSk[1] = new bx.Skeleton('tongpei2.sk');
            this.tongshaSk[0].sk.blendMode = this.tongpeiSk[0].sk.blendMode = 'lighter';
            this.tongshaSk[0].completeHandle = this.tongpeiSk[0].completeHandle = Laya.Handler.create(this, function(){
                this._view.m_resultTip.m_ctl.selectedIndex = 0;
            },null,false)
            let tongshaTip = this._view.m_resultTip.m_tongsha,
                tongpeiTip = this._view.m_resultTip.m_tongpei;
            tongshaTip.displayObject.addChildren(this.tongshaSk[1].sk,this.tongshaSk[0].sk);
            tongpeiTip.displayObject.addChildren(this.tongpeiSk[1].sk,this.tongpeiSk[0].sk);
            this.tongshaSk[0].sk.x = this.tongshaSk[1].sk.x = tongshaTip.width / 2;
            this.tongshaSk[0].sk.y = this.tongshaSk[1].sk.y = tongshaTip.height / 2;
            this.tongpeiSk[0].sk.x = this.tongpeiSk[1].sk.x = tongpeiTip.width / 2;
            this.tongpeiSk[0].sk.y = this.tongpeiSk[1].sk.y = tongpeiTip.height / 2;
        }

        playSk_tongsha(): void{
            this._view.m_resultTip.m_ctl.selectedIndex = 1;
            let name = 'tongsha_' + bx.GData.curLanguage.replace('-', '_');
            this.tongshaSk[0].play(name, false);
            this.tongshaSk[1].play(name, false);
        }
        playSk_tongpei(): void{
            this._view.m_resultTip.m_ctl.selectedIndex = 2;
            let name = 'tongpei_' + bx.GData.curLanguage.replace('-', '_');
            this.tongpeiSk[0].play(name, false);
            this.tongpeiSk[1].play(name, false);
        }

        //将视图分配给其他类管理
        dispatchView():void{
            let areas:Array<fui.room.FUI_playerArea | fui.room.FUI_playerArea_banker>=[];
            areas.push(this._view.m_playerArea0,this._view.m_playerArea1,this._view.m_playerArea2,this._view.m_playerArea3,this._view.m_playerArea4,this._view.m_playerArea5);
            bx.Framework.notify(point21.GConst.n_Vmanager_playerArea,areas,this._view);

            let btnPlay:fui.room.FUI_btnPlay;
            bx.Framework.notify(point21.GConst.n_Vmanager_btnPlay,this._view.m_btnPlay);

            let players:Array<fui.room.FUI_otherPlayer | fui.room.FUI_selfPlayer> = [];
            players.push(this._view.m_player1,this._view.m_player2,this._view.m_player3,this._view.m_player4,this._view.m_player5);
            bx.Framework.notify(point21.GConst.n_Vmanager_player,players);
        }



        reset():void{
            this._view.m_resultTip.m_ctl.selectedIndex = 0;
            this.isPlayingClockSound = false;
            this._view.m_clock.visible = false;
            this._view.m_card1.visible = false;
            for(let j = 0 ; j < this.insuranceList.length; j++){
                this.removeInsuranceList(j + 1);
                this.setSeatIdOnDesk(j + 1,0);
                this.setChipsVisible(false,j + 1);
                this.hideResult(j + 1);
                this.seatNameVisible(false, j + 1);
            }
            this.hideResult('_self');
        }

        //买保险 pos:买家位置   index：要买保险的位置序号
        betInsurance(value:number,pos:number,index:number):void{
            value = Utils.formatChips(value);
            let chips = Utils.getChipImgObj(value);
            let count  = 0;
            let children: Array<fui.room.FUI_chip> = this.addChildToInsuranceList(index,value,false);
            for(let item in chips){
                for(let i = 0 ;i < chips[item];i++){
                    let chip:fui.room.FUI_chip = Laya.Pool.getItemByCreateFun('chip',function(){
                        return fui.room.FUI_chip.createInstance();
                    })
                    chip.m_img.url = Utils.getChipImg(Number(item));
                    this._view.addChild(chip);
                    chip.visible = false;

                    let action = Laya.Pool.getItemByClass('move',Tools.Move);
                    action.target = chip;
                    action.start = this.chips[pos - 1];
                    action.end = children[children.length - 1 - count];
                    action.duration = this.dealDuration;
                    action.complete = function(){
                        this.end.visible = true;
                        this.target.removeFromParent();
                        Laya.Pool.recover('chip',this.target);
                        Laya.Pool.recover('move',action);
                    }
                    Laya.timer.once(count * 50,this,function(){
                        action.target.visible = true;
                        action.move();
                    })
                    count++;
                }
            }
        }

        //清空某个保险列表
        removeInsuranceList(index:number):void{
            this.insuranceList[index -1].removeChildrenToPool();
        }

        //向某个保险列表添加item
        addChildToInsuranceList(index:number,value:number,visible:boolean):fui.room.FUI_chip[]{
            if(value <= 0) return;
            let chips = Utils.getChipImgObj(value);
            let children: Array<fui.room.FUI_chip> = [];
            for(let item in chips){
                for(let i = 0; i < chips[item];i++){
                    let url = Utils.getChipImg(Number(item));
                    let child = this.insuranceList[index - 1].addItemFromPool() as fui.room.FUI_chip;
                    child.m_img.url = url;
                    child.visible = visible;
                    children.push(child);
                }
            }
            this.insuranceList[index - 1].ensureBoundsCorrect();
            return children;
        }

        //庄家收保险筹码
        pushInsuranceToBanker(index:number){
            let _this = this;
            let action = Laya.Pool.getItemByClass('move',Tools.Move);
            action.target = this.insuranceList[index - 1];
            action.start = this.insuranceList_hide[index - 1];
            action.end = this._view.m_chipBank;
            action.duration = this.dealDuration;
            action.complete = function(){
                Laya.timer.frameOnce(1, this, function(){
                    action.target.x = action.start.x;
                    action.target.y = action.start.y;
                    _this.removeInsuranceList(index);
                    Laya.Pool.recover('move',action);
                })
            }
            // Laya.timer.once(action.duration, this, function(){
            //     action.target.x = action.start.x;
            //     action.target.y = action.start.y;
            //     //_this.removeInsuranceList(index);
            //     Laya.Pool.recover('move',action);
            // })
            action.move();
        }

        //设置桌面上座位编号的值(已废除，暂时保留函数，初始化时清空界面上暂存的座位号)
        setSeatIdOnDesk(pos:number, v:number){
            let str = v.toString();
            if(v === 0) str = '';
            this.seatIdArr[pos - 1].text = str;
        }

        //设置某个筹码条的显示状态
        setChipsVisible(state:boolean,pos:number):void{
            this._view['m_chip' + pos].visible = state;
        }

        //隐藏结果
        hideResult(pos:number | string):void{
            this._view['m_result' + pos].visible = false;
        }

        //显示结算结果 
        showResult(pos:number | string,value:number):void{
            let target:fui.room.FUI_result = this._view['m_result' + pos];
            target.visible = true;
            if(value >= 0){
                target.m_resultCtl.selectedIndex = 1;
                //target.m_win.text = '+' + bx.GData.formatNumber(value);
                if(!target.m_win['runRoll']){
                    new Tools.NumberEffect(target.m_win).addRollEffect();
                }
                target.m_win['runRoll'](Utils.formatChips(value));
            }else{
                target.m_resultCtl.selectedIndex = 0;
                //target.m_fail.text = bx.GData.formatNumber(value);
                if(!target.m_fail['runRoll']){
                    new Tools.NumberEffect(target.m_fail).addRollEffect();
                }
                target.m_fail['runRoll'](Utils.formatChips(value));
            }
        }

        //倒计时
        StartClock(time:number):void{
            this.timeVal = time;
            this._view.m_clock.visible = true;
            this._view.m_clock.m_numb.text = this.timeVal.toString();
            Laya.timer.loop(1000,this,this.clock);
        }

        clock():void{
            this.timeVal--;
            this._view.m_clock.m_numb.text = this.timeVal.toString();

            if(!this.isPlayingClockSound && this.timeVal <= 3){
                this.isPlayingClockSound = true;
                SoundManager.instance.playSound(AssetsUtils.getSoundUrl('clock'),1);
            }
            if(this.timeVal <= 0){
                this.stopClock();
            }
        }

        //停止 自己的倒计时
        stopClock():void{
            Laya.timer.clear(this,this.clock);
            this._view.m_clock.visible = false;
            this.isPlayingClockSound = false;
            SoundManager.instance.stopSound(AssetsUtils.getSoundUrl('clock'));
        }

        //特效手 控制 0:常态 1：下注本位置  2：下注左  3：下注右  4：停牌  5：要牌
        handAction(state:number):void{
            this._view.m_hand.m_actionCtl.selectedIndex = state;
            if(state === 0) return;
            let action:fairygui.GMovieClip;
            switch(state){
                case 0:
                break;
                case 1:
                    action = this._view.m_hand.m_bet;
                break;
                case 2:
                    action = this._view.m_hand.m_betLeft;
                break;
                case 3:
                    action = this._view.m_hand.m_betRight;
                break;
                case 4:
                    action = this._view.m_hand.m_stopCard;
                break;
                case 5:
                    action = this._view.m_hand.m_needCard;
                break;
            }
            action.playing = true;
            action.setPlaySettings(0,-1,1,-1,Laya.Handler.create(this,function(){
                action.playing = false;
                this.handAction(0);
            }))
        }

        //灯光控制
        turnOnLightTo(pos:number,id:number):void{
            let p = MRoom.getSeatId(pos);
            let index;
            if(bx.Stage.getStage().isLandscape){
                index = p * 3 + id - 2;
            }else{
                index = p * 3 + id + 13;
            }
            this._view.m_lightCtl.selectedIndex = index;
        }

        //关闭灯光
        turnOffLight():void{
            if(!this._view) return;
            this._view.m_lightCtl.selectedIndex = 0;
        }

        //座位所属玩家名称 显示/隐藏
        seatNameVisible(state:boolean, pos:number, name?:string):void{
            if(pos == 3) return;
            this._view['m_namebg' + pos].visible = state;
            this._view['m_name' + pos].visible = state;
            if(state && name){
                this._view['m_name' + pos].text = name;
            }
        }
    }
}