import Api from '@/services/Api'

export default {
  index (credentials) {
    return Api().get('songs')
  },
  post (data) {
    return Api().post('songs', data)
  }

}
