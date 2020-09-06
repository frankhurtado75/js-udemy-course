//Parametros de un arrow function
const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo con ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript', 'NodeJS');

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo con ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('JavaScript', 'NodeJS'));
