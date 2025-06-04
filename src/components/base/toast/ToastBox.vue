<script setup>
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
});
</script>

<template>
  <div class="toast">
    <AlertBox :alertType="props.alertType.toLowerCase()" :msg="props.msg" />
  </div>
</template>
