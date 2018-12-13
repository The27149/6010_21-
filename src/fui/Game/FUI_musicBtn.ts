/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_musicBtn extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n3:fairygui.GImage;
		public m_n4:fairygui.GImage;

		public static URL:string = "ui://8oy4o0mbd83232";

		public static createInstance():FUI_musicBtn {
			return <FUI_musicBtn><any>(fairygui.UIPackage.createObject("Game","musicBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n4 = <fairygui.GImage><any>(this.getChildAt(1));
		}
	}
}