/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_sure extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n3:fairygui.GLoader;
		public m_lang_sure:fairygui.GLoader;

		public static URL:string = "ui://8oy4o0mbo4403p";

		public static createInstance():FUI_sure {
			return <FUI_sure><any>(fairygui.UIPackage.createObject("Game","sure"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n3 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_sure = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}