<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4">
        <country-table :countries="countries" @selectCountry="selectCountry" />
      </div>
      <div class="col-12 col-md-4">
        <states-table :states="states" @selectState="selectState" />
      </div>
      <div class="col-12 col-md-4">
        <city-table :cities="cities" />
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "@/dataservice/dataservice";
import CountryTable from "./components/CountryTable.vue";
import StatesTable from "./components/StatesTable.vue";
import CityTable from "./components/CityTable.vue";

export default {
  name: "app",
  components: { CountryTable, StatesTable, CityTable },
  data() {
    return {
      countries: [],
      states: [],
      cities: [],
    };
  },
  created() {
    DataService.getAllCountry()
      .then((result) => {
        this.countries = result;
        //console.log(this.countries)
      })
      .catch(() => {});
  },
  methods: {
    selectCountry(id) {
      this.cities = [];
      //console.log(id)
      DataService.getStateByCountry(id)
        .then((result) => {
          this.states = this.sortArray(result,'name','desc');
          console.log(this.states)
          window.scrollTo(0, 0);
        })
        .catch(() => {});
    },
    selectState(id) {
      DataService.getCityByState(id)
        .then((result) => {
          this.cities = this.sortArray(result,'name','desc');
          window.scrollTo(0, 0);
        })
        .catch(() => {});
    },
    sortArray(data, field, direction) {
      if (direction == "desc") {
        // csökkenő sorrend
        data.sort((a, b) => {
          let fa = a[field].toLowerCase();
          let fb = b[field].toLowerCase();
          // a.name    a['name']

          //return fa > fb ? -1 : fa < fb ? 1 : 0

          // if (fa>fb) {
          //   return -1
          // } else {
          //   if (fa<fb){
          //     return 1
          //   } else{
          //     return 0
          //   }
          // }
          return fb.localeCompare(fa);
        });
      } else {
        // növekvő sorrend
        data.sort((a, b) => {
          let fa = a[field].toLowerCase();
          let fb = b[field].toLowerCase();
          return fa.localeCompare(fb);
        });
      }
      return data
    },
  },
};
</script>

<style>
</style>
