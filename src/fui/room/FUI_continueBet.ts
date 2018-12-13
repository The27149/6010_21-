/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_continueBet extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_contentCtl:fairygui.Controller;
		public m_n6:fairygui.GImage;
		public m_lang_xy:fairygui.GLoader;
		public m_lang_betOver:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl3n";

		public static createInstance():FUI_continueBet {
			return <FUI_continueBet><any>(fairygui.UIPackage.createObject("room","continueBet"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_contentCtl = this.getControllerAt(1);
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_xy = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_lang_betOver = <fairygui.GLoader><any>(this.getChildAt(2));
		}
	}
}