function returnKey<T extends Object>(arg: T) {
    console.log(Object.keys(arg));
    return arg;
}



const a = returnKey({a: "1", b: "2", c: "3"});

interface Person <T> {
    name: string;
    age: number;
    special: T
}


const John: Person <string> = {
    name: 'John',
    age: 25,
    special: 'This is the special',
}


console.log(John);


class Observable<T extends Person<string>>{

    subcribe(arg: T){
        console.log(`subcribe to ${arg.name}`);
    };
}


new Observable<typeof John>().subcribe(John);