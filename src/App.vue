<template>
  <div class="relative min-h-screen">
    <component :is="activeComponent" @navigate="handleNavigate" />
    <button
      class="fixed bottom-6 right-6 rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-400"
      @click="handleNavigate('safety')"
    >
      I need urgent help
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import HomePage from './components/HomePage.vue'
import CheckInQuizPage from './components/CheckInQuizPage.vue'
import NewConsultationPage from './components/NewConsultationPage.vue'
import ThreadDetailPage from './components/ThreadDetailPage.vue'
import ProgressPage from './components/ProgressPage.vue'
import SafetyPage from './components/SafetyPage.vue'

const activePage = ref('home')

const activeComponent = computed(() => {
  if (activePage.value === 'new-thread') {
    return NewConsultationPage
  }

  if (activePage.value === 'check-in-quiz') {
    return CheckInQuizPage
  }

  if (activePage.value === 'thread-detail') {
    return ThreadDetailPage
  }

  if (activePage.value === 'progress') {
    return ProgressPage
  }

  if (activePage.value === 'safety') {
    return SafetyPage
  }

  return HomePage
})

const handleNavigate = (page) => {
  activePage.value = page
}
</script>
