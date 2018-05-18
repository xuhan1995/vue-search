<template>
  <div class="main-logo">
    <img :src="logoImages[selectLogoIndex].imgSrc" @click="toggleFlag">
    <span class="logoList-arrow" @click="toggleFlag"></span>
    <transition enter-active-class="animated rubberBand" leave-active-class="animated bounceOut">
      <ul class="logoList" v-show="clickFlag && mouseleaveFlag" @mouseleave="mouseleaveLogolist">
        <li v-for="(logo,index) in logoImages" :class="{selectback : hoverIndex == index}" @mouseover="hoverLogoList(index)" @click="slectLogo(index)">
          <img :src="logo.imgSrc">
        </li>
      </ul>
    </transition>
  </div>
</template>

<script type="text/javascript">
  export default {
    name:'logo-select',
    data: () => ({
      selectLogoIndex:0,
      hoverIndex:-1,
      clickFlag:false,
      mouseleaveFlag:false,
      logoImages:[
      {imgSrc:require('../assets/baidu_logo.png')},
      {imgSrc:require('../assets/360_logo.png')},
      {imgSrc:require('../assets/sougou_logo.png')},
      ]
    }),
    methods:{
      toggleFlag(){
        this.clickFlag = !this.clickFlag;
        this.mouseleaveFlag = true;
      },
      hoverLogoList(index){
        this.hoverIndex = index;
      },
      mouseleaveLogolist(){
        this.mouseleaveFlag = false;
        this.clickFlag = false;
      },
      slectLogo(index){
        this.selectLogoIndex = index;
        this.clickFlag = false;
        this.$emit('getIndex',index);
      }
    }
  }
</script>

<style type="text/css">
  ul{margin: 0;padding: 0;list-style: none;}
  .main-logo{
    position: relative;
    width: 600px;
    height: 140px;
  }
  .main-logo img {
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }
  .logoList-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid;
    border-color: #000 transparent transparent transparent;
    right: 100px;
    top: 66px;
    cursor: pointer
}
  .logoList{
    position: absolute;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    z-index: 999999;
    border: 1px solid #d4d4d4;
  }
  .logoList li{
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #FEFEFE;
    padding-top: 1px;
  }
  .logoList li img{
    width: 100%;
    margin-top: 10px;
  }
  .selectback{
      background-color: #D0B9B9 !important;
      cursor: pointer;
  }
</style>