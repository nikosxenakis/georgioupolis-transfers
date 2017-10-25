export interface IDestination {
	destination: string;
	distance: number;
	price: number;
	duration: number;
}
/*
export class Destinations {
	static destinations: IDestination[] = new Array<IDestination>(
		{"destination": "kefalas", "distance": 15, "price": 30, "duration": 25},
		{"destination": "kalyves", "distance": 20, "price": 30, "duration": 25}
	);

	static getDistance(destinationName: string){
		for (let destination of Destinations.destinations) {
			if(destination.destination == destinationName)
				return destination.distance;
		}
	}
}
*/