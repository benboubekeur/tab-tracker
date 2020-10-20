<template>
    <v-layout >
        <v-flex xs9 mr-2>

            <panel title="Song Metadata">

                <v-text-field name="title" required :rules="[required]" v-model="song.title" id="title"
                              label="Title :"></v-text-field>
                <v-text-field name="artiste" required :rules="[required]"  v-model="song.artiste" id="artiste"
                              label="Artiste :"></v-text-field>
                <v-text-field name="album"  required :rules="[required]"  v-model="song.album" id="album"
                              label="Album :"></v-text-field>
                <v-text-field name="genre" required :rules="[required]"   v-model="song.genre" id="genre"
                              label="Genre :"></v-text-field>
                <v-text-field name="albumImage" required :rules="[required]"   v-model="song.albumImage" id="albumImage"
                              label="album Image URL:"></v-text-field>
                <v-text-field name="youtubeId" required :rules="[required]"   v-model="song.youtubeId" id="youtubeId"
                              label="youtubeId:"></v-text-field>

            </panel>
        </v-flex>
        <v-flex xs9>
            <panel title="Song Structure">
                <v-text-field name="lyrics"  required :rules="[required]"  v-model="song.lyrics" id="lyrics"
                              label="lyrics :"></v-text-field>
                <v-text-field name="tab" required :rules="[required]"   v-model="song.tab" id="tab"
                              label="tab :"></v-text-field>
            </panel>
            <br>
            <div  v-if="error" class="error mb-2">
                {{error}}
            </div>
            <v-btn  class="cyan" dark @click="create">
                Create Song
            </v-btn>
        </v-flex>

    </v-layout>
</template>

<script>
import SongServices from '@/services/SongsService'

export default {
  name: 'CreateSong',
  data () {
    return {
      song: {
        title: null,
        artiste: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongServices.post(this.song).then(() => this.$router.push('/songs'))
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
