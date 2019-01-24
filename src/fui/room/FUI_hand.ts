/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_hand extends fairygui.GComponent {

		public m_actionCtl:fairygui.Controller;
		public m_n12:fairygui.GImage;
		public m_n14:fairygui.GImage;
		public m_bet:fairygui.GMovieClip;
		public m_betLeft:fairygui.GMovieClip;
		public m_betRight:fairygui.GMovieClip;
		public m_stopCard:fairygui.GMovieClip;
		public m_needCard:fairygui.GMovieClip;

		public static URL:string = "ui://2mffi74eggptci";

		public static createInstance():FUI_hand {
			return <FUI_hand><any>(fairygui.UIPackage.createObject("room","hand"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_actionCtl = this.getControllerAt(0);
			this.m_n12 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n14 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_bet = <fairygui.GMovieClip><any>(this.getChildAt(2));
			this.m_betLeft = <fairygui.GMovieClip><any>(this.getChildAt(3));
			this.m_betRight = <fairygui.GMovieClip><any>(this.getChildAt(4));
			this.m_stopCard = <fairygui.GMovieClip><any>(this.getChildAt(5));
			this.m_needCard = <fairygui.GMovieClip><any>(this.getChildAt(6));
		}
	}
}