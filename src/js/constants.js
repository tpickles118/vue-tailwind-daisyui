class InputTypes {
  RADIO = "radio";
}
const inputTypes = new InputTypes();
Object.freeze(inputTypes);

const SVG_ICON_TYPES = Object.freeze({
  NONE: "none",
  COLOR_PALETTE: "ColorPaletteSvg",
  COMPONENT_BLOCKS: "ComponentBlocksSvg",
  KEY_VALUE_LIST: "KeyValueListSvg",
});

const SVG_FILL_TYPES = Object.freeze({
  NONE: "none",
  CURRENT_COLOR: "currentColor",
});

const SVG_STROKE_TYPES = Object.freeze({
  NONE: "none",
  CURRENT_COLOR: "currentColor",
});

const SVG_STROKE_LINEJOIN = Object.freeze({
  NONE: "none",
  ROUND: "round",
  BEVEL: "bevel",
  MITER: "miter",
});

const SVG_STROKE_LINECAP = Object.freeze({
  NONE: "none",
  ROUND: "round",
  SQUARE: "square",
});

const SVG_ICONS_HTML = Object.freeze({
  NONE: "",
  COLOR_PALETTE:
    '<path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/>' +
    '<path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/>' +
    '<path d="M 7 17h.01"/>' +
    '<path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/>',
  COMPONENT_BLOCKS:
    '<rect width="7" height="9" x="3" y="3" rx="1"/>' +
    '<rect width="7" height="5" x="14" y="3" rx="1"/>' +
    '<rect width="7" height="9" x="14" y="12" rx="1"/>' +
    '<rect width="7" height="5" x="3" y="16" rx="1"/>',
  KEY_VALUE_LIST:
    '<path d="M4 6l5.5 0"/>\n' +
    '<path d="M4 10l5.5 0"/>' +
    '<path d="M4 14l5.5 0"/>' +
    '<path d="M4 18l5.5 0"/>' +
    '<path d="M14.5 6l5.5 0"/>' +
    '<path d="M14.5 10l5.5 0"/>' +
    '<path d="M14.5 14l5.5 0"/>' +
    '<path d="M14.5 18l5.5 0"/>',
  PIE_CHART:
    '<path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" stroke-linecap="round" stroke-linejoin="round"/>',
  CROSS:
    '                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"></path>\n',
  HAMBURGER:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />',
  MAGNIFYING_GLASS:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />',
  ALERT_BELL:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />',
  INFORMATION_CIRCLE:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
  CHECK_CIRCLE:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m0 0a5 5 0 11-10 0 5 5 0 0110 0z"></path>',
  EXCLAMATION_CIRCLE:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
  X_CIRCLE:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
});

const THEMES = Object.freeze({
  DARK: "dark",
  NORD: "nord",
  LIGHTNER: "lightner",
  IMPERIAL: "imperial",
  NORDLIGHT: "nordLight",
  ROUNDEDLILAC: "roundedLilac",
});

const INJECTABLES = Object.freeze({
  APP_EVENT_BUS: "appEventBus",
});

const TOAST = Object.freeze({
  DURATION: 3600,
});

export default {
  inputTypes,
  SVG_ICON_TYPES,
  SVG_FILL_TYPES,
  SVG_STROKE_TYPES,
  SVG_STROKE_LINEJOIN,
  SVG_STROKE_LINECAP,
  SVG_ICONS_HTML,
  THEMES,
  INJECTABLES,
};
