# Georgioupolis Tranfers

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/nikosxenakis/georgioupolis-transfers.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/nikosxenakis/georgioupolis-transfers/context:javascript)

## Guidelines

Installation:
    1. npm install
    2. bower install

Develop:
    Create project: ng new <projectName>
    Create components: ng g c my-new-component

Debug:
	angular.element($0).scope()

Run:
    ng serve
    localhost:4200

Build:
    JIT: ng build --prod
    AOT: ng build --prod --aot

Deploy:
    firebase deploy --only hosting #in firebase folder

Title:
	Georgioupolis Transfers

Moto:
	"Georgioupolis Tranfers for a secure and reliable transportation"
	(It will be an animation with a taxi photo from the left comes the taxi from the right the image)
	(As you scroll down they will continue moving)

Carousel:
	Images:
		1:
			A photo of the airport 
			"The best start!"
			"We commit for your transfer from and to each airpot of Crete"
		2: 
			A photo of our cars
			"Luxury cars"
			"Equiped with brand new fleet of mercendes-benz taxi's for your convinience"
		3: 
			A photo of a driver
			"Reliable, fast and cozy"
			"Using experienced english speaking drivers available for you 24/7"
		4: 
			A photo of a family
			"Secure and cheap transportation"
			"For you and your family from and to any destination in the island of Crete"
		5: 
			A photo of a extrodinary place
			"Discover"
			"Book tours to secret locations around Crete"
		6: 
			A photo of old taxi
			"Family bussiness"
			"Providing transfer services thoughout Crete since 19..."

Book Transfer:
	Description:
		"It's easy quick and cheap, book your transfer online now, we will "run" instead of you!"
		(words: easy quick and cheap will pop up when you see the text)
		(add a list of destinations)
		(opacity from 0 -> 1 when you see the form)
		(see fadeIn.ts)

Tours:
	Description:
		"Georgioupolis Transfers offers a whole new section in holidays experience. You are able to book one of our unique tour packages. Georgioupolis Trasfers Tours guides you from extrordinary locations to traditional places with homemade Cretan food in the region of Chania. Are you interested? The tour packages adjust depending what you are looking for. For further information contact us."
		(It will contain a list to add things to do and a form for comments)

Price table:
	Description:
		"Competitive Prices for online booking from Georgioupolis to the most visited destinations in Crete."
		(Each destination will provide link to google photos)

Footer:
	Description:
		"Our stuff is always available for you. For any futher information please contact us. We guarandee immidiate response in order to provide you as much information as we can. Please don't hesitate."

TODO:
	essentials:
		-add to google
		-fix email in tours
		-when price data is pressed set the destinations in bookTransfer as valid
		-change photos
	v2:
		-add up arrow button
		-add tours
	optimazations:
		-run angular in AOT
