/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_BetsChipBox extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_chipNum:fairygui.GTextField;

		public static URL:string = "ui://j9tv3reat9kv8o";

		public static createInstance():FUI_BetsChipBox {
			return <FUI_BetsChipBox><any>(fairygui.UIPackage.createObject("Game","BetsChipBox"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_chipNum = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}