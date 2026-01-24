<template>
  <div class="app-shell app-shell--relative">
    <div class="pb-32">
      <component :is="activeComponent" @navigate="handleNavigate" />
    </div>
    <nav
      class="nav-surface fixed bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 rounded-full px-6 py-3"
      aria-label="Primary"
    >
      <button
        v-for="item in navItems"
        :key="item.page"
        class="nav-button"
        :class="[
          item.color,
          activeNav === item.page ? 'nav-button--active' : 'nav-button--inactive'
        ]"
        :aria-label="item.label"
        @click="handleNavigate(item.page)"
      >
        <span aria-hidden="true">{{ item.icon }}</span>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import HomePage from './components/HomePage.vue'
import CheckInQuizPage from './components/CheckInQuizPage.vue'
import NewConsultationPage from './components/NewConsultationPage.vue'
import ThreadDetailPage from './components/ThreadDetailPage.vue'
import ProgressPage from './components/ProgressPage.vue'
import SafetyPage from './components/Urgent.vue'
import ResourcesPage from './components/ResourcesPage.vue'

const activePage = ref('home')

const activeComponent = computed(() => {
  if (activePage.value === 'new-thread') {
    return NewConsultationPage
  }

  if (activePage.value === 'assessment') {
    return CheckInQuizPage
  }

  if (activePage.value === 'thread-detail') {
    return ThreadDetailPage
  }

  if (activePage.value === 'progress') {
    return ProgressPage
  }

  if (activePage.value === 'resources') {
    return ResourcesPage
  }

  if (activePage.value === 'safety') {
    return SafetyPage
  }

  return HomePage
})

const navItems = [
  { page: 'home', label: 'Mood check', icon: '🏠', color: 'nav-button--emerald' },
  { page: 'assessment', label: 'Assessment', icon: '📝', color: 'nav-button--sky' },
  { page: 'progress', label: 'Progress', icon: '📈', color: 'nav-button--violet' },
  { page: 'resources', label: 'Resources', icon: '📚', color: 'nav-button--amber' },
  { page: 'safety', label: 'Urgent help', icon: '🆘', color: 'nav-button--rose' },
]

const activeNav = computed(() => {
  const navPages = navItems.map((item) => item.page)
  return navPages.includes(activePage.value) ? activePage.value : 'home'
})

const handleNavigate = (page) => {
  activePage.value = page === 'check-in-quiz' ? 'assessment' : page
}
</script>
