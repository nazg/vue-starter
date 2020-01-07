
import { register } from "register-service-worker"

if (process.env.NODE_ENV === "production" && <boolean><unknown>process.env.IS_ELECTRON === false) {
  register(`${process.env.BASE_URL}service-worker.js`, {
    cached() {
      // eslint-disable-next-line no-console
      console.log("Content has been cached for offline use.")
    },
    error(error) {
      // eslint-disable-next-line no-console
      console.error("Error during service worker registration:", error)
    },
    offline() {
      // eslint-disable-next-line no-console
      console.log("No internet connection found. App is running in offline mode.")
    },
    ready() {
      // eslint-disable-next-line no-console
      console.log("App is being served from cache by a service worker. For more details, visit https://goo.gl/AFskqB")
    },
    registered() {
      // eslint-disable-next-line no-console
      console.log("Service worker has been registered.")
    },
    updated() {
      // eslint-disable-next-line no-console
      console.log("New content is available; please refresh.")
    },
    updatefound() {
      // eslint-disable-next-line no-console
      console.log("New content is downloading.")
    },
  })
}
