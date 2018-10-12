/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_AccountFlow extends fairygui.GComponent {

		public m_lang_0:fairygui.GTextField;
		public m_lang_1:fairygui.GTextField;
		public m_lang_2:fairygui.GTextField;
		public m_lang_3:fairygui.GTextField;
		public m_lang_4:fairygui.GTextField;
		public m_lang_5:fairygui.GTextField;

		public static URL:string = "ui://93n3k04qbzm714";

		public static createInstance():FUI_AccountFlow {
			return <FUI_AccountFlow><any>(fairygui.UIPackage.createObject("reports","AccountFlow"));
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
		}
	}
}