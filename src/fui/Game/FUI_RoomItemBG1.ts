/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_RoomItemBG1 extends fairygui.GComponent {

		public m_n10:fairygui.GImage;
		public m_lowest1:fairygui.GTextField;
		public m_lang_zr:fairygui.GTextField;
		public m_antes1:fairygui.GTextField;
		public m_lang_dz:fairygui.GTextField;
		public m_n14:fairygui.GImage;

		public static URL:string = "ui://j9tv3reanpwg5v";

		public static createInstance():FUI_RoomItemBG1 {
			return <FUI_RoomItemBG1><any>(fairygui.UIPackage.createObject("Game","RoomItemBG1"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n10 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lowest1 = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_lang_zr = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_antes1 = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_lang_dz = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_n14 = <fairygui.GImage><any>(this.getChildAt(5));
		}
	}
}