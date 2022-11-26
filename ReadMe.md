# **Backend of XharkTank**

#### OBJECTIVE

 **Backend of XharkTank** where budding entrepreneurs can pitch ideas for a business or product they wish to develop by providing their name, title & idea for the business, the investment amount they expect to be fulfilled, and the percentage of equity they are ready to shed away to the potential investors. Investors must be able to retrieve the list of all pitches and share their feedback/comments with a counter offer as per their interests.

 Implemented the GET/POST APIs required for the backend to function as per the requirements

#### TECH STACKS

1. Node Js
2. Express Js
3. MongoDB
4. Mongoose
5. Thunder Client (for API)

#### CODE EXPLANATION

Created  pitch.js for  =>Entrepreneurs will post Pitch by providing these inputs

* Name of the entrepreneur posting the pitch
* Title of the pitch
* Business Idea for the Product they wish to develop
* Ask Expected Amount for investment
* Percentage of Equity to be diluted

Created Offer.js for=>Investors will make a counteroffer to the pitch by providing these inputs

* Unique Id of the Pitch made by the entrepreneur
* Name of the investor making a counteroffer
* Amount ready to invest in the idea
* Ask Percentage of Equity for a company

###### Mandatory API Requirement

* Endpoint to `make a counteroffer for a pitch` to the backend
* Endpoint to `post a pitch` to the backend
* Endpoint to fetch  `all the pitches in the reverse chronological order` ( i.e. last created one first ) from the backend
* Endpoint to specify a particular id (identifying the pitch) to `fetch a single Pitch`.

#### SETUP

npm install

npm run dev ( for running server )

#### VIDEO LINK

https://youtu.be/lo0zJdpodeE
