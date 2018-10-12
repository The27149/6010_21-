namespace bx{
    export class MPokerItem extends Framework{

        private view:fui.Game.FUI_PokerItem;
        private pos:number;
        private propertyAry:Array<any>;
        constructor(){
            super();
        }

        public init(parent:fui.Game.FUI_RoomView,pos:number,propertyAry:Array<any>,index:number):void{
            this.view = fui.Game.FUI_PokerItem.createInstance();
            parent.addChildAt(this.view,(index-1));
            this.pos = pos;
            this.propertyAry = propertyAry;
            this.view.m_poker_z.visible = false;
            this.view.visible = false;
        }

        public showPoker(pokerNum:number,x:number,y:number):void{
            
            this.view.skewX = this.propertyAry[4];
            this.view.skewY = this.propertyAry[5];
            this.view.scaleX = this.propertyAry[2];
            this.view.scaleY = this.propertyAry[3];
            this.view.rotation = this.propertyAry[6];
            this.view.x = x;
            this.view.y = y;
            this.view.visible = true;
            this.view.m_poker_f.visible = true;
            this.view.m_poker_z.visible = false;
            Laya.Tween.to(this.view.m_poker_f,{scaleX:0},100,null,Laya.Handler.create(this,this.openHandler));
        }

        public upPoint(propertyAry:Array<any>,x:number,y:number):void{
            this.propertyAry = propertyAry;
            this.view.skewX = this.propertyAry[4];
            this.view.skewY = this.propertyAry[5];
            this.view.scaleX = this.propertyAry[2];
            this.view.scaleY = this.propertyAry[3];
            this.view.rotation = this.propertyAry[6];
            this.view.x = x;
            this.view.y = y;
        }

        private openHandler():void{

            this.view.m_poker_f.scaleX = 0.36;
            this.view.m_poker_f.visible = false;
            this.view.m_poker_z.visible = true;
        }
    }
}