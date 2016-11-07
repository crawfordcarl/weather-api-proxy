# Weather API Thingy

- Hosted on a Digital Ocean droplet: http://138.68.156.60/

- Urls follow the pattern /api/location/{location}/start/{timestamp}/end/{timestamp}/
- {location} can be latlng, a city name, postcode, even an IP address
- {timestamp} is a unix timestamp
- Note: /end/{timestamp} will just give you some useless text due to limitations on the Apixu api, see below.

- Django 1.10 using views acting as a proxy to the Apixu weather API. Urls are written by hand, could have used DRF or Tastypie but I didn't want to overengineer the solution. Served through nginx and gunicorn.

- Originally I was using OpenWeather but ran into a problem in that the historical is a paid feature ($150 a month for just a starter). Other data sources are locked to location (US) or only offer current weather. Fortunately Apixu provides historical data up to 30 days ago (lucky). Apixu doesn't allow you to use a start and end date so using a start and end will need to be implemented manually in the views - I've not done this as I dont want to spam their API with a request for each day between two dates

- There is currently no caching, but will be adding this as an additional feature when I find time. It will simply store any "new" data in postgres (through django orm), with any requests checking whats data we have first, then fetching any data which is missing.

- A django entry view serves a built React application for viewing the data. Initial load fetches /api/location for some initial data (currently set to London). User can set location using the input.

- Data presented in bootstrap components (courtesy of React-Boostrap), so can easily be made mobile-friendly using appropriate columns descriptions (xs, md etc...). Not currently the prettiest as I haven't given UI/UX any thought, opting more for getting it "working".

- Data from the api is stored in the root state. No redux used as it was not necessary (given there is one primary action with one dataset which will ever change, the side effects can be managed manually). If I add redux, I guarantee you will also see Sagas and selectors and a number of other things here.

- I haven't included any validation for user input as of yet.

- There are no tests written yet, though the React app has JEST set up by default (will likely add some later) 
