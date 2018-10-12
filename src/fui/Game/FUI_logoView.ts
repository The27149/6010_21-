/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_logoView extends fairygui.GComponent {

		public m_n0:fairygui.GMovieClip;

		public static URL:string = "ui://j9tv3reabaul6w";

		public static createInstance():FUI_logoView {
			return <FUI_logoView><any>(fairygui.UIPackage.createObject("Game","logoView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GMovieClip><any>(this.getChildAt(0));
		}
	}
}