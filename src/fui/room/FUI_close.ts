/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_close extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n3:fairygui.GImage;

		public static URL:string = "ui://2mffi74euz6j5q";

		public static createInstance():FUI_close {
			return <FUI_close><any>(fairygui.UIPackage.createObject("room","close"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}