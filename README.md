# Gustavo Costa

Meu portfólio pessoal: projetos, experiência, formação e contato.

**Acesse:** https://soueugustavocosta.github.io/GustavoCosta/

## Tecnologias

React 19 e Vite, com CSS puro (sem framework de estilo).

## Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:5173
npm run build    # gera a versão final em dist/
npm run preview  # testa a versão final
```

## Estrutura

```
src/
  data/content.js   # todo o conteúdo: projetos, experiências, cursos, tecnologias
  data/icons.js     # ícones SVG das tecnologias (devicon)
  sections/         # uma seção da página por arquivo
  components/       # cabeçalho, abertura, títulos, ícones
  hooks/            # navegação por seção e animações
public/assets/      # fotos, vídeos dos projetos e currículo em PDF
```

Para adicionar um projeto ou emprego, edite só `src/data/content.js`.
Um projeto aceita `live` (site no ar) e `repo` (código no GitHub).

## Publicação

Cada push na `main` publica o site pelo GitHub Actions
(`.github/workflows/deploy.yml`). Na primeira vez, em
**Settings → Pages → Build and deployment**, escolha **Source: GitHub Actions**.

## Contato

- E-mail: costagustavogt@gmail.com
- LinkedIn: [dev-gustavo-costa-gomes](https://www.linkedin.com/in/dev-gustavo-costa-gomes)
