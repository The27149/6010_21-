namespace point21{
    export class MPlayer{
        public views:Array<VPlayer> = [];
        constructor(){}
        instanceView(v:Array<fui.room.FUI_otherPlayer | fui.room.FUI_selfPlayer>):void{
            let item;
            for(let i = 0;i<v.length;i++){
                item = new VPlayer(v[i],i);
                this.views.push(item);
            }
        }
        //重置
        reset():void{
            for(let i = 0;i<this.views.length;i++){
                this.views[i].hide();
            }
        }
        
        //重连 房间信息
        recRoomInfo(res:protos.playerMsg[]):void{
            let index: number;
            for(let i = 0; i < res.length; i++){
                index = MRoom.getSeatId(res[i].pos);
                this.views[index - 1].setPlayer(res[i]);
            }
        }

        //设置玩家信息并显示
        setPlayerInfo(data:Array<protos.playerInfo>):void{
            let index:number;
            for(let i = 0 ; i < data.length;i++){
                index = MRoom.getSeatId(data[i].pos);
                this.views[index - 1].setPlayer(data[i]);
            }
        }

        //进入阶段,开始倒计时
        startAllClock(time:number):void{
            for(let item of this.views){
                item.timeCircleStart(time);
            }
        }

        //轮到玩家操作
        startClock(id:number,time:number){
            this.views[id - 1].timeCircleStart(time);
        }

        //结束玩家操作计时
        stopClock(id:number):void{
            this.views[id - 1].timeCircleEnd();
        }

        //说话
        talk(pos:number,content:number):void{
            this.views[pos - 1].setTalkingVisible(true,content);
        }

        //设置金币余额
        setCoin(pos:number,value:number):void{
            this.views[pos - 1].setCoin(value);
        }
    }
}