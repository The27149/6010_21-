/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fui.room {

	export class FUI_selfHead extends fairygui.GComponent {

		public m_n1:fairygui.GGraph;
		public m_head:fairygui.GLoader;

		public static URL:string = "ui://2mffi74ewuvl34";

		public static createInstance():FUI_selfHead {
			return <FUI_selfHead><any>(fairygui.UIPackage.createObject("room","selfHead"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n1 = <fairygui.GGraph><any>(this.getChildAt(0));
			this.m_head = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}