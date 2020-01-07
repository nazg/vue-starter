
import { BrowserWindow, app, ipcMain as ipc, protocol, screen } from "electron"
import { createProtocol, installVueDevtools } from "vue-cli-plugin-electron-builder/lib"
import { IpcMainChannel, SystemInfoIpcMainChannel } from "./ipc"

declare var __static: string


const isDevelopment = process.env.NODE_ENV !== "production"

const isTest = <boolean><unknown>process.env.IS_TEST

export class MainProcess {

  private channels: IpcMainChannel[] = []

  private window: BrowserWindow | null = null

  constructor() {
    protocol.registerSchemesAsPrivileged([
      {
        privileges: {
          secure: true,
          standard: true,
        },
        scheme: "app",
      },
    ])
    app.on("activate", () => {
      if (this.window === null) {
        this.createBrowserWindow()
      }
    })
    app.on("ready", async () => {
      if (!isTest && isDevelopment) {
        try {
          await installVueDevtools()
        }
        catch (e) {
          console.error(`Vue.js devtools failed to install: ${e.toString()}`)
        }
      }
      this.createBrowserWindow()
    })
    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        app.quit()
      }
    })
    if (isDevelopment) {
      if (process.platform === "win32") {
        process.on("message", (msg:string) => {
          if (msg === "graceful-exit") {
            app.quit()
          }
        })
      }
      else {
        process.on("SIGTERM", () => {
          app.quit()
        })
      }
    }
  }

  public registerIpcChannels(channels: IpcMainChannel[]) {
    this.channels = channels
    this.channels.forEach(channel => {
      ipc.on(channel.name, (event, request) => {
        channel.handle(event, request)
      })
    })
  }

  private createBrowserWindow() {
    const { height, width } = screen.getPrimaryDisplay().workAreaSize
    this.window = new BrowserWindow({
      height: Math.min(height, 800),
      webPreferences: {
        nodeIntegration: <boolean><unknown>process.env.ELECTRON_NODE_INTEGRATION,
        preload: `${__static}/electron-preload.js`,
      },
      width: Math.min(width, 1090),
    })
    if (isDevelopment) {
      this.window.maximize()
    }
    if (process.env.WEBPACK_DEV_SERVER_URL) {
      this.window.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
      if (!isTest) {
        this.window.webContents.openDevTools()
      }
    }
    else {
      createProtocol("app")
      this.window.loadURL("app://./index.html")
    }
    this.window.on("closed", () => {
      this.window = null
    })
  }

}

const mainProcess = new MainProcess()

mainProcess.registerIpcChannels([
  new SystemInfoIpcMainChannel(),
])
