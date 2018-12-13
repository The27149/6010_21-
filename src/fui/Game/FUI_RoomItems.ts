/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_Roomitems extends fairygui.GComponent {

		public m_h_v:fairygui.Controller;
		public m_item1:FUI_item1;
		public m_item2:FUI_item2;
		public m_item3:FUI_item3;
		public m_item4:FUI_item4;

		public static URL:string = "ui://8oy4o0mbcsvz9";

		public static createInstance():FUI_Roomitems {
			return <FUI_Roomitems><any>(fairygui.UIPackage.createObject("Game","Roomitems"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_h_v = this.getControllerAt(0);
			this.m_item1 = <FUI_item1><any>(this.getChildAt(0));
			this.m_item2 = <FUI_item2><any>(this.getChildAt(1));
			this.m_item3 = <FUI_item3><any>(this.getChildAt(2));
			this.m_item4 = <FUI_item4><any>(this.getChildAt(3));
		}
	}
}