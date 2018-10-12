/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_GamblingView extends fairygui.GComponent {

		public m_n0:fairygui.GLoader;
		public m_lang_title:fairygui.GLoader;
		public m_lang_account:fairygui.GTextField;
		public m_lang_single:fairygui.GTextField;
		public m_lang_expenditure:fairygui.GTextField;
		public m_lang_dz:fairygui.GTextField;
		public m_lang_zr:fairygui.GTextField;
		public m_list:fairygui.GList;
		public m_title2:FUI_DetailsTitle;
		public m_closeBtn:FUI_CloseBtn;

		public static URL:string = "ui://93n3k04qbzm7h";

		public static createInstance():FUI_GamblingView {
			return <FUI_GamblingView><any>(fairygui.UIPackage.createObject("reports","GamblingView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_title = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_lang_account = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_lang_single = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_lang_expenditure = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_lang_dz = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_lang_zr = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_list = <fairygui.GList><any>(this.getChildAt(7));
			this.m_title2 = <FUI_DetailsTitle><any>(this.getChildAt(8));
			this.m_closeBtn = <FUI_CloseBtn><any>(this.getChildAt(9));
		}
	}
}