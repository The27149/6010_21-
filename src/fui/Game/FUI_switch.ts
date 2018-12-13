/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_switch extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n2:fairygui.GImage;

		public static URL:string = "ui://8oy4o0mbd8322o";

		public static createInstance():FUI_switch {
			return <FUI_switch><any>(fairygui.UIPackage.createObject("Game","switch"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}