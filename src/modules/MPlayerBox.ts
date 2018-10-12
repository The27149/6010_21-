namespace bx{
    export class MPlayerBox extends Framework{
        public view:fui.Game.FUI_PlayerBox;
        private lastTime:number=15000;
        private maskSpr:Laya.Sprite;
        private maskW:number;
        private maskH:number;
        private _percent:number=0;
        constructor(){
            super();
        }

        public initView(_view:fui.Game.FUI_PlayerBox):void{

            this.view = _view;

            this.initMask();
        }

        private initMask():void{
            this.maskW = this.view.m_timeBox.width/2;
            this.maskH = this.view.m_timeBox.height/2;
            this.maskSpr = new Laya.Sprite();
            // this.view.m_timeBox.displayObject.mask = this.maskSpr;
            // this.downTime();
        }

        /**
         * 设置玩家数据
         */
        public setData():void{

        }
        /**
         * 更新金币
         * @param chip 
         */
        public upChip(chip:number):void{

            this.view.m_coin.text = chip.toString();
        }

        /**
         * 倒计时
         */
        private downTime():void{
           
			Laya.Tween.to(this,{percent:1},this.lastTime);
        }

        public get percent():number{
            return this._percent;
        }

        public set percent(value:number){
            let startAngle = -90+value*360;
			this.maskSpr.graphics.clear();
            this.maskSpr.graphics.drawPie(this.maskW,this.maskH,110,startAngle,270,"#ffffff");

        }
       
    }
}