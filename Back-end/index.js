const express = require('express')

const Sequelize = require('sequelize')

const app = express()

const port = 5000;

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.post('/user', async (req, res) => {

        try {
        
        const newUser = new User(req.body)
        
        await newUser.save()
        
        res.json({ user: newUser }) // Returns the new user that is created in the database
        
        } catch(error) {
        
        console.error(error)
        
        }
        
        })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



const sequelize = new Sequelize('postgres://postgres:admin123@localhost:5432/FinancePeer')

sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});


const User = sequelize.define('users', {
    // attributes
    
    userId: {
    type: Sequelize.INTEGER,
    
    },
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    validate: {
        notNull: { args: true, msg: "You must enter a id" }
    }
    
    },
    title: {
        type: Sequelize.TEXT
        
        },
    body: {
        type: Sequelize.TEXT
            
     }
}, 
{
    // options
    });

    User.sync({ force: true }) 


    
