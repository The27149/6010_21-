/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_musicSlider extends fairygui.GSlider {

		public m_n0:fairygui.GImage;
		public m_bar:fairygui.GImage;
		public m_grip:FUI_musicSlider_grip;

		public static URL:string = "ui://8oy4o0mbd8322x";

		public static createInstance():FUI_musicSlider {
			return <FUI_musicSlider><any>(fairygui.UIPackage.createObject("Game","musicSlider"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_bar = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_grip = <FUI_musicSlider_grip><any>(this.getChildAt(2));
		}
	}
}