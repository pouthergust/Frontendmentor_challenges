export default {
  props: {
    title: String
  },
  template: `
  <section class="recipe__section --mention">
    <h3 class="recipe__sectionTitle">{{ title }}</h3>
    <slot />
  </section>
  `
}