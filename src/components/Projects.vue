<template>
    <div> 
        <Navbar />
        <Terminal />
        <div class="max-w-3xl mx-auto p-4">
            <section class="mb-8">
                <h2 class="text-2xl font-bold mb-4 text-gray-900">Projects</h2>
                <ul class="list-disc pl-6 text-lg text-gray-700">
                <li>Just this one for now...</li>
                </ul>
            </section>
        </div>
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