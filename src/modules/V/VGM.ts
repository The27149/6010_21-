namespace xys {
    export class VGM extends bx.Layout<fairygui.GObject>{
        private _view:fui.Game.FUI_gm;
        public btn_close:fui.Game.FUI_close;
        public btn_submit:fui.Game.FUI_gmSubmit;
        private activeId:number;
        private activeNumb:number;
        constructor(){
            super('fui.Game.FUI_gm');
            this._view = this.ui as fui.Game.FUI_gm;
            this.btn_close = this._view.m_close;
            this.btn_submit = this._view.m_submit;
            this.bindEvent();
        }

        reset():void{
            this._view.m_keys.visible = false;
        }

        bindEvent():void{
            let list = this._view.m_keys;
            for(let i = 0; i < list.numChildren; i++){
                list.getChildAt(i).onClick(this,this.clickCard,[i])
            }

            for(let j = 0; j < 6; j++){
                (this._view['m_cards_' + j].m_set as fui.Game.FUI_set).onClick(this,this.clickSet,[j]);
            }
        }

        //点击设置
        clickSet(id:number):void{
            this.activeId = id;
            this.activeNumb = 1;
            this._view.m_keys.visible = true;
        }

        //点击牌面
        clickCard(index:number):void{
            let key = this._view.m_keys.getChildAt(index) as fairygui.GTextField;
            let txt = key.text;
            let data = key.data;
            let target:fairygui.GTextInput = this._view['m_cards_' + this.activeId]['m_card' + this.activeNumb];
            if(target){
                target.text = txt;
                target.data = data;
                if((data > 16 && data < 30) || (data > 48 && data < 62)){
                    target.color = '#FF0000';
                }else{
                    target.color = '#000000';
                }
                this.activeNumb++;
                if(this.activeNumb > 5) {
                    this.activeNumb = 1;
                    this._view.m_keys.visible = false;
                }
            }
        }


        /**
         * 获取人数
        */
        getPlayerNumb():number{
            return Number(this._view.m_playerNumb.text);
        }

        /**
         * 获取房间类型
        */
        getRoomType():number{
            return Number(this._view.m_roomType.text);
        }
        
        /**
         * 获取所有牌
        */
        getCards():protos.gmCardsList[]{
            let list:protos.gmCardsList[] = [];
            for(let i = 0; i < 6; i++){
                let cards:fui.Game.FUI_player = this._view['m_cards_' + i];
                let item = <protos.gmCardsList>{};
                item.pos = i;
                item.cards = [];
                for(let j = 0; j < cards.numChildren; j++){
                    let value = Number(cards.getChildAt(j).data);
                    if(value > 16 && value < 78){
                        item.cards.push(value);
                    }
                }
                list.push(item);
            }
            return list;
        }
    }
}