<template>
  <div class="mainContainer">

    <div class="content">

      <div class="timelineArea">

        <div class="timelineItem">
          <i class="fas fa-university"></i>
          <div class="timeText">2015.03</div>
          <div class="infoText">
            <span class="infoText_1">경남과학기술대학교 / </span>
            <span class="infoText_2">컴퓨터 공학과 15학번</span>
          </div>
        </div>

        <div class="timelineItem">
          <i class="fas fa-satellite-dish"></i>
          <div class="timeText">2016.08 - 2018.05</div>
          <div class="infoText">
            <span class="infoText_1">육군 병장 만기 제대 / </span>
            <span class="infoText_2">통신병</span>
          </div>
        </div>

        <div class="timelineItem">
          <i class="fas fa-user-tie"></i>
          <div class="timeText">2020.08 - 2020.12</div>
          <div class="infoText">
            <span class="infoText_1">공공빅데이터 청년인턴십 / </span>
            <span class="infoText_2">한국정보화진흥원 주관, 대구광역시청 근무, 데이터 분석</span>
          </div>
        </div>

        <div class="timelineItem">
          <i class="fas fa-database"></i>
          <div class="timeText">2020.11 - 2020.12</div>
          <div class="infoText">
            <span class="infoText_1">단기 프리랜서 / </span>
            <span class="infoText_2">모 기업, 데이터 엔지니어</span>
          </div>
        </div>

        <div class="timelineItem">
          <i class="fas fa-chalkboard-teacher"></i>
          <div class="timeText">2020.12 - 2020.12</div>
          <div class="infoText">
            <span class="infoText_1">응용S/W 역량강화 강사 / </span>
            <span class="infoText_2">고등학생 대상 Python 강의(1주일)</span>
          </div>
        </div>

        <div class="timelineItem">
          <i class="fas fa-user-tie"></i>
          <div class="timeText">2021.01 - ing</div>
          <div class="infoText">
            <span class="infoText_1">(주)엑셈 입사 / </span>
            <span class="infoText_2">빅데이터 플랫폼 엔지니어</span>
          </div>
        </div>

        <div class="timelineItem">
          <i class="fas fa-user-graduate"></i>
          <div class="timeText">2021.02</div>
          <div class="infoText">
            <span class="infoText_1">경남과학기술대학교 졸업</span>
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
  width: 100%;
  height: 100%;
  background-color: #F5E8C7;
  overflow: hidden;
}
.content {
  position: relative;
  top: 80px;
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'SDMiSaeng', sans-serif;
}
.timelineArea {
  border-radius: 25px;
  box-shadow: 15px 15px 15px grey;
  border: 3.5px solid #6F4C5B;
  width: 70%;
  height: 80%;
  display: inline-block;
  padding: 5px 5px;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  margin: 0 auto;
}
.timelineItem {
  border-radius: 15px;
  border: 2px solid #6F4C5B;
  width: 98.5%;
  height: 10%;
  display: flex;
  margin-top: 20px;
}
.fas {
  margin-top: 5px;
  margin-left: 5px;
  font-size: 45px;
  width: 50px;
}
.timeText {
  display: inline-block;
  width: 190px;
  margin-top: 15px;
  margin-left: 25px;
  font-size: 30px;
}
.infoText {
  margin-top: 5px;
  margin-left: 15px;
}
.infoText_1 {
  font-size: 42px;
}
.infoText_2 {
  font-size: 25px;
}
</style>