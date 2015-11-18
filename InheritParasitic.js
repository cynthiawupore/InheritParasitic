// 寄生式继承
// 其基本思路是类似创建对象时的工厂模式，将继承过程封装在一个函数里，然后返回一个对象

function createObject(o){
  var clone = Object.create(o);
  clone.sayHi = function(){
   console.log("Hi~");
  };
 return clone;
}
var person = {
  name: "Tom",
  friends:  ["Jack", "John", "Kim"]
};
var David = createObject(person);
David.sayHi();//Hi~