namespace common
{
	
	/**
	 * 
	 * 
	 * 抛物线
	 * 
	 */	
	export class Parabola
	{
		
		private  a:number;
		public  k:number;
		private  b:number;

		private  x1:number;

		private  y1:number;

		private  x2:number;

		private  y2:number;
		constructor() {
		}
		/**
		 * 
		 * 顶点式
		 * y=a(x-k)²+b
		 * 
		 * @param x1	点1x
		 * @param y1	点1y
		 * @param x2	点2x
		 * @param y2	点2y
		 * @param b		顶点高度y
		 * 
		 */		
		public parabola(x1:number,y1:number,x2:number,y2:number,b:number)
		{
			if(Math.abs(x1 - x2) < 3){
				x1 -= 5;
			}
			this.y2 = y2;
			this.x2 = x2;
			this.y1 = y1;
			this.x1 = x1;
			this.b = b;
			
			
			
			//y1 = a(x1-k)*(x1-k) + b;
			//y2 = a(x2-k)*(x2-k) + b;
			
			//a  =(y1-b)/((x1-k)*(x1-k));
			//a = (y2-b)/((x2-k)*(x2-k));
			
			//(x1-k)*(x1-k)/(y1-b) = (x2-k)*(x2-k)/(y2-b)
			
			//define tmp1 = (y1-b) ;tmp2 = (y2-b);
			
			// tmp2 * x1*x1 -tmp2 *2*x1*k + tmp2* k*k = tmp1 * x2*x2 -tmp1 *2*x2*k + tmp1* k*k
			
			//一元二次方程  求k 
			// Ax*x + Bx + C = 0;
			//A = tmp2 - tmp1;
			//B = tmp1 *2*x2 - tmp2 *2*x1;
			//C = tmp2 * x1*x1 - tmp1 * x2*x2;
			
			
			
			let tmp1:number = y1-b;
			let tmp2:number = y2-b;
			let A:number = tmp2 - tmp1;
			let B:number = tmp1 *2*x2 - tmp2 *2*x1;
			let C:number = tmp2 * x1*x1 - tmp1 * x2*x2;
			
			if(A == 0){
				throw new Error();
			}
			let gen:number = B*B-4*A*C;
			if(gen < 0){
				// trace(B*B);
				// trace(4*A*C);
				// trace(B*B - 4*A*C);
				throw new Error();
			}
			gen = Math.sqrt(gen);
			this.k = (-B + gen)/(2*A);
			if((this.k>x1 && this.k>x2)||(this.k<x1 && this.k<x2)){
				this.k = (-B - gen)/(2*A);
			}
			
			if((this.k>x1 && this.k>x2)||(this.k<x1 && this.k<x2)){
				throw new Error();
			}
			
			let tmp3:number = x1 - this.k;
			if(tmp3 == 0){
				throw new Error();
			}
			tmp3 = tmp3*tmp3;
			this.a = tmp1/tmp3;
			if(this.a < 0){
				throw new Error();
			}
		}
		
		public  fun(x:number):number{
			let tmp:number = (x-this.k);
			let ret:number = this.a * tmp * tmp +this.b;
			if(x < this.k){
				if(x >= this.x1){
					ret = Math.min(this.y1,ret);
				}
			}else{
				if(x <= this.x2){
					ret = Math.min(this.y2,ret);
				}
			}
			return ret;
		}
	}
}