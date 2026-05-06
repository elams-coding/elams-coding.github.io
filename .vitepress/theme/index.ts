import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ExpandableDetail from './ExpandableDetail.vue'
import PageAside from './PageAside.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(PageAside)
    })
  },
  enhanceApp({ app }: { app: any }) {
    app.component('ExpandableDetail', ExpandableDetail)
  }
}
