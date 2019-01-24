/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_set extends fairygui.GComponent {

		public m_n0:fairygui.GLoader;
		public m_lang_title:fairygui.GLoader;
		public m_lang_music:fairygui.GLoader;
		public m_slider_music:FUI_musicSlider;
		public m_slider_sound:FUI_musicSlider;
		public m_lang_sound:fairygui.GLoader;
		public m_btn_music:FUI_musicBtn;
		public m_btn_sound:FUI_musicBtn;
		public m_close:FUI_close;

		public static URL:string = "ui://8oy4o0mbd8322v";

		public static createInstance():FUI_set {
			return <FUI_set><any>(fairygui.UIPackage.createObject("Game","set"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_title = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_lang_music = <fairygui.GLoader><any>(this.getChildAt(2));
			this.m_slider_music = <FUI_musicSlider><any>(this.getChildAt(3));
			this.m_slider_sound = <FUI_musicSlider><any>(this.getChildAt(4));
			this.m_lang_sound = <fairygui.GLoader><any>(this.getChildAt(5));
			this.m_btn_music = <FUI_musicBtn><any>(this.getChildAt(6));
			this.m_btn_sound = <FUI_musicBtn><any>(this.getChildAt(7));
			this.m_close = <FUI_close><any>(this.getChildAt(8));
		}
	}
}