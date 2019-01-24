/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_cardType extends fairygui.GComponent {

		public m_typeChoose:fairygui.Controller;
		public m_lang_dragon:fairygui.GLoader;
		public m_lang_blackjack:fairygui.GLoader;

		public static URL:string = "ui://2mffi74eu1w84i";

		public static createInstance():FUI_cardType {
			return <FUI_cardType><any>(fairygui.UIPackage.createObject("room","cardType"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_typeChoose = this.getControllerAt(0);
			this.m_lang_dragon = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_lang_blackjack = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}