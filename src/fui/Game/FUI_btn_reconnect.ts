/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_btn_reconnect extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n3:fairygui.GLoader;
		public m_lang_reconnect:fairygui.GLoader;

		public static URL:string = "ui://8oy4o0mbo4403d";

		public static createInstance():FUI_btn_reconnect {
			return <FUI_btn_reconnect><any>(fairygui.UIPackage.createObject("Game","btn_reconnect"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n3 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_reconnect = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}