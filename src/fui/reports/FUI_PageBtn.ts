/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_PageBtn extends fairygui.GComponent {

		public m_pgDn:fairygui.GImage;
		public m_n5:fairygui.GImage;
		public m_pageTxt:fairygui.GTextField;
		public m_lang_dn:fairygui.GLoader;
		public m_pgUp:fairygui.GImage;
		public m_lang_on:fairygui.GLoader;

		public static URL:string = "ui://93n3k04qbzm713";

		public static createInstance():FUI_PageBtn {
			return <FUI_PageBtn><any>(fairygui.UIPackage.createObject("reports","PageBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_pgDn = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_pageTxt = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_lang_dn = <fairygui.GLoader><any>(this.getChildAt(3));
			this.m_pgUp = <fairygui.GImage><any>(this.getChildAt(4));
			this.m_lang_on = <fairygui.GLoader><any>(this.getChildAt(5));
		}
	}
}