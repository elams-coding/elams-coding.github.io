import DefaultTheme from 'vitepress/theme'
import ExpandableDetail from './ExpandableDetail.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component('ExpandableDetail', ExpandableDetail)
  }
}
