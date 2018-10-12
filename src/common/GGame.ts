namespace protos {
	
	export enum game_stage {

        GAME_HALL = 1 ,//大厅
        GAME_GAMEING = 2 ,//游戏中
        GAME_OVER = 3,//游戏结束
        DOWNTIME_OVER = "DOWNTIME_OVER"//倒计时结束

    }

    export enum game_reconnect {

        RECONNECT_SHOW = "RECONNECT_SHOW" ,//
        RECONNECT_HIDE ="RECONNECT_HIDE" //
    }

    export enum game_prompt {

        PROMPT_SHOW = "PROMPT_SHOW" ,//
        PROMPT_HIDE ="PROMPT_HIDE" //
    }

    export enum game_gm {

        GM_SHOW = "GM_SHOW" ,//
        GM_HIDE ="GM_HIDE" //
    }
    export enum game_match {

        MATCH_SHOW = "MATCH_SHOW" ,//
        MATCH_HIDE ="MATCH_HIDE" //
    }
}