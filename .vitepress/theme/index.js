import DefaultTheme from 'vitepress/theme'
import Label from './layout/Label.vue'
import LabelContainer from './layout/LabelContainer.vue'
import 'magic.css'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    // init app config
    app.component('Label', Label)
    app.component('LabelContainer', LabelContainer)
  }
}
