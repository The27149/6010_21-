/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_CardsItem extends fairygui.GComponent {

		public m_lang_0:fairygui.GTextField;
		public m_lang_1:fairygui.GTextField;
		public m_lang_6:fairygui.GTextField;
		public m_lang_5:fairygui.GTextField;
		public m_lang_4:fairygui.GTextField;
		public m_lang_3:fairygui.GTextField;
		public m_lang_2:fairygui.GTextField;
		public m_cards:FUI_Cards;
		public m_card_1:fairygui.GLoader;
		public m_card_2:fairygui.GLoader;
		public m_lang_banker:fairygui.GLoader;

		public static URL:string = "ui://93n3k04qbzm7i";

		public static createInstance():FUI_CardsItem {
			return <FUI_CardsItem><any>(fairygui.UIPackage.createObject("reports","CardsItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_lang_0 = <fairygui.GTextField><any>(this.getChildAt(0));
			this.m_lang_1 = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_lang_6 = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_lang_5 = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_lang_4 = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_lang_3 = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_lang_2 = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_cards = <FUI_Cards><any>(this.getChildAt(7));
			this.m_card_1 = <fairygui.GLoader><any>(this.getChildAt(8));
			this.m_card_2 = <fairygui.GLoader><any>(this.getChildAt(9));
			this.m_lang_banker = <fairygui.GLoader><any>(this.getChildAt(10));
		}
	}
}