const router = require("express").Router();

const { getAllUserStories, getAUsersStory, createStory, editStory, deleteStory } = require("../controllers/storyController");

 
 // route for user
 router.route('/').get(getAllUserStories).post(createStory);
router.route('/:storyId').get(getAUsersStory).patch(editStory).delete(deleteStory);
 
module.exports = router;