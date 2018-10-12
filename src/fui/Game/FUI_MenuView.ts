/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_MenuView extends fairygui.GComponent {

		public m_ctr:fairygui.Controller;
		public m_n0:FUI_help;
		public m_n1:FUI_home;
		public m_n2:FUI_music;
		public m_n3:FUI_reports;
		public m_n13:fairygui.GImage;
		public m_n6:FUI_room_help;
		public m_n7:FUI_room_home;
		public m_n8:FUI_room_music;
		public m_n9:FUI_room_reports;
		public m_n12:fairygui.GGroup;
		public m_n5:FUI_switch_on;
		public m_n4:FUI_switch_off;

		public static URL:string = "ui://j9tv3reanpwg2q";

		public static createInstance():FUI_MenuView {
			return <FUI_MenuView><any>(fairygui.UIPackage.createObject("Game","MenuView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctr = this.getControllerAt(0);
			this.m_n0 = <FUI_help><any>(this.getChildAt(0));
			this.m_n1 = <FUI_home><any>(this.getChildAt(1));
			this.m_n2 = <FUI_music><any>(this.getChildAt(2));
			this.m_n3 = <FUI_reports><any>(this.getChildAt(3));
			this.m_n13 = <fairygui.GImage><any>(this.getChildAt(4));
			this.m_n6 = <FUI_room_help><any>(this.getChildAt(5));
			this.m_n7 = <FUI_room_home><any>(this.getChildAt(6));
			this.m_n8 = <FUI_room_music><any>(this.getChildAt(7));
			this.m_n9 = <FUI_room_reports><any>(this.getChildAt(8));
			this.m_n12 = <fairygui.GGroup><any>(this.getChildAt(9));
			this.m_n5 = <FUI_switch_on><any>(this.getChildAt(10));
			this.m_n4 = <FUI_switch_off><any>(this.getChildAt(11));
		}
	}
}