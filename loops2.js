//* Ejercicio 1: Suma de resistencias

function sum(num){

    if (num == 0) { //Se iguala a cero para indicarle al programa en que momento debe parar el ciclo
        return 0;
    }
    else {
        return num + sum(--num) //Esta funcion es la que permite hacer la sumas recursivas
    }
}

console.log("sumResistances is:")
console.log(sum(6));  //? Este valor se puede modificar segun sea el caso


//* Ejercicio 2: Numero divido en matrices

function numDiv(n) {
    if (n <= 1) {
        return [n];
    } else {
        let mitad = n /2;
        return [Math.floor(mitad), Math.ceil(mitad)]; //El comando Math.floor sirve para redondear en caso de que se ingrese una cifra impar
    }
    }
    
    console.log(numDiv(8));

    //*Ejercicio 3 Sociedad secreta

    let arreglo = ["Azul", "Rosa", "Verde", "Gris"];
    function sociedad (arreglo) {
        let inicial = [];
        for (let i = 0; i < arreglo.length; i++) {
            inicial.push(arreglo[i][0]);
        }
        return inicial;
    }
    console.log(`Secret name is`)
    console.log(sociedad(arreglo));

    //*Ejercicio 4: Estado en linea


    function online(users) {
        if (users.length === 0) {
            return "Nadie está en línea";
        }
    
        let displayString;
    
        if (users.length === 1) {  //con esto se indica que mientras haya un usuario se mostrara el estado en linea
            displayString = `${users[0]} está en línea`;
        } else if (users.length === 2) { 

            displayString = `${users[0]} y ${users[1]} están en línea`;
        } else {
            displayString = `${users[0]}, ${users[1]} y ${users.length - 2} más están en línea`;
        }
    
        return displayString;
    }
    

    const loginUsers = ['mocklng99', 'J0eyPunch', `Fresa29`, `Chaoskoff`, `CyberPlane`];
    console.log(online(loginUsers)); 
    
    

    //*Ejercicio 5: Matriz de multiplos

    function arrayMultiplos(numero, longitud) {
        let multiplos = [];
        for (let i = 1; i <= longitud; i++){
            multiplos.push(numero*i);
        }
        return multiplos;
    }
    console.log(arrayMultiplos(3,5));
    console.log(arrayMultiplos(2,10));


    //*Ejercicio 6: Dominancia Positiva
    
    function esPositiva(matriz){

        let conteoPositivos = 0;
       for (let i = 0; i < matriz.length; i++){
        if (matriz[i] > 0) {
            conteoPositivos++;
        }
    }
        return conteoPositivos > matriz.length/2;
       }
    
    let matriz = [2, 8, -7];

    
    console.log(esPositiva(matriz));

    //*Ejercicio 7:

    function average(matrix) {
        // Primero se divide la longitud de la matriz por mitad
        let mid = Math.ceil(matrix.length / 2);
        let primerMitad = matrix.slice(0, mid);
        let segundaMitad = matrix.slice(mid).reverse();
    
        let result = [];
        // Sumar cada elemento del primer grupo con el correspondiente del segundo grupo y dividir entre 2
        for (let i = 0; i < primerMitad.length; i++) {
            if (i < segundaMitad.length) {
                result.push((primerMitad[i] + segundaMitad[i]) / 2); //Suma los elementos de cada parte y los divide en la mitad
            } else {
                result.push(primerMitad[i] / 2); // En caso de matrices con longitud impar
            }
        }
    
        return result;
    }
    
    let arr = [3, 6, 0, 8];
    let result = average(arr);
    console.log(result); 
    






