class TrianguloSub extends Forma{
    #b;
    #h;

    constructor(lados,base,altura){
       super(lados);
       this.#b=base;
       this.#h=altura;
    }
    calcularArea(){
        return this.#b*this.#h/2;
    }

}
const triS = new TrianguloSub([3,4,5],3,4);
console.log('A quantidade de lados da 1a forma geométrica é '+triS.getLados().length+', que são ' + triS.getLados() + ' cujo perímetro é ' + triS.calcular2p() + ' e área igual a ' +triS.calcularArea());
document.getElementById("ex09").innerHTML+= '<br> A quantidade de lados da 1a forma geométrica é '+triS.getLados().length+', que são ' + triS.getLados() + ' cujo perímetro é ' + triS.calcular2p() + ' e área igual a ' +triS.calcularArea();
