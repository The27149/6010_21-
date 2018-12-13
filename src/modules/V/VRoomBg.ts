namespace point21{
    export class VRoomBg extends bx.Layout<fairygui.GComponent>{
        public _view:fui.room.FUI_roomBg;
        constructor(){
            super('fui.room.FUI_roomBg');
            this._view = this.ui as fui.room.FUI_roomBg;
        }
    }
}