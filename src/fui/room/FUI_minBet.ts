/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_minBet extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n6:fairygui.GImage;
		public m_lang_zxz:fairygui.GLoader;
		public m_value:fairygui.GTextField;

		public static URL:string = "ui://2mffi74ewuvl3k";

		public static createInstance():FUI_minBet {
			return <FUI_minBet><any>(fairygui.UIPackage.createObject("room","minBet"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_zxz = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_value = <fairygui.GTextField><any>(this.getChildAt(2));
		}
	}
}