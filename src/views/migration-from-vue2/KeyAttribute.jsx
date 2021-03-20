import { h } from 'vue'

export default () => (
  <>
    {Array.from({ length: 6 }).map((_, index) => [
      h(`h${index + 1}`, null, `h${index + 1}`),
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        laudantium eaque saepe omnis itaque nemo non tempore quod vel,
        explicabo, ullam numquam rem unde ex quae, maiores in autem animi?
      </p>,
    ])}
  </>
)
