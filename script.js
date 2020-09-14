// got all the buttons here
var btn = document.querySelectorAll(".btn");

// count variable for user and cpu
var user_score_count = 0;
var cpu_score_count = 0;

// applied the for each method on buttons node list
Array.from(btn).forEach((e) => {
  // applied the click handler on each buttons
  e.addEventListener("click", (e) => {
    document.querySelector(".player-1").innerHTML = e.target.getAttribute(
      "data-value"
    );
    // generated a random number
    var num = Math.floor(Math.random() * 3);
    // generated the cpu response
    if (num == 0) {
      document.querySelector(".cpu").innerHTML = "✊";
    }
    if (num == 1) {
      document.querySelector(".cpu").innerHTML = "✋";
    }
    if (num == 2) {
      document.querySelector(".cpu").innerHTML = "✌";
    }
    // applied the win and false conditions
    if (
      document.querySelector(".player-1").innerHTML == "✊" &&
      document.querySelector(".cpu").innerHTML == "✌"
    ) {
      cpu_score_count = cpu_score_count + 1;
      document.querySelector(".cpu-score").innerHTML = cpu_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML == "✌" &&
      document.querySelector(".cpu").innerHTML == "✊"
    ) {
      user_score_count = user_score_count + 1;
      document.querySelector(".player-score").innerHTML = user_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML == "✊" &&
      document.querySelector(".cpu").innerHTML == "✋"
    ) {
      cpu_score_count = cpu_score_count + 1;
      document.querySelector(".cpu-score").innerHTML = cpu_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML == "✋" &&
      document.querySelector(".cpu").innerHTML == "✊"
    ) {
      user_score_count = user_score_count + 1;
      document.querySelector(".player-score").innerHTML = user_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML == "✋" &&
      document.querySelector(".cpu").innerHTML == "✌"
    ) {
      cpu_score_count = cpu_score_count + 1;
      document.querySelector(".cpu-score").innerHTML = cpu_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML == "✌" &&
      document.querySelector(".cpu").innerHTML == "✋"
    ) {
      user_score_count = user_score_count + 1;
      document.querySelector(".player-score").innerHTML = user_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML ==
      document.querySelector(".cpu").innerHTML
    ) {
      alert("draw");
    }
  });
});
