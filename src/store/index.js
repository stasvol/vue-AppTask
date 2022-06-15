import { createStore } from 'vuex'
import tasks from "@/views/Tasks";

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
        .map(task => {
          if (new Date(task.date) < new Date()) {
            task.status = 'outdated'
          }
          return task
        })
  },
  getters: {
    tasks:state => state.tasks,
    taskById: state => id => state.tasks.find(task => task.id === id)
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)

      localStorage.setItem('tasks',JSON.stringify(state.tasks))
    },
    updateTask(state, {id, description, date}) {
      const tasks = state.tasks.concat()
      const idx = tasks.findIndex(task=> task.id === id)
      const task = tasks[idx]

      const status = new Date(date) > new Date() ? 'active' : 'outdated'
      tasks[idx] = {...task, date, description, status}
      state.tasks = tasks
      localStorage.setItem('tasks',JSON.stringify(state.tasks))
    },
    completedTask(state, id) {
      const idx = state.tasks.findIndex(task => task.id === id)
      state.tasks[idx].status = 'completed'
      localStorage.setItem('tasks',JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask',task)
    },
    updateTask({commit}, task) {
      commit('updateTask', task)
    },
    completedTask({commit}, id) {
      commit('completedTask', id)
    }
  },
  modules: {
  },

})
