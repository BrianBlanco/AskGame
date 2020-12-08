
/* All the functions has the same structure:
    db: Instance of the database, the conection
    collection: Name of the collection to use
    callback: Function that will be called at the end of the function
*/

const mongodb = require('mongodb');

module.exports = {
    // Find all the documents in a collection
    findDocuments: function (db, collectionName, query, callback) {
        // Get the documents collection
        const collection = db.collection(collectionName);
        // Find some documents
        collection.find(query).toArray(function (err, docs) {
            callback(docs);
        });
    },
    /*
        findOneDocument: function (db, collectionName, query, callback) {
            // Get the documents collection
            const collection = db.collection(collectionName);
    
            // Find some documents
            collection.findOne({ query }, function (err, docs) {
                callback(docs);
            });
        },*/

    // Insert a document into a collection
    insertDocuments: function (db, collectionName, query, callback) {
        // Get the documents collection
        const collection = db.collection(collectionName);

        // Insert some documents
        collection.insertMany(query, function (err, result) {
            callback(result);
        });
    },

    // Update a document from a collection

    updateDocument: function (db, collectionName, callback) {
        // Get the documents collection
        const collection = db.collection(collectionName);
        // Update document where a is 2, set b equal to 1
        collection.updateOne({ name: "Brian" }
            , { $set: { isHandsome: false } }, function (err, result) {
                callback(result);
            });
    },

    deleteDocument: function (db, collectionName, productID, callback) {
        const collection = db.collection(collectionName);
        console.log(productID);
        // Delete document where a is 3
        let query = { "_id": new mongodb.ObjectID(productID) }
        collection.deleteOne(query, function (err, result) {
            callback(result);
        });
    }
}

// Find by _id query {"_id":ObjectId("5f7b80336fc4c367d2c2bcc4")}