<template>
  <nav class="cyan darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Tasks</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link
         tag="li"
         to="/"
         exact
         active-class="active"
        >
          <a href="#">Create</a>
        </router-link>
        <router-link
            tag="li"
            to="/list"
            active-class="active"
        >
          <a href="#">List</a>
        </router-link>
<!--        <li><a href="badges.html">Components</a></li>-->
<!--        <li><a href="collapsible.html">JavaScript</a></li>-->
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.right {
  display: flex;
}
.cyan {
  padding: 0 2rem;
}
</style>

