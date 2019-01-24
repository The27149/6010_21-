/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_hall_sound extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n1:fairygui.GImage;

		public static URL:string = "ui://8oy4o0mbd83228";

		public static createInstance():FUI_hall_sound {
			return <FUI_hall_sound><any>(fairygui.UIPackage.createObject("Game","hall_sound"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}