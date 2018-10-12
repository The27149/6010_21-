/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_DateChooseDialog extends fairygui.GComponent {

		public m_n0:fairygui.GLoader;
		public m_yearPage:FUI_Box_year;
		public m_lang_0:fairygui.GTextField;
		public m_lang_1:fairygui.GTextField;
		public m_lang_3:fairygui.GTextField;
		public m_lang_2:fairygui.GTextField;
		public m_lang_4:fairygui.GTextField;
		public m_lang_5:fairygui.GTextField;
		public m_lang_6:fairygui.GTextField;
		public m_lang_title:fairygui.GLoader;
		public m_monPage:FUI_Box_year;
		public m_container:FUI_DateContainer;
		public m_closeBtn:FUI_CloseBtn;
		public m_sureBtn:FUI_Btn_confirm;

		public static URL:string = "ui://93n3k04qbzm79";

		public static createInstance():FUI_DateChooseDialog {
			return <FUI_DateChooseDialog><any>(fairygui.UIPackage.createObject("reports","DateChooseDialog"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_yearPage = <FUI_Box_year><any>(this.getChildAt(1));
			this.m_lang_0 = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_lang_1 = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_lang_3 = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_lang_2 = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_lang_4 = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_lang_5 = <fairygui.GTextField><any>(this.getChildAt(7));
			this.m_lang_6 = <fairygui.GTextField><any>(this.getChildAt(8));
			this.m_lang_title = <fairygui.GLoader><any>(this.getChildAt(9));
			this.m_monPage = <FUI_Box_year><any>(this.getChildAt(10));
			this.m_container = <FUI_DateContainer><any>(this.getChildAt(11));
			this.m_closeBtn = <FUI_CloseBtn><any>(this.getChildAt(12));
			this.m_sureBtn = <FUI_Btn_confirm><any>(this.getChildAt(13));
		}
	}
}