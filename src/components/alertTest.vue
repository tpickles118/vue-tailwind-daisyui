<script setup>
import AlertBox from "./base/alert/AlertBox.vue";
</script>

<template>
  <AlertBox alertType="" msg="This is a normal box" />
  <AlertBox alertType="info" msg="This is an info box" />
  <AlertBox alertType="success" msg="This is a success box" />
  <AlertBox alertType="warning" msg="This is a warning box" />
  <AlertBox alertType="error" msg="This is an error" />
  <AlertBox alertType="error" msg="This is an error" isSoft="true" />
  <AlertBox
    alertType="warning"
    msg="This is a warning box"
    isDashed="true"
    isOutline="true"
  />
</template>
