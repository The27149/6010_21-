namespace xys {
    export class MGM extends bx.Framework {
        private view: VGM = null;
        private roomType = 0;
        constructor() {
            super();
            this.view = new VGM();
            this.bindEvent();
        }

        @bx.$singleton("bx.Stage")
        stage: bx.Stage;

        onRegister(): void {
            super.onRegister();
            this.addNotices(bx.GConst.n_screen_layout, bx.GConst.n_click_gm_btn, protos.CCMD.gmResp);
        }

        onUnregister(): void {
            super.onUnregister();
        }

        onNotice(notice: any, data: Array<any>): void {
            super.onNotice(notice, data);
            switch (notice) {
                case bx.GConst.n_screen_layout:
                    this.layout();
                    break;
                case bx.GConst.n_click_gm_btn:
                    this.show();
                    break;
                case protos.CCMD.gmResp:
                    this.submit_resp(data[0]);
                    break;
            }
        }


        /**
         * 显示
        */
        show(): void {
            if (!bx.MSubLoad.hasLoaded(bx.FRoom.RES_NAME)) {
                this.notify(bx.GConst.n_to_room_state);
            }
            this.view.reset();
            this.stage.layerAddChild(this.view, bx.GLayer.popup);
            this.layout();
        }

        /**
         * 隐藏
        */
        hide(): void {
            this.stage.layerRemoveChild(this.view);
        }

        /**
         * 事件绑定
        */
        bindEvent(): void {
            this.view.btn_close.onClick(this, this.hide);
            this.view.btn_submit.onClick(this, this.submit_req);
        }

        /**
         * 提交_请求
        */
        submit_req(): void {
            let roomType: number = this.view.getRoomType(),
                playerNumb: number = this.view.getPlayerNumb(),
                cards: protos.gmCardsList[] = this.view.getCards();
            let req: protos.gmReq = <protos.gmReq>{};
            req.roomType = roomType;
            req.playerNum = playerNumb;
            req.cardsList = cards;
            this.requestGS(protos.CCMD.gmReq, req);
            this.roomType = roomType;
        }

        /**
         * 提交_响应
        */
        submit_resp(res: protos.gmResp): void {
            if (res.result == 1) {
                this.hide();
                this.notify(bx.GConst.n_to_room_state);
                this.notify(bx.GConst.n_room_items_click,this.roomType);
            } else {
                alert('提交失败！')
            }
        }

        layout(): void {
            this.view.x = bx.Align.center;
            this.view.y = bx.Align.middle;
            this.view.marginTop = "15%";
            this.view.marginBottom = "15%";
            this.view.marginLeft = "10%";
            this.view.marginRight = "10%";
            this.view.scaleMode = bx.ScaleMode.show_all;
        }
    }
}