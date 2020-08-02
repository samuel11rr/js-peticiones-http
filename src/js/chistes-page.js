import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnChiste, lista;



const crearChistesHtml = () => {
  const html = `  
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">
      Otro chiste
    </button>

    <ol class="mt-2 list-group">
    </ol>
  `;

  const divChistes = document.createElement('div');
  divChistes.innerHTML = html;

  body.append( divChistes );
}


const eventos = () => {
  lista = document.querySelector('ol');
  btnChiste = document.querySelector('button');

  btnChiste.addEventListener('click', async() => {
    btnChiste.disabled = true;
    
    dibujarChiste( await obtenerChiste() );

    btnChiste.disabled = false;
  });
}


const dibujarChiste = ( chiste ) => {
  const itemLista = document.createElement('li');
  itemLista.innerHTML = `<b> ${ chiste.id } </b>: ${ chiste.value }`;
  itemLista.classList.add('list-group-item');

  lista.append( itemLista );
}




export const init = () => {
  crearChistesHtml();
  eventos();
}