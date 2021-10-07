# Parmpara Project

## Basic Mysql implementation with knex

### Create Database

#### Fisrt table
 - 1 /registration a user (name, email, password) - post
 - 2 /profile-edit/:userId (name, email, password )-put
 - 3 /delete-user/:userId - delete

#### Second table
 - user_post (userId, ImgUrl, date, captionForImg) - post

## Needs to do
**I have created two table**

 1. for user registration
 2. for user post 
 3. for each table I created the route, post, put, delete, get

**Inputs** 
 1. User registration
    - Name, email, password
 2. user post
    - Date, imgurl, captionforimg

## Needs to study

blog - https://blog.webdevsimplified.com/2019-12/express-middleware-in-depth/

video - https://www.youtube.com/watch?v=lY6icfhap2o

 - string() method
 - difference between controller and routs folder
 - how .then works with hasTable() method
 - express.Router()
 - how, knex, express, and database all three are connected, how do they work
 - why do we need framwork (express.js)
 - what is rout/routing (http and http methods - get, post, put, delete)
 - Middleware
 - How many parameters does app.get() method takes
 - difference between get() and post() method
 - How middleware functions are getting called without paranthisis (app.use(demoMiddleware);)
 - How to use middleware to check if the user is logged in? the basic one
 

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
### regex
 regex to restrict URL parameter matching.
 - example - app.get('/things/:id([0-9]{5})', callback)

## Middleware 
middleware as functions that execute after the server receives the request and before the controller action sends the response. The biggest thing is that middleware functions have access to the response (res) and request (req) variables and can modify them or use them as needed. Middleware functions also have a third parameter which is a next function. This function is important since it must be called from a middleware for the next middleware to be executed. If this function is not called then none of the other middleware including the controller action will be called.