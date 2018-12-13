/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_cardsPoint2 extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_value:fairygui.GTextField;

		public static URL:string = "ui://2mffi74ewuvl3d";

		public static createInstance():FUI_cardsPoint2 {
			return <FUI_cardsPoint2><any>(fairygui.UIPackage.createObject("room","cardsPoint2"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_value = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}