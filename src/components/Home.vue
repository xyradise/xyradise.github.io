<template>
    <div> 
        <Navbar />
        <Terminal />
        <main class="flex-1 p-4">
          <section class="mb-8">
              <h2 class="text-2xl font-bold mb-4 text-gray-900">About the Website</h2>
              <p class="text-lg text-gray-700">
              This website is just a portfolio containing any publication or project I create.
              </p>
          </section>
          
          <section class="mb-8 list-disc pl-6 text-lg text-gray-700">
            <h2 class="text-2xl font-bold mb-4 text-gray-900">To-do List</h2>

            <ul class="list-disc pl-6 text-lg text-gray-700">
              <li>
                <strong class="text-gray-900">Fix up code</strong>
              </li>
              <li>
                <strong class="text-gray-900">Terminal history.</strong>
                <p class="mt-2">
                  Implement command history and navigation.
                </p>
              </li>
              <li>
                <strong class="text-gray-900">Create a forkable template</strong>
              </li>
            </ul>
          </section>
        </main>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Terminal from './Terminal.vue'

export default {

  name: 'Home',
  components: {
    Terminal, 
    Navbar
  }
}
</script>