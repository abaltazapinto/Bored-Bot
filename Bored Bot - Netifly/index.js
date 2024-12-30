
const button = document.getElementById("button");

button.addEventListener("click", () => {
fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then(data => {
    const placeholder = document.createElement('p');
    const textFetched = data.activity;

    placeholder.textContent = textFetched;

    const container = document.getElementById("activity-name");
    container.textContent = "";
    container.appendChild(placeholder)
  })
  .catch(error => console.error("Error fetching activity", error));
});

