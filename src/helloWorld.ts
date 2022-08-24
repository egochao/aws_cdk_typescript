var a: string = 'hello';
var b: number = 5;
var c: boolean = false;

var someArary: string[] = ['hello'];

someArary.push('world');

// someArary.push(5); // Error

console.log(someArary);


// ########################

interface Person {
    firstName: string;
    lastName: string;
    job?: job;
    isVisitor?: boolean;
}

type job = 'Engineer' | 'Programmer'


function generateEmail(input: Person, force?: boolean ){
    if (input.isVisitor && !force) {
        return undefined;
    } else {
        return `${input.firstName}.${input.lastName}@email.com`;
    }

}

console.log('log generated email', generateEmail({
    firstName: 'John', 
    lastName: 'Doe',
    job: 'Engineer',
    isVisitor: true}, true));

// ########################

function isPerson(potentialPerson: any): boolean {
    if ('firstName' in potentialPerson && 'lastName' in potentialPerson) {
        return true;
    } else {
        return false;
    }
}


function printEmailIfPerson(potentialPerson: any) {
    if (isPerson(potentialPerson)) {
        console.log('check', generateEmail(potentialPerson, true));
    }
}


printEmailIfPerson({
    firstName: 'John', 
    lastName: 'Doe',
    job: 'Engineer',
    isVisitor: true});



async function someAsyn() {
    return 'hello world';
}