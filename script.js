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
/* ================================================================
   A. CONFIGURAÇÃO
   ✏️ EDITE ESTA SEÇÃO para personalizar o conteúdo da campanha.
   Não altere o restante do arquivo — apenas esta seção.
================================================================ */

const CONFIG = {

  /**
   * DESTINATÁRIOS EM CÓPIA OCULTA — BCC/CCO (campo "Bcc:")
   * Lista de e-mails dos senadores da CDH. 
   * Ao enviar para si mesmo com estes e-mails em BCC, o sistema evita bloqueios por SPAM.
   */
  BCC: [
    'sen.damaresalves@senado.leg.br', 
    'sen.maragabrilli@senado.leg.br', 
    'sen.flavioarns@senado.leg.br', 
    'sen.eduardobraga@senado.leg.br', 
    'sen.sergiomoro@senado.leg.br', 
    'sen.marcosdoval@senado.leg.br', 
    'sen.cidgomes@senado.leg.br', 
    'sen.astronautamarcospontes@senado.leg.br', 
    'sen.fabianocontarato@senado.leg.br', 
    'sen.giordano@senado.leg.br', 
    'sen.pliniovalerio@senado.leg.br', 
    'sen.jussaralima@senado.leg.br', 
    'sen.anapaulalobato@senado.leg.br', 
    'sen.jaimebagattoli@senado.leg.br', 
    'sen.magnomalta@senado.leg.br', 
    'sen.marcosrogerio@senado.leg.br', 
    'sen.rogeriocarvalho@senado.leg.br', 
    'sen.humbertocosta@senado.leg.br', 
    'sen.drhiran@senado.leg.br', 
    'sen.alessandrovieira@senado.leg.br'
  ],

  /**
   * LIMITE DE TAMANHO DO MAILTO (em caracteres)
   * Aumentado ligeiramente para 2000 devido à extensão do manifesto técnico,
   * mantendo compatibilidade com a maioria dos gerenciadores modernos.
   */
  MAILTO_CHAR_LIMIT: 2000,

  /**
   * TEXTO BASE DO E-MAIL
   * Modelo estruturado com base no manifesto enviado.
   * 
   * ATENÇÃO AO FORMULÁRIO HTML: Para este modelo funcionar perfeitamente, 
   * garanta que seu formulário possua também os campos para Cidade e Estado,
   * mapeados no objeto 'state.formData' do seu script.
   */
  EMAIL_BODY_TEMPLATE: `{SAUDACAO} Senadores da Comissão de Direitos Humanos,

Dirijo-me a Vossas Excelências, na condição de cidadão brasileiro, para solicitar o imediato repúdio ao relatório que sugere o arquivamento da SUG 18/2026. A manutenção da redação atual da Lei nº 15.211/2025 trará danos irreparáveis ao ecossistema digital brasileiro. Para impedir que tal panorama se concretize, solicito que seja formulado um Pedido de Vista, apresentado um Voto em Separado pela continuidade da matéria, e que seja considerada a convocação de uma Audiência Pública para debater tecnicamente o tema.

A Sugestão Legislativa 18/2026 obteve expressivos 3.395 votos FAVORÁVEIS contra apenas 223 votos contrários no portal e-Cidadania. Essa margem esmagadora reflete a desaprovação da sociedade civil e do setor de tecnologia frente aos danos significativos impostos pela Lei nº 15.211/2025 ("Lei Felca"/ECA Digital). Embora a proteção de menores no meio digital seja indubitavelmente importante, o desenvolvimento de políticas públicas exige racionalidade técnica, sob o risco de adotarmos medidas ineficazes e desproporcionais que acabem prejudicando o acesso de todos os usuários brasileiros à internet. A redação atual da lei condena a internet brasileira a um estado de vigilância, apagão regional e inviabilidade técnica, enquanto sequer é efetiva para resolver o problema a que se propõe.

O nosso alerta não é isolado. Diversos especialistas, cientistas e veículos de imprensa já se posicionaram publicamente contra os graves riscos da atual redação da Lei nº 15.211/2025 e sua obrigatoriedade de verificação de identidade dos usuários brasileiros a cada acesso pela internet. Destacam-se os seguintes alertas na mídia:

[CONJUR - Consultor Jurídico]
- "ECA Digital viola a privacidade de todos. Há alguma alternativa?"

[CONVERGÊNCIA DIGITAL]
- "Inútil e perigoso: Cientistas alertam contra sistemas de verificação de idade na internet"

[GAZETA DO POVO]
- "Por que a verificação de idade no ECA Digital preocupa especialistas?"

[TECMUNDO]
- "PL 2628: Quais são os efeitos colaterais da Lei Felca?"
- "A Lei Felca pode bloquear o Linux no Brasil? - OPINIÃO"

[OBSERVADOR / JORNAL DE NOTÍCIAS]
- "400 cientistas alertam para riscos das tecnologias de verificação de idade"

Reconhecemos que o debate legislativo exige pragmatismo. Nosso objetivo não é criar um impasse, mas apontar que a inviabilidade técnica de certos dispositivos, na prática, traduz a justificativa de proteção em um vetor de exclusão social e isolamento cibernético (a chamada "Splinternet"). Por isso, solicitamos que o arquivamento seja rejeitado e que a SUG 18/2026 seja utilizada como base para uma revisão cirúrgica dos artigos nocivos, com o acompanhamento de especialistas em cibersegurança e infraestrutura da rede.

Arquivar esta sugestão significa negar e invalidar um effort popular massivo: a Ideia Legislativa original mobilizou 20.000 assinaturas em menos de 4 dias, alcançando a marca histórica de 33.587 apoios de cidadãos no portal e-Cidadania. Enterrar essa pauta agora, ignorando a sua origem, seria rejeitar o verdadeiro espírito da participação democrática e virar as costas para a sociedade civil.

Destaco aos senhores os dispositivos que exigem alteração ou revogação urgente:

1. QUEBRA DE PRIVACIDADE E RISCO DE VAZAMENTO DE DADOS (Art. 9)
Ao vedar a autodeclaração e obrigar a verificação de identidade a cada acesso, a lei força milhões de adultos a entregarem biometria facial e documentos pessoais para plataformas privadas terceirizadas. Vazamentos recentes provam que não existem bancos de dados infalíveis. Como menciona a matéria do portal "Convergência Digital": "Uma carta aberta assinada por 438 cientistas e pesquisadores especializados em segurança e privacidade digital de 32 países declarou um posicionamento contundente contra a implementação de tecnologias de verificação de idade na internet. Eles alertam que as soluções atualmente propostas podem causar 'mais danos do que benefícios'. Tem grande potencial para aumentar a desigualdade e a discriminação na esfera digital."

2. BLOQUEIOS REGIONAIS E A INVIABILIDADE TÉCNICA PARA PLATAFORMAS INDEPENDENTES (Arts. 35 e 40)
A exigência de representação legal (CNPJ) no Brasil e as multas financeiras severas tratam todo o ecossistema da internet, de pequenos blogs e sites independentes a fóruns de nicho, como se fossem "Big Techs". Redes sociais independentes, como a plataforma SpaceHey, já se encontram inacessíveis. Esse cenário de isolamento fere diretamente a Lei nº 12.965/2014 (Marco Civil da Internet) e as recomendações de Não-Fragmentação do CGIbr. Muitas plataformas estrangeiras preferirão o "overblocking" (bloquear o IP brasileiro) a arcar com os custos de implementação.

3. DANOS PARA O SOFTWARE LIVRE E MONOPOLIZAÇÃO (Art. 12)
Projetos de código aberto como o MidnightBSD e o Arch Linux 32 declararam incapacidade técnica e financeira de se adequarem, penalizando a comunidade de software livre e impedindo desenvolvedores independentes de atuarem.

4. PREJUÍZOS AO CENÁRIO NACIONAL DE JOGOS ELETRÔNICOS (Art. 20)
Ao vedar mecânicas comuns na indústria (como as loot boxes) em qualquer jogo acessado por menores, a lei força estúdios do mundo todo a implementarem barreiras caras de identidade ou saírem do mercado nacional. Jogos como "Dragon Ball Legends" sumiram das lojas, e títulos da Riot Games passaram a exigir dados altamente invasivos e biometria de jogadores comuns.

5. PRECEDENTE AUTORITÁRIO E CENSURA DE REDE (Art. 29)
O Artigo 29, que abre margem para o Poder Executivo obrigar a detecção e o bloqueio de VPNs, cria um precedente perigoso de controle de tráfego que aproxima a estrutura de fiscalização brasileira daquela adotada por regimes autoritários, como a agência russa "Roskomnadzor".

6. A INSEGURANÇA JURÍDICA DO TERMO "ACESSO PROVÁVEL" E O OVERBLOCKING
A utilização de termos vagos cria uma insegurança jurídica paralisante. Uma redação ampla demais não protege a criança; ela serve apenas como ferramenta de censura prévia, restringindo o direito do adulto ao livre acesso à informação.

A VERDADEIRA SOLUÇÃO TÉCNICA:
A proteção deve ser feita na base, eliminando a necessidade de coleta invasiva de documentos. Medidas eficazes incluem: ferramentas de controle parental configuradas no próprio dispositivo pelo responsável no setup do aparelho, foco absoluto na remoção de conteúdos criminosos reais e investimento em educação digital.

Apelo ao bom senso desta Comissão: não permitam o arquivamento silencioso da SUG 18/2026. Solicito respeitosamente que Vossas Excelências considerem a formulação de um Pedido de Vista e a realização de uma Audiência Pública.

{ENCERRAMENTO},

{NOME}
Cidadão Brasileiro | Eleitor
{CIDADE} - {ESTADO}`,

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
    city:     '', // Adicionado
    stateName:'', // Adicionado
  },

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
  state.formData.name      = getField('inputName').trim();
  state.formData.email     = getField('inputEmail').trim();
  state.formData.greeting  = getField('selectGreeting');
  state.formData.subject   = getField('selectSubject');
  state.formData.closing   = getField('selectClosing');
  state.formData.city      = getField('inputCity').trim();     // Certifique-se que o ID no HTML é inputCity
  state.formData.stateName = getField('inputState').trim();    // Certifique-se que o ID no HTML é inputState
}

/**
 * Gera o texto do e-mail substituindo os placeholders no template.
 * @returns {string} Texto final do e-mail
 */
function buildEmailBody() {
  return CONFIG.EMAIL_BODY_TEMPLATE
    .replace(/\{SAUDACAO\}/g,     state.formData.greeting)
    .replace(/\{NOME\}/g,         state.formData.name)
    .replace(/\{ENCERRAMENTO\}/g, state.formData.closing)
    .replace(/\{CIDADE\}/g,       state.formData.city)
    .replace(/\{ESTADO\}/g,       state.formData.stateName);
}

/**
 * Gera o e-mail, preenche o preview e constrói a URL mailto.
 */
function generateAndPreview() {
  const body      = buildEmailBody();
  state.emailText = body;

  // LÓGICA DO SEU PASSO 1:
  // "Para" (To): recebe o e-mail do próprio usuário que preencheu o formulário.
  // "Cco" (Bcc): recebe a lista de senadores configurada em CONFIG.BCC.
  state.mailtoUrl = buildMailtoUrl(
    [state.formData.email], 
    CONFIG.BCC,             
    state.formData.subject,
    body
  );

  fillPreview();
  checkMailtoSize(state.mailtoUrl);
}
  // Verifica o tamanho e exibe aviso se necessário
  checkMailtoSize(state.mailtoUrl);
}

/**
 * Preenche os campos de metadados e corpo do e-mail na etapa 3.
 */
function fillPreview() {
  setText('previewTo',      state.formData.email + " (Seu e-mail)");
  setText('previewFrom',    state.formData.email);
  setText('previewSubject', state.formData.subject);

  const bccText = CONFIG.BCC.length > 0
    ? `${CONFIG.BCC.length} e-mails de Senadores da CDH adicionados em Cópia Oculta (BCC)`
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
