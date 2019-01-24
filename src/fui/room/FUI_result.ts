/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_result extends fairygui.GComponent {

		public m_resultCtl:fairygui.Controller;
		public m_win:fairygui.GTextField;
		public m_fail:fairygui.GTextField;

		public static URL:string = "ui://2mffi74e6xefbp";

		public static createInstance():FUI_result {
			return <FUI_result><any>(fairygui.UIPackage.createObject("room","result"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_resultCtl = this.getControllerAt(0);
			this.m_win = <fairygui.GTextField><any>(this.getChildAt(0));
			this.m_fail = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}