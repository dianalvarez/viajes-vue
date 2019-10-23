<template>
  <div class="md-tabs cruise-search-widget__toolbar">
    <ul class="tabs" data-responsive-accordion-tabs="tabs small-accordion medium-tabs large-tabs" id="collapsing-tabs" data-allow-all-closed="true" data-multi-expand="true">
      <li class="tabs-title is-active">
        <button class="buttonMainNavBar" v-on:click="changeCruisingTo()">
          <a href="#panel1c">
          <span class="cruise-search-widget__label">Cruising to</span>
          <div class="cruise-search-widget__selector">
            <span class="cruise-search-widget__selection">Any Destination</span>
            <span class="cruise-search-widget__icon" v-if="this.$store.state.authStore.cruisingFlag"><img src="../assets/images/expandArrow.png"></span>
            <span class="badge notification" v-else>+{{ this.cruisingCount }}</span>
          </div>
          </a>
        </button>
      </li>
      <li class="tabs-title">
        <button class="buttonMainNavBar" v-on:click="changeDepartingFrom()">
          <a href="#panel2c">
          <span class="cruise-search-widget__label">Departing from</span>
          <div class="cruise-search-widget__selector">
            <span class="cruise-search-widget__selection">Any Port</span>
            <span class="cruise-search-widget__icon cruise-search-widget__icon__caret">
            <span class="cruise-search-widget__icon" v-if="this.$store.state.authStore.departingFlag"><img src="../assets/images/expandArrow.png"></span>
            <span class="badge notification" v-else>+{{ this.departingCount }}</span>
            </span>
          </div>
          </a>
        </button>
      </li>
      <li class="tabs-title">
        <button class="buttonMainNavBar" v-on:click="changeLeaving()">
          <a href="#panel3c">
          <span class="cruise-search-widget__label">Leaving</span>
          <div class="cruise-search-widget__selector">
            <span class="cruise-search-widget__selection">Any date</span>
            <span class="cruise-search-widget__icon">
              <img src="../assets/images/calendar.png">
            </span>
          </div>
          </a>
        </button>
      </li>
      <div class="slide"></div>
    </ul>
    <a href="#" class="button royal cruise-search-widget__button md-theme-rccl" id="rciCruiseSearchWidgetSubmitButton">SEARCH CRUISE</a>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'NavBar',
  props: ['cruisingCount', 'departingCount'],
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['getPorts']),
    ...mapMutations([
      'changeCruisingTo',
      'changeDepartingFrom',
      'changeLeaving'
    ])
  }
}
</script>

<style scoped>
button:focus, li:focus, a:focus {
  outline:0;
}

.md-tabs > .tabs {
  margin: 0;
  border: 0;
  padding: 1rem 3rem;
  list-style-type: none;
  display: table;
  width: 100%;
}

.md-tabs > .tabs > .tabs-title {
  display: table-cell;
  width: 25%;
  text-align: center;
  display: inline-block;
}

.md-tabs > .tabs > .tabs-title.is-active > a {
  color: #888888;
  background-color: transparent;
  outline: none;
}

.md-tabs > .tabs > .tabs-title.is-active:nth-of-type(1) ~ .slide {
  left: calc((100% / 4) * 0);
}

.md-tabs > .tabs > .tabs-title.is-active:nth-of-type(2) ~ .slide {
  left: calc((100% / 4) * 1);
}

.md-tabs > .tabs > .tabs-title.is-active:nth-of-type(3) ~ .slide {
  left: calc((100% / 4) * 2);
}

.md-tabs > .tabs > .tabs-title.is-active:nth-of-type(4) ~ .slide {
  left: calc((100% / 4) * 3);
}

.md-tabs > .tabs > .tabs-title > a {
  color: #fefefe;
  font-size: 16px;
}

.md-tabs > .tabs > .tabs-title > a:hover, .md-tabs > .tabs > .tabs-title > a:focus {
  background: transparent;
}

.slide {
  background:#ECECEC;
  width: calc(100% / 4.5);
  height: 9px;
  position: relative;
  left: 0;
  top: 66px;
  transition: left 0.3s ease-out;
}

@media screen and (max-width: 39.9375em) {
  .cruise-search-widget__label {
    color: #005EDC;
  }
}
@media (min-width: 40em) {
  .cruise-search-widget__label {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    display: flex;
    align-items: left;
  }
}

@media screen and (max-width: 39.9375em) {
.hover-underline-menu .menu .button {
  padding: 6px 20px;
}
}
@media (min-width: 40em) {
.hover-underline-menu .menu .button {
  color: #FEFEFE;
  padding: 16px 44px;
}
}

.cruise-search-widget__label {
  color:  #5e5e5e;
}
.cruise-search-widget__base {
  margin: 0px 120px;
}

.cruise-search-widget__selection {
  font-size: 19px;
  color: #005EDC;
  float: left;
}
.cruise-search-widget__selector {
  margin: 7px 0px;
}

.cruise-search-widget__icon img {
  width: 6%;
  float: right;
  margin-bottom: 14px;
}
button {
  width: 85%;
}
.badge.notification {
  background:  #ECECEC;
  color: #0072BA;
  padding: 0.4em;
  min-width: 1.1em;
  font-size: 1.1rem;
  float: right;
}

.button.royal {
  background-color: #005EDC;
  color: #FEFEFE;
  font-size: 16px;
}

.button.royal:hover, .button.royal:focus {
  background-color: #005EDC;
  color: #FEFEFE;
}

.cruise-search-widget__cta {
 position: relative;
}

a.button.royal {
  position: absolute;
  right: 37px;
  top: 25px;
  padding: 15px 3rem;
}

ul {
  border-bottom: 1px solid #ECECEC;
}

@media screen and (max-width: 39.9375em) {
  .cruise-search-widget__title {

  }
}
@media (min-width: 40em) {
  .cruise-search-widget__title {
    display: none;
  }
}

</style>
