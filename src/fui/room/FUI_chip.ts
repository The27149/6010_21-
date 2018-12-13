/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_chip extends fairygui.GComponent {

		public m_img:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ehyur4c";

		public static createInstance():FUI_chip {
			return <FUI_chip><any>(fairygui.UIPackage.createObject("room","chip"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_img = <fairygui.GLoader><any>(this.getChildAt(0));
		}
	}
}