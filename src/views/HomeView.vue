<template>
  <main>

    <!-- HERO -->
    <section class="hero">
      <div class="hero__inner">
        <div class="hero__content">
          <h1 class="hero__title">Tu sonrisa lo dice todo y nosotros la cuidamos</h1>
          <p class="hero__subtitle">
            Atención odontológica especializada para niños y adultos en Huánuco.
            Profesionales capacitados y tecnología moderna para que sonrías con confianza.
          </p>
          <div class="hero__actions">
            <a :href="whatsappUrl" target="_blank" class="hero__btn--primary">
              <i class="bi bi-whatsapp"></i> Agendar cita
            </a>
            <a href="/nosotros" class="hero__btn--secondary">Nuestra historia</a>
          </div>
          <ul class="hero__benefits">
            <li><i class="bi bi-check-lg"></i> Diagnóstico Personalizado</li>
            <li><i class="bi bi-check-lg"></i> Ambiente Seguro y Cómodo</li>
            <li><i class="bi bi-check-lg"></i> Ubicación Céntrica en Huánuco</li>
            <li><i class="bi bi-check-lg"></i> Atención Profesional sin Dolor</li>
          </ul>
          <p class="hero__location-tag">
            <i class="bi bi-geo-alt-fill"></i> Cuidando la salud bucal de las familias huanuqueñas
          </p>
        </div>
        <div class="hero__img-right">
          <img src="@/assets/images/hero-clinica.jpg" alt="Clínica San Martín" />
        </div>
      </div>
    </section>

    <!-- SEGMENTACIÓN -->
    <section class="segmento">
      <div class="container">
        <h2 class="segmento__title">¿Para quién es nuestra atención?</h2>
        <p class="segmento__sub">Cada sonrisa tiene una historia única. Por eso creamos experiencias distintas para los más pequeños y para quienes buscan recuperar su confianza al sonreír.</p>
        <div class="segmento__cards">
          <div class="scard scard--kids">
            <div class="scard__content">
              <span class="scard__badge"><img src="@/assets/images/diente-icono.png" alt="Diente" class="custom-icon"> Para niños</span>
              <h3>Odontología para los más pequeños</h3>
              <p>Hacemos que cada visita sea tranquila y divertida, con atención especializada para los más pequeños.</p>
              <ul class="scard__list">
                <li><i class="bi bi-check-lg"></i> Odontopediatría especializada</li>
                <li><i class="bi bi-check-lg"></i> Ambiente 100% amigable</li>
                <li><i class="bi bi-check-lg"></i> Prevención desde temprana edad</li>
              </ul>
              <RouterLink to="/servicios/infantil" class="scard__link">
                Ver más <i class="bi bi-arrow-right"></i>
              </RouterLink>
            </div>
            <div class="scard__img">
              <img src="@/assets/images/nino.png" alt="Niño" class="niño-img" />
            </div>
          </div>
          <div class="scard scard--adult">
            <div class="scard__content">
              <span class="scard__badge"><img src="@/assets/images/diente-icono.png" alt="Diente" class="custom-icon"> Para adultos</span>
              <h3>Vuelve a sonreír con tranquilidad</h3>
              <p>Atención clara, profesional y personalizada para cuidar tu sonrisa con confianza.</p>
              <ul class="scard__list">
                <li><i class="bi bi-check-lg"></i> Ortodoncia e implantes</li>
                <li><i class="bi bi-check-lg"></i> Blanqueamiento y estética</li>
                <li><i class="bi bi-check-lg"></i> Diagnóstico personalizado</li>
              </ul>
              <RouterLink to="/servicios/adultos" class="scard__link">
                Ver más <i class="bi bi-arrow-right"></i>
              </RouterLink>
            </div>
            <div class="scard__img">
              <img src="@/assets/images/adulto.png" alt="Adulto" class="adulto-img" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESO -->
    <section class="proceso">
      <div class="container">
        <div class="proceso__header">
          <h2>¿Cómo es el proceso de atención?</h2>
          <p>Te acompañamos en cada etapa para brindarte una atención segura, profesional y personalizada.</p>
        </div>
        <div class="proceso__cards">
          <div class="proceso__card" v-for="(s, i) in pasos" :key="s.titulo">
            <div class="proceso__num">0{{ i + 1 }}</div>
            <div class="step-icon-wrapper">
              <img :src="s.imagen" :alt="s.titulo" class="step-icon" />
            </div>
            <h3>{{ s.titulo }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
        <div class="cta-proceso">
          <div class="cta-proceso__content">
            <h3>¿Listo para cuidar tu sonrisa?</h3>
            <p class="cta-proceso__text">Tu nueva sonrisa puede comenzar hoy. Estamos listos para encontrar el tratamiento ideal para ti.</p>
          </div>
          <a :href="whatsappUrl" target="_blank" class="cta-proceso__btn">
            <i class="bi bi-whatsapp"></i> Solicitar información
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq">
      <div class="container faq__inner">
        <div class="faq__image">
          <img src="@/assets/images/consulta-odontologica.png" alt="Clínica Dental San Martín" />
        </div>
        <div class="faq__content">
          <span class="faq__tag">Preguntas Frecuentes</span>
          <h2 class="faq__title">Resolvemos tus dudas antes de tu cita</h2>
          <div class="faq__item" v-for="(item, i) in faqs" :key="i">
            <button class="faq__question" @click="item.open = !item.open">
              <span>{{ item.pregunta }}</span>
              <i class="bi" :class="item.open ? 'bi-dash-circle' : 'bi-plus-circle'"></i>
            </button>
            <transition name="faq-slide">
              <div v-if="item.open" class="faq__answer">{{ item.respuesta }}</div>
            </transition>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import agendaIcon   from '@/assets/images/diente-agenda.png'
import escuchaIcon  from '@/assets/images/diente-escuchando.png'
import sonrisaIcon  from '@/assets/images/diente-sonrisa.png'

const whatsappUrl = 'https://wa.me/51934423066'

const pasos = [
  { imagen: agendaIcon,  titulo: 'Agenda tu cita',             desc: 'Contáctanos por WhatsApp o teléfono y elige el horario que mejor se adapte a ti.' },
  { imagen: escuchaIcon, titulo: 'Te escuchamos y evaluamos',  desc: 'Examinamos tu salud bucal y te explicamos cada opción de tratamiento.' },
  { imagen: sonrisaIcon, titulo: 'Transforma tu sonrisa',      desc: 'Iniciamos tu tratamiento para ayudarte a lograr los resultados que deseas.' },
]

const faqs = ref([
  { pregunta: '¿Cómo agendo mi cita?',            respuesta: 'Contáctanos por WhatsApp o teléfono y programa tu atención en el horario que mejor se adapte a ti.', open: false },
  { pregunta: '¿Qué sucede en la primera consulta?', respuesta: 'Realizamos una evaluación completa para conocer el estado de tu salud bucal.', open: false },
  { pregunta: '¿Recibiré un diagnóstico?',         respuesta: 'Sí. Te explicaremos los hallazgos y las opciones de tratamiento más adecuadas para ti.', open: false },
  { pregunta: '¿Cuándo inicio mi tratamiento?',    respuesta: 'Una vez aprobado el plan, podrás comenzar tu tratamiento con el acompañamiento de nuestros especialistas.', open: false },
  { pregunta: '¿Cuál es el resultado?',            respuesta: 'Una sonrisa más saludable, funcional y estética para mejorar tu bienestar y confianza.', open: false },
])
</script>

<style scoped>
/* ============================================================
   HERO
============================================================ */
.hero {
  background: #134e86;
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: stretch;
  margin-top: calc(-1 * var(--navbar-height));
  padding-top: var(--navbar-height);
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  max-width: 100%;
  min-height: 90vh;
}

.hero__content {
  padding: 6rem 3rem 4rem 4rem;
  max-width: 640px;
  margin-left: max(4rem, calc((100vw - 1400px) / 2));
}

.hero__title {
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 1.15rem;
  letter-spacing: -1px;
  transform: translateY(-2rem);
}

.hero__subtitle {
  color: rgba(255,255,255,0.8);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 420px;
}

.hero__actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.hero__btn--primary,
.hero__btn--secondary {
  padding: 0.7rem 2rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.2s;
  min-width: 180px;
  justify-content: center;
}

.hero__btn--primary {
  background: #80e89b;
  color: #134e86;
  border: 1px solid rgba(255,255,255,0.45);
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.45),
              inset 0 -2px 4px rgba(0,0,0,0.05),
              0 6px 20px rgba(0,0,0,0.10);
}

.hero__btn--primary:hover {
  background: #6add89;
  transform: translateY(-2px);
}

.hero__btn--secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.hero__btn--secondary:hover {
  background: rgba(255,255,255,0.1);
}

.hero__benefits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

.hero__benefits li {
  display: flex;
  align-items: center;
  gap: 6px;
}

.hero__benefits li i { color: #80e89b; font-weight: 700; }

.hero__location-tag {
  font-weight: 700;
  color: #80e89b;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2rem;
}

.hero__img-right {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 560px;
  overflow: hidden;
}

.hero__img-right::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 200px;
  height: 100%;
  background: linear-gradient(to right, #134e86, transparent);
  z-index: 1;
}

.hero__img-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

/* ============================================================
   SEGMENTACIÓN
============================================================ */
.segmento {
  background: #fffbf2;
  padding: 5rem 0 6rem; 
}

.segmento__title {
  font-weight: 900;
  color: #134e86;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  text-align: center;
}

.segmento__sub {
  color: #134e86;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 760px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.segmento__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.scard {
  position: relative;
  min-height: 320px;
  padding: 2.5rem;
  border-radius: 20px 60px 20px 20px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  transition: transform 0.3s ease;
}

.scard:hover { transform: translateY(-5px); }
.scard--kids  { background: #498cd0; }
.scard--adult { background: #134e86; }

.scard__content {
  width: 75%;
  z-index: 2;
  position: relative;
  color: #fff;
}

.scard__badge {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 100%);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.30);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08),
              inset 0 1px 1px rgba(255,255,255,0.6),
              inset 0 -1px 1px rgba(255,255,255,0.15);
  color: #fff;
  font-weight: 800;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  white-space: nowrap;
}

.scard__content h3 {
  font-weight: 800;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.scard__content p {
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 1.25rem;
}

.scard__list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}

.scard__list li {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.85);
}

.scard__list li i { color: #80e89b; flex-shrink: 0; }

.scard__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #80e89b;
  color: #134e86;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.2s;
}

.scard__link:hover {
  background: #6add89;
  transform: translateX(4px);
}

.scard__img {
  position: absolute;
  right: 0; bottom: 0;
  width: 45%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

.scard__img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom right;
}

.adulto-img {
  transform: scale(1.23);
  transform-origin: bottom left;
}

/* ============================================================
   PROCESO
============================================================ */
.proceso {
  background: #8ec5ff;
  padding: 5rem 0;
}

.proceso__header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2.5rem;
}

.proceso__header h2 {
  font-weight: 900;
  color: #134e86;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.proceso__header p {
  color: #134e86;
  line-height: 1.7;
}

.proceso__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.proceso__card {
  background: #f4f1eb;
  border-radius: 30px;
  border: 1px solid rgba(255,255,255,0.7);
  box-shadow: 0 15px 35px rgba(0,0,0,0.06),
              inset 0 1px 1px rgba(255,255,255,0.9),
              inset 0 -1px 1px rgba(255,255,255,0.4);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.proceso__card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(32,95,165,0.12);
}

.proceso__num {
  position: absolute;
  top: 1.25rem; left: 1.25rem;
  font-size: 2.8rem;
  font-weight: 800;
  color: #80e89b;
  line-height: 1;
}

.proceso__card h3 {
  font-weight: 800;
  color: #134e86;
  margin-bottom: 0.75rem;
  text-align: center;
}

.proceso__card p {
  color: #134e86;
  line-height: 1.7;
  text-align: center;
}

.step-icon {
  width: 190px;
  height: auto;
  display: block;
  margin: 0 auto 1.25rem;
  filter: drop-shadow(0 12px 24px rgba(32,95,165,0.12))
          drop-shadow(0 4px 10px rgba(255,255,255,0.15));
  transition: transform 0.3s;
}

.proceso__card:hover .step-icon { transform: scale(1.05); }

.cta-proceso {
  margin: 2.5rem 0 0;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  background: linear-gradient(135deg, #1f568f, #134e86);
  border-radius: 24px;
  box-shadow: 0 12px 30px rgba(19,78,134,0.12);
}

.cta-proceso__content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.cta-proceso h3 {
  min-width: 280px;
  margin: 0;
  color: #fff;
  font-weight: 700;
  line-height: 1.15;
}

.cta-proceso__text {
  max-width: 420px;
  margin: 0;
  color: rgba(255,255,255,0.9);
  line-height: 1.6;
}

.cta-proceso__btn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  background: #80e89b;
  color: #134e86;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.45);
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.45),
              inset 0 -2px 4px rgba(0,0,0,0.05),
              0 6px 20px rgba(0,0,0,0.10);
  position: relative;
  overflow: hidden;
  animation: pulse-glow 3s infinite ease-in-out;
}

@keyframes pulse-glow {
  0% {
    transform: scale(1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);
  }
  50% {
    transform: scale(1.03); /* Se agranda un 3% */
    box-shadow: 0 8px 25px rgba(128, 232, 155, 0.4); /* Resplandor verde */
  }
  100% {
    transform: scale(1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10);
  }
}

.cta-proceso__btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(128,232,155,0.4);
}

/* ============================================================
   FAQ
============================================================ */
.faq {
  background: #0d4d8b;
  padding: 5rem 0;
}

.faq__inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: start;
}

.faq__image img {
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
  object-position: top;
  max-height: 410px;
  display: block;
}

.faq__tag {
  display: inline-block;
  color: #80e89b;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.faq__title {
  font-weight: 900;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
}

.faq__item { margin-bottom: 0.75rem; }

.faq__question {
  width: 100%;
  background: transparent;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 999px;
  padding: 0.875rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  gap: 1rem;
  font-family: inherit;
}

.faq__question:hover {
  background: rgba(255,255,255,0.08);
  border-color: #fff;
}

.faq__answer {
  margin-top: 0.5rem;
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  background: rgba(255,255,255,0.08);
  color: #d7e9ff;
  line-height: 1.7;
}

.faq-slide-enter-active,
.faq-slide-leave-active { transition: all 0.25s ease; }
.faq-slide-enter-from,
.faq-slide-leave-to { opacity: 0; transform: translateY(-8px); }

/* ============================================================
   RESPONSIVE
============================================================ */
@media (max-width: 1024px) {
  .hero__content { padding: 4rem 2rem; margin-left: 0; }
  .hero__title   { font-size: 2.25rem; }
  .faq__inner    { grid-template-columns: 1fr 1fr; gap: 2rem; }
  .cta-proceso   { flex-direction: column; text-align: center; gap: 1.5rem; }
  .cta-proceso__content { flex-direction: column; align-items: center; gap: 0.5rem; }
  .cta-proceso h3 { min-width: auto; }
}

@media (max-width: 768px) {
  .hero__inner           { grid-template-columns: 1fr; min-height: auto; }
  .hero__img-right       { display: none; }
  .hero__title           { font-size: 1.85rem; }
  .hero__content         { padding: 3rem 1.5rem; margin-left: 0; max-width: 100%; }
  .hero__actions         { flex-direction: column; align-items: stretch; }
  .hero__btn--primary,
  .hero__btn--secondary  { width: 100%; justify-content: center; }
  .hero__benefits        { grid-template-columns: 1fr; }
  .segmento__cards       { grid-template-columns: 1fr; }
  .segmento__title       { font-size: 1.75rem; }
  .proceso__cards        { grid-template-columns: 1fr; }
  .faq__inner            { grid-template-columns: 1fr; }
  .faq__image            { display: none; }
}

/* ============================================================
   TIPOGRAFÍA
============================================================ */
.hero__title             { font-size: var(--text-hero-title); }
.hero__subtitle          { font-size: var(--text-body-lg); }
.hero__benefits          { font-size: var(--text-small); }
.hero__location-tag      { font-size: var(--text-small); }
.hero__btn--primary,
.hero__btn--secondary    { font-size: var(--text-btn); }
.scard__badge            { font-size: var(--text-badge); }
.scard__content h3       { font-size: var(--text-card-title); }
.scard__content p        { font-size: var(--text-body); }
.scard__list li          { font-size: var(--text-small); }
.scard__link             { font-size: var(--text-small); }
.segmento__title         { font-size: var(--text-section-title); }
.segmento__sub           { font-size: var(--text-body); }
.proceso__header h2      { font-size: var(--text-section-title); }
.proceso__header p       { font-size: var(--text-body); }
.proceso__card h3        { font-size: var(--text-card-title); }
.proceso__card p         { font-size: var(--text-body); }
.cta-proceso h3          { font-size: var(--text-section-title); }
.cta-proceso__text       { font-size: var(--text-body); }
.cta-proceso__btn        { font-size: var(--text-body); }
.faq__tag                { font-size: var(--text-badge); }
.faq__title              { font-size: var(--text-section-title); }
.faq__question           { font-size: var(--text-body); }
.faq__answer             { font-size: var(--text-body); }
</style>