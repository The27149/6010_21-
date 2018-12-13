/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.help {

	export class FUI_help_tab extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n6:fairygui.GImage;
		public m_n7:fairygui.GImage;
		public m_lang_tab:fairygui.GLoader;

		public static URL:string = "ui://txmqgqddujig5";

		public static createInstance():FUI_help_tab {
			return <FUI_help_tab><any>(fairygui.UIPackage.createObject("help","help_tab"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n7 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_lang_tab = <fairygui.GLoader><any>(this.getChildAt(2));
		}
	}
}