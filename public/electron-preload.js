
const { ipcRenderer: ipc } = require("electron")

process.once("loaded", () => {
  ipc.on("ipc-up", (_event, data) => {
    const { channel, request, response } = data
    window.postMessage({ type: "ipc-up", channel, request, response }, "*")
  })

  window.addEventListener("message", (event) => {
    if (event.data.type === "ipc-down") {
      ipc.send(event.data.channel, event.data.request)
    }
  })
})
