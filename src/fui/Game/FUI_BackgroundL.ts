/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_BackgroundL extends fairygui.GComponent {

		public m_n15:fairygui.GImage;

		public static URL:string = "ui://j9tv3reanpwg57";

		public static createInstance():FUI_BackgroundL {
			return <FUI_BackgroundL><any>(fairygui.UIPackage.createObject("Game","BackgroundL"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n15 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}