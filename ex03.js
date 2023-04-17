const triangulo3 = {
    lado1 : 5,
    lado2 : 10,
    lado3 : 6,
    b : 10,
    h : 5,
    calcularArea: function(){
        return this.b*this.h/2;
    },
    calcular2p: function(){
        return (this.lado1 + this.lado2 + this.lado3);
    }
};
console.log('O perímetro do triângulo é '+triangulo3.calcular2p());
document.getElementById("ex03").innerHTML+= '<br> O perímetro do triângulo é '+triangulo3.calcular2p();
