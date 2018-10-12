/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_RoomView extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_n53:fairygui.GImage;
		public m_n54:fairygui.GImage;
		public m_n55:fairygui.GImage;
		public m_n56:fairygui.GImage;
		public m_n57:fairygui.GImage;
		public m_n58:fairygui.GImage;
		public m_n2:fairygui.GImage;
		public m_n1:fairygui.GImage;
		public m_n3:fairygui.GImage;
		public m_n48:fairygui.GImage;
		public m_cardsBox_full:fairygui.GImage;
		public m_cardsBox_null:fairygui.GImage;
		public m_chip1:fairygui.GImage;
		public m_chip2:fairygui.GImage;
		public m_chip3:fairygui.GImage;
		public m_chip4:fairygui.GImage;
		public m_chip5:fairygui.GImage;
		public m_n23:fairygui.GImage;
		public m_n11:fairygui.GImage;
		public m_player1:FUI_PlayerBox;
		public m_player2:FUI_PlayerBox;
		public m_player4:FUI_PlayerBox;
		public m_player5:FUI_PlayerBox;
		public m_chipBox5:FUI_BetsChipBox;
		public m_chipBox4:FUI_BetsChipBox;
		public m_chipBox3:FUI_BetsChipBox;
		public m_chipBox2:FUI_BetsChipBox;
		public m_chipBox1:FUI_BetsChipBox;
		public m_player3:FUI_MyPlayerBox;
		public m_sendPoker6:FUI_SendPoker;
		public m_sendPoker5:FUI_SendPoker;
		public m_sendPoker4:FUI_SendPoker;
		public m_sendPoker3:FUI_SendPoker;
		public m_sendPoker2:FUI_SendPoker;
		public m_sendPoker1:FUI_SendPoker;
		public m_sendBtn:FUI_Button5;
		public m_betBtnView:FUI_BetBtnView;
		public m_pokerBtnView:FUI_PokerBtnView;
		public m_insuranceBtn:FUI_InsuranceBtnView;
		public m_t2:fairygui.Transition;

		public static URL:string = "ui://j9tv3reas48i1k";

		public static createInstance():FUI_RoomView {
			return <FUI_RoomView><any>(fairygui.UIPackage.createObject("Game","RoomView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n53 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_n54 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_n55 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_n56 = <fairygui.GImage><any>(this.getChildAt(4));
			this.m_n57 = <fairygui.GImage><any>(this.getChildAt(5));
			this.m_n58 = <fairygui.GImage><any>(this.getChildAt(6));
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(7));
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(8));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(9));
			this.m_n48 = <fairygui.GImage><any>(this.getChildAt(10));
			this.m_cardsBox_full = <fairygui.GImage><any>(this.getChildAt(11));
			this.m_cardsBox_null = <fairygui.GImage><any>(this.getChildAt(12));
			this.m_chip1 = <fairygui.GImage><any>(this.getChildAt(13));
			this.m_chip2 = <fairygui.GImage><any>(this.getChildAt(14));
			this.m_chip3 = <fairygui.GImage><any>(this.getChildAt(15));
			this.m_chip4 = <fairygui.GImage><any>(this.getChildAt(16));
			this.m_chip5 = <fairygui.GImage><any>(this.getChildAt(17));
			this.m_n23 = <fairygui.GImage><any>(this.getChildAt(18));
			this.m_n11 = <fairygui.GImage><any>(this.getChildAt(19));
			this.m_player1 = <FUI_PlayerBox><any>(this.getChildAt(20));
			this.m_player2 = <FUI_PlayerBox><any>(this.getChildAt(21));
			this.m_player4 = <FUI_PlayerBox><any>(this.getChildAt(22));
			this.m_player5 = <FUI_PlayerBox><any>(this.getChildAt(23));
			this.m_chipBox5 = <FUI_BetsChipBox><any>(this.getChildAt(24));
			this.m_chipBox4 = <FUI_BetsChipBox><any>(this.getChildAt(25));
			this.m_chipBox3 = <FUI_BetsChipBox><any>(this.getChildAt(26));
			this.m_chipBox2 = <FUI_BetsChipBox><any>(this.getChildAt(27));
			this.m_chipBox1 = <FUI_BetsChipBox><any>(this.getChildAt(28));
			this.m_player3 = <FUI_MyPlayerBox><any>(this.getChildAt(29));
			this.m_sendPoker6 = <FUI_SendPoker><any>(this.getChildAt(30));
			this.m_sendPoker5 = <FUI_SendPoker><any>(this.getChildAt(31));
			this.m_sendPoker4 = <FUI_SendPoker><any>(this.getChildAt(32));
			this.m_sendPoker3 = <FUI_SendPoker><any>(this.getChildAt(33));
			this.m_sendPoker2 = <FUI_SendPoker><any>(this.getChildAt(34));
			this.m_sendPoker1 = <FUI_SendPoker><any>(this.getChildAt(35));
			this.m_sendBtn = <FUI_Button5><any>(this.getChildAt(36));
			this.m_betBtnView = <FUI_BetBtnView><any>(this.getChildAt(37));
			this.m_pokerBtnView = <FUI_PokerBtnView><any>(this.getChildAt(38));
			this.m_insuranceBtn = <FUI_InsuranceBtnView><any>(this.getChildAt(39));
			this.m_t2 = this.getTransitionAt(0);
		}
	}
}