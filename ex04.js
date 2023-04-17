const triangulo4 = {
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
    },
    setLado:function(x,y,z){
        this.lado1= x;
        this.lado2= y;
        this.lado3= z;
    }
};
triangulo4.setLado(9,9,9)
console.log('O perímetro do triângulo é '+triangulo4.calcular2p());
document.getElementById("ex04").innerHTML+= '<br> O perímetro do triângulo é '+triangulo4.calcular2p();
