<template>
   <table class="table table-hover">
    <thead>
      <tr>
        <th>City name</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="city in cities" 
            :key="city.id"
        >            
            <td>{{ city.name  }}</td>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
 name:'city-table',
 props:['cities']
}
</script>

<style>

</style>