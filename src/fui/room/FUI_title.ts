/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_title extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_value:fairygui.GTextField;

		public static URL:string = "ui://2mffi74eu1w84p";

		public static createInstance():FUI_title {
			return <FUI_title><any>(fairygui.UIPackage.createObject("room","title"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_value = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}