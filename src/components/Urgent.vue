<template>
  <div class="app-shell">
    <header class="page-header page-header--muted">
      <div class="page-container-6xl flex flex-wrap items-center justify-between gap-4 py-4">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Mind Space</p>
          <h1 class="text-3xl font-semibold text-white">Urgent Help</h1>
        </div>
        <button
          class="rounded-full border border-white/10 bg-slate-800/70 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-100"
          @click="emit('navigate', 'home')"
        >
          ← Back to home
        </button>
      </div>
    </header>

    <main class="page-container-6xl grid gap-6 py-10 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-6">
        <div class="rounded-3xl border border-rose-500/40 bg-rose-500/10 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-rose-200">Immediate support</p>
          <h2 class="mt-2 text-2xl font-semibold text-white">You are not alone</h2>
          <p class="mt-3 text-sm leading-relaxed text-slate-200">
            Reach out to trusted people, professionals, or local crisis lines for real-time support.
          </p>
          <div class="mt-5 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200">
            Crisis links placeholder
          </div>
        </div>

        <div class="page-section">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Support options</p>
              <h2 class="text-2xl font-semibold text-white">Ways to get help now</h2>
            </div>
            <span class="pill-muted">24/7</span>
          </div>
          <ul class="mt-6 space-y-4 text-sm text-slate-300">
            <li class="panel-item px-4 py-3">
              Share your location with someone you trust and stay connected while you wait for help.
            </li>
            <li class="panel-item px-4 py-3">
              Use breathing or grounding exercises while you contact a professional support line.
            </li>
            <li class="panel-item px-4 py-3">
              Ask a friend or family member to be with you if you feel overwhelmed.
            </li>
          </ul>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="page-section page-section--gradient-rose">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Simple commands</p>
          <div class="mt-5 space-y-4">
            <button
              class="panel-item w-full px-4 py-3 text-left text-sm font-medium text-white transition hover:border-rose-400/70 hover:text-rose-100"
            >
              Open Safety Help
            </button>
            <button
              class="panel-item w-full px-4 py-3 text-left text-sm font-medium text-white transition hover:border-rose-400/70 hover:text-rose-100"
            >
              View support options
            </button>
          </div>
        </div>

        <div class="page-section">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Reminder</p>
          <p class="mt-3 text-sm text-slate-300">
            Keep this page bookmarked so it is easy to reach from any screen.
          </p>
        </div>
      </aside>
    </main>
  </div>
  <div>
    
  </div>
</template>

<script setup>
const emit = defineEmits(['navigate'])
</script>
