<template>
  <component :is="activeComponent" @navigate="handleNavigate" />
</template>

<script setup>
import { computed, ref } from 'vue'
import HomePage from './components/HomePage.vue'
import NewConsultationPage from './components/NewConsultationPage.vue'

const activePage = ref('home')

const activeComponent = computed(() =>
  activePage.value === 'new-thread' ? NewConsultationPage : HomePage
)

const handleNavigate = (page) => {
  activePage.value = page
}
</script>
