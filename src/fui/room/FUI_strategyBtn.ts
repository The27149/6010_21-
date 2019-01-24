/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_strategyBtn extends fairygui.GComponent {

		public m_n0:FUI_strategyBt2;

		public static URL:string = "ui://2mffi74eo440db";

		public static createInstance():FUI_strategyBtn {
			return <FUI_strategyBtn><any>(fairygui.UIPackage.createObject("room","strategyBtn"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <FUI_strategyBt2><any>(this.getChildAt(0));
		}
	}
}