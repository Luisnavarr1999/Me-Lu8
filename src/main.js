import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="intro-screen" aria-hidden="true">
    <span class="intro-name">Lucho</span>
    <span class="intro-greeting">Hola, soy Lucho 👋</span>
  </div>

  <main class="container content">
    <header class="card projects-header">
      <div class="projects-heading">
        <p class="eyebrow">Proyectos</p>
        <h2>Mis trabajos más recientes</h2>
        <p class="subtitle">Una selección rápida de lo que estoy construyendo.</p>
      </div>

      <ul class="project-list">
        <li class="project-card">
          <img src="/project-vet.svg" alt="Proyecto Vet Arce Manager" class="project-image" />
          <div>
            <h3>Vet Arce Manager</h3>
            <p>Sistema web veterinario para gestionar pacientes, citas y reportes.</p>
            <div class="project-tags">
              <span>Python</span>
              <span>Django</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </li>
        <li class="project-card">
          <img src="/project-api.svg" alt="Proyecto Inventario API" class="project-image" />
          <div>
            <h3>Inventario API</h3>
            <p>API REST con Django para practicar autenticación, CRUD y documentación.</p>
            <div class="project-tags">
              <span>Django REST</span>
              <span>JWT</span>
              <span>SQLite</span>
            </div>
          </div>
        </li>
      </ul>
    </header>

    <header class="card hero">
      <h1>Hola, soy Lucho 👋</h1>
      <p class="subtitle">Estudiante de Ingeniería en Informática</p>

      <div class="links">
        <a class="btn github" href="https://github.com/Luisnavarr1999" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15v3.19c0 .31.21.68.8.56 4.56-1.53 7.85-5.86 7.85-10.97C23.5 5.74 18.27.5 12 .5z"/>
          </svg>
          GitHub
        </a>

        <a class="btn linkedin" href="https://www.linkedin.com/in/luis-navarrete-7222013a2/" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </header>

    <section class="card">
      <h2>Sobre mí</h2>
      <p>
        Me interesa el "por agregar". 
        Estoy aprendiendo Python, Django, JavaScript y sql.
      </p>
    </section>

    <section class="card">
      <h2>Tecnologías</h2>
      <ul>
        <li>Python</li>
        <li>Django</li>
        <li>HTML & CSS</li>
        <li>JavaScript (Aprendiendo)</li>
        <li>Slq</li>
        <li>Mysql</li>
        <li>sqlite</li>
        <li>Git & GitHub</li>
      </ul>
    </section>

    <footer class="card">
      <p>📫 Contacto: luisnavarr1999@gmail.com </p>
    </footer>
  </main>
`
