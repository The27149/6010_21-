/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_continueGame extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n7:fairygui.GImage;
		public m_lang_jxyx:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl4b";

		public static createInstance():FUI_continueGame {
			return <FUI_continueGame><any>(fairygui.UIPackage.createObject("room","continueGame"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n7 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_jxyx = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}