<template>
  <a class="visitedColors"  v-on:click="cruisingPort(port, index)" v-bind:class="[cruisingFlag ? 'activePort' : '']">
    {{ port.name }}
  </a>
</template>
<script>
export default {
  name: 'CruisingPortItem',
  props: ['port', 'index', 'count'],
  data () {
    return {
      cruisingFlag: false
    }
  },
  created () {
    if (this.$store.state.authStore.cruisingPortIds.some(elem => elem === this.port.id)) {
      this.cruisingFlag = true
    }
  },
  methods: {
    cruisingPort (port, index) {
      let countNav = this.count
      if (this.$store.state.authStore.cruisingPortIds.some(elem => elem === port.id)) {
        countNav--
        this.cruisingFlag = false
        this.$store.state.authStore.cruisingPortIds = this.$store.state.authStore.cruisingPortIds.filter(element => element !== port.id)
      } else {
        countNav++
        this.cruisingFlag = true
        this.$store.state.authStore.cruisingPortIds.push(port.id)
      }
      this.$emit('clicked', countNav)
    }
  }
}
</script>

<style scoped>
.cell.small-3 a.activePort,  .cell.small-4 a.activePort{
  background: #ECECEC;
  padding: 7px 5px;
}
</style>
