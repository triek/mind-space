<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="border-b border-white/10 bg-slate-900/60">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Mind Space</p>
          <h1 class="text-3xl font-semibold text-white">Thread Detail</h1>
        </div>
        <button
          class="rounded-full border border-white/10 bg-slate-800/80 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-200"
          @click="emit('navigate', 'home')"
        >
          Back to dashboard
        </button>
      </div>
    </header>

    <main class="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-6">
        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Timeline</p>
              <h2 class="text-2xl font-semibold text-white">Work-life balance check-in</h2>
              <p class="mt-2 text-slate-300">
                A running record of your conversation with your counselor. Replies are placeholders for
                now.
              </p>
            </div>
            <span class="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">Active</span>
          </div>
          <div class="mt-6 space-y-4">
            <div class="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">You · 9:10 AM</p>
              <p class="mt-2 text-sm text-slate-100">
                I felt stretched thin this week and had trouble disconnecting after work.
              </p>
            </div>
            <div class="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-emerald-200">Counselor · 9:18 AM</p>
              <p class="mt-2 text-sm text-slate-100">
                Thanks for sharing that. Let’s focus on a short wind-down ritual to help you transition
                out of work mode.
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">You · 9:32 AM</p>
              <p class="mt-2 text-sm text-slate-100">
                I can try a quick walk and a short breathing exercise before dinner.
              </p>
            </div>
            <div class="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-emerald-200">Counselor · 9:45 AM</p>
              <p class="mt-2 text-sm text-slate-100">
                Great plan. I’ll share a two-minute grounding audio and check in tomorrow.
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Add message</p>
          <div class="mt-4 space-y-4">
            <textarea
              rows="4"
              class="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/60 focus:outline-none"
              placeholder="Write your next message to your counselor..."
            ></textarea>
            <div class="flex flex-wrap items-center justify-between gap-3">
              <button
                class="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/20"
              >
                Add resource link
              </button>
              <span class="text-xs text-slate-400">Attach a resource from your library</span>
            </div>
          </div>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/70 to-emerald-500/10 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Simple commands</p>
          <div class="mt-5 space-y-4">
            <button class="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-emerald-400/60 hover:text-emerald-200">
              <span>Send Message</span>
              <span class="text-lg">↗</span>
            </button>
            <button class="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-emerald-400/60 hover:text-emerald-200">
              <span>Mark As Helpful</span>
              <span class="text-lg">★</span>
            </button>
            <button class="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-emerald-400/60 hover:text-emerald-200">
              <span>Attach Resource</span>
              <span class="text-lg">＋</span>
            </button>
          </div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Thread summary</p>
          <p class="mt-3 text-sm text-slate-300">
            Focus area: transition rituals, work boundary reminders, and restorative breaks.
          </p>
          <div class="mt-6 grid gap-3">
            <div class="rounded-2xl bg-slate-800/70 px-4 py-3 text-xs text-slate-300">
              Next check-in: Tomorrow morning
            </div>
            <div class="rounded-2xl bg-slate-800/70 px-4 py-3 text-xs text-slate-300">
              Resource queued: 2-minute grounding audio
            </div>
          </div>
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
