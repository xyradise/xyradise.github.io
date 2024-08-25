<template>
    <div> 
        <Navbar />
        <Terminal />
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Terminal from './Terminal.vue';

export default {

  name: 'Home',
  components: {
    Terminal, 
    Navbar
  }
}
</script>