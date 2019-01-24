/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_gmSubmit extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n3:fairygui.GGraph;
		public m_n4:fairygui.GTextField;

		public static URL:string = "ui://8oy4o0mbo4403a";

		public static createInstance():FUI_gmSubmit {
			return <FUI_gmSubmit><any>(fairygui.UIPackage.createObject("Game","gmSubmit"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n3 = <fairygui.GGraph><any>(this.getChildAt(0));
			this.m_n4 = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}