const vm = Vue.createApp({
    data() {
        return {
            sum: 0,
            tempvar: 0,
            symbol: ' ',
            equbool: false,
            decpoint: false
        }
    },
    methods: {
        plus: function () {
            if (this.tempvar == 0 && this.symbol == ' ') {
                this.tempvar = this.sum;
            }
            else {
                this.overlay(this.tempvar, this.sum, this.symbol);
            }
            this.symbol = '+';
            this.sum = 0;
            this.decpoint = false;
        },
        sub: function () {
            if (this.tempvar == 0 && this.symbol == ' ') {
                this.tempvar = this.sum;
            }
            else {
                this.overlay(this.tempvar, this.sum, this.symbol);
            }
            this.symbol = '-';
            this.sum = 0;
            this.decpoint = false;
        },
        mul: function () {
            if (this.tempvar == 0 && this.symbol == ' ') {
                this.tempvar = this.sum;
            }
            else {
                this.overlay(this.tempvar, this.sum, this.symbol);
            }
            this.symbol = '*';
            this.sum = 0;
            this.decpoint = false;
        },
        div: function () {
            if (this.tempvar == 0 && this.symbol == ' ') {
                this.tempvar = this.sum;
            }
            else {
                this.overlay(this.tempvar, this.sum, this.symbol);
            }
            this.symbol = '/';
            this.sum = 0;
            this.decpoint = false;
        },
        equ: function () {
            this.overlay(this.tempvar, this.sum, this.symbol);
            this.sum = 0;
            this.symbol == ' ';
            this.equbool = true;
            this.decpoint = false;
        },
        overlay: function (tempvar, sum, operator) {
            switch (operator) {
                case '+':
                    this.tempvar = tempvar + sum;
                    break;
                case '-':
                    this.tempvar = tempvar - sum;
                    break;
                case '*':
                    this.tempvar = tempvar * sum;
                    break;
                case '/':
                    this.tempvar = tempvar / sum;
                    break;
            }
        },
        inputnumber: function (num) {
            if ((this.sum == 0 || this.equbool) && !this.decpoint) {
                this.sum = num;
                this.equbool = false;
            }
            else {
                this.sum = this.sum + num;
            }
        },
        numberdec: function (poin) {
            if (!this.decpoint) {
                this.sum = this.sum + poin;
                this.decpoint = true;
            }
        },
        reset: function () {
            this.sum = 0;
            this.tempvar = 0;
            this.symbol = ' ';
            this.equbool = false;
            this.decpoint = false;
        }
    }
});

vm .mount('#app');