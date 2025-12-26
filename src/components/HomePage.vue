<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="border-b border-white/10 bg-slate-900/60">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Mind Space</p>
          <h1 class="text-3xl font-semibold text-white">Home Dashboard</h1>
        </div>
        <div class="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
          Today · Personalized support
        </div>
      </div>
    </header>

    <main class="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-6">
        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Mood check</p>
              <h2 class="text-2xl font-semibold text-white">How are you today?</h2>
              <p class="mt-2 text-slate-300">
                Choose the mood that best fits right now. We will tailor your next steps.
              </p>
            </div>
            <div class="flex items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              Checking in
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
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
            <div class="flex items-start justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Latest consultation</p>
                <h3 class="text-xl font-semibold text-white">Thread: Work-life balance</h3>
              </div>
              <span class="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">Updated 2h ago</span>
            </div>
            <p class="mt-4 text-sm leading-relaxed text-slate-300">
              You shared that the past week felt packed with meetings. Suggested focus: short
              recovery breaks and aligning priorities with energy levels.
            </p>
            <div class="mt-6 flex items-center justify-between text-sm">
              <p class="text-slate-400">Next step</p>
              <button class="rounded-full bg-emerald-500/20 px-4 py-2 font-medium text-emerald-200 transition hover:bg-emerald-500/30">
                Continue thread
              </button>
            </div>
          </div>

          <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Last assessment</p>
            <h3 class="text-xl font-semibold text-white">PHQ-9 / GAD-7</h3>
            <div class="mt-6 grid grid-cols-2 gap-4">
              <div class="rounded-2xl bg-slate-800/70 p-4">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-400">PHQ-9</p>
                <p class="mt-3 text-3xl font-semibold text-white">7</p>
                <p class="text-xs text-emerald-200">Mild</p>
              </div>
              <div class="rounded-2xl bg-slate-800/70 p-4">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-400">GAD-7</p>
                <p class="mt-3 text-3xl font-semibold text-white">5</p>
                <p class="text-xs text-sky-200">Minimal</p>
              </div>
            </div>
            <button class="mt-6 w-full rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3 text-sm font-medium text-white transition hover:border-emerald-400/50 hover:text-emerald-200">
              Review assessment history
            </button>
          </div>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Quick links</p>
          <div class="mt-4 space-y-3">
            <button class="flex w-full items-center justify-between rounded-2xl bg-emerald-500/20 px-4 py-3 text-left text-sm font-medium text-emerald-100 transition hover:bg-emerald-500/30">
              <span>New Thread</span>
              <span class="text-lg">＋</span>
            </button>
            <button class="flex w-full items-center justify-between rounded-2xl bg-sky-500/20 px-4 py-3 text-left text-sm font-medium text-sky-100 transition hover:bg-sky-500/30">
              <span>Do Check-in</span>
              <span class="text-lg">🗓️</span>
            </button>
            <button class="flex w-full items-center justify-between rounded-2xl bg-slate-800/80 px-4 py-3 text-left text-sm font-medium text-white transition hover:border hover:border-white/20">
              <span>Resources</span>
              <span class="text-lg">📚</span>
            </button>
          </div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-emerald-500/10 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Simple commands</p>
          <div class="mt-5 space-y-4">
            <div class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Command</p>
              <p class="mt-2 text-sm font-medium text-white">Start New Thread</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Command</p>
              <p class="mt-2 text-sm font-medium text-white">Do Quick Check-in</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Command</p>
              <p class="mt-2 text-sm font-medium text-white">Browse Resources</p>
            </div>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>
