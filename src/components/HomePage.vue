<template>
  <div class="app-shell">
    <header class="page-header page-header--muted sticky top-0 z-50">
      <div class="page-container-6xl page-header__layout">
        <div>
          <h1 class="page-title">MindSpace</h1>
        </div>
      </div>
    </header>

    <main class="page-container-6xl py-4 flex flex-col gap-4">
      <section class="page-section">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="section-label">Mood check</p>
            <h2 class="section-title">How are you feeling right now?</h2>
            <p class="text-body-tight">
              Tap a mood to start your daily log. You can update it anytime.
            </p>
          </div>
          <div class="pill-muted flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
            Check-in open
          </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <button class="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm font-medium text-primary transition hover:border-emerald-400/60 hover-text-success">
            🌤️ Calm
          </button>
          <button class="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm font-medium text-primary transition hover:border-amber-400/60 hover-text-warning-soft">
            🌿 Steady
          </button>
          <button class="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm font-medium text-primary transition hover:border-sky-400/60 hover-text-info">
            💭 Reflective
          </button>
          <button class="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm font-medium text-primary transition hover:border-rose-400/60 hover-text-danger-soft">
            🌧️ Overwhelmed
          </button>
        </div>
      </section>

      <section class="page-section">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="section-label">Latest thread</p>
            <h3 class="panel-title">Work-life balance</h3>
            <p class="text-body-tight">
              You mentioned feeling stretched in meetings. Suggested focus: short recovery breaks.
            </p>
          </div>
          <span class="pill-muted">Updated 2h ago</span>
        </div>
        <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p class="meta-label">Last step saved</p>
          <button
            class="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-success transition hover:bg-emerald-500/30"
            @click="emit('navigate', 'thread-detail')"
          >
            Continue thread
          </button>
        </div>
      </section>

      <section class="page-section">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="section-label">Create a new thread</p>
            <h3 class="panel-title">What feels important today?</h3>
            <p class="text-body-tight">
              Start a new conversation to capture thoughts, goals, or questions.
            </p>
          </div>
          <span class="pill-muted">Draft ready</span>
        </div>
        <div class="mt-5 rounded-2xl border border-white/10 bg-slate-800/70 p-4 text-sm text-soft">
          "I want to feel less anxious before my next project review."
        </div>
        <button
          class="mt-5 w-full rounded-2xl bg-sky-500/20 px-4 py-3 text-sm font-semibold text-info transition hover:bg-sky-500/30"
          @click="emit('navigate', 'new-thread')"
        >
          Create new thread
        </button>
      </section>

      <section class="page-section page-section--gradient-indigo">
        <p class="section-label">Quick actions</p>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            class="flex items-center justify-between rounded-2xl bg-emerald-500/20 px-4 py-3 text-left text-sm font-medium text-success-strong transition hover:bg-emerald-500/30"
            @click="emit('navigate', 'assessment')"
          >
            <span>Start an assessment</span>
            <span class="text-lg">📝</span>
          </button>
          <button
            class="flex items-center justify-between rounded-2xl bg-violet-500/20 px-4 py-3 text-left text-sm font-medium text-primary transition hover:bg-violet-500/30"
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
const emit = defineEmits(['navigate'])
</script>
