class Support {
    name;
    designation = 'support web dev';
    address = 'BD';
    phone = 1796491069;
    constructor(name, phone, address) {
        this.name = name;
        this.phone = phone;
        this.address = address;

    }
    startWork() {
        console.log(this.name, 'start his work');
    }

}

const ali = new Support('Ali Shorif', 1796491068, 'Mokkai');
console.log(ali);
const hasan = new Support('Hasan viya', 0124, 'Japan');
//console.log(hasan);
ali.startWork();
hasan.startWork();
