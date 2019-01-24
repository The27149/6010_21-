/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_double extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n6:fairygui.GImage;
		public m_lang_sb:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl3r";

		public static createInstance():FUI_double {
			return <FUI_double><any>(fairygui.UIPackage.createObject("room","double"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_sb = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}