namespace bx{
    export class MPokerBtnView extends Framework{
        private pokerBtnView:fui.Game.FUI_PokerBtnView;
        constructor(){
            super();
        }

        public init(view:fui.Game.FUI_PokerBtnView):void{
            this.pokerBtnView = view;
            this.initBtn();
        }

        private initBtn():void{
            this.pokerBtnView.m_stopBtn.m_url.url=GData.getCurLanguageUIUrl("tp_btn");
            this.pokerBtnView.m_getBtn.m_url.url=GData.getCurLanguageUIUrl("yp_btn");
            this.pokerBtnView.m_partBtn.m_url.url=GData.getCurLanguageUIUrl("fp_btn");
            this.pokerBtnView.m_doubleBtn.m_url.url=GData.getCurLanguageUIUrl("sb_btn");
        }
    }
}