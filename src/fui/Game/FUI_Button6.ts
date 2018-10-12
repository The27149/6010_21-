/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_Button6 extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_url:fairygui.GLoader;

		public static URL:string = "ui://j9tv3reakiid9p";

		public static createInstance():FUI_Button6 {
			return <FUI_Button6><any>(fairygui.UIPackage.createObject("Game","Button6"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_url = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}