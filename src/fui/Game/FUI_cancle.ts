/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_cancle extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n5:fairygui.GImage;
		public m_lang_cancle:fairygui.GLoader;

		public static URL:string = "ui://8oy4o0mbo4403r";

		public static createInstance():FUI_cancle {
			return <FUI_cancle><any>(fairygui.UIPackage.createObject("Game","cancle"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_cancle = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}