
namespace point21 {
    /**
     * 房间
     * @author Zane
     */
    export class FRoom extends bx.FRoom {
        constructor() { super(); }
        onConstruct(): void {
            super.onConstruct();
        }

        onFocus(): void { 
            super.onFocus(); 
            //SoundManager.instance.bgmUrls = AssetsUtils.getSoundUrl('roomBgm');            
            this.notify(point21.GConst.n_addRoom);
        }
        onDefocus(): void { 
            super.onDefocus();
            this.notify(point21.GConst.n_removeRoom);
        }

        onNotice(notice: any, data: Array<any>): void {
            super.onNotice(notice, data);
        }
    }
}