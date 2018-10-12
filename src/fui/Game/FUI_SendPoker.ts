/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_SendPoker extends fairygui.GComponent {

		public m_n0:fairygui.GImage;

		public static URL:string = "ui://j9tv3reat9kv8v";

		public static createInstance():FUI_SendPoker {
			return <FUI_SendPoker><any>(fairygui.UIPackage.createObject("Game","SendPoker"));
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