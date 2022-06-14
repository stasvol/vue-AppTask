<template>
  <div class="row">
    <div class="col s6 offset-s3">
     <h2>Create Task</h2>

      <form @submit.prevent="onSubmit">
        <div class="input-field">
          <input v-model="title" id="title" type="text" class="validate" required>
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>

        <div class="chips" ref="chips"></div>

        <div class="input-field col s12">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Textarea</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/2048</span>
        </div>

        <input type="text" ref="datepicker" placeholder="datepicker">
        <button class="btn" type="submit">Create Task</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CreateTask',
  data:()=> ({
    title: '',
    description: '',
    chips: null,
    date: null,
  }),
 mounted() {
  this.chips = M.Chips.init(this.$refs.chips,{
    placeholder: 'Task tags'
  })
   this.date = M.Datepicker.init(this.$refs.datepicker,{
     format:	'dd.mm.yyyy',
     defaultDate: new Date(),
     setDefaultDate: true
   });
},
  methods: {
    onSubmit() {
     const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'active',
        tags: this.chips.chipsData,
        date: this.date.date
      }
      this.$store.dispatch('createTask',task)
         },
    unmounted() {
      if (this.date && this.date.unmounted) {
        this.date.unmounted()
      }
      if (this.chips && this.chips.unmounted) {
        this.chips.unmounted()
      }
    }
  }
}
</script>
