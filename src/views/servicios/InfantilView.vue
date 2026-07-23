<template>
  <main class="infantil">

    <!-- HERO -->
    <section class="hero-inf">
      <div class="hero-inf__inner">
        <div class="hero-inf__content">
          <span class="hero-inf__badge">
            <i class="bi bi-stars"></i> Atención Infantil
          </span>
          <h1>Cuidamos la sonrisa de tus <em>pequeños</em></h1>
          <p>Hacemos que cada visita sea una experiencia divertida y sin miedo. Especialistas en odontopediatría con amor y paciencia.</p>
          <a :href="whatsappUrl" target="_blank" class="hero-inf__btn">
            <i class="bi bi-whatsapp"></i> Agendar cita infantil
          </a>
          <div class="hero-inf__checks">
            <span><i class="bi bi-check2-circle"></i> Sin dolor</span>
            <span><i class="bi bi-check2-circle"></i> Ambiente divertido</span>
            <span><i class="bi bi-check2-circle"></i> Especialistas certificados</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 1. DIAGNÓSTICO -->
    <section class="diagnostico">
      <div class="container diagnostico__inner">
        <div class="diagnostico__content">
          <span class="sec__tag">
            <i class="bi bi-search-heart"></i> Proceso
          </span>
          <h2>¿Cómo es el diagnóstico?</h2>
          <p>Evaluamos a tu hijo con cuidado y paciencia en cada etapa para asegurarnos de darle la mejor atención.</p>
          <div class="diag__steps">
            <div class="diag__step" v-for="(s, i) in pasos" :key="i">
              <div class="diag__num">{{ String(i + 1).padStart(2, '0') }}</div>
              <div class="diag__text">
                <h4>{{ s.titulo }}</h4>
                <p>{{ s.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="diagnostico__img">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffbb5e2294d?w=700&q=80"
            alt="Diagnóstico infantil"
          />
          <div class="diag__badge">
            <span class="diag__badge-icon">🦷</span>
            <div>
              <strong>100% sin dolor</strong>
              <span>Técnica adaptada a niños</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. ENFERMEDADES — slider horizontal -->
    <section class="enfermedades">
      <div class="container">
        <div class="enf__header">
          <div>
            <span class="sec__tag">
              <i class="bi bi-shield-plus"></i> Prevención
            </span>
            <h2>Enfermedades y problemas comunes</h2>
            <p>Lo que podemos detectar y tratar en tus hijos.</p>
          </div>
          <div class="enf__arrows">
            <button class="enf__arrow" @click="scrollEnf(-1)">‹</button>
            <button class="enf__arrow" @click="scrollEnf(1)">›</button>
          </div>
        </div>
        <div class="enf__track" ref="enfTrack">
          <div class="enf__card" v-for="e in enfermedades" :key="e.titulo">
            <div class="enf__img-wrap">
              <img :src="e.imagen" :alt="e.titulo" loading="lazy" />
            </div>
            <div class="enf__body">
              <h3>{{ e.titulo }}</h3>
              <p>{{ e.desc }}</p>
              <button class="enf__btn">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. TRATAMIENTOS — estilo imagen referencia -->
    <section class="tratamientos">
      <div class="container">
        <div class="trat__header">
          <div>
            <span class="sec__tag">
              <i class="bi bi-heart-fill"></i> Soluciones
            </span>
            <h2>Tratamientos para niños</h2>
            <p>Cómo solucionamos cada problema de forma segura y sin dolor.</p>
          </div>
          <div class="trat__arrows">
            <button class="trat__arrow" @click="scrollTrat(-1)">‹</button>
            <button class="trat__arrow" @click="scrollTrat(1)">›</button>
          </div>
        </div>
        <div class="trat__track" ref="tratTrack">
          <div class="trat__card" v-for="t in tratamientos" :key="t.titulo">
            <div class="trat__img-wrap">
              <img :src="t.imagen" :alt="t.titulo" loading="lazy" />
            </div>
            <div class="trat__body">
              <h3>{{ t.titulo }}</h3>
              <p>{{ t.desc }}</p>
              <button
                class="trat__btn"
                @click="() => abrirWA(t.titulo)"
              >
                Consultar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-inf">
      <div class="container cta-inf__inner">
        <div class="cta-inf__emoji">🦷</div>
        <h2>¿Tu hijo necesita atención dental?</h2>
        <p>Agenda su primera cita hoy y recibe una evaluación completamente gratuita.</p>
        <a :href="whatsappUrl" target="_blank" class="cta-inf__btn">
          <i class="bi bi-whatsapp"></i> Reservar cita ahora
        </a>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const whatsappUrl = 'https://wa.me/51934423066'
const enfTrack = ref(null)
const tratTrack = ref(null)

function scrollEnf(dir) {
  enfTrack.value?.scrollBy({ left: dir * 320, behavior: 'smooth' })
}
function scrollTrat(dir) {
  tratTrack.value?.scrollBy({ left: dir * 320, behavior: 'smooth' })
}
function abrirWA(tratamiento) {
  const msg = `Hola, me interesa el tratamiento: ${tratamiento} para mi hijo.`
  window.open(`https://wa.me/51934423066?text=${encodeURIComponent(msg)}`, '_blank')
}

const pasos = [
  { titulo: 'Bienvenida al pequeño paciente',   desc: 'Creamos un ambiente cálido y divertido para que el niño se sienta seguro desde el primer momento.' },
  { titulo: 'Revisión visual completa',          desc: 'Examinamos todos los dientes, encías y tejidos blandos con instrumentos suaves especiales para niños.' },
  { titulo: 'Radiografías si es necesario',      desc: 'Utilizamos radiografías digitales de baja radiación solo cuando son necesarias para un diagnóstico preciso.' },
  { titulo: 'Diagnóstico y plan de tratamiento', desc: 'Explicamos a los padres los hallazgos y presentamos las opciones de tratamiento de forma clara y sencilla.' },
  { titulo: 'Educación en higiene',              desc: 'Enseñamos al niño técnicas de cepillado divertidas para que adopte buenos hábitos desde pequeño.' },
]

const enfermedades = [
  {
    titulo: 'Caries Dental',
    desc: 'La enfermedad más común en niños. Bacterias que producen ácidos que dañan el esmalte dental.',
    imagen: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&q=80',
  },
  {
    titulo: 'Gingivitis',
    desc: 'Inflamación de las encías por acumulación de placa bacteriana. Frecuente en niños con higiene irregular.',
    imagen: 'https://images.unsplash.com/photo-1588776814546-1ffbb5e2294d?w=500&q=80',
  },
  {
    titulo: 'Maloclusión',
    desc: 'Desalineación de dientes o mordida incorrecta. Puede ser causada por hábitos como chuparse el dedo.',
    imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80',
  },
  {
    titulo: 'Bruxismo',
    desc: 'Hábito de rechinar o apretar los dientes durante el sueño. Afecta hasta el 30% de los niños.',
    imagen: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&q=80',
  },
  {
    titulo: 'Hipoplasia del Esmalte',
    desc: 'Desarrollo incompleto del esmalte que deja los dientes más vulnerables a caries y sensibilidad.',
    imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80',
  },
  {
    titulo: 'Absceso Dental',
    desc: 'Infección bacteriana que forma pus. Generalmente consecuencia de una caries no tratada a tiempo.',
    imagen: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=500&q=80',
  },
  {
    titulo: 'Pérdida Dental Temprana',
    desc: 'Pérdida prematura de dientes de leche que puede afectar el desarrollo de los dientes permanentes.',
    imagen: 'https://images.unsplash.com/photo-1598256989361-02f1e2e11a29?w=500&q=80',
  },
  {
    titulo: 'Sensibilidad Dental',
    desc: 'Dolor o molestia al consumir alimentos fríos, calientes o dulces por desgaste del esmalte.',
    imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80',
  },
]

const tratamientos = [
  {
    titulo: 'Limpieza Dental',
    desc: 'Eliminación profesional de placa y sarro con instrumentos suaves adaptados para niños.',
    imagen: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&q=80',
  },
  {
    titulo: 'Fluorización',
    desc: 'Aplicación de flúor para fortalecer el esmalte dental y prevenir la aparición de caries.',
    imagen: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&q=80',
  },
  {
    titulo: 'Sellantes Dentales',
    desc: 'Protección de fosas y fisuras de los molares para evitar la acumulación de bacterias.',
    imagen: 'https://images.unsplash.com/photo-1588776814546-1ffbb5e2294d?w=500&q=80',
  },
  {
    titulo: 'Obturaciones (Resinas)',
    desc: 'Tratamiento de caries con materiales del color del diente, seguros y sin dolor.',
    imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80',
  },
  {
    titulo: 'Pulpotomía',
    desc: 'Tratamiento de nervio en dientes de leche para preservarlos hasta su caída natural.',
    imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80',
  },
  {
    titulo: 'Ortopedia Maxilar',
    desc: 'Corrección temprana de problemas en el desarrollo de la mandíbula y los dientes.',
    imagen: 'https://images.unsplash.com/photo-1598256989361-02f1e2e11a29?w=500&q=80',
  },
  {
    titulo: 'Extracciones',
    desc: 'Extracción de dientes de leche que no caen naturalmente o que causan problemas.',
    imagen: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=500&q=80',
  },
  {
    titulo: 'Mantenedores de Espacio',
    desc: 'Dispositivos que preservan el espacio para los dientes permanentes tras una pérdida temprana.',
    imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80',
  },
]
</script>

<style scoped>
/* ============================================================
   HERO
============================================================ */
.hero-inf {
  background: linear-gradient(135deg, #4fa3d1 0%, #6db8e8 50%, #a8d8f0 100%);
  min-height: 65vh;
  display: flex;
  align-items: center;
  margin-top: calc(-1 * var(--navbar-height));
  padding-top: var(--navbar-height);
  overflow: hidden;
  position: relative;
}

.hero-inf::before,
.hero-inf::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  pointer-events: none;
}
.hero-inf::before {
  width: 400px; height: 400px;
  background: #fff;
  top: -100px; right: 10%;
}
.hero-inf::after {
  width: 200px; height: 200px;
  background: #80e89b;
  bottom: -60px; right: 25%;
}

.hero-inf__inner {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}

.hero-inf__content {
  max-width: 580px;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 3rem 0;
}

.hero-inf__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.3);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.5);
  color: #134e86;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  font-size: var(--text-badge);
}

.hero-inf__content h1 {
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.5px;
  font-size: var(--text-hero-title);
}

.hero-inf__content h1 em { color: #134e86; font-style: italic; }

.hero-inf__content p {
  color: rgba(255,255,255,0.85);
  line-height: 1.8;
  font-size: var(--text-body-lg);
}

.hero-inf__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #80e89b;
  color: #134e86;
  font-weight: 800;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
  width: fit-content;
  font-size: var(--text-body);
}

.hero-inf__btn:hover {
  background: #6add89;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(128,232,155,0.4);
}

.hero-inf__checks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
}

.hero-inf__checks span {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.9);
  font-size: var(--text-small);
  font-weight: 600;
}

.hero-inf__checks i { color: #134e86; }

/* ============================================================
   SHARED
============================================================ */
.sec__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(191,233,255,0.5);
  border: 1px solid #BFE9FF;
  color: #134e86;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  font-size: var(--text-badge);
}

/* ============================================================
   1. DIAGNÓSTICO
============================================================ */
.diagnostico {
  background: #fff;
  padding: 5rem 0;
}

.diagnostico__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.diagnostico__content h2 {
  font-weight: 900;
  color: #134e86;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
  font-size: var(--text-section-title);
}

.diagnostico__content > p {
  color: #6B7280;
  line-height: 1.75;
  margin-bottom: 2rem;
  font-size: var(--text-body);
}

.diag__steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.diag__step {
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
  padding: 1rem 1.25rem;
  background: #f0f9ff;
  border-radius: 16px;
  border-left: 3px solid #BFE9FF;
  transition: all 0.2s;
}

.diag__step:hover {
  border-left-color: #4fa3d1;
  background: #e0f4ff;
}

.diag__num {
  font-size: 1.5rem;
  font-weight: 900;
  color: #BFE9FF;
  line-height: 1;
  flex-shrink: 0;
  min-width: 36px;
}

.diag__text h4 {
  font-weight: 700;
  color: #134e86;
  margin-bottom: 0.25rem;
  font-size: var(--text-card-title);
}

.diag__text p {
  color: #6B7280;
  font-size: var(--text-body);
  line-height: 1.6;
}

.diagnostico__img { position: relative; }

.diagnostico__img img {
  width: 100%;
  border-radius: 24px;
  aspect-ratio: 4/4.5;
  object-fit: cover;
  box-shadow: 0 20px 56px rgba(19,78,134,0.15);
}

.diag__badge {
  position: absolute;
  bottom: 1.5rem;
  left: -1.5rem;
  background: #fff;
  border-radius: 16px;
  padding: 0.85rem 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  border: 1px solid #BFE9FF;
}

.diag__badge-icon { font-size: 1.75rem; }
.diag__badge strong { display: block; font-weight: 800; color: #134e86; font-size: 0.9rem; }
.diag__badge span { font-size: 0.72rem; color: #6B7280; }

/* ============================================================
   2. ENFERMEDADES — slider horizontal
============================================================ */
.enfermedades {
  background: #f0f9ff;
  padding: 5rem 0;
  overflow: hidden;
}

.enf__header,
.trat__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
}

.enf__header h2,
.trat__header h2 {
  font-weight: 900;
  color: #134e86;
  letter-spacing: -0.5px;
  font-size: var(--text-section-title);
  margin-bottom: 0.25rem;
}

.enf__header p,
.trat__header p {
  color: #6B7280;
  font-size: var(--text-body);
}

.enf__arrows,
.trat__arrows {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.enf__arrow,
.trat__arrow {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid #BFE9FF;
  background: #fff;
  color: #134e86;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1;
}

.enf__arrow:hover,
.trat__arrow:hover {
  background: #134e86;
  border-color: #134e86;
  color: #fff;
}

/* Track scrollable */
.enf__track,
.trat__track {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding-bottom: 0.5rem;
}

.enf__track::-webkit-scrollbar,
.trat__track::-webkit-scrollbar { display: none; }

/* ── Enfermedad card ── */
.enf__card {
  flex: 0 0 280px;
  scroll-snap-align: start;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #EEF6FF;
}

.enf__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(19,78,134,0.12);
}

.enf__img-wrap {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.enf__img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.enf__card:hover .enf__img-wrap img { transform: scale(1.05); }

.enf__body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.enf__body h3 {
  font-weight: 800;
  color: #134e86;
  font-size: var(--text-card-title);
}

.enf__body p {
  color: #6B7280;
  font-size: var(--text-body);
  line-height: 1.55;
}

.enf__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1.5px solid #BFE9FF;
  color: #134e86;
  font-weight: 700;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  font-size: var(--text-small);
  transition: all 0.2s;
  margin-top: 0.25rem;
  width: fit-content;
}

.enf__btn:hover {
  background: #134e86;
  border-color: #134e86;
  color: #fff;
}

/* ============================================================
   3. TRATAMIENTOS — estilo imagen referencia
============================================================ */
.tratamientos {
  background: #fff;
  padding: 5rem 0;
  overflow: hidden;
}

/* ── Tratamiento card ── */
.trat__card {
  flex: 0 0 280px;
  scroll-snap-align: start;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  border: 1px solid #EEF6FF;
  transition: transform 0.2s, box-shadow 0.2s;
}

.trat__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(19,78,134,0.12);
}

.trat__img-wrap {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.trat__img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.trat__card:hover .trat__img-wrap img { transform: scale(1.05); }

.trat__body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.trat__body h3 {
  font-weight: 800;
  color: #134e86;
  font-size: var(--text-card-title);
}

.trat__body p {
  color: #6B7280;
  font-size: var(--text-body);
  line-height: 1.55;
}

.trat__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1.5px solid #BFE9FF;
  color: #134e86;
  font-weight: 700;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  font-size: var(--text-small);
  transition: all 0.2s;
  margin-top: 0.25rem;
  width: fit-content;
}

.trat__btn:hover {
  background: #134e86;
  border-color: #134e86;
  color: #fff;
}

/* ============================================================
   CTA FINAL
============================================================ */
.cta-inf {
  background: linear-gradient(135deg, #4fa3d1 0%, #6db8e8 100%);
  padding: 5rem 0;
}

.cta-inf__inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 540px;
  margin: 0 auto;
}

.cta-inf__emoji { font-size: 3rem; }

.cta-inf__inner h2 {
  font-weight: 900;
  color: #fff;
  font-size: var(--text-section-title);
  letter-spacing: -0.5px;
}

.cta-inf__inner p {
  color: rgba(255,255,255,0.85);
  font-size: var(--text-body-lg);
  line-height: 1.7;
}

.cta-inf__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #80e89b;
  color: #134e86;
  font-weight: 800;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
  font-size: var(--text-body);
  margin-top: 0.5rem;
}

.cta-inf__btn:hover {
  background: #6add89;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(128,232,155,0.4);
}

/* ============================================================
   RESPONSIVE
============================================================ */
@media (max-width: 1024px) {
  .diagnostico__inner { grid-template-columns: 1fr; gap: 3rem; }
  .diagnostico__img   { display: none; }
}

@media (max-width: 768px) {
  .hero-inf__inner    { padding: 0 1.5rem; }
  .enf__card,
  .trat__card         { flex: 0 0 240px; }
  .enf__header,
  .trat__header       { flex-direction: column; align-items: flex-start; gap: 1rem; }
}
</style>