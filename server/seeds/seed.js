const db = require('../config/connection');
const { User, Comment } = require('../models');
const cleanDB = require('./cleanDB');

const schoolData = require('./schoolData.json');
const classData = require('./classData.json');
const professorData = require('./professorData.json');

db.once('open', async () => {
  // clean database
  await cleanDB("School", "schools");
  await cleanDB("Class", "classes");
  await cleanDB("Professor", "professors");

  // bulk create each model
  const schools = await School.insertMany(schoolData);
  const classes = await Class.insertMany(classData);
  const professors = await Professor.insertMany(professorData);

  for (newClass of classes) {
    // randomly add each class to a school
    const tempSchool = schools[Math.floor(Math.random() * schools.length)];
    tempSchool.classes.push(newClass._id);
    await tempSchool.save();

    // randomly add a professor to each class
    const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
    newClass.professor = tempProfessor._id;
    await newClass.save();

    // reference class on professor model, too
    tempProfessor.classes.push(newClass._id);
    await tempProfessor.save();
  }

  console.log('all done!');
  process.exit(0);
});
