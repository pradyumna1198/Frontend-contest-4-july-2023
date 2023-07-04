// Sample student data
const students = [
    {
      ID: 1,
      name: 'Alice',
      email: 'alice@example.com',
      age: 21,
      gpa: '9',
      degree: 'Btech'
     
    },
    {
      ID: 2,
      name: 'Bob',
      email: 'bob@example.com',
      age: 22,
      gpa: '7',
      degree: 'MBA'
      
    },
    {
      ID: 3,
      name: 'Charlie',
      email: 'charlie@example.com',
      age: 20,
      gpa: '6',
      degree: 'Arts'
     
    }
  ];
  
  // Function to render students table
  function renderStudentsTable() {
    const tableBody = document.getElementById('students-table-body');
    tableBody.innerHTML = '';
  
    students.forEach((student) => {
      const row = document.createElement('tr');
  
    
      for (const key in student) {
        if (student.hasOwnProperty(key)) {
          const cell = document.createElement('td');
          cell.textContent = student[key];
          row.appendChild(cell);
        }
      }
  
      // Create Edit button
      const editButtonCell = document.createElement('td');
      const editButton = document.createElement('button');
      //editButton.textContent = 'Edit';
      editButton.innerHTML='<img src="edit.png" alt="Edit" width="20px" height="20px" />';
      editButton.addEventListener('click', () => {
        fillFormForEdit(student);
      });
      editButtonCell.appendChild(editButton);
      row.appendChild(editButtonCell);
  
      // Create Delete button
      const deleteButtonCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      //deleteButton.textContent = 'Delete';
      deleteButton.innerHTML='<img src="delete.png" alt="Delete"  width="20px" height="20px" />';
      deleteButton.addEventListener('click', () => {
        deleteStudent(student);
      });
      deleteButtonCell.appendChild(deleteButton);
      row.appendChild(deleteButtonCell);
  
      tableBody.appendChild(row);
    });
  }
  
  // add or edit a student
  function addOrEditStudent(event) {
    event.preventDefault();
  
    const studentId = document.getElementById('student-id').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gpa = document.getElementById('gpa').value;
    const degree = document.getElementById('degree').value;
    
  
    if (studentId) {
  
      const student = students.find((s) => s.ID === parseInt(studentId));
      if (student) {
        student.name = name;
        student.email = email;
        student.age = age;
        student.gpa = gpa;
        student.degree = degree;
       
      }
    } else {
      
      const newStudent = {
        ID: students.length + 1,
        name: name,
        email: email,
        age: age,
        gpa: gpa,
        degree: degree
       
      };
      students.push(newStudent);
    }
  
    
    document.getElementById('student-form').reset();//reset form
  
  
    document.getElementById('submit-button').textContent = 'Add Student';
    document.getElementById('student-id').value = '';
  
    renderStudentsTable();
  }
  
  //  editing a student
  function fillFormForEdit(student) {
    document.getElementById('student-id').value = student.ID;
    document.getElementById('name').value = student.name;
    document.getElementById('email').value = student.email;
    document.getElementById('age').value = student.age;
    document.getElementById('gpa').value = student.gpa;
    document.getElementById('degree').value = student.degree;
 
  
    //  button text to Edit Student
    document.getElementById('submit-button').textContent = 'Edit Student';
  }
  
  //delete a student
  function deleteStudent(student) {
    const index = students.findIndex((s) => s.ID === student.ID);
    if (index !== -1) {
      students.splice(index, 1);
      renderStudentsTable();
    }
  }
  
  // filter students by name, email, or degree
  function filterStudents() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
  
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(searchInput) ||
      student.email.toLowerCase().includes(searchInput) ||
      student.degree.toLowerCase().includes(searchInput)
    );
  
    renderFilteredStudents(filteredStudents);
  }
  
  //  render filtered students
  function renderFilteredStudents(filteredStudents) {
    const tableBody = document.getElementById('students-table-body');
    tableBody.innerHTML = '';
  
    filteredStudents.forEach((student) => {
      const row = document.createElement('tr');
  
     
      for (const key in student) {
        if (student.hasOwnProperty(key)) {
          const cell = document.createElement('td');
          cell.textContent = student[key];
          row.appendChild(cell);
        }
      }
  
      //  Edit button
      const editButtonCell = document.createElement('td');
      const editButton = document.createElement('button');
      //editButton.textContent = 'Edit';
      editButton.innerHTML='<img src="edit.png" alt="Edit"  width="20px" height="20px" />';
      editButton.addEventListener('click', () => {
        fillFormForEdit(student);
      });
      editButtonCell.appendChild(editButton);
      row.appendChild(editButtonCell);
  
      //  Delete button
      const deleteButtonCell = document.createElement('td');
      const deleteButton = document.createElement('button');
       // deleteButton.textContent = 'Delete';
        deleteButton.innerHTML='<img src="delete.png" alt="Delete"  width="20px" height="20px" />';
      deleteButton.addEventListener('click', () => {
        deleteStudent(student);
      });
      deleteButtonCell.appendChild(deleteButton);
      row.appendChild(deleteButtonCell);
  
      tableBody.appendChild(row);
    });
  }
  

  renderStudentsTable();
  
  
  document.getElementById('student-form').addEventListener('submit', addOrEditStudent);
  document.getElementById('search-input').addEventListener('input', filterStudents);
  