# Thoon — site comercial

Site de vendas da Thoon: sites, sistemas e aplicativos sob medida.
HTML + CSS + JS puro. **Sem build, sem npm install.** Editar e publicar.

## Abrir no computador

Dê duplo clique em `index.html`.

## O que editar (sem mexer no HTML)

| Arquivo | O quê |
|---|---|
| `assets/js/config.js` | **WhatsApp**, e-mail, Instagram e preços dos planos |
| `assets/js/projetos.js` | Portfólio. Cada projeto é um bloco; copie um para incluir outro |
| `assets/img/work/` | Capturas de tela dos projetos (`.webp`, 1200px desktop / 600px celular) |

- Enquanto `whatsapp` estiver vazio, todos os botões abrem o e-mail.
- Preço `null` mostra "Sob orçamento". Um número mostra "a partir de R$ …".
- Projeto sem captura? Use `mock: { cor, sigla, rotulo }` e o site desenha a capa.

## Estrutura

```
index.html            Página única (seções: serviços, portfólio, processo, planos, orçamento, FAQ)
assets/css/style.css  Design system (tokens, tema claro/escuro, responsivo)
assets/js/main.js     Portfólio com filtro, janela do projeto, orçamento → WhatsApp, tema, menu
assets/img/og.png     Imagem que aparece ao compartilhar o link
```

## Publicação

GitHub Pages, branch `main`, pasta raiz. Todo push para `main` atualiza o site em ~1 minuto.
