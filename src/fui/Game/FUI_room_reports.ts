/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_room_reports extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n3:fairygui.GImage;
		public m_lang_reports:fairygui.GLoader;

		public static URL:string = "ui://j9tv3reanpwg2y";

		public static createInstance():FUI_room_reports {
			return <FUI_room_reports><any>(fairygui.UIPackage.createObject("Game","room_reports"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_reports = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}