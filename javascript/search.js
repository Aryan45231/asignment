const candidates = [
    { name: 'Aryan Jaiswal', role: 'Software Engineer' },
    { name: 'Aman Verma', role: 'Data Analyst' },
    { name: 'Adarsh Keserwani', role: 'Product Manager' },
    { name: 'Abhishek singh', role: 'UI/UX Designer' }
];


const search = (e) => {
    const f_array = candidates.filter((ele) => {
        const a = ele.name.toLowerCase()
        const b = e.value.toLowerCase()
        const c = ele.role.toLowerCase()
        if (a.includes(b) || c.includes(b))
            return ele
    })
    if (f_array.length == 0) {
        document.getElementById("candidates-list").innerHTML = ` No data found `

    }
    else
        document.getElementById("candidates-list").innerHTML = `
             ${f_array.map(ele => {
            return `
            <div>
            <h2> ${ele.name} </h2>
            <H3> ${ele.role} </H3>
          </div>
             `

        })
            }
        `
}
const form = document.getElementById('search-form');
const candidatesList = document.getElementById('candidates-list');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const location = document.getElementById('location').value;
    const jobRole = document.getElementById('job-role').value;

    // Perform search or fetch candidates based on location and job role
    // Replace the code below with your actual implementation
    const fetchedCandidates = fetchCandidates(location, jobRole);

    // Clear previous candidates from the list
    candidatesList.innerHTML = '';

    // Display fetched candidates in the list
    fetchedCandidates.forEach(function (candidate) {
        const listItem = document.createElement('li');
        listItem.classList.add('candidate-item');
        listItem.textContent = candidate.name + ' - ' + candidate.role;
        candidatesList.appendChild(listItem);
    });
});

function fetchCandidates(location, jobRole) {
    // Replace this with your actual implementation
    // Simulating fetching candidates from a database or API


    // Filter candidates based on location and job role
    const filteredCandidates = candidates.filter(function (candidate) {
        return candidate.role.toLowerCase() === jobRole.toLowerCase() &&
            candidate.location.toLowerCase() === location.toLowerCase();
    });

    return filteredCandidates;
}