const express = require('express');
const router = express.Router();
const BlockData= require('../Models/universaldata');

router.post("/",async(req,res)=>{
     try{
      const newBlockdata = await new BlockData(req.body);
      await newBlockdata.save();
      res.status(200).json(newBlockdata)
      
     }
     catch(err){
         
        console.log(err);
        res.status(500).json("Internal server error")
     }
})

router.get("/BlockData",async(req,res)=>{
    try{
        const data = await BlockData.find();
        res.json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json("Internal server error")
    }
})

router.get('/Blockdata/:id/Department',async(req,res)=>{

    try{
        const data = await BlockData.find(req.params.id);
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/labs', async (req, res) => {
    try {
        const labsData = await BlockData.find({}, 'Labs');
        res.json(labsData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Classrooms
router.get('/classrooms', async (req, res) => {
    try {
        const classroomsData = await BlockData.find({}, 'classrooms');
        res.json(classroomsData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Seminar Halls
router.get('/seminarhalls', async (req, res) => {
    try {
        const seminarHallsData = await BlockData.find({}, 'SeminarHalls');
        res.json(seminarHallsData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Timetables
router.get('/timetables', async (req, res) => {
    try {
        const timetablesData = await BlockData.find({}, 'Timetables');
        res.json(timetablesData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Mentoring
router.get('/mentoring', async (req, res) => {
    try {
        const mentoringData = await BlockData.find({}, 'Mentoring');
        res.json(mentoringData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Students
router.get('/students', async (req, res) => {
    try {
        const studentsData = await BlockData.find({}, 'Student');
        res.json(studentsData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Faculty
router.get('/faculty', async (req, res) => {
    try {
        const facultyData = await BlockData.find({}, 'Faculty');
        res.json(facultyData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Research
router.get('/research', async (req, res) => {
    try {
        const researchData = await BlockData.find({}, 'Research');
        res.json(researchData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Committees
router.get('/committees', async (req, res) => {
    try {
        const committeesData = await BlockData.find({}, 'Committe');
        res.json(committeesData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Events Organized
router.get('/eventsorganized', async (req, res) => {
    try {
        const eventsOrganizedData = await BlockData.find({}, 'EventsOrganized');
        res.json(eventsOrganizedData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Events Participated
router.get('/eventsparticipated', async (req, res) => {
    try {
        const eventsParticipatedData = await BlockData.find({}, 'EventsParticipated');
        res.json(eventsParticipatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

// Retrieve data for Clubs
router.get('/clubs', async (req, res) => {
    try {
        const clubsData = await BlockData.find({}, 'Clubs');
        res.json(clubsData);
    } catch (err) {
        console.error(err);
        res.status(500).json('Internal server error');
    }
});

module.exports = router;