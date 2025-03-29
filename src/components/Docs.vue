<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <Terminal />
    <main class="flex-1 p-4">
      <section class="mb-8">
        <h1 class="text-3xl font-bold mb-4 text-gray-800">Documentation</h1>
        <p class="text-lg text-gray-700">
          Welcome to the documentation for this terminal. Here you'll find out how to interact with this terminal.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Functionality</h2>
        <p class="text-lg text-gray-700 mb-4">
          This works like a normal terminal, but with some differences.
        </p>

        <ul class="list-disc pl-6 text-lg text-gray-700">
          <li>
            <strong class="text-gray-900">No command history</strong>
            <p class="mt-2">
              No up and down keys to traverse between entries. History is not saved. Planned to be added in the next update.
            </p>
          </li>
          <li>
            <strong class="text-gray-900">No dark mode</strong>
            <p class="mt-2">
              More of a laziness issue, but I will probably get to it in the next update.
            </p>
          </li>
          <li>
            <strong class="text-gray-900">No terminal customization</strong>
            <p class="mt-2">
              This will happen in probably two updates from now, but it will include customization for every aspect of the terminal. 
            </p>
          </li>
          <li>
            <strong class="text-gray-900">"File execution"</strong>
            <p class="mt-2">
              Typing ls will work as one would expect, and you can execute files found by doing "./filename".
            </p>
          </li>
        </ul>

        <h2 class="text-2xl font-bold mt-4 mb-4 text-gray-900">Available Commands</h2>
        <ul class="list-disc pl-6 text-lg text-gray-700">
          <li>
            <strong class="text-gray-900">clear</strong>
            <p class="mt-2">
              Clears the terminal screen.
            </p>
          </li>
          <li>
            <strong class="text-gray-900">help</strong>
            <p class="mt-2">
              Displays a list of available commands.
            </p>
          </li>
          <li>
            <strong class="text-gray-900">go [page]</strong>
            <p class="mt-2">
              Navigates to the specified page. I haven't decided how I want to implement "go" in the terminal other than its functionality.
            </p>
            <ul class="list-disc pl-6 space-y-2">
                    <li class="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors">
                        <strong class="text-gray-900">go chess</strong>
                    </li>
                    <li class="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors">
                        <strong class="text-gray-900">go hackerrank</strong>
                    </li>
                    <li class="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors">
                        <strong class="text-gray-900">go leetcode</strong>
                    </li>
                    <li class="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors">
                        <strong class="text-gray-900">go lichess</strong>
                    </li>
                </ul>
          </li>
          <li>
            <strong class="text-gray-900">exit</strong>
            <p class="mt-2">
              Redirects to the GitHub repository.
            </p>
          </li>
          <li>
            <strong class="text-gray-900">time</strong>
            <p class="mt-2">
              Displays the current time.
            </p>
          </li>
          <li>
            <strong class="text-gray-900">ls</strong>
            <p class="mt-2">
              Displays contents of current directory.
            </p>
          </li>
          <li>
            <strong class="text-gray-900">pwd</strong>
            <p class="mt-2">
              Displays current directory.
            </p>
          </li>
          <li>
            <strong class="text-gray-900">man</strong>
            <p class="mt-2">
              Provides manual pages for each command.
            </p>
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
  name: 'Docs',
  components: {
    Terminal, 
    Navbar
  }
}
</script>
  