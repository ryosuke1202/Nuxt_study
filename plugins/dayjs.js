import 'dayjs/locale/ja' //日本時間をimport
import dayjs from 'dayjs'

dayjs.locale('ja') // 日本時間を設定

export default ({ app }, inject) => {
  inject('dayjs', string => dayjs(string))
}