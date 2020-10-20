<template>
    <panel title="YouTube Video">
        <youtube  :video-id="youtubeId" :player-width="680" :player-height="335" />
    </panel>
</template>

<script>
export default {
  name: 'YouTube',
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
