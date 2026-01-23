<template>
  <div class="app-shell app-shell--relative">
    <div class="pb-32">
      <component :is="activeComponent" @navigate="handleNavigate" />
    </div>
    <nav
      class="fixed bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 shadow-2xl shadow-slate-950/40 backdrop-blur"
      aria-label="Primary"
    >
      <button
        v-for="item in navItems"
        :key="item.page"
        class="flex h-14 w-14 items-center justify-center rounded-full text-xl text-primary transition"
        :class="[
          item.color,
          activeNav === item.page ? 'ring-2 ring-white/70 ring-offset-2 ring-offset-slate-900' : 'opacity-80 hover:opacity-100'
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
  { page: 'home', label: 'Mood check', icon: '🏠', color: 'bg-emerald-500/90' },
  { page: 'assessment', label: 'Assessment', icon: '📝', color: 'bg-sky-500/90' },
  { page: 'progress', label: 'Progress', icon: '📈', color: 'bg-violet-500/90' },
  { page: 'resources', label: 'Resources', icon: '📚', color: 'bg-amber-500/90' },
  { page: 'safety', label: 'Urgent help', icon: '🆘', color: 'bg-rose-500/90' },
]

const activeNav = computed(() => {
  const navPages = navItems.map((item) => item.page)
  return navPages.includes(activePage.value) ? activePage.value : 'home'
})

const handleNavigate = (page) => {
  activePage.value = page === 'check-in-quiz' ? 'assessment' : page
}
</script>
