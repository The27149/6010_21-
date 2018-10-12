namespace bx{
    export class MBetBtnView extends Framework{
        private betBtnView:fui.Game.FUI_BetBtnView;
        constructor(){
            super();
        }

        public init(view:fui.Game.FUI_BetBtnView):void{
            this.betBtnView = view;
            this.initBtn();
        }

        private initBtn():void{
            this.betBtnView.m_minBet.m_url.url=GData.getCurLanguageUIUrl("zxz_btn");
            this.betBtnView.m_maxBet.m_url.url=GData.getCurLanguageUIUrl("zdz_btn");
            this.betBtnView.m_bet.m_url.url=GData.getCurLanguageUIUrl("xz_btn");
            this.betBtnView.m_goBet.m_url.url=GData.getCurLanguageUIUrl("xy_btn");
        }
    }
}