/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_Cards extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_n1:fairygui.GImage;

		public static URL:string = "ui://93n3k04qbzm7j";

		public static createInstance():FUI_Cards {
			return <FUI_Cards><any>(fairygui.UIPackage.createObject("reports","Cards"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(1));
		}
	}
}