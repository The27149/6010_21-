/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_musicSlider_grip extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GImage;

		public static URL:string = "ui://8oy4o0mbd83230";

		public static createInstance():FUI_musicSlider_grip {
			return <FUI_musicSlider_grip><any>(fairygui.UIPackage.createObject("Game","musicSlider_grip"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}