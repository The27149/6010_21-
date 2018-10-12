namespace bx {
    export class MPlayer extends Framework {

        private player: MPlayerBox;
        private myPlayer: MMyPlayerBox;
        private betsChipBox:MBetsChipBox;
        constructor() {
            super();
        }

        public initM(player: MPlayerBox,myPlayer: MMyPlayerBox,betsChipBox:MBetsChipBox):void{

            this.player = player;
            this.myPlayer = myPlayer;
            this.betsChipBox = betsChipBox;
        }
    }
}