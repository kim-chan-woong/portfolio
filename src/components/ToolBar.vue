<template>

  <div class="header">
    
    <div class="leftSideList">
      <i class="fas fa-paperclip"></i>
      KCW's Portfolio Page
    </div>

    <div class="rightSideList">
      <span>About Me</span>&nbsp;
      <span class="nowMenu">Career</span>&nbsp;
      <span>Skills</span>&nbsp;
      <span>Projects</span>&nbsp;
    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  color: black;
  display: flex;
  width: 100%;
  font-family: Century Gothic;
  margin-top: 10px;
}
/* // router-link(=a태그)가 클릭 되었을 때 / router-link는 자동으로 a태그로 인식됨 */
.header .router-link-exact-active {
  color: #35495e;
}
.header a {
  color: white;
}
.fas {
  color: rgb(100, 100, 100);
}
.leftSideList {
  float: left;
  margin: 0 auto;
  padding: 0rem 0.25rem;
  font-size: 35px;
}
.rightSideList {
  margin: 0 auto;
  padding: 0.75rem 1rem;
  font-size: 25px;
}
.nowMenu {
  background-color: rgb(194, 206, 206);
  border-radius: 5px;
}
</style>