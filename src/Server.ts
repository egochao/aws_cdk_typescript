abstract class BaseServer {
    protected port: number;
    protected address: string;

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    startServer() {
        console.log(`Server started at ${this.address}:${this.port}`);
    }

    abstract stopServer(): void;
}

class DbServer extends BaseServer {
    private db: string;

    constructor(port: number, address: string, db: string) {
        super(port, address);
        this.db = db;
        console.log(`DbServer started at ${this.address}:${this.port} with db ${this.db}`);
    }

    stopServer() {
        console.log('DbServer stopped');
    }
}


const someDbServer = new DbServer(8000, 'localhost', 'mongo');
someDbServer.startServer();
someDbServer.stopServer();

// ####################################

interface IServer {
    startServer(): void;
    stopServer(): void;
}


class Server implements IServer {
    protected port: number;
    protected address: string;

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    async startServer() {
        const data = await this.getData();
        console.log(data)
        console.log(`interface Server started at ${this.address}:${this.port}`);
    }

    stopServer(): void {};


    async getData(): Promise<string> {
        return 'some data';
    }   
}

const server = new Server(8000, 'localhost');
server.startServer();