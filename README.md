# Connect-With-Friends

## Why did I build this project?

I wanted to create an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Technologies used are: Express.js for routing, a MongoDB database, and the Mongoose ODM.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Tests:

Testing restful API calls with Insomnia

## Walktrough Video

The walkthrough demonstrates the GET, POST, PUT, and DELETE methods for users and thoughts, as well as the POST and DELETE methods for thought reactions and friend lists.

# To access this project the following links are provided:

To access Github Repository

1. https://github.com/Farhiya1/Connect-With-Friends.git


# Screenshot of application)

1. Example screenshots displaying GET, POST, PUT, and DELETE methods in Insomnia.

![Screenshot of completed application](./)


![Screenshot of completed application](./)


![Screenshot of completed application](./)

## References

1. https://mongoosejs.com/docs/tutorials/virtuals.html
2. https://codesource.io/how-to-use-mongoose-virtual-property/
3. https://expressjs.com/
4. https://www.mongodb.com/docs/manual/reference/operator/aggregation/count-accumulator/#mongodb-group-grp.-count
5. https://www.section.io/engineering-education/group-operator-in-mongodb/
6. https://www.guru99.com/node-js-mongodb.html
7. https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
8. https://www.npmjs.com
