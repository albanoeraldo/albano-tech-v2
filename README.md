# Albano Tech - landing page V1

Primeira proposta completa para apresentar **soluções digitais** e
**assistência técnica** na mesma marca, com contato direto pelo WhatsApp.

## Abrir e testar

Extraia o ZIP inteiro em uma pasta nova e abra `index.html` no navegador.
A pasta `assets` precisa continuar ao lado do arquivo. Não é preciso
instalar Node, executar `npm install`, iniciar Docker ou configurar um banco.
O HTML utiliza arquivos locais e scripts clássicos, sem módulos ou `fetch`.

A versão em HTML único entregue separadamente incorpora os mesmos estilos,
scripts e imagens. Ela é uma fotografia do código no momento da entrega:
as alterações feitas aqui não atualizam aquela cópia automaticamente.

## Estrutura

```text
albano-tech-v1/
  index.html
  COMECE-POR-AQUI.txt
  README.md
  LICENSE
  .gitignore
  .nojekyll
  assets/
    css/style.css
    js/config.js
    js/app.js
    img/
      mark.svg
      favicon.svg
      workstation.svg
      digital.svg
      hardware.svg
      site-preview.svg
      dashboard.svg
      automation.svg
      social-preview.png
  docs/
    GUIA-DE-EDICAO.md
    CHECKLIST-ANTES-DE-PUBLICAR.md
    VALIDACAO.md
    ORIGEM-DOS-RECURSOS.md
```

## O que foi implementado

- Apresentação principal com ilustração animada, chamadas e acesso ao WhatsApp.
- Duas frentes de serviço, cada uma com três opções de contato.
- Projetos filtráveis por categoria e detalhes em janela modal.
- Timeline com progresso acompanhando a rolagem.
- Sobre, perguntas frequentes, contato, rodapé e informações de privacidade.
- Menu para telas menores, cabeçalho fixo ao rolar e barra de progresso da página.
- Elementos que aparecem ao entrar na tela e efeitos de interação nos cards.
- Controle para reduzir movimentos e respeito à preferência do sistema.
- Funcionamento essencial sem JavaScript: conteúdo, FAQ, detalhes textuais e links de contato.

## WhatsApp: como funciona de verdade

O número público configurado é `5547984212803`, o mesmo encontrado no
código da landing page atual. Cada serviço tem uma mensagem específica.

O formulário final **não calcula preços, não cadastra leads e não envia
mensagens automaticamente**. Ele monta um endereço `wa.me` com o texto
codificado. O navegador abre o WhatsApp, e o visitante revisa e confirma o envio.
Há um link alternativo caso a abertura da nova aba seja bloqueada.

O texto é incluído no endereço aberto no serviço externo. Por isso, o
formulário pede para não informar senhas, documentos ou dados sensíveis.
Não há persistência dos campos em cookies ou armazenamento local desta página.

## Escolhas técnicas

**HTML** organiza o conteúdo. **CSS** define aparência e transições.
**JavaScript** controla interações e mensagens. As imagens são SVGs locais.

A V1 não usa React, GSAP, fontes remotas ou bibliotecas de ícones. As
animações foram feitas com CSS e `IntersectionObserver`, evitando adicionar
uma instalação ou etapa de compilação antes de validar o visual.

A barra de progresso e a timeline usam `requestAnimationFrame` para agrupar
atualizações de rolagem. Os links externos usam `noopener noreferrer`.
O texto digitado é codificado para a URL e não é inserido como HTML.

## O que ainda depende de sua aprovação

A estrutura funciona, mas **a apresentação comercial é uma proposta**.
Confirme os serviços, a abrangência do atendimento, as condições e a
identidade visual antes de publicar.

Não foram inventados depoimentos, clientes, certificações ou resultados.
O card Albano Tech é um projeto próprio. O painel de gestão e o fluxo de
automação são **demonstrações visuais**, identificadas nos cards e detalhes.
Não há sistemas ou integrações reais funcionando por trás desses dois exemplos.

As ilustrações podem ser substituídas por fotografias suas e capturas reais,
sempre com autorização e sem dados confidenciais.

## Publicação

O pacote é estático e mantém caminhos relativos para usar uma subpasta
como a do repositório atual. O arquivo `.nojekyll` está incluído.
Os metadados de endereço e compartilhamento apontam para o endereço atual
da Albano Tech e devem ser revisados caso o domínio mude.

**Nada foi publicado nem alterado no repositório.** Não substitua a versão
atual sem comparar e validar esta proposta. Antes de qualquer publicação,
preserve a versão funcional e defina como retornar a ela.

Consulte `docs/CHECKLIST-ANTES-DE-PUBLICAR.md` antes dessa etapa.
