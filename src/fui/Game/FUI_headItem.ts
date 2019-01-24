/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_headItem extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n2:fairygui.GImage;
		public m_head:fairygui.GLoader;
		public m_n3:fairygui.GImage;

		public static URL:string = "ui://8oy4o0mbd83213";

		public static createInstance():FUI_headItem {
			return <FUI_headItem><any>(fairygui.UIPackage.createObject("Game","headItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_head = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(2));
		}
	}
}