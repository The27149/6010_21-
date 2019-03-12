/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_playerArea extends fairygui.GComponent {

		public m_fen:fairygui.Controller;
		public m_activeCtl:fairygui.Controller;
		public m_careCtl:fairygui.Controller;
		public m_centerCard_hide:FUI_card;
		public m_cardsList0:FUI_cardsList;
		public m_cardsList1:FUI_cardsList;
		public m_cardsList2:FUI_cardsList;
		public m_chipsList0_hide:FUI_chip;
		public m_chipsList1_hide:FUI_chip;
		public m_chipsList2_hide:FUI_chip;
		public m_chipArea:FUI_playerChip;
		public m_activeMark:fairygui.GGraph;
		public m_dealTarget:fairygui.GGraph;
		public m_chipCount0:FUI_chipCount;
		public m_chipCount1:FUI_chipCount;
		public m_chipCount2:FUI_chipCount;
		public m_point1:FUI_cardsPoint2;
		public m_point2:FUI_cardsPoint1;
		public m_point0:FUI_cardsPoint1;
		public m_chipsList1:fairygui.GList;
		public m_chipsList0:fairygui.GList;
		public m_chipsList2:fairygui.GList;
		public m_cardType0:FUI_cardType;
		public m_cardType1:FUI_cardType;
		public m_cardType2:FUI_cardType;
		public m_careSign:fairygui.GImage;
		public m_beActive:fairygui.Transition;

		public static URL:string = "ui://2mffi74ewuvl3f";

		public static createInstance():FUI_playerArea {
			return <FUI_playerArea><any>(fairygui.UIPackage.createObject("room","playerArea"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_fen = this.getControllerAt(0);
			this.m_activeCtl = this.getControllerAt(1);
			this.m_careCtl = this.getControllerAt(2);
			this.m_centerCard_hide = <FUI_card><any>(this.getChildAt(0));
			this.m_cardsList0 = <FUI_cardsList><any>(this.getChildAt(1));
			this.m_cardsList1 = <FUI_cardsList><any>(this.getChildAt(2));
			this.m_cardsList2 = <FUI_cardsList><any>(this.getChildAt(3));
			this.m_chipsList0_hide = <FUI_chip><any>(this.getChildAt(4));
			this.m_chipsList1_hide = <FUI_chip><any>(this.getChildAt(5));
			this.m_chipsList2_hide = <FUI_chip><any>(this.getChildAt(6));
			this.m_chipArea = <FUI_playerChip><any>(this.getChildAt(7));
			this.m_activeMark = <fairygui.GGraph><any>(this.getChildAt(8));
			this.m_dealTarget = <fairygui.GGraph><any>(this.getChildAt(9));
			this.m_chipCount0 = <FUI_chipCount><any>(this.getChildAt(10));
			this.m_chipCount1 = <FUI_chipCount><any>(this.getChildAt(11));
			this.m_chipCount2 = <FUI_chipCount><any>(this.getChildAt(12));
			this.m_point1 = <FUI_cardsPoint2><any>(this.getChildAt(13));
			this.m_point2 = <FUI_cardsPoint1><any>(this.getChildAt(14));
			this.m_point0 = <FUI_cardsPoint1><any>(this.getChildAt(15));
			this.m_chipsList1 = <fairygui.GList><any>(this.getChildAt(16));
			this.m_chipsList0 = <fairygui.GList><any>(this.getChildAt(17));
			this.m_chipsList2 = <fairygui.GList><any>(this.getChildAt(18));
			this.m_cardType0 = <FUI_cardType><any>(this.getChildAt(19));
			this.m_cardType1 = <FUI_cardType><any>(this.getChildAt(20));
			this.m_cardType2 = <FUI_cardType><any>(this.getChildAt(21));
			this.m_careSign = <fairygui.GImage><any>(this.getChildAt(22));
			this.m_beActive = this.getTransitionAt(0);
		}
	}
}