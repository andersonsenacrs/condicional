index.js
let paisDeOrigem
if (paisDeOrigem === 'Brasil'){
    console.log('Braileiro')
} else if (paisDeOrigem === 'EUA'){
    console.log('Norte Americano')
} else if (paisDeOrigem === 'Inglaterra'){
    console.log('Inglês')
} else if (paisDeOrigem === 'França'){
    console.log('Francês')
} else if (paisDeOrigem === 'Itália'){
    console.log('Italiano')
} else if (paisDeOrigem === 'Brasil'){
     console.log('Braileiro')
} else if (paisDeOrigem === 'Canadá'){
     console.log('Canadense')
} else {
     console.log('Nacionalidade não encontrada')
}

// switch | break

let paisDeOrigem
switch (paisDeOrigem){
    case 'Brasil':
        console.log('Brasileiro')
        break
    case 'EUA':
        console.log('Norte Americano')
        break
    case 'Inglaterra':
        console.log('Inglês')
        break
    default:
        console.log('Nacionalidade não encontrada')
        break
}

// Exercicio 4 "Pokemon"

let Pokemon
switch (pokemon){
    case 'Bulbasauro':
        console.log ('Planta e Veneno')
        break
    case 'Charmander':
        console.log ('Fogo')
        break
    case 'Squirtle':
        console.log('Agua')
        break
    default:
        console.log('Nacionalidade não Encontrada')
        break
}
