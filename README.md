# RecipeBook
- Use "aakrish" as password to sign in to get facility like update and delete the food as 
an admin.

MERN Stack project to create a recipe  and save it to the mongoDB
packages installed:
create react                          
- npm install bootstrap-dark-5 axios

npm init
- npm i express nodemon mongoose multer
- npm i bcryptjs jsonwebtoken express-validator

A recipe web application which helps you create food recipe and view it in the home page.
and the admin has the facility to update and delete the item from the mongo db. 

CategoryName is created manually in mongodb to fetch it for check in baceknd.
  {
    _id: new ObjectId('67102a0f5ea750d1c27e0aff'),
    categoryName: 'vegetarian'
  },
  {
    _id: new ObjectId('67102a2d5ea750d1c27e0b00'),
    categoryName: 'meat'
  },
  {
    _id: new ObjectId('67102a81382fa9f2d89bfbfc'),
    categoryName: 'vegan'
  },
  {
    _id: new ObjectId('67102a81382fa9f2d89bfbfd'),
    categoryName: 'lactosefri'
  },
  {
    _id: new ObjectId('67102a81382fa9f2d89bfbfe'),
    categoryName: 'glutonfri'
  }