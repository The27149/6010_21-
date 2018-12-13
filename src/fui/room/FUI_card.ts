/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_card extends fairygui.GComponent {

		public m_maskCtl:fairygui.Controller;
		public m_card:fairygui.GLoader;
		public m_mask:fairygui.GGraph;
		public m_trun:fairygui.Transition;

		public static URL:string = "ui://2mffi74ewuvl36";

		public static createInstance():FUI_card {
			return <FUI_card><any>(fairygui.UIPackage.createObject("room","card"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_maskCtl = this.getControllerAt(0);
			this.m_card = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_mask = <fairygui.GGraph><any>(this.getChildAt(1));
			this.m_trun = this.getTransitionAt(0);
		}
	}
}