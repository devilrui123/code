// const buffer = Buffer.from('你好')
// console.log(buffer.toString())


const buffer = Buffer.alloc(10)
console.log(buffer);

// Buffer.alloc() 安全，但是相率相对不高

// Buffer.allocUnsafe()不安全，但是相对效率高

// Buffer.from()将其他类型转成，buffer

