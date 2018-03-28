<template>
  <div class="demo-number-keyboard">
    <gl-nav-bar
      title="GL-ui number-keyboard"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />
    <div class="demo-block">

      <button @click="visible = true">toggle keyboard</button>

      <gl-number-keyboard
      v-model="visible"
      @delete="deleteText"
      @press="keyPress"
      />

      <p>{{inputText}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      inputText: ''
    }
  },
  methods: {
    keyPress (key) {
      this.inputText += key
    },
    deleteText () {
      this.inputText = this.inputText.substr(0, this.inputText.length - 1)
    }
  }
}
</script>
