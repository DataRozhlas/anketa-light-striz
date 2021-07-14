let host = 'https://data.irozhlas.cz/anketa-light-striz/';
if (window.location.hostname === 'localhost') {
  host = 'http://localhost/anketa-light-striz/';
}

function noComment(resp) {
  if (resp === 'NA') {
    return '<i>Bez komentáře</i>';
  }
  return resp;
}

function noFoto(resp) {
  if (resp === 'NA') {
    return 'face.jpg';
  }
  return resp;
}

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  let resps = '';

  data.forEach((el) => {
    resps += `
        <div class="respondent">
            <img class="portret" src="${host}img/${noFoto(el.img)}" alt="${el.jm}" />
                <div class="bio">
                    <div class="jmeno" id="jmeno">${el.jm}</div>
                    <div class="vek">${el.fce}</div>
                </div>
            <div class="odpoved">${noComment(el.resp)}</div>
        </div>
        `;
  });
  document.getElementById('anketa-wrapper').innerHTML = `<div id="anketa">${resps}</div>`;
}

const r = new XMLHttpRequest();
r.addEventListener('load', onLoad);
r.open('GET', `${host}data.json`);
r.send();
