/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_SoundBtn extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n2:fairygui.GImage;
		public m_n3:fairygui.GImage;

		public static URL:string = "ui://j9tv3reanpwg39";

		public static createInstance():FUI_SoundBtn {
			return <FUI_SoundBtn><any>(fairygui.UIPackage.createObject("Game","SoundBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(1));
		}
	}
}