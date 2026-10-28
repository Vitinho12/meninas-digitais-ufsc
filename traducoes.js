/**
 * ============================================================
 * TRADUÇÕES - MENINAS DIGITAIS UFSC
 * ============================================================
 * Para traduzir ou corrigir um texto, edite apenas este arquivo!
 * Cada chave (ex: "nav.acoes") tem o texto nos 3 idiomas.
 * 
 * NÃO altere as chaves (lado esquerdo dos dois pontos).
 * Altere apenas os textos entre aspas de cada idioma.
 * ============================================================
 */

const TRADUCOES = {

  /* ---- NAVEGAÇÃO ---- */
  'nav.acoes':         { pt: 'Ações',          en: 'Actions',      es: 'Acciones' },
  'nav.publicacoes':   { pt: 'Publicações',     en: 'Publications', es: 'Publicaciones' },
  'nav.sobre':         { pt: 'Sobre',           en: 'About',        es: 'Sobre' },
  'nav.participar':    { pt: 'Participar',      en: 'Join Us',      es: 'Participar' },
  'nav.premios':       { pt: 'Prêmios',         en: 'Awards',       es: 'Premios' },
  'nav.contato':       { pt: 'Contato',         en: 'Contact',      es: 'Contacto' },
  'nav.patrocinadores':{ pt: 'Patrocinadores',  en: 'Sponsors',     es: 'Patrocinadores' },

  /* ---- HERO ---- */
  'hero.h1.before':   { pt: 'O mundo da tecnologia também é',  en: 'The world of technology is',     es: 'El mundo de la tecnología también es' },
  'hero.h1.mark':     { pt: 'o seu lugar',                     en: 'your place too',                 es: 'tu lugar' },
  'hero.h1.after':    { pt: '.',                               en: '.',                              es: '.' },
  'hero.p':           {
    pt: 'O Meninas Digitais UFSC leva oficinas, desafios e conversas sobre tecnologia para meninas que querem descobrir o que dá para criar com computação.',
    en: 'Meninas Digitais UFSC brings workshops, challenges and conversations about technology to girls who want to discover what they can create with computing.',
    es: 'Meninas Digitais UFSC lleva talleres, desafíos y charlas sobre tecnología para niñas que quieren descubrir qué pueden crear con la computación.'
  },
  'hero.btn.participar': { pt: 'Quero participar',        en: 'I want to join',       es: 'Quiero participar' },
  'hero.btn.acoes':      { pt: 'Conheça nossas ações',    en: 'See our actions',      es: 'Conoce nuestras acciones' },
  'hero.sticker':        { pt: 'Sem experiência? Sem problema!', en: 'No experience? No problem!', es: '¿Sin experiencia? ¡Sin problema!' },

  /* ---- AÇÕES ---- */
  'acoes.tag':    { pt: '<ações />', en: '<actions />', es: '<acciones />' },
  'acoes.h2':     { pt: 'Nossas Ações',  en: 'Our Actions',    es: 'Nuestras Acciones' },
  'acoes.lead':   {
    pt: 'Veja o que andamos fazendo. Os posts do nosso Instagram aparecem aqui e se renovam sempre que algo novo é publicado.',
    en: 'See what we have been doing. Our Instagram posts appear here and update whenever something new is published.',
    es: 'Mira lo que estamos haciendo. Las publicaciones de nuestro Instagram aparecen aquí y se actualizan cuando hay algo nuevo.'
  },
  'acoes.widget': {
    pt: 'Espaço reservado para o widget do Instagram. Os blocos abaixo são apenas ilustrativos.',
    en: 'Space reserved for the Instagram widget. The blocks below are illustrative only.',
    es: 'Espacio reservado para el widget de Instagram. Los bloques de abajo son solo ilustrativos.'
  },
  'acoes.tile1':  { pt: 'Oficina de programação',  en: 'Coding workshop',        es: 'Taller de programación' },
  'acoes.tile2':  { pt: 'Visita à escola',          en: 'School visit',           es: 'Visita a la escuela' },
  'acoes.tile3':  { pt: 'Roda de conversa',         en: 'Discussion circle',      es: 'Ronda de conversación' },
  'acoes.tile4':  { pt: 'Robótica na prática',      en: 'Hands-on robotics',      es: 'Robótica en práctica' },
  'acoes.tile5':  { pt: 'Mentoria com egressas',    en: 'Mentorship with alumni', es: 'Mentoría con egresadas' },
  'acoes.tile6':  { pt: 'Semana de computação',     en: 'Computing week',         es: 'Semana de computación' },
  'acoes.btn':    { pt: 'Seguir @meninasdigitaisufsc', en: 'Follow @meninasdigitaisufsc', es: 'Seguir @meninasdigitaisufsc' },

  /* ---- PUBLICAÇÕES ---- */
  'pubs.tag':    { pt: '<publicações />', en: '<publications />', es: '<publicaciones />' },
  'pubs.h2':     { pt: 'Publicações',    en: 'Publications',     es: 'Publicaciones' },
  'pubs.lead':   {
    pt: 'Artigos, estudos e vídeos produzidos pelo projeto. Abra para ler ou assistir, e baixe o PDF quando estiver disponível.',
    en: 'Articles, studies and videos produced by the project. Open to read or watch, and download the PDF when available.',
    es: 'Artículos, estudios y vídeos producidos por el proyecto. Abre para leer o ver, y descarga el PDF cuando esté disponible.'
  },
  'pubs.filter.todos':     { pt: 'Todas',      en: 'All',       es: 'Todas' },
  'pubs.filter.artigo':    { pt: 'Artigos',    en: 'Articles',  es: 'Artículos' },
  'pubs.filter.estudo':    { pt: 'Estudos',    en: 'Studies',   es: 'Estudios' },
  'pubs.filter.relatorio': { pt: 'Relatórios', en: 'Reports',   es: 'Informes' },
  'pubs.filter.video':     { pt: 'Vídeos',     en: 'Videos',    es: 'Videos' },
  'pubs.empty':            { pt: 'Nenhuma publicação nesta categoria ainda.', en: 'No publications in this category yet.', es: 'Aún no hay publicaciones en esta categoría.' },
  'pubs.btn.ler':          { pt: 'Ler',              en: 'Read',        es: 'Leer' },
  'pubs.btn.pdf':          { pt: 'Baixar PDF',        en: 'Download PDF', es: 'Descargar PDF' },
  'pubs.btn.assistir':     { pt: 'Assistir no YouTube', en: 'Watch on YouTube', es: 'Ver en YouTube' },
  'pubs.label.artigo':     { pt: 'Artigo',     en: 'Article',  es: 'Artículo' },
  'pubs.label.estudo':     { pt: 'Estudo',     en: 'Study',    es: 'Estudio' },
  'pubs.label.relatorio':  { pt: 'Relatório',  en: 'Report',   es: 'Informe' },
  'pubs.label.video':      { pt: 'Vídeo',      en: 'Video',    es: 'Video' },

  /* ---- SOBRE ---- */
  'sobre.tag':  { pt: '<sobre />', en: '<about />', es: '<sobre />' },
  'sobre.h2':   { pt: 'Quem somos', en: 'Who we are', es: 'Quiénes somos' },
  'sobre.p1':   {
    pt: 'Somos um projeto de extensão da Universidade Federal de Santa Catarina. Estudantes, professoras e voluntárias se juntam para mostrar a meninas da educação básica que a computação também é lugar delas.',
    en: 'We are an extension project of the Federal University of Santa Catarina. Students, professors and volunteers come together to show girls in basic education that computing is also their place.',
    es: 'Somos un proyecto de extensión de la Universidad Federal de Santa Catarina. Estudiantes, profesoras y voluntarias se unen para mostrar a las niñas de la educación básica que la computación también es su lugar.'
  },
  'sobre.p2':   {
    pt: 'Fazemos parte do programa Meninas Digitais da Sociedade Brasileira de Computação, uma rede de projetos de todo o Brasil com o mesmo objetivo: mais mulheres na tecnologia.',
    en: 'We are part of the Meninas Digitais program of the Brazilian Computing Society, a network of projects from across Brazil with the same goal: more women in technology.',
    es: 'Somos parte del programa Meninas Digitais de la Sociedad Brasileña de Computación, una red de proyectos de todo Brasil con el mismo objetivo: más mujeres en tecnología.'
  },
  'sobre.card1.h3': { pt: 'UFSC', en: 'UFSC', es: 'UFSC' },
  'sobre.card1.p':  {
    pt: 'Oficinas, mentorias e eventos feitos por quem estuda e trabalha com computação na universidade.',
    en: 'Workshops, mentoring and events led by those who study and work with computing at the university.',
    es: 'Talleres, mentorías y eventos realizados por quienes estudian y trabajan con computación en la universidad.'
  },
  'sobre.card2.h3': { pt: 'SBC', en: 'SBC', es: 'SBC' },
  'sobre.card2.p':  {
    pt: 'Rede nacional que reúne projetos parceiros e valoriza as ações de cada um.',
    en: 'A national network that brings together partner projects and values the actions of each one.',
    es: 'Red nacional que reúne proyectos asociados y valora las acciones de cada uno.'
  },

  /* ---- PARTICIPAR ---- */
  'participar.tag':   { pt: '<participar />', en: '<join />', es: '<participar />' },
  'participar.h2':    { pt: 'Como participar', en: 'How to join', es: 'Cómo participar' },
  'participar.lead':  { pt: 'É simples, e você pode começar hoje.', en: 'It\'s simple, and you can start today.', es: 'Es sencillo, y puedes empezar hoy.' },
  'participar.s1.h3': { pt: 'Conheça as ações',     en: 'Discover our actions',     es: 'Conoce las acciones' },
  'participar.s1.p':  { pt: 'Veja nossos posts e descubra o que acontece nas oficinas e eventos.', en: 'Browse our posts and find out what happens at workshops and events.', es: 'Mira nuestras publicaciones y descubre qué pasa en los talleres y eventos.' },
  'participar.s2.h3': { pt: 'Fale com a gente',     en: 'Get in touch',             es: 'Habla con nosotros' },
  'participar.s2.p':  { pt: 'Preencha o formulário, escolhendo o perfil que combina com você.', en: 'Fill out the form, choosing the profile that fits you.', es: 'Rellena el formulario eligiendo el perfil que más se adapte a ti.' },
  'participar.s3.h3': { pt: 'Participe',             en: 'Participate',              es: 'Participa' },
  'participar.s3.p':  { pt: 'Entramos em contato para contar as próximas atividades e como se inscrever.', en: 'We will get in touch to tell you about upcoming activities and how to sign up.', es: 'Nos pondremos en contacto para contarte sobre las próximas actividades y cómo inscribirte.' },

  /* ---- PRÊMIOS ---- */
  'premios.tag':    { pt: '<reconhecimentos />', en: '<recognition />', es: '<reconocimientos />' },
  'premios.h2':     { pt: 'Reconhecimentos',     en: 'Recognition',    es: 'Reconocimientos' },
  'premios.nota':   { pt: 'Dados de exemplo: trocar pelos reais.', en: 'Example data: replace with real ones.', es: 'Datos de ejemplo: reemplazar por los reales.' },
  'premios.a1.titulo': { pt: 'Prêmio Destaque UFSC',                  en: 'UFSC Highlight Award',               es: 'Premio Destacado UFSC' },
  'premios.a1.sub':    { pt: 'Extensão universitária',                  en: 'University extension',               es: 'Extensión universitaria' },
  'premios.a2.titulo': { pt: 'Menção Honrosa Meninas Digitais',         en: 'Meninas Digitais Honorable Mention', es: 'Mención Honorífica Meninas Digitais' },
  'premios.a2.sub':    { pt: 'Sociedade Brasileira de Computação',      en: 'Brazilian Computing Society',        es: 'Sociedad Brasileña de Computación' },
  'premios.a3.titulo': { pt: 'Destaque em Inclusão e Diversidade',      en: 'Inclusion and Diversity Highlight',  es: 'Destacado en Inclusión y Diversidad' },
  'premios.a3.sub':    { pt: 'Evento regional de computação',           en: 'Regional computing event',          es: 'Evento regional de computación' },

  /* ---- CONTATO ---- */
  'contato.tag':   { pt: '<contato />', en: '<contact />', es: '<contacto />' },
  'contato.h2':    { pt: 'Fale com a gente', en: 'Get in touch', es: 'Contáctanos' },
  'contato.lead':  {
    pt: 'Quer participar das oficinas, receber o projeto na sua escola, ser voluntária ou apoiar? Conte um pouco sobre você e respondemos por e-mail.',
    en: 'Want to join the workshops, bring the project to your school, volunteer or support us? Tell us a little about yourself and we will reply by e-mail.',
    es: '¿Quieres participar en los talleres, recibir el proyecto en tu escuela, ser voluntaria o apoyarnos? Cuéntanos un poco sobre ti y te responderemos por correo.'
  },
  'contato.nome':         { pt: 'Nome',            en: 'Name',          es: 'Nombre' },
  'contato.email':        { pt: 'E-mail',          en: 'E-mail',        es: 'Correo electrónico' },
  'contato.perfil':       { pt: 'Perfil',          en: 'Profile',       es: 'Perfil' },
  'contato.perfil.sel':   { pt: 'Selecione',       en: 'Select',        es: 'Seleccione' },
  'contato.perfil.o1':    { pt: 'Estudante',       en: 'Student',       es: 'Estudiante' },
  'contato.perfil.o2':    { pt: 'Escola ou professora', en: 'School or teacher', es: 'Escuela o profesora' },
  'contato.perfil.o3':    { pt: 'Voluntária',      en: 'Volunteer',     es: 'Voluntaria' },
  'contato.perfil.o4':    { pt: 'Patrocinador',    en: 'Sponsor',       es: 'Patrocinador' },
  'contato.local':        { pt: 'Cidade ou escola', en: 'City or school', es: 'Ciudad o escuela' },
  'contato.local.opt':    { pt: '(opcional)',      en: '(optional)',    es: '(opcional)' },
  'contato.msg':          { pt: 'Mensagem',        en: 'Message',       es: 'Mensaje' },
  'contato.consent':      {
    pt: 'Concordo que o projeto use estes dados apenas para responder meu contato. Se eu for menor de idade, tenho ciência de um responsável.',
    en: 'I agree that the project uses this data only to reply to my contact. If I am a minor, I acknowledge a guardian is aware.',
    es: 'Acepto que el proyecto use estos datos solo para responder mi contacto. Si soy menor de edad, un responsable está al tanto.'
  },
  'contato.btn':          { pt: 'Enviar mensagem', en: 'Send message',  es: 'Enviar mensaje' },
  'contato.ok':           { pt: 'Mensagem enviada! Entraremos em contato em breve.', en: 'Message sent! We will get in touch soon.', es: '¡Mensaje enviado! Nos pondremos en contacto pronto.' },
  'contato.fail':         { pt: 'Não foi possível enviar. Tente novamente ou escreva para o e-mail do rodapé.', en: 'Could not send. Please try again or email us directly.', es: 'No se pudo enviar. Intenta de nuevo o escríbenos al correo del pie de página.' },
  'contato.err.nome':     { pt: 'Informe seu nome.',       en: 'Please enter your name.',       es: 'Por favor ingresa tu nombre.' },
  'contato.err.email':    { pt: 'Informe um e-mail válido.', en: 'Please enter a valid e-mail.', es: 'Por favor ingresa un correo válido.' },
  'contato.err.perfil':   { pt: 'Escolha um perfil.',      en: 'Please choose a profile.',      es: 'Por favor elige un perfil.' },
  'contato.err.msg':      { pt: 'Escreva sua mensagem.',   en: 'Please write your message.',    es: 'Por favor escribe tu mensaje.' },
  'contato.err.consent':  { pt: 'Marque a caixa para concordar.', en: 'Please check the box to agree.', es: 'Por favor marca la casilla para aceptar.' },

  /* ---- PATROCINADORES ---- */
  'apoio.tag':   { pt: '<apoio />', en: '<support />', es: '<apoyo />' },
  'apoio.h2':    { pt: 'Apoio e Parceiros',     en: 'Support & Partners',     es: 'Apoyo y Socios' },
  'apoio.lead':  {
    pt: 'Instituições e iniciativas parceiras que apoiam e fortalecem as ações do Meninas Digitais UFSC.',
    en: 'Partner institutions and initiatives that support and strengthen the Meninas Digitais UFSC program.',
    es: 'Instituciones e iniciativas asociadas que apoyan y fortalecen las acciones del Meninas Digitais UFSC.'
  },

  /* ---- RODAPÉ ---- */
  'footer.sobre':    { pt: 'Projeto de extensão da Universidade Federal de Santa Catarina, parceiro do programa Meninas Digitais da SBC.', en: 'Extension project of the Federal University of Santa Catarina, partner of the Meninas Digitais SBC program.', es: 'Proyecto de extensión de la Universidad Federal de Santa Catarina, socio del programa Meninas Digitais de la SBC.' },
  'footer.links':    { pt: 'Links úteis',  en: 'Useful links', es: 'Enlaces útiles' },
  'footer.contato':  { pt: 'Contato',      en: 'Contact',      es: 'Contacto' },
  'footer.link.participar': { pt: 'Como participar', en: 'How to join', es: 'Cómo participar' },
};
