
namespace point21 {
    /**
     * 大厅
     * @author Zane
     */
    export class FHall extends bx.FHall {
        constructor() { super(); }
        onConstruct(): void {
            super.onConstruct();
            this.register(bx.GConst.n_room_items_click);
        }

        onNotice(notice: any, data: Array<any>): void {
            super.onNotice(notice, data);
            switch(notice){
                case bx.GConst.n_room_items_click:
                    //this.notify(bx.GConst.n_to_room_state);
                break;
            }
            
        }

        onDestruct(): void { super.onDestruct(); }

        onFocus(): void {
            super.onFocus();

        }
        onDefocus(): void {
            super.onDefocus();
        }
    }
}