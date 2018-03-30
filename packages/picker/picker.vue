<template>
  <gl-popup
    v-model="visible"
    class="gl-picker"
    pos="bottom"
  >
    <div class="gl-picker__header">
      <span class="gl-picker__header-cancel" @click="cancelEvent">{{cancelText}}</span>
      <div class="gl-picker__header-title">{{title}}</div>
      <span class="gl-picker__header-ok" @click="okEvent">{{okText}}</span>
    </div>
    <div class="gl-picker__content" v-if="pickerData.length">
      <i class="gl-picker__border top"></i>
      <i class="gl-picker__border bottom"></i>
      <div class="gl-picker__wrapper gl-flex__box" ref="wheelWrapper">
        <div class="gl-picker__wrapper-item gl-flex__box-item"
             v-for="(data, index) in pickerData"
             :key="index"
        >
          <ul class="gl-picker__wheel">
            <li class="gl-picker__wheel-item" v-for="(item, i) in data" :key="i" v-html="item[textKey]"></li>
          </ul>
        </div>
      </div>
    </div>
  </gl-popup>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'gl-picker',
    props: {
      value: Boolean,
      data: {
        type: Array,
        default () {
          return []
        }
      },
      selectedIndex: {
        type: Array,
        default () {
          return []
        }
      },
      title: {
        type: String,
        default: ''
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      okText: {
        type: String,
        default: '确认'
      },
      textKey: {
        type: String,
        default: 'text'
      },
      valueKey: {
        type: String,
        default: 'value'
      }
    },
    data () {
      return {
        visible: false,
        dirty: false,
        pickerData: this.data.slice(),
        pickerSelectedVal: [],
        wheels: [],
        pickerSelectedIndex: this.selectedIndex.length ? this.selectedIndex : this.data.map(() => 0)
      }
    },
    watch: {
      data () {
        this.setData(this.data, this.selectedIndex)
      },
      value () {
        this.visible = this.value
        this.value ? this.showPicker() : this.hidePicker()
      },
      visible () {
        this.$emit('input', this.visible)
      }
    },
    created () {
      this.visible = this.value
    },
    methods: {
      setData (newData, selectedIndex) {
        this.pickerSelectedIndex = selectedIndex.slice()
        this.pickerData = newData.slice()

        if (this.visible) {
          this.$nextTick(() => {
            this.wheels.forEach((item, index) => {
              item.refresh()
              item.wheelTo(this.pickerSelectedIndex[index])
            })
          })
          return
        }

        this.dirty = true
      },
      cancelEvent () {
        this.visible = false
        this.$emit('cancel')
      },
      okEvent () {
        this.visible = false

        let changed = false
        let pickerSelectedText = []
        this.pickerData.forEach((item, i) => {
          let index = this.wheels[i].getSelectedIndex()
          this.pickerSelectedIndex[i] = index

          let value = null
          let text = null

          if (this.pickerData[i].length) {
            value = this.pickerData[i][index][this.valueKey]
            text = this.pickerData[i][index][this.textKey]
          }

          if (this.pickerSelectedVal[i] !== value) {
            changed = true
          }

          this.pickerSelectedVal[i] = value
          pickerSelectedText[i] = text
        })

        this.$emit('select', this.pickerSelectedVal, this.pickerSelectedIndex, pickerSelectedText)

        changed && this.$emit('valueChange', this.pickerSelectedVal, this.pickerSelectedIndex, pickerSelectedText)
      },
      showPicker () {
        if (this.wheels.length === 0 || this.dirty) {
          this.$nextTick(() => {
            let wheelWrapper = this.$refs.wheelWrapper
            this.pickerData.forEach((item, i) => (this._createWheel(wheelWrapper, i)))
            this.dirty = false
          })
          return
        }
        this.pickerData.forEach((item, i) => {
          this.wheels[i].enable()
          this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
        })
      },
      hidePicker () {
        this.pickerData.forEach((item, i) => {
          this.wheels[i].disable()
        })
      },
      _createWheel (wheelWrapper, i) {
        if (!this.wheels[i]) {
          const wheel = this.wheels[i] = new BScroll(wheelWrapper.children[i], {
            wheel: {
              selectedIndex: this.pickerSelectedIndex[i] || 0
            }
          })
          wheel.on('scrollEnd', () => {
            this.$emit('change', i, wheel.getSelectedIndex())
          })
        } else {
          this.wheels[i].refresh()
        }
      },
      refresh () {
        this.$nextTick(() => {
          this.wheels.forEach((item) => {
            item.refresh()
          })
        })
      },
      scrollTo (wheelIndex, selectedIndex) {
        this.pickerSelectedIndex[wheelIndex] = selectedIndex
        this.wheels[wheelIndex] && this.wheels[wheelIndex].wheelTo(selectedIndex)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../styles/var.scss";
  @import "../styles/mixin.scss";

  .gl-picker {
    &__header {
      position: relative;
      height: 50px;
      line-height: 50px;
      text-align: center;
      @include border-1px($border-color, bottom);
      &-title {
        font-size: 16px;
      }
      &-ok, &-cancel {
        position: absolute;
        top: 0;
        padding: 0 20px;
      }
      &-ok {
        right: 0;
        color: $active-color;
      }
      &-cancel {
        left: 0;
        color: $text-color;
      }
    }

    &__content {
      position: relative;
      text-align: center;
      margin: 20px 0;
      .gl-picker__border {
        position: absolute;
        left: 0;
        width: 100%;
        height: 68px;
        pointer-events: none;
        transform: translateZ(0);
        z-index: 100;
        &.top {
          top: 0;
          background: linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
          @include border-1px($border-color, bottom);
        }
        &.bottom {
          bottom: 0;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
          @include border-1px($border-color, top);
        }
      }
      .gl-picker__wrapper {
        &-item {
          height: 173px;
          .gl-picker__wheel {
            margin-top: 68px;
            &-item {
              line-height: 36px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>
