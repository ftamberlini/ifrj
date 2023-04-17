function triangulo(x,y,z){
    this.lado1=x;
    this.lado2=y;
    this.lado3=z;
}
triangulo5 = new triangulo(3,4,5);
console.log('O perímetro do triângulo é '+(triangulo5.lado1+triangulo5.lado2+triangulo5.lado3));
document.getElementById("ex05").innerHTML+= '<br> O perímetro do triângulo é '+(triangulo5.lado1+triangulo5.lado2+triangulo5.lado3);
