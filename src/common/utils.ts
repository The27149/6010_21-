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
            let chips = [10000,5000,2000,1000,500,200,100,50,20,10,5,2,1];
            let result: object = {};
            let quotient:number, remainder:number;
            for(let item of chips){
                quotient = Math.floor( value / item);
                remainder = value % item;
                if(quotient > 0){
                    result[item] = quotient;
                    value = remainder;
                }
                if(remainder === 0) break;
            }
            return result;
        }

        static formatChips(v:number):number{
            return v / 100;
        }
        
    }
}