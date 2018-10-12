/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_RecordDialog extends fairygui.GComponent {

		public m_ctl:fairygui.Controller;
		public m_n60:fairygui.GLoader;
		public m_n61:fairygui.GImage;
		public m_searchBtn:FUI_Button1;
		public m_recordStart:FUI_TimeBox;
		public m_recordEnd:FUI_TimeBox;
		public m_lang_time:fairygui.GTextField;
		public m_lang_to:fairygui.GTextField;
		public m_n22:fairygui.GGroup;
		public m_n34:FUI_CardRecord;
		public m_recordList:fairygui.GList;
		public m_page:FUI_PageBtn;
		public m_accountStart:FUI_TimeBox;
		public m_accountEnd:FUI_TimeBox;
		public m_accountType:FUI_TimeBox;
		public m_lang_type:fairygui.GTextField;
		public m_lang_time_2:fairygui.GTextField;
		public m_lang_to_2:fairygui.GTextField;
		public m_n44:fairygui.GGroup;
		public m_n45:FUI_AccountFlow;
		public m_accountList:fairygui.GList;
		public m_lang_xj:fairygui.GTextField;
		public m_lang_all:fairygui.GTextField;
		public m_x_all_eff_dama:fairygui.GTextField;
		public m_x_all_bpay:fairygui.GTextField;
		public m_all_eff_dama:fairygui.GTextField;
		public m_all_bpay:fairygui.GTextField;
		public m_x_all_bets:fairygui.GTextField;
		public m_all_bets:fairygui.GTextField;
		public m_n56:fairygui.GGroup;
		public m_closeBtn:FUI_CloseBtn;
		public m_recordBtn:FUI_recordBtn;
		public m_accountBtn:FUI_accountBtn;

		public static URL:string = "ui://93n3k04qbzm7y";

		public static createInstance():FUI_RecordDialog {
			return <FUI_RecordDialog><any>(fairygui.UIPackage.createObject("reports","RecordDialog"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctl = this.getControllerAt(0);
			this.m_n60 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_n61 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_searchBtn = <FUI_Button1><any>(this.getChildAt(2));
			this.m_recordStart = <FUI_TimeBox><any>(this.getChildAt(3));
			this.m_recordEnd = <FUI_TimeBox><any>(this.getChildAt(4));
			this.m_lang_time = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_lang_to = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_n22 = <fairygui.GGroup><any>(this.getChildAt(7));
			this.m_n34 = <FUI_CardRecord><any>(this.getChildAt(8));
			this.m_recordList = <fairygui.GList><any>(this.getChildAt(9));
			this.m_page = <FUI_PageBtn><any>(this.getChildAt(10));
			this.m_accountStart = <FUI_TimeBox><any>(this.getChildAt(11));
			this.m_accountEnd = <FUI_TimeBox><any>(this.getChildAt(12));
			this.m_accountType = <FUI_TimeBox><any>(this.getChildAt(13));
			this.m_lang_type = <fairygui.GTextField><any>(this.getChildAt(14));
			this.m_lang_time_2 = <fairygui.GTextField><any>(this.getChildAt(15));
			this.m_lang_to_2 = <fairygui.GTextField><any>(this.getChildAt(16));
			this.m_n44 = <fairygui.GGroup><any>(this.getChildAt(17));
			this.m_n45 = <FUI_AccountFlow><any>(this.getChildAt(18));
			this.m_accountList = <fairygui.GList><any>(this.getChildAt(19));
			this.m_lang_xj = <fairygui.GTextField><any>(this.getChildAt(20));
			this.m_lang_all = <fairygui.GTextField><any>(this.getChildAt(21));
			this.m_x_all_eff_dama = <fairygui.GTextField><any>(this.getChildAt(22));
			this.m_x_all_bpay = <fairygui.GTextField><any>(this.getChildAt(23));
			this.m_all_eff_dama = <fairygui.GTextField><any>(this.getChildAt(24));
			this.m_all_bpay = <fairygui.GTextField><any>(this.getChildAt(25));
			this.m_x_all_bets = <fairygui.GTextField><any>(this.getChildAt(26));
			this.m_all_bets = <fairygui.GTextField><any>(this.getChildAt(27));
			this.m_n56 = <fairygui.GGroup><any>(this.getChildAt(28));
			this.m_closeBtn = <FUI_CloseBtn><any>(this.getChildAt(29));
			this.m_recordBtn = <FUI_recordBtn><any>(this.getChildAt(30));
			this.m_accountBtn = <FUI_accountBtn><any>(this.getChildAt(31));
		}
	}
}