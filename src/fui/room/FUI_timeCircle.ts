/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_timeCircle extends fairygui.GComponent {

		public m_circle:fairygui.GImage;

		public static URL:string = "ui://2mffi74eu1w84v";

		public static createInstance():FUI_timeCircle {
			return <FUI_timeCircle><any>(fairygui.UIPackage.createObject("room","timeCircle"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_circle = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}