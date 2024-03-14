const assert = require('assert');
const { v4: uuidv4 } = require('uuid');

class UserS {
    constructor() {
        const arr = [];
        this.arr = arr;
    }

    readAll() {
        return this.arr;
    }

    create(event) {
        const eventKeys = Object.keys(event);

        event.id = uuidv4();

        try {
            assert.deepEqual(eventKeys, [ 'id', 'date', 'location', 'description' ]);
        }catch(err) {
            throw new Error("there is error in property naming");
        }

        this.arr.push(event)

        return this.arr;
    }

    update(obj) {
        const index = this.arr.findIndex((e, index) => {
            if (e.id == obj.id) {
                return true;
            }
        })

        this.arr[index] = obj;
        return this.arr[index];
    }

    deleteById(id) {
        const result = this.arr.filter(event => event.id !== id)

        this.arr = result;

        return this.arr;
    }

    readById(id) {
        const obj = this.arr.find((event) => {
            if (event.id == id) {
                return event;
            }
        })

        return obj;
    }
}

module.exports = UserS