const reservarHotel = require("./Hotel")
const listaHoteis = require("./Hotel/listaHoteis")

test("Para os cliente regular o hotel mais indicado é Parque das flores", () =>
    expect(reservarHotel("regular", [new Date(2020, 2, 16), new Date(2020, 2, 17), new Date(2020, 2, 18)], listaHoteis())).toBe("Parque das flores"))

test("Para os cliente regular o hotel mais indicado é Parque das flores", () =>
    expect(reservarHotel("regular", [new Date(2020, 2, 20), new Date(2020, 2, 21), new Date(2020, 2, 22)], listaHoteis())).toBe("Jardim Botânico"))

test("Para os cliente regular o hotel mais indicado é Parque das flores", () =>
    expect(reservarHotel("fidelidade", [new Date(2020, 2, 26), new Date(2020, 2, 27), new Date(2020, 2, 28)], listaHoteis())).toBe("Mar Atlântico"))    