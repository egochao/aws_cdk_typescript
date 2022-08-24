class Server {
    private port: number;
    private address: string;


    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    startServer() {
        console.log(`Server started at ${this.address}:${this.port}`);
    }

    
}

const someServer = new Server(3000, 'localhost');
someServer.startServer();
const somePort = (someServer as any).port; // Error

console.log(somePort);