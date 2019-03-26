namespace point21{
    export class MPlayerArea{
        public views:Array<VPlayerArea> = [];              //玩家区域的视图，从左到右，依次push,最开始一个是庄家
        public optionSeat = [];                            //除了自己外还可以选择的位置
        public static selecting:number = -1;                            //除了自己 正选中的座位

        
        static dragonLoaded: boolean = false;                                 //五小龙资源已下载
        static bjLoaded: boolean = false;                                      //黑杰克动画资源已下载
        static boomLoaded: boolean = false;                                    //爆牌资源已下载
        constructor(){}
        instanceView(v:Array<fui.room.FUI_playerArea | fui.room.FUI_playerArea_banker>,roomView:fui.room.FUI_roomView):void{
            let item:VPlayerArea;
            for(let i = 0; i < v.length; i++){
                item = new VPlayerArea(v[i],i);
                this.views.push(item);
                item.init(roomView);
                if(i != 0){
                    item._view.m_chipArea.onClick(this,function(item,i){
                        if(item.canClick){
                            for(let j = 0; j < this.optionSeat.length; j++){
                                let n = MRoom.getSeatId(this.optionSeat[j]);
                                this.views[n].setTipsToBetVisible(true);
                            }
                            this.views[i].setTipsToBetVisible(false);
                            MPlayerArea.selecting = i;
                            bx.Framework.notify(point21.GConst.n_newPosToBet,i);
                        }
                    },[item,i])
                }
            }
            let player5 = this.views[5]._view;
            let index5 = player5.getChildIndex(player5.m_chipsList2);
            player5.setChildIndex(player5.m_chipsList1,index5 + 1);
            this.layout();
        }

        //重置
        reset():void{
            MPlayerArea.selecting = -1;
            for(let i = 0;i < this.views.length;i++){
                this.views[i].reset();
            }
        }

        //重连时恢复牌信息
        recCardsList(data:protos.cardsList[]):void{
            let pos,cards,cardType,anteChips,maxSum,minSum,whichOne,isDouble;
            for(let i = 0; i < data.length; i++){
                pos = MRoom.getSeatId(data[i].pos);
                cards = data[i].cards;
                cardType = data[i].cardType;
                anteChips = data[i].anteChips;
                maxSum = data[i].maxSum;
                minSum = data[i].minSum;
                whichOne = data[i].whichOne;
                isDouble = data[i].isDoubleAnted;
                //保存头两张牌
                let obj = { pos: pos, value: [cards[0],cards[1]] };
                MRoom.cards.push(obj);

                if(pos !== 0 && whichOne !== 0) this.views[pos]._view.m_fen.selectedIndex = 1;
                for(let j = 0; j < cards.length; j++){
                    let card = this.getNewCard(pos,whichOne);
                    (card as fui.room.FUI_card).m_card.url = Utils.getCardImg(cards[j]);
                }
                MBtnPlay.betValArr[pos - 1] = anteChips;
                this.views[pos].setCardAndPoint(cardType,false,whichOne,minSum,maxSum);
                this.views[pos].doubleSignVisible(isDouble,whichOne);
                anteChips && this.views[pos].getChipListChildren(Utils.formatChips(anteChips),true,whichOne);
                anteChips && this.views[pos].setChip(Utils.formatChips(anteChips),whichOne);
            }
        }

        //重连时恢复保险标志
        recInsuranceSign(data:Array<protos.insList>):void{
            for( let player of data){
                for(let seat of player.insPos){
                    if(seat.insAnteChips > 0){
                        let pos = MRoom.getSeatId(seat.pos);
                        this.views[pos].insuranceSignVisible(true);
                    }
                }
            }
        }

        //获得该位置一号列表牌的状态（是否满了三张）
        firstListIsFull(pos:number,id:number):boolean{
            if(pos === 0) return false;
            return (this.views[pos]._view['m_cardsList' + id] as fui.room.FUI_cardsList).m_list1.numChildren >= 3 ? true : false;
        }

        //获得新发的牌 pos：1~5   id：0/1/2
        getNewCard(pos:number,id:number = 0):fairygui.GObject{
            let index:number = this.firstListIsFull(pos,id) ? 2 : 1; 
            return  this.views[pos].addChildToList(id,index); 
        }

        //发牌
        dealCard(seatId:number,data:protos.dealCardsList,type:number){
            let addCardOver: Function = null;
            let obj: fairygui.GObject;
            let count:number = this.views[seatId].getCardsNumb(data.whichOne);
            if(seatId == 0){//庄家发牌
                if(count > 0){
                    obj = this.views[seatId].setDealTargetPos(data.whichOne);
                    addCardOver = function(){
                        let card = this.getNewCard(seatId,data.whichOne);
                        card.visible = true;
                        return card;
                    }.bind(this);
                }else{
                    obj = this.getNewCard(seatId,data.whichOne);
                    obj.visible = false; 
                }
            }else{//闲家发牌
                if(count == 1 || count == 2 || count == 4){
                    obj = this.views[seatId].setDealTargetPos(data.whichOne);
                    addCardOver = function(){
                        let card = this.getNewCard(seatId,data.whichOne);
                        card.visible = true;
                        return card;
                    }.bind(this);
                }else{
                    obj = this.getNewCard(seatId,data.whichOne);
                    obj.visible = false;
                }
            }
            this.views[seatId].dealCard(obj, data, type, addCardOver);

            // let card = this.getNewCard(seatId,data.whichOne);
            // card.visible = false;
            //this.views[seatId].dealCard(obj, data, type);
        }

        //设置发牌替代对象
        createObj(pre: fairygui.GObject): fairygui.GObject{
            let obj: fairygui.GObject = new fairygui.GObject();
            obj.x = pre.x + pre.width + 20;
            obj.y = pre.y;
            pre.parent.addChild(obj);
            return  
        }

        //庄家暗牌翻牌
        turnBankerCard(card:Array<number>):void{
            this.views[0].turnBankerCard(card);
        }


        //收牌
        recoverCards():void{
            for(let i = 0; i < this.views.length; i++){
                this.views[i].recoverCards();
            }
        }

        //分牌
        divideCard(data:Array<number>):void{
            let card1,card2;
            let id = MRoom.getSeatId(data[0]);
            for(let i = 0; i < MRoom.cards.length; i++){
                if(MRoom.cards[i].pos == id){
                    card1 = MRoom.cards[i].value[0];
                    card2 = MRoom.cards[i].value[1];
                }
            }
            
            let allBet = data[2] / 100;
            this.views[id].divideCard(card1,card2);
            this.views[id].setChip(allBet,1);
            this.views[id].setChip(allBet,2);
            this.views[id].getChipListChildren(allBet,true,1);
            this.views[id].getChipListChildren(allBet,true,2);
        }

        //轮到某位玩家 pos为0时 即隐藏所有位置的选中特效
        // turnOnePlayer(pos:number,id:number = 0):void{
        //     for(let item of this.views){
        //         item.ActivedMarkVisible(false);
        //     }
        //     if(pos === 0) return;
        //     this.views[pos].ActivedMarkVisible(true,id);
        // }

        //解除某个座位的激活状态
        // unActiveOnePlyaer(pos:number):void{
        //     this.views[pos].ActivedMarkVisible(false);
        // }

        //下注在自己位置
        bet(pos:number,data:Array<number>):void{
            let valBet = data[0] / 100,
                allBet = data[1] / 100;
            this.views[pos].playerBet(valBet,pos,0);
            this.views[pos].setChip(allBet);
        }

        //下注在其他位置
        betToOther(pos:number,data:Array<number>):void{
            let toPos = MRoom.getSeatId(data[0]),
                valBet = data[1] / 100,
                allBet = data[2] / 100;
            this.views[toPos].playerBet(valBet,pos,0);
            this.views[toPos].setChip(allBet);
        }
        
        //加倍下注
        betDouble(pos:number,data:Array<number>):void{
            let toPos = MRoom.getSeatId(data[0]),
                id = data[1],
                valBet = data[2] / 100,
                allBet = data[3] / 100;
            this.views[toPos].playerBet(allBet,pos,id);
            this.views[toPos].setChip(allBet,id);
            Laya.timer.once(1200,this,function(){
                this.views[toPos].doubleSignVisible(true,id);
            })
        }

        //玩家买保险了
        buyInsurance(pos: number):void{
            this.views[pos].insuranceSignVisible(true);
        }

        //筹码列表推向庄家
        chipListToBanker(pos:number,id:number):void{
            this.views[pos].moveChipList(0,id);
        }

        //结算
        settlement(data:Array<protos.gameResult>):void{
            let item:protos.gameResult,id,seat;
            for(let i = 0; i < data.length; i++){
                item = data[i];
                for(let j = 0 ; j < item.result.length;j++){
                    seat = item.result[j];
                    if(seat.balance < 0){
                        id = MRoom.getSeatId(seat.pos);
                        if(id == 3){
                            SoundManager.instance.playSound(AssetsUtils.getSoundUrl('win'));
                        }
                        this.views[id].moveChipList(0,seat.whichOne);
                    }
                } 
            }
            Laya.timer.once(1000,this,function(){
                let item,id,seat,playerId;
                for(let i = 0;i < data.length; i++){
                    item = data[i];
                    playerId = MRoom.getSeatId(item.pos);
                    for(let j = 0 ; j < item.result.length;j++){
                        seat = item.result[j];
                        if(seat.balance >= 0){
                            id = MRoom.getSeatId(seat.pos);
                            if(id == 3){
                                SoundManager.instance.playSound(AssetsUtils.getSoundUrl('win'));
                            }
                            this.views[id].win(playerId,Utils.formatChips(seat.balance),seat.whichOne);
                        }
                    }
                }
            })
        }

        //更新可下注的区域显示
        showCanBetTips(data:Array<number>):void{
            let lostSelecting:boolean = true;
            let seatId;
            if(data && data.length > 0){
                for(let　i = 0;i < data.length; i++){
                    seatId = MRoom.getSeatId(data[i]);
                    this.views[seatId].setTipsToBetVisible(true);
                    if(seatId == MPlayerArea.selecting) {
                        this.views[seatId].setTipsToBetVisible(false);
                        lostSelecting = false;
                    }
                }
            }
            //如果选中的位置真的失去了 发送通知
            if(lostSelecting){
                if(data){
                    bx.Framework.notify(point21.GConst.n_lostSeat);
                }
                // else{
                //     bx.Framework.notify(point21.GConst.n_hideBtns);
                // }
            }
        }

        //隐藏可下注区域 提示
        hideCanBetTips():void{
            for(let i = 0 ; i < this.views.length; i++){
                this.views[i].setTipsToBetVisible(false);
            }
        }

        layout():void{
            if(this.views.length === 0) return;
            let skewX = [10,10,0,-10,-10],
                rotate_view = [64,27,0,-27,-64];
            let rotate_chip:Array<number> = [-70,-38,0,38,70];
            let target:VPlayerArea;
            for(let i = 1; i < this.views.length; i++){
                target = this.views[i];
                if(bx.Stage.getStage().isLandscape){
                    target._view.rotation = rotate_view[i - 1];
                    target._view.skewX = skewX[i - 1];
                    target.setChipListRotation(rotate_chip[i - 1]);
                }else{
                    target.setChipListRotation(0);
                    target._view.skewX = 0;
                    target._view.rotation = 0;
                }
            }
        }
        
    }
}