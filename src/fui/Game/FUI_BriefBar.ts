/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_BriefBar extends fairygui.GComponent {

		public m_n12:fairygui.GImage;
		public m_n11:fairygui.GImage;
		public m_n9:fairygui.GImage;
		public m_nickname:fairygui.GTextField;
		public m_coin:fairygui.GTextField;
		public m_avatar:fairygui.GLoader;
		public m_n10:fairygui.GImage;

		public static URL:string = "ui://j9tv3reanpwg2h";

		public static createInstance():FUI_BriefBar {
			return <FUI_BriefBar><any>(fairygui.UIPackage.createObject("Game","BriefBar"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n12 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n11 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_n9 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_nickname = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_coin = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_avatar = <fairygui.GLoader><any>(this.getChildAt(5));
			this.m_n10 = <fairygui.GImage><any>(this.getChildAt(6));
		}
	}
}