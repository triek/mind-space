<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="border-b border-white/10 bg-slate-900/60">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-slate-400">Mind Space</p>
          <h1 class="text-3xl font-semibold text-white">Assessment</h1>
        </div>
        <div class="flex items-center gap-3">
          <div class="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
            Self-guided assessment
          </div>
          <button
            class="rounded-full border border-white/10 bg-slate-800/70 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-200"
            @click="emit('navigate', 'home')"
          >
            Back to Home
          </button>
        </div>
      </div>
    </header>

    <main class="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[2fr_1fr]">
      <section class="space-y-6">
        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Pick ONE quiz to start</p>
              <h2 class="text-2xl font-semibold text-white">Choose your check-in</h2>
              <p class="mt-2 text-slate-300">
                Select a short assessment to capture how you are feeling today. You can run one at a time.
              </p>
            </div>
            <div class="flex items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              Ready to start
            </div>
          </div>
          <div class="mt-6 grid gap-3 sm:grid-cols-3">
            <button
              v-for="quiz in quizzes"
              :key="quiz.id"
              class="rounded-2xl border px-4 py-3 text-left text-sm font-medium transition"
              :class="
                selectedQuizId === quiz.id
                  ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-100'
                  : 'border-white/10 bg-slate-800/80 text-white hover:border-emerald-400/50 hover:text-emerald-200'
              "
              @click="selectQuiz(quiz.id)"
            >
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ quiz.label }}</p>
              <p class="mt-2 text-lg font-semibold">{{ quiz.title }}</p>
              <p class="mt-2 text-xs text-slate-300">{{ quiz.description }}</p>
            </button>
          </div>
        </div>

        <div
          v-if="selectedQuiz"
          class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40"
        >
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Selected quiz</p>
              <h3 class="text-2xl font-semibold text-white">{{ selectedQuiz.title }}</h3>
              <p class="mt-2 text-slate-300">{{ selectedQuiz.longDescription }}</p>
            </div>
            <div class="rounded-2xl bg-slate-800/70 px-4 py-2 text-sm text-slate-200">
              {{ selectedQuiz.questions.length }} questions · {{ selectedQuiz.estimate }}
            </div>
          </div>
          <div class="mt-6 flex flex-wrap items-center gap-3">
            <button
              class="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/20"
              @click="startQuiz"
            >
              Start Quiz
            </button>
            <button
              class="rounded-2xl border border-white/10 bg-slate-800/70 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-500/60"
              @click="resetQuiz"
            >
              Clear Answers
            </button>
            <div class="rounded-2xl bg-slate-800/70 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-400">
              {{ progressText }}
            </div>
          </div>
        </div>

        <div
          v-if="selectedQuiz && inProgress"
          class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40"
        >
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Question {{ currentQuestionIndex + 1 }}</p>
              <h3 class="text-xl font-semibold text-white">{{ currentQuestion }}</h3>
            </div>
            <span class="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              {{ currentQuestionIndex + 1 }} of {{ selectedQuiz.questions.length }}
            </span>
          </div>
          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <label
              v-for="option in scaleOptions"
              :key="option.value"
              class="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3 text-sm transition hover:border-emerald-400/40"
            >
              <input
                v-model.number="currentAnswer"
                type="radio"
                class="h-4 w-4 accent-emerald-400"
                :value="option.value"
              />
              <div>
                <p class="font-medium text-white">{{ option.label }}</p>
                <p class="text-xs text-slate-400">{{ option.description }}</p>
              </div>
            </label>
          </div>
          <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Next up: {{ nextQuestionPreview }}</p>
            <button
              class="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/20"
              @click="nextQuestion"
            >
              Next Question
            </button>
          </div>
        </div>

        <div
          v-if="selectedQuiz && completed"
          class="rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-6 shadow-lg shadow-slate-900/40"
        >
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-emerald-200">Result</p>
              <h3 class="text-2xl font-semibold text-white">Score: {{ totalScore }}</h3>
              <p class="mt-2 text-slate-300">{{ scoreMeaning?.detail }}</p>
            </div>
            <div class="rounded-2xl bg-slate-900/70 px-4 py-3 text-sm text-emerald-100">
              {{ scoreMeaning?.label }}
            </div>
          </div>
          <div class="mt-6 flex flex-wrap items-center gap-3">
            <button
              class="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/20"
              @click="saveResult"
            >
              Save Result
            </button>
            <p v-if="savedSummary" class="text-sm text-emerald-200">{{ savedSummary }}</p>
          </div>
        </div>
      </section>

      <aside class="space-y-6">
        <div class="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-emerald-500/10 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Simple commands</p>
          <div class="mt-5 space-y-4">
            <button
              class="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-emerald-400/50"
              @click="startQuiz"
            >
              <span>Start Quiz</span>
              <span class="text-lg">▶️</span>
            </button>
            <button
              class="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-emerald-400/50"
              :class="{ 'opacity-50': !inProgress }"
              :disabled="!inProgress"
              @click="nextQuestion"
            >
              <span>Next Question</span>
              <span class="text-lg">➡️</span>
            </button>
            <button
              class="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-emerald-400/50"
              :class="{ 'opacity-50': !completed }"
              :disabled="!completed"
              @click="saveResult"
            >
              <span>Save Result</span>
              <span class="text-lg">💾</span>
            </button>
          </div>
        </div>

        <div class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
          <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Session summary</p>
          <div class="mt-4 space-y-3">
            <div class="rounded-2xl bg-slate-800/70 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Selected quiz</p>
              <p class="mt-2 text-sm font-medium text-white">
                {{ selectedQuiz ? selectedQuiz.title : 'None yet' }}
              </p>
            </div>
            <div class="rounded-2xl bg-slate-800/70 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Progress</p>
              <p class="mt-2 text-sm font-medium text-white">{{ progressText }}</p>
            </div>
            <div class="rounded-2xl bg-slate-800/70 px-4 py-3">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Latest score</p>
              <p class="mt-2 text-sm font-medium text-white">
                {{ completed ? totalScore : 'Complete the quiz to see a score' }}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['navigate'])

const quizzes = [
  {
    id: 'phq-9',
    label: 'PHQ-9',
    title: 'PHQ-9 Depression Check',
    description: '9 questions on mood and energy.',
    longDescription: 'Reflect on mood, sleep, and focus over the past two weeks.',
    estimate: '3-4 min',
    questions: [
      'Little interest or pleasure in doing things.',
      'Feeling down, depressed, or hopeless.',
      'Trouble falling or staying asleep, or sleeping too much.',
      'Feeling tired or having little energy.',
      'Poor appetite or overeating.',
      'Feeling bad about yourself or that you are a failure.',
      'Trouble concentrating on tasks.',
      'Moving or speaking slowly, or being fidgety/restless.',
      'Thoughts that you would be better off dead or of hurting yourself.'
    ],
    meaning: [
      { max: 4, label: 'Minimal', detail: 'Minimal symptoms. Keep tracking your mood and energy.' },
      { max: 9, label: 'Mild', detail: 'Mild symptoms. Consider light supports and check in again soon.' },
      { max: 14, label: 'Moderate', detail: 'Moderate symptoms. Consider reaching out for support.' },
      { max: 19, label: 'Moderately severe', detail: 'Moderately severe. A guided conversation could help.' },
      { max: 27, label: 'Severe', detail: 'Severe symptoms. Consider connecting with care resources.' }
    ]
  },
  {
    id: 'gad-7',
    label: 'GAD-7',
    title: 'GAD-7 Anxiety Check',
    description: '7 questions on worry and tension.',
    longDescription: 'Track nervousness, worry, and restlessness over the last two weeks.',
    estimate: '2-3 min',
    questions: [
      'Feeling nervous, anxious, or on edge.',
      'Not being able to stop or control worrying.',
      'Worrying too much about different things.',
      'Trouble relaxing.',
      'Being so restless it is hard to sit still.',
      'Becoming easily annoyed or irritable.',
      'Feeling afraid as if something awful might happen.'
    ],
    meaning: [
      { max: 4, label: 'Minimal', detail: 'Minimal anxiety. Keep using supports that help you stay grounded.' },
      { max: 9, label: 'Mild', detail: 'Mild anxiety. Short resets or breathing exercises can help.' },
      { max: 14, label: 'Moderate', detail: 'Moderate anxiety. Consider a structured plan or support.' },
      { max: 21, label: 'Severe', detail: 'Severe anxiety. Professional support could be beneficial.' }
    ]
  },
  {
    id: 'stress-mini',
    label: 'Stress Mini',
    title: 'Stress Mini Check',
    description: '5 questions on pressure and recovery.',
    longDescription: 'A quick pulse on workload, tension, and recovery habits.',
    estimate: '2 min',
    questions: [
      'I feel overwhelmed by my current responsibilities.',
      'I have enough time to rest and recharge.',
      'I have been feeling irritable or short-tempered.',
      'My body feels tense or fatigued.',
      'I have support or strategies to manage stress.'
    ],
    meaning: [
      { max: 4, label: 'Balanced', detail: 'Stress is low. Keep up the routines that help you reset.' },
      { max: 9, label: 'Managing', detail: 'Stress is present. Consider adding small recovery moments.' },
      { max: 14, label: 'Elevated', detail: 'Stress feels elevated. Plan a reset and reach out for support.' },
      { max: 20, label: 'High', detail: 'High stress. Consider more structured support and recovery time.' }
    ]
  }
]

const scaleOptions = [
  { value: 0, label: 'Not at all', description: 'No impact in the last two weeks.' },
  { value: 1, label: 'Several days', description: 'A few days but manageable.' },
  { value: 2, label: 'More than half', description: 'Noticeable and recurring.' },
  { value: 3, label: 'Nearly every day', description: 'Consistent and persistent.' }
]

const selectedQuizId = ref(null)
const inProgress = ref(false)
const completed = ref(false)
const currentQuestionIndex = ref(0)
const currentAnswer = ref(0)
const responses = ref([])
const savedSummary = ref('')

const selectedQuiz = computed(() => quizzes.find((quiz) => quiz.id === selectedQuizId.value))

const totalScore = computed(() => responses.value.reduce((total, value) => total + value, 0))

const scoreMeaning = computed(() => {
  if (!selectedQuiz.value) return null
  return selectedQuiz.value.meaning.find((entry) => totalScore.value <= entry.max) || null
})

const progressText = computed(() => {
  if (!selectedQuiz.value) {
    return 'Select a quiz to begin'
  }
  if (completed.value) {
    return 'Completed'
  }
  if (inProgress.value) {
    return `Question ${currentQuestionIndex.value + 1} of ${selectedQuiz.value.questions.length}`
  }
  return 'Ready to start'
})

const currentQuestion = computed(() => {
  if (!selectedQuiz.value) return ''
  return selectedQuiz.value.questions[currentQuestionIndex.value]
})

const nextQuestionPreview = computed(() => {
  if (!selectedQuiz.value) return 'Select a quiz'
  if (currentQuestionIndex.value >= selectedQuiz.value.questions.length - 1) {
    return 'Final question'
  }
  return selectedQuiz.value.questions[currentQuestionIndex.value + 1]
})

const selectQuiz = (id) => {
  selectedQuizId.value = id
  resetQuiz()
}

const startQuiz = () => {
  if (!selectedQuiz.value) return
  inProgress.value = true
  completed.value = false
  currentQuestionIndex.value = 0
  responses.value = []
  currentAnswer.value = 0
  savedSummary.value = ''
}

const nextQuestion = () => {
  if (!selectedQuiz.value || !inProgress.value) return
  responses.value = [...responses.value, currentAnswer.value]
  savedSummary.value = ''

  if (currentQuestionIndex.value >= selectedQuiz.value.questions.length - 1) {
    inProgress.value = false
    completed.value = true
    return
  }

  currentQuestionIndex.value += 1
  currentAnswer.value = 0
}

const saveResult = () => {
  if (!completed.value || !selectedQuiz.value) return
  const timeStamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  savedSummary.value = `Saved ${selectedQuiz.value.title} score (${totalScore.value}) at ${timeStamp}.`
}

const resetQuiz = () => {
  inProgress.value = false
  completed.value = false
  currentQuestionIndex.value = 0
  currentAnswer.value = 0
  responses.value = []
  savedSummary.value = ''
}
</script>
