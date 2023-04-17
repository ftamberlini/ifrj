const triangulo1 = {
    b : 10,
    h : 5,
    calcularArea: function(){
        return this.b*this.h/2
    }
};
console.log('A base do triângulo é '+triangulo1.b);
console.log('A altura do triângulo é '+triangulo1["h"]);
console.log('A área do triangulo é '+triangulo1.calcularArea());
document.getElementById("ex01").innerHTML+= '<br> A base do triângulo é '+triangulo1.b;
document.getElementById("ex01").innerHTML+= '<br> A altura do triângulo é '+triangulo1["h"];
document.getElementById("ex01").innerHTML+= '<br>A área do triangulo é '+triangulo1.calcularArea();