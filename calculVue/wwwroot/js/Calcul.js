﻿const vm = Vue.createApp({
    data() {
        return {
            sum: 0,
            tempvar: 0,
            equbool: false,
            decpoint: true
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
            this.equbool = true;
        },
        inputnumber: function (num) {
            //if (num == '.' && decpoint) {
            //    this.sum = this.sum + num;
            //    decpoint = false;
            //}
            //else 
            if (this.sum == 0 || this.equbool) {
                this.sum = num;
                this.equbool = false;
            }
            else {
                this.sum = this.sum + num;
            }
        }

    }
});

vm .mount('#app');