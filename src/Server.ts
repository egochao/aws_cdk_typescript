class Server {
    port: number;
    address: string;


    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    startServer() {
        console.log(`Server started at ${this.address}:${this.port}`);
    }

    
}



const server = new Server(3000, 'localhost');
server.startServer();