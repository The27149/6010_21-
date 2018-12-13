namespace point21{
    export class VChip extends bx.Layout<fairygui.GComponent>{
        private _view:fui.room.FUI_chip;
        constructor(v:number){
            super('fui.room.FUI_chip');
            this._view = this.ui as fui.room.FUI_chip;

            enum name{
                c1 = 100,
                c2 = 200
            }
            this._view.m_img.url = 'ui://room/' + name[v];
        }       
    }
}