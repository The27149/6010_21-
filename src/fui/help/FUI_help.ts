/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.help {

	export class FUI_help extends fairygui.GComponent {

		public m_n1:fairygui.GImage;
		public m_lang_title:fairygui.GLoader;
		public m_tab:fairygui.GList;
		public m_info:FUI_help_info;
		public m_close:fairygui.GButton;

		public static URL:string = "ui://txmqgqddujig4";

		public static createInstance():FUI_help {
			return <FUI_help><any>(fairygui.UIPackage.createObject("help","help"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_title = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_tab = <fairygui.GList><any>(this.getChildAt(2));
			this.m_info = <FUI_help_info><any>(this.getChildAt(3));
			this.m_close = <fairygui.GButton><any>(this.getChildAt(4));
		}
	}
}