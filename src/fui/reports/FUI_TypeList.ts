/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_TypeList extends fairygui.GComponent {

		public m_bg:fairygui.GImage;

		public static URL:string = "ui://93n3k04qbzm719";

		public static createInstance():FUI_TypeList {
			return <FUI_TypeList><any>(fairygui.UIPackage.createObject("reports","TypeList"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}