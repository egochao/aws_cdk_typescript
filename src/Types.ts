

let abc = undefined
const def = null

function getData(): string | undefined {
    return '';
}


const data = getData();


if (data) {
    const someOtherData = data;
} 

let input: unknown;

input = "someInput";

let someValue: string;


if (typeof input === 'string') {
    someValue = input;
}

console.log(someValue!);


function doTask(tasks: number): void | never {
    if (tasks > 3) {
        throw new Error('Too many tasks');
    }
}

const stuff = doTask(2);
console.log(stuff);
