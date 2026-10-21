/*
 * PORTFÓLIO — fonte única dos projetos exibidos no site.
 *
 * Para incluir um projeto novo, copie um bloco e ajuste:
 *   tipo:     "site" | "sistema" | "app"
 *   img:      captura de tela em assets/img/work/ (1200px de largura, .webp)
 *   mobile:   captura do celular (opcional, 600px de largura)
 *   mock:     sem captura? use { cor: "#hex", sigla: "AB" } e o site desenha a capa
 *   link:     endereço ao vivo (opcional)
 *   destaque: true coloca o projeto entre os primeiros
 */
window.PROJETOS = [
  {
    id: "mare-site",
    tipo: "site",
    destaque: true,
    titulo: "Maré Transportes",
    segmento: "Logística da saúde",
    resumo: "Site institucional de uma transportadora especializada em medicamentos, com rastreio de cargas em tempo real.",
    desafio: "A transportadora precisava transmitir confiança para clientes da indústria farmacêutica e parar de responder no telefone onde está cada carga.",
    entrega: [
      "Rastreio de nota fiscal integrado à API da Brudam, direto no site",
      "Área de treinamento em vídeo protegida por senha, com trava de tentativas",
      "Logos de clientes gerenciadas por um único arquivo, sem mexer no HTML",
      "Tema claro e escuro, botão de WhatsApp e formulário de cotação"
    ],
    stack: ["HTML/CSS/JS", "PHP", "API REST", "JWT"],
    img: "assets/img/work/mare.webp",
    mobile: "assets/img/work/mare_m.webp"
  },
  {
    id: "belas-artes",
    tipo: "site",
    destaque: true,
    titulo: "Padaria Belas Artes",
    segmento: "Padaria e restaurante · 14 unidades",
    resumo: "Site de uma rede de padarias de São Paulo, com encomendas, reservas, cartão-presente e delivery.",
    desafio: "Uma rede com 14 unidades precisava concentrar encomendas, reservas e cardápios num só lugar — sem o cliente ter que ligar para cada loja.",
    entrega: [
      "Calculadora de encomendas para kit festa, coffee break e pão de metro",
      "Reservas e cartão-presente direto do topo do site",
      "Página de unidades, cardápios, delivery e blog",
      "WhatsApp, Google Analytics e Meta Pixel para medir cada contato"
    ],
    stack: ["WordPress", "Elementor", "Analytics", "Meta Pixel"],
    img: "assets/img/work/padaria.webp",
    mobile: "assets/img/work/padaria_m.webp",
    link: "https://padariabelasartes.com.br/"
  },
  {
    id: "bruttus",
    tipo: "site",
    destaque: true,
    titulo: "Bruttus Burger",
    segmento: "Hamburgueria · Osasco",
    resumo: "Site com a identidade irreverente da hamburgueria, focado em pedido rápido pelo delivery próprio.",
    desafio: "A hamburgueria dependia do iFood e queria levar o cliente para o delivery próprio, sem perder a personalidade da marca.",
    entrega: [
      "Botões de pedido e WhatsApp da loja logo no primeiro clique",
      "Lançamentos do cardápio em destaque (“new drop”)",
      "Grupo VIP para transformar cliente em cliente fixo",
      "Pixels do Meta e do TikTok e Google Analytics prontos para anúncios"
    ],
    stack: ["React", "Design autoral", "Meta Pixel", "TikTok Pixel"],
    img: "assets/img/work/bruttus.webp",
    mobile: "assets/img/work/bruttus_m.webp",
    link: "https://bruttus.com.br/"
  },
  {
    id: "sgq",
    tipo: "sistema",
    destaque: true,
    titulo: "SGQ Maré — Gestão da Qualidade",
    segmento: "Qualidade ISO 9001",
    resumo: "Plataforma completa de gestão da qualidade com 13 módulos, usada no dia a dia da operação.",
    desafio: "Não conformidades, auditorias e indicadores viviam espalhados em planilhas, sem prazo, responsável ou histórico confiável.",
    entrega: [
      "Não conformidades com tratativa, plano de ação e encerramento",
      "Auditorias com checklist pontuado e evidência fotográfica",
      "Indicadores com meta e semáforo, Pareto de causas e matriz de risco",
      "Documentos com versão e assinatura eletrônica, treinamentos com certificado"
    ],
    stack: ["React 19", "TypeScript", "Vite", "Zustand", "Tailwind", "IndexedDB"],
    img: "assets/img/work/sgq.webp"
  },
  {
    id: "apto",
    tipo: "site",
    destaque: true,
    titulo: "Novo Mundo Carrão II",
    segmento: "Lançamento imobiliário",
    resumo: "Reformulação da landing page de um lançamento imobiliário, com simulador Minha Casa Minha Vida.",
    desafio: "O site antigo em WordPress era pesado e tinha um bug grave: o campo de WhatsApp aceitava só e-mail e rejeitava os telefones dos interessados.",
    entrega: [
      "Imagens de 24 MB para 2,5 MB — página 90% mais leve",
      "Campo de WhatsApp corrigido, com máscara e validação: nenhum lead perdido",
      "Simulador de financiamento MCMV interativo",
      "Dados estruturados para o Google e acessibilidade completa"
    ],
    stack: ["HTML/CSS/JS", "WebP", "JSON-LD", "Sem dependências"],
    img: "assets/img/work/apto.webp",
    link: "https://thooncoder.github.io/apartamento-facil-2.0/"
  },
  {
    id: "vetiva",
    tipo: "sistema",
    destaque: true,
    titulo: "VETIVA — Gestão Veterinária",
    segmento: "Clínicas e hospitais veterinários",
    resumo: "Controle de medicamentos, lotes, validades, controlados e temperatura de refrigerados.",
    desafio: "Clínicas perdem dinheiro com medicamento vencido e correm risco sanitário sem controle de lote, temperatura e livro de controlados.",
    entrega: [
      "FEFO automático: o lote que vence primeiro sai primeiro",
      "Livro eletrônico de controlados e alerta de temperatura fora da faixa",
      "Inventário com apuração de divergências e ajuste automático",
      "17 relatórios com exportação para Excel e PDF, e trilha de auditoria"
    ],
    stack: ["JavaScript", "IndexedDB", "SPA", "Funciona offline"],
    img: "assets/img/work/vetiva.webp",
    link: "https://thooncoder.github.io/vetiva/"
  },
  {
    id: "frota",
    tipo: "sistema",
    destaque: true,
    titulo: "Thoon Frota",
    segmento: "Gestão de frotas",
    resumo: "Custo, abastecimento, manutenção, folha e resultado de cada frota, com um ambiente separado por cliente.",
    desafio: "Quem administra a frota de vários donos precisa mostrar o resultado de cada um sem misturar dados — e sem pagar mensalidade de software.",
    entrega: [
      "Um ambiente completo e isolado por cliente",
      "Painel do dono comparando faturamento, custo por km e margem",
      "Acesso só para consulta para o cliente acompanhar a própria frota",
      "Roda na rede local, sem internet e sem mensalidade"
    ],
    stack: ["PHP", "JSON", "JavaScript", "Gráficos"],
    mock: { cor: "#0A6B5C", sigla: "FR", rotulo: "Custo por km" }
  },
  {
    id: "notas",
    tipo: "sistema",
    titulo: "Maré Notas — Controle de CT-e",
    segmento: "Operação logística",
    resumo: "Pipeline das notas em circulação: no hub, em rota e entregue, por portador.",
    desafio: "A equipe não sabia, em tempo real, quais notas estavam paradas no hub e quais já tinham saído para entrega.",
    entrega: [
      "Pipeline visual de notas por status",
      "Saídas recentes e ranking de portadores",
      "Lançamento rápido e relatórios por período"
    ],
    stack: ["HTML", "Tailwind", "JavaScript", "localStorage"],
    img: "assets/img/work/rotas.webp"
  },
  {
    id: "esporadico",
    tipo: "sistema",
    titulo: "Maré Esporádico",
    segmento: "Financeiro de transporte",
    resumo: "Autorizações e pagamentos de motoristas esporádicos, com vencimentos e gasto por cliente.",
    desafio: "Pagamentos a portadores eventuais eram controlados à mão, com atrasos e sem visão de custo por cliente.",
    entrega: [
      "Autorizações com data de saída, rota e pagamento",
      "Painel de pendentes, vencidos e pagos no mês",
      "Gasto por cliente e próximos vencimentos"
    ],
    stack: ["HTML", "Tailwind", "Chart.js", "localStorage"],
    img: "assets/img/work/esporadico.webp"
  },
  {
    id: "fechamento",
    tipo: "sistema",
    titulo: "Fechamento automático de faturas",
    segmento: "Automação financeira",
    resumo: "Transforma o relatório bruto de emissões em fatura de fechamento formatada, por cliente, em segundos.",
    desafio: "Todo fim de quinzena alguém passava horas copiando, formatando e somando planilhas de frete para cada cliente.",
    entrega: [
      "Layout padrão por cliente, com totais e fórmulas prontas",
      "Cruza o relatório de emissões com a base de serviços",
      "Horas de trabalho manual viram um clique"
    ],
    stack: ["Excel", "Automação", "IA"],
    mock: { cor: "#1D6F42", sigla: "R$", rotulo: "Fatura gerada" }
  },
  {
    id: "rdv",
    tipo: "sistema",
    titulo: "Sistema RDV",
    segmento: "Despesas de viagem",
    resumo: "Lançamento e emissão do Relatório de Despesa de Viagem, substituindo a planilha manual.",
    desafio: "O relatório de despesas era preenchido em planilha, com erro de soma e sem histórico por funcionário.",
    entrega: [
      "Despesas por funcionário com pendências em destaque",
      "Exportação para Excel no modelo oficial",
      "Backup e restauração dos dados"
    ],
    stack: ["React", "Dexie", "SheetJS"],
    mock: { cor: "#334155", sigla: "RDV", rotulo: "Pendente por funcionário" }
  },
  {
    id: "mjr-erp",
    tipo: "sistema",
    titulo: "MJR Imports — ERP",
    segmento: "Oficina automotiva",
    resumo: "Ordens de serviço em quadro arrastável, relatórios em PDF, Excel e notificações.",
    desafio: "A oficina controlava os carros no pátio de cabeça e no papel, sem saber o que estava parado e por quê.",
    entrega: [
      "Quadro de ordens de serviço com arrastar e soltar",
      "Relatórios em PDF e exportação para Excel",
      "Notificações e gráficos operacionais"
    ],
    stack: ["React", "Firebase", "Firestore", "jsPDF"],
    mock: { cor: "#B4231F", sigla: "OS", rotulo: "Ordens no pátio" }
  },
  {
    id: "mjr-site",
    tipo: "site",
    titulo: "MJR Imports — Site",
    segmento: "Oficina automotiva",
    resumo: "Presença digital da oficina, com apresentação dos serviços e captação de contatos.",
    desafio: "A oficina dependia só de indicação e não aparecia para quem procurava no Google.",
    entrega: [
      "Páginas de serviços e diferenciais",
      "Contato direto e localização",
      "Carregamento rápido no celular"
    ],
    stack: ["Next.js", "TypeScript", "CSS"],
    mock: { cor: "#1F2937", sigla: "MJR", rotulo: "Agende sua revisão" }
  },
  {
    id: "cat-shop",
    tipo: "site",
    titulo: "Cat Shop",
    segmento: "Pet shop",
    resumo: "Site de pet shop em Osasco com pedido de ração e agendamento de banho e tosa pelo WhatsApp.",
    desafio: "Os pedidos chegavam soltos no WhatsApp, sem catálogo e sem informação de horário e serviços.",
    entrega: [
      "Catálogo com pedido de ração direto no WhatsApp",
      "Agendamento de banho e tosa",
      "Design pensado para o celular"
    ],
    stack: ["Next.js", "TypeScript", "CSS"],
    mock: { cor: "#D9622B", sigla: "PET", rotulo: "Pedir pelo WhatsApp" }
  },
  {
    id: "usp",
    tipo: "app",
    titulo: "Carteira Digital do Estudante",
    segmento: "Educação",
    resumo: "Comprovante de matrícula por QR code com assinatura digital, feito para o concurso de novo layout da USP.",
    desafio: "Validar o vínculo de um estudante na hora, pelo celular, sem servidor e à prova de falsificação.",
    entrega: [
      "QR code com assinatura digital ECDSA",
      "Painel administrativo para emitir e revogar carteirinhas",
      "Validação instantânea pela câmera do celular"
    ],
    stack: ["JavaScript", "Web Crypto", "QR Code", "IA"],
    img: "assets/img/work/usp.webp",
    link: "https://thooncoder.github.io/usp-carteira-digital/"
  },
  {
    id: "pedagios",
    tipo: "app",
    titulo: "Maré — Pedágios e Despesas",
    segmento: "Motoristas em rota",
    resumo: "App para motoristas registrarem pedágios, estacionamentos e despesas de viagem pelo celular.",
    desafio: "Comprovantes de pedágio se perdiam no caminhão e o reembolso atrasava o fechamento.",
    entrega: [
      "Login por e-mail e lançamento em segundos",
      "Sincronização em nuvem",
      "Visão consolidada para o financeiro"
    ],
    stack: ["Firebase Auth", "Firestore", "Cloud Functions"],
    mock: { cor: "#1F4FD1", sigla: "R$", rotulo: "Pedágio lançado" }
  },
  {
    id: "tfinance",
    tipo: "app",
    destaque: true,
    produto: true,
    titulo: "T-Finance",
    segmento: "Produto Thoon · Finanças",
    resumo: "Gestão financeira pessoal: saldo, contas fixas, metas e dívidas, direto no celular.",
    desafio: "Organizar o dinheiro do mês sem criar conta, sem anúncio e sem entregar dados para ninguém.",
    entrega: [
      "Contas fixas com alerta de vencimento",
      "Metas com cálculo automático de aporte",
      "Área de dívidas protegida por PIN e simulador de juros"
    ],
    stack: ["PWA", "JavaScript", "localStorage", "Mobile-first"],
    mobile: "assets/img/work/tfinance.webp",
    link: "https://thooncoder.github.io/t-finance/"
  },
  {
    id: "ttraining",
    tipo: "app",
    destaque: true,
    produto: true,
    titulo: "T-Training",
    segmento: "Produto Thoon · Fitness",
    resumo: "Musculação, cardio e nutrição: monta o plano, executa o treino e acompanha a evolução.",
    desafio: "Um app de treino que funcione na academia sem sinal e lembre a carga da última sessão.",
    entrega: [
      "Plano por objetivo e frequência em 3 passos",
      "Treino guiado com timer e detecção de recordes",
      "Cálculo de TMB/TDEE, macros e 25 medalhas"
    ],
    stack: ["PWA", "JavaScript", "Chart.js", "Offline-first"],
    mobile: "assets/img/work/ttraining.webp",
    link: "https://thooncoder.github.io/fitness-app-refactor/"
  },
  {
    id: "planner",
    tipo: "app",
    produto: true,
    titulo: "MeuPlanner",
    segmento: "Produto Thoon · Estudos",
    resumo: "Planner de estudos personalizado por curso, com matérias e acompanhamento de progresso.",
    desafio: "Estudantes precisam de um plano que fale a língua do curso deles, não de uma agenda genérica.",
    entrega: [
      "Trilhas por curso (Medicina Veterinária, Direito, Engenharia…)",
      "Organização por matéria",
      "Acompanhamento de progresso"
    ],
    stack: ["HTML/CSS/JS", "Mobile-first"],
    mobile: "assets/img/work/planner.webp"
  },
  {
    id: "tstack",
    tipo: "app",
    produto: true,
    titulo: "T-Stack",
    segmento: "Produto Thoon · Rotina",
    resumo: "Organização do dia em blocos de tempo: arraste do estoque para a agenda.",
    desafio: "Planejar a rotina de forma visual, no celular, sem depender de conta ou nuvem.",
    entrega: [
      "Agenda semanal por blocos",
      "Estoque de atividades para arrastar",
      "Funciona offline"
    ],
    stack: ["HTML/CSS/JS", "Mobile-first"],
    mobile: "assets/img/work/tstack.webp"
  },
  {
    id: "ttenis",
    tipo: "app",
    produto: true,
    titulo: "T-Tênis",
    segmento: "Produto Thoon · Esporte",
    resumo: "Treinamento progressivo para tenistas em formação, com evolução por nível.",
    desafio: "Dar ao aluno de tênis um caminho claro de evolução entre uma aula e outra.",
    entrega: [
      "Perfil por nível e objetivo",
      "Trilha de treinos progressiva",
      "Acompanhamento da evolução"
    ],
    stack: ["HTML/CSS/JS", "Mobile-first"],
    mobile: "assets/img/work/ttenis.webp"
  }
];
