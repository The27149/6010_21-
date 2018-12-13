/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_reconnect extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_lang_title:fairygui.GLoader;
		public m_tips:fairygui.GTextField;
		public m_reconnect:FUI_btn_reconnect;
		public m_return:FUI_btn_return;

		public static URL:string = "ui://8oy4o0mbo4403b";

		public static createInstance():FUI_reconnect {
			return <FUI_reconnect><any>(fairygui.UIPackage.createObject("Game","reconnect"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_title = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_tips = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_reconnect = <FUI_btn_reconnect><any>(this.getChildAt(3));
			this.m_return = <FUI_btn_return><any>(this.getChildAt(4));
		}
	}
}