let texto = 
['Chayal, Guatemala',
'Chayal, Guatemala',
'Chayal, Guatemala',
'Sierra de las Navajas, Hidalgo',
'Chayal, Guatemala',
'Sierra de las Navajas',
'Pico de Orizaba, Puebla-Veracruz',
'Chayal, Guatemala',
'Chayal, Guatemala']

const result = {};

const frecuencia = (arrayWithRepetition) =>{
    arrayWithRepetition.forEach((value) => {
        result[value] = (result[value] || 0) + 1;
    });
}
frecuencia(texto)