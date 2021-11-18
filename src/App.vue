<template>
  <div id="app"> 

    <div v-bind:class="classObject">
      <tool-bar
        v-bind:nowSectionNum="nowSection"
        v-on:clickSection="moveSectionClick">
      </tool-bar>
    </div>

    <section class="firstPage">
      <first-page></first-page>
    </section>

    <section class="contents aboutMe">
      <about-me-page></about-me-page>
    </section>

    <section class="contents career">
      <career-page></career-page>
    </section>

    <section class="contents skills">
      <skills-page></skills-page>
    </section>

    <section class="contents projects">
      <projects-page></projects-page>
    </section>

    <section class="contents contact">
      <contact-page></contact-page>
    </section>

    <!-- <keep-alive>
      <component v-bind:is="selectedComponent"></component>
    </keep-alive> -->

    <!-- <transition name="page">
      <router-view></router-view>
    </transition> -->
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import FirstPage from './components/FirstPage.vue'
import AboutMePage from './components/AboutMePage.vue'
import SkillsPage from './components/SkillsPage.vue'
import ProjectsPage from './components/ProjectsPage.vue'
import CareerPage from './components/CareerPage.vue'
import ContactPage from './components/ContactPage.vue'

export default {
  name: 'App',
  data() {
    return {
      isMove: false,
      nowSection: 0,
      offsets: [],
      startY: 0,
    }
  },
  components: {
    ToolBar,
    FirstPage,
    AboutMePage,
    SkillsPage,
    ProjectsPage,
    CareerPage,
    ContactPage,
  },
  mounted() {
    this.getSectionOffsets();
  },
  computed: {
    // 현재 위치가 첫 페이지면 클래스 바인딩을 통해 툴바를 숨기고 아니라면 툴바를 표현
    classObject: function() {
      if (this.nowSection === 0) {
        return {
          sectionsMenu: false,
          hiddenSectionsMenu: true,
        }
      } else {
        return {
          sectionsMenu: true,
          hiddenSectionsMenu: false,
        }
      }
    }
  },
  methods: {
    // 페이지 내 각 섹션들의 offset값 setting
    getSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let sections_length = sections.length;

      for (let i = 0; i < sections_length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },

    // 마우스 휠 사용 시 위, 아래 스크롤 판단, Mozilla Firefox 이외 다른 브라우저들 해당
    mouseWheelHandler: function(e) {
      if (e.wheelDelta < 30 && !this.isMove) {
        this.scrollUp();
      } else if (e.wheelDelta > 30 && !this.isMove) {
        this.scrollDown();
      }
      e.preventDefault();
      return false;
    },

    // 마우스 휠 사용 시 위, 아래 스크롤 판단, Mozilla Firefox 해당
    mouseWheelDomHandler: function(e) {  
      if (e.detail > 0 && !this.isMove) {
        this.scrollUp();
      } else if (e.detail < 0 && !this.isMove) {
        this.scrollDown();
      }     
      return false;
    },

    // 위로 스크롤 할 시
    scrollDown() {
      this.isMove = true;
      this.nowSection--;
        
      if(this.nowSection < 0) this.nowSection = this.offsets.length - 1;
        
      this.scrollToSection(this.nowSection, true);
    },

    // 아래로 스크롤 시
    scrollUp() {
      this.isMove = true;
      this.nowSection++;
        
      if(this.nowSection > this.offsets.length - 1) this.nowSection = 0;
        
      this.scrollToSection(this.nowSection, true);
    },

    // 다음 표현될 section 정보들 세팅
    scrollToSection(id, force = false) {
      if(this.isMove && !force) return false;
      
      this.nowSection = id;
      this.isMove = true;
      document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
      
      setTimeout(() => {
        this.isMove = false;
      }, 400);
    },

    // 모바일 디바이스
    touchStart(e) {
      e.preventDefault();
      
      this.startY = e.touches[0].clientY;
    },

    touchMove(e) {
      if(this.isMove) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
      
      if(this.startY < currentY) {
        this.scrollDown();
      } else {
        this.scrollUp();
      }
      
      this.startY = 0;
      return false;
    }

  },
  created() {
    window.addEventListener('DOMMouseScroll', this.mouseWheelDomHandler);  // Mozilla Firefox
    window.addEventListener('mousewheel', this.mouseWheelHandler, { passive: false }); // Other browsers
    
    window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
  },
  destroyed() {
    window.removeEventListener('mousewheel', this.mouseWheelHandler, { passive: false });  // Other browsers
    window.removeEventListener('DOMMouseScroll', this.mouseWheelDomHandler); // Mozilla Firefox
    
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
  },
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.sectionsMenu {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.hiddenSectionsMenu {
  display: none;
}
.firstPage {
  height: 100%;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
}
.contents {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
