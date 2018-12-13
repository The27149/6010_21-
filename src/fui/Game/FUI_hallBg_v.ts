/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_hallBg_v extends fairygui.GComponent {

		public m_n0:fairygui.GImage;

		public static URL:string = "ui://8oy4o0mbd832m";

		public static createInstance():FUI_hallBg_v {
			return <FUI_hallBg_v><any>(fairygui.UIPackage.createObject("Game","hallBg_v"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}