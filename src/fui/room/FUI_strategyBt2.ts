/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_strategyBt2 extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_lang_bd:fairygui.GLoader;

		public static URL:string = "ui://2mffi74eo440da";

		public static createInstance():FUI_strategyBt2 {
			return <FUI_strategyBt2><any>(fairygui.UIPackage.createObject("room","strategyBt2"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_lang_bd = <fairygui.GLoader><any>(this.getChildAt(0));
		}
	}
}