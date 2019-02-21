namespace point21{
    export class VStrategyBtn extends bx.Layout<fairygui.GComponent>{
        private _view:fui.room.FUI_strategyBtn;
        constructor(){
            super('fui.room.FUI_strategyBtn',"room_");
            this._view = this.ui as fui.room.FUI_strategyBtn;
            this._view && this._view.m_n0.onClick(this,function(){
                bx.Framework.notify(point21.GConst.n_openStrategy);
            })
        }
    }
}