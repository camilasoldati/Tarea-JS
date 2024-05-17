let misDatos = {
    nombre : "Camila",
    apellido : "Soldati",
    dni : "46871289",
    comidasFavoritas : ["Sushi", "Asado", "Milanesa"],
    edad : 18, 
    saludar : function () {
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita es ${this.comidasFavoritas[0]} `
    }
}

console.log(misDatos.saludar());


let auto = {
    marca: "Peugot",
    modelo: "208",
    anio: 2022,
    color: "blanco",
    posicion: 0,
    avanzar : function(n) {
        if (n>0) {
            this.posicion += n;
        }
    },
    retroceder : function(n) {
        if (n>0) {
            this.posicion -= n;
        }
    }
};

auto.avanzar(15);
auto.retroceder(8);
auto.avanzar(11);
auto.retroceder(5);

console.log(auto.posicion);



let nuevoAuto = {
    marca: "Peugot",
    modelo: "208",
    anio: 2022,
    color: "Blanco",
    posicion: 0,
    moverse : function(n) {
        if (n>0) {
            this.posicion += n;
        } 
        else if (n<0) {
            this.posicion -= -n;
        }
    },
};

nuevoAuto.moverse(15);
nuevoAuto.moverse(-12);

console.log(nuevoAuto.posicion);


let ironMan = {
    nombre : "Iron Man",
    equipo : "Avengers",
    poderes : ["Volar", "Lanzar misiles", "Disparar láser"],
    energia : 100, 
    getPoder : function (num) {
        this.energia -= 10;
        return `Poder elegido de ${this.nombre}: ${this.poderes[num]}. Energía restante: ${this.energia}.`
    }
}

let hulk = {
    nombre : "Hulk",
    equipo : "Avengers",
    poderes : ["Aplastar", "Gritar", "Golpear"],
    energia : 100, 
    getPoder : function (num) {
        this.energia -= 10;
        return `Poder elegido de ${this.nombre}: ${this.poderes[num]}. Energía restante: ${this.energia}.`
    }
}


console.log(ironMan.getPoder(5));
console.log(hulk.getPoder(3));
console.log(ironMan.getPoder(1));
console.log(hulk.getPoder(4));