/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_cardsList extends fairygui.GComponent {

		public m_list2:fairygui.GList;
		public m_list1:fairygui.GList;
		public m_lang_double:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl3a";

		public static createInstance():FUI_cardsList {
			return <FUI_cardsList><any>(fairygui.UIPackage.createObject("room","cardsList"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_list2 = <fairygui.GList><any>(this.getChildAt(0));
			this.m_list1 = <fairygui.GList><any>(this.getChildAt(1));
			this.m_lang_double = <fairygui.GLoader><any>(this.getChildAt(2));
		}
	}
}