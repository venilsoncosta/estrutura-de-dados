function somaNaturais(n){
    if(n === 0){
        return 0;
    }
    else{
        return n + somaNaturais(n - 1);
    }
}

const teste = somaNaturais(50);

console.log(teste);

