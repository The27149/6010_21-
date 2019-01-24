/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_AddWalletBtn extends fairygui.GComponent {

		public m_n0:fairygui.GLoader;

		public static URL:string = "ui://8oy4o0mbl3ii3x";

		public static createInstance():FUI_AddWalletBtn {
			return <FUI_AddWalletBtn><any>(fairygui.UIPackage.createObject("Game","AddWalletBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GLoader><any>(this.getChildAt(0));
		}
	}
}