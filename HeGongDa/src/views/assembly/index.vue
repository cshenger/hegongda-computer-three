<template>
  <div>
    <h2>汇编语言程序设计</h2>
    <Content :topic="topic" />
  </div>
</template>

<script>
let topic = require("./topic.json");
import Content from "@/components/Content";

export default {
  name: "assembly",
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