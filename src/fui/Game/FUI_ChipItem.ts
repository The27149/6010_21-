/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_ChipItem extends fairygui.GComponent {

		public m_n0:fairygui.GLoader;

		public static URL:string = "ui://j9tv3reat9kv8g";

		public static createInstance():FUI_ChipItem {
			return <FUI_ChipItem><any>(fairygui.UIPackage.createObject("Game","ChipItem"));
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