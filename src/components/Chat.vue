<template>
  <div>
    <NewMessage :userName="userName" />
  </div>
</template>

<script>
import NewMessage from "../components/NewMessage.vue";
export default {
  name: "Chat",
  props: ["userName"],
  components: {
    NewMessage
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>