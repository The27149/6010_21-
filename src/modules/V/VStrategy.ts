namespace point21{
    export class VStrategy extends bx.Layout<fairygui.GComponent>{
        private _view:fui.room.FUI_strategy;
        constructor(){
            super('fui.room.FUI_strategy','room_dt');
            this._view = this.ui as fui.room.FUI_strategy;
            this._view.m_close.onClick(this,function(){
                bx.UIManager.closePopup(this);
            });
        }
    }
}