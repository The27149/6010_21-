/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_room_home extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n3:fairygui.GImage;
		public m_lang_home:fairygui.GLoader;

		public static URL:string = "ui://j9tv3reanpwg2w";

		public static createInstance():FUI_room_home {
			return <FUI_room_home><any>(fairygui.UIPackage.createObject("Game","room_home"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_home = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}