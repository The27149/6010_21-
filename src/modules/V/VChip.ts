namespace point21{
    export class VChip extends bx.Layout<fairygui.GComponent>{
        private _view:fui.room.FUI_chip;
        constructor(v:number){
            super('fui.room.FUI_chip');
            this._view = this.ui as fui.room.FUI_chip;
            this._view.m_img.url = Utils.getChipImg(v);
        }       
    }
}