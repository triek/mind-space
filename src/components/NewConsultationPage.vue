<template>
  <div>
    <header class="sticky top-0 z-50 border-b bg-surface-2">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-faint">Mind Space</p>
          <h1 class="text-3xl font-semibold">New Consultation Thread</h1>
        </div>
        <div class="flex items-center gap-3">
          <div class="pill pill--lg bg-success">
            Draft in progress
          </div>
          <button
            class="button button--sm bg-success"
            @click="emit('navigate', 'home')"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <main class="mx-auto grid max-w-6xl gap-6 px-4 py-4 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-6">
        <div class="page-section bg-surface">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-muted">New consultation thread</p>
              <h2 class="text-2xl font-semibold">Explain what’s happening</h2>
              <p class="mt-2 text-sm text-muted">
                Share the story in your own words or choose a topic to guide the thread.
              </p>
            </div>
            <div class="pill bg-warning">
              <span class="h-2 w-2 rounded-full bg-success"></span>
              Drafting
            </div>
          </div>
          <div class="mt-6 space-y-4">
            <label class="block text-sm font-medium text-muted" for="thread-notes">
              Explain what’s happening
            </label>
            <textarea
              id="thread-notes"
              rows="6"
              placeholder="Describe what led up to this moment, what feels most urgent, and what support you need."
              class="textarea-base resize-none bg-surface-2 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
            ></textarea>
            <div class="flex flex-wrap items-center gap-3">
              <div class="flex-1">
                <label class="block text-xs uppercase tracking-[0.2em] text-muted" for="thread-topic">
                  Optional topic
                </label>
                <select
                  id="thread-topic"
                  class="mt-2 w-full rounded-2xl border bg-surface-2 px-4 py-3 text-sm focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                >
                  <option>Pick a topic</option>
                  <option>Stress</option>
                  <option>Anxiety</option>
                  <option>Study</option>
                  <option>Sleep</option>
                </select>
              </div>
              <button class="button button--sm bg-success">
                Help me explain
              </button>
            </div>
          </div>
          <div class="page-section page-section--sm mt-6 bg-surface-2">
            <div class="flex items-center justify-between">
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Suggested phrasing templates</p>
              <span class="text-xs text-faint">Templates, not AI-generated</span>
            </div>
            <ul class="mt-3 space-y-2 text-sm text-muted">
              <li class="rounded-xl bg-warning px-3 py-2">
                “I’ve been noticing ___ lately, and it’s starting to affect ___.”
              </li>
              <li class="rounded-xl bg-warning px-3 py-2">
                “The toughest part right now is ___, and I’m hoping to find ways to ___.”
              </li>
              <li class="rounded-xl bg-warning px-3 py-2">
                “I could use support with ___ because ___ feels overwhelming.”
              </li>
            </ul>
          </div>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="page-section bg-success">
          <p class="text-xs uppercase tracking-[0.2em] text-muted">Simple commands</p>
          <div class="mt-5 space-y-4">
            <div class="page-section page-section--sm bg-surface-2">
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Command</p>
              <p class="mt-2 text-sm font-medium">Generate Example Phrases</p>
            </div>
            <div class="page-section page-section--sm bg-surface-2">
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Command</p>
              <p class="mt-2 text-sm font-medium">Post Thread</p>
            </div>
            <div class="page-section page-section--sm bg-surface-2">
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Command</p>
              <p class="mt-2 text-sm font-medium">Save Draft</p>
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
