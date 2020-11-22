<template>
  <div>
    <h2>离散数学</h2>
    <select name="dan" @change="changeSelect" style="margin-bottom:10px">
      <option value="kaoshi">考试</option>
      <option value="zuoye1">作业1</option>
      <option value="zuoye2">作业2</option>
      <option value="zuoye3">作业3</option>
    </select>
    <Content :topic="topic" />
  </div>
</template>

<script>
let kaoshi = require("./topic.json");
let zuoye1 = require("./zuoye1.json");
let zuoye2 = require("./zuoye2.json");
let zuoye3 = require("./zuoye3.json");
import Content from "@/components/Content";

export default {
  name: "math",
  components: {
    Content,
  },
  data() {
    return {
      topic: null,
      dan: {
        kaoshi: kaoshi,
        zuoye1: zuoye1,
        zuoye2: zuoye2,
        zuoye3: zuoye3,
      },
    };
  },
  methods: {
    changeSelect(event) {
      this.topic = this.dan[event.target.value];
    },
  },
  created() {
    this.topic = kaoshi;
  },
};
</script>

<style>
</style>