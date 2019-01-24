/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_gm extends fairygui.GComponent {

		public m_n19:fairygui.GGraph;
		public m_keys:FUI_gmKeys;
		public m_n0:fairygui.GTextField;
		public m_n1:fairygui.GTextField;
		public m_roomType:fairygui.GTextInput;
		public m_playerNumb:fairygui.GTextInput;
		public m_n2:fairygui.GTextField;
		public m_n3:fairygui.GTextField;
		public m_n4:fairygui.GTextField;
		public m_n9:fairygui.GTextField;
		public m_n10:fairygui.GTextField;
		public m_n16:fairygui.GTextField;
		public m_cards_0:FUI_player;
		public m_cards_1:FUI_player;
		public m_cards_2:FUI_player;
		public m_cards_3:FUI_player;
		public m_cards_4:FUI_player;
		public m_cards_5:FUI_player;
		public m_submit:FUI_gmSubmit;
		public m_close:FUI_close;

		public static URL:string = "ui://8oy4o0mbo44037";

		public static createInstance():FUI_gm {
			return <FUI_gm><any>(fairygui.UIPackage.createObject("Game","gm"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n19 = <fairygui.GGraph><any>(this.getChildAt(0));
			this.m_keys = <FUI_gmKeys><any>(this.getChildAt(1));
			this.m_n0 = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_n1 = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_roomType = <fairygui.GTextInput><any>(this.getChildAt(4));
			this.m_playerNumb = <fairygui.GTextInput><any>(this.getChildAt(5));
			this.m_n2 = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_n3 = <fairygui.GTextField><any>(this.getChildAt(7));
			this.m_n4 = <fairygui.GTextField><any>(this.getChildAt(8));
			this.m_n9 = <fairygui.GTextField><any>(this.getChildAt(9));
			this.m_n10 = <fairygui.GTextField><any>(this.getChildAt(10));
			this.m_n16 = <fairygui.GTextField><any>(this.getChildAt(11));
			this.m_cards_0 = <FUI_player><any>(this.getChildAt(12));
			this.m_cards_1 = <FUI_player><any>(this.getChildAt(13));
			this.m_cards_2 = <FUI_player><any>(this.getChildAt(14));
			this.m_cards_3 = <FUI_player><any>(this.getChildAt(15));
			this.m_cards_4 = <FUI_player><any>(this.getChildAt(16));
			this.m_cards_5 = <FUI_player><any>(this.getChildAt(17));
			this.m_submit = <FUI_gmSubmit><any>(this.getChildAt(18));
			this.m_close = <FUI_close><any>(this.getChildAt(19));
		}
	}
}