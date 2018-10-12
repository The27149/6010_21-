/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.reports {

	export class FUI_accountBtn extends fairygui.GComponent {

		public m_ctl:fairygui.Controller;
		public m_n2:fairygui.GLoader;
		public m_n4:fairygui.GLoader;
		public m_lang_title:fairygui.GLoader;
		public m_lang_title_2:fairygui.GLoader;

		public static URL:string = "ui://93n3k04qbzm717";

		public static createInstance():FUI_accountBtn {
			return <FUI_accountBtn><any>(fairygui.UIPackage.createObject("reports","accountBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctl = this.getControllerAt(0);
			this.m_n2 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_n4 = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_lang_title = <fairygui.GLoader><any>(this.getChildAt(2));
			this.m_lang_title_2 = <fairygui.GLoader><any>(this.getChildAt(3));
		}
	}
}