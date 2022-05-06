# Good Hikes

SonicTonic https://sonictonic.herokuapp.com/

![Home Page](readmeimages/Homepage.png) **_Home Page_**

![Cabinet View](readmeimages/CabinetView.png) **_Cabinet View_** - View all of the songs uploaded to SonicTonic

![Song Page](readmeimages/SongPage.png) **_Song Page_** - Every song has it's own dedicated page for listening to and sharing your thoughts about the song.

![YourTrackPage](readmeimages/YourTrackPage.png) **_Cabinet View_** - As a signed in user, you can edit or delete the tracks you have uploaded.


Git Wiki https://github.com/brianmay2014/sonictonic/wiki

## SonicTonic at a Glance

SonicTonic is a full stack application that allows user to explore new music. When signing up, the username chosen will double as the display name.Users are not required to sign up for an account if they just want to listen to music and read comments. Logged in users can add comments to or delete comments from songs on the app, they can also add their own song to the app, with the ability to edit and delete. Any song the user shares will be instantly available to anyone accessing the site. Currently SonicTonic is seeded with 5 different albums by various artists to give the feel for the site.  There is a Demo user available to browse the logged in features, and a couple other users used in to fill out seed data for comments.

## Getting Development Environment Up And Running
- Git Clone the repo to your local machine
- Install Dependencies:
  - While inside `/backend` Run `npm install`
  - While inside `/frontend` Run `npm install`
- Create a '.env' file that mirrors the '.env.example' file
- Create a user in your local postgreSQL database according to the .env file
- While inside `backend` use the 'npx dotenv sequelize [suffix]' command with each suffix in order: 'create:db', 'db:migrate', 'db:seed:all'
- Start servers:
  - While inside `/backend` Run `npm start`
  - While inside `/frontend` Run `npm start`
- Enjoy

## Application Architecture

SonicTonic is built on React and Redux in the frontend with an Express backend, using PostgreSQL as a database.

## Frontend Overview

SonicTonic depends on backend for queries and routes, but uses the Redux store and React components for a snappy frontend.

### Frontend Technologies Used

#### React

Web pages of SonicTonic are rendered using React components. It creates dynamic reusable content, with quick DOM manipulation for fast re-rendering. Used React to build JSX elements.

#### Redux

SonicTonic uses Redux throughout to make limited backend calls for each page, and uses the Redux store to make re-renders snappy after the user adds, updates, or deletes items.

#### CSS

SonicTonic uses CSS to style all of the HTML documents.

#### Javacript

Javascript is used heavily on the frontend with React and Redux to create a responsive app.

### Backend Overview

SonicTonic uses an Express server with PostgreSQL database. SonicTonic also implemented features to protect user's password and information.

#### Express.js

The server of SonicTonic is set up with Express JS.

#### Express session

SonicTonic choose to use Express Sessions to create and manage session cookies on users browser.

#### Express Validator

Express Validator is powerful yet simple. SonicTonic makes sure when users are signing up, logging in, and uploading new song, proper values have been inserted.

#### PostgreSQL

SonicTonic relies on PostgreSQL to maintain its relational database.

#### Sequelize

Sequelize makes it easy for SonicTonic to manage and query the database

#### bcrypt

SonicTonic values the security of users' passwords, that is why all of the passwords has been hashed by bcrypt before storing them into the database.

#### CSRF Token

A secure random CSRF token is generated on all forms that users fill in to prevent CSRF attacks.

##Challenges and Solutions
BRAINSTORM TO BE EXANDED ON: 
- Deleting related tables
  - Cascading of deletions of comments, when deleting a song with comments tied to it.
- Store Issues
  - Initially tried things without normalizing data, after refactoring to normalized data in my store editing and deleting was a total breeze. Using `Object.values` to convert the normalized into an array for mapping helped immensely.
- Backend Routes
  - Updates not saving in the database was solved by a simple `await song.save()`.
  - Maintain the same pull from the data base for rendering, ran into some issues that were solved by ensuring everything was eagerly loaded with the same data
- Undefined on first render
  - Ran into many rendering issues on an initial load. Either used conditional chaining, or before the component was returned had an if statement for the variable causing undefined issues.
- Heroku deployment
  - Got more experience with deployment, especially with database updates. Ran into issues a couple times and just needed my database reset to fix the issue.
- Learned to not only check what my variables were doing but what the status of the state, database was.
- Learned to really 




## Conclusion and Next Steps

The next step for SonicTonic is to add playlists, likes, user profiles and a more robust albums feature. The end goal would be to have a robust platform for people to be able to share and talk about their music.