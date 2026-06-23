# Mobilização Cidadã — Site de Envio de E-mail

Site estático para facilitar o envio de e-mails de mobilização cidadã.  
Funciona abrindo apenas o arquivo `index.html` — sem servidor, sem banco de dados, sem dependências externas.

---

## Índice

1. [Como executar](#como-executar)
2. [Estrutura do projeto](#estrutura-do-projeto)
3. [Como editar o conteúdo](#como-editar-o-conteúdo)
4. [Como alterar os destinatários em CCO](#como-alterar-os-destinatários-em-cco)
5. [Como alterar o texto-base do e-mail](#como-alterar-o-texto-base-do-e-mail)
6. [Como alterar os assuntos](#como-alterar-os-assuntos)
7. [Como alterar as saudações](#como-alterar-as-saudações)
8. [Como alterar os encerramentos](#como-alterar-os-encerramentos)
9. [Como publicar no GitHub Pages](#como-publicar-no-github-pages)
10. [Como publicar no Cloudflare Pages](#como-publicar-no-cloudflare-pages)
11. [Como publicar no Netlify](#como-publicar-no-netlify)
12. [Como publicar no Vercel](#como-publicar-no-vercel)
13. [Compatibilidade](#compatibilidade)
14. [Privacidade e segurança](#privacidade-e-segurança)

---

## Como executar

### Localmente (sem servidor)

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` diretamente no navegador.

Não é necessário instalar nada. O site funciona offline.

### Com um servidor local (recomendado para desenvolvimento)

Se você tiver Python instalado:

```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

Depois acesse: `http://localhost:8080`

---

## Estrutura do projeto

```
email-sender/
├── index.html   ← Estrutura da página e formulário
├── styles.css   ← Estilos visuais e responsividade
├── script.js    ← Lógica da aplicação e configuração
└── README.md    ← Esta documentação
```

---

## Como editar o conteúdo

### Onde cada coisa fica

| O que editar            | Onde editar              | Localização exata                         |
|-------------------------|--------------------------|-------------------------------------------|
| Destinatários (Para:)   | `script.js`              | `CONFIG.TO`                               |
| Destinatários (CCO:)    | `script.js`              | `CONFIG.BCC`                              |
| Texto-base do e-mail    | `script.js`              | `CONFIG.EMAIL_BODY_TEMPLATE`              |
| Assuntos disponíveis    | `index.html`             | `<select id="selectSubject">`             |
| Saudações disponíveis   | `index.html`             | `<select id="selectGreeting">`            |
| Encerramentos           | `index.html`             | `<select id="selectClosing">`             |
| Contexto da campanha    | `index.html`             | Seção `<!-- ETAPA 1 -->`                  |
| Nome da campanha        | `index.html`             | `<h1 class="site-title">`                 |
| Rodapé                  | `index.html`             | `<footer class="site-footer">`            |

---

## Como alterar os destinatários em CCO

Abra `script.js` e localize a seção **`CONFIG.BCC`**:

```js
BCC: [
  'cco1@exemplo.org.br',    // ✏️ Substitua
  'cco2@exemplo.org.br',    // ✏️ Substitua
],
```

- Substitua cada linha por um endereço real.
- Para adicionar mais endereços, acrescente novas linhas no mesmo formato.
- Para remover o CCO, deixe o array vazio: `BCC: []`

---

## Como alterar o texto-base do e-mail

Abra `script.js` e localize a seção **`CONFIG.EMAIL_BODY_TEMPLATE`**:

```js
EMAIL_BODY_TEMPLATE: `{SAUDACAO},

[SEU TEXTO AQUI]

{ENCERRAMENTO},
{NOME}`,
```

- `{SAUDACAO}` — será substituído pela saudação escolhida pelo usuário (ex.: "Prezado(a) Senhor(a)").
- `{NOME}` — será substituído pelo nome informado pelo usuário.
- `{ENCERRAMENTO}` — será substituído pelo encerramento escolhido (ex.: "Atenciosamente").
- Todo o restante é texto fixo — substitua pelos parágrafos reais da campanha.
- Use quebras de linha normais (Enter) para separar os parágrafos.

---

## Como alterar os assuntos

Abra `index.html` e localize o `<select id="selectSubject">` dentro da **Etapa 2**:

```html
<select ... id="selectSubject">
  <option value="" disabled selected>Selecione um assunto…</option>
  <option value="[ASSUNTO 1 — substitua este texto pelo assunto real]">[Assunto 1 — substitua este texto]</option>
  <option value="[ASSUNTO 2 — substitua este texto pelo assunto real]">[Assunto 2 — substitua este texto]</option>
</select>
```

- O atributo `value` de cada `<option>` é o assunto que será preenchido no aplicativo de e-mail.
- O texto entre `<option>` e `</option>` é o que aparece para o usuário no menu.
- Para adicionar um assunto, copie uma linha `<option>` e cole abaixo da última.
- Para remover um assunto, apague a linha `<option>` correspondente.

---

## Como alterar as saudações

Abra `index.html` e localize o `<select id="selectGreeting">` dentro da **Etapa 2**:

```html
<select ... id="selectGreeting">
  <option value="Prezado(a) Senhor(a)">Prezado(a) Senhor(a)</option>
  <option value="Ilustríssimo(a) Senhor(a)">Ilustríssimo(a) Senhor(a)</option>
</select>
```

- O atributo `value` é o texto que aparece no início do e-mail.
- Adicione ou remova linhas `<option>` conforme necessário.

---

## Como alterar os encerramentos

Abra `index.html` e localize o `<select id="selectClosing">` dentro da **Etapa 2**:

```html
<select ... id="selectClosing">
  <option value="Atenciosamente">Atenciosamente</option>
  <option value="Respeitosamente">Respeitosamente</option>
</select>
```

- O atributo `value` é o texto de encerramento que aparece antes da assinatura no e-mail.
- Adicione ou remova linhas `<option>` conforme necessário.

---

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (pode ser público ou privado com plano pago).
2. Envie os arquivos para o repositório:

```bash
git init
git add .
git commit -m "Publicação inicial"
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
5. Clique em **Save**.
6. O site estará disponível em: `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

---

## Como publicar no Cloudflare Pages

1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com) e faça login.
2. Clique em **Create a project → Connect to Git**.
3. Selecione o repositório do GitHub ou GitLab.
4. Na configuração do build:
   - **Framework preset:** None
   - **Build command:** *(deixe em branco)*
   - **Build output directory:** `/` ou `.`
5. Clique em **Save and Deploy**.
6. O site estará disponível em: `https://SEU_PROJETO.pages.dev`

**Alternativa sem Git:** arraste a pasta do projeto para o painel do Cloudflare Pages (opção *Direct Upload*).

---

## Como publicar no Netlify

### Via interface web (mais simples)

1. Acesse [netlify.com](https://netlify.com) e faça login.
2. Na aba **Sites**, arraste a pasta do projeto para a área de *drag and drop*.
3. O site será publicado imediatamente em um endereço `.netlify.app`.

### Via Git

1. Faça o push do projeto para GitHub, GitLab ou Bitbucket.
2. No Netlify, clique em **Add new site → Import an existing project**.
3. Selecione o repositório.
4. Na configuração do build:
   - **Build command:** *(deixe em branco)*
   - **Publish directory:** `.`
5. Clique em **Deploy site**.

---

## Como publicar no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login.
2. Clique em **Add New → Project**.
3. Importe o repositório do GitHub, GitLab ou Bitbucket.
4. Na configuração:
   - **Framework Preset:** Other
   - **Root Directory:** `.`
   - **Build command:** *(deixe em branco)*
   - **Output directory:** `.`
5. Clique em **Deploy**.
6. O site estará disponível em: `https://SEU_PROJETO.vercel.app`

**Alternativa com CLI:**

```bash
npm i -g vercel
vercel
```

---

## Compatibilidade

O site foi desenvolvido para funcionar corretamente nos seguintes clientes de e-mail via protocolo `mailto:`:

| Cliente          | Suporte ao mailto: |
|------------------|--------------------|
| Gmail (web)      | ✓ Parcial (limite ~2.000 caracteres na URL) |
| Outlook          | ✓ Parcial (limite ~2.083 caracteres na URL) |
| Apple Mail       | ✓ Completo |
| Thunderbird      | ✓ Completo |
| Samsung Email    | ✓ Completo |
| Android (padrão) | ✓ Parcial (varia por fabricante) |
| iOS Mail         | ✓ Completo |

Se o e-mail gerado for muito longo, o site detecta automaticamente e exibe o botão **"Copiar e-mail"** como alternativa.

---

## Privacidade e segurança

- **Nenhum dado é enviado a este site.** Tudo acontece localmente no navegador do usuário.
- **Nenhum cookie** é criado.
- **Nenhuma API externa** é chamada.
- O e-mail é aberto diretamente no aplicativo de e-mail do usuário, que é o único responsável pelo envio.
- Os endereços de CCO ficam visíveis no código-fonte do site. Se isso for um problema, considere uma solução com backend.

---

*Projeto de mobilização cidadã — desenvolvido para facilitar a participação da sociedade civil.*
