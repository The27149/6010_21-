/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_hallBg_h extends fairygui.GComponent {

		public m_n0:fairygui.GLoader;

		public static URL:string = "ui://8oy4o0mbd832k";

		public static createInstance():FUI_hallBg_h {
			return <FUI_hallBg_h><any>(fairygui.UIPackage.createObject("Game","hallBg_h"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GLoader><any>(this.getChildAt(0));
		}
	}
}