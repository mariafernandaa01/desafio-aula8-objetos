class Celular { 
    constructor(marca, modelo, armazenamento, cor) { 
     this.marca = marca;
     this.modelo = modelo;
     this.armazenamento = armazenamento;
     this.cor = cor;  

    }
   
    apresentar(){
        console.log(`O celular selecionado é um ${this.marca} do ${this.modelo} com ${this.armazenamento} na cor ${this.cor}`)
    }
}


const celular1 = new Celular("Samsung", "Galaxy S23" , "128GB" , "Preto")
const celular2 = new Celular("iPhone", "iPhone 15 Pro Max" , "256GB", "Titânio Branco")


celular1.apresentar()
celular2.apresentar()