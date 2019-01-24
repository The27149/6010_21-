namespace point21 {
    /*
    *免转按钮模块
    */
    export class MWalletBtn extends bx.Framework {

        private view: VWalletBtn;
        constructor() {
            super();
        }


        onRegister(): void {
            super.onRegister();

            this.addNotices(point21.GConst.show_wallet_btn, point21.GConst.hide_wallet_btn, point21.GConst.set_wallet_btn,
                bx.GConst.n_login_success, bx.GConst.n_to_room_state, bx.GConst.n_to_hall_state, bx.GConst.n_screen_layout
            );
        }
        onUnregister(): void { super.onUnregister(); }
        onNotice(notice: any, data: Array<any>): void {
            super.onNotice(notice, data);

            switch (notice) {
                case point21.GConst.show_wallet_btn:
                    this.showWalletBtn();
                    break;
                case point21.GConst.hide_wallet_btn:
                    this.hideWalletBtn();
                    break;
                case point21.GConst.set_wallet_btn:
                    this.setWalletBtnPos(data[0]);
                    break;
                case bx.GConst.n_login_success:
                    this.showWalletBtn();
                    break;
                case bx.GConst.n_to_room_state:
                    this.hideWalletBtn();
                    break;
                case bx.GConst.n_to_hall_state:
                    this.showWalletBtn();
                    break;
                case bx.GConst.n_screen_layout:
                    this.layout();
                    break;
            }
        }

        private setWalletBtnPos(type: number): void {
        }

        private hideWalletBtn(): void {
            if (this.view) {
                this.view._view.offClick(this, this.onClickBtn);
                bx.Stage.getStage().layerRemoveChild(this.view);
            }
        }

        private showWalletBtn(): void {
            if (bx.GData.playerInfo.isMainWallet) {
                if (!this.view)
                    this.view = new VWalletBtn();
                bx.Stage.getStage().layerAddChild(this.view, bx.GLayer.popup - 10);
                this.layout();
                this.view._view.onClick(this, this.onClickBtn);
            }
        }

        private onClickBtn(): void {
            this.notify(bx.GConst.n_wallet_view_open_req);
        }

        private layout(): void {
            if (this.view == null) return;

            // let userAgent: string = navigator.userAgent.toLowerCase();
            // let isApp: boolean = userAgent.indexOf("browser_type/android_app") != -1;//判断是否app内
            // let isIphoneX: boolean = userAgent.indexOf("devcice_type/iphonex") != -1;//判断是否是iphoneX
            // this.view.width = this.view.ui.width = 58;
            // this.view.height = this.view.ui.height = 58;

            if (bx.Stage.getStage().isLandscape) {//横屏
                // if (isIphoneX) {
                //     this.view.marginLeft = "2%";
                //     this.view.marginTop = "20%";
                // } else {
                //     this.view.marginLeft = "2%";
                //     this.view.marginTop = "14";
                // }
                this.view.marginLeft = "2%";
                this.view.marginTop = "20%";
                // this.view.marginBottom = "90%";
            } else {
                // if (isIphoneX) {
                //     this.view.marginLeft = "2%";
                //     this.view.marginTop = "10%";
                // } else {
                this.view.marginLeft = "2%";
                this.view.marginTop = "17%";
                // }
                // this.view.marginRight = "60%";
                // this.view.marginBottom = "90%";
            }
            // this.view.x =Number(bx.Align.left)+50;
            // this.view.y =Number(bx.Align.top)-120;
            // this.view.x ="left:+50";
            // this.view.y ="top:-120";
            this.view.x = bx.Align.left;
            this.view.y = bx.Align.top;
            this.view.scaleMode = bx.ScaleMode.none;
        }
    }
}