// Q1: Complete the following MyArray class in TypeScript that can handle string and number only to get the expected results
class MyArray {
    collection:any[] = [];

    add(value: string | number) {
        this.collection.push(value)
    }
    remove(value: string | number) {
        var index = this.collection.indexOf(value)
        this.collection.splice(index, 1)
    }
    getValues() {
        return this.collection
    }
}


const stringAry = new MyArray()
stringAry.add('aaa')
stringAry.add('bbb')
stringAry.add('ccc')
stringAry.remove('bbb')
console.log(stringAry.getValues())

//Output 
/* (2) ['aaa', 'ccc']
0: "aaa"
1: "ccc"
length: 2
[[Prototype]]: Array(0)*/

const numberAry = new MyArray()
numberAry.add(1)
numberAry.add(2)
numberAry.add(3)
numberAry.remove(2)
console.log(numberAry.getValues())

//Output
/* (2) [1, 3]
0: 1
1: 3
length: 2
[[Prototype]]: Array(0)*/

// const booleanAry = new MyArray()
// numberAry.add(true)
// numberAry.add(false)

//Output - It will give an arror because add() only accepts string and number values