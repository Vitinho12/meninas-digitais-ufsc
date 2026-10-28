/**
 * ============================================================
 * COMPORTAMENTOS E INTERAÇÕES - MENINAS DIGITAIS UFSC
 * ============================================================
 */

(() => {

  // ============================================================
  // 1. SISTEMA DE IDIOMAS
  // ============================================================
  const LANG_KEY = 'md-ufsc-lang';
  let currentLang = localStorage.getItem(LANG_KEY) || 'pt';

  const t = (key) => {
    if (typeof TRADUCOES === 'undefined') return '';
    const entry = TRADUCOES[key];
    if (!entry) return '';
    return entry[currentLang] || entry['pt'] || '';
  };

  const applyTranslations = () => {
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : currentLang;

    // Traduz todos os elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (translation) el.textContent = translation;
    });

    // Atualiza os botões de filtro aria-label
    const filterGroup = document.querySelector('.filters[aria-label]');
    if (filterGroup) {
      filterGroup.setAttribute('aria-label',
        currentLang === 'pt' ? 'Filtrar publicações' :
        currentLang === 'en' ? 'Filter publications' :
        'Filtrar publicaciones'
      );
    }

    // Atualiza botões do switcher
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === currentLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Re-renderiza publicações com labels no idioma certo
    renderPublications(activeFilter());
  };

  const activeFilter = () => {
    const pressed = document.querySelector('.filters button[aria-pressed="true"]');
    return pressed ? pressed.getAttribute('data-f') : 'todos';
  };

  // Botões de idioma
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
      localStorage.setItem(LANG_KEY, currentLang);
      applyTranslations();
    });
  });

  // ============================================================
  // 2. CARREGAMENTO E FILTRO DAS PUBLICAÇÕES
  // ============================================================
  const pubsData = typeof PUBLICACOES !== 'undefined' ? PUBLICACOES : [];
  const box = document.getElementById('pubs');
  const emptyMessage = document.getElementById('pubs-empty');

  // Cria elemento HTML com classe e texto opcional
  const createElement = (tag, className = '', text = '') => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  };

  // Cria botão de link ou download
  const createButton = (labelKey, url, className = '', isDownload = false) => {
    const label = t(labelKey) || labelKey;
    const btn = createElement('a', `btn small ${className}`.trim(), label);
    if (url) {
      btn.href = url;
      if (isDownload) {
        btn.setAttribute('download', '');
      } else {
        btn.target = '_blank';
        btn.rel = 'noopener';
      }
    } else {
      btn.href = '#publicacoes';
      btn.setAttribute('aria-disabled', 'true');
      btn.title = t('pubs.empty') || 'Ainda não disponível';
      btn.addEventListener('click', (e) => e.preventDefault());
    }
    return btn;
  };

  // Renderiza cards de acordo com o filtro selecionado
  const renderPublications = (filter) => {
    if (!box) return;
    box.textContent = '';
    let count = 0;

    pubsData.forEach((item) => {
      if (filter !== 'todos' && item.tipo !== filter) return;
      count++;

      const isVideo = item.tipo === 'video';
      const isRelatorio = item.tipo === 'relatorio';
      const card = createElement('article', `card pub ${isVideo ? 'video' : ''} ${isRelatorio ? 'relatorio' : ''}`.trim());

      const labelKey = `pubs.label.${item.tipo}`;
      card.appendChild(createElement('span', 'badge', t(labelKey) || item.tipo));
      card.appendChild(createElement('h3', '', item.titulo));
      card.appendChild(createElement('p', 'meta', item.meta));

      if (item.resumo) {
        card.appendChild(createElement('p', 'desc', item.resumo));
      }

      const buttonsContainer = createElement('div', 'btns');
      if (isVideo) {
        buttonsContainer.appendChild(createButton('pubs.btn.assistir', item.link));
      } else {
        buttonsContainer.appendChild(createButton('pubs.btn.ler', item.link, 'ghost'));
        buttonsContainer.appendChild(createButton('pubs.btn.pdf', item.pdf, '', true));
      }

      card.appendChild(buttonsContainer);
      box.appendChild(card);
    });

    if (emptyMessage) {
      emptyMessage.style.display = count ? 'none' : 'block';
    }
  };

  // Gerenciamento dos botões de filtro
  const filterButtons = document.querySelectorAll('.filters button');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      renderPublications(btn.getAttribute('data-f'));
    });
  });

  // ============================================================
  // 3. MENU MOBILE (HAMBÚRGUER)
  // ============================================================
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  if (burger && menu) {
    const setMenuState = (isOpen) => {
      menu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      burger.setAttribute('aria-label', isOpen
        ? (currentLang === 'pt' ? 'Fechar menu' : currentLang === 'en' ? 'Close menu' : 'Cerrar menú')
        : (currentLang === 'pt' ? 'Abrir menu' : currentLang === 'en' ? 'Open menu' : 'Abrir menú'));
      burger.innerHTML = isOpen ? '&times;' : '&#9776;';
    };

    burger.addEventListener('click', () => {
      setMenuState(!menu.classList.contains('open'));
    });

    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') setMenuState(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenuState(false);
    });
  }

  // ============================================================
  // 4. DESTAQUE AUTOMÁTICO DO MENU CONFORME A ROLAGEM
  // ============================================================
  const menuLinks = menu ? Array.from(menu.querySelectorAll('a')) : [];
  if ('IntersectionObserver' in window && menuLinks.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            menuLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    ['acoes', 'publicacoes', 'sobre', 'participar', 'premios', 'contato', 'patrocinadores'].forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) observer.observe(sectionElement);
    });
  }

  // ============================================================
  // 5. FORMULÁRIO DE CONTATO E VALIDAÇÃO
  // ============================================================
  /*
    INTEGRAÇÃO DO FORMULÁRIO (futuro):
    Cole em ENDPOINT a URL de um destes serviços:
    1) Google Apps Script que grava em uma planilha;
    2) Formspree: "https://formspree.io/f/SEU_ID".
    Enquanto ENDPOINT estiver vazio, o envio é simulado localmente.
  */
  const ENDPOINT = '';
  const form = document.getElementById('form');
  const status = document.getElementById('status');

  const validationRules = {
    nome:          ['e-nome',    'contato.err.nome'],
    email:         ['e-email',   'contato.err.email'],
    perfil:        ['e-perfil',  'contato.err.perfil'],
    mensagem:      ['e-msg',     'contato.err.msg'],
    consentimento: ['e-consent', 'contato.err.consent']
  };

  const validateForm = () => {
    let isValid = true;

    Object.keys(validationRules).forEach((fieldKey) => {
      const field = form.elements[fieldKey];
      const errorBox = document.getElementById(validationRules[fieldKey][0]);
      const msgKey = validationRules[fieldKey][1];
      const value = field ? field.value.trim() : '';

      const isCheckbox = field.type === 'checkbox';
      const isEmail = fieldKey === 'email';
      const isInvalid = isCheckbox
        ? !field.checked
        : !value || (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

      if (errorBox) {
        errorBox.textContent = isInvalid ? t(msgKey) : '';
      }
      field.setAttribute('aria-invalid', isInvalid ? 'true' : 'false');

      if (isInvalid) isValid = false;
    });

    return isValid;
  };

  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.className = 'status';

      if (!validateForm()) {
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const showSuccess = () => {
        status.className = 'status ok';
        status.textContent = t('contato.ok');
        form.reset();
      };

      if (!ENDPOINT) {
        showSuccess();
        return;
      }

      try {
        const response = await fetch(ENDPOINT, {
          method: 'POST',
          body: new URLSearchParams(new FormData(form))
        });
        if (!response.ok) throw new Error('Falha no envio');
        showSuccess();
      } catch (err) {
        status.className = 'status fail';
        status.textContent = t('contato.fail');
      }
    });
  }

  // ============================================================
  // INICIALIZAÇÃO: aplica o idioma salvo ao carregar a página
  // ============================================================
  applyTranslations();

})();
