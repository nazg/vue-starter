
import { IpcMainChannel, IpcMainRequest } from "."

export class SystemInfoIpcMainChannel implements IpcMainChannel {

  public readonly name = "system-info"

  handle(event:Electron.IpcMainEvent, request: IpcMainRequest) {
    event.reply("ipc-up", {
      channel: this.name,
      request,
      response: {
        process: {
          platform: process.platform,
        },
      },
    })
  }
}
