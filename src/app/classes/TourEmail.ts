import { DataService } from '../providers/dataService/data.service';
import { Email } from './Email';

export interface ITourData {
    email: string;
    message: string;
};

export class TourEmail extends Email implements ITourData {

    public email: string;
    public message: string;

    constructor(protected override dataService: DataService, ui: ITourData) {
        super(dataService); 

        this.url = 'https://us-central1-georgioupolis-taxi.cloudfunctions.net/sendTourEmail';

        this.read(ui);

    }

    public read(ui: ITourData) {
        this.email = 'email='+ui.email;
        this.message = 'message='+ui.message;
    }

    public getQuery(){
        return this.url + '?' + this.email + '&' + this.message;
    }
}