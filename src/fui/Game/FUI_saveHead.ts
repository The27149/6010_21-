/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_saveHead extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n7:fairygui.GImage;
		public m_lang_save:fairygui.GLoader;

		public static URL:string = "ui://8oy4o0mbd83211";

		public static createInstance():FUI_saveHead {
			return <FUI_saveHead><any>(fairygui.UIPackage.createObject("Game","saveHead"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n7 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_save = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}