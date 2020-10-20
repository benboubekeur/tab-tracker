<template>
    <panel title="YouTube Video">
        <youtube  :video-id="youtubeId" :player-width="680" :player-height="335" />
    </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  name: 'YouTube',
  components: {
    Panel
  },
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
    #player {
        width: 90%;
        height: 90%;
    }
</style>
