<template>

  <div class="mainContainer">
    
    <div class="header">

      <span class="fa-stack fa-lg">
        <i class="fa fa-square-o fa-stack-2x"></i>
        <i class="fas fa-terminal fa-stack-1x"></i>
      </span>

      <span class="headerText">
        KCW's Portfolio Page
      </span>

      <div class="headerRightIcons">
        <i class="fas fa-minus"></i>&nbsp;
        <i class="far fa-square"></i>&nbsp;
        <i class="fas fa-times"></i>
      </div>

    </div>
    
    <div class="content">

      <div class="updateText">
        Thank you for visiting!
        This page was created using <span class="vueText"><i class="fab fa-vuejs"></i>vuejs</span><br>
        Last Updated Date: 2021-12-13 KR
      </div>

      <div class="textArea">
        <div class="pathText">
          C:\Welcome\To\KCW's\Portfolio\Page:&nbsp;
        </div>

        <div class="greetText">
          <vue-typer
            :text=content
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='100'
            :pre-erase-delay='30000'
            :erase-delay='30000'
            erase-style='clear'
            :erase-on-complete='false'
            caret-animation='smooth'
          ></vue-typer>
        </div>
      </div>

      <div class="nextText">
        <button class="nextBtn" @click="clickNextBtn">Scroll or Click</button>
        <br>
        <i class="icon fas fa-sort-down" @click="clickNextBtn"></i>
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ["안녕하세요.\n소통과 공유를 통해 함께 성장해가는\n개발자 김찬웅입니다:)"],
    }
  },
  methods: {
    clickNextBtn() {
      this.$emit('clickNext');
    },
  }
}
</script>

<style scoped>
.mainContainer {
  font-family: Gulim;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  background-color: white;
  display: inline-block;
  padding: 3px;
  width: 100%;
  height: 38px;
}
.fa-stack {
  float: left;
  margin-top: 1px;
}
.headerText {
  float: left;
  line-height: 300%;
  font-weight: 700;
}
.headerRightIcons {
  float: right;
  padding: 0.85rem 1rem;
  font-size: 25px;
}
.content {
  background-color: black;
  display: inline-block;
  color: white;
  padding: 0.75rem 1rem;
  width: 100%;
  height: calc(100% - 38px);
  overflow-x: hidden;
}
.updateText {
  font-size: 30px;
  height: 40%;
}
.vueText {
  color: green;
}
.textArea {
  display: flex;
  height: 40%;
  background-color: black;
  font-size: 35px;
}
.pathText {
  float: left;
  color: blue;
}
.greetText {
  float: left;
}
@media (max-width: 900px) {
  .greetText {
    max-width: 250px;
  }
}
.nextText {
  height: 20%;
  color: white;
  text-align: center;
}
.nextBtn {
  border: none;
  background-color: black;
  color: white;
  font-family: Bahnschrift;
  font-size: 15px;
}
.icon {
  font-size: 25px;
  animation: motion 0.3s /* 속도 */
  linear 0s   /* 처음부터 끝까지 일정 속도로 진행 */
  infinite alternate; /* 무한 반복 */
}
@keyframes motion{
  0% {margin-top: 0px;}
	100% {margin-top: 10px;}
}
.vue-typer {
  font-family: monospace;
}
::v-deep .typed {
  color: white !important;
}
::v-deep .custom.caret {
  width: 15px;
  background-color: white !important;
}
</style>