# Onde editar cada coisa

## 1. Textos e seções: `index.html`

Procure os identificadores das seções: `inicio`, `servicos`, `projetos`,
`processo`, `sobre`, `duvidas` e `contato`.

O texto maior da página está no `h1` com o identificador `heroTitle`.
Os textos de serviço ficam nos links com a classe `service-row`.
As perguntas ficam nos elementos `details` dentro de `faq-list`.

A estrutura usa apenas um `h1`, com `h2` para seções e `h3` para os itens.
Evite trocar essa hierarquia só para mudar o tamanho da fonte; o tamanho é CSS.

## 2. Cores e visual: `assets/css/style.css`

As variáveis no início do arquivo controlam o tema:

```css
:root {
  --bg: #10191d;
  --accent: #20c0f8;
  --paper: #f3f5f3;
}
```

`--bg` é o fundo escuro, `--accent` é o azul principal e `--paper` é o fundo
claro. Ao mudar a cor principal, confira o contraste dos textos e botões.

As regras `@media` no fim do arquivo ajustam a página para telas menores.
Os efeitos de entrada usam a classe `is-visible`, adicionada pelo JavaScript.

## 3. Contato: `assets/js/config.js`

O número usa somente dígitos: país + DDD + telefone. A etiqueta formatada
fica em `phoneLabel`. As mensagens individuais ficam em `messages`.
Não coloque senhas, tokens ou credenciais neste arquivo: ele é público.

**Detalhe importante:** os links do `index.html` também têm o número
estático para funcionar sem JavaScript. Caso o telefone mude, atualize o
`config.js` e os endereços `wa.me` do HTML. O rótulo estático também deve
ser atualizado. Isso evita manter um contato antigo no modo de contingência.

## 4. Projetos

O card visível fica em `index.html`; o conteúdo da janela fica em
`config.js`, dentro de `projects`. Edite os dois para mantê-los coerentes.
A chave em `data-project` deve existir em `config.projects`.

Por exemplo, `data-project="dashboard"` abre a entrada `dashboard`.
O campo `data-category` precisa corresponder a um filtro existente.
O link externo pode ser `null` quando não houver projeto público.

Ao substituir uma demonstração por um trabalho real, atualize a imagem,
o título, a descrição, as etiquetas e os detalhes. Só remova a etiqueta
"demonstrativo" quando o conteúdo realmente passar a representar um trabalho seu.

## 5. Imagens

As imagens estão em `assets/img`. SVGs mantêm a nitidez ao mudar de tamanho.
Para fotografias, você pode usar WebP, JPG ou PNG; atualize o `src` no HTML e,
quando aplicável, o caminho correspondente em `config.js`.

Mantenha um texto alternativo que descreva a imagem, sem afirmar que uma
ilustração é um print real ou que uma fotografia de banco representa você.
Remova dados de clientes e telas internas antes de divulgar capturas.

A imagem `social-preview.png` é a prévia de compartilhamento desta versão.
Ela não muda sozinha quando o layout é alterado.

## 6. Interações: `assets/js/app.js`

- `setupNavigation`: menu e destaque das seções.
- `setupMotion` e `setupReveals`: movimento e aparição ao rolar.
- `setupScrollEffects`: progresso, timeline e botão flutuante.
- `setupDialogs` e `setupProjects`: detalhes e filtros.
- `setupFaq`: perguntas expansíveis.
- `setupQuoteForm`: valida campos e monta o link de WhatsApp.

O helper `whatsappUrl` usa `encodeURIComponent` para que acentos, espaços
e quebras de linha sejam transportados corretamente no parâmetro da mensagem.
O envio final é feito pelo visitante dentro do WhatsApp.

## 7. Como validar uma mudança

Altere uma coisa por vez, atualize o navegador e confira a mesma seção em
tela grande e pequena. Em seguida, confira se os links, o menu e o formulário
continuam funcionando. Use a pasta separada do ZIP enquanto avaliamos o visual.
Não misture arquivos das duas versões antes de planejar a substituição.
