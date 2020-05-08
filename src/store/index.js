import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    excelName: String,
    excelData: [],
    excelDataSelected: [],
    selectedSheet: [],
    excelDimension: [],
    excelNumerical: [],
    txtFlag: Boolean,
    txtData: [],
    pieData: [],
    funnelData: [],
    scatterData: [],
    selectedDimensions: [],
    selectedNumericals: [],
    selectedNumChild: [],
    selectedNumZ: [],
    dataDimensions: [],
    dataNumericals: [],
    dataNumChild: [],
    dataNumZ: [],

    changeFlag: '',
    chartTitle: '',
    chartBackground: '',
    itemColor: '',
    ww: '',
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
})

export default store
