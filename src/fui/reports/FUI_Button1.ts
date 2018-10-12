/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_Button1 extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n2:fairygui.GImage;
		public m_lang_icon:fairygui.GLoader;

		public static URL:string = "ui://93n3k04qbzm7z";

		public static createInstance():FUI_Button1 {
			return <FUI_Button1><any>(fairygui.UIPackage.createObject("reports","Button1"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_icon = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}