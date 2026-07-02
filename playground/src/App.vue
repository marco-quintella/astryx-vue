<script setup lang="ts">
import { ref } from 'vue';
import { AstryxTheme, Button } from '@astryxdesign-vue/core';
import { neutralTheme } from '@astryxdesign/theme-neutral/built';

const loading = ref(false);

async function simulateSave() {
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1200));
  loading.value = false;
}
</script>

<template>
  <AstryxTheme :theme="neutralTheme" mode="light">
    <main class="page">
      <header>
        <p class="eyebrow">Open source · Vue 3</p>
        <h1>Astryx Vue</h1>
        <p class="lede">
          Vue port of Meta's
          <a href="https://github.com/facebook/astryx" target="_blank" rel="noreferrer">Astryx</a>
          design system. Same API conventions, Astryx theme tokens, agent-ready docs path.
        </p>
      </header>

      <section>
        <h2>Button</h2>
        <div class="row">
          <Button label="Secondary" />
          <Button label="Primary action" variant="primary" />
          <Button label="Ghost" variant="ghost" />
          <Button label="Delete" variant="destructive" />
        </div>
        <div class="row">
          <Button label="Small" size="sm" variant="primary" />
          <Button label="Large" size="lg" variant="primary" />
          <Button
            label="Save changes"
            variant="primary"
            :is-loading="loading"
            @click="simulateSave"
          />
          <Button label="Disabled" variant="primary" is-disabled />
        </div>
      </section>
    </main>
  </AstryxTheme>
</template>

<style scoped>
.page {
  margin: 0 auto;
  max-width: 56rem;
  padding: 3rem 1.5rem 4rem;
}

.eyebrow {
  color: var(--color-text-secondary, #525252);
  font-size: 0.875rem;
  letter-spacing: 0.08em;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
}

h1 {
  font-family: var(--font-family-heading, system-ui, sans-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 0 0 0.75rem;
}

.lede {
  color: var(--color-text-secondary, #525252);
  font-size: 1.0625rem;
  line-height: 1.6;
  margin: 0 0 2rem;
  max-width: 42rem;
}

section h2 {
  font-size: 1.125rem;
  margin: 0 0 1rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

a {
  color: var(--color-accent, #0866ff);
}
</style>
