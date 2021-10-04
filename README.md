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

#### What is:- 

### rout
 route is basically a path in http methods (get, post, put, delete, etc)
  - syntax - get(rout, callback)/ get('/user', function(req, res){})
### res.send()
 This function takes an object as input and it sends this to the requesting client. Here we are sending the string "Hello World!".
### app.listen(port, [host], [backlog], [callback]])
 only port parameter is required here
### app.all()
 this method is generally used for defining middleware
 