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
    title: 'Doce da Lu',

    tag: 'LANDING PAGE · PAINEL ADMINISTRATIVO · AUTOMAÇÃO',

    description:
      'Uma solução criada para levar a Doce da Lu para o digital e, ao mesmo tempo, facilitar a rotina de quem administra o negócio.',

    image: 'assets/img/projects/doce-da-lu.webp',
    imageWidth: 1544,
    imageHeight: 876,

    imageAlt:
      'Landing page desenvolvida para a Doce da Lu',

    service: 'sites',

    url: '',

    sections: [
      [
        'O desafio',
        'A Doce da Lu precisava de uma presença digital para apresentar seus produtos e facilitar o contato com os clientes, mas o projeto também precisava ajudar na organização do negócio.'
      ],

      [
        'A solução',
        'Foi criada uma landing page personalizada para apresentar a marca, os produtos e direcionar os pedidos de forma simples e acessível.'
      ],

      [
        'Além do site',
        'O projeto também recebeu uma área administrativa para centralizar informações importantes da rotina, permitindo acompanhar produtos, vendas e gastos sem depender apenas de controles espalhados.'
      ],

      [
        'Automação na rotina',
        'A proposta foi reduzir tarefas manuais e transformar informações dos pedidos e da operação em dados mais organizados para facilitar o acompanhamento do negócio.'
      ]
    ]
  },


  dashboard: {
    title: 'Prumo',

    tag: 'APP FINANCEIRO · PROJETO EM DESENVOLVIMENTO',

    description:
      'Um aplicativo pensado para transformar a organização financeira em uma rotina mais simples, visual e fácil de acompanhar.',

    image: 'assets/img/projects/prumo.webp',
    imageWidth: 1600,
    imageHeight: 1195,

    imageAlt:
      'Apresentação do aplicativo financeiro Prumo',

    service: 'systems',

    url: '',

    sections: [
      [
        'A proposta',
        'O Prumo nasceu com a ideia de reunir as principais informações financeiras do dia a dia em um único aplicativo, evitando controles espalhados e facilitando a leitura do mês.'
      ],

      [
        'Visão financeira',
        'O usuário consegue acompanhar saldo previsto, entradas, despesas e indicadores que ajudam a entender para onde o dinheiro está indo.'
      ],

      [
        'Organização do dia a dia',
        'O projeto inclui recursos para lançamentos, contas, parcelas e cartões, mantendo compromissos financeiros organizados por período.'
      ],

      [
        'Decisões mais conscientes',
        'Recursos de simulação e acompanhamento ajudam a visualizar o impacto de novas compras e compromissos antes de tomar uma decisão.'
      ]
    ]
  },


  automation: {
    title: 'Menos manual. Mais fluxo.',

    tag: 'AUTOMAÇÃO DE PROCESSOS · EXEMPLO DE SOLUÇÃO',

    description:
      'Uma visão de como tarefas repetitivas podem ser transformadas em fluxos conectados, reduzindo trabalho manual e deixando mais tempo para o que realmente importa.',

    image: 'assets/img/projects/automacao-processos.webp',
    imageWidth: 1600,
    imageHeight: 1195,

    imageAlt:
      'Fluxo ilustrativo de automação de processos',

    service: 'automation',

    url: '',

    sections: [
      [
        'Entender a rotina',
        'Antes de automatizar, o primeiro passo é entender como o processo funciona hoje, quais informações entram, quais decisões são necessárias e onde existe trabalho repetitivo.'
      ],

      [
        'Conectar ferramentas',
        'Formulários, planilhas, APIs, bancos de dados, sistemas, e-mails, WhatsApp e outras ferramentas podem fazer parte de um mesmo fluxo quando as integrações disponíveis permitem.'
      ],

      [
        'Automatizar etapas',
        'Validação de informações, registros, atualizações, organização de dados e notificações são exemplos de etapas que podem deixar de depender de execução manual.'
      ],

      [
        'O objetivo',
        'Automação não é automatizar tudo. É identificar tarefas que consomem tempo sem precisar de decisão humana e deixar o processo mais rápido, organizado e confiável.'
      ]
    ]
  }

}
});
