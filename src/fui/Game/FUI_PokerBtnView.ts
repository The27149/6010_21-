/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_PokerBtnView extends fairygui.GComponent {

		public m_getBtn:FUI_Button6;
		public m_partBtn:FUI_Button7;
		public m_doubleBtn:FUI_Button8;
		public m_stopBtn:FUI_Button5;

		public static URL:string = "ui://j9tv3reakiid9t";

		public static createInstance():FUI_PokerBtnView {
			return <FUI_PokerBtnView><any>(fairygui.UIPackage.createObject("Game","PokerBtnView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_getBtn = <FUI_Button6><any>(this.getChildAt(0));
			this.m_partBtn = <FUI_Button7><any>(this.getChildAt(1));
			this.m_doubleBtn = <FUI_Button8><any>(this.getChildAt(2));
			this.m_stopBtn = <FUI_Button5><any>(this.getChildAt(3));
		}
	}
}