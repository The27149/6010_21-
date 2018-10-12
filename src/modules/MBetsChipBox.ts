namespace bx{
    export class MBetsChipBox extends Framework{

        private view:fui.Game.FUI_BetsChipBox;
        constructor(){
            super();
        }

        public init(view:fui.Game.FUI_BetsChipBox):void{

            this.view = view;
        }
    }
}