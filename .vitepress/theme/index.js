import DefaultTheme from 'vitepress/theme'
import Label from './layout/Label.vue'
import LabelContainer from './layout/LabelContainer.vue'
import ColorText from './layout/ColorText.vue'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    // init app config
    app.component('Label', Label)
    app.component('ColorText', ColorText)
    app.component('LabelContainer', LabelContainer)
  }
}
