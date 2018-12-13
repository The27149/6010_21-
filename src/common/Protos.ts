//脚本自动输出，请不要手动修改
namespace protos {
	export enum CCMD {
		playerInfoPush = 12289,
		gamePush = 12290,
		userOperationReq = 12291,
		userOperationResp = 12292,
		gameSettlementPush = 12293,
		dealCardsInfo = 12294,
		stopCardInfo = 12295,
		recRoomInfo = 12296,
		recAnteState = 12297,
		recDealCardsState = 12298,
		recBuyInsState = 12299,
		recRoleOpState = 12300,
		recBankerOpState = 12301,
		gmReq = 12302,
		gmResp = 12303,
	}
	export interface playerInfoPush {
		curPos: number;
		playersInfo: Array<playerInfo>;
	}
	export interface playerInfo {
		/** 座位 */
		pos: number;
		/** 玩家名字 */
		name: string;
		/** 头像 */
		avatar: number;
		/** 余额 */
		chips: number;
	}
	export interface dealCardsInfo {
		cardsList: Array<dealCardsList>;
	}
	export interface dealCardsList {
		/** 是否是庄家 */
		isBanker: boolean;
		/** 这副牌所在的座位 */
		pos: number;
		/** 针对闲家,该座位的哪一副牌,默认不分牌时为0 */
		whichOne: number;
		/** 手牌,闲家格式[A, B],庄家格式[A],A：明牌 */
		cards: Array<number>;
		/** 牌型 4：黑杰克,3：五小龙,2：普通21点,1：其他点数,0：爆牌 */
		cardType?: number;
		/** 手牌最小和 */
		minSum: number;
		/** 手牌最大和 */
		maxSum: number;
	}
	export interface stopCardInfo {
		/** 停牌的位置列表 */
		list: Array<stopList>;
	}
	export interface stopList {
		/** 停牌的座位号 */
		pos: number;
		/** 该座位的某一副牌,0\1\2 */
		whichOne: number;
	}
	export interface gamePush {
		type: number;
		/** type == 20,推送庄家的暗牌 */
		pos?: number;
		/** type == 20 时,pos 为庄家座位 0 */
		value: Array<number>;
	}
	export interface userOperationReq {
		op: number;
		/** op == 9,停牌操作 */
		value: Array<number>;
	}
	export interface userOperationResp {
		/** 1 成功, 2 失败 */
		result: number;
		/** 操作类型： */
		op: number;
	}
	export interface gameSettlementPush {
		/** 游戏结算推送 */
		result: Array<gameResult>;
	}
	export interface gameResult {
		/** 座位号 */
		pos: number;
		/** 输赢钱,赢钱为正,输钱为负 */
		balance: number;
		/** 余额 */
		chips: number;
		/** 每个座位的结果列表 */
		result: Array<posResult>;
	}
	export interface posResult {
		/** 座位号 */
		pos: number;
		/** 某一副牌 */
		whichOne: number;
		/** 该座位输赢钱金额 */
		balance: number;
	}
	/** 断线重连 - 房间信息 */
	export interface recRoomInfo {
		/** 当前玩家原座位号 */
		curPos: number;
		/** 房间类型 */
		roomType: number;
		/** [最小底注, 最大底注, 准入] */
		roomInfo: Array<number>;
		/** 玩家信息 */
		players: Array<playerMsg>;
	}
	export interface playerMsg {
		/** 座位号 */
		pos: number;
		/** 名字 */
		name: string;
		/** 头像 */
		avatar: number;
		/** 余额 */
		chips: number;
	}
	/** 断线重连 - 下注阶段 */
	export interface recAnteState {
		/** 当前玩家原座位号 */
		curPos: number;
		/** 剩余时间 */
		timeLeft: number;
		/** 每个玩家的下注状态 */
		anteStatePosList: Array<anteState>;
		/** 整个房间空位置 */
		emptyPosList: Array<number>;
	}
	export interface anteState {
		/** 座位号 */
		originPos: number;
		/** 是否下注完成, 0: 未完成, 1: 已完成 */
		state: number;
		/** 该座位的下注总金额 */
		antePosList: Array<antedPos>;
	}
	export interface antedPos {
		/** 该玩家下注的座位号 */
		pos: number;
		/** 该座位的下注金额 */
		ante: number;
	}
	/** 断线重连 - 发牌阶段 */
	export interface recDealCardsState {
		/** 当前玩家原座位号 */
		curPos: number;
		/** 剩余时间 */
		timeLeft: number;
		/** 卡牌列表 */
		cardsList: Array<cardsList>;
	}
	/** 断线重连 - 买保险阶段 */
	export interface recBuyInsState {
		/** 当前玩家原座位号 */
		curPos: number;
		/** 剩余时间 */
		timeLeft: number;
		/** 保险座位列表 */
		insPosList: Array<insList>;
		/** 卡牌列表 */
		cardsList: Array<cardsList>;
	}
	export interface insList {
		/** 某个玩家的原座位号 */
		pos: number;
		/** 该玩家所有座位号和保险金额 */
		insPos: Array<insPosList>;
		/** 该玩家当前可以买保险的座位号, a: 座位号, 若 a =:= 0 则没有座位可以买 */
		active: number;
	}
	export interface insPosList {
		/** 某个玩家买过保险的座位号 */
		pos: number;
		/** 某个玩家在该座位买保险的金额 */
		insAnteChips: number;
	}
	/** 断线重连 - 玩家操作阶段 */
	export interface recRoleOpState {
		/** 当前玩家座位号 */
		curPos: number;
		/** 剩余时间 */
		timeLeft: number;
		/** 可以操作的原座位号 */
		opOriginPos: number;
		/** 可以操作的座位号 */
		opPos: number;
		/** 某一副牌可以操作 */
		opWhichOne: number;
		/** 卡牌列表 */
		cardsList: Array<cardsList>;
	}
	/** 断线重连 - 庄家操作阶段 */
	export interface recBankerOpState {
		/** 当前玩家座位号 */
		curPos: number;
		/** 卡牌列表 */
		cardsList: Array<cardsList>;
	}
	/** 用于断线重连时收集所有人手牌信息 */
	export interface cardsList {
		/** 卡牌座位 */
		pos: number;
		/** 某一副牌 0\1\2 */
		whichOne: number;
		/** 手牌 */
		cards: Array<number>;
		/** 手牌类型 */
		cardType?: number;
		/** 最小和 */
		minSum: number;
		/** 最大和 */
		maxSum: number;
		/** 下注总金额 */
		anteChips?: number;
	}
	/** GM */
	export interface gmReq {
		/** 房间类型 */
		roomType: number;
		/** 玩家人数 */
		playerNum: number;
		/** 玩家手牌 */
		cardsList: Array<gmCardsList>;
	}
	export interface gmCardsList {
		/** 座位, 庄家: 0, 其他: 1~5 */
		pos: number;
		/** 玩家所有牌 */
		cards: Array<number>;
	}
	export interface gmResp {
		/** 1: 成功, 2: 失败 */
		result: number;
	}
}