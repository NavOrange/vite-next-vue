<template>
  <h1 class="text-center">Migration from Vue 2</h1>

  <dl class="feature__list">
    <dt>Teleport</dt>
    <dd>
      <FeatureTeleportOne />
      <FeatureTeleportTwo />
    </dd>

    <dt>EmitsComponentOption</dt>
    <dd>
      <input v-model="email" type="text" />
      <input v-model="password" type="text" />
      <button @click="emit">submit</button>

      <EmitsComponentOption
        ref="EmitsComponentOption"
        @submit="EmitsComponentOptionSubmit"
        @my-event="handleMyEvent"
      />
    </dd>

    <dt>inject</dt>
    <dd>
      <code>scheme: {{ scheme }} // inject</code>
    </dd>

    <dt>Fragments</dt>
    <dd>
      <Fragments v-bind="{ scheme, email, password }" />
    </dd>

    <dt>SlotScopedStyle</dt>
    <dd>
      <SlotScopedStyle>
        <h1 class="slot__scoped-style">slot content</h1>
      </SlotScopedStyle>
    </dd>

    <dt>v-model</dt>
    <dd>
      <VModel v-model="email" v-model:password="password" />
    </dd>

    <dt>template v-for</dt>
    <dd class="md:flex">
      <div class="md:w-12/24">
        <template v-for="i in 6" :key="i">
          <component :is="`h${i}`">h{{ i }}</component>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            vitae eum qui sit neque rem ipsum aliquid labore ex animi ab, eius
            id dolorum? Nemo sint exercitationem sequi quisquam sapiente?
          </p>
        </template>
      </div>

      <div class="md:w-12/24">
        <KeyAttribute />
      </div>
    </dd>

    <dt>v-if and v-for v-if 始终优先于 v-for</dt>
    <dd class="md:flex">
      <div class="md:w-12/24">
        <label for="tag">toggle v-if value {{ tag }}</label>
        <input id="tag" v-model="tag" type="checkbox" />
      </div>

      <!-- eslint-disable vue/no-use-v-if-with-v-for -->
      <component
        :is="`h${i}`"
        v-for="i in 6"
        v-if="tag"
        :key="i"
        class="md:w-2/24"
      >
        h{{ i }}
      </component>
      <!-- eslint-enable vue/no-use-v-if-with-v-for -->
    </dd>

    <dt>v-bind 对排序敏感</dt>
    <dd>
      <pre>
&lt;h1 v-bind="{ style: { color: 'red' } }" style="color: blue"&gt;
  v-bind in the property before
&lt;/h1&gt;
&lt;h1 style="color: blue" v-bind="{ style: { color: 'red' } }"&gt;
  v-bind in the property after
&lt;/h1&gt;
      </pre>
      <h1 v-bind="{ style: { color: 'red' } }" style="color: blue">
        v-bind in the property before
      </h1>
      <h1 style="color: blue" v-bind="{ style: { color: 'red' } }">
        v-bind in the property after
      </h1>
    </dd>

    <dt>v-for 中的 Ref 数组</dt>
    <dd>
      <ArrayRefsWithOptions />
      <ArrayRefsWithComposition />
    </dd>

    <dt>functional compoennt</dt>
    <dd>
      <blockquote
        cite="https://v3.vuejs.org/guide/migration/functional-components.html#overview"
      >
        <p>
          BREAKING: functional attribute on single-file component (SFC)
          &lt;template&gt; is removed
        </p>
        <p>
          BREAKING: { functional: true } option in components created by
          functions is removed
        </p>
      </blockquote>

      <pre>
// jsx
import { h } from 'vue'

const DynamicHeading = (props, context) => {
  return h(`h${props.level}`, context.attrs, context.slots)
}

DynamicHeading.props = ['level']

export default DynamicHeading
      </pre>
      <pre>
// SFC
&lt;template&gt;
  &lt;component
    v-bind:is="`h${$props.level}`"
    v-bind="$attrs"
  /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  props: ['level']
}
&lt;/script&gt;
      </pre>
      <a
        href="https://v3.vuejs.org/guide/migration/functional-components.html#overview"
        >more</a
      >
    </dd>
  </dl>
</template>

<script>
import { inject } from 'vue'
import { FeatureTeleportOne, FeatureTeleportTwo } from './Teleport.jsx'
import EmitsComponentOption from './EmitsComponentOption.jsx'
import Fragments from './Fragments.jsx'
import SlotScopedStyle from './SlotScopedStyle.jsx'
import VModel from './VModel.jsx'
import KeyAttribute from './KeyAttribute.jsx'
import ArrayRefsWithOptions from './ArrayRefsWithOptions.jsx'
import ArrayRefsWithComposition from './ArrayRefsWithComposition.jsx'

export default {
  name: 'ViewMigrationFromVue2',
  components: {
    FeatureTeleportOne,
    FeatureTeleportTwo,
    EmitsComponentOption,
    Fragments,
    SlotScopedStyle,
    VModel,
    KeyAttribute,
    ArrayRefsWithOptions,
    ArrayRefsWithComposition,
  },
  setup() {
    return {
      scheme: inject('scheme'),
    }
  },
  data() {
    return {
      email: '',
      password: '',
      tag: false,
    }
  },
  methods: {
    emit() {
      const { email, password } = this
      this.$refs.EmitsComponentOption.submitForm(email, password)
    },
    EmitsComponentOptionSubmit() {
      console.log(arguments)
    },
    handleMyEvent(val) {
      console.log(val)
    },
  },
}
</script>

<style lang="scss" scoped>
.feature__list {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;

  dt {
    font-weight: bold;
  }

  dd + dt {
    margin-top: 50px;
    padding-top: 50px;
    border-top: 1px solid gainsboro;
  }

  dd {
    margin: 20px 0 0;
  }
}

::v-deep(.slot__scoped-style) {
  color: blue;
}

::v-global(li + li) {
  margin-top: 20px;
}

::v-slotted(.slot__scoped-style) {
  color: red;
}
</style>
