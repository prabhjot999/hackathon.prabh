function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === "open123") {
    alert("🔓 A rusty door creaks open... You're free!");
  } else {
    alert("❌ Wrong password! The shadows giggle...");
  }
}

function mathRiddle() {
  const answer = prompt("🧠 Solve this: What’s 3 × 7 + 1?");
  if (answer === "22") {
    alert("🎉 Correct! The ghost nods in approval...");
  } else {
    alert("💀 Incorrect. The chains rattle ominously.");
  }
}


