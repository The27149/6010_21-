/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_item4 extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n30:fairygui.GLoader;
		public m_lang_name:fairygui.GLoader;
		public m_n31:fairygui.GImage;
		public m_lang_base:fairygui.GTextField;
		public m_antes4:fairygui.GTextField;
		public m_lang_zhunru:fairygui.GTextField;
		public m_lowest4:fairygui.GTextField;

		public static URL:string = "ui://8oy4o0mbmtpmj";

		public static createInstance():FUI_item4 {
			return <FUI_item4><any>(fairygui.UIPackage.createObject("Game","item4"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n30 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_name = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_n31 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_lang_base = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_antes4 = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_lang_zhunru = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_lowest4 = <fairygui.GTextField><any>(this.getChildAt(6));
		}
	}
}