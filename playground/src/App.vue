<script setup lang="ts">
import { ref } from 'vue';
import {
  AstryxTheme,
  Badge,
  Button,
  Card,
  Heading,
  Input,
  Text,
} from '@astryxdesign-vue/core';
import { neutralTheme } from '@astryxdesign/theme-neutral/built';

const loading = ref(false);
const name = ref('Astryx Vue');
const search = ref('');
const email = ref('');

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
        <Heading :level="1">Astryx Vue</Heading>
        <Text type="large" as="p" class="lede">
          Vue port of Meta's
          <a href="https://github.com/facebook/astryx" target="_blank" rel="noreferrer">Astryx</a>
          design system. Same API conventions, Astryx theme tokens, agent-ready docs path.
        </Text>
      </header>

      <section>
        <Heading :level="2">Button</Heading>
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

      <section>
        <Heading :level="2">Input</Heading>
        <div class="stack">
          <Input label="Name" v-model:value="name" />
          <Input
            label="Search"
            is-label-hidden
            v-model:value="search"
            placeholder="Search components…"
            has-clear
          />
          <Input
            label="Email"
            type="email"
            v-model:value="email"
            description="We'll never share your email."
            is-required
            :status="{ type: 'error', message: 'Email must include @' }"
          />
        </div>
      </section>

      <section>
        <Heading :level="2">Card</Heading>
        <div class="row">
          <Card :width="280" variant="default">
            <Heading :level="3">Default card</Heading>
            <Text type="supporting">Bordered container for discrete items.</Text>
          </Card>
          <Card :width="280" variant="muted">
            <Heading :level="3">Muted card</Heading>
            <Text type="supporting">De-emphasised background variant.</Text>
          </Card>
          <Card :width="280" variant="blue">
            <Heading :level="3">Blue card</Heading>
            <Text type="supporting">Tinted category variant.</Text>
          </Card>
        </div>
      </section>

      <section>
        <Heading :level="2">Badge</Heading>
        <div class="row">
          <Badge label="Neutral" />
          <Badge variant="success" label="Active" />
          <Badge variant="error" label="3" />
          <Badge variant="purple" label="Engineering" />
          <Badge variant="warning" label="Pending" />
        </div>
      </section>

      <section>
        <Heading :level="2">Text</Heading>
        <div class="stack">
          <Text type="body">Body text for paragraphs and descriptions.</Text>
          <Text type="label">Form label styling</Text>
          <Text type="supporting">Supporting helper text in secondary color.</Text>
          <Text type="code">const greeting = 'Astryx';</Text>
          <Heading :level="2" type="display-2">Display heading</Heading>
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

.lede {
  margin: 0 0 2rem;
  max-width: 42rem;
}

section {
  margin-bottom: 2.5rem;
}

section :deep(h2) {
  margin: 0 0 1rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 24rem;
}

a {
  color: var(--color-accent, #0866ff);
}
</style>
