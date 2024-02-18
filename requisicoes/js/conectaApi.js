// Requisição GET
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

const lista = document.querySelector("[data-lista]");
function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
    </iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`
    return video;
};

async function listaVideo() {
    const listaApi = await listaVideos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.imagem, elemento.url)))
}
listaVideo();




// Requisição POST
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json" // tipo de arquivo
        },
        body: JSON.stringify({ // dados
            titulo: titulo,
            descricao: `${descricao} visualizações`,
            url: url,
            imagem: imagem
        })
    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
};


const formulario = document.querySelector("[data-formulario]");
async function criarVideo(event) {
    event.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random * 10).toString();

    await criaVideo(titulo, descricao, url, imagem);
    window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener('submit', (event) => criaVideo(event));
