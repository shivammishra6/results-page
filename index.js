fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const summarySection = document.getElementById("summarySection");
    data.forEach((subject) => {
      const div = document.createElement("div");
      div.className = "flex summaryRowPadding";
      if (subject.score == 80) div.id = "reaction";
      if (subject.score == 92) div.id = "memory";
      if (subject.score == 61) div.id = "verbal";
      if (subject.score == 72) div.id = "visual";
      div.innerHTML = `<div class="flex">
        <img src="${subject.icon}" alt="" />
        <p class="${subject.color}">${subject.category}</p>
      </div>
      <div>
        <span class="dark-gray-blue"> ${subject.score} </span>
        <span class="gray-dark"> / 100 </span>
      </div>`;
      summarySection.appendChild(div)
    });
    const button=document.createElement("button")
    button.innerText="Continue"
    summarySection.appendChild(button)
  });
