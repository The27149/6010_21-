/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_otherPlayer extends fairygui.GComponent {

		public m_talkPos:fairygui.Controller;
		public m_head:fairygui.GLoader;
		public m_n1:fairygui.GImage;
		public m_nick:fairygui.GTextField;
		public m_coin:fairygui.GTextField;
		public m_timeCircle:FUI_timeCircle;
		public m_talkBgRight:fairygui.GImage;
		public m_talkBgLeft:fairygui.GImage;
		public m_talk:FUI_talk;

		public static URL:string = "ui://2mffi74ewuvl31";

		public static createInstance():FUI_otherPlayer {
			return <FUI_otherPlayer><any>(fairygui.UIPackage.createObject("room","otherPlayer"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_talkPos = this.getControllerAt(0);
			this.m_head = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_nick = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_coin = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_timeCircle = <FUI_timeCircle><any>(this.getChildAt(4));
			this.m_talkBgRight = <fairygui.GImage><any>(this.getChildAt(5));
			this.m_talkBgLeft = <fairygui.GImage><any>(this.getChildAt(6));
			this.m_talk = <FUI_talk><any>(this.getChildAt(7));
		}
	}
}