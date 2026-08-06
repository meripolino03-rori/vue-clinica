<template>
    <main class="infantil">

        <!-- HERO -->
        <section class="hero-inf">
            <div class="hero-inf__inner">
                <div class="hero-inf__content">
                    <span class="hero-ns__badge">
                        <i class="bi bi-balloon-heart-fill"></i> Atención Infantil
                    </span>
                    <h1>Cuidamos la sonrisa de tus <em>pequeños</em></h1>
                    <p>Hacemos que cada visita sea una experiencia divertida y sin miedo. Especialistas en
                        odontopediatría con amor y paciencia.</p>
                    <a :href="whatsappUrl" target="_blank" class="hero__btn--primary">
                        <i class="bi bi-whatsapp"></i> Agendar cita infantil
                    </a>
                </div>
                <img src="@/assets/images/portada-niño.png" alt="Niño feliz" class="hero-icon" />
            </div>
        </section>

        <!-- 1. ENFERMEDADES -->
        <section class="enfermedades">
            <div class="container">
                <div class="enf__head">
                    <span class="quienes__tag">
                        <img src="@/assets/images/diente-icono.png" alt="Diente" class="custom-icon" />
                        Prevención para Niños
                    </span>
                    <h2>Enfermedades y problemas comunes</h2>
                    <p>Conoce los problemas bucales más frecuentes en los niños y descubre cómo podemos detectarlos y
                        tratarlos a tiempo. Haz clic en cada uno para obtener más información.</p>
                </div>

                <div class="enf__accordion">
                    <div class="enf__item" v-for="(e, i) in enfermedades" :key="e.titulo"
                        :class="{ 'enf__item--open': enfActivo === i }">
                        <div class="enf__item-media" :style="{ backgroundImage: `url(${e.imagen})` }">
                            <div class="enf__item-overlay">
                                <p class="enf__item-desc">{{ e.desc }}</p>
                                <h4>{{ e.titulo }}</h4>
                                <button class="enf__item-btn" @click="toggleEnf(i)">
                                    {{ enfActivo === i ? 'Ver menos' : 'Ver más' }}
                                    <i class="bi" :class="enfActivo === i ? 'bi-arrow-up' : 'bi-arrow-right'"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. TRATAMIENTOS -->
        <section class="tratamientos">
            <div class="container">
                <div class="trat__header">
                    <div>
                        <span class="quienes__tag quienes__tag--light">
                            <img src="@/assets/images/diente-icono.png" alt="Diente" class="custom-icon" />
                            Soluciones
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
                    <div class="trat__card" v-for="(t, i) in tratamientos" :key="t.titulo"
                        :class="{ 'trat__card--open': tratActivo === i }">
                        <!-- Texto: siempre visible -->
                        <div class="trat__body">

                            <!-- Badge dispara el toggle -->
                            <span class="trat__badge" @click="toggleTrat(i)">
                                {{ t.categoria || 'Tratamiento' }}
                            </span>

                            <h3>{{ t.titulo }}</h3>
                            <p class="trat__desc">{{ t.desc }}</p>
                        </div>

                        <!-- Imagen: flota POR ENCIMA del texto con position absolute -->
                        <transition name="img-cover">
                            <div class="trat__img-wrap" v-if="tratActivo === i" @click="toggleTrat(i)">
                                <img :src="t.imagen" :alt="t.titulo" loading="lazy" />
                                <div class="trat__img-overlay">
                                    <span class="trat__img-titulo">{{ t.titulo }}</span>
                                    <span class="trat__img-close">✕ Cerrar</span>
                                </div>
                            </div>
                        </transition>

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
const tratTrack = ref(null)
const enfActivo = ref(null)
const tratActivo = ref(null)

function scrollTrat(dir) {
    tratTrack.value?.scrollBy({ left: dir * 300, behavior: 'smooth' })
}

function toggleEnf(i) {
    enfActivo.value = enfActivo.value === i ? null : i
}

function toggleTrat(i) {
    tratActivo.value = tratActivo.value === i ? null : i
}

function abrirWA(titulo) {
    const msg = `Hola, me interesa el tratamiento: ${titulo} para mi hijo.`
    window.open(`https://wa.me/51934423066?text=${encodeURIComponent(msg)}`, '_blank')
}

const enfermedades = [
    {
        titulo: 'Caries Dental',
        desc: 'La enfermedad más común en niños. Bacterias que producen ácidos que dañan el esmalte dental.',
        imagen: new URL('@/assets/images/caries-infantil.jpg', import.meta.url).href,
    },
    {
        titulo: 'Gingivitis',
        desc: 'Inflamación de las encías por acumulación de placa bacteriana. Frecuente en niños con higiene irregular.',
        imagen: new URL('@/assets/images/gingivitis.png', import.meta.url).href,
    },
    {
        titulo: 'Maloclusión',
        desc: 'Desalineación de dientes o mordida incorrecta. Puede ser causada por hábitos como chuparse el dedo.',
        imagen: new URL('@/assets/images/maloclusion.jpeg', import.meta.url).href,
    },
    {
        titulo: 'Bruxismo',
        desc: 'Hábito de rechinar o apretar los dientes durante el sueño. Afecta hasta el 30% de los niños.',
        imagen: new URL('@/assets/images/bruxismo.jpeg', import.meta.url).href,
    },
    {
        titulo: 'Hipoplasia del Esmalte',
        desc: 'Desarrollo incompleto del esmalte que deja los dientes más vulnerables a caries y sensibilidad.',
        imagen: new URL('@/assets/images/hipoplasia.jpeg', import.meta.url).href,
    },
    {
        titulo: 'Absceso Dental',
        desc: 'Infección bacteriana que forma pus. Generalmente consecuencia de una caries no tratada a tiempo.',
        imagen: new URL('@/assets/images/abceso.jpeg', import.meta.url).href,
    },
    {
        titulo: 'Pérdida Dental Temprana',
        desc: 'Pérdida prematura de dientes de leche que puede afectar el desarrollo de los dientes permanentes.',
        imagen: new URL('@/assets/images/perdida.jpg', import.meta.url).href,
    },
]

const tratamientos = [
    {
        titulo: 'Limpieza Dental',
        categoria: 'Preventivo',
        desc: 'Eliminación profesional de placa bacteriana y sarro acumulado con instrumentos suaves especialmente seleccionados para la boca de los más pequeños, dejando sus dientes limpios y saludables.',
        detalles: ['Duración: 30 minutos aprox.', 'Sin dolor, totalmente seguro', 'Recomendado cada 6 meses', 'Incluye pulido dental infantil'],
        imagen: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
    },
    {
        titulo: 'Fluorización',
        categoria: 'Preventivo',
        desc: 'Aplicación tópica de flúor en alta concentración para fortalecer el esmalte dental y crear una barrera protectora natural contra la caries, ideal para niños en plena etapa de crecimiento.',
        detalles: ['Solo 10–15 minutos', 'Sin dolor ni incomodidad', 'Ideal desde los 3 años', 'Reduce el riesgo de caries hasta 40%'],
        imagen: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80',
    },
    {
        titulo: 'Sellantes Dentales',
        categoria: 'Preventivo',
        desc: 'Finas capas de resina aplicadas en las fosas y fisuras de los molares infantiles para evitar la acumulación de bacterias en zonas de difícil acceso con el cepillo dental.',
        detalles: ['Sin anestesia ni taladro', 'Duración: 5 a 10 años', 'Ideal al brotar molares a los 6 y 12 años', 'Protección del 80% contra caries molar'],
        imagen: 'https://images.unsplash.com/photo-1588776814546-1ffbb5e2294d?w=600&q=80',
    },
    {
        titulo: 'Obturaciones (Resinas)',
        categoria: 'Restaurador',
        desc: 'Tratamiento de caries con resinas compuestas del mismo color del diente, diseñadas para restaurar función y estética de forma segura, sin mercurio y con resultado inmediato.',
        detalles: ['Material 100% seguro, sin mercurio', 'Del color exacto del diente', 'Anestesia tópica suave si es necesario', 'Resultado en una sola sesión'],
        imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
    },
    {
        titulo: 'Pulpotomía',
        categoria: 'Endodoncia',
        desc: 'Tratamiento del nervio en dientes de leche para eliminar la infección y preservar el diente hasta su caída natural, sin afectar el diente permanente que está formándose debajo.',
        detalles: ['Alternativa al nervio en leche', 'Evita la pérdida dental prematura', 'Con anestesia local para mayor comodidad', 'Protege el diente permanente en formación'],
        imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    },
    {
        titulo: 'Ortopedia Maxilar',
        categoria: 'Correctivo',
        desc: 'Corrección temprana de alteraciones en el desarrollo de los maxilares mediante aparatos removibles o fijos, previniendo tratamientos mucho más complejos y costosos en el futuro.',
        detalles: ['Diagnóstico digital con radiografías', 'Aparatos cómodos y fáciles de usar', 'Ideal entre los 5 y 10 años', 'Reduce la necesidad de ortodoncia futura'],
        imagen: 'https://images.unsplash.com/photo-1598256989361-02f1e2e11a29?w=600&q=80',
    },
    {
        titulo: 'Extracciones Infantiles',
        categoria: 'Cirugía Menor',
        desc: 'Extracción segura y sin dolor de dientes de leche que no caen naturalmente, que generan molestia o que interfieren con la correcta erupción de los dientes permanentes.',
        detalles: ['Anestesia local adaptada a niños', 'Procedimiento rápido y controlado', 'Post-operatorio sencillo', 'Indicaciones claras para los padres'],
        imagen: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=600&q=80',
    },
    {
        titulo: 'Mantenedores de Espacio',
        categoria: 'Preventivo',
        desc: 'Dispositivos fijos o removibles que preservan el espacio dejado por un diente de leche perdido prematuramente, guiando la correcta erupción y posición del diente permanente.',
        detalles: ['Evitan apiñamiento dental futuro', 'Materiales hipoalergénicos y seguros', 'Fácil adaptación para el niño', 'Control periódico cada 3 a 6 meses'],
        imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
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

.hero-inf::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.07);
    top: -100px;
    right: 10%;
    pointer-events: none;
}

.hero-inf::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(128, 232, 155, 0.1);
    bottom: -60px;
    right: 25%;
    pointer-events: none;
}

.hero-inf__inner {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
}

.hero-inf__content {
    max-width: 610px;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    padding: 3rem 0;
    flex-shrink: 0;
}

.hero-ns__badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #134e86;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: var(--text-badge);
}

.hero-inf__content h1 {
    font-weight: 900;
    color: #fff;
    line-height: 1.1;
    letter-spacing: -0.5px;
    font-size: var(--text-hero-title);
}

.hero-inf__content h1 em {
    color: #134e86;
    font-style: italic;
}

.hero-inf__content p {
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.8;
    font-size: var(--text-body-lg);
}

.hero__btn--primary {
    padding: 0.7rem 2rem;
    border-radius: 999px;
    font-weight: 700;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
    width: fit-content;
    font-size: var(--text-small);
    background: #80e89b;
    color: #134e86;
    border: 1px solid rgba(255, 255, 255, 0.45);
    box-shadow:
        inset 0 2px 4px rgba(255, 255, 255, 0.45),
        inset 0 -2px 4px rgba(0, 0, 0, 0.05),
        0 6px 20px rgba(0, 0, 0, 0.10);
}

.hero__btn--primary:hover {
    background: #6add89;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(128, 232, 155, 0.4);
}

.hero-icon {
    width: 100%;
    max-width: 480px;
    height: auto;
    object-fit: contain;
    flex-shrink: 1;
}

/* ============================================================
   SHARED
============================================================ */
.quienes__tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #eae6e3;
    color: #134e86;
    font-weight: 700;
    padding: 0.3rem 0.9rem;
    border-radius: 999px;
    margin-bottom: 1rem;
    font-size: var(--text-badge);
}

.quienes__tag--light {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
}

.custom-icon {
    width: 18px;
    height: 18px;
    object-fit: contain;
}

/* ============================================================
   1. ENFERMEDADES
============================================================ */
.enfermedades {
    background: #f0f9ff;
    padding: 5rem 0;
}

.enf__head {
    text-align: center;
    max-width: 740px;
    margin: 0 auto 3rem;
}

.enf__head h2 {
    font-weight: 900;
    color: #134e86;
    letter-spacing: -0.5px;
    font-size: var(--text-section-title);
    margin-bottom: 0.75rem;
}

.enf__head p {
    color: #6B7280;
    font-size: var(--text-body);
    line-height: 1.75;
}

.enf__accordion {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
}

.enf__item {
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(19, 78, 134, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
}

.enf__item:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(19, 78, 134, 0.16);
}

.enf__item-media {
    position: relative;
    aspect-ratio: 3/3.6;
    background-size: cover;
    background-position: center;
    background-color: #4fa3d1;
    display: flex;
    align-items: flex-end;
}

.enf__item-overlay {
    width: 100%;
    padding: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background: linear-gradient(180deg,
            rgba(19, 78, 134, 0) 0%,
            rgba(19, 78, 134, 0.6) 40%,
            rgba(19, 78, 134, 0.94) 100%);
    transition: background 0.3s ease;
}

.enf__item--open .enf__item-overlay {
    height: 100%;
    background: linear-gradient(180deg,
            rgba(19, 78, 134, 0.55) 0%,
            rgba(19, 78, 134, 0.94) 35%,
            rgba(19, 78, 134, 0.97) 100%);
    justify-content: flex-end;
}

.enf__item-overlay h4 {
    color: #fff;
    font-weight: 800;
    font-size: var(--text-card-title);
    line-height: 1.2;
}

.enf__item-desc {
    color: rgba(255, 255, 255, 0.9);
    font-size: var(--text-body);
    line-height: 1.55;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.35s ease, opacity 0.3s ease;
}

.enf__item--open .enf__item-desc {
    max-height: 200px;
    opacity: 1;
}

.enf__item-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    align-self: flex-start;
    background: #80e89b;
    color: #134e86;
    font-weight: 800;
    border: none;
    padding: 0.45rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    font-family: inherit;
    font-size: var(--text-small);
    transition: all 0.2s;
}

.enf__item-btn:hover {
    background: #6add89;
}

/* ============================================================
   2. TRATAMIENTOS
============================================================ */
.tratamientos {
    background: linear-gradient(135deg, #134e86 0%, #1c5f9e 100%);
    padding: 5rem 0;
    overflow: hidden;
}

.trat__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2rem;
}

.trat__header h2 {
    font-weight: 900;
    color: #fff;
    letter-spacing: -0.5px;
    font-size: var(--text-section-title);
    margin-bottom: 0.25rem;
}

.trat__header p {
    color: rgba(255, 255, 255, 0.75);
    font-size: var(--text-body);
}

.trat__arrows {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
}

.trat__arrow {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1.5px solid rgba(255, 255, 255, 0.35);
    background: transparent;
    color: #fff;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    line-height: 1;
}

.trat__arrow:hover {
    background: #80e89b;
    border-color: #80e89b;
    color: #134e86;
}

/* ── Track ── */
.trat__track {
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    padding-bottom: 0.5rem;
    align-items: flex-start;
}

.trat__track::-webkit-scrollbar {
    display: none;
}

.trat__card {
  flex: 0 0 280px;
  scroll-snap-align: start;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  position: relative;
  height: 320px;             /* ← altura fija igual para todas */
  transition: box-shadow 0.3s ease;
}

.trat__card--open {
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.22);
}

.trat__img-wrap {
  position: absolute;
  inset: 0;
  z-index: 10;
  cursor: pointer;
}

.trat__img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.trat__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(19, 78, 134, 0.92) 0%,
    rgba(19, 78, 134, 0.3) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
  gap: 0.5rem;
}

.trat__img-titulo {
  font-weight: 900;
  color: #fff;
  font-size: var(--text-card-title);
  line-height: 1.2;
}

.trat__img-close {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: var(--text-small);
  font-weight: 700;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: background 0.2s;
}

.trat__img-close:hover {
  background: rgba(255, 255, 255, 0.35);
}

/* ── Badge: ahora es clickeable ── */
.trat__badge {
  display: inline-flex;
  width: fit-content;
  background: #d5f2dd;
  color: #1a8a4a;
  font-weight: 700;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: var(--text-badge);
  cursor: pointer;           /* ← indica que es clickeable */
  transition: all 0.2s;
  user-select: none;
}

.trat__badge:hover {
  background: #80e89b;
  color: #134e86;
  transform: scale(1.05);
}

/* ── Transición: la imagen aparece con fade+scale ── */
.img-cover-enter-active,
.img-cover-leave-active {
  transition: all 0.35s ease;
}

.img-cover-enter-from,
.img-cover-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.img-cover-enter-to,
.img-cover-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* ── Texto body sin cambios ── */
.trat__body {
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
  overflow: hidden;          /* ← evita que texto largo rompa el tamaño */
}

.trat__body h3 {
  font-weight: 900;
  color: #134e86;
  font-size: var(--text-card-title);
  line-height: 1.25;
}

.trat__desc {
  color: #6B7280;
  font-size: var(--text-body);
  line-height: 1.65;
  display: -webkit-box;
  overflow: hidden;
}

/* ── Detalle expandible ── */
.trat__detalle {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    padding-top: 0.85rem;
    border-top: 1.5px solid #EEF6FF;
    animation: fadeInUp 0.3s ease;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(8px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.trat__detalle-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.trat__detalle-list li {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: var(--text-body);
    color: #374151;
    font-weight: 500;
}

.trat__detalle-list li i {
    color: #80e89b;
    font-size: 0.9rem;
    flex-shrink: 0;
}

.trat__btn-wa {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #25D366;
    color: #fff;
    font-weight: 800;
    padding: 0.6rem 1.25rem;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: var(--text-small);
    transition: all 0.2s;
    width: fit-content;
}

.trat__btn-wa:hover {
    background: #1da851;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);
}

/* ── Botón toggle ── */
.trat__btn-toggle {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: transparent;
    border: 1.5px solid #BFE9FF;
    color: #134e86;
    font-weight: 700;
    padding: 0.45rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    font-family: inherit;
    font-size: var(--text-small);
    transition: all 0.2s;
    width: fit-content;
    margin-top: 0.25rem;
}

.trat__btn-toggle:hover {
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

.cta-inf__emoji {
    font-size: 3rem;
}

.cta-inf__inner h2 {
    font-weight: 900;
    color: #fff;
    font-size: var(--text-section-title);
    letter-spacing: -0.5px;
}

.cta-inf__inner p {
    color: rgba(255, 255, 255, 0.85);
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
    box-shadow: 0 8px 24px rgba(128, 232, 155, 0.4);
}

/* ============================================================
   RESPONSIVE
============================================================ */
@media (max-width: 1024px) {
    .enf__accordion {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 900px) {
    .hero-inf__inner {
        flex-direction: column;
        text-align: center;
        padding: 0 2rem;
        gap: 2rem;
    }

    .hero-inf__content {
        max-width: 100%;
        align-items: center;
        padding: 3rem 0 1rem;
    }

    .hero__btn--primary {
        margin: 0 auto;
    }

    .hero-icon {
        max-width: 320px;
    }
}

@media (max-width: 768px) {
    .trat__header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .trat__card {
        flex: 0 0 260px;
    }
}

@media (max-width: 640px) {
    .enf__accordion {
        grid-template-columns: 1fr;
    }

    .enf__item-media {
        aspect-ratio: 16/10;
    }

    .trat__body {
        padding: 1.25rem;
    }
}
</style>