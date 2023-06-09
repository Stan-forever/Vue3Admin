### 1、ul li去掉前面的点 style list-style: none
### 2、对象数组获取某一属性值集合
```
const arr = [
  {id: 1, name: 'mike'},
  {id: 2, name: 'mike'},
  {id: 3, name: 'mike'},
  {id: 4, name: 'mike'},
  {id: 5, name: 'mike'},
]
const ids = Array.from(arr, ({id}) => id)
console.log(ids) //[1, 2, 3, 4, 5]
```
### 3、数组截取
slice(start, end) 返回不包含end
```
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.slice(2, 5)) [2, 3, 4]
```
### 4、数组以某符号隔开 
join
```
const arr = [0, 1, 2, 3, 4, 5, 6]
const string = arr.join(',') // "0,1,2,3,4,5,6"
```
### 5、字符串按指定符号分割成数组

```
const string  = '0,1,2,3,4,5,6'
console.log(string.split(',')) //[0, 1, 2, 3, 4, 5, 6]
```
### 6、找到数组中满足条件的第一项
find
```
const arr = [
  {id: 1, name: 'mike'},
  {id: 2, name: 'mike'},
  {id: 3, name: 'jane'},
  {id: 4, name: 'mike'},
  {id: 5, name: 'mike'},
]
console.log(arr.find(item => item.id === 3)) //{ id: 3, name: "jane" }
```
### 7、找到数组中满足条件的第一项的下标
findIndex
```
const arr = [
  {id: 1, name: 'mike'},
  {id: 2, name: 'mike'},
  {id: 3, name: 'jane'},
  {id: 4, name: 'mike'},
  {id: 5, name: 'mike'},
]
console.log(arr.findIndex(item => item.id === 3)) //2
```
### 8、数组是否包含某个值
includes
```
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// Expected output: true
```
### 9、indexOf() 方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1
```
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// Expected output: 1
console.log(beasts.indexOf('giraffe'));
// Expected output: -1
```
### 10、获取对象键值对
Object.keys
```
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
```
### 11、解析JSON(JSON.parse) 转为JSON串(JSON.stringfy)
### 12、数字数组转为字符串数组
```
const list = [1, 2, 3]
console.log('list', list) ///[1, 2, 3]
const stringList = list.map(String)
console.log('stringList', stringList) //['1', '2', '3']
```