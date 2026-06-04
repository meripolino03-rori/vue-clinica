<template>
  <main class="blog-detail" v-if="articulo">

    <!-- HERO -->
    <section class="detail-hero">
      <div class="detail-hero__img">
        <img :src="articulo.imagen" :alt="articulo.titulo" />
        <div class="detail-hero__overlay"></div>
      </div>
      <div class="detail-hero__content">
        <div class="container">
          <div class="detail-hero__cats">
            <span v-for="cat in articulo.categorias" :key="cat" class="detail-hero__cat">{{ cat }}</span>
          </div>
          <h1>{{ articulo.titulo }}</h1>
          <div class="detail-hero__meta">
            <span><i class="bi bi-person-fill"></i> {{ articulo.autor }}</span>
            <span><i class="bi bi-calendar3"></i> {{ articulo.fecha }}</span>
            <span><i class="bi bi-clock"></i> {{ articulo.tiempo_lectura }} lectura</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENIDO -->
    <section class="detail-body">
      <div class="container detail-body__inner">

        <article class="detail-article">
          <p class="detail-article__resumen">{{ articulo.resumen }}</p>
          <div class="detail-article__content">
            <p v-for="(parrafo, i) in parrafos" :key="i">{{ parrafo }}</p>
          </div>

          <!-- CTA -->
          <div class="detail-cta">
            <p>¿Tienes dudas sobre este tema? Consúltanos sin compromiso.</p>
            <a :href="whatsappUrl" target="_blank" class="detail-cta__btn">
              <i class="bi bi-whatsapp"></i> Hablemos por WhatsApp
            </a>
          </div>
        </article>

        <!-- SIDEBAR -->
        <aside class="detail-sidebar">
          <div class="sidebar-autor">
            <img :src="autorFoto" :alt="articulo.autor" />
            <div>
              <h4>{{ articulo.autor }}</h4>
              <span>Especialista en Clínica San Martín</span>
            </div>
          </div>

          <div class="sidebar-cats">
            <h4>Categorías</h4>
            <div class="sidebar-cats__list">
              <RouterLink
                v-for="cat in articulo.categorias"
                :key="cat"
                to="/blog"
                class="sidebar-cat"
              >
                <i class="bi bi-tag"></i> {{ cat }}
              </RouterLink>
            </div>
          </div>

          <div class="sidebar-relacionados" v-if="relacionados.length">
            <h4>Artículos relacionados</h4>
            <div class="sidebar-rel__list">
              <RouterLink
                v-for="r in relacionados"
                :key="r.slug"
                :to="'/blog/' + r.slug"
                class="sidebar-rel__item"
              >
                <img :src="r.imagen" :alt="r.titulo" />
                <div>
                  <p>{{ r.titulo }}</p>
                  <span><i class="bi bi-clock"></i> {{ r.tiempo_lectura }}</span>
                </div>
              </RouterLink>
            </div>
          </div>
        </aside>

      </div>
    </section>

  </main>

  <!-- 404 -->
  <main v-else class="blog-404">
    <div class="container">
      <i class="bi bi-file-earmark-x"></i>
      <h2>Artículo no encontrado</h2>
      <p>El artículo que buscas no existe o fue eliminado.</p>
      <RouterLink to="/blog" class="blog-404__btn">Ver todos los artículos</RouterLink>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { articulos } from '../data/blog.js'

const whatsappUrl = 'https://wa.me/51934423066'
const route = useRoute()

const articulo = computed(() =>
  articulos.find(a => a.slug === route.params.slug)
)

const parrafos = computed(() =>
  articulo.value?.contenido
    .split('\n')
    .map(p => p.trim())
    .filter(p => p.length > 0) ?? []
)

const autorFoto = computed(() => {
  if (articulo.value?.autor.includes('María')) {
    return 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80'
  }
  return 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80'
})

const relacionados = computed(() => {
  if (!articulo.value) return []
  return articulos
    .filter(a =>
      a.slug !== articulo.value.slug &&
      a.categorias.some(c => articulo.value.categorias.includes(c))
    )
    .slice(0, 3)
})
</script>

<style scoped>
.blog-detail {
  margin-top: calc(-1 * var(--navbar-height));
  padding-top: var(--navbar-height);
}

/* ===== HERO ===== */
.detail-hero {
  position: relative;
  height: 480px;
  overflow: hidden;
}

.detail-hero__img {
  position: absolute;
  inset: 0;
}

.detail-hero__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.detail-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(13,77,139,0.95) 0%, rgba(19,78,134,0.6) 60%, transparent 100%);
}

.detail-hero__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 3rem;
}

.detail-hero__cats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.detail-hero__cat {
  background: #80e89b;
  color: #134e86;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

.detail-hero__content h1 {
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  max-width: 800px;
}

.detail-hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.detail-hero__meta span {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.8);
}

/* ===== BODY ===== */
.detail-body {
  background: #f8f9fa;
  padding: 4rem 0 6rem;
}

.detail-body__inner {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 3rem;
  align-items: start;
}

/* ===== ARTICLE ===== */
.detail-article {
  background: #fff;
  border-radius: 24px;
  padding: 3rem;
}

.detail-article__resumen {
  font-weight: 700;
  color: #134e86;
  line-height: 1.7;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #eae6e3;
  margin-bottom: 1.5rem;
}

.detail-article__content p {
  color: #4B5563;
  line-height: 1.9;
  margin-bottom: 1.25rem;
}

.detail-cta {
  background: #134e86;
  border-radius: 20px;
  padding: 2rem;
  margin-top: 2.5rem;
  text-align: center;
}

.detail-cta p {
  color: rgba(255,255,255,0.85);
  margin-bottom: 1.25rem;
}

.detail-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #25D366;
  color: #fff;
  font-weight: 800;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
}

.detail-cta__btn:hover {
  background: #1da851;
  transform: translateY(-2px);
}

/* ===== SIDEBAR ===== */
.detail-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: sticky;
  top: calc(var(--navbar-height) + 1rem);
}

.sidebar-autor {
  background: #fff;
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sidebar-autor img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.sidebar-autor h4 {
  font-weight: 800;
  color: #134e86;
  margin-bottom: 0.2rem;
}

.sidebar-autor span {
  color: #6B7280;
}

.sidebar-cats {
  background: #fff;
  border-radius: 20px;
  padding: 1.5rem;
}

.sidebar-cats h4 {
  font-weight: 800;
  color: #134e86;
  margin-bottom: 1rem;
}

.sidebar-cats__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.sidebar-cat {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #eae6e3;
  color: #134e86;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
}

.sidebar-cat:hover {
  background: #134e86;
  color: #fff;
}

.sidebar-relacionados {
  background: #fff;
  border-radius: 20px;
  padding: 1.5rem;
}

.sidebar-relacionados h4 {
  font-weight: 800;
  color: #134e86;
  margin-bottom: 1rem;
}

.sidebar-rel__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar-rel__item {
  display: flex;
  gap: 0.75rem;
  text-decoration: none;
  align-items: flex-start;
  transition: opacity 0.2s;
}

.sidebar-rel__item:hover { opacity: 0.75; }

.sidebar-rel__item img {
  width: 70px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
}

.sidebar-rel__item p {
  font-weight: 600;
  color: #134e86;
  line-height: 1.3;
  margin-bottom: 0.3rem;
}

.sidebar-rel__item span {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #9CA3AF;
}

/* ===== 404 ===== */
.blog-404 {
  min-height: 60vh;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: var(--navbar-height);
}

.blog-404 i {
  font-size: 4rem;
  color: #d1d5db;
  display: block;
  margin-bottom: 1rem;
}

.blog-404 h2 {
  font-weight: 900;
  color: #134e86;
  margin-bottom: 0.5rem;
}

.blog-404 p {
  color: #6B7280;
  margin-bottom: 1.5rem;
}

.blog-404__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #134e86;
  color: #fff;
  font-weight: 700;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s;
}

.blog-404__btn:hover {
  background: #0d3d6e;
  transform: translateY(-2px);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .detail-body__inner { grid-template-columns: 1fr; }
  .detail-sidebar { position: relative; top: 0; }
}

@media (max-width: 768px) {
  .detail-hero { height: 360px; }
  .detail-hero__content h1 { font-size: 1.5rem; }
  .detail-article { padding: 1.5rem; }
}

/* ===== TIPOGRAFÍA ===== */
.detail-hero__cat        { font-size: var(--text-badge); }
.detail-hero__content h1 { font-size: var(--text-hero-title); }
.detail-hero__meta span  { font-size: var(--text-small); }
.detail-article__resumen { font-size: var(--text-body-lg); }
.detail-article__content p { font-size: var(--text-body-lg); }
.detail-cta p            { font-size: var(--text-body); }
.detail-cta__btn         { font-size: var(--text-body); }
.sidebar-autor h4        { font-size: var(--text-card-title); }
.sidebar-autor span      { font-size: var(--text-small); }
.sidebar-cats h4         { font-size: var(--text-card-title); }
.sidebar-cat             { font-size: var(--text-small); }
.sidebar-relacionados h4 { font-size: var(--text-card-title); }
.sidebar-rel__item p     { font-size: var(--text-small); }
.sidebar-rel__item span  { font-size: var(--text-small); }
</style>