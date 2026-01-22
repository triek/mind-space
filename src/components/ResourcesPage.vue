<template>
  <div class="app-shell">
    <header class="page-header page-header--muted">
      <div class="page-container-5xl page-header__layout py-4">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Mind Space</p>
          <h1 class="text-3xl font-semibold text-white">Resources</h1>
        </div>
        <button
          class="rounded-full border border-white/10 bg-slate-800/70 px-4 py-2 text-sm text-slate-200 transition hover:border-amber-300/60 hover:text-amber-100"
          @click="emit('navigate', 'home')"
        >
          ← Back to home
        </button>
      </div>
    </header>

    <main class="page-container-5xl flex flex-col gap-6 py-4">
      <section class="page-section">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Quick reset</p>
            <h2 class="text-2xl font-semibold text-white">Grounding exercises</h2>
          </div>
          <span class="pill-muted">5 minutes</span>
        </div>
        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <div class="panel-item p-4 text-sm text-slate-200">
            4-7-8 breathing with a slow count and a longer exhale.
          </div>
          <div class="panel-item p-4 text-sm text-slate-200">
            5-4-3-2-1 check: name what you can sense around you.
          </div>
          <div class="panel-item p-4 text-sm text-slate-200">
            Gentle stretch sequence to release neck and shoulder tension.
          </div>
          <div class="panel-item p-4 text-sm text-slate-200">
            Write down three supportive phrases you want to remember today.
          </div>
        </div>
      </section>

      <section class="page-section">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Self-guided tools</p>
            <h2 class="text-2xl font-semibold text-white">Skill library</h2>
          </div>
          <span class="pill-muted">Updated weekly</span>
        </div>
        <ul class="mt-6 space-y-3 text-sm text-slate-300">
          <li class="panel-item px-4 py-3">
            Thought reframing worksheet for shifting unhelpful patterns.
          </li>
          <li class="panel-item px-4 py-3">
            Energy map template to track tasks that drain or restore you.
          </li>
          <li class="panel-item px-4 py-3">
            Mood tracker journal prompts for morning and evening check-ins.
          </li>
          <li class="panel-item px-4 py-3">
            Sleep wind-down routine with gentle audio cues and timers.
          </li>
        </ul>
      </section>

      <section class="page-section page-section--gradient-amber">
        <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Community support</p>
        <h2 class="mt-2 text-2xl font-semibold text-white">Connect with guided resources</h2>
        <p class="mt-3 text-sm text-slate-300">
          Explore curated podcasts, booklists, and local directories to find ongoing support.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
const emit = defineEmits(['navigate'])
</script>
