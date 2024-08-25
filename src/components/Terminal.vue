<template>
    <div class="flex justify-center items-start min-h-screen">
      <div class="terminal bg-gray-900 text-green-400 p-4 rounded-lg w-full max-w-lg">
        <div class="output">
          <div v-for="(line, index) in lines" :key="index" class="mb-1 text-gray-200">
            {{ line }}
          </div>
          <div class="flex items-center">
            <span class="text-gray-400">guest@xyradise-</span>
            <span class="text-white">[/]</span>
            <span class="text-green-400">$</span>
            <input
              v-model="currentInput"
              @keydown="handleKeydown"
              class="bg-transparent border-none outline-none ml-2 w-full"
              autofocus
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Terminal',
    data() {
      return {
        lines: [],
        currentInput: '',
        theme: '',
      };
    },
    methods: {
      handleKeydown(event) {
        event.preventDefault(); 
        if (this.currentInput.length < 25) {
          if (event.key.length === 1) {
            this.currentInput += event.key;
          }
        }
        if (this.currentInput.length > 0) {
            if (event.key === 'Enter') {
                this.addLine(`guest@xyradise-[/] ${this.currentInput}`);
                this.processCommand(this.currentInput);
                this.currentInput = '';
            }
        } else {
            if (!(event.key === 'Backspace')) {
                this.addLine(`guest@xyradise-[/] ${this.currentInput}`);
            }
        }
        if (event.key === 'Backspace') {
          this.currentInput = this.currentInput.slice(0, -1);
        }
      },
      processCommand(command) {
        if (command === 'help') {
            this.addLine('Available commands: help, go, nav, clear, exit, and time');
        } else if (command === 'clear') {
            this.clear();
        } else if (command.startsWith('nav')) {
            const page = command.slice(4).trim();
            if (page === 'about' || page === 'home' || page === 'docs' || page === 'projects') {
                this.$router.push(`/${page}`);
            } else {
                this.addLine('Page not found...')
            }
        } else if (command.startsWith('go')) {
            const page = command.slice(3).trim();
            if (page === 'leetcode') {
                window.open(`https://leetcode.com/u/xyradise/`, '_blank');
            } else if (page === 'chess') {
                window.open('https://www.chess.com/member/xyradise', '_blank');
            } else if (page === 'lichess') {
                window.open('https://lichess.org/@/xyradise', '_blank');
            } else if (page === 'hackerrank') {
                window.open('https://www.hackerrank.com/profile/xyradise', '_blank');
            } else if (page === 'geoguessr') {
                window.open('https://www.geoguessr.com/user/662604fa544d14c262b03fe4', '_blank');
            } else {
                this.addLine("Page not found...")
            }
        } else if (command === 'exit') {
            window.location.href = 'https://github.com/xyradise/xyradise.github.io';
        } else if (command === "time") {
            this.addLine(this.displayTime())
        } else {
            this.addLine(`Command not recognized: ${command}`);
        }
      },
      displayTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const currentTime = `${hours}:${minutes}:${seconds}`;
        return currentTime;
      },
      addLine(newLine) {
        this.lines.push(newLine);
        if (this.lines.length >= 10) {
          this.lines.shift();
        }
      },
      clear() {
        this.lines = [];
      }
  }
}
</script>
  