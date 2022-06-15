<template>
  <div>
    <h2 class="head">List</h2>
  <div class="row">
    <div class="col s6">
    <select ref="select" v-model="filter">
    <option value="" disabled selected>Choose your option</option>
    <option value="active">Active</option>
    <option value="outdated">Outdated</option>
    <option value="completed">Completed</option>
    </select>
    <label>Status Filter</label>
    </div>
  </div>
    <button v-if="filter" class="btn-small red" @click="filter=null">Clear filter</button>
    <hr>

    <table v-if="tasks.length">

     <thead>
     <tr>
       <th>#</th>

       <th>Title</th>
       <th>Date</th>
       <th>Description</th>
       <th>Status</th>
       <th>Open task</th>
     </tr>
     </thead>
     <tbody>
      <tr
            v-for="(task, i) in filterTask"
            :key="task.id"
        >
          <td>{{i+1}}</td>
          <td>{{task.title}}</td>
          <td>{{new Date(task.date).toLocaleDateString()}}</td>
          <td class="width-td"><div class="text">{{task.description}}</div></td>
          <td>{{task.status}}</td>
          <td>
            <router-link :to="'/task/' + task.id" tag="button" class="btn btn-small">
              Open
            </router-link>
          </td>
        </tr>
     </tbody>


    </table>

    <h4 v-else>No tasks</h4>
    </div>

</template>
<script>
export default {
  data:() => ({
    filter: null
  }),
  computed: {
    tasks() {
     return  this.$store.getters.tasks
    },
    filterTask() {
     return  this.tasks.filter(task => {
       if (!this.filter) {
         return true
       }
       return task.status === this.filter
     })
    }
  },
  mounted() {
    M.FormSelect.init(this.$refs.select);
  }

}
</script>
<style scoped>
.head {
  color: darkslategrey;
  text-align: center;
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

}
.width-td {
  max-width: 10rem;
}

</style>