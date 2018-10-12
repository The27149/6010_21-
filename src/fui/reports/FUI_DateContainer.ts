/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_DateContainer extends fairygui.GComponent {

		public m_dateBg:fairygui.GLoader;

		public static URL:string = "ui://93n3k04qbzm7d";

		public static createInstance():FUI_DateContainer {
			return <FUI_DateContainer><any>(fairygui.UIPackage.createObject("reports","DateContainer"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_dateBg = <fairygui.GLoader><any>(this.getChildAt(0));
		}
	}
}