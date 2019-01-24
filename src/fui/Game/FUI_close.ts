/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_close extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n3:fairygui.GImage;

		public static URL:string = "ui://8oy4o0mbd83216";

		public static createInstance():FUI_close {
			return <FUI_close><any>(fairygui.UIPackage.createObject("Game","close"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}