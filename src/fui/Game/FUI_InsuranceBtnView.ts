/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_InsuranceBtnView extends fairygui.GComponent {

		public m_noBtn:FUI_Button7;
		public m_yesBtn:FUI_Button8;

		public static URL:string = "ui://j9tv3reanur69u";

		public static createInstance():FUI_InsuranceBtnView {
			return <FUI_InsuranceBtnView><any>(fairygui.UIPackage.createObject("Game","InsuranceBtnView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_noBtn = <FUI_Button7><any>(this.getChildAt(0));
			this.m_yesBtn = <FUI_Button8><any>(this.getChildAt(1));
		}
	}
}