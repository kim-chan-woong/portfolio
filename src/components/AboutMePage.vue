<template>
  <div class="mainContainer">

    <div class="content">

      <div class="introArea">

        <div class="infoTop">
          <img src="../assets/idphoto.jpg" width="200" height="250" />
          <div class="infoTopText">
            성명: 김찬웅
            <br><br>
            성별: 남
            <br><br>
            나이: 26세
            <br><br>
            생년월일: 1996.09.04
          </div>
        </div>

        <br><br>

        <div class="infoBottom">
          <table class="infoTable">
            <tr>
              <th colspan="7">학력 사항</th>
            </tr>
            <tr>
              <td>학교명</td>
              <td>입학</td>
              <td>졸업</td>
              <td>소재지</td>
              <td>계열/학과(학부)</td>
              <td>졸업여부</td>
              <td>최종학력</td>
            </tr>
            <tr>
              <td>창신고등학교</td>
              <td>2012.03</td>
              <td>2015.02</td>
              <td>경남 창원시</td>
              <td>인문 계열</td>
              <td>졸업</td>
              <td>-</td>
            </tr>
            <tr>
              <td>경남과학기술</td>
              <td>2015.03</td>
              <td>2021.02</td>
              <td>경남 진주시</td>
              <td>컴퓨터 공학과</td>
              <td>졸업</td>
              <td>O</td>
            </tr>
          </table>

          <br>
          
          <table class="infoTable">
            <tr>
              <th colspan="3">자격증 취득 사항</th>
            </tr>
            <tr>
              <td>자격명</td>
              <td>취득일자</td>
              <td>유효기간</td>
            </tr>
            <tr>
              <td>정보처리기사</td>
              <td>2020.08.28</td>
              <td>영구</td>
            </tr>
            <tr>
              <td>SQLD</td>
              <td>2019.12.31</td>
              <td>영구</td>
            </tr>
          </table>

        </div>

      </div>

      <div class="textArea">
        text area!
      </div>

    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/kopubbatang.css);
.mainContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Kokoro', serif;
}
.content {
  position: relative;
  top: 50px;
  height: calc(100% - 50px);
  display: flex;
  font-weight: 1000;
}
.introArea {
  position: relative;
  top: 150px;
  left: 13%;
  width: 35%;
  height: 70%;
  border-radius: 10px;
  border: 3px solid rgb(194, 206, 206);
  box-shadow: 15px 15px 15px grey;
  transition: .5s ease all;
}
.infoTop {
  display: flex;
  margin-top: 5px;
  margin-left: 8px;
  padding: 2px 5px;
}
.infoTopText {
  margin-left: 15px;
  margin-top: 41px;
  font-size: 20px;
}
.infoBottom {
  padding: 2px 5px;
  margin-left: 8px;
  font-size: 15px;
  text-align: center;
}
.infoTable {
  width: 100%;
  text-align: center;
}
th {
  background-color: silver;
  border: 1px solid;
}
td {
  border: 1px solid;
}
.textArea {
  position: relative;
  top: 150px;
  left: 17%;
  width: 35%;
  height: 70%;
  border-radius: 10px;
  border: 3px solid rgb(194, 206, 206);
  box-shadow: 15px 15px 15px grey;
}
</style>