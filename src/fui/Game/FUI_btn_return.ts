/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_btn_return extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n3:fairygui.GImage;
		public m_lang_return:fairygui.GLoader;

		public static URL:string = "ui://8oy4o0mbo4403f";

		public static createInstance():FUI_btn_return {
			return <FUI_btn_return><any>(fairygui.UIPackage.createObject("Game","btn_return"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_return = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}