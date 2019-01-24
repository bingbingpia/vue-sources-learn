/*@flow*/  // --标识用于flow检查

// test 1
// function split(str) {
//   return str.split(' ')
// }
// split(11)


// test2
// function add(x, y){
//   return x + y
// }
// add('Hello', 11)

// test3
// function add(x: number, y: number): number {
//   return x + y
// }
// // error
// add('Hello', 11)  
// // success 
// add(12, 11)   

// test4
// var arr: Array<number> = [1, 2, 3]
// // error
// arr.push('Hello')
// // success
// arr.push(4)

// test5
// class Bar {
//   x: string;           // x 是字符串
//   y: string | number;  // y 可以是字符串或者数字
//   z: boolean;
//   constructor(x: string, y: string | number) {
//     this.x = x
//     this.y = y
//     this.z = false
//   }
// }
// var bar: Bar = new Bar('hello', 4)
// var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
//   a: 'hello',
//   b: 11,
//   c: ['hello', 'world'],
//   d: new Bar('hello', 3)
// }

// test6
// var foo: ?string = null

