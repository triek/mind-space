<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-10 border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div>
          <p class="text-xs uppercase tracking-[0.35em] text-slate-400">Mind Space</p>
          <h1 class="text-2xl font-semibold text-white">Mood Check</h1>
        </div>
        <div class="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-200">
          Today · Ready to check in
        </div>
      </div>
    </header>

    <main class="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8">
      <section class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Mood check</p>
            <h2 class="text-2xl font-semibold text-white">How are you feeling right now?</h2>
            <p class="mt-2 text-sm text-slate-300">
              Tap a mood to start your daily log. You can update it anytime.
            </p>
          </div>
          <div class="flex items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">
            <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
            Check-in open
          </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <button class="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm font-medium text-white transition hover:border-emerald-400/60 hover:text-emerald-200">
            🌤️ Calm
          </button>
          <button class="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm font-medium text-white transition hover:border-amber-400/60 hover:text-amber-200">
            🌿 Steady
          </button>
          <button class="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm font-medium text-white transition hover:border-sky-400/60 hover:text-sky-200">
            💭 Reflective
          </button>
          <button class="rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm font-medium text-white transition hover:border-rose-400/60 hover:text-rose-200">
            🌧️ Overwhelmed
          </button>
        </div>
      </section>

      <section class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Latest thread</p>
            <h3 class="text-xl font-semibold text-white">Work-life balance</h3>
            <p class="mt-2 text-sm text-slate-300">
              You mentioned feeling stretched in meetings. Suggested focus: short recovery breaks.
            </p>
          </div>
          <span class="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">Updated 2h ago</span>
        </div>
        <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Last step saved</p>
          <button
            class="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/30"
            @click="emit('navigate', 'thread-detail')"
          >
            Continue thread
          </button>
        </div>
      </section>

      <section class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Create a new thread</p>
            <h3 class="text-xl font-semibold text-white">What feels important today?</h3>
            <p class="mt-2 text-sm text-slate-300">
              Start a new conversation to capture thoughts, goals, or questions.
            </p>
          </div>
          <span class="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">Draft ready</span>
        </div>
        <div class="mt-5 rounded-2xl border border-white/10 bg-slate-800/70 p-4 text-sm text-slate-200">
          "I want to feel less anxious before my next project review."
        </div>
        <button
          class="mt-5 w-full rounded-2xl bg-sky-500/20 px-4 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/30"
          @click="emit('navigate', 'new-thread')"
        >
          Create new thread
        </button>
      </section>

      <section class="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-indigo-500/10 p-6 shadow-lg shadow-slate-900/40">
        <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Quick actions</p>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <button
            class="flex items-center justify-between rounded-2xl bg-emerald-500/20 px-4 py-3 text-left text-sm font-medium text-emerald-100 transition hover:bg-emerald-500/30"
            @click="emit('navigate', 'assessment')"
          >
            <span>Start an assessment</span>
            <span class="text-lg">📝</span>
          </button>
          <button
            class="flex items-center justify-between rounded-2xl bg-violet-500/20 px-4 py-3 text-left text-sm font-medium text-violet-100 transition hover:bg-violet-500/30"
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
