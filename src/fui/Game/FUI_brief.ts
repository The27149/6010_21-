/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_brief extends fairygui.GComponent {

		public m_h_v:fairygui.Controller;
		public m_avatar:fairygui.GLoader;
		public m_n4:fairygui.GImage;
		public m_nickname:fairygui.GTextField;
		public m_n5:fairygui.GImage;
		public m_n8:fairygui.GImage;
		public m_coin:fairygui.GTextField;

		public static URL:string = "ui://8oy4o0mbd832p";

		public static createInstance():FUI_brief {
			return <FUI_brief><any>(fairygui.UIPackage.createObject("Game","brief"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_h_v = this.getControllerAt(0);
			this.m_avatar = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_n4 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_nickname = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_n8 = <fairygui.GImage><any>(this.getChildAt(4));
			this.m_coin = <fairygui.GTextField><any>(this.getChildAt(5));
		}
	}
}