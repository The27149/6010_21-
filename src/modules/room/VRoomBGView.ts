namespace bx {
    /**
     * 房间BG项显示对象
     * @author wx771720[outlook.com]
     */
    export class VRoomBGView extends Layout<fairygui.GComponent> {
        public view:fui.Game.FUI_RoomBGView;

        constructor() {
            
            super("fui.Game.FUI_RoomBGView");
            
        }

        initView(view:fui.Game.FUI_RoomBGView):void{
            this.view = view;
        }
        
    }
}