<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="border-b border-white/10 bg-slate-900/60">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Mind Space</p>
          <h1 class="text-3xl font-semibold text-white">New Consultation Thread</h1>
        </div>
        <div class="flex items-center gap-3">
          <div class="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
            Draft in progress
          </div>
          <button
            class="rounded-full border border-white/10 bg-slate-800/70 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-200"
            @click="emit('navigate', 'home')"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <main class="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-6">
        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-400">New consultation thread</p>
              <h2 class="text-2xl font-semibold text-white">Explain what’s happening</h2>
              <p class="mt-2 text-slate-300">
                Share the story in your own words or choose a topic to guide the thread.
              </p>
            </div>
            <div class="flex items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              Drafting
            </div>
          </div>
          <div class="mt-6 space-y-4">
            <label class="block text-sm font-medium text-slate-200" for="thread-notes">
              Explain what’s happening
            </label>
            <textarea
              id="thread-notes"
              rows="6"
              placeholder="Describe what led up to this moment, what feels most urgent, and what support you need."
              class="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            ></textarea>
            <div class="flex flex-wrap items-center gap-3">
              <div class="flex-1">
                <label class="block text-xs uppercase tracking-[0.2em] text-slate-400" for="thread-topic">
                  Optional topic
                </label>
                <select
                  id="thread-topic"
                  class="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option>Pick a topic</option>
                  <option>Stress</option>
                  <option>Anxiety</option>
                  <option>Study</option>
                  <option>Sleep</option>
                </select>
              </div>
              <button
                class="h-fit rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/20"
              >
                Help me explain
              </button>
            </div>
          </div>
          <div class="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <div class="flex items-center justify-between">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Suggested phrasing templates</p>
              <span class="text-xs text-slate-500">Templates, not AI-generated</span>
            </div>
            <ul class="mt-3 space-y-2 text-sm text-slate-200">
              <li class="rounded-xl bg-slate-900/70 px-3 py-2">
                “I’ve been noticing ___ lately, and it’s starting to affect ___.”
              </li>
              <li class="rounded-xl bg-slate-900/70 px-3 py-2">
                “The toughest part right now is ___, and I’m hoping to find ways to ___.”
              </li>
              <li class="rounded-xl bg-slate-900/70 px-3 py-2">
                “I could use support with ___ because ___ feels overwhelming.”
              </li>
            </ul>
          </div>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-emerald-500/10 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Simple commands</p>
          <div class="mt-5 space-y-4">
            <div class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Command</p>
              <p class="mt-2 text-sm font-medium text-white">Generate Example Phrases</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Command</p>
              <p class="mt-2 text-sm font-medium text-white">Post Thread</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Command</p>
              <p class="mt-2 text-sm font-medium text-white">Save Draft</p>
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
