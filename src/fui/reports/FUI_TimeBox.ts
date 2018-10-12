/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_TimeBox extends fairygui.GComponent {

		public m_n5:fairygui.GImage;
		public m_txt:fairygui.GTextField;
		public m_n6:fairygui.GImage;

		public static URL:string = "ui://93n3k04qbzm710";

		public static createInstance():FUI_TimeBox {
			return <FUI_TimeBox><any>(fairygui.UIPackage.createObject("reports","TimeBox"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_txt = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(2));
		}
	}
}