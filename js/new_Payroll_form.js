let isUpdate =false;
let employeePayrollObj ={};
let  employeePayrollList;

window.addEventListener('DOMContentLoaded',(event)=>{
    events();
    checkForUpdate();
})

function events(){
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;  
            textError.textContent=""
        }catch(e){
            textError.textContent = e;
        }
    })

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    });
}

const save=() =>{
    try{
        createAndUpdateStorage();
    }catch(e){
        return;
    }
}

const createEmployeePayroll=() =>{
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    } catch (e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#month')+ " " + getInputValueById('#day')+ ", " +
               getInputValueById('#year');
               
    employeePayrollData.startDate = new Date(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

function createAndUpdateStorage(){
    let employeePayrollData ;
    employeePayrollData = createEmployeePayroll();
    employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    let index =employeePayrollObj.id;
    console.log(index);
    if(index){
        employeePayrollList.splice(index,1,employeePayrollData);
    }
    else if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }
    else{
        employeePayrollList = [employeePayrollData];
    }
    
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
    window.location.replace("../Pages/new_payroll_home.html");
}

const getSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id)=>{
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) =>{
    let value = document.getElementById(id).value;
    return value;
}

const setForm = () =>{
    setValue('#name',employeePayrollObj._name);
    setSelectedValues('[name=profile]',employeePayrollObj._profilePic);
    setSelectedValues('[name=gender]',employeePayrollObj._gender);
    setSelectedValues('[name=department]',employeePayrollObj._department);
    setValue('#salary',employeePayrollObj._salary);
    setTextValue('.salary-output',employeePayrollObj._salary);
    setValue('#notes',employeePayrollObj._note);
    let date = stringify(employeePayrollObj._startDate).split(" ");
    setValue('#day',(date[1]).substring(0, date[1].length-1));
    setValue('#month',date[0]);
    setValue('#year',date[2]);
}

const resetForm=()=> {
    setTextValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    events();
    setTextValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{
        item.checked = false;
    });
}

const setSelectedValues = (propertyValue,value) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        if(Array.isArray(value)){
            if(value.includes(item.value)){
                item.checked = true;
            }
        }
        else if(item.value == value)
        item.checked = true;
    });
}

const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

 const setValue = (id,value) =>{
     const element = document.querySelector(id);
     element.value = value;
 }



 const checkForUpdate =()=>{
     const employeePayrollJson = localStorage.getItem('editEmp');
     isUpdate = employeePayrollJson ? true : false;
     if (!isUpdate) return;
     employeePayrollObj  = JSON.parse(employeePayrollJson);
     setForm();
 }

