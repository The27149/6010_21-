namespace point21 {
    export class MRoom extends bx.Framework {// ignore
        private _viewBg: point21.VRoomBg;
        private get viewBg(): point21.VRoomBg {
            if (this._viewBg == null){
                this.mPlayerArea = new MPlayerArea();
                this.mBtnPlay = new MBtnPlay();
                this.mPlayer = new MPlayer();
                this._viewBg = new point21.VRoomBg();
                this.view = new point21.VRoom();
                this.popupMatch = new point21.VMatch();
                this.strategyBtn = new VStrategyBtn();
            }                
            return this._viewBg;
        }
        private view: point21.VRoom;
        //各部分逻辑类
        private mPlayerArea: MPlayerArea;
        private mBtnPlay: MBtnPlay;
        private mPlayer: MPlayer;
        private popupMatch: VMatch;
        private strategyBtn: VStrategyBtn;

        static gap: number = 0;                 //服务器的pos 与本地实际座位号(自己的永远是3)之差 即gap = 自己的pos - 3
        private dealDelay: number = 200;     //发牌间隔时间
        private dealType: number;        //发牌类型 0：发单张牌，发完需要显示牌型等信息  1：发两张时第一张，不显示牌型信息  2：发两张时第二张
        private betCompleted: boolean = false;         //下注完成标志
        
        static cards:any[] = [];    //保存本地座位的头两张牌
        static selfMoney:number     //自己的余额
        private isInsuranceActionOver: boolean = false;             //回收保险列表的动作已完成 一次
        constructor() {
            super();
        }

        //由pos计算本地真实座位号
        static getSeatId(pos: number): number {
            if (pos === 0) return 0;
            let id: number = pos - MRoom.gap;
            if (id < 1) id += 5;
            if (id > 5) id -= 5;
            return id;
        }

        //由真实座位号 倒推 在服务器上的座位号
        static getIdOnSever(seatId: number): number {
            if (seatId != 0) {
                let id = seatId + this.gap;
                if (id < 1) id += 5;
                if (id > 5) id -= 5;
                return id;
            }
        }

        onRegister(): void {
            super.onRegister();
            this.addNotices(
                point21.GConst.n_Vmanager_playerArea,
                point21.GConst.n_Vmanager_btnPlay,
                point21.GConst.n_Vmanager_player,
                bx.GConst.n_screen_layout,
                point21.GConst.n_addRoom,
                point21.GConst.n_removeRoom,
                bx.GConst.n_room_items_click,
                bx.GConst.n_room_continue_game,
                point21.GConst.n_newPosToBet,
                point21.GConst.n_hideBtns,
                point21.GConst.n_lostSeat,
                point21.GConst.n_selfMoneyChange,

                protos.CCMD.gamePush,
                protos.CCMD.playerInfoPush,
                protos.CCMD.userOperationResp,
                protos.CCMD.dealCardsInfo,
                protos.CCMD.gameSettlementPush,
                protos.CCMD.recRoomInfo,
                protos.CCMD.recAnteState,
                protos.CMD.cancel_match_resp,
                protos.CMD.chips_push,

                protos.CCMD.recDealCardsState,
                protos.CCMD.recBuyInsState,
                protos.CCMD.recRoleOpState,
                protos.CCMD.recBankerOpState,
            )
        }
        onUnregister(): void { super.onUnregister(); }
        onNotice(notice: any, data: Array<any>): void {
            super.onNotice(notice, data);
            switch (notice) {
                //分配玩家区域的视图
                case point21.GConst.n_Vmanager_playerArea:
                    this.mPlayerArea.instanceView(data[0], data[1]);
                    break;
                //分配操作按钮的视图
                case point21.GConst.n_Vmanager_btnPlay:
                    this.mBtnPlay.instanceView(data[0]);
                    break;
                //分配玩家头像的视图
                case point21.GConst.n_Vmanager_player:
                    this.mPlayer.instanceView(data[0]);
                    break;
                //屏幕适配
                case bx.GConst.n_screen_layout:
                    this.layout();
                    break;
                //添加房间视图
                case point21.GConst.n_addRoom:
                    this.addView();
                    break;
                //移除房间视图
                case point21.GConst.n_removeRoom:
                    this.removeView();
                    break;
                //点击大厅房间选项按钮
                case bx.GConst.n_room_items_click:
                    this.mBtnPlay.roomType = data[0];
                    this.reset();
                    this.popupMatchVisible(true);
                    break;
                //继续游戏
                case bx.GConst.n_room_continue_game:
                    this.reset();
                    this.popupMatchVisible(true);
                    break;
                //通知本人要下注的其他位置
                case point21.GConst.n_newPosToBet:
                    this.mBtnPlay.inStage(0);
                    this.mBtnPlay.currentBetPos = data[0];
                    break;
                case point21.GConst.n_hideBtns:
                    this.mBtnPlay.hideView();
                    break;
                //失去想下注的其他位置
                case point21.GConst.n_lostSeat:
                    this.mBtnPlay.resp_bet();
                    break;
                //自己的余额改变了
                case point21.GConst.n_selfMoneyChange:
                    let coins = Math.floor(data[0] / 100);
                    MRoom.selfMoney = data[0] / 100;
                    if(coins < this.mBtnPlay.bet_max){
                        this.mBtnPlay.bet_max = coins;
                        this.mBtnPlay.view.setBaseBet(coins, this.mBtnPlay.bet_min);
                    }
                    break;

                //游戏推送
                case protos.CCMD.gamePush:
                    this.gamePush(data[0]);
                    break;
                //玩家信息推送
                case protos.CCMD.playerInfoPush:
                    bx.MMenu.gameOver = false;
                    SoundManager.instance.playSound(AssetsUtils.getSoundUrl('start'));
                    this.popupMatchVisible(false);
                    this.getPlayerInfo(data[0]);
                    break;
                //按钮事件响应
                case protos.CCMD.userOperationResp:
                    this.userOperationResp(data[0]);
                    break;
                //发牌
                case protos.CCMD.dealCardsInfo:
                    this.dealCards(data[0]);
                    break;
                //结算
                case protos.CCMD.gameSettlementPush:
                    this.pushInsuranceToBanker();
                    this.mBtnPlay.hideView();
                    this.view.turnOffLight();
                    this.onGetResult(data[0]);
                    break;
                //断线重连，房间信息
                case protos.CCMD.recRoomInfo:
                    this.recRoomInfo(data[0]);
                    break;
                //断线重连 下注阶段
                case protos.CCMD.recAnteState:
                    this.recAnteState(data[0]);
                    break;
                //取消匹配
                case protos.CMD.cancel_match_resp:
                    this.popupMatchVisible(false);
                    this.mBtnPlay.inStage(3);
                    break;
                //更新玩家金币
                case protos.CMD.chips_push:
                    this.mPlayer && this.mPlayer.setCoin(3,data[0].chips);
                    break;


                //断线重连，发牌阶段
                case protos.CCMD.recDealCardsState:
                    this.recDealCardsState(data[0]);
                    break;
                //断线重连，保险阶段
                case protos.CCMD.recBuyInsState:
                    this.recBuyInsState(data[0]);
                    break;
                //断线重连，玩家操作阶段
                case protos.CCMD.recRoleOpState:
                    this.recRoleOpState(data[0]);
                    break;
                //断线重连，庄家操作阶段
                case protos.CCMD.recBankerOpState:
                    this.recBankerOpState(data[0]);
                    break;
            }
        }

        //游戏信息推送
        gamePush(data: protos.gamePush): void {
            let type = data.type,
                pos = MRoom.getSeatId(data.pos),
                value = data.value;
            switch (type) {
                case 1://设置底注
                    this.mBtnPlay.setBaseBet(value);
                    break;
                case 2://进入下注阶段
                    this.mPlayer.startAllClock(value[0]);
                    this.view.StartClock(value[0]);

                    //test
                    // let a = MRoom.getIdOnSever(1);
                    // let b = MRoom.getIdOnSever(5);
                    // let arr = [a, b];
                    // Laya.timer.once(3000, this.mPlayerArea, this.mPlayerArea.showCanBetTips,[arr]);

                    break;
                case 3://玩家可在原位置下注
                    this.mBtnPlay.inStage(0);
                    break;
                case 4://玩家可下注的其他位置
                    this.mPlayerArea.hideCanBetTips();
                    if (!this.betCompleted) {
                        this.mPlayerArea.optionSeat = value;
                        this.mPlayerArea.showCanBetTips(value);
                    }
                    break;
                case 5://玩家在原位置下注了
                    this.mPlayerArea.bet(pos, value);
                    this.mPlayer.setCoin(pos, value[2]);
                    MBtnPlay.betValArr[pos - 1] = value[0] / 100;
                    if (pos == 3){
                        this.view.handAction(1);
                        this.mBtnPlay.view.betValue = value[0] / 100;
                    } 
                    break;
                case 6://玩家在其他位置下注了
                    let id = MRoom.getSeatId(value[0]);
                    this.mPlayerArea.betToOther(pos, value);
                    this.mPlayer.setCoin(pos, value[3]);
                    this.view.seatNameVisible(true,id,this.mPlayer.views[pos - 1].playerName);
                    MBtnPlay.betValArr[id - 1] = value[1] / 100;
                    if (pos == 3) {
                        this.mBtnPlay.view.betValue = value[1] / 100;
                        MPlayerArea.selecting = -1;
                        id < 3 ? this.view.handAction(2) : this.view.handAction(3);
                    }
                    break;
                case 7://玩家完成下注
                    this.mPlayer.talk(pos, 4);
                    this.stopClock(pos);
                    if (pos == 3) {
                        this.betCompleted = true;
                        this.mBtnPlay.hideView();
                        this.mPlayerArea.hideCanBetTips();
                    }
                    break;
                case 8://进入发牌阶段
                    this.mBtnPlay.hideView();
                    this.mPlayerArea.hideCanBetTips();
                    break;
                case 9://进入买保险阶段
                    this.mPlayer.startAllClock(value[0]);
                    this.view.StartClock(value[0]);
                    break;
                case 10://某个座位可以买保险了
                    if (value) {
                        if (pos == 3) {
                            this.mBtnPlay.inStage(2);
                            this.mBtnPlay.activyPos = value[0];
                            this.view.turnOnLightTo(value[0],0);
                        }
                    } else {
                        this.stopClock(pos);
                    }
                    break;
                case 11://某座位买保险了
                    let seat =  MRoom.getSeatId(value[0]);
                    this.view.betInsurance(value[1], pos, seat);
                    this.mPlayer.setCoin(pos, value[2]);
                    this.mPlayerArea.buyInsurance(seat);
                    if(pos == 3) this.view.turnOffLight();
                    break;
                case 12://某座位不买保险
                    if(pos == 3) this.view.turnOffLight();
                    break;
                case 13://轮到某个座位操作
                    this.view.turnOnLightTo(value[0],value[1]);
                    if (pos == 3) {
                        SoundManager.instance.playSound(AssetsUtils.getSoundUrl('turnSelf'));
                        this.view.StartClock(value[2]);
                        this.mBtnPlay.activyPos = value[0];
                        this.mBtnPlay.activyId = value[1];
                        this.mBtnPlay.setCards(MRoom.getSeatId(value[0]));
                        this.mBtnPlay.inStage(1);
                    } else {
                        SoundManager.instance.playSound(AssetsUtils.getSoundUrl('turnOther'));
                        this.mBtnPlay.hideView();
                        this.mPlayer.startClock(pos, value[2]);
                    }
                    break;
                case 14://双倍
                    this.stopClock(pos);
                    this.mPlayer.talk(pos, 1);
                    this.mPlayerArea.betDouble(pos, value);
                    this.mPlayer.setCoin(pos, value[4]);
                    if (pos == 3){
                        let id = MRoom.getSeatId(value[0]);
                        if(id < 3){
                            this.view.handAction(2);
                        }else if(id > 3){
                            this.view.handAction(3);
                        }else{
                            this.view.handAction(1);
                        }
                    } 
                    break;
                case 15://暗牌不组成bj
                    this.pushInsuranceToBanker();
                    break;
                case 16://庄家操作
                    this.mBtnPlay.hideView();
                    this.view.turnOffLight();
                    break;
                case 17://分牌
                    this.mPlayerArea.divideCard(value);
                    this.mPlayer.talk(pos, 0);
                    this.mPlayer.setCoin(pos, value[3]);
                    if (pos == 3){
                        let id = MRoom.getSeatId(value[0]);
                        if(id < 3){
                            this.view.handAction(2);
                        }else if(id > 3){
                            this.view.handAction(3);
                        }else{
                            this.view.handAction(1);
                        }
                    }
                    break;
                case 18://要牌
                    this.mPlayer.talk(pos, 2);
                    break;
                case 19://停牌
                    this.stopClock(pos);
                    if(pos == 3) this.mBtnPlay.hideView();
                    this.mPlayer.talk(pos, 3);
                    break;
                case 20://庄家暗牌
                    this.mPlayerArea.turnBankerCard(value);
                    break;
            }

        }

        //断线重连 房间信息
        recRoomInfo(res: protos.recRoomInfo): void {
            bx.MMenu.gameOver = false;
            this.reset();
            this.mBtnPlay.roomType = res.roomType;
            MRoom.gap = res.curPos - 3;
            this.mBtnPlay.setBaseBet(res.roomInfo);
            for (let i = 0; i < res.players.length; i++) {
                let player = res.players[i];
                let pos = MRoom.getSeatId(player.pos);
                this.view.setChipsVisible(true, pos);
                if(pos == 3){
                    if(player.chips < res.roomInfo[1]){
                        this.mBtnPlay.bet_max = Math.floor(player.chips / 100);
                    }
                }
                if(player.othersPos){
                    for(let seat of player.othersPos){
                        this.view.seatNameVisible(true,MRoom.getSeatId(seat),player.name);
                    }
                }
            }
            this.mPlayer.recRoomInfo(res.players);
        }

        //断线重连 下注
        recAnteState(res: protos.recAnteState): void {
            for (let player of res.anteStatePosList) {
                let pos = MRoom.getSeatId(player.originPos);
                if (player.state === 0) {//未完成下注状态
                    if (pos == 3) {
                        this.view.StartClock(res.timeLeft);
                        if (player.antePosList) {//自己原位置已经下注
                            this.mBtnPlay.inStage(0);
                            this.mPlayerArea.showCanBetTips(res.emptyPosList);
                        } else {//原位置未下注
                            this.mBtnPlay.inStage(0);
                        }
                    } else {
                        this.mPlayer.startClock(pos, res.timeLeft);
                    }
                }
                if (player.antePosList) {
                    for (let seat of player.antePosList) {
                        let id = MRoom.getSeatId(seat.pos);
                        this.mPlayerArea.views[id].getChipListChildren(Utils.formatChips(seat.ante), true, 0);
                        this.mPlayerArea.views[id].setChip(Utils.formatChips(seat.ante),0);
                    }
                }
            }
        }

        //重连 发牌阶段
        recDealCardsState(res:protos.recDealCardsState): void {
            this.mPlayerArea.recCardsList(res.cardsList);
        }

        //重连 保险阶段
        recBuyInsState(res:protos.recBuyInsState): void {
            this.mPlayerArea.recCardsList(res.cardsList);

            let players:protos.insList[] = res.insPosList;
            for(let i = 0; i < players.length; i++){
                if(players[i].active > 0){
                    let pos = MRoom.getSeatId(players[i].pos);
                    if(pos == 3){
                        this.view.StartClock(res.timeLeft);
                        this.mBtnPlay.inStage(2);
                        this.mBtnPlay.activyPos = players[i].active;
                        this.view.turnOnLightTo(players[i].active,0)
                    }else{
                        this.mPlayer.startClock(pos,res.timeLeft);
                    }
                }

                let seats:protos.insPosList[] = players[i].insPos;
                for(let j = 0; j < seats.length; j++){
                    let seatid = MRoom.getSeatId(seats[j].pos);
                    this.view.addChildToInsuranceList(seatid,seats[j].insAnteChips,true);
                    if(seats[j].insAnteChips > 0){
                        this.mPlayerArea.views[seatid].insuranceSignVisible(true);
                    }
                }
            }
        }

        //重连 玩家操作阶段
        recRoleOpState(res: protos.recRoleOpState): void {
            this.mPlayerArea.recCardsList(res.cardsList);
            this.mPlayerArea.recInsuranceSign(res.insPosList);
            let pos = MRoom.getSeatId(res.opOriginPos);
            //本人
            if (pos == 3) {
                this.view.StartClock(res.timeLeft);
                this.mBtnPlay.activyPos = res.opPos;
                this.mBtnPlay.activyId = res.opWhichOne;
                this.mBtnPlay.setCards(MRoom.getSeatId(res.opPos));
                this.mBtnPlay.inStage(1);
            } else {
                this.mPlayer.startClock(pos, res.timeLeft);
            }
            if(res.timeLeft > 0){
                this.view.turnOnLightTo(res.opPos,res.opWhichOne);
            }
        }

        //重连 庄家阶段
        recBankerOpState(res:protos.recBankerOpState): void {
            this.mPlayerArea.recCardsList(res.cardsList);
            this.mPlayerArea.recInsuranceSign(res.insPosList);
        }

        //获取到玩家信息
        getPlayerInfo(res: protos.playerInfoPush): void {
            MRoom.gap = res.curPos - 3;
            for (let i = 0; i < res.playersInfo.length; i++) {
                let player = res.playersInfo[i];
                let pos = MRoom.getSeatId(player.pos);
                this.view.setChipsVisible(true, pos);
                if(pos == 3){
                    if(player.chips < this.mBtnPlay.bet_max){
                        this.mBtnPlay.bet_max = Math.floor(player.chips / 100);
                    }
                }
            }
            this.mPlayer.setPlayerInfo(res.playersInfo);
        }

        //按钮操作响应
        userOperationResp(res: protos.userOperationResp): void {
            if (res.result === 2) {
                console.log('操作失败！！！！！！');
                return;
            };
            switch (res.op) {
                case 1:
                    this.mBtnPlay.resp_bet();
                    break;
                case 2:
                    this.mBtnPlay.resp_bet();
                    break;
                case 3:
                    this.mBtnPlay.hideView();
                    break;
                case 4:
                    this.mBtnPlay.hideView();
                    break;
                case 5:
                    this.mBtnPlay.hideView();
                    break;
                case 6:
                    this.mBtnPlay.hideView();
                    break;
                case 7:
                    this.mBtnPlay.hideView();
                    break;
                case 8:
                    this.mBtnPlay.resp_needCard();
                    this.view.handAction(5);
                    break;
                case 9:
                    this.mBtnPlay.hideView();
                    this.view.handAction(4);
                    break;
            }

        }

        //添加视图到舞台
        addView(): void {
            bx.Stage.getStage().layerAddChild(this.viewBg, bx.GLayer.scene);
            bx.Stage.getStage().layerAddChild(this.view, bx.GLayer.scene);
            bx.Stage.getStage().layerAddChild(this.strategyBtn,bx.GLayer.scene);
            // SoundManager.instance.bgmUrls = AssetsUtils.getSoundUrl('bgm');
            this.layout();
        }

        //移除视图
        removeView(): void {
            bx.Stage.getStage().layerRemoveChild(this.viewBg);
            bx.Stage.getStage().layerRemoveChild(this.view);
            bx.Stage.getStage().layerRemoveChild(this.strategyBtn);
        }

        //匹配框 状态
        popupMatchVisible(state: boolean): void {
            if (state) {
                bx.UIManager.popup(this.popupMatch, true);
                this.popupMatch.reset();
            } else {
                this.popupMatch.beforeClose();
                bx.UIManager.closePopup(this.popupMatch);
            }
        }

        //重置
        reset(): void {
            this.betCompleted = false;
            this.view.reset();
            this.mPlayerArea.reset();
            this.mBtnPlay.reset();
            this.mPlayer.reset();
            this.isInsuranceActionOver = false;
        }

        //处理发牌
        dealCards(data: protos.dealCardsInfo): void {
            let arr: Array<protos.dealCardsList> = data.cardsList;
            let sortfunc = function (a, b) {
                let v1 = MRoom.getSeatId(a['pos']);
                let v2 = MRoom.getSeatId(b['pos']);
                return v1 - v2;
            }
            
            arr.sort(sortfunc);
            let len = arr.length;
            if (arr[0].cards.length == 2) {//如果是开始的一次发两张牌,就发两轮
                for (let item of arr) {
                    let pos = MRoom.getSeatId(item.pos);
                    let obj = { 
                        pos: pos,
                        value: [item.cards[0],item.cards[1]]
                    };
                    MRoom.cards.push(obj);
                }
                this.dealType = 1;
                this.dealOnce(arr);
                Laya.timer.once(len * this.dealDelay, this, function () {
                    this.dealType = 2;
                    this.dealOnce(arr);
                });
            } else {
                this.dealType = 0;
                this.dealOnce(arr);
            }
        }

        //发一轮牌 
        dealOnce(list: Array<protos.dealCardsList>): void {
            for (let i = 0; i < list.length; i++) {
                Laya.timer.once(this.dealDelay * i, this, this.deal, [list[i]], false);
            }
        }

        //发牌逻辑
        deal(data: protos.dealCardsList): void {
            let id = data.whichOne;
            let seatId = MRoom.getSeatId(data.pos);
            this.mPlayerArea.dealCard(seatId, data, this.dealType);
        }

        //收牌
        recoverCards(): void {
            this.mPlayerArea.recoverCards();
        }

        //关闭定时器
        stopClock(pos: number): void {
            if (pos === 3) {
                this.view.stopClock();
            } else {
                this.mPlayer.stopClock(pos);
            }
        }

        //庄家收保险
        pushInsuranceToBanker(): void {
            if(!this.isInsuranceActionOver){
                this.isInsuranceActionOver = true;
                for (let i = 1; i < 6; i++) {
                    this.view.pushInsuranceToBanker(i);
                }
            } 
        }

        //推送筹码到庄家
        pushBetToBanker(): void {
            this.mPlayerArea.chipListToBanker(3, 0);
            //this.mPlayerArea.chipListToBanker(pos,id);
        }

        //收到结算消息
        onGetResult(res: protos.gameSettlementPush): void {
            let data = res.result;
            this.mPlayerArea.settlement(data);
            let isTongpei = true,
                isTongsha = true;
            for(let item of data){
                if(item.balance <= 0) isTongpei = false;
                if(item.balance >= 0) isTongsha = false;
            }
            if(isTongpei) this.view.playSk_tongpei();
            Laya.timer.once(1000, this, function(){
                if(isTongsha) this.view.playSk_tongsha();
            });
            Laya.timer.once(2000, this, function () {
                for (let i = 0; i < data.length; i++) {
                    let pos = MRoom.getSeatId(data[i].pos);
                    // this.view.showResult(pos, data[i].balance);
                    let seatList: protos.posBalance[] = data[i].posAllBalance;
                    for(let j = 0; j < seatList.length; j++){
                        this.view.showResult(MRoom.getSeatId(seatList[j].pos), seatList[j].balance);
                    }
                    if(pos == 3){
                        this.view.showResult('_self', data[i].balance);
                    }
                    this.mPlayer.setCoin(pos, data[i].chips);
                    this.mBtnPlay.inStage(3);
                    bx.MMenu.gameOver = true;
                }
            })
        }

        //布局
        layout(): void {
            if (this.view == null) return;
            this.mBtnPlay.layout();
            this.mPlayerArea.layout();
            this.viewBg.scaleMode = bx.ScaleMode.full;
            this.viewBg.x = bx.Align.center;
            this.viewBg.y = bx.Align.middle;
            this.view.scaleMode = bx.ScaleMode.show_all;
            this.view.x = bx.Align.center;
            this.view.y = bx.Align.middle;
            this.popupMatch.scaleMode = bx.ScaleMode.none;
            this.popupMatch.x = bx.Align.center;
            this.popupMatch.y = bx.Align.middle;
            this.strategyBtn.x = bx.Align.right;
            this.strategyBtn.y = bx.Align.top;
            this.strategyBtn.marginTop = 60;
            this.strategyBtn.marginRight = 30;
            if (bx.Stage.getStage().isLandscape) {
                this.view.width = this.viewBg.width = 1920;
                this.view.height = this.viewBg.height = 1080;
                this.view._view.m_h_v.selectedIndex = 0;
                this.view._view.m_table.url = 'assets/room_dt/horizon/pz.png';
                this.view._view.m_chipBank.url= 'assets/room_dt/horizon/cmg.png'
                this.viewBg._view.m_roombg.url = 'assets/room_dt/horizon/bg.jpg';
                let index = this.view._view.m_lightCtl.selectedIndex;
                if(index > 15) this.view._view.m_lightCtl.selectedIndex = index - 15;
            } else {
                this.view.width = this.viewBg.width = 1080;
                this.view.height = this.viewBg.height = 1920;
                this.view._view.m_h_v.selectedIndex = 1;
                this.view._view.m_table.url = 'assets/room_dt/vertical/pzs.png';
                this.view._view.m_chipBank.url= 'assets/room_dt/vertical/cmgs.png'
                this.viewBg._view.m_roombg.url = 'assets/room_dt/vertical/bg2.jpg';
                let index = this.view._view.m_lightCtl.selectedIndex;
                if(index > 0){
                    if(index < 15 || index == 15) this.view._view.m_lightCtl.selectedIndex = index + 15;
                } 
            }
            
        }
    }
}