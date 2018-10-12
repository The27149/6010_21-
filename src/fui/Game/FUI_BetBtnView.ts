/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_BetBtnView extends fairygui.GComponent {

		public m_maxBet:FUI_Button6;
		public m_bet:FUI_Button7;
		public m_goBet:FUI_Button8;
		public m_minBet:FUI_Button5;

		public static URL:string = "ui://j9tv3reakiid9o";

		public static createInstance():FUI_BetBtnView {
			return <FUI_BetBtnView><any>(fairygui.UIPackage.createObject("Game","BetBtnView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_maxBet = <FUI_Button6><any>(this.getChildAt(0));
			this.m_bet = <FUI_Button7><any>(this.getChildAt(1));
			this.m_goBet = <FUI_Button8><any>(this.getChildAt(2));
			this.m_minBet = <FUI_Button5><any>(this.getChildAt(3));
		}
	}
}