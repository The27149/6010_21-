/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_RoomBGView extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_n13:fairygui.GImage;
		public m_n14:fairygui.GImage;

		public static URL:string = "ui://j9tv3rean5qo7y";

		public static createInstance():FUI_RoomBGView {
			return <FUI_RoomBGView><any>(fairygui.UIPackage.createObject("Game","RoomBGView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_n13 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n14 = <fairygui.GImage><any>(this.getChildAt(1));
		}
	}
}