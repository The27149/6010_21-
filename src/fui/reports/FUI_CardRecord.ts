/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_CardRecord extends fairygui.GComponent {

		public m_lang_0:fairygui.GTextField;
		public m_lang_1:fairygui.GTextField;
		public m_lang_2:fairygui.GTextField;
		public m_lang_3:fairygui.GTextField;
		public m_lang_4:fairygui.GTextField;
		public m_lang_5:fairygui.GTextField;
		public m_lang_6:fairygui.GTextField;
		public m_lang_7:fairygui.GTextField;
		public m_lang_8:fairygui.GTextField;

		public static URL:string = "ui://93n3k04qbzm711";

		public static createInstance():FUI_CardRecord {
			return <FUI_CardRecord><any>(fairygui.UIPackage.createObject("reports","CardRecord"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_lang_0 = <fairygui.GTextField><any>(this.getChildAt(0));
			this.m_lang_1 = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_lang_2 = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_lang_3 = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_lang_4 = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_lang_5 = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_lang_6 = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_lang_7 = <fairygui.GTextField><any>(this.getChildAt(7));
			this.m_lang_8 = <fairygui.GTextField><any>(this.getChildAt(8));
		}
	}
}