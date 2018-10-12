/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_Btn_confirm extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n1:fairygui.GLoader;
		public m_lang_readBtn:fairygui.GLoader;

		public static URL:string = "ui://93n3k04qbzm7b";

		public static createInstance():FUI_Btn_confirm {
			return <FUI_Btn_confirm><any>(fairygui.UIPackage.createObject("reports","Btn_confirm"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n1 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_readBtn = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}