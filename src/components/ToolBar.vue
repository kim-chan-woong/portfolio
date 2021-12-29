<template>

  <div class="header">
    
    <div class="leftSideList">
      &lt; KCW's Portfolio Page /&gt;
    </div>

    <div class="rightSideList">

      <!-- 섹션에 첫 페이지가 포함되어 있기에 index+1로 계산 -->
      <div
        class="sectionsList"
        :class="{nowMenu: nowSectionNum === index+1}"
        v-for="(section, index) in sections"
        v-bind:key="index"
        v-on:click="sectionClick(index+1)">
        {{ section }}
      </div>

    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      sections: ['AboutMe', 'Timeline', 'Skills', 'Projects', 'Contact']
    }
  },
  methods: {
    // 툴바 내 특정 섹션 클릭 시 App.vue에 이벤트 전달
    sectionClick(sectionNum) {
      this.$emit('clickSection', sectionNum);
    },
  },
  props: ['nowSectionNum'],
}
</script>

<style scoped>
@import "../assets/style/SDMiSaeng.css";
.header {
  color: #6F4C5B;
  display: flex;
  width: 100%;
  /* font-family: Bahnschrift; */
  font-family: 'SDMiSaeng', sans-serif;
  margin-top: 10px;
}
.leftSideList {
  float: left;
  margin: 0 auto;
  padding: 0rem 0.25rem;
  font-size: 59px;
}
.rightSideList {
  margin: 0 auto;
  padding: 0.75rem 1rem;
  font-size: 41px;
}
.rightSideList .sectionsList {
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
  opacity: .5;
  transition: .5s ease all;
  padding: 2px 5px;
}
.rightSideList .sectionsList:last-of-type {
  margin-right: 0;
}
.rightSideList .sectionsList.nowMenu {
  opacity: 1.5;
  background-color: #DEBA9D;
  border-radius: 5px;
}
</style>