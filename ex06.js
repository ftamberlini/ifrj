class Triangulo{
    constructor(base,altura){
        this.b = base;
        this.h = altura;
    }
    calcularArea(){
        return this.b*this.h/2;
    }
}

const triangulo6 = new Triangulo(5,8);
console.log('A base do triângulo é '+triangulo6.b);
console.log('A altura do triângulo é '+triangulo6["h"]);
console.log('A área do triangulo é '+triangulo6.calcularArea());
document.getElementById("ex06").innerHTML+= '<br> A base do triângulo é '+triangulo6.b
document.getElementById("ex06").innerHTML+= '<br> A altura do triângulo é '+triangulo6["h"];
document.getElementById("ex06").innerHTML+= '<br>A área do triangulo é '+triangulo6.calcularArea();

