<template>
  <div>
    <PageHeader title="Resources" />

    <main class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
      <section class="page-section bg-surface">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-2xl font-semibold">Grounding exercises</h2>
        </div>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <div class="page-section page-section--sm bg-surface-2 text-sm">
            <span class="text-muted">4-7-8 breathing with a slow count and a longer exhale.</span>
          </div>
          <div class="page-section page-section--sm bg-surface-2 text-sm">
            <span class="text-muted">5-4-3-2-1 check: name what you can sense around you.</span>
          </div>
          <div class="page-section page-section--sm bg-surface-2 text-sm">
            <span class="text-muted">Gentle stretch sequence to release neck and shoulder tension.</span>
          </div>
          <div class="page-section page-section--sm bg-surface-2 text-sm">
            <span class="text-muted">Write down three supportive phrases you want to remember today.</span>
          </div>
        </div>
      </section>

      <section class="page-section bg-surface">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-2xl font-semibold">Skill library</h2>
          <span class="pill bg-warning">Updated weekly</span>
        </div>
        <ul class="mt-4 space-y-3 text-sm">
          <li class="page-section page-section--sm bg-surface-2">
            <span class="text-muted">Thought reframing worksheet for shifting unhelpful patterns.</span>
          </li>
          <li class="page-section page-section--sm bg-surface-2">
            <span class="text-muted">Energy map template to track tasks that drain or restore you.</span>
          </li>
          <li class="page-section page-section--sm bg-surface-2">
            <span class="text-muted">Mood tracker journal prompts for morning and evening check-ins.</span>
          </li>
          <li class="page-section page-section--sm bg-surface-2">
            <span class="text-muted">Sleep wind-down routine with gentle audio cues and timers.</span>
          </li>
        </ul>
      </section>

      <section class="page-section bg-warning">
        <h2 class="text-2xl font-semibold">Connect with guided resources</h2>
        <p class="mt-3 text-sm text-muted">
          Explore curated podcasts, booklists, and local directories to find ongoing support.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
import PageHeader from './PageHeader.vue'

const emit = defineEmits(['navigate'])
</script>
