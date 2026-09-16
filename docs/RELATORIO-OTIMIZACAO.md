# Albano Tech - otimização e correções mobile

Base: arquivo final enviado e arquivos HTML/CSS/JS conferidos com a `main` do repositório `albanoeraldo/albano-tech-v2` em 16/09/2026. Nenhum commit ou deploy foi feito por esta entrega.

## Resultado medido nos arquivos

- Imagens originais: **32.27 MB** (32,272,661 bytes).
- Todas as imagens do pacote otimizado, incluindo variantes responsivas: **2.23 MB** (2,230,354 bytes).
- Redução total: **93.09%**.

Os valores usam MB decimal (1 MB = 1.000.000 bytes). Este total não representa uma única visita: cada navegador escolhe variantes compatíveis com a tela, e as imagens abaixo da primeira seção são carregadas conforme a navegação. Fontes e bibliotecas não entram nessa soma.

| Imagem original | Antes (KB) | Arquivos novos, somados (KB) |
|---|---:|---:|
| `assets/img/hero/hero-notebook.jpg` | 3373.9 | 204.6 |
| `assets/img/hero/hero-pc.jpg` | 2165.7 | 216.4 |
| `assets/img/hero/hero-programacao.jpg` | 650.1 | 175.2 |
| `assets/img/hero/hero-suporte.jpg` | 2414.4 | 176.9 |
| `assets/img/services/assistencia-tecnica.jpg` | 2906.9 | 152.3 |
| `assets/img/services/solucoes-digitais.jpg` | 1243.4 | 224.7 |
| `assets/img/projects/automacao-processos.png` | 4422.9 | 218.6 |
| `assets/img/projects/doce-da-lu.png` | 1164.3 | 146.1 |
| `assets/img/projects/prumo.png` | 5394.7 | 189.9 |
| `assets/img/about/eraldo-perfil.png` | 7558.1 | 90.6 |
| `assets/img/brand/albano-tech-icon.png` | 585.2 | 42.0 |
| `assets/img/icons/whatsapp.png` | 2.6 | 2.6 |
| `assets/img/icons/whatsapp_icone.png` | 2.6 | 2.6 |
| `assets/img/social-preview.png` | 284.0 | 284.0 |
| `assets/img/brand/favicon.ico` | 103.8 | 103.8 |

## Alterações

1. Mesmas fotos convertidas e redimensionadas para WebP, sem mudar o conteúdo ou gerar imagens novas. Compressão com qualidade entre 82 e 90; logotipo mantido em PNG com transparência. O arquivo ICO foi preservado.
2. Variantes menores para celular, miniaturas dos projetos e fotos dos serviços. `srcset`/`sizes` nos elementos apropriados.
3. Primeira foto do Hero presente no HTML e com prioridade alta; as seguintes são preparadas uma por vez, depois do carregamento inicial. A troca só acontece depois que a próxima imagem está decodificada. Intervalo mantido em 6 segundos, com pausa em aba oculta, fora do Hero ou quando os movimentos são reduzidos.
4. Scripts externos mantidos, agora com `defer`, uma inclusão de cada. CSS do Swiper não bloqueia a renderização inicial; o carrossel espera o CSS antes de calcular medidas. Não troquei GSAP/Swiper por outra biblioteca nem removi as animações configuradas.
5. Formulário com colunas `minmax(0, ...)`, filhos com `min-width: 0` e campos limitados à largura disponível. Corrige a causa do corte, em vez de esconder o excesso com `overflow`.
6. Espaçamento acima de `Tem algo em mente?`: 42 px no desktop e 36 px no mobile, com mais 8 px internos no mobile.
7. Correções de nomes ARIA em contêineres genéricos e áreas de toque maiores nas bolinhas dos depoimentos.
8. Caminhos das imagens nos cards e em `config.js` atualizados em conjunto. Dimensões da imagem de cada modal informadas ao abrir. Removida uma regra mobile remanescente que limitava a altura da capa do modal.

Cores, textos, ordem das seções, links, número de WhatsApp e fontes foram mantidos. O texto visível do HTML foi comparado automaticamente antes/depois. Não houve modificação de banco de dados, serviços ou configurações do GitHub.

## Validação feita

- JavaScript verificado com `node --check` em `app.js` e `config.js`.
- CSS analisado com parser; nenhuma falha de sintaxe detectada. Isso não equivale a uma auditoria completa de todos os navegadores.
- Referências locais verificadas; as fontes existentes permanecem necessárias.
- Layout do formulário testado no Chromium nas larguras 320, 360, 390, 412, 540, 768, 1024, 1366 e 1920 px. Antes, o painel ultrapassava a tela nas cinco menores larguras; depois, painel, campos e botão ficaram dentro da largura disponível.
- Código local testado para menu mobile, filtro dos projetos, três modais, imagens sem distorção, fechamento por Escape, FAQ, geração do link do WhatsApp e bloqueio de mensagem muito curta. Nenhuma mensagem foi enviada.
- Slideshow testado avançando e respeitando o controle de movimentos. Confirmado que o HTML inicial só tem uma foto do Hero e não descarrega as quatro simultaneamente.
- Nenhum erro de execução nesses testes do código local.

### Limites dos testes

O navegador de testes deste ambiente não teve acesso aos CDNs externos. Por isso, os testes visuais/funcionais locais usaram os recursos fornecidos, e a execução real de GSAP, ScrollTrigger, Swiper e Lucide não foi revalidada aqui. As integrações e os endereços dessas bibliotecas foram mantidos; confira animações, ícones e carrossel com internet no seu navegador.

Não foi gerada uma nova nota do PageSpeed nem uma medição pública de LCP. A comparação acima é de bytes e de funcionamento/layout, não de pontuação. Repita os testes mobile e desktop após publicar.

## Referências técnicas consultadas

- Google / web.dev: Optimize Largest Contentful Paint.
- MDN: min-width; dimensões mínimas automáticas de itens de Grid.
- Swiper: API oficial.

## Observação editorial

Os depoimentos e notas em estrelas existentes foram preservados, não verificados. Antes de divulgação como avaliações reais, mantenha apenas relatos e notas confirmados pelos clientes; o relato provisório de automação precisa ser substituído por informação verdadeira.
