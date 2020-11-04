<template>
  <div>
    <h2>计算机网络</h2>
    <Content :topic="topic" />
  </div>
</template>

<script>
let topic = require("./topic.json");
import Content from "@/components/Content";

export default {
  name: "net",
  components: {
    Content,
  },
  data() {
    return {
      topic: null,
    };
  },
  created() {
    this.topic = topic;
  },
};
</script>

<style>
</style>