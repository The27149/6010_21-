/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_PokerItem extends fairygui.GComponent {

		public m_poker_z:fairygui.GLoader;
		public m_poker_f:fairygui.GImage;

		public static URL:string = "ui://j9tv3reat9kv8u";

		public static createInstance():FUI_PokerItem {
			return <FUI_PokerItem><any>(fairygui.UIPackage.createObject("Game","PokerItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_poker_z = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_poker_f = <fairygui.GImage><any>(this.getChildAt(1));
		}
	}
}