## Basic Mysql implementation with knex

### Create Database

#### Fisrt table
 - 1 /registration a user (name, email, password) - post
 - 2 /profile-edit/:userId (name, email, password )-put
 - 3 /delete-user/:userId - delete

#### Second table
 - user_post (userId, ImgUrl, date, captionForImg) - post

 #### Needs to study
 - string() method
 - difference between controller and routs folder
 - how .then works with hasTable() method
 - .Router()
 - how, knex, express, and database all three are connected, how do they work
 - why do we need framwork (express.js)
 - what is rout/routing (http and http methods - get, post, put, delete)

#### Dependencies
 - nodemon - to restart the server automatically everytime I change anything in the code.
