
<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
      :headers="headers"
      :items="histories">
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'Song.title'
        },
        {
          text: 'Artist',
          value: 'Song.artist'
        }
      ],
      histories: []
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn'])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      await SongHistoryService.index()
        .then((response) => { this.histories = response.data })
    }
  }
}
</script>
