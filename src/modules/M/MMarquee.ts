
namespace point21{
    export class MMarquee extends bx.Framework{
        constructor(){
            super();
        }
        onRegister(): void {
            super.onRegister();
            this.addNotices(protos.CMD.bcast_msg_resp);
        }
        onUnregister(): void { super.onUnregister(); }
        onNotice(notice: any, data: Array<any>): void {
            super.onNotice(notice, data);
            switch (notice) {
                case protos.CMD.bcast_msg_resp:
                    this.showMarquee(data[0]);
                    break;
            }
        }

        showMarquee(res:protos.bcast_msg_resp):void{
            let data = res.msg;
            let word:string;
            let name:any = data.content[0].chars,
                room:any = data.content[1].number,
                value:any = data.content[2].number;
            switch(room){
                case 1: room = bx.GData.getLanguage('201322'); break;
                case 2: room = bx.GData.getLanguage('201323'); break;
                case 3: room = bx.GData.getLanguage('201324'); break;
                case 4: room = bx.GData.getLanguage('201325'); break;
            }

            if(data.id == 1){//牌型跑马灯
                switch(value){
                    case 3: value = bx.GData.getLanguage('201320'); break;
                    case 4: value = bx.GData.getLanguage('201321'); break;
                }
                word = bx.GData.getLanguage('201318').replace('${name}',name).replace('${room}',room).replace('${value}',value);
            }else if(data.id == 2){//金币跑马灯
                value = bx.GData.formatNumber(value) + bx.GData.getLanguage('201319');
                word = bx.GData.getLanguage('201326').replace('${name}',name).replace('${room}',room).replace('${value}',value);
            }
            bx.Framework.notify(bx.GConst.n_broadcast_show,word);
        }
    }
}