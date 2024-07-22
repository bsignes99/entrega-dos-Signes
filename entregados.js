let productos = [
    {
        marca: "IPhone",
        modelo: "15 Pro Max",
        precio: 1000,
        descripcion: "64 GB, no incluye cargador, pero si dos necesarios stickers y saca grandes fotos.",
        id:1,
        img: "../assets/img/iphone-15-pro-max.png",
        preciofinal:
            function (){
             return ((this.precio * 20) / 100);
        }

    },
    {   marca: "Samsung",
        modelo:"S23 ultra",
        precio: 900,
        descripcion:"512 GB, 12 GB RAM, incluye cargador",
        id: 2,
        img: "../assets/img/samsung-s23-ultra.png",
        preciofinal:
            function (){
            return (this.precio * 20) / 100;
        }

    },
    {   marca: "IPhone",
        modelo: "11",
        precio: 800,
        descripcion:"64 GB, este tiene cargador si.",
        id:3,
        img: "../assets/img/apple-iphone-11.png",
        preciofinal:
            function (){
             return ((this.precio * 20) / 100);
        }
    },
    {   marca: "Samsung",
        modelo: "S20 Ultra",
        precio: 600,
        descripcion: "128 GB, 2 GB RAM",
        id:4,
        img:"../assets/img/samsung-s20-ultra.png",
        preciofinal:
            function (){
             return ((this.precio * 20) / 100);
        }
    },
    {
        marca: "Motorola",
        modelo: "c115",
        precio: 1399,
        descripcion: "Una verdadera maquina, podes jugar a la viborita",
        id: 5,
        img:"../assets/img/motorola-c115.png",
        preciofinal:
            function (){
             return ((this.precio * 20) / 100);
        }
    }
];


alert("¡Somos campeones de America y PhoneZone está de festejo! Ingresa el codigo de descuento que puedes encontrar en su factura si compraste en los ultimos 3 meses.");
let descuento = Number(prompt("el codigo es 91218 :)"));


let main = document.createElement("main");
main.className = "main-productos";
document.body.append(main);

let section = document.createElement("section");
section.className= "conteiner-all"
main.appendChild(section);


if (descuento != 91218){
        alert("Codigo de descueto invalido");
        for (let i = 0; i < productos.length; i++) {
            let contenedor = document.createElement("div")
            contenedor.className = "conteiner-prod"
            section.appendChild(contenedor);
            
        
            const imagen = document.createElement("div");
            imagen.innerHTML = `<img src=${productos[i].img} alt=""/>`
            contenedor.appendChild(imagen);
        
            
            const info = document.createElement("div");
            info.innerHTML = `<h2>${productos[i].marca } ${productos[i].modelo} </h2> <p>Usd $${productos[i].precio}</p> <h5>${productos[i].descripcion}</h5>`;
            contenedor.appendChild(info);
            
        }
            
}else{

        for (let i = 0; i < productos.length; i++) {
             productos[i].precio -= productos[i].preciofinal();

             };

        let vectoroferta = productos.map((elemento) => {
            return {modelo : elemento.modelo, precioNuevo: elemento.precio };

        });
        console.log(vectoroferta);

         
        for (let i = 0; i < productos.length; i++) {
           let contenedor = document.createElement("div")
           contenedor.className = "conteiner-prod"
           section.appendChild(contenedor);
           
           const imagen = document.createElement("div");
           imagen.innerHTML = `<img src=${productos[i].img} alt=""/>`
           contenedor.appendChild(imagen);
                   
           const info = document.createElement("div");
           info.innerHTML = `<h2>${productos[i].marca } ${productos[i].modelo} </h2>
            <p>¡Precio de Oferta!: Usd $${vectoroferta[i].precioNuevo}</p> 
            <h5>${productos[i].descripcion}</h5>`;
           contenedor.appendChild(info);
           };

};




