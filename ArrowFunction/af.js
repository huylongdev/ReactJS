// 1. Let, const --> OK
// 2. Template Literals --> OK
// 3. Multi-line String --> OK
// 4. Arrow Function --> OK
// 5. Classes --> OK
// 6. Default parameter values
// 7. Destructuring
// 8. Rest parameter
// 9. Spread
// 10. Enhanced Object Literals
// 11. Tagged template literals
// 12. Modules





// VÍ DỤ
// Đây là cách làm bình thường :
/**
 * const sum = function(a,b) {
        return a+b;
    }
    console.log(sum(2,3))
 */

// Đây là dùng arrow
const sum = (a,b) => {
    return a+b;
}
console.log(sum(2,3))

//Chúng ta thậM chí có thể làm ngắn gọn hơn như dưới:
// Nếu thêm phía sau arrow là {} thì nó sẽ hiểu đó là khối code phải thực hiện. Còn nếu không có thì nó hiểu return luôn.
const sum2 = (a,b) => a+b;
console.log(sum(10,21))








console.log("================================================")
//VÍ DỤ 2
//Dưới đây ta muốn trả về object, làm nhiều công việc
// const array = (arr, num) => {
//     return {
//         arr : arr.length + 10,
//         num: 2 + 20
//     };
// }
// console.log(array("Huy Long", 2))
//////// NếU làm theo rút gọn, ta phải thêm dấu () bao bọc objed để nó hiểu mà return
const array = (arr, num) => ({arr : arr.length + 10,
    num: 2 + 20
    
})
console.log(array("Huy Long", 2))








console.log("================================================")
//VÍ DỤ 3
/*Nếu chỉ có 1 tham số truyền vào , ta thậm chí có thể bỏ dấu () ngay ở đây mà chỉ ghi mỗi log */
const logger = log/* (log) */=> console.log(log)
logger("Chovy")









//VÍ DỤ 4
// Arrow function không có context, nó sẽ lấy context của hàm gần nhất
const course = {
    name : "Javascript",
    getName: () => {
        
    }
}