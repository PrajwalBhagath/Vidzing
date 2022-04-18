## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

You will also need to install the dependencies by running

```bash
npm install
# or
yarn install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Instructions

Please clone this project and modify it. Once you finish, send us your cloned repo so we can review it.

We need to implement an API function and reusable components for nicely rendering the users data

There's already an API folder and file set up for the API fetch with more instructions inside
this is the apis/get-all-users folder

One component has already been created for a basic button that triggers an alert. This button
will need to trigger the api function this is the components/button folder

We use custom css modules, this helps keep the css files small and easy to manage
an example of this can be seen in the button component

The API is:

```
GET https://jsonplaceholder.typicode.com/users/
```

This is a sample response from the endpoint:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
]
```

You're being asked to add functionality to `index.tsx` file with the following requirements:

- Users data may be updated regularly so when someone visits this page the api needs to be fetched on user request
- Because there is alot of data in the users object we need a nice way to display the important information for each user
  - user: name, phone, email, website, company: name, catchPhrase, bs
- Please use the button to fetch the data when clicked using react hooks to update the view when a response is received
- Please create cards for each user displaying the information outlined above
  - The display should be 3 cards wide and as many deep as users there are in the response
  - Header for each card is the name of the user
  - The information in the card is the users company data
  - The footer for the card is the users email, phone & website

## Implement A nice looking button

Implement a button with rounded corners, black text and a gradient background colour starting with #63CBF8 blending into #53E9B2

## Implement A User Card

Full screen width: 3 cards
Fixed margin left: 15rem
Fixed margin right 15rem
Card margin left: 2rem  
Card margin right: 2rem
Card margin top (first 3 cards): 3rem
Card margin bottom: 5rem

```
┌────────────────────────────────────┐
│                                    │
│                                    │
│   Leanne Graham                    │
│  ┌──────────────────────────────┐  │
│  │                              │  │
│  │  Company Name:               │  │
│  │  Romaguera-Crona             │  │
│  │                              │  │
│  │  Compnay Catch phrase:       │  │
│  │  Sincere@april.biz           │  │
│  │                              │  │
│  │  Company Bs:                 │  │
│  │  harness real-time e-markets │  │
│  │                              │  │
│  └──────────────────────────────┘  │
│                                    │
│   Phone: 1-770-736-8031 x56442     │
│   Email: Sincere@april.biz         │
│   Website: hildegard.org           │
└────────────────────────────────────┘
```

## Implement a stylish looking card

To do this once you have implemented a reusable card you can style this card using its css module
Requirements:

- Rounded corners: 8px
- Background colour: #53E9B2
- User name colour: black
- All other text colour: white

## Using Coding best practices Design Principles

https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design

### Bonus Styling task

When each card is hovered over render the users username in the centre of the card without the card size being effected

## That's It!

Thank you for your time! I hope you found this test fun and productive.

Good Luck!
