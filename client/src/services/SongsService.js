import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {
      params:{
        search : search
      }
    })
  },
  post (data) {
    return Api().post('songs', data)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  }

}
