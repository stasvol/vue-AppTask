<template>
  <div class="row">
    <div v-if="task" class="col s6 offset-s3">
    <h2>{{task.title}}</h2>

      <form @submit.prevent="onSubmit">
<!--        <div class="input-field">-->
<!--          <input v-model="title" id="title" type="text" class="validate" required>-->
<!--          <label for="title">Title</label>-->
<!--          <span class="helper-text" data-error="Title is required"></span>-->
<!--        </div>-->

        <div class="chips" ref="chips"></div>

        <div class="input-field col s12">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/2048</span>
        </div>

        <input type="text" ref="datepicker" placeholder="datepicker">
        <div v-if="task.status !== 'completed'">
        <button class="btn" type="submit">Update Task</button>
        <button class="btn blue" type="button" @click="completedTask">Competed Task</button>
        </div>
      </form>
    </div>
    <h4 v-else>Task not found</h4>
  </div>
</template>
<script>
export default {
  name: 'Tasks',
  data:()=> ({
    description: '',
    chips: null,
    date: null,
  }),
  computed: {
    task() {
      return  this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  mounted() {
    this.description = this.task.description
    this.chips = M.Chips.init(this.$refs.chips,{
      placeholder: 'Task tags',
      data: this.task.tags
    })
    this.date = M.Datepicker.init(this.$refs.datepicker,{
      format:	'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    });
    setTimeout(()=> {
      M.updateTextFields()
    },0)
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('updateTask',{
        id: this.task.id,
        description: this.description,
        date: this.date.date
      })
      this.$router.push('/list')
    },
    unmounted() {
      if (this.date && this.date.unmounted) {
        this.date.unmounted()
      }
      if (this.chips && this.chips.unmounted) {
        this.chips.unmounted()
      }
    },
    completedTask() {
      this.$store.dispatch('completedTask', this.task.id)
      this.$router.push('/list')
    }
  }

}
</script>
<style>
.btn {
  margin-right: 1rem;
}
</style>