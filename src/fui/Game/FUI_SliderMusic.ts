/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_SliderMusic extends fairygui.GSlider {

		public m_n0:fairygui.GImage;
		public m_bar:fairygui.GImage;
		public m_grip:FUI_SliderMusic_grip;

		public static URL:string = "ui://j9tv3rean5qo7x";

		public static createInstance():FUI_SliderMusic {
			return <FUI_SliderMusic><any>(fairygui.UIPackage.createObject("Game","SliderMusic"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_bar = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_grip = <FUI_SliderMusic_grip><any>(this.getChildAt(2));
		}
	}
}