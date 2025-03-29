<template>
    <div class="flex justify-center items-start">
      <div class="terminal bg-gray-900 text-white p-4 rounded-lg w-full max-w-lg">
        <div class="output">
          <div v-for="(line, index) in lines" :key="index" v-html="line" class="mb-1">
          </div>
          <div class="flex items-center">
            <span class="text-[#33ff33]">guest@xyradise</span>
            <span class="text-white">:</span>
            <span class="text-[#268BD2]">~</span>
            <span class="text-white">$</span>
            <input
              v-model="currentInput"
              @keydown="handleKeydown"
              class="bg-transparent text-[#33ff33] border-none outline-none ml-2 w-full"
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
              this.addLine(`<span class="text-[#33ff33]">guest@xyradise</span><span class="text-white">:</span><span class="text-[#268BD2]">~</span><span class="text-white">$</span> <span class="text-[#33ff33]">${this.currentInput}</span>`);
              this.processCommand(this.currentInput);
              this.currentInput = '';
          }
      } else if (this.currentInput.length === 0)
      {
        if (event.key === 'Enter')
        {
          this.addLine(`<span class="text-[#33ff33]">guest@xyradise</span><span class="text-white">:</span><span class="text-[#268BD2]">~</span><span class="text-white">$</span>`);
        }
      }

      if (event.key === 'Backspace') {
        this.currentInput = this.currentInput.slice(0, -1);
      }

      
    },
    processCommand(command) {
      if (command === 'man') {
          this.addLine('What manual page do you want?');
          this.addLine('For example, try \'man man\'');

          const man = command.slice(4).trim();

          switch (man)
          {
            case "cd":
              // route page
              break;
            case "clear":
              // route page
              break;
            case "exit":
              // route page
              break;
            case "go":
              // route page
              break;
            case "ls":
              // route page
              break;
            case "time":
              // route page
              break;
            case "man":
              // route page
              break;
            case "pwd":
              // route page
              break;
            case "whoami":
              // route page
              break;
          }
      } else if (command === 'clear') {
          this.clear();
      } else if (command.startsWith('./')) {
          let page = command.slice(2).trim();
          if (page === 'about.html' || page === 'home.html' || page === 'docs.html' || page === 'projects.html') {
              page = page.slice(0, -5);
              this.$router.push(`/${page}`);
          } else {
              this.addLine(`zsh: no such file or directory: ${command}`)
          }
      } else if (command.startsWith('go')) {
          let page = command.slice(3).trim();
          if (page === 'leetcode') {
              window.open(`https://leetcode.com/u/xyradise/`, '_blank');
          } else if (page === 'chess') {
              window.open('https://www.chess.com/member/xyradise', '_blank');
          } else if (page === 'lichess') {
              window.open('https://lichess.org/@/xyradise', '_blank');
          } else if (page === 'hackerrank') {
              window.open('https://www.hackerrank.com/profile/xyradise', '_blank');
          } else {
              this.addLine("Page not found...")
          }
      } else if (command === 'exit') {
          window.location.href = 'https://github.com/xyradise/xyradise.github.io';
      } else if (command === "time") {
          this.addLine(this.displayTime())
      } else if (command === "ls") {
          this.addLine(`<span class="text-[#268BD2]">about.html docs.html home.html projects.html</span>`)
      } else if (command === "pwd") {
          this.addLine(`<span class="text-[#268BD2]">xyradise.github.io/</span>`)
      } else {
          this.addLine(`${command}: command not found`);
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
