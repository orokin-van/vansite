<template>
  <div>fa</div>
</template>

<script lang="ts" setup>
  // vue-router 用法
  const router = useRouter()
  router.push({ path: '/about' })

  // provide inject
  provide('asideVisible', 500)
  const asideVisible = inject('asideVisible')

  // shallowRef
  const root = shallowRef<HTMLElement>(document.documentElement)
  root.value?.getBoundingClientRect()

  // computed
  const shoIcon = computed(() => (id:number) => {
    if (id) return true
    return false
  })

  // defineProps
  const props = defineProps({
    title: {
      type: String,
      default: 'name'
    }
  })

  // defineEmits
  const emits = defineEmits(['change', 'update:modelValue'])
  emits('change', 1)
  emits("update:modelValue", 1);

  // defineExpose
  defineExpose({ root })

  // onMounted
  onMounted(() => {
    const target = document.querySelector<HTMLElement>('target')
  });

  // onBeforeUnmount
  onBeforeUnmount(() => {})

  // useSlots
  const slots = useSlots()
</script>
