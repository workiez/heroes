module.exports = {
    index : (req,res) => {
        res.send('Ni superman, Iron Mam o La Mujer Maravilla son tan importantes como las y los Heroes de carne y hueso que encontraras en este sitio. Esperamos que ellas y ellos te sirvan como inspiracion para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!')
    },
    mostrarCreditos: (req,res) => {
        res.send('Pagina creada por Mark')
    },
    error: (req,res) => {
        res.status(404).send('404 not found.');
    }
}
