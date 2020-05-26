import Vue from "vue";

Vue.mixin({
  computed: {
    dateToday() {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 01
      let yyyy = today.getFullYear();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      return yyyy + "-" + mm + "-" + dd;
    }
  },
  filters: {
    dateFormat(date) {
      if (!date) return "-";
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      const goodDate = new Date(date);
      return goodDate.toLocaleDateString("en-US", options);
    },
    moneyFormat(value) {
      value = value ? value : 0;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    timeFormat(dateTime) {
      const goodTime = new Date(dateTime);
      return goodTime.toLocaleTimeString("en-US");
    }
  },
  methods: {
    currentYear() {
      return new Date().getFullYear();
    },
    debounce(callBack = () => {}, timeOut = 500) {
      if (this.debouncer) clearTimeout(this.debouncer);
      this.debouncer = setTimeout(callBack, timeOut);
    },
    ellipse(text, length) {
      const ellipseText = text.length > length ? "..." : "";
      return text.substring(0, length + 1) + ellipseText;
    }
  }
});
