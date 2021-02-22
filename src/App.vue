<template>
  <div id="app">
    <Nav />
    <div class="container pages">
      <router-view />
    </div>
  </div>
</template>
<script>
import Nav from "./components/Shared/Nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;

  font: inherit;
}

html,
body {
  font-family: "Segoe UI", sans-serif;
  background-color: #fafafa;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

/* @main */
#app {
  min-height: 100vh;
  background: #fafafa;
}
.container {
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
}
</style>