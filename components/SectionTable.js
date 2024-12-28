export default {
  props: {
    title: String,
    description: String
  },
  template: `
  <section>
    <h2 class="recipe__sectionTitle">{{ title }}</h2>

    <p>{{ description }}</p>

    <div class="recipe__table">
      <slot />
    </div>
  </section>
  `
}