<template>
  <div class="app-shell">
    <header class="page-header page-header--muted sticky top-0 z-50">
      <div class="page-container-6xl page-header__layout">
        <div>
          <p class="page-kicker">Mind Space</p>
          <h1 class="page-title">New Consultation Thread</h1>
        </div>
        <div class="flex items-center gap-3">
          <div class="pill-emerald px-4 py-2 text-sm">
            Draft in progress
          </div>
          <button
            class="button-pill button-pill--success button-pill--surface"
            @click="emit('navigate', 'home')"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <main class="page-container-6xl py-4 grid gap-6 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-6">
        <div class="page-section">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="section-label">New consultation thread</p>
              <h2 class="section-title">Explain what’s happening</h2>
              <p class="text-body-tight">
                Share the story in your own words or choose a topic to guide the thread.
              </p>
            </div>
            <div class="pill-muted flex items-center gap-2">
              <span class="status-dot h-2 w-2 rounded-full"></span>
              Drafting
            </div>
          </div>
          <div class="mt-6 space-y-4">
            <label class="block text-sm font-medium text-soft" for="thread-notes">
              Explain what’s happening
            </label>
            <textarea
              id="thread-notes"
              rows="6"
              placeholder="Describe what led up to this moment, what feels most urgent, and what support you need."
              class="textarea-base textarea-resize-none textarea-ring surface-cream-soft"
            ></textarea>
            <div class="flex flex-wrap items-center gap-3">
              <div class="flex-1">
                <label class="meta-label block" for="thread-topic">
                  Optional topic
                </label>
                <select
                  id="thread-topic"
                  class="surface-cream-strong mt-2 w-full rounded-2xl px-4 py-3 text-sm text-contrast focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200/60"
                >
                  <option>Pick a topic</option>
                  <option>Stress</option>
                  <option>Anxiety</option>
                  <option>Study</option>
                  <option>Sleep</option>
                </select>
              </div>
              <button class="button-emerald button-emerald--fit button-emerald--compact">
                Help me explain
              </button>
            </div>
          </div>
          <div class="surface-cream mt-6 rounded-2xl p-4">
            <div class="flex items-center justify-between">
              <p class="meta-label">Suggested phrasing templates</p>
              <span class="text-xs text-faint">Templates, not AI-generated</span>
            </div>
            <ul class="mt-3 space-y-2 text-sm text-soft">
              <li class="surface-note rounded-xl px-3 py-2">
                “I’ve been noticing ___ lately, and it’s starting to affect ___.”
              </li>
              <li class="surface-note rounded-xl px-3 py-2">
                “The toughest part right now is ___, and I’m hoping to find ways to ___.”
              </li>
              <li class="surface-note rounded-xl px-3 py-2">
                “I could use support with ___ because ___ feels overwhelming.”
              </li>
            </ul>
          </div>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="page-section page-section--gradient-emerald">
          <p class="section-label">Simple commands</p>
          <div class="mt-5 space-y-4">
            <div class="panel-item px-4 py-3">
              <p class="meta-label">Command</p>
              <p class="mt-2 panel-value">Generate Example Phrases</p>
            </div>
            <div class="panel-item px-4 py-3">
              <p class="meta-label">Command</p>
              <p class="mt-2 panel-value">Post Thread</p>
            </div>
            <div class="panel-item px-4 py-3">
              <p class="meta-label">Command</p>
              <p class="mt-2 panel-value">Save Draft</p>
            </div>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script setup>
const emit = defineEmits(['navigate'])
</script>
