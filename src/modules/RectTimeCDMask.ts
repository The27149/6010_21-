namespace bx
{
	
	export class RectTimeCDMask extends Laya.Sprite
	{
		
		public static commands:Array<string> = [];
		public static  pos:Array<number> = [];
        public static  matix:Laya.Matrix = new Laya.Matrix();
        private  pt:Point = new Point();
		
		private  _rate:number=0;

		private  w:number;
		private  hw:number;
        constructor(){
            super();
        }
		
		public init(w:number)
		{
			
			this.w = w;
			
			this.hw = w*0.5;
			
			this.pt.x = this.hw;
			this.pt.y = -this.hw;
		}
		
		

		public get rate():number
		{
			return this._rate;
		}

		public set rate(value:number)
		{
			if(value < 0){
				value = 0;
			}
			if(value > 1){
				value = 1;
			}
			if(value != this._rate){
				this._rate = value;
				this.redraw();
			}
		}
		
		public  redraw():void{
			this.graphics.clear();
			if(this._rate == 0){
				return;
			}
			
			
			RectTimeCDMask.commands.length = 0;
			RectTimeCDMask.pos.length=0;
			
			RectTimeCDMask.commands.push("moveTo");
			RectTimeCDMask.commands.push("lineTo");
			RectTimeCDMask.pos.push(this.hw);
			RectTimeCDMask.pos.push(this.hw);
			RectTimeCDMask.pos.push(this.hw);
			RectTimeCDMask.pos.push(0);

			
			var r:number = this._rate;
			
			if(r>=0.875){
				RectTimeCDMask.commands.push("lineTo");
				RectTimeCDMask.pos.push(this.hw*Math.tan(Math.PI*2*(r - 0.875)));
				RectTimeCDMask.pos.push(0);
			}else{
				RectTimeCDMask.pos.push(0);
				RectTimeCDMask.pos.push(0);
				
				RectTimeCDMask.commands.push("lineTo");
				if(r>= 0.625){
					RectTimeCDMask.pos.push(0)
					if(r<= 0.75){
						RectTimeCDMask.pos.push(this.hw+this.hw*Math.tan(Math.PI*2*(0.75-r)));
					}else{
						RectTimeCDMask.pos.push(this.hw*(1-Math.tan(Math.PI*2*(r-0.75))));
					}
				}else{
					RectTimeCDMask.pos.push(0);
					RectTimeCDMask.pos.push(this.w);
					
					RectTimeCDMask.commands.push("lineTo");
					if(r>= 0.375){
						if(r<= 0.5){
							RectTimeCDMask.pos.push(this.hw+this.hw*Math.tan(Math.PI*2*(0.5-r)));
						}else{
							RectTimeCDMask.pos.push(this.hw-this.hw*Math.tan(Math.PI*2*(r-0.5)));
						}
						RectTimeCDMask.pos.push(this.w)
					}else{
						RectTimeCDMask.pos.push(this.w);
						RectTimeCDMask.pos.push(this.w);
						
						RectTimeCDMask.commands.push("lineTo");
						if(r >= 0.125){
							RectTimeCDMask.pos.push(this.w);
							if(r<= 0.25){
								RectTimeCDMask.pos.push(this.hw*(1-Math.tan(Math.PI*2*(0.25-r))));
							}else{
								RectTimeCDMask.pos.push(this.hw+this.hw*Math.tan(Math.PI*2*(r-0.25)));
							}
						}else {
							RectTimeCDMask.pos.push(this.w);
							RectTimeCDMask.pos.push(0);
							
							RectTimeCDMask.commands.push("lineTo");
							RectTimeCDMask.pos.push(this.hw + Math.tan(Math.PI*2*(r)) * this.hw);
							RectTimeCDMask.pos.push(0);
						}
					}
				}
				
			}
			
			RectTimeCDMask.commands.push("lineTo");
			RectTimeCDMask.pos.push(this.hw);
			RectTimeCDMask.pos.push(this.hw);
			//自定义路径
            var path:Array<any> =  [
                ["moveTo", RectTimeCDMask.pos[0], RectTimeCDMask.pos[1]], //画笔移到A点
                ["lineTo", RectTimeCDMask.pos[2], RectTimeCDMask.pos[3]],//画到B点
                ["lineTo", RectTimeCDMask.pos[4], RectTimeCDMask.pos[5]],//再画到C点
                ["lineTo", RectTimeCDMask.pos[6], RectTimeCDMask.pos[7]], //继续画到D点
                ["closePath"] //闭合路径
            ];
			this.graphics.drawPath(0,0,path,{fillStyle: "#ff0000"});
		}

	}
}