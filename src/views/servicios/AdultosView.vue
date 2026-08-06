<template>
    <main class="adultos">

        <!-- HERO -->
        <section class="hero-ad">
            <div class="hero-ad__inner">
                <div class="hero-ad__content">
                    <span class="hero-ad__badge">
                        <i class="bi bi-award-fill"></i> Atención Adultos s
                    </span>
                    <h1>Recupera tu sonrisa con <em>confianza</em></h1>
                    <p>Diagnóstico preciso y tratamientos personalizados para cuidar tu salud bucal en cada etapa
                        de tu vida.</p>
                    <a :href="whatsappUrl" target="_blank" class="hero__btn--primary">
                        <i class="bi bi-whatsapp"></i> Agendar cita
                    </a>
                </div>
                <img src="@/assets/images/portada-adulto.png" alt="Paciente sonriendo" class="hero-icon" />
            </div>
        </section>

        <!-- 1. ENFERMEDADES -->
        <section class="enfermedades">
            <div class="container">
                <div class="enf__head">
                    <span class="quienes__tag">
                        <img src="@/assets/images/diente-icono.png" alt="Diente" class="custom-icon" />
                        Salud Bucal Adulta
                    </span>
                    <h2>Enfermedades y problemas comunes</h2>
                    <p>Conoce los problemas bucales más frecuentes en adultos y cómo prevenirlos o tratarlos a
                        tiempo. Haz clic en cada uno para obtener más información.</p>
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
                        <h2>Tratamientos para adultos</h2>
                        <p>Procedimientos modernos, seguros y con resultados duraderos.</p>
                    </div>
                    <div class="trat__arrows">
                        <button class="trat__arrow" @click="scrollTrat(-1)">‹</button>
                        <button class="trat__arrow" @click="scrollTrat(1)">›</button>
                    </div>
                </div>

                <div class="trat__track" ref="tratTrack">
                    <div class="trat__card" v-for="(t, i) in tratamientos" :key="t.titulo"
                        :class="{ 'trat__card--open': tratActivo === i }">
                        <div class="trat__body">
                            <span class="trat__badge" @click="toggleTrat(i)">
                                {{ t.categoria || 'Tratamiento' }}
                            </span>
                            <h3>{{ t.titulo }}</h3>
                            <p class="trat__desc">{{ t.desc }}</p>
                        </div>

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
        <section class="cta-ad">
            <div class="container cta-ad__inner">
                <div class="cta-ad__icon">
                    <i class="bi bi-emoji-smile"></i>
                </div>
                <h2>¿Listo para recuperar tu sonrisa?</h2>
                <p>Agenda tu primera consulta hoy y recibe una evaluación completa con nuestro equipo.</p>
                <a :href="whatsappUrl" target="_blank" class="cta-ad__btn">
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

const enfermedades = [
    {
        titulo: 'Caries Dental',
        desc: 'Destrucción progresiva del esmalte por ácidos bacterianos. Si no se trata a tiempo, puede afectar la pulpa dental y causar dolor intenso.',
        imagen: new URL('@/assets/images/adultos/caries-adulto.jpg', import.meta.url).href,
    },
    {
        titulo: 'Enfermedad Periodontal',
        desc: 'Inflamación e infección de las encías y el hueso que sostiene los dientes. Es la principal causa de pérdida dental en adultos.',
        imagen: new URL('@/assets/images/adultos/periodontal.jpg', import.meta.url).href,
    },
    {
        titulo: 'Sensibilidad Dental',
        desc: 'Dolor agudo ante estímulos fríos, calientes o dulces, causado por desgaste del esmalte o retracción de encías.',
        imagen: new URL('@/assets/images/adultos/sensibilidad.jpg', import.meta.url).href,
    },
    {
        titulo: 'Bruxismo',
        desc: 'Hábito de apretar o rechinar los dientes, frecuentemente relacionado al estrés, que desgasta el esmalte y afecta la mandíbula.',
        imagen: new URL('@/assets/images/adultos/bruxismo-adulto.jpg', import.meta.url).href,
    },
    {
        titulo: 'Manchas y Decoloración',
        desc: 'Cambios en el color natural del diente por café, tabaco, vino o el paso del tiempo, afectando la estética de la sonrisa.',
        imagen: new URL('@/assets/images/adultos/manchas.jpg', import.meta.url).href,
    },
    {
        titulo: 'Pérdida Dental',
        desc: 'Ausencia de una o más piezas dentales por caries avanzada, trauma o enfermedad periodontal, que afecta masticación y estética.',
        imagen: new URL('@/assets/images/adultos/perdida-adulto.jpg', import.meta.url).href,
    },
    {
        titulo: 'Mal Aliento (Halitosis)',
        desc: 'Olor bucal persistente causado por bacterias, mala higiene, enfermedad de encías o problemas digestivos.',
        imagen: new URL('@/assets/images/adultos/halitosis.jpg', import.meta.url).href,
    },
]

const tratamientos = [
    {
        titulo: 'Limpieza Dental Profesional',
        categoria: 'Preventivo',
        desc: 'Eliminación de placa bacteriana y sarro mediante ultrasonido, dejando tus dientes limpios y previniendo enfermedades futuras.',
        imagen: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
    },
    {
        titulo: 'Blanqueamiento Dental',
        categoria: 'Estético',
        desc: 'Tratamiento profesional que aclara varios tonos el color de tus dientes de forma segura, con resultados visibles desde la primera sesión.',
        imagen: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&q=80',
    },
    {
        titulo: 'Ortodoncia Invisible',
        categoria: 'Correctivo',
        desc: 'Alineadores transparentes y removibles que corrigen la posición dental sin brackets metálicos, discretos y cómodos.',
        imagen: 'https://images.unsplash.com/photo-1588776814546-1ffbb5e2294d?w=600&q=80',
    },
    {
        titulo: 'Implantes Dentales',
        categoria: 'Rehabilitación',
        desc: 'Reemplazo permanente de piezas perdidas con tecnología de titanio biocompatible, recuperando función y estética natural.',
        imagen: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
    },
    {
        titulo: 'Carillas Dentales',
        categoria: 'Estético',
        desc: 'Láminas ultrafinas de porcelana o resina que cubren la cara visible del diente, corrigiendo forma, color y alineación.',
        imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    },
    {
        titulo: 'Endodoncia',
        categoria: 'Tratamiento de Conducto',
        desc: 'Eliminación de tejido infectado dentro del diente para salvarlo de una extracción, deteniendo el dolor y la infección.',
        imagen: 'https://images.unsplash.com/photo-1598256989361-02f1e2e11a29?w=600&q=80',
    },
    {
        titulo: 'Prótesis Dentales',
        categoria: 'Rehabilitación',
        desc: 'Reposición de una o varias piezas dentales con prótesis fijas o removibles, adaptadas a tu anatomía y necesidades.',
        imagen: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=600&q=80',
    },
    {
        titulo: 'Tratamiento Periodontal',
        categoria: 'Terapéutico',
        desc: 'Control y tratamiento de enfermedades de encías mediante limpieza profunda, evitando la pérdida dental a futuro.',
        imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    },
]
</script>

<style scoped>
/* ============================================================
   HERO
============================================================ */
.hero-ad {
    background: linear-gradient(135deg, #134e86 0%, #1c5f9e 60%, #4fa3d1 100%);
    min-height: 65vh;
    display: flex;
    align-items: center;
    margin-top: calc(-1 * var(--navbar-height));
    padding-top: var(--navbar-height);
    overflow: hidden;
    position: relative;
}

.hero-ad::before {
    content: '';
    position: absolute;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    top: -120px;
    right: 8%;
    pointer-events: none;
}

.hero-ad::after {
    content: '';
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: rgba(128, 232, 155, 0.08);
    bottom: -60px;
    right: 22%;
    pointer-events: none;
}

.hero-ad__inner {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    position: relative;
    z-index: 1;
}

.hero-ad__content {
    max-width: 610px;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    padding: 3rem 0;
    flex-shrink: 0;
}

.hero-ad__badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #80e89b;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: var(--text-badge);
}

.hero-ad__content h1 {
    font-weight: 900;
    color: #fff;
    line-height: 1.1;
    letter-spacing: -0.5px;
    font-size: var(--text-hero-title);
}

.hero-ad__content h1 em {
    color: #80e89b;
    font-style: italic;
}

.hero-ad__content p {
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
    max-width: 460px;
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
    max-height: 220px;
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
    height: 320px;
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
    background: linear-gradient(to top,
            rgba(19, 78, 134, 0.92) 0%,
            rgba(19, 78, 134, 0.3) 50%,
            transparent 100%);
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

.trat__badge {
    display: inline-flex;
    width: fit-content;
    background: #d5f2dd;
    color: #1a8a4a;
    font-weight: 700;
    padding: 0.3rem 0.85rem;
    border-radius: 999px;
    font-size: var(--text-badge);
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
}

.trat__badge:hover {
    background: #80e89b;
    color: #134e86;
    transform: scale(1.05);
}

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

.trat__body {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex: 1;
    overflow: hidden;
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

/* ============================================================
   CTA FINAL
============================================================ */
.cta-ad {
    background: linear-gradient(135deg, #134e86 0%, #4fa3d1 100%);
    padding: 5rem 0;
}

.cta-ad__inner {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 540px;
    margin: 0 auto;
}

.cta-ad__icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(128, 232, 155, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: #80e89b;
}

.cta-ad__inner h2 {
    font-weight: 900;
    color: #fff;
    font-size: var(--text-section-title);
    letter-spacing: -0.5px;
}

.cta-ad__inner p {
    color: rgba(255, 255, 255, 0.85);
    font-size: var(--text-body-lg);
    line-height: 1.7;
}

.cta-ad__btn {
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

.cta-ad__btn:hover {
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
    .hero-ad__inner {
        flex-direction: column;
        text-align: center;
        padding: 0 2rem;
        gap: 2rem;
    }

    .hero-ad__content {
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
