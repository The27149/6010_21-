namespace point21 {
    export class MError extends bx.Framework {
        protected requestGS(...params: Array<any>): void { bx.Framework.notify(bx.GConst.n_gs_send, ...params); }
        constructor() {
            super();
        }
        onRegister(): void {
            super.onRegister();
            //window.onerror = this.onError.bind(this);
        }

        onError(evt,source,fileno,column,err:Error):void{
            let obj = {};
                obj['错误'] = evt;
                obj['文件'] = source;
                obj['行号'] = fileno;
                obj['列号'] = column;
                obj['详细'] = err;
                obj['时间'] = new Date();
            console.error('捕获到错误：',obj);
            let req = <protos.clientError>{};
            req.error = JSON.stringify(obj);
            this.requestGS(protos.CCMD.clientError, req);
        }

        onUnregister(): void {
            super.onUnregister();
            window.onerror = null;
        }

        onNotice(notice: any, data: Array<any>): void {
            super.onNotice(notice, data);
        }
    }
}