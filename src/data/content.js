// Todo o conteúdo do portfólio fica aqui: para atualizar o site, edite só este arquivo.

export const EMAIL = "costagustavogt@gmail.com";
export const CV = "assets/curriculo-gustavo-costa-gomes.pdf";

export const SECTIONS = [
  { id: "inicio", name: "Início" },
  { id: "projetos", name: "Projetos" },
  { id: "experiencia", name: "Experiência" },
  { id: "educacao", name: "Educação" },
  { id: "tecnologias", name: "Tecnologias" },
  { id: "sobre", name: "Sobre" },
  { id: "contato", name: "Contato" },
];

// palavras que o hero "digita" em sequência
export const STACK = ["Python", "Django", "PostgreSQL", "React", "Docker"];

export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/SoueuGustavoCosta", d: "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dev-gustavo-costa-gomes", d: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" },
  { name: "WhatsApp", href: "https://wa.me/5531992963230", d: "M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.16-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.05a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.9.92-2.99-.2-.31a8.2 8.2 0 1 1 6.83 3.72Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47a.9.9 0 0 0-.66.31 2.8 2.8 0 0 0-.87 2.07c0 1.22.89 2.4 1.01 2.57.13.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.47-.28Z" },
];
export const WHATSAPP = SOCIALS[2];

// video: nome do arquivo em public/assets/video (o pôster é assets/img/<video>-poster.jpg)
// live: link do projeto no ar · repo: link do código no GitHub
export const PROJECTS = [
  {
    t: "Sistema de Gestão de Andaimes", co: "NM Engenharia", video: "sistema-andaimes",
    d: "Substitui a planilha de medição e o controle de estoque: boletins de medição por mês e status, histórico de versões, dashboards, perfis de usuário e relatórios em PDF e Excel.",
    tags: ["Python", "Django", "PostgreSQL", "Docker", "Chart.js"],
  },
  {
    t: "Automação e-Fornecedores", co: "NM Engenharia", video: "automacao-efornecedores", note: "Dados do cliente borrados",
    d: "Robô que lê a planilha de medição e lança as folhas de serviço no portal do cliente sozinho, sem digitação manual.",
    tags: ["Python", "Automação web", "Excel"],
  },
  {
    t: "FinFamília", co: "Projeto acadêmico", video: "finfamilia", tall: true,
    d: "Controle financeiro da família: renda, despesas por categoria, comprovantes e saldo do mês.",
    tags: ["JavaScript", "Supabase", "Vercel"], live: "https://finfamilia-inky.vercel.app",
  },
  {
    t: "JogoDev", co: "Em desenvolvimento", img: "jogodev.jpg",
    d: "Jogo para aprender programação: o jogador viaja pelas eras da lógica, dos dados e do Git, ganhando XP e cristais a cada desafio.",
    tags: ["JavaScript", "Supabase", "Vercel"],
  },
];

// datas no formato MM/AAAA; e: null = emprego atual
export const JOBS = [
  {
    now: true, s: "08/2025", e: null, co: "NM Engenharia", role: "Auxiliar Técnico de Planejamento",
    tasks: [
      "Planejamento, programação e controle da montagem de andaimes, acompanhando indicadores e cronogramas.",
      "Boletins de medição, relatórios e controles que apoiam a tomada de decisão.",
      "Desenvolvimento dos sistemas internos de estoque e medição e da automação do e-Fornecedores.",
    ],
  },
  { s: "04/2023", e: "07/2025", co: "Superus Engenharia", role: "Auxiliar Administrativo" },
  { s: "10/2020", e: "03/2022", co: "ACPL Engenharia", role: "Almoxarife" },
];

export const COURSES = ["Automação com n8n", "Excel Avançado", "Pacote Office"];

export const TECH_NAMES = {
  python: "Python", django: "Django", react: "React", javascript: "JavaScript", html5: "HTML5", css3: "CSS3",
  chartjs: "Chart.js", postgresql: "PostgreSQL", supabase: "Supabase", docker: "Docker", git: "Git",
  github: "GitHub", vitejs: "Vite",
};
export const GROUPS = [
  ["Backend", ["python", "django"]],
  ["Frontend", ["react", "javascript", "html5", "css3", "chartjs"]],
  ["Banco de dados", ["postgresql", "supabase"]],
  ["DevOps e ferramentas", ["docker", "git", "github"]],
];
export const BUILT = ["react", "vitejs", "javascript", "html5", "css3", "github"];

export const LANGUAGES = [
  { name: "Português", w: 100, level: "Nativo" },
  { name: "Inglês", w: 30, level: "Básico" },
];
