
namespace point21 {
    /**
     * 简要显示对象
     * @author Zane
     */
    export class VWalletBtn extends bx.Layout<fairygui.GComponent> {
        public _view:fui.Game.FUI_AddWalletBtn;
        constructor() {
            super("fui.Game.FUI_AddWalletBtn");
            this._view= this.ui as fui.Game.FUI_AddWalletBtn;
        }
    }
}