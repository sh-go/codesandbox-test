/**
 * const, let等の変数宣言
 */

// var var1 = "var変数";
// console.log(var1);

// varは上書き可能
// var1 = "var変更";
// console.log(var1);

// varは再宣言可能
// var var1 = "var再宣言可能"
// console.log(var1)

// let var2 = "let変数";
// console.log(var2);

// // letは上書き可能
// var2 = "let変数を上書き";
// console.log(var2);

// // letは再宣言不可能
// let var2 = "let変数再宣言"

// const var3 = "const変数";
// console.log(var3);

// constは上書き、再宣言不可能

// constで定義したオブジェクトはプロパティの変更が可能
// const var4 = {
//   name: "shugo",
//   age: 29
// };
// var4.name = "sh-go";
// var4.addr = "chiba";
// console.log(var4);

// constで定義した配列はプロパティの変更が可能
// const var5 = ["dog", "cat"];
// var5[0] = "bird";
// var5.push("monkey");
// console.log(var5);

/**
 * テンプレート変数
 */

// const name = "shugo";
// const age = 29;

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

//
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1("func1だよー"));

const func1 = function (str) {
  return str;
};
console.log(func1("func1だよーん"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2だよよ"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(2, 3));

/**
 * 分割代入
 */
// const myprofile = {
//   name: "shugo",
//   age:29,
// }

// const message1 = `私の名前は${myprofile.name}です。${myprofile.age}歳です。`;
// console.log(message1);

// const {name, age} = myprofile;
// const message2 = `私の名前は${name}で、${age}歳です。`;
// console.log(message2);

// const myprofile = ["shugo", 29];
// const message3 = `私の名前は${myprofile[0]}です。${myprofile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myprofile;
// const message4 = `my name is ${name}, ${age} years old`;
// console.log(message4);

/**
 * デフォルト値
 */

const sayHello = (name = "shugo") => console.log(`こんにちは${name}さん`);
sayHello("yuko");

/**
 * スプレッド構文　...
 */
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2)=> console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめることもできる
// const arr2 = [1,2,3,4,5];
// const [num1, num2 , ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーと結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["shugo", "yuko", "keisuke"];
// for (let index=0; index < nameArr.length; index++){
//   console.log(`${index+1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${name}は${index+1}番目です。`));

// const numArr = [1,2,3,4,5];
// const newnumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newnumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name==="shugo"){
//     return name
//   } else{
//     return `${name}さんでーす`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrue : 条件がfalse
// const val1 = 1 > 0 ? "trueです" : "falseですよ";
// console.log(val1);

// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値入れてね";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "範囲外です" : "許容範囲内です";
// };
// console.log(checkSum(40, 70));

/**
 * 論理演算子の本当の意味を知ろう  && ||
 */
const flag1 = true;
const flag2 = true;

if (flag1 || flag2) {
  console.log("flag1 or flag2 is true");
}
if (flag1 && flag2) {
  console.log("flag1 and flag2 is true");
}

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
