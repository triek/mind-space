<template>
  <header class="sticky top-0 z-50 border-b bg-surface-2">
    <div class="mx-auto max-w-6xl px-4 py-4">
      <div class="flex items-center">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-success text-sm font-semibold">
          MS
        </div>
        <h1 class="flex-1 text-center text-base font-semibold uppercase tracking-[0.3em] text-faint">
          {{ title }}
        </h1>
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full border bg-surface text-xs font-semibold text-muted"
          aria-label="User profile"
        >
          JA
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
