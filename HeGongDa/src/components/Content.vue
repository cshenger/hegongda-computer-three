<template>
  <div>
    <ul class="contents">
      <li v-for="item in mallInfoList" :key="item.smallItemId">
        <em>{{item.itemNo}}.</em>
        <span v-html="item.samllItemName"></span><br />
        <span>
          答案：<strong v-html="renderAnswer(item.smallItemAnswer, item.optionNodes)"></strong>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ["topic"],
  data() {
    return {
      mallInfoList: [],
    };
  },
  methods: {
    renderAnswer(answers, optionNodes) {
      let answersStr = "";
      answers.forEach((ans) => {
        optionNodes.forEach((opt) => {
          if (ans.optionContent == opt.option) {
            answersStr += `  ${opt.optionContent}`;
          }
        });
      });

      return answersStr;
    },
  },
  created() {
    this.mallInfoList = this.topic.debugData.mallInfoList;
    // console.log(this.mallInfoList);
  },
};
</script>

<style lang="scss" scoped>
.contents {
  margin: 0;
  padding: 0;
  list-style-type: none;
  li {
    // display: flex;
    // flex-wrap: nowrap;
    // flex: auto;
    margin-bottom: 10px;
    border-bottom: 1px solid #f1f1f1;
    line-height: 2;
    em {
      flex-basis: 24px;
      margin-right: 15px;
    }
    strong {
      background-color: yellow;
    }
  }
}
</style>