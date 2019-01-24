/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.help {

	export class FUI_help_info extends fairygui.GComponent {

		public m_lang_info:fairygui.GLoader;

		public static URL:string = "ui://txmqgqddujig6";

		public static createInstance():FUI_help_info {
			return <FUI_help_info><any>(fairygui.UIPackage.createObject("help","help_info"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_lang_info = <fairygui.GLoader><any>(this.getChildAt(0));
		}
	}
}