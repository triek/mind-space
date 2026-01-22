<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="border-b border-white/10 bg-slate-900/60">
      <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Mind Space</p>
          <h1 class="text-3xl font-semibold text-white">Resources</h1>
          <p class="mt-2 text-sm text-slate-300">Tools, guides, and grounding exercises.</p>
        </div>
        <button
          class="rounded-full border border-white/10 bg-slate-800/70 px-4 py-2 text-sm text-slate-200 transition hover:border-amber-300/60 hover:text-amber-100"
          @click="emit('navigate', 'home')"
        >
          ← Back to home
        </button>
      </div>
    </header>

    <main class="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10">
      <section class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Quick reset</p>
            <h2 class="text-2xl font-semibold text-white">Grounding exercises</h2>
          </div>
          <span class="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">5 minutes</span>
        </div>
        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-slate-800/70 p-4 text-sm text-slate-200">
            4-7-8 breathing with a slow count and a longer exhale.
          </div>
          <div class="rounded-2xl border border-white/10 bg-slate-800/70 p-4 text-sm text-slate-200">
            5-4-3-2-1 check: name what you can sense around you.
          </div>
          <div class="rounded-2xl border border-white/10 bg-slate-800/70 p-4 text-sm text-slate-200">
            Gentle stretch sequence to release neck and shoulder tension.
          </div>
          <div class="rounded-2xl border border-white/10 bg-slate-800/70 p-4 text-sm text-slate-200">
            Write down three supportive phrases you want to remember today.
          </div>
        </div>
      </section>

      <section class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Self-guided tools</p>
            <h2 class="text-2xl font-semibold text-white">Skill library</h2>
          </div>
          <span class="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">Updated weekly</span>
        </div>
        <ul class="mt-6 space-y-3 text-sm text-slate-300">
          <li class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
            Thought reframing worksheet for shifting unhelpful patterns.
          </li>
          <li class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
            Energy map template to track tasks that drain or restore you.
          </li>
          <li class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
            Mood tracker journal prompts for morning and evening check-ins.
          </li>
          <li class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
            Sleep wind-down routine with gentle audio cues and timers.
          </li>
        </ul>
      </section>

      <section class="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-amber-500/10 p-6 shadow-lg shadow-slate-900/40">
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
