
import { BrowserWindow, app, protocol, screen } from "electron"
import { createProtocol, installVueDevtools } from "vue-cli-plugin-electron-builder/lib"

const isDevelopment = process.env.NODE_ENV !== "production"
const isTest = !!process.env.IS_TEST

let win: BrowserWindow | null

protocol.registerSchemesAsPrivileged([
  { privileges: { secure: true, standard: true }, scheme: "app" },
])

function createWindow() {
  const workAreaSize = screen.getPrimaryDisplay().workAreaSize
  win = new BrowserWindow({
    height: Math.min(workAreaSize.height, 800),
    webPreferences: {
      nodeIntegration: true,
    },
    width: Math.min(workAreaSize.width, 1090),
  })
  if (isDevelopment) { win.maximize() }

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!isTest) { win.webContents.openDevTools() }
  }
  else {
    createProtocol("app")
    win.loadURL("app://./index.html")
  }

  win.on("closed", () => {
    win = null
  })
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (win === null) {
    createWindow()
  }
})

app.on("ready", async () => {
  if (isDevelopment && !isTest) {
    try {
      await installVueDevtools()
    }
    catch (e) {
      console.error(`Vue Devtools failed to install: ${e.toString()}`)
    }
  }
  createWindow()
})

if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
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
