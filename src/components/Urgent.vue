<template>
  <div class="app-shell">
    <header class="page-header page-header--muted sticky top-0 z-50">
      <div class="page-container-6xl page-header__layout">
        <div>
          <p class="page-kicker">Mind Space</p>
          <h1 class="page-title">Urgent Help</h1>
        </div>
        <button
          class="button-pill button-pill--success-strong button-pill--surface"
          @click="emit('navigate', 'home')"
        >
          ← Back to home
        </button>
      </div>
    </header>

    <main class="page-container-6xl py-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-4">
        <div class="rounded-3xl border border-rose-500/40 bg-rose-500/10 p-6 shadow-lg shadow-slate-900/40">
          <p class="section-label text-danger-strong">Immediate support</p>
          <h2 class="mt-2 section-title">You are not alone</h2>
          <p class="text-body-relaxed leading-relaxed text-soft">
            Reach out to trusted people, professionals, or local crisis lines for real-time support.
          </p>
          <div class="mt-5 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-soft">
            Crisis links placeholder
          </div>
        </div>

        <div class="page-section">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="section-label">Support options</p>
              <h2 class="section-title">Ways to get help now</h2>
            </div>
            <span class="pill-muted">24/7</span>
          </div>
          <ul class="mt-6 space-y-4 text-sm text-muted">
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
          <p class="section-label">Simple commands</p>
          <div class="mt-5 space-y-4">
            <button
              class="panel-button panel-button--danger"
            >
              Open Safety Help
            </button>
            <button
              class="panel-button panel-button--danger"
            >
              View support options
            </button>
          </div>
        </div>

        <div class="page-section">
          <p class="section-label">Reminder</p>
          <p class="text-body-relaxed">
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
