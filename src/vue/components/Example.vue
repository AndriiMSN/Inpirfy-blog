<template>
  <div class="">
    <h1 @click="isTrue=!isTrue">{{Hello}}</h1>
    <p v-if="isTrue">Test</p>
  </div>

</template>

<script>
export default {
  name: 'Example',
  data() {
    return {
      Hello: 'Hello from Vue',
      isTrue: false,
    };
  },
};
</script>

<style scoped>

</style>
