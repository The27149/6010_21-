namespace point21{
    export class VMatch extends bx.Layout<fairygui.GComponent>{
        private _view:fui.room.FUI_match;
        private oldStr:string;
        private str:string = '';
        protected requestGS(...params: Array<any>): void { bx.Framework.notify(bx.GConst.n_gs_send, ...params); }
        constructor(){
            super('fui.room.FUI_match',"room_");
            this._view = this.ui as fui.room.FUI_match;
            this.oldStr = this._view.m_lang_word.text;
        }

        reset():void{
            Laya.timer.loop(400,this,this.wordLoop);
        }

        //文字循环动态
        wordLoop():void{
            this.str += '.';
            if(this.str == '....')this.str = '';
            this._view.m_lang_word.text = this.oldStr + this.str;
        }

        //关闭弹窗前
        beforeClose():void{
            Laya.timer.clearAll(this);
        }
    }
}