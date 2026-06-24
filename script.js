/**
 * ================================================================
 * MOBILIZAÇÃO CIDADÃ — script.js (VERSÃO FINAL CONSOLIDADA)
 * ================================================================
 */

/* ================================================================
   A. CONFIGURAÇÃO
================================================================ */

const CONFIG = {
  /**
   * DESTINATÁRIOS EM CÓPIA OCULTA — BCC/CCO (campo "Bcc:")
   * Lista de e-mails dos senadores da CDH. 
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

  MAILTO_CHAR_LIMIT: 2000,

  EMAIL_BODY_TEMPLATE: `{SAUDACAO} Senadores da Comissão de Direitos Humanos,
 
Dirijo-me a Vossas Excelências, na condição de cidadão brasileiro, para solicitar o imediato repúdio ao relatório que sugere o arquivamento da SUG 18/2026. A manutenção da redação atual da Lei nº 15.211/2025 trará danos irreparáveis ao ecossistema digital brasileiro. Para evitar esse cenário, solicito que seja formulado um Pedido de Vista, apresentado um Voto em Separado pela continuidade da matéria, e que seja considerada a convocação de uma Audiência Pública para debater tecnicamente o tema.
 
A Sugestão Legislativa 18/2026 obteve expressivos 3.169 votos favoráveis contra apenas 191 contrários no portal e-Cidadania. Essa margem esmagadora reflete a desaprovação da sociedade civil e do setor de tecnologia frente aos danos significativos impostos pela Lei nº 15.211/2025 ("Lei Felca"/ECA Digital). Embora seja indubitavelmente importante a proteção de menores no meio digital, não se deve avaliar políticas públicas unicamente pela emoção, ignorando resultados técnicos e tomando medidas irracionais ou injustas que acabem prejudicando o acesso de todos os usuários à internet. A redação atual da lei condena a internet brasileira a um estado de vigilância, apagão regional e inviabilidade técnica.
 
Reconhecemos que o debate legislativo exige pragmatismo. Nosso objetivo não é criar um impasse, mas apontar que a inviabilidade técnica de certos dispositivos, na prática, traduz a justificativa de proteção em um vetor de exclusão social e isolamento cibernético (a chamada "Splinternet"). Por isso, solicitamos que o arquivamento seja rejeitado e que a SUG 18/2026 seja utilizada como base para uma revisão cirúrgica dos artigos nocivos, com o acompanhamento de especialistas em cibersegurança e infraestrutura da rede.
 
Arquivar esta sugestão significa negar e invalidar um esforço popular massivo: a Ideia Legislativa original mobilizou 20.000 assinaturas em menos de 4 dias, alcançando a marca histórica de 33.565 apoios de cidadãos no portal e-Cidadania. Enterrar essa pauta agora, ignorando a sua origem, seria rejeitar o verdadeiro espírito da participação democrática e virar as costas para a sociedade civil.
 
Destaco aos senhores os dispositivos que exigem alteração ou revogação urgente:
 
1. QUEBRA DE PRIVACIDADE E RISCO DE VAZAMENTO DE DADOS (Art. 9)
Ao vedar a autodeclaração e obrigar a verificação de identidade a cada acesso, a lei força milhões de adultos a entregarem biometria facial e documentos pessoais para plataformas privadas terceirizadas. Vazamentos recentes provam que não existem bancos de dados infalíveis. Uma carta aberta assinada por 438 cientistas e pesquisadores especializados em segurança e privacidade digital de 32 países declarou um posicionamento contundente contra a implementação de tecnologias de verificação de idade na internet. Eles alertam que as soluções atualmente propostas podem causar "mais danos do que benefícios".
"A verificação etária justifica novas formas de coleta de dados por serviços online. Isso, por si só, aumenta os riscos à privacidade, com dados podendo ser abusados pelo próprio provedor ou vazados em incidentes de segurança", alertam, citando o caso de 70 mil usuários da plataforma Discord que tiveram fotos de documentos vazadas após recorrerem de erros na verificação.
 
2. BLOQUEIOS REGIONAIS E A INVIABILIDADE TÉCNICA PARA PLATAFORMAS INDEPENDENTES (Arts. 35 e 40)
A exigência de representação legal (CNPJ) no Brasil e as multas financeiras severas tratam todo o ecossistema da internet, de pequenos blogs e sites independentes a fóruns de nicho, como se fossem "Big Techs". O resultado imediato já está ocorrendo: plataformas menores não possuem orçamento para complexos sistemas de verificação e estão simplesmente bloqueando o acesso de IPs brasileiros. Redes sociais independentes, como o SpaceHey, já se encontram inacessíveis. Outras, como a tradicional plataforma de artistas Newgrounds, estão sendo forçadas a exigir suporte financeiro pago dos usuários brasileiros apenas para cobrir os custos inviáveis do processo de verificação.
 
Esse cenário de isolamento fere frontalmente a Lei nº 12.965/2014 (Marco Civil da Internet), que estabelece como princípios a garantia da liberdade de expressão, a preservação da natureza global da rede e a responsabilização proporcional de terceiros. Simultaneamente, a redação atual colide frontalmente com a 5ª recomendação fundamental do Comitê Gestor da Internet no Brasil (CGI-br), que determina expressamente a "Não fragmentação: as regras devem preservar o caráter global e aberto da Internet, evitando a criação de 'muros' ou sistemas que isolem o usuário brasileiro da rede mundial". Ao subverter as garantias do Marco Civil, o Brasil caminha para um isolamento digital indesejado, semelhante ao ocorrido no Nepal.
 
3. DANOS PARA O SOFTWARE LIVRE E MONOPOLIZAÇÃO (Art. 12)
As exigências de conformidade sistêmica já isolam o Brasil. Projetos de código aberto como o MidnightBSD (que bloqueou o acesso de brasileiros e alterou sua licença) e o Arch Linux 32 (que encerrou tráfego para o Brasil), declararam incapacidade técnica e financeira de se adequarem. A lei penaliza a comunidade de software livre e impede desenvolvedores independentes de atuarem, monopolizando a produção de softwares nas mãos de grandes empresas.
 
4. PREJUÍZOS AO CENÁRIO NACIONAL DE JOGOS ELETRÔNICOS (Art. 20)
Ao vedar mecânicas comuns na indústria (como as loot boxes) em qualquer jogo que possa ser acessado por menores, a lei força todos os estúdios do mundo a implementarem sistemas caros e invasivos de checagem de identidade ou a classificarem seus jogos como +18. Na prática, os estúdios e empresas muitas vezes estão optando por bloquear o mercado brasileiro.
Como efeito colateral, jogos como "Dragon Ball Legends" e "Dragon Ball Z: Dokkan Battle" desapareceram das lojas de aplicativos em território nacional, enquanto outros jogos eletrônicos, como "Dragon Ball Gekishin Squadra" passaram a impossibilitar transações para usuários brasileiros, indisponibilizando a compra de itens no jogo.
Em paralelo, títulos da Riot Games (League of Legends, Teamfight Tactics, League of Legends: Wild Rift, 2XKO, e Legends of Runeterra) passaram a exigir que os jogadores brasileiros entreguem biometria facial, cartão de crédito, documento de identidade ou número do CPF. O cenário competitivo e o acesso ao lazer digital estão sendo inviabilizados, afastando o Brasil do cenário global de e-sports e entretenimento.
 
5. PRECEDENTE AUTORITÁRIO E CENSURA DE REDE (Art. 29)
O Artigo 29, que abre margem para o Poder Executivo obrigar a detecção e o bloqueio de VPNs, é uma medida desproporcional. Somada à fiscalização prevista para 2027, a lei cria um precedente perigoso de controle de tráfego que aproxima a estrutura de fiscalização brasileira daquela adotada por regimes autoritários que censuram e sufocam o livre fluxo de informação da internet, como a agência russa "Roskomnadzor", que, inicialmente, em 2012, utilizou a mesma justificativa de "proteção infantil" e hoje censura intensivamente a internet na Rússia.
 
6. A INSEGURANÇA JURÍDICA DO TERMO "ACESSO PROVÁVEL" E O OVERBLOCKING
A utilização de termos vagos e amplos, como a exigência de verificação em locais de "acesso provável por crianças e adolescentes", cria uma insegurança jurídica paralisante. Sob a ameaça de sanções severas, as plataformas adotarão o "overblocking" (bloqueio excessivo). Na dúvida, decidem por bloquear preventivamente o acesso de usuários brasileiros. Uma redação ampla demais não protege a criança; ela serve apenas como uma ferramenta de censura prévia, punindo o cidadão adulto e restringindo seu direito ao livre acesso à informação.
 
A VERDADEIRA SOLUÇÃO TÉCNICA:
A proteção deve ser feita na base, eliminando a necessidade de coleta invasiva de documentos ou biometria facial a cada site ou rede social na internet. Medidas eficazes incluem:
- Configuração de ferramentas de controle parental no dispositivo, definidas pelo adulto responsável no momento da aquisição ou inicialização (setup) do aparelho. Assim, a responsabilidade sobre o acesso infantil permanece sob tutela dos pais, sem expor o cidadão à coleta massiva de dados pessoais.
- Foco absoluto na remoção imediata de conteúdos reais de abuso e banimento sumário de infratores.
- Educação digital prévia nas instituições de ensino e conscientização para os pais.
 
Apelo ao bom senso desta Comissão: não permitam o arquivamento silencioso da SUG 18/2026. Solicito respeitosamente que Vossas Excelências considerem a formulação de um Pedido de Vista e a realização de uma Audiência Pública para debater os impactos técnicos e sociais aqui mencionados, ouvindo especialistas técnicos da área. Revisem a Lei 15.211/2025 para garantir a proteção de vulneráveis sem destruir a privacidade, a viabilidade técnica e a liberdade de nossa internet.
 
{ENCERRAMENTO},
 
{NOME}
Cidadão Brasileiro | Eleitor
{CIDADE} - {ESTADO}`
};

/* ================================================================
   B. ESTADO DA APLICAÇÃO
================================================================ */

const state = {
  currentStep: 1,
  formData: {
    name:     '',
    email:    '',
    greeting: '',
    subject:  '',
    closing:  '',
    city:     '',
    stateName:''
  },
  mailtoUrl:  '',
  emailText:  '',
};

/* ================================================================
   C. NAVEGAÇÃO ENTRE ETAPAS
================================================================ */

function goToStep(targetStep) {
  const totalSteps = 4;
  hidePanel(state.currentStep);
  state.currentStep = targetStep;
  showPanel(targetStep);
  updateProgressBar(targetStep, totalSteps);
  updateStepIndicators(targetStep);
  scrollToContent();
}

function hidePanel(step) {
  const panel = getPanelEl(step);
  if (!panel) return;
  panel.setAttribute('hidden', '');
  panel.classList.remove('active', 'animate-in');
}

function showPanel(step) {
  const panel = getPanelEl(step);
  if (!panel) return;
  panel.removeAttribute('hidden');
  void panel.offsetWidth;
  panel.classList.add('active', 'animate-in');

  const heading = panel.querySelector('h2');
  if (heading) {
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
}

function getPanelEl(step) {
  return document.getElementById(`panel-${step}`);
}

function updateProgressBar(currentStep, totalSteps) {
  const fill = document.getElementById('progressFill');
  if (!fill) return;
  const percentage = Math.round((currentStep / totalSteps) * 100);
  fill.style.width = `${percentage}%`;

  const track = fill.closest('.progress-track');
  if (track) track.setAttribute('aria-valuenow', percentage);
}

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

function scrollToContent() {
  const main = document.getElementById('main');
  if (!main) return;
  const offset = main.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
}

/* ================================================================
   D. VALIDAÇÃO DO FORMULÁRIO
================================================================ */

function validateAndPreview() {
  clearFormErrors();
  const errors = collectValidationErrors();

  if (errors.length > 0) {
    showFormErrors(errors);
    return;
  }

  collectFormData();
  generateAndPreview();
  goToStep(3);
}

function collectValidationErrors() {
  const errors = [];
  const name    = getField('inputName');
  const email   = getField('inputEmail');
  const city    = getField('inputCity');
  const stateF  = getField('inputState');
  const subject = getField('selectSubject');

  if (!name || name.trim().length < 2) {
    errors.push({ field: 'inputName', message: 'Informe seu nome completo (mínimo 2 caracteres).' });
  }
  if (!email || !isValidEmail(email.trim())) {
    errors.push({ field: 'inputEmail', message: 'Informe um endereço de e-mail válido.' });
  }
  if (!city || city.trim().length < 2) {
    errors.push({ field: 'inputCity', message: 'Informe sua cidade.' });
  }
  if (!stateF) {
    errors.push({ field: 'inputState', message: 'Selecione seu estado.' });
  }
  if (!subject) {
    errors.push({ field: 'selectSubject', message: 'Selecione um assunto para o e-mail.' });
  }
  return errors;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormErrors(errors) {
  const box  = document.getElementById('formErrors');
  const list = document.getElementById('errorList');
  if (!box || !list) return;

  list.innerHTML = '';
  errors.forEach(({ field, message }) => {
    const li = document.createElement('li');
    li.textContent = message;
    list.appendChild(li);

    const input = document.getElementById(field);
    if (input) {
      input.classList.add('invalid');
      input.setAttribute('aria-invalid', 'true');
    }
  });
  box.removeAttribute('hidden');

  const firstInvalid = document.querySelector('.form-input.invalid');
  if (firstInvalid) firstInvalid.focus();
}

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

function collectFormData() {
  state.formData.name      = getField('inputName').trim();
  state.formData.email     = getField('inputEmail').trim();
  state.formData.greeting  = getField('selectGreeting');
  state.formData.subject   = getField('selectSubject');
  state.formData.closing   = getField('selectClosing');
  state.formData.city      = getField('inputCity').trim();
  state.formData.stateName = getField('inputState').trim();
}

function buildEmailBody() {
  return CONFIG.EMAIL_BODY_TEMPLATE
    .replace(/\{SAUDACAO\}/g,     state.formData.greeting)
    .replace(/\{NOME\}/g,         state.formData.name)
    .replace(/\{ENCERRAMENTO\}/g, state.formData.closing)
    .replace(/\{CIDADE\}/g,       state.formData.city)
    .replace(/\{ESTADO\}/g,       state.formData.stateName);
}

function generateAndPreview() {
  const body      = buildEmailBody();
  state.emailText = body;

  state.mailtoUrl = buildMailtoUrl(
    [state.formData.email], 
    CONFIG.BCC, 
    state.formData.subject, 
    body
  );

  fillPreview();
  checkMailtoSize(state.mailtoUrl);
}

/* ================================================================
   F. PREENCHIMENTO DO PREVIEW
================================================================ */

function fillPreview() {
  setText('previewTo',      state.formData.email + " (Seu e-mail)");
  setText('previewFrom',    state.formData.email);
  setText('previewSubject', state.formData.subject);

  const bccText = CONFIG.BCC.length > 0
    ? `${CONFIG.BCC.length} e-mails de Senadores da CDH em Cópia Oculta (BCC)`
    : 'Nenhum';
  setText('previewBcc', bccText);
  setText('previewBody', state.emailText);
}

/* ================================================================
   G. PROTOCOLO MAILTO (MÉTODO CORRIGIDO SEM URLSEARCHPARAMS)
================================================================ */

function buildMailtoUrl(to, bcc, subject, body) {
  const targetTo = to.join(',');
  
  // Codificação limpa que preserva espaços reais como %20 (impede os sinais de '+')
  const targetSubject = encodeURIComponent(subject);
  const targetBody = encodeURIComponent(body);
  
  let url = `mailto:${targetTo}?subject=${targetSubject}&body=${targetBody}`;
  
  if (bcc.length > 0) {
    url += `&bcc=${encodeURIComponent(bcc.join(','))}`;
  }

  return url;
}

function checkMailtoSize(url) {
  const isTooBig = url.length > CONFIG.MAILTO_CHAR_LIMIT;
  toggleHidden('sizeWarning', !isTooBig);
  toggleHidden('sizeSendWarning', !isTooBig);
}

function tryOpenMailto(url) {
  if (!url || !url.startsWith('mailto:')) return false;
  const link = document.createElement('a');
  link.href  = url;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return true;
}

/* ================================================================
   H. CÓPIA AUXILIAR DE SEGURANÇA
================================================================ */

function showCopyFeedback(success) {
  const el = document.getElementById('copyFeedback');
  if (!el) return;

  el.textContent = success
    ? '✓ Conteúdo copiado para a área de transferência!'
    : '✗ Erro ao copiar. Selecione o preview e copie manualmente.';
  el.removeAttribute('hidden');

  setTimeout(() => {
    el.setAttribute('hidden', '');
  }, 3000);
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity  = '0';
  document.body.appendChild(textarea);
  textarea.select();
  let success = false;
  try { success = document.execCommand('copy'); } catch { }
  document.body.removeChild(textarea);
  return success;
}

/* ================================================================
   I. UTILITÁRIOS
================================================================ */

function getField(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function toggleHidden(id, hide) {
  const el = document.getElementById(id);
  if (!el) return;
  if (hide) el.setAttribute('hidden', '');
  else el.removeAttribute('hidden');
}

function attachLiveValidation() {
  document.querySelectorAll('.form-input').forEach((field) => {
    field.addEventListener('input', () => {
      field.classList.remove('invalid');
      field.removeAttribute('aria-invalid');
    });
  });
}

function prepareStep4() {
  const btn = document.getElementById('btnMailto');
  if (btn) btn.href = state.mailtoUrl;
  const isTooBig = state.mailtoUrl.length > CONFIG.MAILTO_CHAR_LIMIT;
  toggleHidden('sizeSendWarning', !isTooBig);
}

// Funções de clique expostas de forma segura
window.handleMailtoClick = function(event) {
  event.preventDefault();
  const url = state.mailtoUrl;
  if (!url) {
    toggleHidden('mailtoWarning', false);
    return;
  }
  tryOpenMailto(url);
};

window.copyEmailContent = function() {
  const content = [
    `Para: ${state.formData.email}`,
    `Cco/Bcc: ${CONFIG.BCC.join(', ')}`,
    `Assunto: ${state.formData.subject}`,
    '',
    state.emailText
  ].join('\n');

  navigator.clipboard.writeText(content).then(() => {
    showCopyFeedback(true);
  }).catch(() => {
    showCopyFeedback(fallbackCopy(content));
  });
};

/* ================================================================
   J. INICIALIZAÇÃO E GERENCIAMENTO DE EVENTOS UNIFICADO
================================================================ */

function init() {
  goToStep(1);
  attachLiveValidation();

  // Mapeamento nativo dos botões mapeados por ID
  const binders = [
    { id: 'btnStep1Next', action: () => goToStep(2) },
    { id: 'btnStep2Back', action: () => goToStep(1) },
    { id: 'btnStep2Next', action: () => validateAndPreview() },
    { id: 'btnStep3Back', action: () => goToStep(2) },
    { id: 'btnStep3Next', action: () => { prepareStep4(); goToStep(4); } },
    { id: 'btnRestart',   action: () => goToStep(1) }
  ];

  binders.forEach(binder => {
    const btn = document.getElementById(binder.id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        binder.action();
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
