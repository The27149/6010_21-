/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_BackgroundP extends fairygui.GComponent {

		public m_n2:fairygui.GImage;

		public static URL:string = "ui://j9tv3reanpwg5h";

		public static createInstance():FUI_BackgroundP {
			return <FUI_BackgroundP><any>(fairygui.UIPackage.createObject("Game","BackgroundP"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}