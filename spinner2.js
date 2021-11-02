
let items = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', 'hello from spinner1.js... \rheyyy\n'];
let delay = 1000;

for (let item of items) {
    setTimeout(() => {
        process.stdout.write(item);
      }, delay);
      delay += 500;
}
