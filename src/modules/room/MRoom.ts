namespace bx {
    export class MRoom extends FRoom {
        private roomView: VRoom = null;
        private bgView: VRoomBGView = null;
        private mPlayerAry:Array<MPlayer>=[];
        private mPokerBtn:MPokerBtnView;
        private mBetBtn:MBetBtnView;
        private mInsuranceBtn:MInsuranceBtnView;
        constructor() { super(); }

        onConstruct(): void {
            super.onConstruct();
            this.register(GConst.n_to_hall_state, protos.lobby_code.success,bx.GConst.n_screen_layout);
            this.enterRoom();
        }

        onNotice(notice: any, data: Array<any>): void {
            super.onNotice(notice, data);
            switch (notice) {
                case GConst.n_to_hall_state:
                    this.parent.toState(GConst.bx_hall);
                    this.closeRoom();
                    break;
                case protos.lobby_code.success:
                    console.log(`进入房间`);
                    
                    break;
                case bx.GConst.n_screen_layout:
                    this.layout();
                    break;
            }
        }

        private closeRoom():void{
            if(this.roomView){
                this.roomView.removeFromParent();
                this.roomView=null;
            }

            if(this.bgView){
                this.bgView.removeFromParent();
                this.bgView=null;
            }
        }

        private enterRoom(): void {

            if (this.roomView == null) {
                this.bgView = new bx.VRoomBGView();
                this.bgView.initView(this.bgView.ui as (fui.Game.FUI_RoomBGView));
                bx.Stage.getStage().layerAddChild(this.bgView, bx.GLayer.scene);

                this.roomView = new VRoom();
                this.roomView.initView(this.roomView.ui as (fui.Game.FUI_RoomView));
                bx.Stage.getStage().layerAddChild(this.roomView, bx.GLayer.scene);

                this.initMPlayer();
                this.initPlyer();
                this.initMPokerBtn();
                this.initMBetBtn();
                this.initMInsuranceBtn();
            }

            this.layout();
        }

        /**
         * 初始按钮
         */
        private initMPokerBtn():void{
            this.mPokerBtn = new MPokerBtnView();
            this.mPokerBtn.init(this.roomView.view.m_pokerBtnView);
        }

        /**
         * 初始按钮
         */
        private initMBetBtn():void{
            this.mBetBtn = new MBetBtnView();
            this.mBetBtn.init(this.roomView.view.m_betBtnView);
        }

        /**
         * 初始按钮
         */
        private initMInsuranceBtn():void{
            this.mInsuranceBtn = new MInsuranceBtnView();
            this.mInsuranceBtn.init(this.roomView.view.m_insuranceBtn);
        }

        private initMPlayer():void{

            var mPlayer:MPlayer;
            
            for(var i:number=0;i<5;i++){
                
                mPlayer = new MPlayer();
                this.mPlayerAry.push(mPlayer);
            }
        }

        /**
         * 初始玩家模块
         */
        private initPlyer():void{
            var player:MPlayerBox;
            var myPlayer:MMyPlayerBox;
            var betsChipBox:MBetsChipBox;
            for(var i:number=0;i<5;i++){
                if(i==2){
                    myPlayer = new MMyPlayerBox();
                    myPlayer.initView(this.roomView.view["m_player"+(i+1)]);
                    
                }else{
                    player = new MPlayerBox();
                    player.initView(this.roomView.view["m_player"+(i+1)]);
                }
                betsChipBox = new MBetsChipBox();
                betsChipBox.init(this.roomView.view["m_chipBox"+(i+1)]);
                this.mPlayerAry[i].initM(player,myPlayer,betsChipBox);
               
            }
        }

        /** 布局 */
        private layout(): void {
            if (!this.roomView) return;
            if (bx.Stage.getStage().isLandscape) {
                this.bgView.width = 1920;
                this.bgView.height = 1080;
                this.roomView.width = 1920;
                this.roomView.height = 1080;
                this.bgView.view.m_c1.selectedIndex = 0;
                this.roomView.view.m_c1.selectedIndex = 0;

            } else {
                this.bgView.width = 1080;
                this.bgView.height = 1920;
                this.roomView.width = 1080;
                this.roomView.height = 1920;
                this.bgView.view.m_c1.selectedIndex = 1;
                this.roomView.view.m_c1.selectedIndex = 1;
            }
            this.roomView.x = bx.Align.center;
            this.roomView.y = bx.Align.middle;
            this.roomView.scaleMode = bx.ScaleMode.show_all;
            this.bgView.scaleMode = bx.ScaleMode.full;
            this.roomView.layout();
        }

    }
}