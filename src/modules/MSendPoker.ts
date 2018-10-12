namespace bx {
    export class MSendPoker extends Framework { // ignore
        private sendPoker: fui.Game.FUI_SendPoker;
        /**
         * x,y,scaleX,scaleY,skewX,rotation
         */
        private propertyAry: Array<any> = [];
        private oldProperty: Array<any> = [];
        private pokerNum: number = 0;
        private initX: number;
        private initY: number;
        private pos: number;
        private offAry_h: Array<any> = [[19, -19], [26, -13], [28, 0], [26, 11], [18, 21], [28, 0]];
        private offAry_v: Array<any> = [[19, 0], [19, 0], [19, 0], [19, 0], [19, 0], [19, 0]];
        private offAry: Array<any> = [];
        private propertyAry_h: Array<any> = [];
        private propertyAry_v: Array<any> = [];
        private pokerAry: Array<MPokerItem> = [];
        private pokerPoint:Point;
        public isSend: boolean = false;
        constructor() {
            super();
        }

        /** 布局 */
        public layout(): void {
            if (!this.sendPoker) {
                return;
            }
            this.setPoint();
            this.upPokerPoint();
        }

        private setPoint(): void {
            this.propertyAry = bx.Stage.getStage().isLandscape ? this.propertyAry_h : this.propertyAry_v;
            this.offAry = bx.Stage.getStage().isLandscape ? this.offAry_h : this.offAry_v;
            this.initX = bx.Stage.getStage().isLandscape ? this.propertyAry_h[0] : this.propertyAry_v[0];
            this.initY = bx.Stage.getStage().isLandscape ? this.propertyAry_h[1] : this.propertyAry_v[1];
            this.oldProperty = [this.sendPoker.x, this.sendPoker.y, this.sendPoker.scaleX, this.sendPoker.scaleY, this.sendPoker.skewX, this.sendPoker.skewY, this.sendPoker.rotation];
        }

        private setOldPoint(): void {
            this.sendPoker.skewX = this.oldProperty[4];
            this.sendPoker.skewY = this.oldProperty[5];
            this.sendPoker.scaleX = this.oldProperty[2];
            this.sendPoker.scaleY = this.oldProperty[3];
            this.sendPoker.rotation = this.oldProperty[6];
            this.sendPoker.x = this.oldProperty[0];
            this.sendPoker.y = this.oldProperty[1];
        }

        public init(view: fui.Game.FUI_SendPoker, pos: number, propertyAry_h: Array<any>, propertyAry_v: Array<any>): void {
            this.sendPoker = view;
            this.pos = pos;
            this.pokerPoint = new Point();
            this.propertyAry_h = propertyAry_h;
            this.propertyAry_v = propertyAry_v;
            this.setPoint();

        }

        public startSendPoker(): void {
            this.sendPoker.visible = true;
            this.pokerPoint.x = this.initX + this.pokerNum * this.offAry[this.pos][0];
            this.pokerPoint.y = this.initY + this.pokerNum * this.offAry[this.pos][1];
            Laya.Tween.to(this.sendPoker, { x: this.pokerPoint.x, y: this.pokerPoint.y, scaleX: this.propertyAry[2], scaleY: this.propertyAry[3], rotation: this.propertyAry[6] }, 300, null, Laya.Handler.create(this, this.onSendComplete,[this.pokerNum]));
        }

        private onSendComplete(num:number): void {
            this.isSend = true;
            this.sendPoker.visible = false;
            this.setOldPoint();
            this.pokerPoint.x = this.initX + num * this.offAry[this.pos][0];
            this.pokerPoint.y = this.initY + num * this.offAry[this.pos][1];
            var item: MPokerItem = new MPokerItem();
            item.init(this.sendPoker.parent as fui.Game.FUI_RoomView, this.pos, this.propertyAry, this.sendPoker.parent.getChildIndex(this.sendPoker));
            item.showPoker(this.pokerNum,this.pokerPoint.x,this.pokerPoint.y);
            this.pokerAry.push(item);
            this.pokerNum++;
        }

        private upPokerPoint(): void {
            this.setOldPoint();
            for (var i: number = 0; i < this.pokerAry.length; i++) {
                this.pokerPoint.x = this.initX + i * this.offAry[this.pos][0];
                this.pokerPoint.y = this.initY + i * this.offAry[this.pos][1];
                this.pokerAry[i].upPoint(this.propertyAry,this.pokerPoint.x,this.pokerPoint.y);
            }
        }
    }
}