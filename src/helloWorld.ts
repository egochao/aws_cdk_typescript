import { IServer } from "./Server";

var a1: string = 'hello';
var b1: number = 5;
var c1: boolean = false;

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


function generateEmail(input: Person, force?: boolean ): string | undefined{
    if (input.isVisitor && !force) {
        return undefined;
    } else {
        return `${input.firstName}.${input.lastName}@email.com`;
    }

}

const abc: string | undefined = generateEmail({} as any)


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