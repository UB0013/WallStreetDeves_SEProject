//create router to handle user api reqs
const exp = require("express");
const postApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
require("dotenv").config();
const verifyToken = require('./middlewares/verifyToken')
postApp.use(exp.json());
postApp.use(exp.urlencoded());


postApp.post(
    "/new-post",
    expressAsyncHandler(async (request, response) => {
        //get postCollectionObject
        let postCollectionObject = request.app.get("postCollectionObject");
        
        //get newPostObj as string from client and convert into object
        let newPostObj;
        console.log("Received postObj data:", request.body.postObj);
        try {
            // Try to parse the JSON string
            newPostObj = JSON.parse(request.body.postObj);
        } catch (error) {
            // If parsing fails, handle the error (e.g., log it)
            console.error("Error parsing JSON:", error);
            response.status(400).send({ message: "Invalid JSON data" });
            return;
        }

        // Insert the new post object into the database
        await postCollectionObject.insertOne(newPostObj);
        response.send({ message: "New Post created" });
    })
);

const ITEMS_PER_PAGE = 10;

postApp.get(
    "/posts",
    expressAsyncHandler(async (request, response) => {
        let postCollectionObject = request.app.get("postCollectionObject");

        // Parse query parameters
        const page = parseInt(request.query.page) || 1; // Current page, default to 1
        const visibility = request.query.visibility || 'public'; // Post visibility, default to public

        // Calculate skip value for pagination
        const skip = (page - 1) * ITEMS_PER_PAGE;

        // Query to retrieve posts based on visibility and pagination
        let query = { visibility };

        let totalPosts = await postCollectionObject.countDocuments(query);
        let totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE);

        // Fetch posts for the current page
        let posts = await postCollectionObject.find(query)
            .sort({ createdAt: -1 }) // Sort by creation date, latest first
            .skip(skip) // Skip posts for pagination
            .limit(ITEMS_PER_PAGE) // Limit number of posts per page
            .toArray();

        response.send({ message: "Posts list", payload: { posts, totalPages } });
    })
);


//private route for testing
postApp.get('/test', verifyToken, (request, response) => {
  response.send({ message: "This reply is from private route" })
})

//create a route to modify user data

//create a route to delete user by username

//export userApp
module.exports = postApp;