/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_clock extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_numb:fairygui.GTextField;

		public static URL:string = "ui://2mffi74ewuvl3v";

		public static createInstance():FUI_clock {
			return <FUI_clock><any>(fairygui.UIPackage.createObject("room","clock"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_numb = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}