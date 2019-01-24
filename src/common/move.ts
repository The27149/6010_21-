namespace Tools {

    /**动作选项
     * @param target 动作对象
     * @param start 开始位置（节点或者位置）
     * @param end 结束位置
     * @param duration 动作时间 单位：ms
     * @param props 其他属性对象
     * @param ease 缓动函数，默认匀速
     * @param complete 动作结束回调
     * @param delay 延迟动作
     * @param cover 是否覆盖之前动作
     */
    export interface MoveOption {
        target: fairygui.GObject;
        start: fairygui.GObject | Laya.Point;
        end: fairygui.GObject | Laya.Point;
        duration: number;
        props: any;
        ease?: Function;
        complete?: Function;
        delay?: number;
        cover?: boolean;
    }
    export class Move {
        private _tween: number;
        public target: fairygui.GObject;
        public start: fairygui.GObject | Laya.Point;
        public end: fairygui.GObject | Laya.Point;
        public duration: number;
        public props: any = null;
        public ease: Function = Laya.Ease.linearNone;
        public complete: Function = null;
        public delay: number = 0;
        public cover: boolean = true;

        private startPoint_g: Laya.Point;
        private startPoint: Laya.Point;
        private endPoint_g: Laya.Point;
        private endPoint: Laya.Point;
        private actionType: string = 'line';
        private ctlPoint = new Laya.Point;
        /**
         * @param option 动作选项
         */
        constructor(option: MoveOption) {
            if (option) {
                this.target = option.target || new fairygui.GObject;
                this.start = option.start || new Laya.Point();
                this.end = option.end || new Laya.Point();
                this.duration = option.duration || 300;
                this.props = option.props || null;
                this.ease = option.ease || Laya.Ease.linearNone;
                this.complete = option.complete || null;
                this.delay = option.delay || 0;
                this.cover = option.cover || true;
            }
        };

        get tween(): number {
            return this._tween;
        }

        set tween(v: number) {
            if (v != this._tween) {
                this._tween = v;
                let start, end;
                for (let name in this.props) {
                    start = this.props[name][0];
                    end = this.props[name][1];
                    if (name == 'skewX') {
                        this.target.displayObject[name] = -(start + v * (end - start));
                    } else if (name == 'skewY') {
                        this.target.displayObject[name] = start + v * (end - start);
                    } else {
                        this.target[name] = start + v * (end - start);
                    }
                }
                if(this.actionType == 'bezier2'){
                    this.target.x = Math.pow(1 - v, 2) * this.startPoint.x + 2 * v * (1 - v) * this.ctlPoint.x + Math.pow(v, 2) * this.endPoint.x;
                    this.target.y = Math.pow(1 - v, 2) * this.startPoint.y + 2 * v * (1 - v) * this.ctlPoint.y + Math.pow(v, 2) * this.endPoint.y;
                }else{
                    this.target.x = v * (this.endPoint.x - this.startPoint.x) + this.startPoint.x;
                    this.target.y = v * (this.endPoint.y - this.startPoint.y) + this.startPoint.y;
                }
            }
        }

        //计算初始位置和结束位置
        calculateStartAndEnd():void{
            if (this.end instanceof fairygui.GObject) {
                this.endPoint_g = this.end.localToGlobal();
                this.endPoint = this.target.parent.globalToLocal(this.endPoint_g.x, this.endPoint_g.y);
            } else if (this.end instanceof Laya.Point) {
                this.endPoint = this.end;
            }

            if (this.start instanceof fairygui.GObject) {
                this.startPoint_g = this.start.localToGlobal();
                this.startPoint = this.target.parent.globalToLocal(this.startPoint_g.x, this.startPoint_g.y);
            } else if (this.start instanceof Laya.Point) {
                this.startPoint = this.start;
            }
        }


        /**
         * 开始移动
         */
        move(): void {
            this.calculateStartAndEnd();
            this.actionType = 'line';
            this.tween = 0;
            Laya.Tween.to(this, { 'tween': 1 }, this.duration, this.ease, null, this.delay, this.cover);
            Laya.timer.once(this.duration + this.delay, this, this._complete);
        }
        /**
         * 此动作反向移动
        */
        moveReverse(): void {
            this.calculateStartAndEnd();
            this.tween = 0;
                Laya.Tween.from(this, { 'tween': 1 }, this.duration, Laya.Ease.linearNone, null, this.delay, this.cover);
                Laya.timer.once(this.duration + this.delay, this, this._completeReverse);
        }

        private _complete(): void {
            this.props = null;
            this.complete && this.complete();
        }

        private _completeReverse(): void {
            this.props = null;
            this.complete && this.complete();
        }

        //二次贝塞尔曲线运动
        moveByBezier2(ctl_x: number,ctl_y: number):void{
            this.calculateStartAndEnd();
            this.actionType = 'bezier2';
            this.ctlPoint.x = ctl_x * (this.endPoint.x - this.startPoint.x) + this.startPoint.x;
            this.ctlPoint.y = ctl_y * (this.endPoint.y - this.startPoint.y) + this.endPoint.y;
            this.tween = 0;
            Laya.Tween.to(this, { 'tween': 1 }, this.duration, Laya.Ease.linearNone, null, this.delay, this.cover);
            Laya.timer.once(this.duration + this.delay, this, this._completeBezier2);
        }

        private _completeBezier2():void{
            this.props = null;
            this.complete && this.complete();
        }

    }
}