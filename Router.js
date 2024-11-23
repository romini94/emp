const express = require('express');
const Employee = require('./Controller/Employeecontroller');
const router = express.Router();

router.post('/employee',Employee.upload,Employee.saveEmployee)
router.post('/login',Employee.saveLogin)
router.get('/findall',Employee.findall)
router.post('/delete/:employeeid',Employee.deleteemployee)
router.post('/update/:employeeid',Employee.update)
router.get('/profile/:employeeid',Employee.profileemployee)
router.post('/edit/:employeeid',Employee.edit)

module.exports = router;

 