<template>
  <div class="demo-picker">
    <gl-nav-bar
      title="GL-ui picker"
      left-icon="back"
      @tapLeft="$router.go(-1)"
    />
    <div class="demo-block">
      <div class="title">单列picker</div>
      <gl-picker
        v-model="picker.single"
        :data="singleData"
        title="单列picker"
        @cancel="pickerCancel"
        @select="pickerSelect"
        @change="pickerChange"
      >
      </gl-picker>
      <button @click="picker.single = true">show single picker</button>
    </div>
    <div class="demo-block">
      <div class="title">多列picker</div>
      <gl-picker
        v-model="picker.multi"
        :data="multiData"
        title="多列picker"
        @cancel="pickerCancel"
        @select="pickerSelect"
        @change="pickerChange"
      >
      </gl-picker>
      <button @click="picker.multi = true">show single picker</button>
    </div>
    <div class="demo-block">
      <div class="title">time picker</div>
      <gl-time-picker
        v-model="picker.time1"
        format="YYYY-MM-DD"
        title="time picker"
        :date="timePickerDate"
        @cancel="timePickerCancel"
        @select="timePickerSelect"
      >
      </gl-time-picker>
      <button @click="picker.time1 = true">年月日</button>
      <gl-time-picker
        v-model="picker.time2"
        format="hh:mm:ss"
        title="time picker"
        @cancel="timePickerCancel"
        @select="timePickerSelect"
      >
      </gl-time-picker>
      <button @click="picker.time2 = true">时分秒</button>
      <gl-time-picker
        v-model="picker.time3"
        format="YYYY-MM-DD hh:mm:ss"
        title="time picker"
        :date="timePickerDate"
        @cancel="pickerCancel"
        @select="timePickerSelect"
      >
      </gl-time-picker>
      <button @click="picker.time3 = true">年月日时分秒</button>
    </div>
    <div class="demo-block">
      <div class="title">指定时间内的time picker（开发中。。。）</div>
      <gl-time-picker
        v-model="picker.time4"
        format="YYYY-M-DD"
        title="time picker"
        :date="timePickerDate"
        :startDate="startDate"
        :endDate="endDate"
      >
      </gl-time-picker>
      <button class="disable">2016/1/1-2020/12/31</button>
      <gl-time-picker
        v-model="picker.time5"
        format="YY-MM-DD hh:mm:ss"
        title="time picker"
        :date="timePickerDate"
        :startDate="Date.now()"
      >
      </gl-time-picker>
      <button class="disable">当前日期前不可选</button>
    </div>
  </div>
</template>
<script>
  import { pickerData1, pickerData2, pickerData3 } from '../demoData/picker.js'

  export default {
    data () {
      return {
        picker: {
          single: false,
          multi: false,
          time1: false,
          time2: false,
          time3: false,
          time4: false,
          time5: false
        },
        singleData: [pickerData1],
        multiData: [pickerData1, pickerData2, pickerData3],
        timePickerDate: Date.now(),
        startDate: 0,
        endDate: 0
      }
    },
    created () {
    },
    methods: {
      showTimePicker () {
        this.picker.time4 = true
        this.startDate = new Date('2016/1/1').getTime()
        this.endDate = new Date('2020/12/23').getTime()
      },
      pickerCancel () {
        this.$toast({
          message: 'picker cancel',
          type: 'warn'
        })
      },
      pickerSelect (value, index, text) {
        let message = ''
        value.forEach((item, i) => {
          message += `第${i + 1}列：第${index[i] + 1}项，value为${item}，text为${text[i]}<br/>`
        })
        this.$alert(message)
      },
      pickerChange (wheelIndex, selectedIndex) {
        console.log(`第${wheelIndex + 1}列在滚动，已滚至第${selectedIndex + 1}项`)
      },
      timePickerCancel () {
        this.$toast('time picker cancel')
      },
      timePickerSelect (selectedTime) {
        this.$alert(`已选中时间：${selectedTime}`)
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
