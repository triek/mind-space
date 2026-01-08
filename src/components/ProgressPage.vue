<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="border-b border-white/10 bg-slate-900/60">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Mind Space</p>
          <h1 class="text-3xl font-semibold text-white">Progress Page</h1>
          <p class="mt-2 text-sm text-slate-300">
            Review your assessment trends and mood check-ins over time.
          </p>
        </div>
        <button
          class="rounded-full border border-white/10 bg-slate-800/70 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-100"
          @click="emit('navigate', 'home')"
        >
          ← Back to home
        </button>
      </div>
    </header>

    <main class="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-6">
        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Score trends</p>
              <h2 class="text-2xl font-semibold text-white">Past scores over time</h2>
            </div>
            <div class="flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/70 px-3 py-1 text-xs text-slate-300">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              {{ filteredScores.length }} records
            </div>
          </div>

          <div v-if="filteredScores.length" class="mt-6 space-y-4">
            <div
              v-for="score in filteredScores"
              :key="`${score.date}-${score.type}`"
              class="rounded-2xl border border-white/10 bg-slate-800/70 p-4"
            >
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ score.type }}</p>
                  <p class="text-sm font-medium text-white">{{ score.label }}</p>
                </div>
                <p class="text-xs text-slate-400">{{ score.date }}</p>
              </div>
              <div class="mt-4">
                <div class="flex items-center justify-between text-xs text-slate-400">
                  <span>Score</span>
                  <span>{{ score.score }}/27</span>
                </div>
                <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-900">
                  <div
                    class="h-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-sky-400"
                    :style="{ width: `${(score.score / 27) * 100}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <p v-else class="mt-6 text-sm text-slate-400">
            Demo data cleared. Add a new check-in to see scores.
          </p>
        </div>

        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Mood history list</p>
              <h2 class="text-2xl font-semibold text-white">Recent check-ins</h2>
            </div>
            <span class="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">Last 14 days</span>
          </div>

          <ul v-if="moodHistory.length" class="mt-6 space-y-3">
            <li
              v-for="mood in moodHistory"
              :key="`${mood.date}-${mood.label}`"
              class="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3"
            >
              <div>
                <p class="text-sm font-medium text-white">{{ mood.label }}</p>
                <p class="text-xs text-slate-400">{{ mood.note }}</p>
              </div>
              <span class="text-xs text-slate-400">{{ mood.date }}</span>
            </li>
          </ul>
          <p v-else class="mt-6 text-sm text-slate-400">
            Mood history cleared. Add a new mood check to populate this list.
          </p>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Simple commands</p>
          <div class="mt-5 space-y-4">
            <div class="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3">
              <label class="text-xs uppercase tracking-[0.2em] text-slate-400" for="quizFilter">
                Filter by quiz type
              </label>
              <select
                id="quizFilter"
                v-model="activeFilter"
                class="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white"
              >
                <option value="all">All quiz types</option>
                <option v-for="type in quizTypes" :key="type" :value="type">{{ type }}</option>
              </select>
            </div>

            <button
              class="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-sky-400/50 hover:text-sky-200"
              @click="toggleLast7Days"
            >
              <span>View last 7 days</span>
              <span class="text-lg">{{ showLast7Days ? '✓' : '🗓️' }}</span>
            </button>

            <button
              class="flex w-full items-center justify-between rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-left text-sm font-medium text-rose-100 transition hover:border-rose-400/60"
              @click="clearDemoData"
            >
              <span>Clear demo data</span>
              <span class="text-lg">🧹</span>
            </button>
          </div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-emerald-500/10 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Insights</p>
          <div class="mt-4 space-y-3 text-sm text-slate-300">
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
