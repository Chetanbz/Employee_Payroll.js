let empPayrollList ;
window.addEventListener('DOMContentLoaded',(event)=>{
  empPayrollList = getEmployeePayrollDataFromStorages();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');

});

const getEmployeePayrollDataFromStorages = () =>{
  return localStorage.getItem('EmployeePayrollList')?
                           JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
}

const createInnerHtml= () => {
  if (empPayrollList.length == 0) return;
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>Start Date</th><th>Actions</th>";
  let innerHtml = `${headerHtml}`
    for(let empPayrollData of empPayrollList){
    empPayrollData.id = empPayrollList.indexOf(empPayrollData);
    innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
                <td>${empPayrollData.id},${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDepHtml(empPayrollData._department)}</div>
                <td>${empPayrollData._salary}</td>
                <td>${stringify(empPayrollData._startDate)}</td>
                <td>
                    <img id="${empPayrollData.id}" onclick="remove(this)" alt="delete"
                        src="../assests/icons/delete-black-18dp.svg">
                    <img id="${empPayrollData.id}"  onclick="update(this)" alt="edit"
                        src="../assests/icons/create-black-18dp.svg">
                </td>
            </tr>
            `;
    }
            document.querySelector('#table-display').innerHTML = innerHtml
}

const getDepHtml = (deptList) => {
  let deptHtml = "";
  for (const dept of deptList){
    deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
  }
  return deptHtml;
}

const getDateHtml = (startDate) =>{
  const options = {year : 'numeric' , month: 'long', day: 'numeric'};
  const empdate = !this.startDate ? "undefined": this.startDate.toLocaleDateString("en-US",options);
  return empdate;
}

const remove = (node) =>{
  let employeeData = empPayrollList.find(empData => empData.id == node.id);
  console.log(node.id);
  console.log(employeeData.id);
  if(!employeeData) return;
  let index = empPayrollList.indexOf(employeeData);
  empPayrollList.splice(index,1);
  localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
  createInnerHtml();
}


const update =(node) =>{
  let empPayrollData = empPayrollList.find(empData => empData.id== node.id)
  if (!empPayrollData) return;
  localStorage.setItem("editEmp",JSON.stringify(empPayrollData))
  window.location.replace(site_properties.add_emp_payroll_page);
}