const express = require("express");
const appRouter = express.Router();
const appController = require("../controller/appController");
/*
APPROACH(small brief)
    SMALL DB
        Due to small size of the list of papers, makes more sense to query once for all and then filter in the frontend itself

    LARGE DB
        As the DB Grows, might end up with thousands of papers,
        then it would be better to fetch in batches, as users scrolls through, and filter in the server
        when filter operations are performed
    MY APPROACH
        Since its always best to plan for scaling, i will be implementing querying the DB for batches 
        and allow the filtering of data to occur in the backend itself

        we will use server-side filtering to get most upto date data
        and allow for the server to send all the results at once for now since we know the DB isnt growing for us
*/
//*ROUTES*
//GET
appRouter.get("/papers", appController.getPapers);
appRouter.get("/saved-papers", appController.getSavedPapers);
//POST
appRouter.post("/save-paper", appController.savePaper);
//Delete
appRouter.delete("/remove-paper", appController.deleteSaved);
module.exports = appRouter;
