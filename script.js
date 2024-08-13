const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Enquanto Sauda caminhava pela floresta, encontrou um jardim escondido entre as árvores vale abaixo e cercado por janelas e apenas uma abertura e se perguntou se entraria ou não no jardim.",
        alternativas: [
            {
                texto: "Entrar",
                afirmacao: "Ao encontrar um jardi e sem pensar muito, pulou de onde estava até a abertura, a qual logo após sua entrada se arrastou, prendendo-a onde estava, mas abrindo brechas em outro lugar. "
            },
            {
                texto: "Deixar para lá",
                afirmacao: "Ao encontrar um jardim, Sauda tenta dar meia volta, mas por descuido acaba escorregando de onde estava. Imediatamente, a janela abaixo de onde caía se abre e, ao entrar, se fecha novamente."
            }
        ]
    },
    {
        enunciado: "Fechada no jardim, Sauda busca uma saída, a qual não encontra com dificuldade, mas de repente... os balões aparecem novamente! Não há outra escolha a não ser usar suas espadas para estourá-los. Sauda aguenta muito bem os primeiros exércitos de balões, mas na 28° horda algo inesperado acontece: balões metálicos aparecem. O que Sauda faz?",
        alternativas: [
            {
                texto: "Chama pelo macaco do submarino.",
                afirmacao: "Após um grito, emerge de um lago dentro do jardim um macaco com um submarino, que facilmente explode a camada metálica destes balões com seu poderoso lança-misseis "
            },
            {
                texto: "Chama pelo macaco canhoneiro.",
                afirmacao: "Diante de um chamado, o macaco cahoneiro surge... do além?! Enfim, com suas poderosas bombas, ele decima os balões, trabalho fácil."
            }
        ]
    },
    {
        enunciado: "Com a ajuda do novo macaco, a camada de metal dos balões metálicos é estourada, deixando para trás apenas balões que Sauda daria conta. Tudo prossegue bem, até a 36° horda, quando inúmeras hordas de balões rosas super dentas aparecem. O que fazer?",
        alternativas: [
            {
                texto: "Usa uma habilidade da Sauda",
                afirmacao: "Sauda, para barrar o progresso dos balões, joga suas duas espadas no caminho, estourando tudo o que passe por elas."
            },
            {
                texto: "Melhorar o macaco escolhido",
                afirmacao: "O macaco escolhido tem uma ascenção e agora... dispara mísseis ao invés de seu antigo equipamento."
            }
        ]
    },
    {
        enunciado: "A última horda chega... os balões resolvem lançar seu último ataque, o que chamam de MOAB: Massive Ordinary Air Blimp (Dirigível Aéreo Trivial Massivo). Quando nada parece ter salvação, Ele aparece...",
        alternativas: [
            {
                texto: "Observar ",
                afirmacao: "O Super Macaco aparece e, canalizando o poder do Sol, dizima em um instante os últimos balões, limpando a área. Não há mais baloes, agora todos podem ir para casa sem o que temer."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em uma floresta...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
