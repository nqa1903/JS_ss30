function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}
function countTriangles(arr) {
    const n = arr.length;
    let count = 0;
    const triangles = [];
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (isTriangle(arr[i], arr[j], arr[k])) {
                    count++;
                    triangles.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    console.log("cac tam giac co the tao:");
    for (let index = 0; index < triangles.length; index++) {
        const triangle = triangles[index];
        console.log(`${index + 1}: [${triangle.join(", ")}]`);
    }
    return count;
}
let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
for (let i = 0; i < array.length; i++) {
    array[i] = parseFloat(array[i]);
}const result = countTriangles(arr);
console.log(`so luong tam giac co the tao : ${result}`)