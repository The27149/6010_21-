/**
* 工具类 
*/
namespace common {
	import Sprite = Laya.Sprite;

	enum COLOR { CLUB = 1, DIAMOND = 2, HEART = 3, SPADE = 4 };

	export class Utils {
		// /** 全屏窗口 */
		// public static UILayer: Laya.Sprite;
		// /** 窗口 */
		// public static DialogLayer: Laya.Sprite;
		// /** 次级窗口 */
		// public static SecondaryLayer: Laya.Sprite;
		// /** 操作提示*/
		// public static NoticeLayer: Laya.Sprite;
		// /** 飘子 */
		// public static TipsLayer: Laya.Sprite;
		// /**  */
		// public static EffectLayer: Laya.Sprite;

		public static isDebug:boolean = false;

		private static KEYSTR64: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

		constructor() {
		}

		public static openUrl(url: string): void {
			window.location.href = url;
		}

		public static log(message?: any, ...optionalParams: any[]):void{
			if(this.isDebug){
               console.log(message,...optionalParams);
			}
			
		}

		public static decode(id: string, value: string): string {
			var element = document.getElementById(id);
			if (element) {
				var attribute = element.getAttribute(value);
				if (id === "myVersion" || id === "token") {
					return attribute;
				}

				return Utils.decodeByBase64(attribute);
			}
			
			switch (id) {
				case "serverIp":
					return Utils.decodeByBase64("d3NzOi8vMS53YW50Z2FtZS5vcmc=");
				case "lobbyUrl":
					return Utils.decodeByBase64("aHR0cHM6Ly9sb2JieS53YW50Z2FtZS5vcmcvP3R5cGU9aDU=");
				case "serverPort":
					return Utils.decodeByBase64("ODA5Mw==");
				case "token":
					return Utils.decodeByBase64("ODAxQjY5NEQ0QTYxNUYyNA==");
				case "historyUrl":
					return Utils.decodeByBase64("aHR0cHM6Ly9jZG4ubHZ5ZXRvd24uY29tL2hpc3Rvcnk/c2VydmVyX2lkPTI1JmNsaWVudD1oNQ==");
			}

			return null;
		}

		public static decodeByBase64(input: string): string {
			var output = [],
				chr1, chr2, chr3,
				enc1, enc2, enc3, enc4,
				i = 0;

			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

			while (i < input.length) {
				enc1 = Utils.KEYSTR64.indexOf(input.charAt(i++));
				enc2 = Utils.KEYSTR64.indexOf(input.charAt(i++));
				enc3 = Utils.KEYSTR64.indexOf(input.charAt(i++));
				enc4 = Utils.KEYSTR64.indexOf(input.charAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output.push(String.fromCharCode(chr1));

				if (enc3 !== 64) {
					output.push(String.fromCharCode(chr2));
				}
				if (enc4 !== 64) {
					output.push(String.fromCharCode(chr3));
				}
			}

			return output.join('');
		}

		// public static check_MoneyText(exInput: Laya.TextInput, max: number, min: number, slider: Laya.HSlider = null, MoneySupply: game.MoneySupplyDialog = null): void {
		// 	let str = exInput.text;
		// 	var end: string = "";
		// 	let arr: Array<any> = [];
		// 	// console.log(str + "str");
		// 	if (str.indexOf(".") != -1) {
		// 		end = str.substr(str.indexOf("."), str.length);
		// 		if (end.length > 3)
		// 			end = end.substr(0, 3);
		// 		// console.log(end + "^^^");
		// 		arr = str.substr(0, str.indexOf(".")).split("");
		// 	}
		// 	else
		// 		arr = str.split("");



		// 	var len: number = str.length;
		// 	var a: Array<number> = [];

		// 	for (var i = 0; i < arr.length; i++) {
		// 		if (Number(arr[i]) || arr[i] == "0") {
		// 			var n: number = Number(arr[i]);
		// 			a.push(n)
		// 		}
		// 	}

		// 	var money: number = Number(a.join(""));
		// 	var n: number = 10;
		// 	var x: number = 0;
		// 	if (end != "" && end.length > 1) {
		// 		if (end.length == 3) n = 100;

		// 		x = Number(end.substr(1, end.length)) / n;
		// 	}
		// 	// console.log(money + "money");

		// 	if (money + x > max / 100) {
		// 		money = max / 100;
		// 		exInput.text = String(max / 100);
		// 		this.check_MoneyText(exInput, max, min, slider);


		// 	} else if (money + x < min / 100) {
		// 		money = min / 100;
		// 		exInput.text = String(min / 100);

		// 		this.check_MoneyText(exInput, max, min, slider);
		// 	}
		// 	else
		// 		exInput.text = this.formatNum_00(money) + end;



		// 	if (slider != null) { //进度条有问题。
		// 		var num: number = Number(money + end) / max;
		// 		if (MoneySupply)
		// 			MoneySupply.isSliderEvent = false;
		// 		slider.value = num * 10000;
			
		// 	}


		// }

		public static check_Phone_Text(exInput: Laya.TextInput, max: number, min: number): void {
			let str = exInput.text;
			var end: string = "";
			let arr: Array<any> = [];
			// console.log(str + "str");
			if (str.indexOf(".") != -1) {
				end = str.substr(str.indexOf("."), str.length);
				if (end.length > 3)
					end = end.substr(0, 3);
				if(end.indexOf(".")>-1){
					end = end.substr(end.indexOf("."), end.length);
				}
				// console.log(end + "^^^");
				arr = str.substr(0, str.indexOf(".")).split("");
			}
			else
				arr = str.split("");



			var len: number = str.length;
			var a: Array<number> = [];

			for (var i = 0; i < arr.length; i++) {
				if (Number(arr[i]) || arr[i] == "0") {
					var n: number = Number(arr[i]);
					a.push(n)
				}
			}

			var money: number = Number(a.join(""));
			var n: number = 10;
			var x: number = 0;
			if (end != "" && end.length > 1) {
				if (end.length == 3) n = 100;

				x = Number(end.substr(1, end.length)) / n;
			}

			exInput.text = this.formatNum_00(money) + end;




		}


		public static just_num(exInput: string): string {
			let str = exInput;
			var end: string = "";
			let arr: Array<any> = [];
			// console.log(str + "str");
			if (str.indexOf(".") != -1) {
				end = str.substr(str.indexOf("."), str.length);
				if (end.length > 3)
					end = end.substr(0, 3);
				// console.log(end + "^^^");
				arr = str.substr(0, str.indexOf(".")).split("");
			}
			else
				arr = str.split("");



			var len: number = str.length;
			var a: Array<number> = [];

			for (var i = 0; i < arr.length; i++) {
				if (Number(arr[i]) || arr[i] == "0") {
					var n: number = Number(arr[i]);
					a.push(n)
				}
			}

			var money: number = Number(a.join(""));
			var n: number = 10;
			var x: number = 0;
			if (end != "" && end.length > 1) {
				if (end.length == 3) n = 100;

				x = Number(end.substr(1, end.length)) / n;
			}
			return money + end;

		}

		public static formatNum_00(num: number, insertSign: string = ","): string {
			var s: string = num.toString();
			var n: string;
			var arr: Array<any>;
			if (s.indexOf(".") == -1)
				n = "";
			else {
				arr = s.split("");
				arr.splice(arr.indexOf("."), 1);
				n = "." + arr.splice(arr.length - 2, 2).join("");
				s = arr.join("");
			}
			arr = [];
			var str: string = Number(num).toString();
			var idx: number = 0;
			for (var i: number = str.length - 1; i >= 0; i--) {
				idx++;
				if (idx == 3 && i != 0) {
					idx = 1;
					str = str.substring(0, i) + insertSign + str.substr(i);
					i--;
				}
			}
			return str + n;
		}


    public static dateformat(time:number,fmt:string):string {
		let date = new Date(time);
        let o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }


	public static spliceElement(array:any[],e:any):number{
        let index:number = array.indexOf(e);
		if(index>-1){
           array.splice(index,1);
		}
         
        return index;
        
	}


	public static getRandom(min:number,max:number){
         return Math.floor(Math.random() * (max - min) + min);
	}

    //美国夏令时（3月11日至11月7日），冬令时（11月8日至次年3月11日）  凌晨2点开始
    //console.log("*******************东区时间************************************");
    // console.log("零时区-伦敦时间：" + getLocalTime(0));
    // console.log("东一区-柏林时间：" + getLocalTime(1));
    // console.log("东二区-雅典时间：" + getLocalTime(2));
    // console.log("东三区-莫斯科时间：" + getLocalTime(3));
    // console.log("东四区-时间：" + getLocalTime(4));
    // console.log("东五区-伊斯兰堡时间：" + getLocalTime(5));
    // console.log("东六区-科伦坡时间：" + getLocalTime(6));
    // console.log("东七区-曼谷时间：" + getLocalTime(7));
    // console.log("东八区-北京时间：" + getLocalTime(8));
    // console.log("东九区-东京时间：" + getLocalTime(9));
    // console.log("东十区-悉尼时间：" + getLocalTime(10));
    // console.log("东十二区-斐济时间：" + getLocalTime(12));
    // console.log("*******************西区时间************************************");
    // console.log("西十区-斐济时间：" + getLocalTime(-10));
    // console.log("西九区-阿拉斯加时间：" + getLocalTime(-9));
    // console.log("西八区-太平洋时间（美国和加拿大）：" + getLocalTime(-8));
    // console.log("西七区-山地时间（美国和加拿大）：" + getLocalTime(-7));
    // console.log("西六区-中部时间（美国和加拿大）：" + getLocalTime(-6));
    // console.log("西五区-东部时间（美国和加拿大）：" + getLocalTime(-5));
    // console.log("西四区-大西洋时间（加拿大）：" + getLocalTime(-4));
    // console.log("西三区-巴西利亚时间：" + getLocalTime(-3));
    //得到标准时区(GMT)的时间的函数
    public static  getLocalTime (i:number) {
        //参数i为时区值数字，比如北京为东八区则输进8,西5输入-5
        var d = new Date();
        //得到1970年一月一日到现在的秒数
        var len = d.getTime();
        //本地时间与GMT时间的时间偏移差
        var offset = d.getTimezoneOffset() * 60000;
        //得到现在的格林尼治时间
        var utcTime = len + offset;
        return utcTime + 3600000 * i;
    };

    public static getTimeByTimeZone(time:number, index:number) {
        var d = new Date();
        //本地时间与GMT时间的时间偏移差
        var offset = d.getTimezoneOffset() * 60000;
        //得到现在的格林尼治时间
        var utcTime = time + offset;
        return utcTime + 3600000 * index;
    }

		public static localTimeConvertToUSTime(time:number) {
			var d = new Date();
			//本地时间与GMT时间的时间偏移差
			var offset = d.getTimezoneOffset() * 60000;
			//得到现在的格林尼治时间
			var utcTime = time - offset;
			return utcTime + 3600000 * 4;
		}

		// public static setItem(key: string, value: string): void {
		// 	key = "game_id:"+manager.AccountCenter.game_id +" key:"+ key;
		// 	Laya.LocalStorage.setItem(key, value);
		// }

		// public static getItem(key: string): string {
		// 	key = "game_id:"+manager.AccountCenter.game_id +" key:"+ key;
		// 	return Laya.LocalStorage.getItem(key);
		// }

		public static popUIEffect(ui: Laya.Box): void {
			ui.scale(0.7, 0.7, true);
			ui.alpha = 0;

			Laya.Tween.to(ui, { alpha: 1 }, 100);
			Laya.Tween.to(ui, { scaleX: 1.05, scaleY: 1.05 }, 200);
			Laya.Tween.to(ui, { scaleX: 1, scaleY: 1 }, 50, null, null, 200);
		}

		public static stringFormat(content: string, args: Array<any>): string {
			for (var i: number = 0; i < args.length; i++) {
				var regexp = new RegExp('\\{' + i + '\\}', 'gi');
				content = content.replace(regexp, args[i]);
			}

			return content;
		}

		public static formatNumber(num:number) {
			num = num / 100;
			var sign:boolean = (num == Math.abs(num));
			num = Math.abs(num);
			var str:string= num.toString();
			if(str.indexOf(".")>-1 && str.split(".")[1].length>2){
				var index:number= str.indexOf(".");
				var len:number= str.length;
				str = str.substring(0, index + 3);
			}
			var value:string = str.replace(/(^|\s)\d+/g, function (m:string) {
				return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',');
			});

			return sign?value:"-"+value;
      };



		public static setPicture(container: any, url: string): void {
			if (container instanceof Laya.Image) {
				(container as Laya.Image).source = Laya.loader.getRes(url);
			} else if (container instanceof Sprite) {
				container.graphics.drawTexture(Laya.loader.getRes(url));
			}
		}


		public static httpRequest(url: string,context: any = null,onCompleteHandler: Function = null,onErrorHandler: Function = null,
		   onProcessHandler: Function = null,data: any = null,method: string = "post",responseType: string = "json",headers: any[] = null,): Laya.HttpRequest {

			var xhr: Laya.HttpRequest = new Laya.HttpRequest();
			xhr.once(Laya.Event.COMPLETE, context, (function (request: Laya.HttpRequest): Function {
				return function (e: any) {
					onCompleteHandler.apply(context, [e, request.data]);
				};
			})(xhr));
			xhr.once(Laya.Event.ERROR, context, onErrorHandler);
			xhr.once(Laya.Event.PROGRESS, context, onProcessHandler);
			xhr.send(url, data, "get", responseType, []);

			return xhr;
		}

       public static getDateStr(year: number, month: number, day: number, config: any): Array<any> {
			config = config || { minDate: "1900-01-01", maxDate: "2099-12-31" };
			//Utils.log(Utils.stringFormat("year: {0}, month: {1}, day: {2}", [year, month, day]));
			var arry: Array<any> = [];

			//计算某年某月有多少天,如果是二月，闰年28天否则29天
			var setMonthDays: Function = function (year: number, month: number): number {
				var er: number = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
				return [31, er, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
			}
			//得到指定月的上个月最后一天传进来按12月算
			var getPervMonthLastDay: Function = function (year: number, month: number): number {
				return new Date(year, month - 1, 0).getDate();
			}

			//补齐数位
			var digit: Function = function (num: number): string {
				return num < 10 ? "0" + num : num.toString();
			}

			//当前月第一天是星期几
			var date: number = setMonthDays(year, month);
			var weekday: number = new Date(year, month - 1, 1).getDay();
			//根据这个星期算前面几天的上个月最后几天
			var prevLastDay = weekday !== 0 ? weekday : weekday + 7;
			//得到上个月最后一天
			var pervMonthlastDay: number = getPervMonthLastDay(year, month);
			var currentMonthDays: number = getPervMonthLastDay(year, month + 1);
			//上月最后几天循环
			var lastdays: number = pervMonthlastDay - prevLastDay;
			//判断是否超出允许的日期范围
			var startDay: number = 1;
			var minArr: Array<number> = config.minDate.split("-");
			var maxArr: Array<number> = config.maxDate.split("-");
			var endDay: number = currentMonthDays;
			var thisDate: Date = new Date(year, month, day);
			var firstDate: Date = new Date(year, month, 1);
			var lastDate: Date = new Date(year, month, currentMonthDays);
			var minTime: Date = new Date(minArr[0], minArr[1], minArr[2]);
			var maxTime: Date = new Date(maxArr[0], maxArr[1], maxArr[2]);
			var minDateDay: number = minTime.getDate();

			if (minTime > lastDate) {
				startDay = currentMonthDays + 1;
			} else if (minTime >= firstDate && minTime <= lastDate) {
				startDay = minDateDay;
			} else if (minTime >= firstDate) {

			}

			if (maxTime) {
				var maxDateDay: number = maxTime.getDate();
				if (maxTime < firstDate) {
					endDay = startDay;
				} else if (maxTime >= firstDate && maxTime <= lastDate) {
					endDay = maxDateDay;
				}
			}

			//循环上月剩余的天数
			for (var p: number = prevLastDay - 1; p >= 0; p--) {
				var py: number = 0;
				var pm: number = 0;
				var preCls: number = 0;
				var preDays: number = digit(pervMonthlastDay - p);
				month === 1 ? (py = year - 1, pm = 13) : (py = year, pm = month);
				var thatpretm: number = parseInt(py.toString() + digit(pm - 1).toString() + preDays.toString());
				var minpretm: number = parseInt(minArr[0].toString() + digit(minArr[1]).toString() + digit(minArr[2]).toString());
				var maxnexttm: number = parseInt(maxArr[0].toString() + digit(maxArr[1]).toString() + digit(maxArr[2]).toString());
				var inTime: string = thatpretm >= minpretm && thatpretm <= maxnexttm ? "prevdate" : "disabled";
				arry.push({
					inTime: inTime,
					py: py,
					pm: pm - 1,
					pd: preDays
				})
			}

			//循环本月的天数,将日期按允许的范围分三段拼接
			for (var i: number = 1; i < startDay; i++) {
				i = digit(i);
				arry.push({
					inTime: "disabled",
					py: year,
					pm: month,
					pd: i
				});
			}

			for (var j: number = startDay; j <= endDay; j++) {
				j = digit(j);
				arry.push({
					inTime: day == j ? "action" : "normal",
					py: year,
					pm: month,
					pd: j
				})
			}

			for (var k: number = endDay + 1; k <= currentMonthDays; k++) {
				k = digit(k);
				arry.push({
					inTime: "disabled",
					py: year,
					pm: month,
					pd: k
				})
			}

			//循环补上下个月的开始几天
			var nextDayArr = [], nextMonthStartDays = 42 - prevLastDay - setMonthDays(year, month);
			for (var n = 1; n <= nextMonthStartDays; n++) {
				var ny, nm, nextCls;
				n = digit(n);
				month >= 12 ? (ny = year + 1, nm = 0) : (ny = year, nm = month);
				var thatnexttm = parseInt(ny.toString() + digit(parseInt(nm) + 1).toString() + digit(n).toString()),
					minnexttm = parseInt(minArr[0].toString() + digit(minArr[1]).toString() + digit(minArr[2]).toString()),
					maxnexttm = parseInt(maxArr[0].toString() + digit(maxArr[1]).toString() + digit(maxArr[2]).toString());
				nextCls = thatnexttm <= maxnexttm && thatnexttm >= minnexttm ? "nextdate" : nextCls = "disabled";
				arry.push({
					inTime: nextCls,
					py: ny,
					pm: nm + 1,
					pd: n
				})
			}
			return arry;
		}

		public static initLayers(): void {
			var zIndex: number = 0;

			// Utils.UILayer = new Laya.Sprite();
			// Utils.DialogLayer = new Laya.Sprite();
			// Utils.SecondaryLayer = new Laya.Sprite();
			// Utils.NoticeLayer = new Laya.Sprite();
			// Utils.TipsLayer = new Laya.Sprite();
			// Utils.EffectLayer = new Laya.Sprite();

			// Laya.stage.addChildAt(Utils.UILayer, zIndex++);
			// Laya.stage.addChildAt(Utils.DialogLayer, zIndex++);
			// Laya.stage.addChildAt(Utils.SecondaryLayer, zIndex++);
			// Laya.stage.addChildAt(Utils.NoticeLayer, zIndex++);
			// Laya.stage.addChildAt(Utils.TipsLayer, zIndex++);
			// Laya.stage.addChildAt(Utils.EffectLayer, zIndex++);
		}

		  public static  getCardStyleByPath(rspath:string):string{
             let i = rspath.lastIndexOf("_");
			 let j = rspath.lastIndexOf(".");
			 let str = rspath.substr(0,i+1)+"{0}"+rspath.substr(j);
			 //Utils.log(str);
			 return str;
              
		  }

		public static isMacChrome():boolean{
			var ua = navigator.userAgent.toLowerCase();

			if(!Laya.Browser.onPC){
				return false;
			}

			return ua.indexOf("mac") > -1 && ua.indexOf("chrome")>-1;
		}
          
		 public static isHorizontal():boolean{
			return Laya.Browser.clientWidth >= Laya.Browser.clientHeight;
		 }

		//   public static getCardType(card:number):number{
		// 	  if(card<10){
		// 		  return CARD_TYPE.WANG;
		// 	  }else if(card<20){
		// 		  return CARD_TYPE.FENG;
		// 	  }else if(card<30){
		// 		  return CARD_TYPE.JIAN;
		// 	  }else{
		// 		  return CARD_TYPE.HUA;
		// 	  }
		//   }

		//   public static setNumberClips(num:number,node:Sprite):void{

		//     for(let i=node.numChildren-1;i>=0;i--){
		// 		let clip:Clip = node.getChildAt(i) as Clip;
		// 		let n = num%10;
		// 		clip.index = n;
		// 		num = Math.floor(num/10);
		// 	}

		//   }

    //     public static getTextById(id:number|string){
    //         let txtId = id+"";
	// 		//Utils.log(txtId);
    //         return LANGUAGE[txtId][Application.getInstance().language];
    //     };

	// 	public static replaceLanguageRes(image:UIImage|Button):void{
    //         let skin = image.skin;
	// 		let newSkin = "language/"+Application.getInstance().language+"/"+skin;
	// 		image.skin = newSkin;
	// 	}

	// 	public static getAnimationName(id:string):string{
	// 		if(ANINAME[id]){
    //             return ANINAME[id][Application.getInstance().language];
	// 		}else{
	// 			return id;
	// 		}
	// 	}

	// 	public static getAnimationAtlas(name:string):string{
	// 		let lang = Application.getInstance().language;
    //         return "animation/"+lang+"_"+name+".atlas";
	// 	}

    //    //多语言文本替换，规则为文本组件名为label_lang_xxxx
	// 	public static setChildrensLanguageText(parent:Sprite):void{

    //         for(let i=0;i<parent.numChildren;i++){
    //             let child = parent.getChildAt(i) as Label;
    //             if(child.name.indexOf("label_lang_")>-1){
    //                 let index = child.name.lastIndexOf("_");
    //                 let txtId = child.name.substr(index+1);
    //                 child.text = Utils.getTextById(txtId);
    //             }
    //         }
	// 	}

	// 	public static refreshChildrenPositionY(parent:Sprite,space?:number):void{
	// 		let y = 0;
	// 		space = space||8;
    //         for(let i=0;i<parent.numChildren;i++){
    //             let child = parent.getChildAt(i) as Label;
    //             child.y = y;
	// 			y = y + child.height+space;
    //         }
	// 	}

		public static setChildrenGray(parent:Laya.Sprite,isGray:boolean):void{
			let  grayMat = [0.7, 0, 0, 0, 0, 
						0, 0.7, 0, 0, 0, 
						0, 0, 0.7, 0, 0,
						0, 0, 0, 1, 0];
			let grayFilter = new Laya.ColorFilter(grayMat);
			let  whiteMat = [1, 0, 0, 0, 0, 
							0, 1, 0, 0, 0, 
							0, 0, 1, 0, 0,
							0, 0, 0, 1, 0];
			let wihteFilter = new Laya.ColorFilter(whiteMat);

			let filters = isGray?[grayFilter]:[wihteFilter];
			parent.filters = filters;
			for(let i=0;i<parent.numChildren;i++){
				let child = parent.getChildAt(i) as Laya.Sprite;
				child.filters = filters;     
			}

		  }
       
	   //mac操作系统chrome浏览器,文本纵坐标作偏移
		// public static fixChildrenLabelPositionY(parent:Laya.Node):void{
		// 	let offsetY = -4;
		// 	if(Utils.isMacChrome()){
		// 		for(let i=0;i<parent.numChildren;i++){
		// 			let child = parent.getChildAt(i) as Label;
		// 			if(child.name.indexOf("label_")>-1){
		// 				child.y = child.y + offsetY;
		// 			}
		// 		}
		// 	}
		// }

		// public static fixPanelHeight(parent:Laya.Panel):void{
		// 	if(Utils.isMacChrome()){
		// 		let lastChild = parent.getChildAt(parent.numChildren-1) as Label;
		// 		if(lastChild.name.indexOf("label_")>-1){
		// 			lastChild.height = lastChild.height + 10;
		// 		}
		// 	}
		// }

	}


}