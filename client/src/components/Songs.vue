<template>
    <v-layout column>
        <v-flex xs6>
            <panel title="Songs">
                <v-btn
                        slot="action"
                        :to="{name: 'songs-create'}"
                        class="cyan accent-2"
                        light
                        absolute
                        right
                        medium
                        fab>
                    <v-icon>add</v-icon>
                </v-btn>
                <div class="song" v-for="song in songs" :key="song.id">
                    <v-layout >
                        <v-flex xs6>
                                <div class="song-title">
                                    {{song.title}}

                                </div>
                                <div class="song-artiste">
                                    {{song.artiste}}

                                </div>
                                <div class="song-genre">
                                    {{song.genre}}

                                </div>

                        </v-flex>
                        <v-flex xs6>
                            <img :src="song.albumImage"  class="album-image">
                        </v-flex>
                    </v-layout>

                    {{song.album}}-
                    {{song.artiste}}-
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  name: 'Songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async created () {
    await SongsService.index()
      .then((response) => this.songs = response.data)
  }
}
</script>

<style scoped>
    .song{
padding: 20px;
        height: 330px;
        overflow: hidden;
    }
.album-image{
    width: 65%;
    margin: 0 auto;
}
.song-title{
    font-size: 30px;

}
.song-artiste{
    font-size: 24px;
}
    .song-genre{
        font-size: 18px;
    }
</style>
