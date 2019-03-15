
namespace point21{
    export class MStrategy extends bx.Framework{
        constructor(){
            super();
        }

        @bx.$singleton("bx.Stage")
        stage: bx.Stage;

        private strategyView: VStrategy;

        onRegister(): void {
            super.onRegister();
            this.addNotices(point21.GConst.n_openStrategy, bx.GConst.n_screen_layout);
        }
        onUnregister(): void { super.onUnregister(); }
        onNotice(notice: any, data: Array<any>): void {
            super.onNotice(notice, data);
            switch (notice) {
                case GConst.n_openStrategy:
                    this.onShow();
                    break;
                case bx.GConst.n_screen_layout:
                    this.layout();
                    break;
            }
        }

        onShow():void{
            if(!this.strategyView){
                this.strategyView = new VStrategy();
            }
            bx.UIManager.popup(this.strategyView,true);
            this.layout();
        }

        onHide():void{
            bx.UIManager.closePopup(this.strategyView);
        }

        onClickClose():void{
            this.onHide();
        }

        layout():void{
            if(!this.strategyView) return;
            this.strategyView.scaleMode = bx.ScaleMode.show_all;
            this.strategyView.x = bx.Align.center;
            this.strategyView.y = bx.Align.middle;
        }
    }
}