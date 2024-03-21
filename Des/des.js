// DESTRUCTURING (phân rã) 
//Dùng cho Array và Object
//Ví dụ: nếu muốn lấy ra 3 string từ 1 mảng, thông thườNg ta làm như sau :

// var array = ["Java", "Python", "Ruby"];
// var a = array[0]
// var b = array[1]
// var c = array[2]
// console.log(a,b,c)

//Còn sau đây là cách phân rã :
var array = ["Java", "Python", "Ruby"];
var [a,b,c] = array
console.log(a,b,c)
// và ta có thể hoàn toàn viết như này để chỉ lấy ra 2 giá trị:
/*  var [a,,c] = array
    console.log(a,c)
 */
console.log("=====================================")









//REST PARAMETER
// dấu 3 chấm dưỚi là rest, giúp ta lấy các phần tử còn lại của mảng
var LCK = ["T1", "HLE", "GEN", "KT" , "DK"]
//Lưu ý chữ rest có thể đặt tên bất kỳ, nhưng phải đặt ở cuối cùng
var [a,b,...rest] = LCK;
console.log(a,b)
console.log(rest)
//DấU 3 chấM có thể trùng với toán tử spread , nên nhớ rằng toán tử rest đi với destructuring
console.log("=====================================")



//ví dụ 2 : Huy Long áp dụng REST và Destructuring
var identify = {
    name: "HuyLong",
    age: 19,
    gender: "male"
}
var {name, ...rest} = identify
console.log(name);
console.log(rest);
/**
    Một thủ thuật, ví dụ cho 3 objs, yêu cầu xoá 1 obj, không sử dụng delete,... 
    var identify = {
    name: "HuyLong",
    age: 19,
    gender: "male"
    }
    var {name, ...newObject} = identify
    console.log(newObject);
*/
console.log("================================")









//VÍ DỤ TỔNG QUÁT NHẤT
var idea = {
    trungNhau: "Discrimination/",
    solution: "Teaching morality/",
    slogan: {
        trungNhau:"black lives matter"
    }
}
//đầU tiên muốn lấy ra thằng object con của slogan, ta phải slogan:{trungNhau}.
//Tuy nhiên nó trùng tên với thằng trên ( nếu cho hiện ra sẽ ghi đè thằng trên) . Vậy nên ta có thể đổi tên bằng cách thêm dấu : + tên.
//Ví dụ : slogan:{trungNhau:children}
//Khi đã đổi tên, thì cái tên trungNhau cũ đã không còn, nếu cố gắng console.log nó ra, nó sẽ hiện undefined ( trường hợp console.log ra cái tên mà là tên riêng của ngôn ngữ, thì nó sẽ ouput ra một khoảng trắng rỗng)
var {trungNhau:parent, solution, slogan:{       trungNhau:children }} = idea;
console.log(parent, solution, children)
console.log("=====================================")











//VÍ DỤ TỔNG QUÁT thứ 2
// Trường hợp: lấy ra 1 object chưa được define
var object2 ={
    name2: "HuyLong",
    age2: 19,
    //Còn nếu trường hợp đã có keyvalue như dưới, nó sẽ lấy thằng dưỚi này, và hiện ra haha thay vì hoho
    // description:"haha"
}
//Trường hợp chưa có object description, ta có thể định nghĩa nó bằng cách thêm dấu = và giá trị mặc định như dưới
var {name2, age2, description = "hoho"} = object2
console.log(name2, age2,description)
console.log("================================")












//KếT luậN: toán tử rest khi áp dụng cho destructuring và định nghĩa tham số của 1 hàm => thì đó là toán tử rest. Những trưỜNg hợp còn lại đều là toán tử spread
// Ví dụ về định nghĩa tham số hàm:
function array3(...number){
    console.log(number);
}
//nó sẽ hiện ra 1 mảng chứa các giá trị của tham số truyền vào
console.log(array3(1,2,3,4,5,6,7,8,9,10));