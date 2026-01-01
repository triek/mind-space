<template>
  <component :is="activeComponent" @navigate="handleNavigate" />
</template>

<script setup>
import { computed, ref } from 'vue'
import HomePage from './components/HomePage.vue'
import NewConsultationPage from './components/NewConsultationPage.vue'
import ThreadDetailPage from './components/ThreadDetailPage.vue'

const activePage = ref('home')

const activeComponent = computed(() => {
  if (activePage.value === 'new-thread') {
    return NewConsultationPage
  }
  if (activePage.value === 'thread-detail') {
    return ThreadDetailPage
  }
  return HomePage
})

const handleNavigate = (page) => {
  activePage.value = page
}
</script>
