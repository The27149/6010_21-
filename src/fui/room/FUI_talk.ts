/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_talk extends fairygui.GComponent {

		public m_word:fairygui.Controller;
		public m_lang_fj:fairygui.GLoader;
		public m_lang_sb2:fairygui.GLoader;
		public m_lang_yp:fairygui.GLoader;
		public m_lang_tp:fairygui.GLoader;
		public m_lang_xzwc:fairygui.GLoader;

		public static URL:string = "ui://2mffi74eu1w852";

		public static createInstance():FUI_talk {
			return <FUI_talk><any>(fairygui.UIPackage.createObject("room","talk"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_word = this.getControllerAt(0);
			this.m_lang_fj = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_sb2 = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_lang_yp = <fairygui.GLoader><any>(this.getChildAt(2));
			this.m_lang_tp = <fairygui.GLoader><any>(this.getChildAt(3));
			this.m_lang_xzwc = <fairygui.GLoader><any>(this.getChildAt(4));
		}
	}
}