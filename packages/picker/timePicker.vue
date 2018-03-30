<template>
  <picker
    ref="picker"
    v-model="visible"
    :title="title"
    :data="pickerData"
    @cancel="pickerCancel"
    @select="pickerSelect"
    @change="pickerChange"
  ></picker>
</template>
<script>
  import Picker from './picker.vue'
  import { formatDate, formatNum } from './date.js'

  export default {
    name: 'gl-time-picker',
    components: {
      Picker
    },
    props: {
      value: Boolean,
      title: {
        type: String,
        default: ''
      },
      format: {
        type: String,
        default: 'YYYY-MM-DD'
      },
      date: {
        type: Number,
        default: Date.now()
      },
      startDate: Number,
      endDate: Number
    },
    data () {
      return {
        visible: false,
        typeObj: {},
        pickerData: [],
        pickerWheel: [],
        day: {}
      }
    },
    computed: {
      formatDate () {
        return formatDate(new Date(this.date), this.format)
      }
    },
    watch: {
      date () {
        this.initPickerData()
      },
      format () {
        this.initPickerData()
      },
      value () {
        this.visible = this.value
      },
      visible () {
        this.$emit('input', this.visible)
      }
    },
    created () {
      this.visible = this.value
      this.initTypeObj()
      this.initPickerData()
    },
    methods: {
      initTypeObj () {
        this.typeObj = {
          'Y': {
            name: 'year',
            wheelStart: null,
            wheelEnd: null,
            wheelLength: 21,
            unit: '年'
          },
          'M': {
            name: 'month',
            wheelStart: 1,
            wheelEnd: 12,
            wheelLength: 12,
            unit: '月'
          },
          'D': {
            name: 'day',
            wheelStart: 1,
            wheelEnd: null,
            wheelLength: 30,
            unit: '日'
          },
          'h': {
            name: 'hour',
            wheelStart: 1,
            wheelEnd: 24,
            wheelLength: 24,
            unit: '时'
          },
          'm': {
            name: 'minute',
            wheelStart: 1,
            wheelEnd: 60,
            wheelLength: 60,
            unit: '分'
          },
          's': {
            name: 'second',
            wheelStart: 1,
            wheelEnd: 60,
            wheelLength: 60,
            unit: '秒'
          }
        }
      },
      initPickerData () {
        let i = 0
        Object.keys(this.typeObj).forEach((type) => {
          if (new RegExp(`(${type}+)`).test(this.format)) {
            this.pickerData[i] = []
            this.fillPickerData(this.typeObj[type], RegExp.$1, i++)
          }
        })
      },
      fillPickerData (dataObj, dateType, index) {
        let value = parseInt(formatDate(new Date(this.date), dateType))

        if (dataObj.name === 'day') {
          dataObj.wheelEnd = this.getDays(new Date(this.date).getFullYear(), new Date(this.date).getMonth() + 1)
          this.day = {
            value,
            dateType,
            index
          }
        }

        let dataArr = this.getDateArr(dataObj.wheelStart, dataObj.wheelEnd, dateType.length, dataObj.unit)
        let selectedIndex = value - 1
        if (dataObj.name === 'year') {
          dataArr = this.getDateArr(value - 10, value + 10, dateType.length, dataObj.unit)
          selectedIndex = 10
        }

        this.pickerData[index] = dataArr
        this.pickerWheel[index] = {
          name: dataObj.name,
          value,
          changeValue: value,
          selectedIndex
        }
        this.$nextTick(() => {
          this.$refs.picker.scrollTo(index, selectedIndex)
        })
      },
      getDays (year, month) {
        let curDate = new Date(`${year}/${month}/1`)
        curDate.setMonth(month)
        curDate.setDate(0)
        return curDate.getDate()
      },
      getDateArr (firstDate, lastDate, typeLength, unit) {
        if (firstDate === null || lastDate === null) return []

        const dateArr = []
        for (let i = firstDate; i <= lastDate; i++) {
          let value = typeLength === 2 ? formatNum(i) : i
          dateArr.push({
            value,
            text: `${value}${unit}`
          })
        }
        return dateArr
      },
      pickerCancel () {
        this.$emit('close')
      },
      pickerSelect (selectedVal) {
        let selectedTime = this.format
        let i = 0
        Object.keys(this.typeObj).forEach((type) => {
          if (new RegExp(`(${type}+)`).test(this.format)) {
            selectedTime = selectedTime.replace(RegExp.$1, this.pickerWheel[i++].changeValue.toString())
          }
        })
        this.$emit('select', selectedTime)
      },
      pickerChange (wheelIndex, selectedIndex) {
        let wheel = this.pickerWheel[wheelIndex]
        wheel.changeValue = this.pickerData[wheelIndex][selectedIndex].value
        wheel.selectedIndex = selectedIndex
        if (wheel.name === 'year' || wheel.name === 'month') {
          if (typeof this.day.index !== 'undefined') {
            let lastDays = this.pickerData[this.day.index].length
            let year = new Date().getFullYear()
            let month = new Date().getMonth() + 1
            this.pickerWheel.forEach(item => {
              if (item.name === 'year') {
                year = item.changeValue
              }
              if (item.name === 'month') {
                month = item.changeValue
              }
            })
            let days = this.getDays(year, month)

            if (lastDays !== days) {
              this.$nextTick(() => {
                this.pickerData[this.day.index] = this.getDateArr(1, days, this.day.dateType.length, '日')
                this.$refs.picker.setData(this.pickerData, this.pickerWheel.map(item => {
                  if (item.name === 'day' && item.selectedIndex > days - 1) {
                    item.selectedIndex = days - 1
                    item.changeValue = days
                  }
                  return item.selectedIndex
                }))
              })
            }
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
