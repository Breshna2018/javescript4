
(function () {

    let petsData = [];
  
    function fetchData() {

      return new Promise((resolve, reject) => {
        // Simulating asynchronous data fetching
        setTimeout(() => {
         fetch('student.json')
            .then(response =>{
                if(!response.ok){
                    throw new Error("Failed to fetch data.");
                }
                
            

            

            
                resolve(data);
                
                },2000);

                return response.json();

            }).catch(error => {
                reject('Error fetching data: ' + error.message);
              });
            


    
    


    
  
    
    function displaystudent(student){
      console.log("check data");
        const displaystudent = document.getElementById('studentlist');
        displaystudent.innerHTML = "<ul>";
        student.forEach(student => {
            displaystudent.innerHTML += `<li>${student.name} - Age: ${student.age} - majer:${student.majer}</li>`
        });
        displaystudent.innerHTML += "</ul>";
    } 
  
   
  
    
  
    
  
    
  
    
  
    
    document.getElementById('filtercomputerscience').addEventListener('click', function () {
        fetchData()
          .then(data => {
        
            const filteredStudents = data.filter(student => student.major === 'Computer Science' && student.age > 20);
            displayDataOrError(filteredStudents, null);
          })
          .catch(error => {
            displayDataOrError(null, error);
          });
      })
    
      document.getElementById('calculateAvgAge').addEventListener('click', function () {
        fetchData()
          .then(data => {
            
            const totalAge = data.reduce((sum, student) => sum + student.age, 0);
            const averageAge = totalAge / data.length;
            displayDataOrError([{ averageAge }], null);
          })
  
    
        
        .catch(error => {
            console.error("Error fetching data", error);
            alert('Error fetching data. Please try again later.');
        })
        document.getElementById('filteroddindex').addEventListener('click', function () {
            fetchData()
              .then(data => {
                // Filter students with odd index values
                const oddIndexStudents = data.filter((_, index) => index % 2 !== 0);
                displayDataOrError(oddIndexStudents, null);
              })
              .catch(error => {
                displayDataOrError(null, error);
              });


  
        
  
  })();
  
    
    