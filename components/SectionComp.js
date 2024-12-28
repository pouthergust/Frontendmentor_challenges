
export default {
  props: {
    title: String
  },
  template: `
  <section class="recipe__section">
    <h2 class="recipe__sectionTitle">{{ title }}</h2>
    <slot />
  </section>
  `
}