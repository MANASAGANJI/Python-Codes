document.getElementById('careerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    fetch('http://localhost:5000/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('recommendations').innerHTML = `
            <h2>Recommended Careers:</h2>
            <ul>
                ${data.recommendations.map(recommendation => `<li>${recommendation}</li>`).join('')}
            </ul>
        `;
    });
});
