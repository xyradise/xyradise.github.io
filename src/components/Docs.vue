<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <main class="flex-1 p-4">
        <section class="mb-8">
          <h1 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Documentation</h1>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Welcome to the documentation for this portfolio. Here you'll find a list of all possible terminal commands you can use in the terminal section of the site.
          </p>
        </section>
  
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Available Commands</h2>
          <ul class="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <strong class="text-gray-900 dark:text-gray-100">help</strong>
              <p class="mt-2">
                Displays a list of available commands and their descriptions.
              </p>
            </li>
            <li>
              <strong class="text-gray-900 dark:text-gray-100">clear</strong>
              <p class="mt-2">
                Clears the terminal screen.
              </p>
            </li>
            <li>
              <strong class="text-gray-900 dark:text-gray-100">go [page]</strong>
              <p class="mt-2">
                Navigates to the specified page.
                <ul class="list-disc pl-6 space-y-2">
                    <li class="bg-gray-200 dark:bg-gray-800 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <strong class="text-gray-900 dark:text-gray-100">go chess</strong>
                    </li>
                    <li class="bg-gray-200 dark:bg-gray-800 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <strong class="text-gray-900 dark:text-gray-100">go lichess</strong>
                    </li>
                    <li class="bg-gray-200 dark:bg-gray-800 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <strong class="text-gray-900 dark:text-gray-100">go geoguessr</strong>
                    </li>
                    <li class="bg-gray-200 dark:bg-gray-800 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <strong class="text-gray-900 dark:text-gray-100">go hackerrank</strong>
                    </li>
                    <li class="bg-gray-200 dark:bg-gray-800 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <strong class="text-gray-900 dark:text-gray-100">go leetcode</strong>
                    </li>
                </ul>
              </p>
            </li>
            <li>
              <strong class="text-gray-900 dark:text-gray-100">nav [page]</strong>
              <p class="mt-2">
                Navigates to the specified page.
                <ul class="list-disc pl-6 space-y-2">
                    <li class="bg-gray-200 dark:bg-gray-800 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <strong class="text-gray-900 dark:text-gray-100">nav home</strong>
                    </li>
                    <li class="bg-gray-200 dark:bg-gray-800 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <strong class="text-gray-900 dark:text-gray-100">nav about</strong>
                    </li>
                    <li class="bg-gray-200 dark:bg-gray-800 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <strong class="text-gray-900 dark:text-gray-100">nav projects</strong>
                    </li>
                    <li class="bg-gray-200 dark:bg-gray-800 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <strong class="text-gray-900 dark:text-gray-100">nav docs</strong>
                    </li>
                </ul>
              </p>
            </li>
            <li>
              <strong class="text-gray-900 dark:text-gray-100">exit</strong>
              <p class="mt-2">
                Redirects to the GitHub repository.
              </p>
            </li>
            <li>
              <strong class="text-gray-900 dark:text-gray-100">time</strong>
              <p class="mt-2">
                Displays the current time.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from './Navbar.vue'
  
  export default {
    name: 'Docs',
    components: {
      Navbar
    }
  }
  </script>
  