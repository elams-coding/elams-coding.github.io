<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, ref, onMounted, onUnmounted } from 'vue'

const { page } = useData()

const isFormations = computed(() => page.value.relativePath === 'pages/formations.md')
const isCompetences = computed(() => page.value.relativePath === 'pages/competences-techniques.md')

const activeSection = ref('')

const sectionIds = [
  'developpement-web',
  'developpement-applicatif',
  'bases-de-donnees',
  'gestion-de-projet',
  'deploiement-et-infrastructure',
  'outils-et-environnements'
]

function updateActiveSection() {
  const offset = 130
  let current = ''
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= offset) {
      current = id
    }
  }
  activeSection.value = current
}

onMounted(() => {
  if (!isCompetences.value) return
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <div v-if="isFormations" class="aside-panel">
    <p class="aside-panel__title">En un coup d'œil</p>
    <ul class="aside-panel__list">
      <li class="aside-panel__item">
        <span class="aside-panel__label">BTS SIO SLAM</span>
        <span class="aside-panel__badge aside-panel__badge--progress">En cours</span>
      </li>
      <li class="aside-panel__item">
        <span class="aside-panel__label">BUT Informatique</span>
        <span class="aside-panel__badge aside-panel__badge--partial">1ère année</span>
      </li>
      <li class="aside-panel__item">
        <span class="aside-panel__label">Bac général</span>
        <span class="aside-panel__badge aside-panel__badge--done">Obtenu</span>
      </li>
    </ul>
  </div>

  <div v-if="isCompetences" class="aside-panel">
    <p class="aside-panel__title">Catégories</p>
    <ul class="aside-panel__list">
      <li class="aside-panel__item aside-panel__item--link">
        <a href="#developpement-web" :class="{ 'is-active': activeSection === 'developpement-web' }">Développement web</a>
      </li>
      <li class="aside-panel__item aside-panel__item--link">
        <a href="#developpement-applicatif" :class="{ 'is-active': activeSection === 'developpement-applicatif' }">Développement applicatif</a>
      </li>
      <li class="aside-panel__item aside-panel__item--link">
        <a href="#bases-de-donnees" :class="{ 'is-active': activeSection === 'bases-de-donnees' }">Bases de données</a>
      </li>
      <li class="aside-panel__item aside-panel__item--link">
        <a href="#gestion-de-projet" :class="{ 'is-active': activeSection === 'gestion-de-projet' }">Gestion de projet</a>
      </li>
      <li class="aside-panel__item aside-panel__item--link">
        <a href="#deploiement-et-infrastructure" :class="{ 'is-active': activeSection === 'deploiement-et-infrastructure' }">Déploiement et infra</a>
      </li>
      <li class="aside-panel__item aside-panel__item--link">
        <a href="#outils-et-environnements" :class="{ 'is-active': activeSection === 'outils-et-environnements' }">Outils et environnements</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.aside-panel {
  margin-top: 1.5rem;
  padding: 1rem 1.1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
}

.aside-panel__title {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--vp-c-text-3);
  margin: 0 0 0.85rem;
}

.aside-panel__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.aside-panel__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
}

.aside-panel__item:hover {
  transform: none;
  background: none;
  border-left-color: transparent;
}

.aside-panel__label {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  flex: 1;
}

.aside-panel__badge {
  font-size: 0.68rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 20px;
  white-space: nowrap;
}

.aside-panel__badge--progress {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.aside-panel__badge--partial {
  background: color-mix(in srgb, var(--vp-c-yellow-soft) 80%, transparent);
  color: var(--vp-c-yellow-darker, #b88a00);
}

.aside-panel__badge--done {
  background: color-mix(in srgb, var(--vp-c-green-soft) 80%, transparent);
  color: var(--vp-c-green-darker, #1a7f4b);
}

.aside-panel__item--link {
  display: block;
  justify-content: unset;
}

.aside-panel__item--link a {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.15s ease;
}

.aside-panel__item--link a:hover {
  color: var(--vp-c-brand-1);
}

.aside-panel__item--link a.is-active {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>
