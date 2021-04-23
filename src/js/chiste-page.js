import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtroChiste, olList;
let indice = 1;

const crearHtml = () => {

    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary"> Otro chiste </button>

    <ol class="mt-2 list-group">
    </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.appendChild(divChistes);

}

const eventos = () => {
    
    olList = document.querySelector('ol');
    btnOtroChiste = document.querySelector('button');
    
    btnOtroChiste.addEventListener('click', async () => {

        btnOtroChiste.disabled = true;        
        dibujarChiste( await obtenerChiste());
        btnOtroChiste.disabled = false;
        
    });
    
}

const dibujarChiste = ( {id, value}) =>{

    const olItem = document.createElement('li');
    olItem.innerHTML = `${ indice++ }. <b>${ id }</b>: ${ value }`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);

}

export const init = () => {

    crearHtml();
    eventos();

}