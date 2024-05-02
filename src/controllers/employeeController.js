const Employee = require('../models/Employee')
const mongoose = require('mongoose');


/**
 * GET /
 * employee page
 */


exports.employee = async (req, res) => {

    const messages = await req.employeeFlash('info');

    const locals = {
      title: "About - NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
//페이지에 보여줄 작업자 수
    try {
      const employees = await Employee.find({}).limit(22);
      res.render('employee/employee', { locals, messages, employees } );
    } catch (error) {
      console.log(error);
    }
  }

/**
 * GET /
 * 새로운 노동자 양식
 */

exports.addEmployee = async (req, res) => {
    const locals = {
      title: "Add New Employee",
      description: "Free Nodejs User Management System.",
    }
    res.render('employee/addemployee', locals);
  }

/**
 * POST /
 * 새로운 노동자 생성
 */

exports.postEmployee = async (req, res) => {

    console.log(req.body);

    const newEmployee = new Employee({
        name: req.body.name,
        sex: req.body.sex,
        local: req.body.local,
        RRN: req.body.RRN,
        phonenumber: req.body.phonenumber,
    });

    try {
        req.body.user = req.user.id;
        await req.flash('info', '새 작업자가 추가되었습니다.')
        await Employee.create(newEmployee);

        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
    
  }  