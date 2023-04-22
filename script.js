const employees = [
    {id:1, name:"john", age:"18", profession:"developer"},
    {id:2, name:"jack", age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19", profession:"admin"}
  ];
  const arrayOutput = document.getElementById("employee-list");
    employees.forEach((obj) => {
    const name = obj.name;
    const profession = obj.profession;
    const age = obj.age;

    const div = document.createElement("div");
    div.innerHTML = `Name: ${name}   Profession: ${profession}   Age: ${age}`;
    arrayOutput.appendChild(div);
  });

  const form = document.querySelector('#add-form');
  const employeeList = document.querySelector('#employee-list');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if(form.name.value==""||form.profession.value==""||form.age.value==""){
        return;
    }
    else{
    let name= "Name: ";
    let profession= "Profession: "; 
    let age= "Age: ";
    name += form.name.value;
    profession += form.profession.value;
    age += form.age.value;
  
    
    const newEmployee = {
      id: employees.length + 1,
      name: name,
      profession: profession,
      age: age
    };
  
    employees.push(newEmployee);
    form.reset();
    const card = createEmployeeCard(newEmployee);
    employeeList.appendChild(card);
    } 
});
  
  function createEmployeeCard(employee) {
    const card = document.createElement('div');
    const name = document.createElement('p');
    const profession = document.createElement('p');
    const age = document.createElement('p');
  
   
    name.textContent = employee.name;
    profession.textContent = employee.profession;
    age.textContent = employee.age;
  
    card.appendChild(name);
    card.appendChild(profession);
    card.appendChild(age);

    return card;
 
  }
  