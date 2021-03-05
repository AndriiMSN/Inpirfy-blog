<template lang="pug">
  div
    p Counter area
    p {{COUNTER_STATE}}
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'Counter',
  computed: {
    ...mapGetters([
      'COUNTER_STATE',
    ]),
  },
};
</script>

<style scoped>

</style>
