/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_sider_bet extends fairygui.GComponent {

		public m_n7:fairygui.GImage;
		public m_bg:fairygui.GLoader;
		public m_active:fairygui.GImage;
		public m_grip:fairygui.GLoader;
		public m_title:FUI_title;

		public static URL:string = "ui://2mffi74eu1w84o";

		public static createInstance():FUI_sider_bet {
			return <FUI_sider_bet><any>(fairygui.UIPackage.createObject("room","sider_bet"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n7 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_bg = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_active = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_grip = <fairygui.GLoader><any>(this.getChildAt(3));
			this.m_title = <FUI_title><any>(this.getChildAt(4));
		}
	}
}