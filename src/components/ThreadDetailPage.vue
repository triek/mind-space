<template>
  <div>
    <PageHeader title="Thread Detail" />

    <main class="mx-auto grid max-w-6xl gap-4 px-4 py-4 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-4">
        <div class="page-section bg-surface">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <h2 class="text-2xl font-semibold">Work-life balance check-in</h2>
          </div>
          <div class="mt-6 space-y-4">
            <div class="page-section page-section--sm bg-surface-2">
              <p class="text-xs uppercase tracking-[0.2em] text-muted">You · 9:10 AM</p>
              <p class="mt-2 text-sm">
                I felt stretched thin this week and had trouble disconnecting after work.
              </p>
            </div>
            <div class="page-section page-section--sm bg-success">
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Counselor · 9:18 AM</p>
              <p class="mt-2 text-sm">
                Thanks for sharing that. Let’s focus on a short wind-down ritual to help you transition
                out of work mode.
              </p>
            </div>
            <div class="page-section page-section--sm bg-surface-2">
              <p class="text-xs uppercase tracking-[0.2em] text-muted">You · 9:32 AM</p>
              <p class="mt-2 text-sm">
                I can try a quick walk and a short breathing exercise before dinner.
              </p>
            </div>
            <div class="page-section page-section--sm bg-success">
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Counselor · 9:45 AM</p>
              <p class="mt-2 text-sm">
                Great plan. I’ll share a two-minute grounding audio and check in tomorrow.
              </p>
            </div>
          </div>
        </div>

        <div class="page-section bg-surface">
          <p class="text-xs uppercase tracking-[0.2em] text-muted">Add message</p>
          <div class="mt-4 space-y-4">
            <textarea
              rows="4"
              class="textarea-base bg-surface-2 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
              placeholder="Write your next message to your counselor..."
            ></textarea>
            <div class="flex flex-wrap items-center justify-between gap-3">
              <button class="button button--sm bg-success">
                Add resource link
              </button>
              <span class="text-xs text-muted">Attach a resource from your library</span>
            </div>
          </div>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="page-section bg-success">
          <p class="text-xs uppercase tracking-[0.2em] text-muted">Simple commands</p>
          <div class="mt-5 space-y-4">
            <button class="button button--lg w-full justify-between bg-surface-2">
              <span>Send Message</span>
              <span class="text-lg">↗</span>
            </button>
            <button class="button button--lg w-full justify-between bg-surface-2">
              <span>Mark As Helpful</span>
              <span class="text-lg">★</span>
            </button>
            <button class="button button--lg w-full justify-between bg-surface-2">
              <span>Attach Resource</span>
              <span class="text-lg">＋</span>
            </button>
          </div>
        </div>

        <div class="page-section bg-surface">
          <p class="text-xs uppercase tracking-[0.2em] text-muted">Thread summary</p>
          <p class="mt-3 text-sm text-muted">
            Focus area: transition rituals, work boundary reminders, and restorative breaks.
          </p>
          <div class="mt-6 grid gap-3">
            <div class="page-section page-section--sm bg-surface-2 text-xs">
              <span class="text-muted">Next check-in: Tomorrow morning</span>
            </div>
            <div class="page-section page-section--sm bg-surface-2 text-xs">
              <span class="text-muted">Resource queued: 2-minute grounding audio</span>
            </div>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script setup>
import PageHeader from './PageHeader.vue'

const emit = defineEmits(['navigate'])
</script>
