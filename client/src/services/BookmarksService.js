import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('bookmarks', {
      params: params
    })
  },
  post (params) {
    return Api().post('bookmarks', {
      params: params
    })
  },
  delete (bookmarksId) {
    return Api().delete(`bookmarks/${bookmarksId}`)
  },
}
