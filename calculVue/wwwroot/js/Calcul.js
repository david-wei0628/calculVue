const vm = Vue.createApp({
    data() {
        return {
            Inputnum: 0,
            tempvar: ' ',
            symbol: ' ',
            equbool: false,
            decpoint: false,
            decnum: 0
        }
    },
    mounted() {
        document.onkeydown = function (event) {
            let key = window.event.keyCode;
            if (key) {
                console.log(key);
            }
        }
    },
    methods: {
        add: function () {
            if (!this.equbool) {
                this.operalogic();
            }
            this.symbol = '+';
            this.nextnum();
        },
        sub: function () {
            if (!this.equbool) {
                this.operalogic();
            }
            this.symbol = '-';
            this.nextnum();
        },
        mul: function () {
            if (!this.equbool) {
                this.operalogic();
            }
            this.symbol = '*';
            this.nextnum();
        },
        div: function () {
            if (!this.equbool) {
                this.operalogic();
            }
            this.symbol = '/';
            this.nextnum();
        },
        equ: function () {
            this.overlay(this.tempvar, this.Inputnum, this.symbol);
            this.Inputnum = 0;
            this.decnum = 0;
            this.symbol = ' ';
            this.equbool = true;
            this.decpoint = false;
        },
        overlay: function (tempvar, sum, operator) {
            tempvar = parseFloat(tempvar);
            sum = parseFloat(sum);
            switch (operator) {
                case '+':
                    this.tempvar = (tempvar + sum).toFixed(this.decnum);
                    break;
                case '-':
                    this.tempvar = (tempvar - sum).toFixed(this.decnum);
                    break;
                case '*':
                    this.tempvar = (tempvar * sum).toFixed(this.decnum);
                    break;
                case '/':
                    this.tempvar = (tempvar / sum).toFixed(this.decnum);
                    break;
            }
        },
        inputnumber: function (num) {
            if ((this.Inputnum == 0 || this.equbool) && !this.decpoint) {
                this.Inputnum = num;
                if (this.equbool) {
                    this.tempvar = 0;
                }
                this.equbool = false;
            }
            else {
                this.Inputnum = this.Inputnum + num;
                if (this.decpoint) {
                    this.decnum++;
                }
            }
        },
        operalogic: function () {
            //if (this.tempvar == 0 && this.symbol == ' ') {
            //    this.tempvar = this.Inputnum;
            //}
            //else
            if (this.tempvar == 0) {
                this.tempvar = this.Inputnum;
            }
            else {
                this.overlay(this.tempvar, this.Inputnum, this.symbol);
            }
        },
        numberdec: function (poin) {
            if (!this.decpoint) {
                this.Inputnum = this.Inputnum + poin;
                this.decpoint = true;
            }
        },
        nextnum: function () {
            this.Inputnum = 0;
            this.decpoint = false;
        },
        reset: function () {
            this.Inputnum = 0;
            this.tempvar = ' ';
            this.decnum = 0;
            this.symbol = ' ';
            this.equbool = false;
            this.decpoint = false;
        }
    }
});

vm .mount('#app');