/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_Insurance extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n6:fairygui.GImage;
		public m_lang_mbx:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl3o";

		public static createInstance():FUI_Insurance {
			return <FUI_Insurance><any>(fairygui.UIPackage.createObject("room","Insurance"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_mbx = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}