/**
 * ============================================================
 * COMPORTAMENTOS E INTERAÇÕES - MENINAS DIGITAIS UFSC
 * ============================================================
 */

(() => {
  // 1. CARREGAMENTO E FILTRO DAS PUBLICAÇÕES
  const pubsData = typeof PUBLICACOES !== 'undefined' ? PUBLICACOES : [];
  const labelMap = { artigo: 'Artigo', estudo: 'Estudo', video: 'Vídeo' };
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
  const createButton = (label, url, className = '', isDownload = false) => {
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
      btn.title = 'Ainda não disponível';
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
      const card = createElement('article', `card pub ${isVideo ? 'video' : ''}`.trim());

      card.appendChild(createElement('span', 'badge', labelMap[item.tipo] || 'Publicação'));
      card.appendChild(createElement('h3', '', item.titulo));
      card.appendChild(createElement('p', 'meta', item.meta));

      if (item.resumo) {
        card.appendChild(createElement('p', 'desc', item.resumo));
      }

      const buttonsContainer = createElement('div', 'btns');
      if (isVideo) {
        buttonsContainer.appendChild(createButton('Assistir no YouTube', item.link));
      } else {
        buttonsContainer.appendChild(createButton('Ler', item.link, 'ghost'));
        buttonsContainer.appendChild(createButton('Baixar PDF', item.pdf, '', true));
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

  // Renderização inicial com todas as publicações
  renderPublications('todos');

  // 2. MENU MOBILE (HAMBÚRGUER)
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  if (burger && menu) {
    const setMenuState = (isOpen) => {
      menu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      burger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
      burger.innerHTML = isOpen ? '&times;' : '&#9776;';
    };

    burger.addEventListener('click', () => {
      setMenuState(!menu.classList.contains('open'));
    });

    // Fecha o menu ao clicar em qualquer link
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') setMenuState(false);
    });

    // Fecha o menu ao pressionar a tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenuState(false);
    });
  }

  // 3. DESTAQUE AUTOMÁTICO DO MENU CONFORME A ROLAGEM
  const menuLinks = menu ? Array.from(menu.querySelectorAll('a')) : [];
  if ('IntersectionObserver' in window && menuLinks.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            menuLinks.forEach((link) => {
              const matchesSection = link.getAttribute('href') === `#${entry.target.id}`;
              link.classList.toggle('active', matchesSection);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    const sectionIds = ['acoes', 'publicacoes', 'sobre', 'participar', 'premios', 'contato', 'patrocinadores'];
    sectionIds.forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) observer.observe(sectionElement);
    });
  }

  // 4. FORMULÁRIO DE CONTATO E VALIDAÇÃO
  /*
    INTEGRAÇÃO DO FORMULÁRIO (futuro):
    Cole em ENDPOINT a URL de um destes serviços:
    1) Google Apps Script (Aplicativo da Web) que grava em uma planilha;
    2) Formspree: "https://formspree.io/f/SEU_ID".
    Enquanto ENDPOINT estiver vazio, o envio é simulado localmente.
  */
  const ENDPOINT = '';
  const form = document.getElementById('form');
  const status = document.getElementById('status');

  const validationRules = {
    nome: ['e-nome', 'Informe seu nome.'],
    email: ['e-email', 'Informe um e-mail válido.'],
    perfil: ['e-perfil', 'Escolha um perfil.'],
    mensagem: ['e-msg', 'Escreva sua mensagem.'],
    consentimento: ['e-consent', 'Marque a caixa para concordar.']
  };

  const validateForm = () => {
    let isValid = true;

    Object.keys(validationRules).forEach((fieldKey) => {
      const field = form.elements[fieldKey];
      const errorBox = document.getElementById(validationRules[fieldKey][0]);
      const value = field ? field.value.trim() : '';

      const isCheckbox = field.type === 'checkbox';
      const isEmail = fieldKey === 'email';
      const isInvalid = isCheckbox
        ? !field.checked
        : !value || (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

      if (errorBox) {
        errorBox.textContent = isInvalid ? validationRules[fieldKey][1] : '';
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
        status.textContent = 'Mensagem enviada! Entraremos em contato em breve.';
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
        status.textContent = 'Não foi possível enviar. Tente novamente ou escreva para o e-mail do rodapé.';
      }
    });
  }
})();
