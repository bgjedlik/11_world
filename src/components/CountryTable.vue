<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Country name</th>
        <th>Code</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="country in countries" 
        :key="country.id"
        @click="$emit('selectCountry',country.id)" 
        :id="country.id">
        <td>{{ country.name }}</td>
        <td>{{ country.iso3 }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "country-table",
  props: ["countries"],
};
</script>

<style>
</style>