namespace point21{
    export class VPlayer{
        private _view:fui.room.FUI_otherPlayer;
        private _viewSelf:fui.room.FUI_selfPlayer;
        private seatId:number;
        private _maskDeg:number;                 //扇形遮罩的角度
        private mask:Laya.Sprite;                 //扇形遮罩
        private timeTween:Laya.Tween;             //倒计时缓动
        private clockTime:number;                   //倒计时总时间 秒
        public playerName:string;               //玩家名称
        constructor(v:fui.room.FUI_otherPlayer | fui.room.FUI_selfPlayer,i:number){
            if(i == 2){
                this._viewSelf = v as fui.room.FUI_selfPlayer;
                //this._viewSelf.displayObject.cacheAs = "bitmap";
            }else{
                this._view = v as fui.room.FUI_otherPlayer;
                //this._view.displayObject.cacheAs = 'bitmap';
                if(i < 2){
                    this._view.m_talkPos.selectedIndex = 1;
                }else{
                    this._view.m_talkPos.selectedIndex = 0;
                }
            }
            this.seatId = i + 1;
        }

        //显示
        show():void{
            if(this._view){
                this._view.visible = true;
                this._view.m_timeCircle.m_circle.visible = false;
                this.setTalkingVisible(false);
            }else{
                this._viewSelf.visible = true;
            }
        }

        //隐藏
        hide():void{
            if(this._view){
                this._view.visible = false;
            }else{
                this._viewSelf.visible = false;
            }
        }

        //设置玩家信息
        setPlayer(info:protos.playerInfo | protos.playerMsg):void{
            this.show();
            let name = info.name;
            if(name.length > 8){
                name = name.substr(0, 8) + '...';
            }
            this.playerName = name;
            let headUrl = Utils.getHeadUrl(info.avatar);
            if(this._view){
                this._view.m_head.url = headUrl;
                this._view.m_nick.text = name;
                this.setCoin(info.chips);
            }else{
                this._viewSelf.m_headComp.m_head.url = headUrl;
                this._viewSelf.m_nick.text = name;
                this.setCoin(info.chips);
            }
        }

        //设置金币
        setCoin(n:number):void{
            if(this._view){
                this._view.m_coin.text = bx.GData.formatNumber(n);
            }else{
                bx.Framework.notify(point21.GConst.n_selfMoneyChange,n);
                this._viewSelf.m_coin.text = bx.GData.formatNumber(n);
            }
            
        }

        /////////////////以下为其他玩家独有/////////////////////////////
        get maskDeg():number{
            return this._maskDeg;
        }

        set maskDeg(v:number){
            if(v != this._maskDeg)
            this._maskDeg = v;
            let circle = this._view.m_timeCircle.m_circle;
            let width = circle.width;
            let height = circle.height;

            let all = width * 2 + height * 2;
            let rateWidth = width / all,
                rateHeight = height / all;
            let rate1 = 1 - height / 2 / all,
                rate2 = rate1 - rateWidth,
                rate3 = rate2 - rateHeight,
                rate4 = rate3 - rateWidth;
            let p1 = new Laya.Point(width, height / 2),
                p2 = new Laya.Point(width, 0),
                p3 = new Laya.Point(0, 0),
                p4 = new Laya.Point(0, height),
                p5 = new Laya.Point(width, height);
            
            let arr = [],
                change;
            if(v < rate4){
                change = (rate4 - v) * all;
                arr = [p1.x - 9,p1.y,p1.x,change];
            }else if(v < rate3){
                change = width - (v - rate4) * all;
                arr = [p1.x - 9,p1.y,p2.x,p2.y,change,p2.y];
            }else if(v < rate2){
                change = (v - rate3) * all;
                arr = [p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p3.x,change];
            }else if(v < rate1){
                change = (v - rate2) * all;
                arr = [p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y,change,p4.y];
            }else {
                change = height - (v - rate1) * all;
                arr = [p1.x,p1.y,p2.x,p2.y,p3.x,p3.y,p4.x,p4.y,p5.x,p5.y,p1.x,change];
            }
            this.mask.graphics.clear();
            this.mask.graphics.drawLines(0,0,arr,'#ffffff',13);
        }
        

        //倒计时光圈启动
        timeCircleStart(time:number):void{
            if(!this._view)return;
            this.clockTime = time;
            let component = this._view.m_timeCircle;
            component.m_circle.visible = true;
            if(!this.mask){
                this.mask = new Laya.Sprite();
            }
            component.mask = this.mask;
            this.maskDeg = 1;
            this.timeTween = Laya.Tween.to(this,{maskDeg:0},time * 1000,Laya.Ease.linearNone,Laya.Handler.create(this,function(){
                this.timeCircleEnd();
            }));
        }

        //倒计时光圈结束
        timeCircleEnd():void{
            if(!this._view) return;
            this._view.m_timeCircle.m_circle.visible = false;
            this.timeTween && Laya.Tween.clear(this.timeTween);
        }

        //说话显示控制 0:分解  1:双倍  2:要牌  3:停牌  4:下注完成
        setTalkingVisible(state:boolean,content?:number){
            if(!this._view) return;
            this._view.m_talk.visible = state;
            this._view.m_talkBgLeft.visible = state;
            this._view.m_talkBgRight.visible = state;
            if(state){
                this._view.m_talk.m_word.selectedIndex = content;
                Laya.timer.once(2000,this,function(){
                    this.setTalkingVisible(false);
                })
            }
        }
    }
}