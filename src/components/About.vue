<template>
    <div> 
        <Navbar />
        <div class="max-w-3xl mx-auto p-4">
            <section class="mb-8">
                <h2 class="text-2xl font-bold mb-4 text-gray-900">Who am I?</h2>
                <p class="text-lg text-gray-700">
                Just an undergrad, but hopefully I get to do some post grad stuff. 
                </p>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-bold mb-4 text-gray-900">Interests</h2>
                <ul class="list-disc pl-6 text-lg text-gray-700">
                <li>Computers and of the like</li>
                <li>Math</li>
                <li>and chess...</li>
                </ul>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-bold mb-4 text-gray-900">About the Website</h2>
                <p class="text-lg text-gray-700">
                This website is just a portfolio, but not a boring one. It should work (i think), but I should get to every issue eventually...
                </p>
            </section>
        </div>
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