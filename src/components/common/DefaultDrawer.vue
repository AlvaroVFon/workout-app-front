<script lang="ts" setup></script>

<template>
  <slot name="navbar" />
  <div class="drawer lg:drawer-open">
    <input
      id="my-drawer"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="drawer-content">
      <slot name="content" />
    </div>

    <!-- TODO:  dividir en componentes más pequeños-->
    <slot name="sidebar" />
  </div>
</template>
