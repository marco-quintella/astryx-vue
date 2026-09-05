import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button', () => {
  it('renders default slot content', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click me' },
    });
    expect(wrapper.text()).toContain('Click me');
  });

  it('renders a native <button> element', () => {
    const wrapper = mount(Button, { slots: { default: 'x' } });
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('defaults to type="button"', () => {
    const wrapper = mount(Button, { slots: { default: 'x' } });
    expect(wrapper.attributes('type')).toBe('button');
  });

  it('honors type="submit"', () => {
    const wrapper = mount(Button, {
      props: { type: 'submit' },
      slots: { default: 'x' },
    });
    expect(wrapper.attributes('type')).toBe('submit');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button, { slots: { default: 'x' } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('does NOT emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'x' },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('does NOT emit click when loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'x' },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('forces disabled when loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true, disabled: false },
      slots: { default: 'x' },
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  it('applies data attributes for variant/size/color', () => {
    const wrapper = mount(Button, {
      props: { variant: 'soft', size: 'lg', color: 'success' },
      slots: { default: 'x' },
    });
    expect(wrapper.attributes('data-variant')).toBe('soft');
    expect(wrapper.attributes('data-size')).toBe('lg');
    expect(wrapper.attributes('data-color')).toBe('success');
  });

  it('sets aria-busy when loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'x' },
    });
    expect(wrapper.attributes('aria-busy')).toBe('true');
  });

  it('omits aria-busy when not loading', () => {
    const wrapper = mount(Button, { slots: { default: 'x' } });
    expect(wrapper.attributes('aria-busy')).toBeUndefined();
  });

  it('sets aria-label when provided', () => {
    const wrapper = mount(Button, {
      props: { ariaLabel: 'Save changes' },
      slots: { default: 'x' },
    });
    expect(wrapper.attributes('aria-label')).toBe('Save changes');
  });

  it('renders iconStart and iconEnd slots', () => {
    const wrapper = mount(Button, {
      props: { iconStart: true, iconEnd: true },
      slots: {
        default: 'text',
        iconStart: '<svg data-test="start" />',
        iconEnd: '<svg data-test="end" />',
      },
    });
    expect(wrapper.find('[data-test="start"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="end"]').exists()).toBe(true);
  });

  it('hides iconStart/iconEnd while loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true, iconStart: true, iconEnd: true },
      slots: {
        default: 'text',
        iconStart: '<svg data-test="start" />',
        iconEnd: '<svg data-test="end" />',
      },
    });
    expect(wrapper.find('[data-test="start"]').exists()).toBe(false);
    expect(wrapper.find('[data-test="end"]').exists()).toBe(false);
  });

  it('renders spinner when loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'text' },
    });
    expect(wrapper.find('[role="status"]').exists()).toBe(true);
  });

  it('applies CSS classes from Panda cva', () => {
    const wrapper = mount(Button, {
      props: { variant: 'solid', size: 'md' },
      slots: { default: 'x' },
    });
    const cls = wrapper.attributes('class') || '';
    // Panda generates stable atomic class names; expect at least 2 classes
    expect(cls.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(2);
  });

  it('renders all 5 variants without errors', () => {
    const variants = ['solid', 'soft', 'outlined', 'ghost', 'danger'] as const;
    for (const v of variants) {
      const wrapper = mount(Button, {
        props: { variant: v },
        slots: { default: 'x' },
      });
      expect(wrapper.attributes('data-variant')).toBe(v);
    }
  });

  it('renders all 3 sizes without errors', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    for (const s of sizes) {
      const wrapper = mount(Button, {
        props: { size: s },
        slots: { default: 'x' },
      });
      expect(wrapper.attributes('data-size')).toBe(s);
    }
  });
});
