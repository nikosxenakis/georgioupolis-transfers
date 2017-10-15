import { DataService } from '../providers/dataService/data.service';
import { Email } from './Email';

export interface IBookTransferData {
    firstName: string;
    lastName: string;
    email: string;
    noPeople: string;
    babySheat: string;
    comments: string;
    date: string;
    time: string;
}

export class BookTransferEmail extends Email implements IBookTransferData{


    public firstName: string;
    public lastName: string;
    public email: string;
    public noPeople: string;
    public babySheat: string;
    public comments: string;
    public date: string;
    public time: string;
    
    constructor(protected dataService: DataService, ui: IBookTransferData) {
        super(dataService); 

        this.url = 'https://us-central1-georgioupolis-taxi.cloudfunctions.net/sendBookTransferEmail';

        this.read(ui);
    }

    public read(ui: IBookTransferData) {
        this.firstName = 'firstName='+ui.firstName;
        this.lastName = 'lastName='+ui.lastName;
        this.email = 'email='+ui.email;
        this.noPeople = 'noPeople='+ui.noPeople;
        this.babySheat = 'babySheat='+ui.babySheat;
        this.comments = 'comments='+ui.comments;
        this.date = 'date='+ui.date;
        this.time = 'time='+ui.time;
    }

    public getQuery(){
        return this.url + '?' + this.firstName + '&' + this.lastName + '&' + this.email + '&' + this.noPeople + '&' 
        + this.babySheat + '&' + this.comments + '&' + this.date + '&' + this.time;
    }
    
}