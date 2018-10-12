/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_RoomItems extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_item1:FUI_RoomItemBG1;
		public m_item2:FUI_RoomItemBG2;
		public m_item3:FUI_RoomItemBG3;
		public m_item4:FUI_RoomItemBG4;

		public static URL:string = "ui://j9tv3reanpwg62";

		public static createInstance():FUI_RoomItems {
			return <FUI_RoomItems><any>(fairygui.UIPackage.createObject("Game","RoomItems"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_item1 = <FUI_RoomItemBG1><any>(this.getChildAt(0));
			this.m_item2 = <FUI_RoomItemBG2><any>(this.getChildAt(1));
			this.m_item3 = <FUI_RoomItemBG3><any>(this.getChildAt(2));
			this.m_item4 = <FUI_RoomItemBG4><any>(this.getChildAt(3));
		}
	}
}