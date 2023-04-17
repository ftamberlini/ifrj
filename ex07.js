class TrianguloV{
    #b;
    #h;
    constructor(base,altura){
        this.b = base;
        this.h = altura;
    }
    calcularArea(){
        return this.b*this.h/2;
    }
    getBase(){
        return this.#b
    }
    getAltura(){
        return this.#h
    }
}

const triangulo7 = new TrianguloV(5,8);
console.log('A base do triângulo é '+triangulo7.b);
console.log('A altura do triângulo é '+triangulo7["h"]);
console.log('A área do triangulo é '+triangulo7.calcularArea());
document.getElementById("ex07").innerHTML+= '<br> A base do triângulo é '+triangulo7.getBase();
document.getElementById("ex07").innerHTML+= '<br> A altura do triângulo é '+triangulo7.getAltura();
document.getElementById("ex07").innerHTML+= '<br>A área do triangulo é '+triangulo7.calcularArea();

