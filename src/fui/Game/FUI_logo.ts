/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_logo extends fairygui.GComponent {

		public m_lang_logo:fairygui.GLoader;

		public static URL:string = "ui://8oy4o0mbo4403t";

		public static createInstance():FUI_logo {
			return <FUI_logo><any>(fairygui.UIPackage.createObject("Game","logo"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_lang_logo = <fairygui.GLoader><any>(this.getChildAt(0));
		}
	}
}