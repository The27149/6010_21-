/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_playerArea_banker extends fairygui.GComponent {

		public m_cardList:fairygui.GList;
		public m_cardPoint:FUI_cardsPoint1;
		public m_cardType:FUI_cardType;

		public static URL:string = "ui://2mffi74ewuvl3h";

		public static createInstance():FUI_playerArea_banker {
			return <FUI_playerArea_banker><any>(fairygui.UIPackage.createObject("room","playerArea_banker"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_cardList = <fairygui.GList><any>(this.getChildAt(0));
			this.m_cardPoint = <FUI_cardsPoint1><any>(this.getChildAt(1));
			this.m_cardType = <FUI_cardType><any>(this.getChildAt(2));
		}
	}
}