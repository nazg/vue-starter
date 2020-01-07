
export interface IpcMainChannel {

  name: string

  handle(event: Electron.IpcMainEvent, request: IpcMainRequest): void

}

export interface IpcMainRequest {
  [key: string]: any;
}

export { SystemInfoIpcMainChannel } from "./system-info-ipc-main-channel"
