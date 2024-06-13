// const data = "Sample data file";

// await Bun.write('data.txt', data);

const file = Bun.file('data.txt')

console.log(file.name)
console.log(file.size)
console.log(await file.text())
console.log(await file.arrayBuffer())