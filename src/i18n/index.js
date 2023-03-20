import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
import { getItem } from '@/utils/storage'
import { LANG } from '@/constant'

const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

const locale = getItem(LANG) || 'zh'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  messages
})

export default i18n
