<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{ song.title }}
        </div>
        <div class="song-artist">
          {{ song.artiste }}
        </div>
        <div class="song-genre">
          {{ song.genre }}
        </div>
 
        <v-btn dark class="cyan mt-4">
          Edit
        </v-btn>
          <v-btn v-if="isUserLoggedIn && !bookmark" dark class="cyan mt-4" @click="setAsBookmark">
            Set as Bookmark
          </v-btn>
          <v-btn v-if="isUserLoggedIn && bookmark" dark class="cyan mt-4" @click="unsetAsBookmark">
            Unset as Bookmark
          </v-btn>
    
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br />
        {{ song.album }}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  name: "SongMetadata",
  props: ["song"],
  data() {
    return {
        bookmark : null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },
  async mounted(){},
  watch: {
      async song (){
           try {
        await BookmarksService.index({
          songId: this.song.id,
          userId : this.$store.state.user.id
        }).then((response) =>{
          console.error('Mounted ', response)
          this.bookmark = response.data[0]
        } )

      } catch (err) {
        console.error(err)
      }
      }
  },
  methods: {
    async setAsBookmark() {
       if(!this.isUserLoggedIn){
           return 
        }
       try {
        await BookmarksService.post({
          songId: this.song.id,
          userId : this.$store.state.user.id
        }).then((response) =>{
          console.error('set Bookmark ', response)
          this.bookmark = response.data
        } )
      } catch (err) {
        console.error(err)
      }
    },
    async unsetAsBookmark() {
        try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (err) {
        console.error(err)
      }
    }
  }
};
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
