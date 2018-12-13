/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_clickToBet extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_lang_djxz:fairygui.GLoader;

		public static URL:string = "ui://2mffi74eu1w84h";

		public static createInstance():FUI_clickToBet {
			return <FUI_clickToBet><any>(fairygui.UIPackage.createObject("room","clickToBet"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_lang_djxz = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}