class Forma{
    #lados;
    constructor(vetorLados){
        this.#lados = vetorLados;
    }
    calcular2p(){
        let perimetro=0
        for(let i=0;i<this.#lados.length;i++)
            perimetro+=this.#lados[i];
        return perimetro; 
    }
    calcularArea(){
        return this.#lados[0]*this.#lados[0]
    }
    
    getLados(){
        return this.#lados
    }
}

const tri = new Forma([3,4,5]);
const qua = new Forma([4,4,4,4]);
console.log('A quantidade de lados da 1a forma geométrica é '+tri.getLados().length+', que são ' + tri.getLados() + ' cujo perímetro é ' + tri.calcular2p() + ' e área igual a ' +tri.calcularArea());
console.log('A quantidade de lados da 2a forma geométrica é '+qua.getLados().length+', que são ' + qua.getLados() + ' cujo perímetro é ' + qua.calcular2p() + ' e área igual a ' +qua.calcularArea());
document.getElementById("ex08").innerHTML+= '<br> A quantidade de lados da 1a forma geométrica é '+tri.getLados().length+', que são ' + tri.getLados() + ' cujo perímetro é ' + tri.calcular2p() + ' e área igual a ' +tri.calcularArea();
document.getElementById("ex08").innerHTML+= '<br> A quantidade de lados da 2a forma geométrica é '+qua.getLados().length+', que são ' + qua.getLados() + ' cujo perímetro é ' + qua.calcular2p() + ' e área igual a ' +qua.calcularArea();
