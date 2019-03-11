/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_match extends fairygui.GComponent {

		public m_n4:fairygui.GLoader;
		public m_lang_word:fairygui.GTextField;

		public static URL:string = "ui://2mffi74eujigb4";

		public static createInstance():FUI_match {
			return <FUI_match><any>(fairygui.UIPackage.createObject("room","match"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n4 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_word = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}