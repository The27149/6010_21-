/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_strategy extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_lang_title:fairygui.GLoader;
		public m_close:FUI_close;
		public m_n3:fairygui.GImage;
		public m_lang_point:fairygui.GLoader;
		public m_lang_self:fairygui.GLoader;
		public m_lang_banker:fairygui.GLoader;
		public m_n8:FUI_content;

		public static URL:string = "ui://2mffi74eujigba";

		public static createInstance():FUI_strategy {
			return <FUI_strategy><any>(fairygui.UIPackage.createObject("room","strategy"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_title = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_close = <FUI_close><any>(this.getChildAt(2));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_lang_point = <fairygui.GLoader><any>(this.getChildAt(4));
			this.m_lang_self = <fairygui.GLoader><any>(this.getChildAt(5));
			this.m_lang_banker = <fairygui.GLoader><any>(this.getChildAt(6));
			this.m_n8 = <FUI_content><any>(this.getChildAt(7));
		}
	}
}