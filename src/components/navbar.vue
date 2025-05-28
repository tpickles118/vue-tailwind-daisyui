<script setup>
import InjectectableHtmlSvg from "./svgs/injectectableHtmlSvg.vue";
import { ButtonModel } from "../js/models.js";
import Constants from "../js/constants.js";
import NavBar from "./base/nav/navigationSlotted.vue";

const buttonMagnifyingGlass = new ButtonModel(
  "magnifying-glass",
  "previewtabs",
  "Magnifying Glass",
  Constants.SVG_ICONS_HTML.MAGNIFYING_GLASS,
  Constants.inputTypes.RADIO
);

const buttonAlertBell = new ButtonModel(
  "alert-bell",
  "previewtabs",
  "Alert Bell",
  Constants.SVG_ICONS_HTML.ALERT_BELL,
  Constants.inputTypes.RADIO
);

const menuOptions = [
  { id: 1, text: "Home" },
  { id: 2, text: "Portfolio" },
  { id: 3, text: "About" },
];
</script>

<script>
export default {
  name: "navbar",
  props: {
    msg: String,
  },
};
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <!-- Navbar Start -->
    <div class="navbar-start">
      <div class="dropdown">
        <NavBar>
          <li v-for="option in menuOptions" :key="id">
            <a>{{ option.text }}</a>
          </li>
        </NavBar>
      </div>
    </div>

    <!-- Navbar Center -->
    <div class="navbar-center">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>

    <!-- Navbar End -->
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <InjectectableHtmlSvg
          :svg-html-data="buttonMagnifyingGlass.svgHtmlData"
          class="h-5 w-5"
        />
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <InjectectableHtmlSvg
            :svg-html-data="buttonAlertBell.svgHtmlData"
            class="h-5 w-5"
          />
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>
</template>
