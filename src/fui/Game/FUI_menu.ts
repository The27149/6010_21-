/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_menu extends fairygui.GComponent {

		public m_ctr:fairygui.Controller;
		public m_n12:FUI_hall_home;
		public m_n8:FUI_hall_rep;
		public m_n10:FUI_hall_help;
		public m_n9:FUI_hall_sound;
		public m_on:FUI_switch;
		public m_off:FUI_switch;
		public m_n18:fairygui.GImage;
		public m_n19:FUI_room_home;
		public m_n20:FUI_room_rep;
		public m_n21:FUI_room_sound;
		public m_n22:FUI_room_help;

		public static URL:string = "ui://8oy4o0mbd8321z";

		public static createInstance():FUI_menu {
			return <FUI_menu><any>(fairygui.UIPackage.createObject("Game","menu"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctr = this.getControllerAt(0);
			this.m_n12 = <FUI_hall_home><any>(this.getChildAt(0));
			this.m_n8 = <FUI_hall_rep><any>(this.getChildAt(1));
			this.m_n10 = <FUI_hall_help><any>(this.getChildAt(2));
			this.m_n9 = <FUI_hall_sound><any>(this.getChildAt(3));
			this.m_on = <FUI_switch><any>(this.getChildAt(4));
			this.m_off = <FUI_switch><any>(this.getChildAt(5));
			this.m_n18 = <fairygui.GImage><any>(this.getChildAt(6));
			this.m_n19 = <FUI_room_home><any>(this.getChildAt(7));
			this.m_n20 = <FUI_room_rep><any>(this.getChildAt(8));
			this.m_n21 = <FUI_room_sound><any>(this.getChildAt(9));
			this.m_n22 = <FUI_room_help><any>(this.getChildAt(10));
		}
	}
}