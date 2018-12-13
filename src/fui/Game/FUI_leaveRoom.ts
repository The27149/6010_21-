/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_leaveRoom extends fairygui.GComponent {

		public m_n8:fairygui.GImage;
		public m_tips:fairygui.GTextField;
		public m_sure:FUI_sure;
		public m_cancle:FUI_cancle;

		public static URL:string = "ui://8oy4o0mbo4403n";

		public static createInstance():FUI_leaveRoom {
			return <FUI_leaveRoom><any>(fairygui.UIPackage.createObject("Game","leaveRoom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n8 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_tips = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_sure = <FUI_sure><any>(this.getChildAt(2));
			this.m_cancle = <FUI_cancle><any>(this.getChildAt(3));
		}
	}
}