<script setup>
import { computed, defineProps } from "vue";
import AlertBox from "@/components/base/alert/AlertBox.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  alertType: {
    type: String,
    default: "",
  },
  toastVertical: {
    type: String,
    default: "",
  },
  toastHorizontal: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 3600, // Default duration for toast visibility in milliseconds
  },
});

const toastClass = computed(() => {
  return {
    toast: true,
    "toast-top": props.toastVertical.toLowerCase() === "top",
    "toast-bottom": props.toastVertical.toLowerCase() === "bottom",
    "toast-start": props.toastHorizontal.toLowerCase() === "start",
    "toast-end": props.toastHorizontal.toLowerCase() === "end",
    "toast-center": props.toastHorizontal.toLowerCase() === "center",
  };
});

const visible = ref(true);
let timer = null;

onMounted(() => {
  // Set a timer to hide the toast after the specified duration
  timer = setTimeout(() => {
    visible.value = false;
  }, props.duration);
});

onBeforeUnmount(() => {
  // Clear the timer if the component is unmounted before the duration ends
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<template>
  <div v-if="visible" :class="toastClass">
    <AlertBox :alertType="props.alertType.toLowerCase()" :msg="props.msg" />
  </div>
</template>
