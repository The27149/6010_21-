/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_stopCard extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n6:fairygui.GImage;
		public m_lang_tp:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl3t";

		public static createInstance():FUI_stopCard {
			return <FUI_stopCard><any>(fairygui.UIPackage.createObject("room","stopCard"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n6 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_tp = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}