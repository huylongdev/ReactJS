//Enhanced object literals của ES6

//1.Định nghĩa key: value cho object.
var name = "javascript";
var price = 1000;
var course = {
  //Bình thường chúng ta sẽ viết name:name, price:price. Tuy nhiên, trong trường hợp này 2 key của mình trùng với tên 2 biến trên ( name,pricce) vậy nên ta có thể ghi tắt như dưới
  name,
  price,
};
console.log(course);
console.log("================================");










//2.Định nghĩa methods cho object
var animal = "Tiger";
var zoo = {
  animal,
  /**
   Bình thường chúng ta sẽ viết như sau :getName: function () {
    return animal;
    }
    Tuy nhiên với tính chất Enhanced object literals ta có thể rút gọn như dưới
   */
  getName() {
    return animal;
  },
};

console.log(zoo.getName());
console.log("================================");








//3.Định nghĩa key cho object dưới dạng biến
var key = "address";
var key2 = "District";
const information = {
  [key] : "Ha Noi",
  [key2] : "Thanh Xuan",
}
console.log(information)