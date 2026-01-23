<template>
  <div class="app-shell">
    <header class="page-header page-header--muted sticky top-0 z-50">
      <div class="page-container-6xl page-header__layout">
        <div>
          <p class="page-kicker">Mind Space</p>
          <h1 class="page-title">Thread Detail</h1>
        </div>
        <button
          class="button-pill button-pill--success button-pill--surface-strong"
          @click="emit('navigate', 'home')"
        >
          Back to dashboard
        </button>
      </div>
    </header>

    <main class="page-container-6xl py-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-4">
        <div class="page-section">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="section-label">Timeline</p>
              <h2 class="section-title">Work-life balance check-in</h2>
              <p class="text-body-tight">
                A running record of your conversation with your counselor. Replies are placeholders for
                now.
              </p>
            </div>
            <span class="pill-muted">Active</span>
          </div>
          <div class="mt-6 space-y-4">
            <div class="panel-item p-4">
              <p class="meta-label">You · 9:10 AM</p>
              <p class="mt-2 text-sm text-contrast">
                I felt stretched thin this week and had trouble disconnecting after work.
              </p>
            </div>
            <div class="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <p class="meta-label text-success">Counselor · 9:18 AM</p>
              <p class="mt-2 text-sm text-contrast">
                Thanks for sharing that. Let’s focus on a short wind-down ritual to help you transition
                out of work mode.
              </p>
            </div>
            <div class="panel-item p-4">
              <p class="meta-label">You · 9:32 AM</p>
              <p class="mt-2 text-sm text-contrast">
                I can try a quick walk and a short breathing exercise before dinner.
              </p>
            </div>
            <div class="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <p class="meta-label text-success">Counselor · 9:45 AM</p>
              <p class="mt-2 text-sm text-contrast">
                Great plan. I’ll share a two-minute grounding audio and check in tomorrow.
              </p>
            </div>
          </div>
        </div>

        <div class="page-section">
          <p class="section-label">Add message</p>
          <div class="mt-4 space-y-4">
            <textarea
              rows="4"
              class="textarea-base bg-slate-950/80"
              placeholder="Write your next message to your counselor..."
            ></textarea>
            <div class="flex flex-wrap items-center justify-between gap-3">
              <button
                class="button-outline-emerald"
              >
                Add resource link
              </button>
              <span class="text-caption">Attach a resource from your library</span>
            </div>
          </div>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="page-section page-section--gradient-emerald-strong">
          <p class="section-label">Simple commands</p>
          <div class="mt-5 space-y-4">
            <button class="panel-action panel-action--emerald-strong">
              <span>Send Message</span>
              <span class="text-lg">↗</span>
            </button>
            <button class="panel-action panel-action--emerald-strong">
              <span>Mark As Helpful</span>
              <span class="text-lg">★</span>
            </button>
            <button class="panel-action panel-action--emerald-strong">
              <span>Attach Resource</span>
              <span class="text-lg">＋</span>
            </button>
          </div>
        </div>

        <div class="page-section">
          <p class="section-label">Thread summary</p>
          <p class="text-body-relaxed">
            Focus area: transition rituals, work boundary reminders, and restorative breaks.
          </p>
          <div class="mt-6 grid gap-3">
            <div class="panel-item px-4 py-3 text-xs text-muted">
              Next check-in: Tomorrow morning
            </div>
            <div class="panel-item px-4 py-3 text-xs text-muted">
              Resource queued: 2-minute grounding audio
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
