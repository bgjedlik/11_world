<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>State name</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="state in states" 
            :key="state.id"
            @click="$emit('selectState',state.id)">
            <td>{{ state.name  }}</td>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    name:'states-table',
    props:['states']
}
</script>

<style>

</style>