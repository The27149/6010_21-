/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_resultTip extends fairygui.GComponent {

		public m_ctl:fairygui.Controller;
		public m_tongsha:fairygui.GLoader;
		public m_tongpei:fairygui.GLoader;

		public static URL:string = "ui://2mffi74eesmifp";

		public static createInstance():FUI_resultTip {
			return <FUI_resultTip><any>(fairygui.UIPackage.createObject("room","resultTip"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctl = this.getControllerAt(0);
			this.m_tongsha = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_tongpei = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}