<script setup>
import { computed, defineProps } from "vue";
import Constants from "@/js/constants.js";
import InjectSvg from "@/components/svgs/injectectableHtmlSvg.vue";

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  alertType: {
    type: String,
    default: "",
  },
  isSoft: {
    type: Boolean,
    default: false,
  },
  isOutline: {
    type: Boolean,
    default: false,
  },
  isDashed: {
    type: Boolean,
    default: false,
  },
});

const alertClass = computed(() => {
  return {
    alert: true,
    "alert-info": props.alertType.toLowerCase() === "info",
    "alert-success": props.alertType.toLowerCase() === "success",
    "alert-warning": props.alertType.toLowerCase() === "warning",
    "alert-error": props.alertType.toLowerCase() === "error",
    "alert-soft": props.isSoft,
    "alert-outline": props.isOutline,
    "alert-dashed": props.isDashed,
  };
});

const alertIcon = computed(() => {
  switch (props.alertType.toLowerCase()) {
    case "info":
      return "Constants.SVG_ICONS_HTML.INFO_CIRCLE";
    case "success":
      return "Constants.SVG_ICONS_HTML.CHECK_CIRCLE";
    case "warning":
      return "Constants.SVG_ICONS_HTML.EXCLAMATION_TRIANGLE";
    case "error":
      return "Constants.svg_ICONS_HTML.X_CIRCLE";
    default:
      return "";
  }
});
</script>

<template>
  <div :class="alertClass">
    <div v-if="props.alertType">
      <InjectSvg :svg-html-data="alertIcon" class="shrink-0 w-6 h-6" />
    </div>
    <span>{{ msg }}</span>
  </div>
</template>
