const vm = Vue.createApp({
    data() {
        return {
            sum: 0,
            tempvar: 0
        }
    },
    methods: {
        plus: function () {
            //if (this.tempvar == 0) {
            //    this.tempvar = this.sum;
            //}
            //else {
            //    this.tempvar = this.tempvar + this.sum;
            //}
            //this.sum = 0;
        },
        sub: function () {
            if (this.tempvar == 0) {
                this.tempvar = this.sum;
            }
            else {
                this.tempvar = this.tempvar - this.sum;
            }
            this.sum = 0;
        },
        mul: function () {
            if (this.tempvar == 0) {
                this.tempvar = this.sum;
            }
            else {
                this.tempvar = this.tempvar * this.sum;
            }
            this.sum = 0;
        },
        div: function () {
            if (this.tempvar == 0) {
                this.tempvar = this.sum;
            }
            else {
                this.tempvar = this.tempvar / this.sum;
            }
            this.sum = 0;
        },
        equ: function () {
            this.sum = this.tempvar;
            this.tempvar = 0;
        },
        inputnumber: function (num) {
            if (this.sum == 0) {
                this.sum = num;
            }
            else {
                this.sum = this.sum + num;
            }
        }

    }
});

vm .mount('#app');