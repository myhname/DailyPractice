// function add() {
//     // 将传入的不定参数转为数组对象
//     let args = Array.prototype.slice.call(arguments);
  
//     // 递归：内部函数里面进行自己调用自己
//     // 当 add 函数不断调用时，把第 N+1 个括号的参数加入到第 N 个括号的参数里面
//     let inner = function() {
//       args.push(...arguments);
//       return inner;
//     }
    
//     inner.toString = function() {
//       // args 里的值不断累加
//       return args.reduce(function(prev, cur) {
//         return prev + cur;  
//       });
//     };
  
//     return inner;
//   }
  
//   // 测试一下
//   let result = add(1)(2)(3)(4);
//   console.log(result);

//   for(var i=0;i<5;i++){
//     setTimeout(async()=>{
//       await console.log(i++)
//     },100)
//   }

// let x = [1,2,3,3,{1:[3,5],name:"2"}]
// let y = new Set(x)
// let z= new Set([...x])
// console.log(y)
// console.log(y.has(1))
// console.log(z)
// console.log(z.has(1))

// var arr=[[1,[2,3]],[3,4]];
//     function Jw(obj){
//         console.log(Array.prototype.concat.apply([],obj))
//             return Array.prototype.concat.apply([],obj);
//     }
//     Jw(arr);
//     Jw(Jw(arr))

const arr1 = [6,1,2,3,4];
function sortNumber(a,b){
     return b-a;
}
arr1.sort(sortNumber);
console.log(arr1)