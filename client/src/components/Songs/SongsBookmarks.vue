<template>
  <panel title="Bookmarks">
    <v-data-table
      :headers="headers"
      :items="bookmarks">
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  data () {
    return {
      headers: [
        { text: 'Title', value: 'Song.title' },
        { text: 'Artist', value: 'Song.artist' }
      ],
      bookmarks: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      await BookmarksService.index({
        userId: this.user.id
      }).then((response) => {
        this.bookmarks = response.data
      })
    }
  }
}
</script>
