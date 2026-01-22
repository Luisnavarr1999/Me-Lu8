import './style.css'

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

document.querySelector('#app').innerHTML = `
  <div class="intro-screen" id="intro-screen" aria-hidden="true">
    <div class="intro-content">
      <p class="intro-greeting">¡Bienvenido!</p>
      <h1 class="intro-title">Soy LU8</h1>
      <p class="intro-subtitle">Gracias por visitar</p>
    </div>
  </div>

  <div class="layout">
    <aside class="sidebar">
      <!-- BRAND (erizo + LU8 centrados) -->
      <div class="brand">
        <img
          class="brand-hedgehog"
          src="${withBase('hedgehog/hedgehog_intro.png')}"
          alt="Erizo"
          loading="lazy"
        />
        <span class="brand-text">LU8</span>
      </div>

      <nav class="nav">
        <a href="#home">inicio</a>
        <a href="#about">acerca de mi</a>
        <a href="#skills">habilidades</a>
        <a href="#projects">proyectos</a>
        <a href="#contact">contactame</a>
      </nav>

      <div class="social">
        <a class="social-link" href="https://github.com/Luisnavarr1999" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15v3.19c0 .31.21.68.8.56 4.56-1.53 7.85-5.86 7.85-10.97C23.5 5.74 18.27.5 12 .5z"/>
          </svg>
          GitHub
        </a>

        <a class="social-link" href="https://www.linkedin.com/in/luis-navarrete-7222013a2/" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </aside>

    <main class="content">
      <!-- HOME (hero centrado) -->
      <section class="hero-section" id="home" aria-labelledby="intro-title">

        <!-- ERIZO (solo en HOME) -->
        <button class="hedgehog" id="hedgehog" type="button" aria-label="Erizo">
          <img id="hedgehogImg" src="${withBase('hedgehog/hedgehog_idle.png')}" alt="Erizo" />
        </button>

        <div class="hero-card">
          <h1 id="intro-title">Hola, soy Luis <span aria-hidden="true">👋</span></h1>
          <p class="subtitle">Estudiante de Ingeniería en Informática</p>
          <span class="accent"></span>
        </div>
      </section>

      <!-- Secciones (solo visibles cuando se activan) -->
      <section id="about" class="section-card">
        <h2>Acerca de mi</h2>
        <p>
          Soy estudiante de Ingeniería en Informática apasionado por crear experiencias digitales claras y modernas.
        </p>
      </section>

      <section id="skills" class="section-card">
        <h2>Habilidades</h2>
        <ul>
          <li>Python, Django y desarrollo backend.</li>
          <li>JavaScript, HTML y CSS para interfaces atractivas.</li>
          <li>SQL y fundamentos de bases de datos.</li>
        </ul>
      </section>

      <section id="projects" class="section-card projects-section">
        <h2>Proyectos</h2>
        <p class="projects-subtitle">Una selección de trabajos recientes y soluciones que he construido.</p>

        <div class="projects-grid" id="projectsGrid"></div>

        <!-- Modal -->
        <div class="modal" id="projectModal" aria-hidden="true">
          <div class="modal-backdrop" data-close="true"></div>

          <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            <button class="modal-close" id="modalClose" aria-label="Cerrar">×</button>

            <div class="modal-header">
              <h3 id="modalTitle" class="modal-title"></h3>
            </div>

            <div class="modal-body">
              <div class="modal-media">
                <button class="carousel-btn prev" id="carouselPrev" aria-label="Anterior">‹</button>
                <img class="modal-image" id="modalImage" alt="" />
                <button class="carousel-btn next" id="carouselNext" aria-label="Siguiente">›</button>
              </div>

              <div class="modal-content">
                <h4 class="modal-section-title">Sobre el proyecto</h4>
                <p class="modal-desc" id="modalDesc"></p>

                <h4 class="modal-section-title">Tecnologías</h4>
                <div class="tag-row" id="modalTags"></div>

                <div class="modal-actions">
                  <a class="btn-primary" id="modalLink" href="#" target="_blank" rel="noreferrer">Ver proyecto</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section-card">
        <h2>Contactame</h2>
        <p>
          ¿Quieres colaborar? Escríbeme por LinkedIn o revisa mi GitHub para ver más de mi trabajo.
        </p>
      </section>
    </main>
  </div>
`

// Intro screen (tu código, intacto)
const introScreen = document.querySelector('#intro-screen')

if (introScreen) {
  setTimeout(() => {
    introScreen.classList.add('intro-screen--hide')
  }, 2200)

  introScreen.addEventListener(
    'transitionend',
    () => {
      introScreen.remove()
    },
    { once: true },
  )
}

// ===== Navegación por "vistas" (home vs secciones) =====
const heroSection = document.querySelector('.hero-section')
const navLinks = document.querySelectorAll('.nav a')
const sections = document.querySelectorAll('.section-card')

// Erizo refs
const hedgehogBtn = document.getElementById('hedgehog')
const hedgehogImg = document.getElementById('hedgehogImg')
let hedgehogRunning = false

function resetHedgehog() {
  hedgehogRunning = false
  hedgehogBtn.classList.remove('run')
  hedgehogImg.src = withBase('hedgehog/hedgehog_idle.png')
}

function showHedgehogIfHome(hash) {
  const isHome = !hash || hash === '#home'
  hedgehogBtn.style.display = isHome ? 'block' : 'none'
  if (!isHome) resetHedgehog()
}

function showHome() {
  heroSection.style.display = 'flex'
  sections.forEach((s) => s.classList.remove('is-active'))
  showHedgehogIfHome('#home')
}

function showSection(id) {
  heroSection.style.display = 'none'
  sections.forEach((s) => s.classList.remove('is-active'))
  const target = document.querySelector(id)
  if (target) target.classList.add('is-active')
  showHedgehogIfHome(id)
}

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href')
    if (!href || !href.startsWith('#')) return

    e.preventDefault()
    history.pushState(null, '', href)

    if (href === '#home') showHome()
    else showSection(href)
  })
})

// Soporta back/forward del navegador
window.addEventListener('popstate', () => {
  const hash = location.hash || '#home'
  if (hash === '#home') showHome()
  else showSection(hash)
})

// Estado inicial al cargar
const initialHash = location.hash || '#home'
if (initialHash === '#home') showHome()
else showSection(initialHash)

// ===== Erizo (click => gif + sale corriendo) =====
hedgehogBtn.addEventListener('click', () => {
  if (hedgehogRunning) return
  hedgehogRunning = true

  hedgehogImg.src = withBase('hedgehog/hedgehog_run.gif')

  // Reiniciar animación si lo clickeas luego otra vez
  hedgehogBtn.classList.remove('run')
  void hedgehogBtn.offsetWidth
  hedgehogBtn.classList.add('run')
})

hedgehogBtn.addEventListener('animationend', resetHedgehog)


// ====== Proyectos (grid + modal) ======
const projects = [
  {
    title: 'Veterinaria de Arce',
    desc: 'plataforma web para la gestión y digitalización de clínicas veterinarias.',
    longDesc:
      'Vet de Arce es un sistema web que centraliza la gestión de una clínica veterinaria, permitiendo administrar citas, información clínica y procesos internos de forma digital, mejorando la organización y eficiencia del servicio.',
    tags: ['Python', 'Django', 'Html','Css','MYSQL'],
    cover: withBase('projects/Vet_Arce/Vet_portada.png'),
    images: [
      withBase('projects/Vet_Arce/Vet_inicio.png'),  
      withBase('projects/Vet_Arce/Vet_panel.png'),
      withBase('projects/Vet_Arce/Vet_panel2.png'),
    ],
    link: 'https://veterinariaarce.pythonanywhere.com'
  },
  {
    title: 'Nini Atelier',
    desc: 'página web tipo catálogo para mostrar trabajos de uñas y facilitar el contacto.',
    longDesc: 'Nini Atelier es una página web creada como catálogo digital, donde se exhiben trabajos de manicure, esmaltado y diseños, junto con información de contacto para facilitar la comunicación con clientes.',
    tags: ['HTML', 'CSS', 'JavaScript','Bootstrap 5'],
    cover: withBase('projects/Nini_atelier/Nini_portada.png'),
    images: [withBase('projects/Nini_atelier/nini1.png'), withBase('projects/Nini_atelier/nini2.png')],
    link: ''
  },
]

// Render del grid
const projectsGrid = document.getElementById('projectsGrid')

function tagChip(text) {
  return `<span class="tag">${text}</span>`
}

function renderProjects() {
  if (!projectsGrid) return

  projectsGrid.innerHTML = projects
    .map(
      (p, i) => `
      <article class="project-card" data-index="${i}" tabindex="0" role="button" aria-label="Ver detalles de ${p.title}">
        <div class="project-media">
          <img src="${p.cover}" alt="Imagen de ${p.title}" loading="lazy" />
        </div>
        <div class="project-info">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="tag-row">
            ${p.tags.slice(0, 3).map(tagChip).join('')}
            ${p.tags.length > 3 ? `<span class="tag tag-muted">+${p.tags.length - 3}</span>` : ''}
          </div>
        </div>
      </article>
    `,
    )
    .join('')
}

renderProjects()

// Modal logic
const modal = document.getElementById('projectModal')
const modalClose = document.getElementById('modalClose')
const modalTitle = document.getElementById('modalTitle')
const modalDesc = document.getElementById('modalDesc')
const modalTags = document.getElementById('modalTags')
const modalImage = document.getElementById('modalImage')
const modalLink = document.getElementById('modalLink')
const carouselPrev = document.getElementById('carouselPrev')
const carouselNext = document.getElementById('carouselNext')

let activeProjectIndex = 0
let activeImageIndex = 0

function openModal(projectIndex) {
  activeProjectIndex = projectIndex
  activeImageIndex = 0

  const p = projects[projectIndex]
  modalTitle.textContent = p.title
  modalDesc.textContent = p.longDesc || p.desc

  modalTags.innerHTML = p.tags.map(tagChip).join('')

  // Link
  if (p.link) {
    modalLink.style.display = 'inline-flex'
    modalLink.href = p.link
  } else {
    modalLink.style.display = 'none'
    modalLink.href = '#'
  }

  setModalImage()

  modal.classList.add('is-open')
  modal.setAttribute('aria-hidden', 'false')
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  modal.classList.remove('is-open')
  modal.setAttribute('aria-hidden', 'true')
  document.body.style.overflow = ''
}

function setModalImage() {
  const p = projects[activeProjectIndex]
  const imgs = p.images?.length ? p.images : [p.cover]
  const src = imgs[activeImageIndex] || imgs[0]
  modalImage.src = src
  modalImage.alt = `Captura ${activeImageIndex + 1} de ${p.title}`

  carouselPrev.disabled = imgs.length <= 1
  carouselNext.disabled = imgs.length <= 1
}

function nextImage() {
  const p = projects[activeProjectIndex]
  const imgs = p.images?.length ? p.images : [p.cover]
  activeImageIndex = (activeImageIndex + 1) % imgs.length
  setModalImage()
}

function prevImage() {
  const p = projects[activeProjectIndex]
  const imgs = p.images?.length ? p.images : [p.cover]
  activeImageIndex = (activeImageIndex - 1 + imgs.length) % imgs.length
  setModalImage()
}

// Abrir modal desde card (click + enter)
projectsGrid?.addEventListener('click', (e) => {
  const card = e.target.closest('.project-card')
  if (!card) return
  openModal(Number(card.dataset.index))
})

projectsGrid?.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return
  const card = e.target.closest('.project-card')
  if (!card) return
  openModal(Number(card.dataset.index))
})

// Cerrar modal
modal?.addEventListener('click', (e) => {
  if (e.target?.dataset?.close === 'true') closeModal()
})

modalClose?.addEventListener('click', closeModal)

window.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('is-open')) return
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
})

carouselNext?.addEventListener('click', nextImage)
carouselPrev?.addEventListener('click', prevImage)
