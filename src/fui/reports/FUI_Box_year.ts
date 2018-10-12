/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_Box_year extends fairygui.GComponent {

		public m_n0:fairygui.GLoader;
		public m_pgDn:fairygui.GLoader;
		public m_pgUp:fairygui.GLoader;
		public m_pageTxt:fairygui.GTextField;

		public static URL:string = "ui://93n3k04qbzm7a";

		public static createInstance():FUI_Box_year {
			return <FUI_Box_year><any>(fairygui.UIPackage.createObject("reports","Box_year"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_pgDn = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_pgUp = <fairygui.GLoader><any>(this.getChildAt(2));
			this.m_pageTxt = <fairygui.GTextField><any>(this.getChildAt(3));
		}
	}
}