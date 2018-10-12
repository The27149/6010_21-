/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_SliderMusic_grip extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GImage;

		public static URL:string = "ui://j9tv3rean5qo7w";

		public static createInstance():FUI_SliderMusic_grip {
			return <FUI_SliderMusic_grip><any>(fairygui.UIPackage.createObject("Game","SliderMusic_grip"));
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