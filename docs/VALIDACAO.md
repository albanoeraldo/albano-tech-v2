# Validação da entrega

Data: 15/09/2026. Navegador: Chromium em ambiente automatizado.

## Verificado

- Renderização em larguras de 320, 360, 390, 720, 768, 1024 e 1440 pixels, sem transbordamento horizontal identificado.
- Ilustrações locais carregadas, inclusive as imagens adiadas até a rolagem.
- Elementos de entrada visíveis após percorrer a página.
- Progresso da timeline acompanhando a rolagem.
- Filtros exibindo apenas a categoria selecionada e restauração da lista completa.
- Janela de projeto, fechamento por Escape, retorno do foco e navegação por Tab dentro do modal.
- Bloqueio da rolagem enquanto o modal está aberto e liberação ao fechar.
- Ocultação do link externo em conceitos sem projeto público.
- Menu para celular, estado acessível e fechamento por Escape.
- Perguntas frequentes, incluindo o funcionamento sem JavaScript.
- Mensagens por serviço e número correto nos links de WhatsApp.
- Formulário gerando o endereço esperado, codificando acentos e caracteres especiais.
- Rejeição de descrição contendo somente espaços.
- Link alternativo para abrir a mensagem caso a nova aba não abra.
- Informações de privacidade acessíveis em janela.
- Botão para pausar a faixa, controle de movimento e preferência de movimento reduzido do sistema.
- Sem JavaScript: conteúdo, detalhes textuais dos projetos, FAQ e links diretos de contato.
- Ausência de erros de JavaScript no cenário testado.
- Alvos das âncoras internos presentes e caminhos dos recursos locais existentes.

## Limites da validação

Os testes de renderização e interação usaram o HTML autocontido com o mesmo
CSS, JavaScript e SVGs da pasta. A política do navegador deste ambiente bloqueou
a navegação direta em endereços HTTP locais e `file://`. Não foram alteradas
essas políticas; o conteúdo foi entregue diretamente ao motor do navegador.
Os caminhos da versão com arquivos separados foram conferidos estaticamente.

Não houve publicação no GitHub Pages. A abertura em celular físico, em Safari
e em Firefox ainda deve ser confirmada. Os endereços de WhatsApp foram
conferidos, mas não foi feito um envio real de mensagem nem validado um aplicativo
WhatsApp autenticado. O envio continua dependendo da confirmação do visitante.

Os testes não representam certificação de acessibilidade, auditoria formal de
segurança ou garantia de compatibilidade com todos os navegadores.

A prévia visual pode ser capturada com movimentos pausados para evitar quadros
intermediários. O arquivo entregue inicia com animações, exceto quando o sistema
do visitante solicita movimento reduzido.
