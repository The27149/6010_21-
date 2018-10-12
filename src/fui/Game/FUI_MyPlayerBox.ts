/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_MyPlayerBox extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_n1:fairygui.GImage;
		public m_n2:fairygui.GImage;
		public m_coin:fairygui.GTextField;
		public m_avatar:fairygui.GLoader;
		public m_playerNmae:fairygui.GTextField;

		public static URL:string = "ui://j9tv3reat9kv8q";

		public static createInstance():FUI_MyPlayerBox {
			return <FUI_MyPlayerBox><any>(fairygui.UIPackage.createObject("Game","MyPlayerBox"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_coin = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_avatar = <fairygui.GLoader><any>(this.getChildAt(4));
			this.m_playerNmae = <fairygui.GTextField><any>(this.getChildAt(5));
		}
	}
}