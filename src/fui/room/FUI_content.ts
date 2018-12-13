/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_content extends fairygui.GComponent {

		public m_lang_content:fairygui.GLoader;

		public static URL:string = "ui://2mffi74eujigbc";

		public static createInstance():FUI_content {
			return <FUI_content><any>(fairygui.UIPackage.createObject("room","content"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_lang_content = <fairygui.GLoader><any>(this.getChildAt(0));
		}
	}
}