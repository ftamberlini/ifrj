const triangulo2 = {
    b : 10,
    h : 5,
    calcularArea: function(){
        return this.b*this.h/2
    }
};
//Incluindo novo atributo
triangulo2.lado = 5;
console.log('Um dos lados do triângulo é '+triangulo2.lado);
document.getElementById("ex02").innerHTML+= '<br> Um dos lados do triângulo é '+triangulo2.lado;
delete triangulo2.lado;
console.log('Um dos lados do triângulo é '+triangulo2.lado);
document.getElementById("ex02").innerHTML+= '<br> Um dos lados do triângulo é '+triangulo2.lado;