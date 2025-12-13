 /* 
  Aqui eu criei um carrossel de depoimentos que funciona de forma suave.
  Ele mostra um depoimento por vez, permite avançar e voltar pelos botões
  e muda automaticamente depois de alguns segundos.

  Quando o depoimento está ativo, ele fica mais visível e em destaque,
  enquanto os outros ficam mais apagados. Se a pessoa passar o mouse
  em cima do carrossel, a troca automática pausa, e volta quando sai.

  No final, também deixei uma função simples pra abrir o WhatsApp
  em uma nova aba quando for chamada.
*/

/* Menu hamburguer - versão simples */
const botaoMenu = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu-principal');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});


        (function(){
            const listaInterna = document.getElementById('lista-interna');
            const botaoAvancar = document.getElementById('botao-avancar');
            const botaoVoltar = document.getElementById('botao-voltar');
            const itensDepoimento = listaInterna.children;
            const totalDepoimentos = itensDepoimento.length;
            let indiceAtual = 0;

            // Atualiza posição e estilo (fade leve)
            function atualizar_carrossel(){
                const deslocamento = -indiceAtual * 100;
                listaInterna.style.transform = `translateX(${deslocamento}%)`;

                for(let i = 0; i < totalDepoimentos; i++){
                    itensDepoimento[i].style.opacity = (i === indiceAtual) ? '1' : '0.45';
                    itensDepoimento[i].style.transform = (i === indiceAtual) ? 'translateY(0)' : 'translateY(8px)';
                }
            }

            // Avança um item
            function avancar_depoimento(){
                indiceAtual = (indiceAtual + 1) % totalDepoimentos;
                atualizar_carrossel();
            }

            // Volta um item
            function voltar_depoimento(){
                indiceAtual = (indiceAtual - 1 + totalDepoimentos) % totalDepoimentos;
                atualizar_carrossel();
            }

            botaoAvancar.addEventListener('click', avancar_depoimento);
            botaoVoltar.addEventListener('click', voltar_depoimento);

            // Autoplay suave
            let intervalo_auto = setInterval(avancar_depoimento, 5000);

            // Pausar autoplay ao passar o mouse
            const areaCarrossel = document.querySelector('.carrossel_area');
            if(areaCarrossel){
                areaCarrossel.addEventListener('mouseenter', ()=> clearInterval(intervalo_auto));
                areaCarrossel.addEventListener('mouseleave', ()=> intervalo_auto = setInterval(avancar_depoimento, 5000));
            }

            // Inicializar aparência
            atualizar_carrossel();
        })();

        // Função para abrir WhatsApp
      function abrir_whatsapp() {
    window.open(
        'https://wa.me/5511963136037?text=Oi%20Vivi!%20Meu%20nome%20%C3%A9%20(Digite%20Aqui%20seu%20Nome).%20Eu%20vim%20pelo%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20atendimentos.',
        '_blank'
    );
}
