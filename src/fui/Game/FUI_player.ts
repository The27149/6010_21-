/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_player extends fairygui.GComponent {

		public m_card1:fairygui.GTextInput;
		public m_card2:fairygui.GTextInput;
		public m_card3:fairygui.GTextInput;
		public m_card4:fairygui.GTextInput;
		public m_card5:fairygui.GTextInput;
		public m_set:FUI_setGM;

		public static URL:string = "ui://8oy4o0mbo44039";

		public static createInstance():FUI_player {
			return <FUI_player><any>(fairygui.UIPackage.createObject("Game","player"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_card1 = <fairygui.GTextInput><any>(this.getChildAt(0));
			this.m_card2 = <fairygui.GTextInput><any>(this.getChildAt(1));
			this.m_card3 = <fairygui.GTextInput><any>(this.getChildAt(2));
			this.m_card4 = <fairygui.GTextInput><any>(this.getChildAt(3));
			this.m_card5 = <fairygui.GTextInput><any>(this.getChildAt(4));
			this.m_set = <FUI_setGM><any>(this.getChildAt(5));
		}
	}
}