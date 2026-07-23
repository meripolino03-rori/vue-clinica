<template>
  <main>
    <!-- HERO -->
    <section class="hero-ct">
      <div class="hero-ct__inner">
        <div class="hero-ct__content">
          <span class="hero-ct__badge"><i class="bi bi-geo-alt-fill"></i> Encuéntranos</span>
          <h1>Estamos aquí para cuidar tu sonrisa</h1>
          <p>Visítanos en el corazón de Huánuco. Agenda tu cita fácilmente por WhatsApp o llámanos directamente.</p>
          <a :href="whatsappUrl" target="_blank" class="hero-ct__btn">
            <i class="bi bi-whatsapp"></i> Escribirnos por WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- INFO + MAPA -->
    <section class="contacto">
      <div class="container contacto__inner">

        <div class="contacto__info">
          <span class="contacto__tag">Información de contacto</span>
          <h2>Visítanos o contáctanos</h2>
          <p>Estamos listos para atenderte. Elige la forma que más te convenga.</p>
          <div class="info__items">
            <div class="info__item" v-for="item in infoItems" :key="item.titulo">
              <div class="info__icon">
                <i :class="item.icono"></i>
              </div>
              <div class="info__text">
                <h4>{{ item.titulo }}</h4>
                <p v-for="linea in item.lineas" :key="linea">{{ linea }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- MAPA LEAFLET -->
        <div class="contacto__mapa">
          <div class="mapa__badge">
            <i class="bi bi-geo-alt-fill"></i>
            Jr. 28 de Julio 844, Huánuco
          </div>
          <div id="mapa-leaflet"></div>
        </div>

      </div>
    </section>

    <!-- FORMULARIO -->
    <section class="formulario">
      <div class="container formulario__inner">

        <div class="formulario__content">
          <span class="formulario__tag">Escríbenos</span>
          <h2>¿Tienes alguna consulta?</h2>
          <p>Completa el formulario y te responderemos a la brevedad.</p>
          <div class="formulario__whatsapp">
            <i class="bi bi-whatsapp"></i>
            <div>
              <h4>Respuesta inmediata</h4>
              <p>Escríbenos por WhatsApp y te atendemos al instante</p>
            </div>
            <a :href="whatsappUrl" target="_blank" class="formulario__wa-btn">Abrir WhatsApp</a>
          </div>
        </div>

        <form class="formulario__form" @submit.prevent="enviarFormulario">
          <div class="form__row">
            <div class="form__group">
              <label>Nombre completo</label>
              <input v-model="form.nombre" type="text" placeholder="Tu nombre" required />
            </div>
            <div class="form__group">
              <label>Teléfono</label>
              <input v-model="form.telefono" type="tel" placeholder="Tu teléfono" />
            </div>
          </div>
          <div class="form__group">
            <label>Correo electrónico</label>
            <input v-model="form.email" type="email" placeholder="tu@correo.com" required />
          </div>
          <div class="form__group">
            <label>Servicio de interés</label>
            <select v-model="form.servicio">
              <option value="">Selecciona un servicio</option>
              <option v-for="s in servicios" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div class="form__group">
            <label>Mensaje</label>
            <textarea v-model="form.mensaje" placeholder="¿En qué podemos ayudarte?" rows="3"></textarea>
          </div>
          <button type="submit" class="form__btn" :class="{ 'form__btn--enviado': enviado }">
            <i class="bi" :class="enviado ? 'bi-check-lg' : 'bi-send'"></i>
            {{ enviado ? '¡Mensaje enviado!' : 'Enviar mensaje' }}
          </button>
        </form>

      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="cta-final">
      <div class="container cta-final__inner">
        <div>
          <h2>¿Prefieres hablar directamente?</h2>
          <p>Llámanos o escríbenos por WhatsApp y te atendemos de inmediato.</p>
        </div>
        <div class="cta-final__btns">
          <a href="tel:+51934423066" class="cta-final__btn cta-final__btn--phone">
            <i class="bi bi-telephone-fill"></i> Llamar ahora
          </a>
          <a :href="whatsappUrl" target="_blank" class="cta-final__btn cta-final__btn--wa">
            <i class="bi bi-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const whatsappUrl = 'https://wa.me/51934423066'

const infoItems = [
  { icono: 'bi bi-geo-alt-fill',   titulo: 'Dirección', lineas: ['Jr. 28 de Julio 844', 'Huánuco, Perú'] },
  { icono: 'bi bi-telephone-fill', titulo: 'Teléfono',  lineas: ['+51 934 423 066'] },
  { icono: 'bi bi-envelope-fill',  titulo: 'Correo',    lineas: ['contacto@clinicasanmartin.pe'] },
  { icono: 'bi bi-clock-fill',     titulo: 'Horarios',  lineas: ['Lunes – Viernes: 8am – 7pm', 'Sábados: 8am – 2pm'] },
]

const servicios = [
  'Consulta General', 'Odontopediatría', 'Ortodoncia',
  'Implantes Dentales', 'Blanqueamiento', 'Limpieza Dental', 'Cirugía Oral', 'Otro',
]

const form = ref({ nombre: '', telefono: '', email: '', servicio: '', mensaje: '' })
const enviado = ref(false)
let mapInstance = null

onMounted(async () => {
  const L = await import('https://unpkg.com/leaflet@1.9.4/dist/leaflet-src.esm.js')

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
  document.head.appendChild(link)

  mapInstance = L.map('mapa-leaflet', {
    center: [-9.9298, -76.2422],
    zoom: 15,
    zoomControl: false,
    scrollWheelZoom: false,
  })

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap © CARTO',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(mapInstance)

  // ── Coordenadas ──
  const plaza    = [-9.9306, -76.2441]   // Plaza de Armas de Huánuco
  const clinica  = [-9.9298, -76.2422]   // Jr. 28 de Julio 844

  // ── Ruta entre plaza y clínica ──
  L.polyline([plaza, clinica], {
    color: '#134e86',
    weight: 5,
    opacity: 0.85,
    lineJoin: 'round',
    lineCap: 'round',
    dashArray: '1, 8',    // línea punteada estilo moderno
  }).addTo(mapInstance)

  // ── Marcador Plaza ──
  const iconoPlaza = L.divIcon({
    html: `<div class="marker-plaza"><i class="bi bi-geo-fill"></i></div>`,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  })

  L.marker(plaza, { icon: iconoPlaza })
    .addTo(mapInstance)
    .bindPopup(`
      <div class="mapa-popup">
        <strong>Plaza de Armas</strong>
        <span>Punto de partida</span>
      </div>
    `)

  // ── Marcador Clínica ──
  const iconoClinica = L.divIcon({
    html: `<div class="marker-pin"><i class="bi bi-geo-alt-fill"></i></div>`,
    className: '',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  })

  L.marker(clinica, { icon: iconoClinica })
    .addTo(mapInstance)
    .bindPopup(`
      <div class="mapa-popup">
        <strong>Clínica San Martín</strong>
        <span>Jr. 28 de Julio 844, Huánuco</span>
      </div>
    `)
    .openPopup()

  L.control.zoom({ position: 'bottomright' }).addTo(mapInstance)
})

onUnmounted(() => {
  if (mapInstance) mapInstance.remove()
})

function enviarFormulario() {
  const msg = `Hola, soy ${form.value.nombre}. Me interesa: ${form.value.servicio || 'consulta general'}. ${form.value.mensaje}`
  window.open(`https://wa.me/51934423066?text=${encodeURIComponent(msg)}`, '_blank')
  enviado.value = true
  setTimeout(() => {
    enviado.value = false
    form.value = { nombre: '', telefono: '', email: '', servicio: '', mensaje: '' }
  }, 3000)
}
</script>

<style scoped>
/* ============================================================
   HERO
============================================================ */
.hero-ct {
  background: linear-gradient(135deg, #0d3560 0%, #134e86 50%, #8ec5ff 100%);
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  align-items: center;
  margin-top: calc(-1 * var(--navbar-height));
  padding-top: var(--navbar-height);
}

.hero-ct__inner {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}

.hero-ct__content {
  max-width: 580px;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.hero-ct__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #80e89b;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: var(--text-badge);
}

.hero-ct__content h1 {
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.5px;
  font-size: var(--text-hero-title);
}

.hero-ct__content p {
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.8;
  font-size: var(--text-body-lg);
}

.hero-ct__btn {
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

.hero-ct__btn:hover {
  background: #6add89;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(128, 232, 155, 0.4);
}

/* ============================================================
   CONTACTO INFO + MAPA
============================================================ */
.contacto {
  background: rgba(255, 255, 255, 0.8);
  padding: 5rem 0;
}

.contacto__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: stretch;
}

.contacto__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #134e86;
  font-weight: 800;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: var(--text-badge);
}

.contacto__info h2 {
  font-weight: 900;
  color: #134e86;
  line-height: 1.15;
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
  font-size: var(--text-section-title);
}

.contacto__info > p {
  color: #134e86;
  opacity: 0.75;
  line-height: 1.7;
  margin-bottom: 1.75rem;
  font-size: var(--text-body);
}

.info__items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info__item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: #8ec5ff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.info__item:hover {
  transform: translateX(4px);
  box-shadow: 0 6px 20px rgba(19, 78, 134, 0.15);
}

.info__icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #80e89b;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.info__text h4 {
  font-weight: 700;
  color: #134e86;
  margin-bottom: 0.2rem;
  font-size: var(--text-card-title);
}

.info__text p {
  color: #134e86;
  opacity: 0.75;
  line-height: 1.5;
  font-size: var(--text-body);
}

/* MAPA LEAFLET */
.contacto__mapa {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
  min-height: 350px;
  box-shadow:
    0 20px 60px rgba(19, 78, 134, 0.25),
    0 0 0 3px rgba(255, 255, 255, 0.4);
}

.contacto__mapa::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: linear-gradient(
    135deg,
    rgba(19, 78, 134, 0.06) 0%,
    transparent 40%,
    transparent 60%,
    rgba(142, 197, 255, 0.06) 100%
  );
  pointer-events: none;
  z-index: 2;
}

#mapa-leaflet {
  width: 100%;
  height: 100%;
  min-height: 350px;
}

.mapa__badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  background: rgba(19, 78, 134, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #fff;
  font-weight: 700;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 16px rgba(19, 78, 134, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: var(--text-small);
}

.mapa__badge i { color: #80e89b; }

/* ============================================================
   FORMULARIO
============================================================ */
.formulario {
  background: #134e86;
  padding: 4rem 0;
}

.formulario__inner {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3.5rem;
  align-items: start;
}

.formulario__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
  font-size: var(--text-badge);
}

.formulario__content h2 {
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 0.6rem;
  letter-spacing: -0.5px;
  font-size: var(--text-section-title);
}

.formulario__content > p {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: var(--text-body);
}

.formulario__whatsapp {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.1rem 1.25rem;
  color: #fff;
}

.formulario__whatsapp i {
  font-size: 1.6rem;
  color: #80e89b;
  flex-shrink: 0;
}

.formulario__whatsapp h4 {
  font-weight: 700;
  margin-bottom: 0.15rem;
  color: #fff;
  font-size: var(--text-card-title);
}

.formulario__whatsapp p {
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.4;
  font-size: var(--text-small);
}

.formulario__wa-btn {
  display: inline-block;
  background: #80e89b;
  color: #134e86;
  font-weight: 800;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.2s;
  font-size: var(--text-small);
}

.formulario__wa-btn:hover {
  background: #6add89;
  transform: translateY(-2px);
}

.formulario__form {
  background: rgba(255, 255, 255, 0.08);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 2rem;
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.05),
    0 8px 32px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

.form__group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form__group label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  font-size: var(--text-small);
}

.form__group input,
.form__group select,
.form__group textarea {
  padding: 0.85rem 1.25rem;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  font-family: inherit;
  color: #fff;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  background: rgba(255, 255, 255, 0.1);
  font-size: var(--text-body);
  backdrop-filter: blur(4px);
}

.form__group textarea {
  border-radius: 16px;
  resize: vertical;
}

.form__group input::placeholder,
.form__group textarea::placeholder {
  color: rgba(255, 255, 255, 0.45);
}

.form__group select option {
  background: #134e86;
  color: #fff;
}

.form__group input:focus,
.form__group select:focus,
.form__group textarea:focus {
  border-color: #80e89b;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0 0 0 3px rgba(128, 232, 155, 0.15);
}

.form__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #80e89b;
  color: #134e86;
  font-weight: 800;
  padding: 0.85rem 2rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
  font-size: var(--text-body);
  margin-top: 0.5rem;
}

.form__btn:hover {
  background: #6add89;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(128, 232, 155, 0.4);
}

.form__btn--enviado {
  background: #25D366;
  color: #fff;
}

/* ============================================================
   CTA FINAL
============================================================ */
.cta-final {
  background: #8ec5ff;
  padding: 4rem 0;
}

.cta-final__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cta-final__inner h2 {
  font-weight: 900;
  color: #134e86;
  margin-bottom: 0.5rem;
  letter-spacing: -0.3px;
  font-size: var(--text-section-title);
}

.cta-final__inner p {
  color: #134e86;
  font-size: var(--text-body);
}

.cta-final__btns {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.cta-final__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
  font-size: var(--text-body);
}

.cta-final__btn--phone {
  background: rgba(255, 255, 255, 0.4);
  color: #134e86;
  border: 2px solid rgba(255, 255, 255, 0.6);
}

.cta-final__btn--phone:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
}

.cta-final__btn--wa {
  background: #80e89b;
  color: #134e86;
}

.cta-final__btn--wa:hover {
  background: #6add89;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(128, 232, 155, 0.35);
}

/* ============================================================
   MARCADOR Y POPUP LEAFLET
============================================================ */
/* estos estilos van en un <style> sin scoped o en main.css */
</style>

<!-- Estilos globales para Leaflet (sin scoped) -->
<style>
.marker-pin {
  width: 42px;
  height: 42px;
  background: #134e86;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(19, 78, 134, 0.45);
  border: 3px solid #fff;
}


.marker-pin i {
  transform: rotate(45deg);
  color: #80e89b;
  font-size: 1rem;
}

.leaflet-popup-content-wrapper {
  background: #134e86 !important;
  border-radius: 14px !important;
  box-shadow: 0 8px 24px rgba(19, 78, 134, 0.35) !important;
  border: none !important;
}

.leaflet-popup-tip {
  background: #134e86 !important;
}

.mapa-popup {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 2px 0;
}

.mapa-popup strong {
  color: #80e89b;
  font-size: 0.9rem;
}

.mapa-popup span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
}

.leaflet-control-zoom a {
  background: #134e86 !important;
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}

.leaflet-control-zoom a:hover {
  background: #0d3560 !important;
}

/* ============================================================
   RESPONSIVE
============================================================ */
@media (max-width: 1024px) {
  .contacto__inner   { grid-template-columns: 1fr; }
  .formulario__inner { grid-template-columns: 1fr; }
  .cta-final__inner  { flex-direction: column; text-align: center; }
  .cta-final__btns   { justify-content: center; }
}

@media (max-width: 768px) {
  .hero-ct__inner        { padding: 0 1.5rem; }
  .form__row             { grid-template-columns: 1fr; }
  .formulario__form      { padding: 1.5rem; }
  .formulario__whatsapp  { flex-wrap: wrap; }
  .contacto__mapa        { min-height: 280px; }
  #mapa-leaflet          { min-height: 280px; }
}
</style>