import { defineNuxtPlugin } from '#app'; // remove if 'vue3' is recognised and global by default

import {library, config} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.

library.add(
  faInstagram
 
)

export default defineNuxtPlugin(({vueApp}) => {
  vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})