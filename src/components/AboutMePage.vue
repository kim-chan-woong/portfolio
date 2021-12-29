<template>
  <div class="mainContainer">

    <div class="content">

      <div class="introArea">

        <div class="introAreaContent">

          <div class="infoTop">
            <img src="../assets/img/idphoto.jpg" width="200" height="250" />
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
                <td>경남과학기술대학교</td>
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
                <td>등급</td>
                <td>취득일자</td>
              </tr>
              <tr>
                <td>정보처리기사</td>
                <td>기사</td>
                <td>2020.08.28</td>
              </tr>
              <tr>
                <td>SQLD</td>
                <td>개발자</td>
                <td>2019.12.31</td>
              </tr>
            </table>
          
          </div>
        </div>
      </div>

      <div class="textArea">
        <div class="textAreaContent">
          <span class="title">"함께 즐기며 성장하는 사람"</span>
          <br><br>
          <div class="mainText">
            학사, 대외 활동, 프리랜서, 직장 등의 여러 프로젝트를 경험하며<br>
            가장 즐겁고 값진 경험은 '소통과 공유'이었습니다.<br><br>
            백엔드 엔지니어의 업무를 맡은 프로젝트에선 프론트 엔지니어와의 소통,<br>
            데이터 엔지니어의 업무를 맡은 프로젝트에선 데이터 분석가와의 소통을 통해<br>
            서로의 직무에 대한 지식을 공유하고 기술에 대한 시야, 성장 등을<br>
            배로 쌓아가는 과정이 항상 즐겁고 값진 순간이었고,<br><br>
            이러한 문화가 정착된 프로젝트는<br>
            항상 높은 수준의 결과물과 좋은 인연을 얻어가는 값진 시간이었습니다.<br><br>
            여러 기술이 융합된 현 IT 사회에서 이러한 공유 문화가 개개인의 성장,<br>
            나아가 팀, 기업의 성장으로 이어진다 생각하며<br>
            앞으로의 있을 무수한 프로젝트에 이러한 초심을 잃지 않을 것 입니다.<br><br>
            팀원 전체가 성장하고, 사적으로는 좋은 친구가 되어<br>
            시간이 지나도 모두가 오래도록 기억할 프로젝트를 행할,<br>
            다음 프로젝트도 함께 하고 싶은 즐거운 사람인,<br>
            소통과 공유를 좋아하는 김찬웅이라고합니다.
          </div>
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import "../assets/style/SDMiSaeng.css";
.mainContainer {
  background-color: #F5E8C7;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content {
  position: relative;
  top: 80px;
  height: calc(100% - 80px);
  display: flex;
  font-weight: 1000;
  font-family: 'SDMiSaeng', sans-serif;
}
.introArea {
  position: relative;
  top: 90px;
  left: 13%;
  width: 34.5%;
  height: 73%;
  border-radius: 25px;
  box-shadow: 15px 15px 15px grey;
  border: 3.5px solid #6F4C5B;
  transition: .5s ease all;
  display: flex;
  justify-content: center;
  align-items: center;
}
.infoTop {
  display: flex;
  padding: 5px 5px;
}
.infoTopText {
  margin-left: 15px;
  margin-top: 10px;
  font-size: 32px;
}
.infoBottom {
  font-size: 25px;
  padding: 5px 5px;
}
.infoTable {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
th {
  background-color: #DEBA9D;
  border: 1px solid;
}
td {
  border: 1px solid;
}
.textArea {
  position: relative;
  top: 90px;
  left: 17%;
  width: 34.5%;
  height: 73%;
  border: 3.5px solid #6F4C5B;
  border-radius: 25px;
  box-shadow: 15px 15px 15px grey;
  display: flex;
  justify-content: center;
  align-items: center;
}
.textAreaContent {
  font-family: 'SDMiSaeng', sans-serif;
  text-align: center;
}
.title {
  background-color: #DEBA9D;
  border-radius: 10px;
  border: 3px solid #DEBA9D;
  font-size: 33.5px;
  text-decoration: underline;
}
.mainText {
  font-size: 25px;
}
</style>