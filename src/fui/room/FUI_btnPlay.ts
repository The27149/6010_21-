/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_btnPlay extends fairygui.GComponent {

		public m_btnCtl:fairygui.Controller;
		public m_h_v:fairygui.Controller;
		public m_betSlider:FUI_sider_bet;
		public m_minBet:FUI_minBet;
		public m_maxBet:FUI_maxBet;
		public m_bet:FUI_bet;
		public m_continueBet:FUI_continueBet;
		public m_stopCard:FUI_stopCard;
		public m_needCard:FUI_needCard;
		public m_divideCard:FUI_divideCard;
		public m_double:FUI_double;
		public m_continueGame:FUI_continueGame;
		public m_insuranceNot:FUI_InsuranceNot;
		public m_insurance:FUI_Insurance;

		public static URL:string = "ui://2mffi74ewuvl3u";

		public static createInstance():FUI_btnPlay {
			return <FUI_btnPlay><any>(fairygui.UIPackage.createObject("room","btnPlay"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btnCtl = this.getControllerAt(0);
			this.m_h_v = this.getControllerAt(1);
			this.m_betSlider = <FUI_sider_bet><any>(this.getChildAt(0));
			this.m_minBet = <FUI_minBet><any>(this.getChildAt(1));
			this.m_maxBet = <FUI_maxBet><any>(this.getChildAt(2));
			this.m_bet = <FUI_bet><any>(this.getChildAt(3));
			this.m_continueBet = <FUI_continueBet><any>(this.getChildAt(4));
			this.m_stopCard = <FUI_stopCard><any>(this.getChildAt(5));
			this.m_needCard = <FUI_needCard><any>(this.getChildAt(6));
			this.m_divideCard = <FUI_divideCard><any>(this.getChildAt(7));
			this.m_double = <FUI_double><any>(this.getChildAt(8));
			this.m_continueGame = <FUI_continueGame><any>(this.getChildAt(9));
			this.m_insuranceNot = <FUI_InsuranceNot><any>(this.getChildAt(10));
			this.m_insurance = <FUI_Insurance><any>(this.getChildAt(11));
		}
	}
}