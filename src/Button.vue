<template>
  <button class="a-button" :class="{ [`icon-${iconPosition}`]: true }">
    <a-icon class="loading" name="add"></a-icon>
    <a-icon class="icon" v-if="icon" :name="icon"></a-icon>
    <div class="content"><slot></slot></div>
  </button>
</template>

<script lang="ts">
import icon from "./icon.vue";
export default {
  components: { icon },
  // props: ["icon", "iconPosition"],
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.a-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
    margin-left: 0;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
