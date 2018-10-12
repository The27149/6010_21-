/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.help {

	export class FUI_ShowList extends fairygui.GComponent {

		public m_n0:fairygui.GTextField;

		public static URL:string = "ui://fzzpxcn5n5qo4";

		public static createInstance():FUI_ShowList {
			return <FUI_ShowList><any>(fairygui.UIPackage.createObject("help","ShowList"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GTextField><any>(this.getChildAt(0));
		}
	}
}