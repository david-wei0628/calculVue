const vm = Vue.createApp({
    data() {
        return {
            sum: 0,
            tempvar:0
        }
    },
    methods: {
        plus: function () {
            this.tempvar = this.tempvar + this.sum;
            this.sum = 0;
        },
        sub: function () {
            this.tempvar = this.tempvar - this.sum;
            this.sum = 0;
        },
        mul: function () {
            this.tempvar = this.tempvar * this.sum;
            this.sum = 0;
        },
        div: function () {
            this.tempvar = this.tempvar / this.sum;
            this.sum = 0;
        },
        equ: function () {
            this.sum = this.tempvar;
            this.tempvar = 0;
        }

    }
});

vm .mount('#app');