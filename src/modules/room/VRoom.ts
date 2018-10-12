namespace bx{
    export class VRoom extends Layout<fairygui.GComponent>{
        public view: fui.Game.FUI_RoomView;
        private gameGirlSk: bx.Skeleton=null;
        private propertyAry_h:Array<any>=[[1403,416,0.93,1.08,-11,0,-45],[1164,579,1,1,-5,0,-28],[894,590,1,1,360,0,0],[614,510,1,1,5,0,24],[446,352,0.94,1,11,0,49],[894,342,1,1,360,0,0]];
        private propertyAry_v:Array<any>=[[678,652,0.9,0.9,360,0,0],[678,1060,0.9,0.9,360,0,0],[468,1374,0.9,0.9,360,0,0],[284,1060,0.9,0.9,360,0,0],[278,652,0.9,0.9,360,0,0],[468,360,0.9,0.9,360,0,0]];
        private sendPokerAry:Array<MSendPoker>=[];
        private posNum:number=0;
        constructor() { super("fui.Game.FUI_RoomView"); }
        initView(v: fui.Game.FUI_RoomView): void {
            this.view = v;
            this.initGameGirlSk();
            this.initSendPoker();
            this.initEvent();
        }

        /**
         * 初始荷官
         */
        private initGameGirlSk(): void {

            this.gameGirlSk = new bx.Skeleton("21dian.sk");

            this.gameGirlSk.play("daiji", true);
            this.gameGirlSk.sk.x = 950;
            this.gameGirlSk.sk.y = 150;
  
            this.ui.displayObject.addChild(this.gameGirlSk.sk);

            this.gameGirlSk.sk.visible = false;

        }

        private initEvent():void{
            this.view.m_sendBtn.onClick(this,this.startSendPoker);
        }

        /**
         * 初始发牌的牌
         */
        private initSendPoker():void{
            var mSend:MSendPoker;
            for(var i:number=0;i<6;i++){
                mSend = new MSendPoker();
                mSend.register();
                mSend.init(this.view["m_sendPoker"+(i+1)],i,this.propertyAry_h[i],this.propertyAry_v[i]);
                this.sendPokerAry.push(mSend);
            }
        }

        public startSendPoker():void{

            Laya.timer.loop(200,this,this.outTimeSendPoker);
            
        }

        private outTimeSendPoker():void{

            if(this.posNum==12){
                Laya.timer.clear(this,this.outTimeSendPoker);
                this.posNum = 0;
                return;
            }

            if(this.posNum==5){
                Laya.timer.clear(this,this.outTimeSendPoker);
                Laya.timer.once(300,this,this.startSendPoker);
            }

            this.sendPokerAry[this.posNum%6].startSendPoker();
            this.posNum++;
            
        }

        
        public layout(): void {
            
            this.upPoint();
        }

        private upPoint():void{

            for(var i:number=0;i<this.sendPokerAry.length;i++){
                
                this.sendPokerAry[i].layout();
            }
        }
    }
}