const API_KEY = 'dcec130e5beee46c770e6dbd05586d60';

function exibeLancamento (){
    let divfilmeLancamento = document.getElementById('filmeLancamento');
    let texto = '';

    let dados = JSON.parse(this.responseText); 

            let filmes1 = dados.results[0];
            let filmes2 = dados.results[1];
            let filmes3 = dados.results[2];

            texto = texto + `
                            <div class="carousel-item active" >
                            <div class="container">
                                <div class="row rowFilme">

                                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 filmeLancamento" id ="filmeLancamento">
                                        <img class="lancamentoimg" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${filmes1.poster_path}" ></img>
                                    </div>
                                    <div class="col12 col-sm-12 col-md-12 col-lg-8 col-xl-8 lancamentotexto">
                                        <h2 class=lancamentotitulo>${filmes1.title}</h2>
                                        <p class=lancamentoresumo><strong>Sinopse</strong>: ${filmes1.overview}</p>
                                        <p><strong>Data de lançamento</strong>: ${filmes1.release_date}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="carousel-item " >

                            <div class="container">
                                <div class="row rowFilme">

                                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 filmeLancamento" id ="filmeLancamento">
                                        <img class="lancamentoimg" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${filmes2.poster_path}" ></img>
                                    </div>
                                    <div class="col12 col-sm-12 col-md-12 col-lg-8 col-xl-8 lancamentotexto">
                                        <h2 class=lancamentotitulo>${filmes2.title}</h2>
                                        <p class=lancamentoresumo><strong>Sinopse</strong>: ${filmes2.overview}</p>
                                        <p><strong>Data de lançamento</strong>: ${filmes2.release_date}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="carousel-item " >
                            <div class="container">
                                <div class="row rowFilme">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 filmeLancamento" id ="filmeLancamento">
                                        <img class="lancamentoimg" src="https://image.tmdb.org/t/p/w500/${filmes3.poster_path}" ></img>
                                    </div>
                                    <div class="col12 col-sm-12 col-md-12 col-lg-8 col-xl-8 lancamentotexto">
                                        <h2 class=lancamentotitulo>${filmes3.title}</h2>
                                        <p class=lancamentoresumo><strong>Sinopse</strong>: ${filmes3.overview}</p>
                                        <p><strong>Data de lançamento</strong>: ${filmes3.release_date}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            `;
    
    divfilmeLancamento.innerHTML = texto;
};


function exibePopulares (){
    let divTela = document.getElementById('destaq');
    let texto = `<div class="col-12 col-sm-12 col-md-12 col-lg-12 row lancainic">
                    <h1>DESTAQUES NO BRASIL</h1>
                </div>`;

    let dados = JSON.parse(this.responseText);
        for (i = 0; i < 8; i++){
            let filmes = dados.results[i];
            texto = texto + `
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 filmes">
            <div class="card text-center h-100" >
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${filmes.poster_path}" class="card-img-top" alt="capacoringa">
                <div class="card-body d-flex flex-column">
                    <h4 class="card-title">${filmes.title}</h3>
                    <a href="https://www.themoviedb.org/movie/${filmes.id}" target="_blank" class="mt-auto btn btn-dark"><b>Veja mais</b></a>
                </div>
            </div>    
        </div>
            `;
        };

    divTela.innerHTML = texto;
};

window.onload = function consultaFilme(){
    let aaa = new XMLHttpRequest();
    aaa.onload = exibeLancamento;
    aaa.open ('GET', `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=1&region=BR`);
    aaa.send();
    let xhr = new XMLHttpRequest();
    xhr.onload = exibePopulares;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1&region=BR`);
    xhr.send();
}


/*
function exibePesquisa (){

        };

function executaPesquisa(){
    let query = document.getElementById('iddotextodepesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibePesquisa;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
    xhr.send();
}


document.getElementById ('iddobotao').addEventListener('click', executaPesquisa);

*/