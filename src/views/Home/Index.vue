<template lang="">
  <div>
    <IndexAnimatation />
    <Header background="transparent"></Header>
    <Footer fixed/>
    <div class="common">
      <div class="home">
       {{info.introduction}}
      </div>
    </div>
  </div>
</template>
<script>
import IndexAnimatation from "../../components/index_fullScreenAnimation.vue";
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
let i=0 // 打印机时间的计时器
let timer = null 
export default {
  name: "index",
  components: {
    IndexAnimatation,
    Header,
    Footer,
  },
  data() {
    return {
      info:{
        introduction:'',
        introductionTarget:'You shall know the difference now that we are back again'
      }
    }
  },
  mounted() {
    this.typing()
  },
  methods: {
    typing(){
      if(i<this.info.introductionTarget.length){
        this.info.introduction = this.info.introductionTarget.slice(0,i++) + '_'
        setTimeout(this.typing,100)
      }else{
        this.info.introduction = this.info.introductionTarget
        clearTimeout(timer)
      }
    }
  },
};
</script>
<style lang="less">
.home {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translateY(-50%);
  font-size: 0.48rem;
  color: #fff;
  font-weight: 500;
}
</style>
