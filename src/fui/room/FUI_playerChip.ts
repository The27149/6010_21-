/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_playerChip extends fairygui.GComponent {

		public m_selectedCtl:fairygui.Controller;
		public m_n5:fairygui.GImage;
		public m_n3:fairygui.GImage;

		public static URL:string = "ui://2mffi74ewuvl3i";

		public static createInstance():FUI_playerChip {
			return <FUI_playerChip><any>(fairygui.UIPackage.createObject("room","playerChip"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_selectedCtl = this.getControllerAt(0);
			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(1));
		}
	}
}