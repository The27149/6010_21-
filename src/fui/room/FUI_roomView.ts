/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_roomView extends fairygui.GComponent {

		public m_h_v:fairygui.Controller;
		public m_lightCtl:fairygui.Controller;
		public m_table:fairygui.GLoader;
		public m_cardBox1:fairygui.GLoader;
		public m_n4:fairygui.GImage;
		public m_light:fairygui.GLoader;
		public m_chipBank:fairygui.GLoader;
		public m_cardBox2:fairygui.GLoader;
		public m_lang_tablez:fairygui.GLoader;
		public m_n7:fairygui.GLoader;
		public m_card1:FUI_card;
		public m_chip1:fairygui.GLoader;
		public m_chip2:fairygui.GLoader;
		public m_chip3:fairygui.GLoader;
		public m_chip4:fairygui.GLoader;
		public m_chip5:fairygui.GLoader;
		public m_namebg1:fairygui.GLoader;
		public m_namebg2:fairygui.GLoader;
		public m_namebg4:fairygui.GLoader;
		public m_namebg5:fairygui.GLoader;
		public m_name1:fairygui.GTextField;
		public m_name2:fairygui.GTextField;
		public m_name4:fairygui.GTextField;
		public m_name5:fairygui.GTextField;
		public m_playerArea0:FUI_playerArea_banker;
		public m_playerArea1:FUI_playerArea;
		public m_playerArea2:FUI_playerArea;
		public m_playerArea3:FUI_playerArea;
		public m_playerArea4:FUI_playerArea;
		public m_playerArea5:FUI_playerArea;
		public m_betTip1:FUI_clickToBet;
		public m_betTip2:FUI_clickToBet;
		public m_betTip4:FUI_clickToBet;
		public m_betTip5:FUI_clickToBet;
		public m_player3:FUI_selfPlayer;
		public m_player1:FUI_otherPlayer;
		public m_player2:FUI_otherPlayer;
		public m_player4:FUI_otherPlayer;
		public m_player5:FUI_otherPlayer;
		public m_numb1:fairygui.GTextField;
		public m_numb2:fairygui.GTextField;
		public m_numb3:fairygui.GTextField;
		public m_numb4:fairygui.GTextField;
		public m_numb5:fairygui.GTextField;
		public m_hand:FUI_hand;
		public m_btnPlay:FUI_btnPlay;
		public m_insurance1:fairygui.GList;
		public m_insurance2:fairygui.GList;
		public m_insurance3:fairygui.GList;
		public m_insurance4:fairygui.GList;
		public m_insurance5:fairygui.GList;
		public m_insurance1_hide:FUI_chip;
		public m_insurance2_hide:FUI_chip;
		public m_insurance3_hide:FUI_chip;
		public m_insurance4_hide:FUI_chip;
		public m_insurance5_hide:FUI_chip;
		public m_clock:FUI_clock;
		public m_result1:FUI_result;
		public m_result2:FUI_result;
		public m_result3:FUI_result;
		public m_result4:FUI_result;
		public m_result5:FUI_result;
		public m_result_self:FUI_result;

		public static URL:string = "ui://2mffi74ewuvl2w";

		public static createInstance():FUI_roomView {
			return <FUI_roomView><any>(fairygui.UIPackage.createObject("room","roomView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_h_v = this.getControllerAt(0);
			this.m_lightCtl = this.getControllerAt(1);
			this.m_table = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_cardBox1 = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_n4 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_light = <fairygui.GLoader><any>(this.getChildAt(3));
			this.m_chipBank = <fairygui.GLoader><any>(this.getChildAt(4));
			this.m_cardBox2 = <fairygui.GLoader><any>(this.getChildAt(5));
			this.m_lang_tablez = <fairygui.GLoader><any>(this.getChildAt(6));
			this.m_n7 = <fairygui.GLoader><any>(this.getChildAt(7));
			this.m_card1 = <FUI_card><any>(this.getChildAt(8));
			this.m_chip1 = <fairygui.GLoader><any>(this.getChildAt(9));
			this.m_chip2 = <fairygui.GLoader><any>(this.getChildAt(10));
			this.m_chip3 = <fairygui.GLoader><any>(this.getChildAt(11));
			this.m_chip4 = <fairygui.GLoader><any>(this.getChildAt(12));
			this.m_chip5 = <fairygui.GLoader><any>(this.getChildAt(13));
			this.m_namebg1 = <fairygui.GLoader><any>(this.getChildAt(14));
			this.m_namebg2 = <fairygui.GLoader><any>(this.getChildAt(15));
			this.m_namebg4 = <fairygui.GLoader><any>(this.getChildAt(16));
			this.m_namebg5 = <fairygui.GLoader><any>(this.getChildAt(17));
			this.m_name1 = <fairygui.GTextField><any>(this.getChildAt(18));
			this.m_name2 = <fairygui.GTextField><any>(this.getChildAt(19));
			this.m_name4 = <fairygui.GTextField><any>(this.getChildAt(20));
			this.m_name5 = <fairygui.GTextField><any>(this.getChildAt(21));
			this.m_playerArea0 = <FUI_playerArea_banker><any>(this.getChildAt(22));
			this.m_playerArea1 = <FUI_playerArea><any>(this.getChildAt(23));
			this.m_playerArea2 = <FUI_playerArea><any>(this.getChildAt(24));
			this.m_playerArea3 = <FUI_playerArea><any>(this.getChildAt(25));
			this.m_playerArea4 = <FUI_playerArea><any>(this.getChildAt(26));
			this.m_playerArea5 = <FUI_playerArea><any>(this.getChildAt(27));
			this.m_betTip1 = <FUI_clickToBet><any>(this.getChildAt(28));
			this.m_betTip2 = <FUI_clickToBet><any>(this.getChildAt(29));
			this.m_betTip4 = <FUI_clickToBet><any>(this.getChildAt(30));
			this.m_betTip5 = <FUI_clickToBet><any>(this.getChildAt(31));
			this.m_player3 = <FUI_selfPlayer><any>(this.getChildAt(32));
			this.m_player1 = <FUI_otherPlayer><any>(this.getChildAt(33));
			this.m_player2 = <FUI_otherPlayer><any>(this.getChildAt(34));
			this.m_player4 = <FUI_otherPlayer><any>(this.getChildAt(35));
			this.m_player5 = <FUI_otherPlayer><any>(this.getChildAt(36));
			this.m_numb1 = <fairygui.GTextField><any>(this.getChildAt(37));
			this.m_numb2 = <fairygui.GTextField><any>(this.getChildAt(38));
			this.m_numb3 = <fairygui.GTextField><any>(this.getChildAt(39));
			this.m_numb4 = <fairygui.GTextField><any>(this.getChildAt(40));
			this.m_numb5 = <fairygui.GTextField><any>(this.getChildAt(41));
			this.m_hand = <FUI_hand><any>(this.getChildAt(42));
			this.m_btnPlay = <FUI_btnPlay><any>(this.getChildAt(43));
			this.m_insurance1 = <fairygui.GList><any>(this.getChildAt(44));
			this.m_insurance2 = <fairygui.GList><any>(this.getChildAt(45));
			this.m_insurance3 = <fairygui.GList><any>(this.getChildAt(46));
			this.m_insurance4 = <fairygui.GList><any>(this.getChildAt(47));
			this.m_insurance5 = <fairygui.GList><any>(this.getChildAt(48));
			this.m_insurance1_hide = <FUI_chip><any>(this.getChildAt(49));
			this.m_insurance2_hide = <FUI_chip><any>(this.getChildAt(50));
			this.m_insurance3_hide = <FUI_chip><any>(this.getChildAt(51));
			this.m_insurance4_hide = <FUI_chip><any>(this.getChildAt(52));
			this.m_insurance5_hide = <FUI_chip><any>(this.getChildAt(53));
			this.m_clock = <FUI_clock><any>(this.getChildAt(54));
			this.m_result1 = <FUI_result><any>(this.getChildAt(55));
			this.m_result2 = <FUI_result><any>(this.getChildAt(56));
			this.m_result3 = <FUI_result><any>(this.getChildAt(57));
			this.m_result4 = <FUI_result><any>(this.getChildAt(58));
			this.m_result5 = <FUI_result><any>(this.getChildAt(59));
			this.m_result_self = <FUI_result><any>(this.getChildAt(60));
		}
	}
}