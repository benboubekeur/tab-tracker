<template>
  <v-layout justify-space-around>
    <v-flex xs6>
      <songs-bookmarks />
    </v-flex>
    <v-flex xs6>
      <songs-search />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearch from './SongsSearch'
import SongsBookmarks from './SongsBookmarks'
import SongsService from '@/services/SongsService'

export default {
  name: 'Songs',
  components: {
    SongsPanel,
    SongsSearch,
    SongsBookmarks
  },
  data () {
    return {
      songs: null
    }
  },
  async created () {
    await SongsService.index().then(response => (this.songs = response.data))
  }
}
</script>
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
