﻿<script setup>
import { ButtonModel } from "../../../js/models.js";

const props = defineProps({
  buttonModel: {
    type: ButtonModel,
    required: false,
  },
});

const emit = defineEmits({
  buttonClicked: (buttonModel) => buttonModel,
});

function buttonClick(buttonModel) {
  emit("buttonClicked", buttonModel);
}
</script>

<template>
  <div class="card-body gap-4">
    <slot />
  </div>
</template>
