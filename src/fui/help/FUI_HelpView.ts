/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.help {

	export class FUI_HelpView extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_lang_title:fairygui.GLoader;
		public m_itemContent:FUI_ShowList;
		public m_closeBtn:FUI_CloseBtn;

		public static URL:string = "ui://fzzpxcn5n5qo3";

		public static createInstance():FUI_HelpView {
			return <FUI_HelpView><any>(fairygui.UIPackage.createObject("help","HelpView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_title = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_itemContent = <FUI_ShowList><any>(this.getChildAt(2));
			this.m_closeBtn = <FUI_CloseBtn><any>(this.getChildAt(3));
		}
	}
}