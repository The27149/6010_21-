/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_DateItem extends fairygui.GComponent {

		public m_ctl:fairygui.Controller;
		public m_txt:fairygui.GTextField;

		public static URL:string = "ui://93n3k04qbzm7f";

		public static createInstance():FUI_DateItem {
			return <FUI_DateItem><any>(fairygui.UIPackage.createObject("reports","DateItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctl = this.getControllerAt(0);
			this.m_txt = <fairygui.GTextField><any>(this.getChildAt(0));
		}
	}
}