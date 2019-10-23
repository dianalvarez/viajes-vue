const state = {
  navBarOption: 'No Info',
  navBarCruising: '',
  ports: [],
  departingFlag: false,
  leavingFlag: false,
  cruisingPortIds: []
}

const getters = {
}

const actions = {

}

const mutations = {
  changeCruisingTo () {
    state.navBarOption = 'cruisingTo'
    state.cruisingFlag = true
    state.departingFlag = false
    state.leavingFlag = true
  },
  changeDepartingFrom () {
    state.navBarOption = 'departingFrom'
    state.cruisingFlag = false
    state.departingFlag = true
    state.leavingFlag = true
  },
  changeLeaving () {
    state.navBarOption = 'leaving'
    state.cruisingFlag = false
    state.departingFlag = false
    state.leavingFlag = true
  },
  changeAmericas () {
    state.navBarCruising = 'americas'
  },
  changeEurope () {
    state.navBarCruising = 'europe'
  },
  changeAsia () {
    state.navBarCruising = 'asia'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
