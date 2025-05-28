<script setup>
import { ButtonModel } from "../../../js/models.js";
import Constants from "../../../js/constants.js";
import InjectectableHtmlSvg from "../../svgs/injectectableHtmlSvg.vue";

const props = defineProps({
    buttonModel: {
        type: ButtonModel,
        required: true,
    },
});

const emit = defineEmits({
    buttonClicked: (buttonModel) => buttonModel,
});

const buttonHamburger = new ButtonModel(
    "hamburger",
    "previewtabs",
    "Hamburger",
    Constants.SVG_ICONS_HTML.HAMBURGER,
    Constants.inputTypes.RADIO
);

function buttonClick(buttonModel) {
    emit("buttonClicked", buttonModel);
}
</script>

<template>
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <InjectectableHtmlSvg :svg-html-data="buttonHamburger.svgHtmlData" class="h-5 w-5" />
    </div>
    <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <slot />
    </ul>
</template>
