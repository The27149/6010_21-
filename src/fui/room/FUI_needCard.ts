/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_needCard extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n3:fairygui.GImage;
		public m_lang_yp:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl3s";

		public static createInstance():FUI_needCard {
			return <FUI_needCard><any>(fairygui.UIPackage.createObject("room","needCard"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_yp = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}