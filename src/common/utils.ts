namespace point21{
    export class Sk{
        constructor(url:string){
            
        }
    }

    export class Utils{
        //由16进制的10进制值获取牌的图片地址
        static getCardImg(value:number):string{
            if(value === 0) return 'assets/room_dt/cards/cardBg.png';
            let color = Math.floor(value / 16);
            let point = value % 16;
            let colorArr:Array<string> = ['f','m','r','h'];
            let pointArr:Array<string> = ['a','2','3','4','5','6','7','8','9','10','j','q','k'];
            return 'assets/room_dt/cards/' + colorArr[color - 1] + pointArr[point - 1] + '.png';
        }

        //获取头像url
        static getHeadUrl(type:number):string{
            let str = 'assets/avatar/head_';
            if(type > 1000){
                type -= 1000;
                str +=  (4 + type);
            }else{
                str += type;
            }
            str += '.png';
            return str;
        }

        //获取筹码图片地址
        static getChipImg(value:number):string{
            return 'assets/room_dt/chips/c' + value + '.png';
        }

        //由筹码值得到对应筹码对象
        static getChipImgObj(value:number):object{
            let obj:object = <any>{};
            let len = value.toString().length;
            let numb:number;
            let n1: number,n2:number;
            let name:number;

            for(let i = 0; i < len; i++){
                numb = this.getValueAt(value,len - i);
                n1 = Math.floor(numb / 5);
                n2 = numb % 5;
                if(n1 > 0){
                    name = 5 * Math.pow(10,i);
                    obj[name] = n1;
                }
                if(n2 > 0){
                    n1 = Math.floor(n2 / 2);
                    n2 = n2 % 2;
                    if(n1 > 0){
                        name = 2 * Math.pow(10,i);
                        obj[name] = n1;
                    }
                    if(n2 > 0){
                        name = Math.pow(10,i);
                        obj[name] = n2;
                    }
                }
            }
            return obj;
        }

        //获取某个数某位的数值
        static getValueAt(numb:number,index:number):number{
            let v = numb.toString()[index - 1];
            return Number(v);
        }

        static formatChips(v:number):number{
            return v / 100;
        }
        
    }
}