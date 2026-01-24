<template>
  <div>
    <header class="sticky top-0 z-50 border-b bg-surface-2">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-faint">Mind Space</p>
          <h1 class="text-3xl font-semibold">Progress Page</h1>
        </div>
        <button
          class="button button--sm bg-success"
          @click="emit('navigate', 'home')"
        >
          ← Back to home
        </button>
      </div>
    </header>

    <main class="mx-auto grid max-w-6xl gap-4 px-4 py-4 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-4">
        <div class="page-section bg-surface">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Score trends</p>
              <h2 class="text-2xl font-semibold">Past scores over time</h2>
            </div>
            <div class="pill bg-warning">
              <span class="h-2 w-2 rounded-full bg-success"></span>
              {{ filteredScores.length }} records
            </div>
          </div>

          <div v-if="filteredScores.length" class="mt-6 space-y-4">
            <div
              v-for="score in filteredScores"
              :key="`${score.date}-${score.type}`"
              class="page-section page-section--sm bg-surface-2"
            >
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-muted">{{ score.type }}</p>
                  <p class="text-sm font-medium">{{ score.label }}</p>
                </div>
                <p class="text-xs text-muted">{{ score.date }}</p>
              </div>
              <div class="mt-4">
                <div class="flex items-center justify-between text-xs text-muted">
                  <span>Score</span>
                  <span>{{ score.score }}/27</span>
                </div>
                <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-warning">
                  <div
                    class="h-full rounded-full bg-success"
                    :style="{ width: `${(score.score / 27) * 100}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <p v-else class="mt-6 text-sm text-muted">
            Demo data cleared. Add a new check-in to see scores.
          </p>
        </div>

        <div class="page-section bg-surface">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Mood history list</p>
              <h2 class="text-2xl font-semibold">Recent check-ins</h2>
            </div>
            <span class="pill bg-warning">Last 14 days</span>
          </div>

          <ul v-if="moodHistory.length" class="mt-6 space-y-3">
            <li
              v-for="mood in moodHistory"
              :key="`${mood.date}-${mood.label}`"
              class="page-section page-section--sm flex items-center justify-between bg-surface-2"
            >
              <div>
                <p class="text-sm font-medium">{{ mood.label }}</p>
                <p class="text-xs text-muted">{{ mood.note }}</p>
              </div>
              <span class="text-xs text-muted">{{ mood.date }}</span>
            </li>
          </ul>
          <p v-else class="mt-6 text-sm text-muted">
            Mood history cleared. Add a new mood check to populate this list.
          </p>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="page-section bg-surface">
          <p class="text-xs uppercase tracking-[0.2em] text-muted">Simple commands</p>
          <div class="mt-5 space-y-4">
            <div class="page-section page-section--sm bg-surface-2">
              <label class="text-xs uppercase tracking-[0.2em] text-muted" for="quizFilter">
                Filter by quiz type
              </label>
              <select
                id="quizFilter"
                v-model="activeFilter"
                class="mt-2 w-full rounded-xl border bg-surface-2 px-3 py-2 text-sm"
              >
                <option value="all">All quiz types</option>
                <option v-for="type in quizTypes" :key="type" :value="type">{{ type }}</option>
              </select>
            </div>

            <button
              class="button button--lg w-full justify-between bg-info"
              @click="toggleLast7Days"
            >
              <span>View last 7 days</span>
              <span class="text-lg">{{ showLast7Days ? '✓' : '🗓️' }}</span>
            </button>

            <button
              class="button button--lg w-full justify-between bg-danger"
              @click="clearDemoData"
            >
              <span>Clear demo data</span>
              <span class="text-lg">🧹</span>
            </button>
          </div>
        </div>

        <div class="page-section bg-success">
          <p class="text-xs uppercase tracking-[0.2em] text-muted">Insights</p>
          <div class="mt-4 space-y-3 text-sm text-muted">
            <p>
              Track progress week over week and review patterns that influence your well-being.
            </p>
            <p>
              Use the filter to compare different quizzes and narrow the window to the last week.
            </p>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['navigate'])

const quizTypes = ['PHQ-9', 'GAD-7', 'Sleep Check']

const demoScores = ref([
  { date: 'Mar 02', type: 'PHQ-9', score: 6, label: 'Mild mood impact' },
  { date: 'Mar 05', type: 'GAD-7', score: 8, label: 'Moderate anxiety' },
  { date: 'Mar 08', type: 'Sleep Check', score: 12, label: 'Restless sleep' },
  { date: 'Mar 11', type: 'PHQ-9', score: 4, label: 'Steady improvement' },
  { date: 'Mar 14', type: 'GAD-7', score: 5, label: 'Lower tension' },
  { date: 'Mar 16', type: 'Sleep Check', score: 9, label: 'Sleep consistency' },
])

const moodHistory = ref([
  { date: 'Mar 03', label: '🌿 Steady', note: 'Midday calm after a walk.' },
  { date: 'Mar 06', label: '🌤️ Calm', note: 'Focused during morning routine.' },
  { date: 'Mar 09', label: '💭 Reflective', note: 'Noted some overthinking in the evening.' },
  { date: 'Mar 12', label: '🌧️ Overwhelmed', note: 'Busy schedule, took a break.' },
  { date: 'Mar 15', label: '🌿 Steady', note: 'Balanced day with planned breaks.' },
])

const activeFilter = ref('all')
const showLast7Days = ref(false)

const filteredScores = computed(() => {
  const matchesType = (score) => activeFilter.value === 'all' || score.type === activeFilter.value

  if (!showLast7Days.value) {
    return demoScores.value.filter(matchesType)
  }

  return demoScores.value.filter((score, index) => matchesType(score) && index < 4)
})

const toggleLast7Days = () => {
  showLast7Days.value = !showLast7Days.value
}

const clearDemoData = () => {
  demoScores.value = []
  moodHistory.value = []
}
</script>
