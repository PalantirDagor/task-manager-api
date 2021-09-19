//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { ObjectID } = require('bson')
const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = `${process.env.MONGODB_URL}`
const databaseName = `${process.env.DATABASE_NAME}`


MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) =>{
    if(error){
        return console.log('Unable to conncet to database')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteOne({
        _id: new ObjectId("613cf71110f97c10068a7687")
    }).then((result) => {
        console.log('Success!', result)
    }).catch((error) => {
        console.log('Error!', error)
    })

    // db.collection('tasks').deleteMany({
    //     complete: false
    // }).then((result) => {
    //     console.log('Success!', result)
    // }).catch((error) => {
    //     console.log('Error!', error)
    // })

    // db.collection('tasks').updateMany({
    //     complete: false
    // }, {
    //     $set: { 
    //         description: 'the problem was resolved!'
    //     }
    // }).then((result) => {
    //     console.log('Success!', result)
    // }).catch((error) => {
    //     console.log('Error!', error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectId("613ce6d512f030f2054dd3a7")
    // }, {
    //     $inc: { 
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log('Success!', result)
    // }).catch((error) => {
    //     console.log('Error!', error)
    // })

    // db.collection('tasks').findOne({_id: new ObjectId("613fe65a44be9bc50062d5b7")}, (error, task) =>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({complete: false }).toArray((error, tasks) =>{
    //     console.log(tasks)
    // })

    // db.collection('users').findOne({_id: new ObjectId("613fe7282bce3c156c5e20d7")}, (error, user) =>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 34}).toArray((error, users) =>{
    //     console.log(users)
    // })

    // db.collection('users').find({age: 34}).count((error, count) =>{
    //     console.log(count)
    // })
    
    // db.collection('users').insertOne({
    //     name: 'Girleza',
    //     age: 42
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //         name: 'Celeste',
    //         age: 7
    //     }, {
    //         name: 'Ariana',
    //         age: 5
    //     }
    // ], (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
        
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'This is a text one',
    //     complete: true
    // }, {
    //     description: 'This is a text two',
    //     complete: true
    // }, {
    //     description: 'This is a text three',
    //     complete: false
    // }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

})
