export class Ethernet {

    constructor (address = '', cidr = '', mac = '') {
        this.address = address;
        this.cidr = cidr;
        this.mac = mac;
    }

    address: string;
    cidr: string;
    mac: string;
}