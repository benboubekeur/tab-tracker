<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <song-metadata :song="song" />
            </v-flex>

            <v-flex xs6 class="ml-2">
                <you-tube :youtubeId="song.youtubeId" />
            </v-flex>
        </v-layout>

        <v-layout class="mt-2">
            <v-flex xs6>
                <tab :song="song" />
            </v-flex>

            <v-flex xs6 class="ml-2">
                <lyrics :song="song" />
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import YouTube from '@/components/ViewSong/YouTube'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'

export default {
  name: 'ShowSong',
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  data () {
    return {
      song: null
    }
  },
  async  created () {
    /* eslint-disable */
    const songId = this.$store.state.route.params.songId
    await SongsService.show(songId).then((response) => this.song = response.data)
  }
}
</script>
