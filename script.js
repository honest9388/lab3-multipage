document.getElementById("themeToggle").addEventListener("click", () =>
  {
  document.body.classList.toggle("dark-theme");
  });

  // Form Validation
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (name === "" || message === "") {
    alert("Please fill out all fields.");
  } else {
    document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
    e.target.reset(); // Optional: clear form
  }
});

// FAQ Toggle
document.querySelectorAll(".question").forEach((q) => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("visible");
  });
});

// Static Team Members
const teamMembers = [
  "Mwila Honest (CEO)",
  "Blessings Kalobwe",
  "Chilu Chilufya",
  "Donald Kazwala",
  "Benson Mwata",
  "Kali Bwalya",
  "Hm Banda",
  "Olivia Kim"
];

document.getElementById("loadUsersBtn")?.addEventListener("click", () => {
  const userList = document.getElementById("userList");
  userList.innerHTML = ""; // Clear previous list

  teamMembers.forEach(member => {
    const li = document.createElement("li");
    li.textContent = member;
    userList.appendChild(li);
  });
});
