<template>
  <div>
    <section class="search">
      <input type="text" v-model="search" />
      <button @click="search=''">清除</button>
    </section>

    <ul class="contents">
      <li v-for="item in searchList" :key="item.smallItemId">
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
      search: "",
      mallInfoList: [],
    };
  },
  computed: {
    searchList() {
      let _search = this.search;
      let reg = new RegExp(_search, "ig"); // 不区分大小写
      if (_search) {
        return this.mallInfoList.filter(function (item) {
          if (item.samllItemName.toString().indexOf(_search) != -1) {
            return item;
          }
        });
      }
      return this.mallInfoList;
    },
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
.search {
  input {
    font-size: 20px;
    width: 300px;
  }
  button {
    font-size: 18px;
  }
  margin-bottom: 20px;
  border-bottom: 1px dashed #ccc;
}

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

@media print {
  .search {
    display: none;
  }
}
</style>