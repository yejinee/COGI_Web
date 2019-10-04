const express = require('express');
const Programs = express.Router();
const prolist = require('../models/prolist');
const Sequelize = require('sequelize');

Programs.post('/register', (req, res) => {  // 프로그램 등록
    let { proName, proDesc, targetCoin, targetDate, userEmail } = req.body; // 프로그램제목, 설명, 목표코인, 마감날짜, 유저 이메일을 받는다.
    const program = {
        proName,
        proDesc,
        targetCoin,
        targetDate,
        userEmail
    }
    prolist.create(
        program
    )
    .then(results => {
        res.send(results);
    })
    .catch(err => {
        console.error(err);
    })
});

Programs.get('/getAllPrograms', (req, res) => { // 모든 프로그램 가져오기
    prolist.findAll({
    })
    .then(programs => {
        res.json(programs)
    })
    .catch(err => {
        console.error(err);
    })
})


Programs.get('/getAllProgramsID/:email', (req, res) => { // 이메일을 가지고 그 이메일이 만든 프로그램을 다 가져옴.
    const userEmail = req.params.email;
    
    prolist.findAll({
        where : {
            userEmail
        }
    })
    .then(program => {
        res.json(program)
    })
    .catch(err=> {
        console.error(err);
    })
})

Programs.get('/getNumProgram/:proNum', (req, res) => {
    const { proNum } = req.params;

    prolist.findOne({
        where : {
            proNum
        }
    })
    .then(program => {
        res.json(program)
    })
    .catch(err => {
        console.error(err);
    })
})

module.exports = Programs;