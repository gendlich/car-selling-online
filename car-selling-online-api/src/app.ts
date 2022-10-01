import express, {Request, Response} from 'express';
import routes from './config/routes';
import cors from 'cors';
import AppDataSource from './config/database';
import path from 'path';


class App {
    private app: express.Application;
    
    constructor(){
        this.app = express();
        this.configuration();
        this.router();
    }

    private port = process.env.PORT || 3000

    private configuration(){
        this.app.use(cors({
            origin: 'http://localhost:3000'
        }));
        this.app.set('port', this.port);
        this.app.use(express.json());
    }

    public router(){
        this.app.use('/api', routes)
    }

    public start(){
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is running on the port: ${this.port}`)
        })
    }
}

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!");
    const app = new App();
    app.start();
})
.catch((err) => {
    console.error("Error during Data Source initialization", err);
});