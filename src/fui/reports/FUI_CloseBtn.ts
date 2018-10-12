/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_CloseBtn extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n2:fairygui.GImage;

		public static URL:string = "ui://93n3k04qbzm7m";

		public static createInstance():FUI_CloseBtn {
			return <FUI_CloseBtn><any>(fairygui.UIPackage.createObject("reports","CloseBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}