/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_divideCard extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n6:fairygui.GImage;
		public m_lang_fp:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl3q";

		public static createInstance():FUI_divideCard {
			return <FUI_divideCard><any>(fairygui.UIPackage.createObject("room","divideCard"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_fp = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}