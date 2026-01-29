<template>
  <div>
    <PageHeader title="Home" />

    <main class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
      <section class="page-section bg-surface">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <h2 class="text-2xl font-semibold">How are you feeling today?</h2>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <button class="button button--lg w-full justify-start bg-success">
            🌤️ Calm
          </button>
          <button class="button button--lg w-full justify-start bg-warning">
            🌿 Steady
          </button>
          <button class="button button--lg w-full justify-start bg-info">
            💭 Reflective
          </button>
          <button class="button button--lg w-full justify-start bg-danger">
            🌧️ Overwhelmed
          </button>
        </div>
      </section>

      <section class="page-section bg-surface">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-muted">Latest thread</p>
            <h3 class="text-xl font-semibold">Work-life balance</h3>
            <p class="mt-2 text-sm text-muted">
              You mentioned feeling stretched in meetings. Suggested focus: short recovery breaks.
            </p>
          </div>
          <span class="pill bg-warning">Updated 2h ago</span>
        </div>
        <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p class="text-xs uppercase tracking-[0.2em] text-muted">Last step saved</p>
          <button
            class="button button--sm rounded-full bg-success"
            @click="emit('navigate', 'thread-detail')"
          >
            Continue thread
          </button>
        </div>
      </section>

      <section class="page-section bg-surface">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-muted">Create a new thread</p>
            <h3 class="text-xl font-semibold">What feels important today?</h3>
            <p class="mt-2 text-sm text-muted">
              Start a new conversation to capture thoughts, goals, or questions.
            </p>
          </div>
          <span class="pill bg-warning">Draft ready</span>
        </div>
        <div class="page-section page-section--sm mt-5 bg-surface-2 text-sm">
          <span class="text-muted">"I want to feel less anxious before my next project review."</span>
        </div>
        <button
          class="button button--lg mt-5 w-full bg-info"
          @click="emit('navigate', 'new-thread')"
        >
          Create new thread
        </button>
      </section>

      <section class="page-section bg-info">
        <p class="text-xs uppercase tracking-[0.2em] text-muted">Quick actions</p>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            class="button button--lg w-full justify-between bg-success"
            @click="emit('navigate', 'assessment')"
          >
            <span>Start an assessment</span>
            <span class="text-lg">📝</span>
          </button>
          <button
            class="button button--lg w-full justify-between bg-primary"
            @click="emit('navigate', 'progress')"
          >
            <span>Review progress</span>
            <span class="text-lg">📈</span>
          </button>
        </div>
      </section>
    </main>
  </div>
</template>



<script setup>
import PageHeader from './PageHeader.vue'

const emit = defineEmits(['navigate'])
</script>
