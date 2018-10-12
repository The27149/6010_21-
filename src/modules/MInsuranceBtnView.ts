namespace bx{
    export class MInsuranceBtnView extends Framework{
        private insuranceBtnView:fui.Game.FUI_InsuranceBtnView;
        constructor(){
            super();
        }

        public init(view:fui.Game.FUI_InsuranceBtnView):void{
            this.insuranceBtnView = view;
            this.initBtn();
        }

        private initBtn():void{
            this.insuranceBtnView.m_noBtn.m_url.url=GData.getCurLanguageUIUrl("bm_btn");
            this.insuranceBtnView.m_yesBtn.m_url.url=GData.getCurLanguageUIUrl("mbx_btn");
           
        }
    }
}