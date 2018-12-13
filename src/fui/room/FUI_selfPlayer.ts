/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_selfPlayer extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_nick:fairygui.GTextField;
		public m_n3:fairygui.GImage;
		public m_n4:fairygui.GImage;
		public m_coin:fairygui.GTextField;
		public m_headComp:FUI_selfHead;

		public static URL:string = "ui://2mffi74ewuvl32";

		public static createInstance():FUI_selfPlayer {
			return <FUI_selfPlayer><any>(fairygui.UIPackage.createObject("room","selfPlayer"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_nick = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_n4 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_coin = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_headComp = <FUI_selfHead><any>(this.getChildAt(5));
		}
	}
}