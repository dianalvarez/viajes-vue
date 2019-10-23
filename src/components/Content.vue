<template>
<div>
<NavBar v-bind:cruisingCount="cruisingCount" v-bind:departingCount="departingCount"/>
<div class="cruise-search-widget__dropdown" style="">
  <div class="cruise-search-widget__dropdown-container">
    <!---->
    <div class="cruise-search-widget__dropdown-body">
      <!----> <!---->
      <div class="cruise-search-widget-filter__base cruise-search-widget-filter__base--type-date" v-if="this.$store.state.authStore.navBarOption==='leaving'">
        <div class="cruise-search-widget-filter__year">
          <div class="row">
            <div class="cruise-search-widget-filter__year-title "><span>2019</span></div>
          </div>
          <div class="row">
            <div class="cruise-search-widget-filter__months">
              <div class="row">
               <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2019-01" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-01"> <label for="dates_2019-01" class="cruise-search-widget-filter__month-label">
                  <a>Jan</a>
                  </label>
               </div>
               <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2019-02" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-02"> <label for="dates_2019-02" class="cruise-search-widget-filter__month-label">
                  <a>Feb</a>
                  </label>
               </div>
               <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2019-03" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-03"> <label for="dates_2019-03" class="cruise-search-widget-filter__month-label">
                  <a>Mar</a>
                  </label>
               </div>
               <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2019-04" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-04"> <label for="dates_2019-04" class="cruise-search-widget-filter__month-label">
                  <a>Apr</a>
                  </label>
               </div>
              </div>
              <div class="row">
               <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2019-05" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-05"> <label for="dates_2019-05" class="cruise-search-widget-filter__month-label">
                  <a>May</a>
                  </label>
               </div>
               <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2019-06" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-06"> <label for="dates_2019-06" class="cruise-search-widget-filter__month-label">
                  <a>Jun</a>
                  </label>
               </div>
               <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2019-07" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-07"> <label for="dates_2019-07" class="cruise-search-widget-filter__month-label">
                  <a>Jul</a>
                  </label>
               </div>
               <div class="cruise-search-widget-filter__month large-3 columns"><input id="dates_2019-08" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-08"> <label for="dates_2019-08" class="cruise-search-widget-filter__month-label">
                  <a>Aug</a>
                  </label>
               </div>
              </div>
              <div class="row">
               <div class="cruise-search-widget-filter__month large-3 columns"><input id="dates_2019-09" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-09"> <label for="dates_2019-09" class="cruise-search-widget-filter__month-label">
                  <a>Sep</a>
                  </label>
               </div>
               <div class="cruise-search-widget-filter__month large-3 columns"><input id="dates_2019-10" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-10"> <label for="dates_2019-10" class="cruise-search-widget-filter__month-label">
                  <a>Oct</a>
                  </label>
               </div>
               <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2019-11" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-11"> <label for="dates_2019-11" class="cruise-search-widget-filter__month-label">
                  <a>Nov</a>
                  </label>
               </div>
               <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2019-12" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2019-12"> <label for="dates_2019-12" class="cruise-search-widget-filter__month-label">
                  <a>Dec</a>
                  </label>
               </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cruise-search-widget-filter__year">
          <div class="row">
            <div class="cruise-search-widget-filter__year-title"><span>2020</span></div>
          </div>
          <div class="row">
            <div class="cruise-search-widget-filter__months">
              <div class="row">
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2020-01" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-01"> <label for="dates_2020-01" class="cruise-search-widget-filter__month-label">
                  <a>Jan</a>
                  </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2020-02" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-02"> <label for="dates_2020-02" class="cruise-search-widget-filter__month-label">
                  <a>Feb</a>
                 </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2020-03" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-03"> <label for="dates_2020-03" class="cruise-search-widget-filter__month-label">
                   <a>Mar</a>
                 </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--selected cruise-search-widget-filter__month--selected-first large-3 columns"><input id="dates_2020-04" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-04"> <label for="dates_2020-04" class="cruise-search-widget-filter__month-label">
                   <a>Apr</a>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--selected large-3 columns"><input id="dates_2020-05" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-05"> <label for="dates_2020-05" class="cruise-search-widget-filter__month-label">
                   <a>May</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--selected cruise-search-widget-filter__month--selected-last large-3 columns"><input id="dates_2020-06" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-06"> <label for="dates_2020-06" class="cruise-search-widget-filter__month-label">
                   <a>Jun</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month  large-3 columns"><input id="dates_2020-07" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-07"> <label for="dates_2020-07" class="cruise-search-widget-filter__month-label">
                    <a>Jul</a>
                   </label>
                </div>
                  <div class="cruise-search-widget-filter__month  large-3 columns"><input id="dates_2020-08" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-08"> <label for="dates_2020-08" class="cruise-search-widget-filter__month-label">
                     <a>Aug</a>
                    </label>
                </div>
              </div>
              <div class="row">
                <div class="cruise-search-widget-filter__month large-3 columns"><input id="dates_2020-09" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-09"> <label for="dates_2020-09" class="cruise-search-widget-filter__month-label">
                    <a>Sep</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month large-3 columns"><input id="dates_2020-10" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-10"> <label for="dates_2020-10" class="cruise-search-widget-filter__month-label">
                   <a>Oct</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled  large-3 columns"><input disabled="disabled" id="dates_2020-11" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-11"> <label for="dates_2020-11" class="cruise-search-widget-filter__month-label">
                    <a>Nov</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled  large-3 columns"><input disabled="disabled" id="dates_2020-12" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2020-12"> <label for="dates_2020-12" class="cruise-search-widget-filter__month-label">
                   <a>Dec</a>
                   </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cruise-search-widget-filter__year flex-dir-row">
          <div class="row">
            <div class="cruise-search-widget-filter__year-title"><span>2021</span></div>
          </div>
          <div class="row">
            <div class="cruise-search-widget-filter__months">
              <div class="row">
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-01" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-01"> <label for="dates_2021-01" class="cruise-search-widget-filter__month-label">
                   <a>Jan</a>
                  </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-02" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-02"> <label for="dates_2021-02" class="cruise-search-widget-filter__month-label">
                   <a>Feb</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-03" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-03"> <label for="dates_2021-03" class="cruise-search-widget-filter__month-label">
                   <a>Mar</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-04" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-04"> <label for="dates_2021-04" class="cruise-search-widget-filter__month-label">
                  <a>Apr</a>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-05" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-05"> <label for="dates_2021-05" class="cruise-search-widget-filter__month-label">
                   <a>May</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-06" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-06"> <label for="dates_2021-06" class="cruise-search-widget-filter__month-label">
                   <a>Jun</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-07" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-07"> <label for="dates_2021-07" class="cruise-search-widget-filter__month-label">
                   <a>Jul</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-08" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-08"> <label for="dates_2021-08" class="cruise-search-widget-filter__month-label">
                   <a>Aug</a>
                   </label>
                </div>
              </div>
              <div class="row">
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-09" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-09"> <label for="dates_2021-09" class="cruise-search-widget-filter__month-label">
                   <a>Sep</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-10" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-10"> <label for="dates_2021-10" class="cruise-search-widget-filter__month-label">
                   <a>Oct</a>
                   </label>
                 </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-11" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-11"> <label for="dates_2021-11" class="cruise-search-widget-filter__month-label">
                   <a>Nov</a>
                   </label>
                </div>
                <div class="cruise-search-widget-filter__month cruise-search-widget-filter__month--disabled large-3 columns"><input disabled="disabled" id="dates_2021-12" name="dates" type="checkbox" class="cruise-search-widget-filter__input" value="2021-12"> <label for="dates_2021-12" class="cruise-search-widget-filter__month-label">
                    <a>Dec</a>
                   </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!----> <!---->
      <div v-else-if="this.$store.state.authStore.navBarOption==='departingFrom'">
          <div class="md-tabs">
            <ul class="tabs navBarSpaceMenu" data-responsive-accordion-tabs="tabs small-accordion medium-tabs large-tabs" id="collapsing-tabs" data-allow-all-closed="true" data-multi-expand="true">
              <li class="tabs-title is-active navBarSpace">
                <button class="buttonDepartingFrom" v-on:click="changeAmericas()">
                  <a href="#panel1c">
                    <div class="cruise-search-widget__selector">
                      <span class="cruise-search-departing__selection">THE AMERICAS & THE CARIBBEAN</span>
                    </div>
                  </a>
                </button>
              </li>
              <li class="tabs-title navBarSpace">
                <button class="buttonDepartingFrom" v-on:click="changeEurope()">
                  <a href="#panel2c">
                    <div class="cruise-search-widget__selector">
                      <span class="cruise-search-departing__selection">EUROPE</span>
                    </div>
                  </a>
                </button>
              </li>
              <li class="tabs-title navBarSpace">
                <button class="buttonDepartingFrom" v-on:click="changeAsia()">
                  <a href="#panel3c">
                    <div class="cruise-search-widget__selector">
                      <span class="cruise-search-departing__selection">ASIA & SOUTHPACIFIC</span>
                    </div>
                  </a>
                </button>
              </li>
              <div class="slide"></div>
            </ul>
          </div>
          <div class="cruisingPadding">
            <div class="grid-container" v-if="this.$store.state.authStore.navBarCruising==='americas'">
              <div class="grid-x grid-margin-x">
                <div class="cell small-3"  v-for="(port,index) in this.$store.state.authStore.ports.slice(0,10)" :key="port.id">
                  <CruisingPortItem v-bind:port="port" v-bind:index="index"  v-bind:count="departingCount" @clicked="departingFromFunction"/>
                </div>
              </div>
            </div>
            <div class="grid-container" v-if="this.$store.state.authStore.navBarCruising==='europe'">
              <div class="grid-x grid-margin-x">
                <div class="cell small-3"  v-for="(port,index) in this.$store.state.authStore.ports.slice(11,15)" :key="port.id">
                  <CruisingPortItem v-bind:port="port" v-bind:index="index"  v-bind:count="departingCount" @clicked="departingFromFunction"/>
                </div>
              </div>
            </div>
            <div class="grid-container" v-if="this.$store.state.authStore.navBarCruising==='asia'">
              <div class="grid-x grid-margin-x">
                <div class="cell small-3"  v-for="(port,index) in this.$store.state.authStore.ports.slice(16,17)" :key="port.id">
                  <CruisingPortItem v-bind:port="port" v-bind:index="index"  v-bind:count="departingCount" @clicked="departingFromFunction"/>
                </div>
              </div>
            </div>
          </div>
      </div>
      <!----> <!---->
      <div class="cruisingPadding" v-else-if="this.$store.state.authStore.navBarOption==='cruisingTo'">
        <div class="grid-container">
          <div class="grid-x grid-margin-x">
            <div class="cell small-3"  v-for="(port,index) in this.$store.state.authStore.ports.slice(18,31)" :key="index">
                <CruisingPortItem v-bind:port="port" v-bind:index="index"  v-bind:count="cruisingCount" @clicked="cruisingCountFunction"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'
import CruisingPortItem from './CruisingPortItem'
import NavBar from './NavBar'

export default {
  name: 'Content',
  components: {
    NavBar,
    CruisingPortItem
  },
  data () {
    return {
      cruisingCount: 0,
      departingCount: 0
    }
  },
  mounted () {
    axios.get('https://statsapi.web.nhl.com/api/v1/teams')
      .then(response => (this.$store.state.authStore.ports = response.data.teams))
    this.$store.state.authStore.cruisingPortIds.forEach(element => {
    })
  },
  methods: {
    ...mapMutations([
      'changeAmericas',
      'changeEurope',
      'changeAsia'
    ]),
    cruisingCountFunction (value) {
      this.cruisingCount = value
    },
    departingFromFunction (value) {
      this.departingCount = value
    }
  }
}
</script>

<style scoped>
.cell.small-3 a.activePort,  .cell.small-4 a.activePort{
  background: #ECECEC;
  padding: 7px 5px;
}

button:focus, li:focus, a:focus {
  outline:0;
}

.md-tabs > .tabs {
  margin: 0;
  border: 0;
  padding: 1rem 25rem;
  list-style-type: none;
  display: table;
  width: 100%;
}

.md-tabs > .tabs > .tabs-title {
  display: table-cell;
  width: 33%;
  text-align: center;
  display: inline-block;
}

.md-tabs > .tabs > .tabs-title.is-active > a {
  color: #888888;
  background-color: transparent;
  outline: none;
}

.md-tabs > .tabs > .tabs-title.is-active:nth-of-type(1) ~ .slide {
  left: calc((100% / 3) * 0);
}

.md-tabs > .tabs > .tabs-title.is-active:nth-of-type(2) ~ .slide {
  left: calc((100% / 3) * 1);
}

.md-tabs > .tabs > .tabs-title.is-active:nth-of-type(3) ~ .slide {
  left: calc((100% / 3) * 2);
}

.md-tabs > .tabs > .tabs-title > a {
  color: #fefefe;
  font-size: 16px;
}

.md-tabs > .tabs > .tabs-title > a:hover, .md-tabs > .tabs > .tabs-title > a:focus {
  background: transparent;
}

.slide {
  background: #005EDC;
  width: calc(100% / 3);
  height: 3px;
  position: relative;
  left: 0;
  top: 49px;
  transition: left 0.3s ease-out;
}

.row, .columns {
  display: inline-block;
}
.cruise-search-widget-filter__base {
  padding: 7rem 20rem;
  display: flex;
  align-
  : center;
  justify-content: space-around;
}

.cruisingPadding {
  padding-top: 3rem;
  color: #005EDC;
}
.cruise-search-widget-filter__year {
  position: relative;
}

.cruise-search-widget-filter__year-title span {
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  padding-bottom: 50px;
  font-size: 24px;
  color: #515151;
  font-weight: 300;
}
.cruise-search-widget-filter__month-label {
  padding: 10px 0;
}
.cruise-search-widget-filter__month-label a:hover {
  background: #005EDC;
  color: white;
}
.cruise-search-widget-filter__month-label a  {
  border-radius: 100%;
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 30%;
  margin: -30%;
}
.cell.small-3, .cell.small-4  {
  padding: 10px 0;
}
.cell.small-3 a, .cell.small-4 a {
  border-radius: 5px;
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 0.7em;
  margin: -0.7em;
}
.navBarSpaceMenu {
  display: flex;
  align-
  : center;
  justify-content: center;
}
.navBarSpace {
  padding-top: 25px;
}
.cruise-search-departing__selection {
  color: #005EDC;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 800;
}

.cruise-search-widget-filter__month input[type="checkbox"] {
    opacity: 0;
}
.cruise-search-widget-filter__month label {
  color: #005EDC;
  font-size: 16px;
}
.tabs {
  border-style: none;
}
</style>
