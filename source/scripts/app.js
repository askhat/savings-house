const calc = new Vue({
  el: '#calc',
  filters: {
    rub (value) {
      return `${value.toLocaleString().replace(/\,/g, ' ')} рублей`
    },
    months (value) {
      switch (value) {
        case 1: return `${value} месяц`
        case 2:
        case 3:
        case 4: return `${value} месяца`
        default: return `${value} месяцев`
      }
    }
  },
  data: {
    period: 6,
    amount: 500000
  },
  computed: {
    amountSteps () {
      let { min, max, step } = window.calcData.amount
      const arr = []
      for (let i = min; i <= max; i += step) {
        arr.push(i / 1000000)
      }
      return arr
    },
    periodSteps () {
      const { min, max } = window.calcData.period
      const arr = []
      for (let i = min; i <= max; i += 3) {
        arr.push(i)
      }
      return arr
    },
    payment () {
      return 'нет формул'
    },
    interestRate () {
      return 'нет формул'
    }
  },
  mounted () {
    const { amount, period } = window.calcData
    $('#amount.ui.range').range({
      min: amount.min,
      max: amount.max,
      start: this.amount,
      step: amount.step,
      onChange: value => (this.amount = value)
    })
    $('#period.ui.range').range({
      min: period.min,
      max: period.max,
      start: this.period,
      step: period.step,
      onChange: value => (this.period = value)
    })
  }
})

$('.ui.tabular.menu .item').tab()

console.log(ymaps)
ymaps.ready(function() {
  var coords = [55.774710, 37.682170];

  var myMap = new ymaps.Map('ya-map', {
    center: coords,
    zoom: 14,
    controls: ['zoomControl', 'fullscreenControl']
  })

  myMap.behaviors.disable('scrollZoom');

  myMap.geoObjects
  .add(new ymaps.Placemark(coords, {
    iconContent: 'КПК «Дом Сбережений»'
  }, {
    preset: 'islands#darkgreenStretchyIcon'
  }))
})