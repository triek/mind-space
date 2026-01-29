<template>
  <div>
    <PageHeader title="Urgent Help" />

    <main class="mx-auto grid max-w-6xl gap-4 px-4 py-4 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-4">
        <div class="page-section page-section--lg bg-danger">
          <h2 class="text-2xl font-semibold">You are not alone</h2>
          <div class="page-section page-section--sm mt-5 bg-surface-2 text-sm">
            <span class="text-muted">Crisis links placeholder</span>
          </div>
        </div>

        <div class="page-section bg-surface">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Support options</p>
              <h2 class="text-2xl font-semibold">Ways to get help now</h2>
            </div>
            <span class="pill bg-warning">24/7</span>
          </div>
          <ul class="mt-6 space-y-4 text-sm">
            <li class="page-section page-section--sm bg-surface-2">
              <span class="text-muted">
                Share your location with someone you trust and stay connected while you wait for help.
              </span>
            </li>
            <li class="page-section page-section--sm bg-surface-2">
              <span class="text-muted">
                Use breathing or grounding exercises while you contact a professional support line.
              </span>
            </li>
            <li class="page-section page-section--sm bg-surface-2">
              <span class="text-muted">
                Ask a friend or family member to be with you if you feel overwhelmed.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="page-section bg-danger">
          <p class="text-xs uppercase tracking-[0.2em] text-muted">Simple commands</p>
          <div class="mt-5 space-y-4">
            <button
              class="button button--lg w-full justify-between bg-surface-2"
            >
              Open Safety Help
            </button>
            <button
              class="button button--lg w-full justify-between bg-surface-2"
            >
              View support options
            </button>
          </div>
        </div>

        <div class="page-section bg-surface">
          <p class="text-xs uppercase tracking-[0.2em] text-muted">Reminder</p>
          <p class="mt-3 text-sm text-muted">
            Keep this page bookmarked so it is easy to reach from any screen.
          </p>
        </div>
      </aside>
    </main>
  </div>
</template>

<script setup>
import PageHeader from './PageHeader.vue'

const emit = defineEmits(['navigate'])
</script>
