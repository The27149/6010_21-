/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_PlayerBox extends fairygui.GComponent {

		public m_avatar:fairygui.GLoader;
		public m_n2:fairygui.GImage;
		public m_timeBox:fairygui.GLoader;
		public m_playerNmae:fairygui.GTextField;
		public m_coin:fairygui.GTextField;

		public static URL:string = "ui://j9tv3reat9kv8j";

		public static createInstance():FUI_PlayerBox {
			return <FUI_PlayerBox><any>(fairygui.UIPackage.createObject("Game","PlayerBox"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_avatar = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_timeBox = <fairygui.GLoader><any>(this.getChildAt(2));
			this.m_playerNmae = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_coin = <fairygui.GTextField><any>(this.getChildAt(4));
		}
	}
}