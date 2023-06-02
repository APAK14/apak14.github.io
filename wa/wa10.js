// Problem 1
var sam = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true
  };
  
  var mary = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true
  };
  
  var bill = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false
  };
  
  var anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
  };
  
  var company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [sam, mary, bill]
  };
  
  console.log(company);
  
  // Problem 2
company.employees.push(anna);

console.log(company);

// Problem 3
function calculateTotalSalary(company) {
    var totalSalary = 0;
  
    for (var i = 0; i < company.employees.length; i++) {
      totalSalary += company.employees[i].salary;
    }
  
    return totalSalary;
  }
  
  var totalSalary = calculateTotalSalary(company);
  console.log("Total Salary: " + totalSalary);
  