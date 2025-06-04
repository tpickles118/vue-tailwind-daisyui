<script setup>
import { computed, defineProps } from "vue";
import AlertBox from "@/components/base/alert/AlertBox.vue";

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
</script>

<template>
  <div :class="toastClass">
    <AlertBox :alertType="props.alertType.toLowerCase()" :msg="props.msg" />
  </div>
</template>
