<template>
  <div class="company-page">
    <div class="c-top">
      <button
        v-for="(nav, i) in navs"
        :key="i"
        :class="flag == i ? 'acticebtn' : ''"
        @click="handlerPage(i)"
      >
        {{ nav.label }}
      </button>
    </div>
    <div class="c-bottom">
      <evaluation-consultation
        v-if="currenttab === 0"
      ></evaluation-consultation>
      <park-butler v-if="currenttab === 1"></park-butler>
      <engineering-services v-if="currenttab === 2"></engineering-services>
      <training-services v-if="currenttab === 3"></training-services>
      <industrial-internet v-if="currenttab === 4"></industrial-internet>
    </div>
  </div>
</template>

<script>
import EvaluationConsultation from './CompanyService/EvaluationConsultation.vue';
import ParkButler from './CompanyService/ParkButler.vue';
import IndustrialInternet from './CompanyService/IndustrialInternet.vue';
import TrainingServices from './CompanyService/TrainingServices.vue';
import EngineeringServices from './CompanyService/EngineeringServices.vue';
export default {
  data() {
    return {
      activeName: 'first',
      navs: [],
      flag: 0, //控制按钮样式
      currenttab: 0,
    };
  },
  components: {
    EvaluationConsultation,
    ParkButler,
    IndustrialInternet,
    TrainingServices,
    EngineeringServices,
  },
  methods: {
    handlerPage(i) {
      this.flag = i;
      this.currenttab = i;
    },
  },
  mounted() {
    let a = topnavs.filter((item) => {
      return item.name == this.$route.name;
    });
    this.navs = a[0].children;
  },
};
</script>
<style lang="scss" scoped>
.company-page {
  .c-top {
    width: 100%;
    height: 5rem;
    background-color: #fff;
    padding-left: 1rem;
    button {
      width: 15rem;
      font-size: 1rem;
      height: 4rem;
      margin-top: 1rem;
      font-size: 1.6rem;
      border-radius: 0.2rem 0.2rem 0 0;
      margin-right: 0.4rem;
      background-color: #fff;
      border: 0.1rem solid #ccc;
      border-bottom: none;
    }
    .acticebtn {
      color: #fff;
      background-color: #40c1d7;
    }
  }
  .c-bottom {
    margin: 1rem;
    height: calc(100vh - 8.5rem);
    background-color: #fff;
  }
}
</style>
