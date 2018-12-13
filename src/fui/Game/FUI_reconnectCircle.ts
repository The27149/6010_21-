/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_reconnectCircle extends fairygui.GComponent {

		public m_lang_1:fairygui.GTextField;
		public m_circle:fairygui.GImage;
		public m_t0:fairygui.Transition;

		public static URL:string = "ui://8oy4o0mbo4403h";

		public static createInstance():FUI_reconnectCircle {
			return <FUI_reconnectCircle><any>(fairygui.UIPackage.createObject("Game","reconnectCircle"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_lang_1 = <fairygui.GTextField><any>(this.getChildAt(0));
			this.m_circle = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_t0 = this.getTransitionAt(0);
		}
	}
}