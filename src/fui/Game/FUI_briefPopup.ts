/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_briefPopup extends fairygui.GComponent {

		public m_n10:fairygui.GLoader;
		public m_lang_head:fairygui.GLoader;
		public m_lang_des:fairygui.GLoader;
		public m_btnSave:FUI_saveHead;
		public m_headList:fairygui.GList;
		public m_close:FUI_close;
		public m_current:fairygui.GLoader;

		public static URL:string = "ui://8oy4o0mbd832w";

		public static createInstance():FUI_briefPopup {
			return <FUI_briefPopup><any>(fairygui.UIPackage.createObject("Game","briefPopup"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n10 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_head = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_lang_des = <fairygui.GLoader><any>(this.getChildAt(2));
			this.m_btnSave = <FUI_saveHead><any>(this.getChildAt(3));
			this.m_headList = <fairygui.GList><any>(this.getChildAt(4));
			this.m_close = <FUI_close><any>(this.getChildAt(5));
			this.m_current = <fairygui.GLoader><any>(this.getChildAt(6));
		}
	}
}