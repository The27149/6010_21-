namespace point21{
    export class VBtnPlay{
        public _view:fui.room.FUI_btnPlay;

        
        private mouseRange:number;              //按下时获取的鼠标与滑块距离差
        private range:number;                   //滑块可变动距离范围
        private gripY_min:number;               //滑块y坐标最小值 （最顶端）
        private gripy_max:number;               //滑块y坐标最大值 （最底端）
        private bet_max:number;                 //最大注
        private bet_min:number;                 //最小注

        public betValue:number;                //当前下注值

        constructor(v:fui.room.FUI_btnPlay){
            this._view = v;

            let bg = this._view.m_betSlider.m_bg;
            this.range = bg.height;
            this.gripY_min = bg.y;
            this.gripy_max = bg.y + this.range;
        }

        //得到最大注 最小注
        setBaseBet(max,min):void{
            this.bet_max = max;
            this.bet_min = min;
        }

        //隐藏
        hide():void{
            this._view.visible = false;
        }

        //显示(0:下注块  1：要牌块  2：保险块  3：继续游戏)
        show(index:number):void{
            this._view.visible = true;
            this._view.m_btnCtl.selectedIndex = index;
            for(let i = 0;i < this._view.numChildren;i++){
                this._view.getChildAt(i).enabled = true;
            }
            if(index === 0){
                this._view.m_maxBet.m_value.text = '(' + this.bet_max + ')';
                this._view.m_minBet.m_value.text = '(' + this.bet_min + ')';
            }
        }

        //某个按钮变灰(下注组和要牌组共8个)
        btnUnable(name:string):void{
            let target:fairygui.GButton = this._view['m_' + name];
            if(target){
                target.enabled = false;
            }
        }

        //变灰的按钮恢复
        btnEnable(name:string):void{
            let target:fairygui.GButton = this._view['m_' + name];
            if(target){
                target.enabled = true;
            }
        }

        //是否设置为显示滑动条
        setSliderVisible(state:boolean):void{
            this._view.m_betSlider.visible = state;
            this._view.m_bet.m_contentCtl.selectedIndex = state ? 1 : 0;
        }

        //按下时鼠标与滑块的坐标差距
        getMouseRange():void{
            let grip = this._view.m_betSlider.m_grip;
            let p:Laya.Point = grip.parent.globalToLocal(0,Laya.MouseManager.instance.mouseY);
            let gripY = grip.y;
            this.mouseRange = p.y - gripY;
        }

        //移动时更改下注值
        setSliderOnBet():void{
            let grip = this._view.m_betSlider.m_grip;
            let p: Laya.Point = grip.parent.globalToLocal(0,Laya.MouseManager.instance.mouseY);
            let currentY = p.y - this.mouseRange;
            this.setGripY(currentY);
        }

        //设置滑块坐标
        setGripY(v:number):void{
            let grip = this._view.m_betSlider.m_grip;
            let rate, betNumber;
            if(v >= this.gripy_max){
                grip.y = this.gripy_max;
                this.setCurrentChip(this.bet_min);
            }else if(v <= this.gripY_min){
                grip.y = this.gripY_min;
                this.setCurrentChip(this.bet_max);
            }else{
                grip.y = v;
                rate = 1 - (v - this.gripY_min) / this.range;
                betNumber = Math.round(rate * (this.bet_max - this.bet_min) + this.bet_min);
                this.setCurrentChip(betNumber);
                this.betValue = betNumber;
            }
        }

        //设置当前筹码显示值
        setCurrentChip(v:number):void{
            this._view.m_betSlider.m_title.m_value.text = v.toString();
        }

        //点击slider背景时
        onClickSlider():void{
            let mouse = Laya.MouseManager.instance;
            let point = this._view.m_betSlider.globalToLocal(mouse.mouseX,mouse.mouseY);
            this.setGripY(point.y);
        }

        //设置最大注/最小注 1:最大  0: 最小
        setMaxOrMin(v:number){
            if(v === 1){
                this.setGripY(this.gripY_min);
            }else{
                this.setGripY(this.gripy_max);
            }
        }

        //设置续压按钮的显示内容 content 0:续压  1 下注完成
        setContinueBetContent(content:number):void{
            this._view.m_continueBet.m_contentCtl.selectedIndex = content;
        }

    }
}