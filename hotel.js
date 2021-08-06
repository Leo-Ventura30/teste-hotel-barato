const fimDeSemana = dia => dia === 0 || dia === 6

const reservarHotel = (tipoCliente, diasReserva, listaHoteis) => {
    var somaHoteis = []
    listaHoteis.forEach(hotel => {
        const somaHotel = calcularEstadiaHotel(tipoCliente, diasReserva, hotel)
        somaHoteis.push({ nome: hotel.nome, classificacao: hotel.classificacao, valor: somaHotel})
    })
    return compararHotel(somaHoteis)
}

const calcularEstadiaHotel = (tipoCliente, diasReserva, hotel) => {
    var somaHotel = 0
    diasReserva.forEach(dia => {
        if (fimDeSemana(dia.getDay())) {
            somaHotel += hotel[tipoCliente].finalDeSemana
        } else {
            somaHotel += hotel[tipoCliente].diaDeSemana
        }
    })
    return somaHotel
}

const compararHotel = (somaHoteis) => {
    var hotelAtual = {}
    hotelAtual = somaHoteis[0]
    somaHoteis.forEach(hotel => {
        if ( hotelAtual.valor > hotel.valor || hotelAtual.valor === hotel.valor && hotelAtual.classificacao < hotel.classificacao ) {
            hotelAtual = hotel
        } 
    })
    return hotelAtual["nome"]
}

module.exports = reservarHotel
