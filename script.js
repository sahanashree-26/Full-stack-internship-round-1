function showDashboard() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  fetch('http://localhost:8080/api/intern')
    .then(response => response.json())
    .then(data => {
      document.getElementById("intern-name").textContent = data.name;
      document.getElementById("referral-code").textContent = data.referralCode;
      document.getElementById("donations-raised").textContent = data.donationsRaised;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginPage").style.display = "flex";
}
