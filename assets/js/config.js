/**
 * ALBANO TECH - SETTINGS
 * Change your public number and messages here, not in app.js.
 * Also update static wa.me anchors in index.html for the no-JavaScript fallback.
 * This is public frontend configuration. Never place secrets or API keys here.
 * WhatsApp: country code + area code + number, digits only.
 * No backend, bots or automatic message sending are involved.
 */
window.ALBANO_CONFIG = Object.freeze({
  whatsappNumber: '5547984212803',
  phoneLabel: '(47) 98421-2803',
  location: 'Rio do Campo, SC',
  messages: {
    general: 'Ol\u00e1, Eraldo! Vim pelo site da Albano Tech e gostaria de conversar sobre um servi\u00e7o.',
    sites: 'Ol\u00e1, Eraldo! Vim pelo site da Albano Tech e gostaria de um or\u00e7amento para um site ou landing page.',
    systems: 'Ol\u00e1, Eraldo! Vim pelo site da Albano Tech e gostaria de conversar sobre um sistema personalizado.',
    automation: 'Ol\u00e1, Eraldo! Vim pelo site da Albano Tech. Tenho uma tarefa ou processo que gostaria de automatizar.',
    formatting: 'Ol\u00e1, Eraldo! Vim pelo site da Albano Tech e preciso de formata\u00e7\u00e3o ou configura\u00e7\u00e3o do meu computador. Podemos conversar?',
    cleaning: 'Ol\u00e1, Eraldo! Vim pelo site da Albano Tech e gostaria de um or\u00e7amento para limpeza e manuten\u00e7\u00e3o do meu computador.',
    upgrades: 'Ol\u00e1, Eraldo! Vim pelo site da Albano Tech e preciso de ajuda com um upgrade ou problema no meu computador.'
  },
  projects: {
    albano: {
      title: 'Albano Tech',
      tag: 'PROJETO PR\u00d3PRIO / LANDING PAGE',
      image: 'assets/img/site-preview.svg',
      imageAlt: 'Representa\u00e7\u00e3o visual da landing page da Albano Tech, n\u00e3o uma captura de tela.',
      description: 'Uma p\u00e1gina para apresentar os servi\u00e7os da marca e facilitar o primeiro contato.',
      service: 'sites',
      url: 'https://albanoeraldo.github.io/albano-tech/',
      sections: [
        ['O problema', 'Apresentar os servi\u00e7os de assist\u00eancia t\u00e9cnica em um \u00fanico lugar e direcionar interessados para uma conversa.'],
        ['A solu\u00e7\u00e3o', 'Landing page com servi\u00e7os, explica\u00e7\u00e3o do atendimento, perguntas frequentes e links diretos para o WhatsApp.'],
        ['O que foi usado', 'HTML, CSS e JavaScript, com publica\u00e7\u00e3o est\u00e1tica no GitHub Pages.'],
        ['Sobre o visual', 'A imagem desta apresenta\u00e7\u00e3o \u00e9 uma representa\u00e7\u00e3o ilustrada. O link abaixo abre a vers\u00e3o que estiver publicada. N\u00e3o foram inclu\u00eddas m\u00e9tricas de resultado sem comprova\u00e7\u00e3o.']
      ]
    },
    dashboard: {
      title: 'Tudo no mesmo lugar',
      tag: 'CONCEITO DEMONSTRATIVO / N\u00c3O \u00c9 UMA ENTREGA A CLIENTE',
      image: 'assets/img/dashboard.svg',
      imageAlt: 'Interface demonstrativa de painel, com dados fict\u00edcios.',
      description: 'Um exemplo visual de como um sistema pode ajudar a centralizar o acompanhamento de solicita\u00e7\u00f5es.',
      service: 'systems',
      url: null,
      sections: [
        ['Cen\u00e1rio ilustrativo', 'Informa\u00e7\u00f5es espalhadas em diferentes controles podem dificultar a consulta e o acompanhamento do trabalho.'],
        ['Possibilidade de solu\u00e7\u00e3o', 'Uma interface central com solicita\u00e7\u00f5es, etapas e uma vis\u00e3o geral. As funcionalidades reais dependeriam do processo do cliente.'],
        ['Importante', 'Este \u00e9 apenas um conceito visual. Os n\u00fameros s\u00e3o fict\u00edcios, n\u00e3o existe um backend conectado e n\u00e3o se trata de um trabalho entregue a um cliente.'],
        ['Pr\u00f3ximo passo', 'Entender a necessidade antes de definir telas, permiss\u00f5es, dados, tecnologias e investimento.']
      ]
    },
    automation: {
      title: 'Sua rotina, conectada',
      tag: 'CONCEITO DEMONSTRATIVO / FLUXO ILUSTRATIVO',
      image: 'assets/img/automation.svg',
      imageAlt: 'Fluxo ilustrativo de recebimento, organiza\u00e7\u00e3o e registro de informa\u00e7\u00f5es.',
      description: 'Um exemplo de caminho para reduzir a repeti\u00e7\u00e3o de tarefas entre ferramentas.',
      service: 'automation',
      url: null,
      sections: [
        ['Cen\u00e1rio ilustrativo', 'Copiar manualmente dados de uma entrada para outra ferramenta, repetindo as mesmas etapas a cada solicita\u00e7\u00e3o.'],
        ['Possibilidade de solu\u00e7\u00e3o', 'Receber os dados, conferir as informa\u00e7\u00f5es necess\u00e1rias e registr\u00e1-los no destino adequado.'],
        ['Cuidados necess\u00e1rios', 'Verificar permiss\u00f5es, integra\u00e7\u00f5es dispon\u00edveis, privacidade, tratamento de falhas e valida\u00e7\u00e3o do resultado.'],
        ['Importante', 'O desenho \u00e9 demonstrativo. N\u00e3o h\u00e1 uma automa\u00e7\u00e3o sendo executada por esta p\u00e1gina, nem ganhos ou entregas a clientes sendo alegados.']
      ]
    }
  }
});
