import mp3Img from "./imgs/1.jpg"
import celularImg from "./imgs/2.jpg"
import agendaImg from "./imgs/3.jpg"
const productsApi = [
    {
        id:"1",
        name : "Reproductor de MP3",
        image : mp3Img,
        price : 1200,
        detail : "color gris, capacidad 512MB, radio FM",
        category: "reproductores de mp3",
        stock: 13,
    },
    {
        id:"2",
        name: "Celular Sony Ericsson W55Oi",
        image : celularImg,
        price : 3490,
        detail: "color naranja y gris, capacidad 1gb",
        category: "celulares",
        stock: 5,
    },
    {
        id:"3",
        name: "Agenda Electrónica",
        image : agendaImg,
        price : 875,
        detail: "marca Casio, capacidad 32Kb, modelo SF-3300",
        category: "agendas electronicas",
        stock: 18,
    }
]

export const getProductById = (id) =>{
    return productsApi[id];
  }

export default productsApi;