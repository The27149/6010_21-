/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_bet extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_contentCtl:fairygui.Controller;
		public m_n6:fairygui.GImage;
		public m_lang_xz:fairygui.GLoader;
		public m_lang_sure:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl3m";

		public static createInstance():FUI_bet {
			return <FUI_bet><any>(fairygui.UIPackage.createObject("room","bet"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_contentCtl = this.getControllerAt(1);
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_xz = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_lang_sure = <fairygui.GLoader><any>(this.getChildAt(2));
		}
	}
}