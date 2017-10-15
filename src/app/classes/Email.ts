import { DataService } from '../providers/dataService/data.service';

export abstract class Email{

    protected url: string;

    constructor(protected dataService: DataService) {

        //this.url = 'https://us-central1-georgioupolis-taxi.cloudfunctions.net/sendEmail';
    }

    public abstract read(ui: any): void;
    
    public abstract getQuery() : string;

    public sendMail(){
        console.log('sending email...');

        this.dataService.getData(this.getQuery())
        .subscribe(
            data => {
                let val = data as string[];
                console.log('email sent: ' + val)
            }
        );
    }

}