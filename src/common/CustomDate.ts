/**
* name 
*/
namespace model{
	export class CustomDate{
		private _year: number;
		private _month: number;
		private _day: number;

		constructor(year: number, month: number, day: number) {
			this._year = year;
			this._month = month;
			this._day = day;
		}

		set year(value: number) {
			this._year = value;
		}

		get year(): number {
			return this._year;
		}

		set month(value: number) {
			this._month = value;
		}

		get month(): number {
			return this._month;
		}
		set day(value: number) {
			this._day = value;
		}

		get day(): number {
			return this._day;
		}

		//补齐数位
		private digit(num: number): string {
			var str: string = num.toString();
			return str.length <  2 ? "0" + num : num.toString();
		}

		public toString(): string {
			return this._year + "-" + this.digit(this._month) + "-" + this.digit(this._day);
		}

		public getStartTimeFormat():string{
			return this._year + "-" + this.digit(this._month) + "-" + this.digit(this._day) +" 00:00:00";
		}

		public getEndTimeFormat():string{
			return this._year + "-" + this.digit(this._month) + "-" + this.digit(this._day) +" 23:59:59";
		}

		public getTime():number{
			var _date = new Date(this._year,this._month-1,this._day);       

			return _date.getTime();			
		}

		public compare(that: CustomDate): number {
			var thisToString: string = this.digit(this._year) + this.digit(this._month) + this.digit(this._day);
			var thatToString: string = this.digit(that._year) + this.digit(that._month) + this.digit(that._day);

			if (parseInt(thisToString) === parseInt(thatToString)) {
				return 0;
			}else if (parseInt(thisToString) < parseInt(thatToString)) {
				return -1;
			}else {
				return 1;
			}
		}

	}
}