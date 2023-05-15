import VTNotification from "./VTNotification.vue"
import VTNotificationGroup from "./VTNotificationGroup.vue"
import { methods } from './notifications.js'

let installed = false

export default {
  install(Vue) {
    if (installed) return
    Vue.component('notification', VTNotification)
    Vue.component('notificationGroup', VTNotificationGroup)
    Vue.prototype.$notify = (data, timeout) => methods.notify(data, timeout)
    Vue.prototype.$removeNotify = (id) => methods.removeNotification(id)
    installed = true
  }
}
