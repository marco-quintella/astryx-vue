<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@astryxdesign/vue-core';

const clickCount = ref(0);
const loading = ref(false);

function handleClick() {
  clickCount.value += 1;
}

function simulateAsync() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    clickCount.value += 1;
  }, 1500);
}
</script>

<template>
  <div class="page">
    <header class="header">
      <h1 class="title">Astryx Vue — Button Playground</h1>
      <p class="subtitle">Piloto. 1 componente validando a stack Vue 3 + Panda CSS.</p>
    </header>

    <main class="main">
      <!-- Variants -->
      <section data-test="variants">
        <h2 class="section-title">Variants</h2>
        <div class="row">
          <Button variant="solid" @click="handleClick">Solid</Button>
          <Button variant="soft" @click="handleClick">Soft</Button>
          <Button variant="outlined" @click="handleClick">Outlined</Button>
          <Button variant="ghost" @click="handleClick">Ghost</Button>
          <Button variant="danger" @click="handleClick">Danger</Button>
        </div>
      </section>

      <!-- Sizes -->
      <section data-test="sizes">
        <h2 class="section-title">Sizes</h2>
        <div class="row align-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <!-- Colors -->
      <section data-test="colors">
        <h2 class="section-title">Colors</h2>
        <div class="row">
          <Button color="accent">Accent</Button>
          <Button color="neutral">Neutral</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
        </div>
      </section>

      <!-- States -->
      <section data-test="states">
        <h2 class="section-title">States</h2>
        <div class="row align-center">
          <Button :disabled="true">Disabled</Button>
          <Button :loading="loading" @click="simulateAsync">
            {{ loading ? 'Loading…' : 'Click to load' }}
          </Button>
          <Button full-width>Full width</Button>
        </div>
      </section>

      <!-- Icons -->
      <section data-test="icons">
        <h2 class="section-title">With icons</h2>
        <div class="row">
          <Button icon-start>
            <template #iconStart>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </template>
            Next
          </Button>
          <Button variant="soft" icon-end>
            Download
            <template #iconEnd>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </template>
          </Button>
          <Button icon-only :aria-label="`Just an icon`">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </Button>
        </div>
      </section>

      <!-- Counter -->
      <section class="counter-card">
        <h2 class="section-title">Click counter</h2>
        <p class="subtitle">
          Clicked <strong data-test="click-count">{{ clickCount }}</strong> times.
        </p>
        <Button @click="handleClick" data-test="counter-btn">Click me</Button>
      </section>
    </main>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: var(--astryx-background);
  color: var(--astryx-text);
  padding: 3rem 1.5rem;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}
.header {
  max-width: 72rem;
  margin: 0 auto 3rem;
}
.title {
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}
.subtitle {
  color: var(--astryx-text-subtle);
  font-size: 1.125rem;
  margin: 0 0 0.5rem;
}
.main {
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem;
}
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.row.align-center {
  align-items: center;
}
.counter-card {
  padding: 1.5rem;
  background: var(--astryx-surface);
  border: 1px solid var(--astryx-border);
  border-radius: 0.75rem;
}
</style>
