<template>
  <v-layout justify-space-around>
    <v-flex xs6 class="mr-2" v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recentely-viewed-songs class="mt-2" />
    </v-flex>
    <v-flex  :class="{xs6 : isUserLoggedIn, xs10 : !isUserLoggedIn}">
      <songs-search />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearch from './SongsSearch'
import SongsBookmarks from './SongsBookmarks'
import RecentelyViewedSongs from './RecentelyViewedSongs'
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'

export default {
  name: 'Songs',
  components: {
    SongsPanel,
    SongsSearch,
    SongsBookmarks,
    RecentelyViewedSongs
  },
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn'])
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
