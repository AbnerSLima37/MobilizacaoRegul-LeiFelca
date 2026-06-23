/**
 * ================================================================
 * MOBILIZAÇÃO CIDADÃ — script.js
 * ================================================================
 * Estrutura:
 *  A. CONFIGURAÇÃO  ← EDITE AQUI
 *  B. ESTADO DA APLICAÇÃO
 *  C. NAVEGAÇÃO ENTRE ETAPAS
 *  D. VALIDAÇÃO DO FORMULÁRIO
 *  E. GERAÇÃO DO E-MAIL
 *  F. PREENCHIMENTO DO PREVIEW
 *  G. PROTOCOLO MAILTO
 *  H. CÓPIA PARA ÁREA DE TRANSFERÊNCIA
 *  I. UTILITÁRIOS
 *  J. INICIALIZAÇÃO
 * ================================================================
 */

/* ================================================================
   A. CONFIGURAÇÃO
   ✏️ EDITE ESTA SEÇÃO para personalizar o conteúdo da campanha.
   Não altere o restante do arquivo — apenas esta seção.
================================================================ */

const CONFIG = {

  /**
   * DESTINATÁRIOS PRINCIPAIS (campo "Para:")
   * ✏️ Substitua pelos e-mails reais dos destinatários.
   * Cada cliente de e-mail exibirá estes endereços no campo "Para:".
   *
   * Formato: array de strings com endereços de e-mail.
   * Exemplo:  ['destinatario1@exemplo.gov.br', 'destinatario2@exemplo.gov.br']
   */
  TO: [
    'destinatario1@exemplo.gov.br',      // ✏️ Substitua
    'destinatario2@exemplo.gov.br',      // ✏️ Substitua
  ],

  /**
   * DESTINATÁRIOS EM CÓPIA OCULTA — BCC/CCO (campo "Bcc:")
   * ✏️ Substitua pela lista real de endereços em cópia oculta.
   * Estes endereços NÃO serão visíveis pelos demais destinatários.
   *
   * Deixe como array vazio [] se não quiser CCO.
   */
  BCC: [
    'cco1@exemplo.org.br',               // ✏️ Substitua
    'cco2@exemplo.org.br',               // ✏️ Substitua
  ],

  /**
   * LIMITE DE TAMANHO DO MAILTO (em caracteres)
   * Clientes de e-mail têm limites diferentes para URLs mailto:.
   * - Gmail (web):     ~2.000 caracteres
   * - Outlook:         ~2.083 caracteres
   * - Apple Mail:      sem limite prático
   * - Thunderbird:     sem limite prático
   * - Android/iOS:     ~2.000 caracteres (varia)
   *
   * Usamos 1.800 como valor conservador para máxima compatibilidade.
   * ✏️ Ajuste se necessário, mas não ultrapasse 2.000.
   */
  MAILTO_CHAR_LIMIT: 1800,

  /**
   * TEXTO BASE DO E-MAIL
   * ✏️ Substitua pelo corpo real da mensagem.
   *
   * Use a marcação {SAUDACAO} onde a saudação deve aparecer.
   * Use a marcação {NOME} onde o nome do remetente deve aparecer.
   * Use a marcação {ENCERRAMENTO} onde o encerramento deve aparecer.
   *
   * O texto resultante ficará assim:
   *
   *   [SAUDACAO],
   *
   *   [corpo do e-mail]
   *
   *   [ENCERRAMENTO],
   *   [NOME]
   */
  EMAIL_BODY_TEMPLATE: `{SAUDACAO},

[INSIRA AQUI O TEXTO PRINCIPAL DO E-MAIL.]

[Parágrafo 2: desenvolva o argumento, cite dados ou impactos concretos.]

[Parágrafo 3: apresente o pedido ou demanda específica.]

[Parágrafo 4 opcional: reforce a urgência ou importância da resposta.]

Aguardo um posicionamento sobre o tema.

{ENCERRAMENTO},
{NOME}`,

};

/* ================================================================
   B. ESTADO DA APLICAÇÃO
   Armazena os dados preenchidos pelo usuário durante a sessão.
================================================================ */

/** @type {{ currentStep: number, formData: Object, mailtoUrl: string, emailText: string }} */
const state = {
  currentStep: 1,
  formData: {
    name:     '',
    email:    '',
    greeting: '',
    subject:  '',
    closing:  '',
  },
  mailtoUrl:  '',
  emailText:  '',
};

/* ================================================================
   C. NAVEGAÇÃO ENTRE ETAPAS
================================================================ */

/**
 * Avança ou retrocede para uma etapa específica.
 * Atualiza a UI: painéis, barra de progresso e indicadores de etapa.
 *
 * @param {number} targetStep - Número da etapa (1–4)
 */
function goToStep(targetStep) {
  const totalSteps = 4;

  // Esconde o painel atual
  hidePanel(state.currentStep);

  // Exibe o painel alvo
  state.currentStep = targetStep;
  showPanel(targetStep);

  // Atualiza a barra de progresso
  updateProgressBar(targetStep, totalSteps);

  // Atualiza os indicadores de etapa (círculos)
  updateStepIndicators(targetStep);

  // Rola suavemente ao topo do conteúdo
  scrollToContent();
}

/**
 * Esconde um painel de etapa.
 * @param {number} step
 */
function hidePanel(step) {
  const panel = getPanelEl(step);
  if (!panel) return;
  panel.setAttribute('hidden', '');
  panel.classList.remove('active', 'animate-in');
}

/**
 * Exibe um painel de etapa com animação.
 * @param {number} step
 */
function showPanel(step) {
  const panel = getPanelEl(step);
  if (!panel) return;
  panel.removeAttribute('hidden');

  // Força reflow para a animação funcionar
  void panel.offsetWidth;
  panel.classList.add('active', 'animate-in');

  // Move o foco para o título do painel (acessibilidade)
  const heading = panel.querySelector('h2');
  if (heading) {
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
}

/**
 * Retorna o elemento de painel para uma etapa.
 * @param {number} step
 * @returns {HTMLElement|null}
 */
function getPanelEl(step) {
  return document.getElementById(`panel-${step}`);
}

/**
 * Atualiza a barra de progresso horizontal.
 * @param {number} currentStep
 * @param {number} totalSteps
 */
function updateProgressBar(currentStep, totalSteps) {
  const fill = document.getElementById('progressFill');
  if (!fill) return;
  const percentage = Math.round((currentStep / totalSteps) * 100);
  fill.style.width = `${percentage}%`;

  // Atualiza atributo ARIA
  const track = fill.closest('.progress-track');
  if (track) track.setAttribute('aria-valuenow', percentage);
}

/**
 * Atualiza o estado visual dos indicadores de etapa (círculos).
 * @param {number} currentStep
 */
function updateStepIndicators(currentStep) {
  const stepEls = document.querySelectorAll('.step');
  stepEls.forEach((el) => {
    const stepNum = parseInt(el.dataset.step, 10);
    el.classList.remove('active', 'done');

    if (stepNum === currentStep) {
      el.classList.add('active');
      el.setAttribute('aria-current', 'step');
    } else if (stepNum < currentStep) {
      el.classList.add('done');
      el.removeAttribute('aria-current');
    } else {
      el.removeAttribute('aria-current');
    }
  });
}

/**
 * Rola a página até o início do conteúdo principal.
 */
function scrollToContent() {
  const main = document.getElementById('main');
  if (!main) return;
  const offset = main.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
}

/* ================================================================
   D. VALIDAÇÃO DO FORMULÁRIO
================================================================ */

/**
 * Valida os campos obrigatórios e, se tudo estiver correto,
 * gera o e-mail e avança para a etapa de revisão.
 */
function validateAndPreview() {
  clearFormErrors();
  const errors = collectValidationErrors();

  if (errors.length > 0) {
    showFormErrors(errors);
    return;
  }

  // Salva os dados no estado
  collectFormData();

  // Gera o e-mail e preenche o preview
  generateAndPreview();

  // Avança para a etapa 3
  goToStep(3);
}

/**
 * Coleta os erros de validação dos campos obrigatórios.
 * @returns {Array<{field: string, message: string}>}
 */
function collectValidationErrors() {
  const errors = [];

  const name    = getField('inputName');
  const email   = getField('inputEmail');
  const subject = getField('selectSubject');

  if (!name || name.trim().length < 2) {
    errors.push({ field: 'inputName', message: 'Informe seu nome completo (mínimo 2 caracteres).' });
  }

  if (!email || !isValidEmail(email.trim())) {
    errors.push({ field: 'inputEmail', message: 'Informe um endereço de e-mail válido.' });
  }

  if (!subject) {
    errors.push({ field: 'selectSubject', message: 'Selecione um assunto para o e-mail.' });
  }

  return errors;
}

/**
 * Verifica se uma string é um e-mail válido.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  // Regex simples e eficaz para validação básica de e-mail
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Exibe os erros de validação na interface.
 * @param {Array<{field: string, message: string}>} errors
 */
function showFormErrors(errors) {
  const box  = document.getElementById('formErrors');
  const list = document.getElementById('errorList');
  if (!box || !list) return;

  list.innerHTML = '';
  errors.forEach(({ field, message }) => {
    // Cria o item de erro
    const li = document.createElement('li');
    li.textContent = message;
    list.appendChild(li);

    // Marca o campo como inválido
    const input = document.getElementById(field);
    if (input) {
      input.classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
    }
  });

  box.removeAttribute('hidden');

  // Foca no primeiro campo inválido
  const firstInvalid = document.querySelector('.form-input.invalid');
  if (firstInvalid) firstInvalid.focus();
}

/**
 * Remove os erros de validação exibidos anteriormente.
 */
function clearFormErrors() {
  const box = document.getElementById('formErrors');
  if (box) box.setAttribute('hidden', '');

  document.querySelectorAll('.form-input.invalid').forEach((el) => {
    el.classList.remove('invalid');
    el.removeAttribute('aria-invalid');
  });
}

/* ================================================================
   E. GERAÇÃO DO E-MAIL
================================================================ */

/**
 * Coleta os valores do formulário e os salva no estado.
 */
function collectFormData() {
  state.formData.name     = getField('inputName').trim();
  state.formData.email    = getField('inputEmail').trim();
  state.formData.greeting = getField('selectGreeting');
  state.formData.subject  = getField('selectSubject');
  state.formData.closing  = getField('selectClosing');
}

/**
 * Gera o texto do e-mail substituindo os placeholders no template.
 * @returns {string} Texto final do e-mail
 */
function buildEmailBody() {
  return CONFIG.EMAIL_BODY_TEMPLATE
    .replace(/\{SAUDACAO\}/g, state.formData.greeting)
    .replace(/\{NOME\}/g,     state.formData.name)
    .replace(/\{ENCERRAMENTO\}/g, state.formData.closing);
}

/**
 * Gera o e-mail, preenche o preview e constrói a URL mailto.
 * Chamado antes de exibir a etapa 3.
 */
function generateAndPreview() {
  const body      = buildEmailBody();
  state.emailText = body;

  // Constrói a URL mailto
  state.mailtoUrl = buildMailtoUrl(
    CONFIG.TO,
    CONFIG.BCC,
    state.formData.subject,
    body
  );

  // Preenche os campos de preview
  fillPreview();

  // Verifica o tamanho e exibe aviso se necessário
  checkMailtoSize(state.mailtoUrl);
}

/* ================================================================
   F. PREENCHIMENTO DO PREVIEW
================================================================ */

/**
 * Preenche os campos de metadados e corpo do e-mail na etapa 3.
 */
function fillPreview() {
  setText('previewTo',      CONFIG.TO.join(', '));
  setText('previewFrom',    state.formData.email);
  setText('previewSubject', state.formData.subject);

  const bccText = CONFIG.BCC.length > 0
    ? `${CONFIG.BCC.length} endereço(s) em cópia oculta`
    : 'Nenhum';
  setText('previewBcc', bccText);

  setText('previewBody', state.emailText);
}

/* ================================================================
   G. PROTOCOLO MAILTO
================================================================ */

/**
 * Constrói uma URL mailto completa.
 *
 * @param {string[]} to      - Destinatários principais
 * @param {string[]} bcc     - Destinatários em cópia oculta
 * @param {string}   subject - Assunto do e-mail
 * @param {string}   body    - Corpo do e-mail
 * @returns {string} URL mailto codificada
 */
function buildMailtoUrl(to, bcc, subject, body) {
  const params = new URLSearchParams();

  // Adiciona CCO somente se houver endereços configurados
  if (bcc.length > 0) {
    params.set('bcc', bcc.join(','));
  }

  params.set('subject', subject);
  params.set('body', body);

  const toStr = to.join(',');
  return `mailto:${toStr}?${params.toString()}`;
}

/**
 * Verifica se o tamanho da URL mailto excede o limite configurado.
 * Exibe avisos se necessário.
 *
 * @param {string} url - A URL mailto gerada
 */
function checkMailtoSize(url) {
  const isTooBig = url.length > CONFIG.MAILTO_CHAR_LIMIT;

  // Aviso na etapa 3 (preview)
  toggleHidden('sizeWarning', !isTooBig);

  // Aviso na etapa 4 (envio)
  toggleHidden('sizeSendWarning', !isTooBig);
}

/**
 * Lida com o clique no botão "Abrir no aplicativo de e-mail".
 * Tenta abrir o mailto e detecta falha quando possível.
 *
 * @param {Event} event
 */
function handleMailtoClick(event) {
  event.preventDefault();

  const url = state.mailtoUrl;
  if (!url) {
    showMailtoWarning();
    return;
  }

  // Tenta abrir o aplicativo de e-mail
  const opened = tryOpenMailto(url);
  if (!opened) {
    showMailtoWarning();
  }
}

/**
 * Tenta abrir a URL mailto de forma compatível com os principais clientes.
 *
 * Estratégia:
 * 1. Cria um <a> oculto e simula clique (funciona na maioria dos navegadores)
 * 2. Usa window.location.href como fallback
 *
 * @param {string} url
 * @returns {boolean} true se tentativa foi feita, false se URL inválida
 */
function tryOpenMailto(url) {
  if (!url || !url.startsWith('mailto:')) return false;

  // Método 1: elemento <a> temporário (melhor compatibilidade)
  const link = document.createElement('a');
  link.href  = url;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Não há API confiável para confirmar que o aplicativo abriu.
  // Considerar tentativa como bem-sucedida.
  return true;
}

/**
 * Exibe o aviso de que o aplicativo de e-mail não foi detectado.
 */
function showMailtoWarning() {
  toggleHidden('mailtoWarning', false);
}

/* ================================================================
   H. CÓPIA PARA ÁREA DE TRANSFERÊNCIA
================================================================ */

/**
 * Copia o conteúdo completo do e-mail para a área de transferência.
 * Exibe feedback visual de confirmação.
 */
async function copyEmailContent() {
  const content = buildCopyContent();

  try {
    await navigator.clipboard.writeText(content);
    showCopyFeedback(true);
  } catch {
    // Fallback para navegadores sem suporte à Clipboard API
    const success = fallbackCopy(content);
    showCopyFeedback(success);
  }
}

/**
 * Monta o texto completo para cópia (metadados + corpo).
 * @returns {string}
 */
function buildCopyContent() {
  const lines = [
    `Para: ${CONFIG.TO.join(', ')}`,
    `Assunto: ${state.formData.subject}`,
    '',
    state.emailText,
  ];
  return lines.join('\n');
}

/**
 * Exibe ou esconde o feedback de cópia por 3 segundos.
 * @param {boolean} success
 */
function showCopyFeedback(success) {
  const el = document.getElementById('copyFeedback');
  if (!el) return;

  el.textContent = success
    ? '✓ Conteúdo copiado para a área de transferência!'
    : '✗ Não foi possível copiar. Por favor, selecione e copie manualmente.';

  el.removeAttribute('hidden');

  setTimeout(() => {
    el.setAttribute('hidden', '');
  }, 3000);
}

/**
 * Fallback de cópia usando execCommand (navegadores antigos).
 * @param {string} text
 * @returns {boolean}
 */
function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity  = '0';
  document.body.appendChild(textarea);
  textarea.select();

  let success = false;
  try {
    success = document.execCommand('copy');
  } catch { /* silencioso */ }

  document.body.removeChild(textarea);
  return success;
}

/* ================================================================
   I. UTILITÁRIOS
================================================================ */

/**
 * Retorna o valor de um campo do formulário pelo ID.
 * @param {string} id
 * @returns {string}
 */
function getField(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

/**
 * Define o textContent de um elemento pelo ID.
 * @param {string} id
 * @param {string} text
 */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/**
 * Adiciona ou remove o atributo "hidden" de um elemento.
 * @param {string} id
 * @param {boolean} hide - true para esconder, false para mostrar
 */
function toggleHidden(id, hide) {
  const el = document.getElementById(id);
  if (!el) return;
  if (hide) {
    el.setAttribute('hidden', '');
  } else {
    el.removeAttribute('hidden');
  }
}

/**
 * Remove a classe "invalid" de um campo quando o usuário começa a digitar.
 * Melhora a experiência de correção de erros.
 */
function attachLiveValidation() {
  const fields = document.querySelectorAll('.form-input');
  fields.forEach((field) => {
    field.addEventListener('input', () => {
      field.classList.remove('invalid');
      field.removeAttribute('aria-invalid');
    });
  });
}

/**
 * Ao chegar na etapa 4, atualiza o href do botão mailto e
 * decide se exibe ou esconde os avisos de tamanho.
 */
function prepareStep4() {
  const btn = document.getElementById('btnMailto');
  if (btn) btn.href = state.mailtoUrl;

  // Exibe aviso de tamanho se necessário
  const isTooBig = state.mailtoUrl.length > CONFIG.MAILTO_CHAR_LIMIT;
  toggleHidden('sizeSendWarning', !isTooBig);
}

/* ================================================================
   J. INICIALIZAÇÃO
================================================================ */

/**
 * Inicializa a aplicação quando o DOM está pronto.
 */
function init() {
  // Garante que a etapa 1 está ativa e as demais ocultas
  goToStep(1);

  // Ativa validação em tempo real
  attachLiveValidation();

  // Quando a etapa 4 é exibida, prepara o botão mailto
  // Intercepta o clique "Parece ótimo — Enviar" da etapa 3
  const btnToStep4 = document.querySelector('#panel-3 .btn-primary');
  if (btnToStep4) {
    btnToStep4.addEventListener('click', () => {
      prepareStep4();
    }, { once: false });
  }
}

// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', init);
