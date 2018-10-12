/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.Game {

	export class FUI_MusicView extends fairygui.GComponent {

		public m_n2:fairygui.GLoader;
		public m_lang_title:fairygui.GLoader;
		public m_lang_music:fairygui.GLoader;
		public m_lang_sound:fairygui.GLoader;
		public m_musicTog:FUI_SoundBtn;
		public m_soundTog:FUI_SoundBtn;
		public m_closeBtn:FUI_CloseBtn;
		public m_musicSlider:FUI_SliderMusic;
		public m_soundSlider:FUI_SliderMusic;

		public static URL:string = "ui://j9tv3reanpwg38";

		public static createInstance():FUI_MusicView {
			return <FUI_MusicView><any>(fairygui.UIPackage.createObject("Game","MusicView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n2 = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_title = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_lang_music = <fairygui.GLoader><any>(this.getChildAt(2));
			this.m_lang_sound = <fairygui.GLoader><any>(this.getChildAt(3));
			this.m_musicTog = <FUI_SoundBtn><any>(this.getChildAt(4));
			this.m_soundTog = <FUI_SoundBtn><any>(this.getChildAt(5));
			this.m_closeBtn = <FUI_CloseBtn><any>(this.getChildAt(6));
			this.m_musicSlider = <FUI_SliderMusic><any>(this.getChildAt(7));
			this.m_soundSlider = <FUI_SliderMusic><any>(this.getChildAt(8));
		}
	}
}