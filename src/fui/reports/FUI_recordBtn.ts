/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_recordBtn extends fairygui.GComponent {

		public m_ctl:fairygui.Controller;
		public m_n11:fairygui.GImage;
		public m_n12:fairygui.GImage;
		public m_lang_title:fairygui.GLoader;
		public m_lang_title_2:fairygui.GLoader;

		public static URL:string = "ui://93n3k04qbzm716";

		public static createInstance():FUI_recordBtn {
			return <FUI_recordBtn><any>(fairygui.UIPackage.createObject("reports","recordBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctl = this.getControllerAt(0);
			this.m_n11 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n12 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_lang_title = <fairygui.GLoader><any>(this.getChildAt(2));
			this.m_lang_title_2 = <fairygui.GLoader><any>(this.getChildAt(3));
		}
	}
}