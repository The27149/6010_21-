namespace bx{
    export class MMyPlayerBox extends Framework{
        public view:fui.Game.FUI_MyPlayerBox;
        private lastTime:number=50000;
        constructor(){
            super();
        }

        public initView(_view:fui.Game.FUI_MyPlayerBox):void{

            this.view = _view;
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
    }
}