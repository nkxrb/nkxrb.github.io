import DefaultTheme from 'vitepress/theme'
import TransTime from './components/TransTime.vue'
import ColorText from './layout/ColorText.vue'
import Label from './layout/Label.vue'
import LabelContainer from './layout/LabelContainer.vue'

export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    // init app config
    app.component('Label', Label)
    app.component('TransTime', TransTime)
    app.component('ColorText', ColorText)
    app.component('LabelContainer', LabelContainer)
  }
}
