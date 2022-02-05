navigator.getBattery().then((battery) => {
  function updateInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischarginInfo();
  }
  updateInfo();
  battery.addEventListener("chargingchange", () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log(battery.charging);
    if (battery.charging) {
      document.querySelector("#status").innerHTML = "заряжается";
      document
        .querySelector("#battery_level")
        .classList.add("battery-animation");
    } else {
      document.querySelector("#status").innerHTML = "не заряжается";
      document
        .querySelector("#battery_level")
        .classList.remove("battery-animation");
    }
  }
  battery.addEventListener("levelchange", updateLevelInfo);
  function updateLevelInfo() {
    document.querySelector("#battery_level_number").innerHTML =
      battery.level * 100 + "%";
    document.querySelector("#battery_level").style.width =
      battery.level * 100 + "%";
  }

  battery.addEventListener("chargetime", updateChargingInfo);
  function updateChargingInfo() {
    document.querySelector("#default_time").innerHTML =
      battery.chargingTime / 60;
  }

  battery.addEventListener("dischargetime", updateDischarginInfo);
  function updateDischarginInfo() {
    document.querySelector("#default_time_finish").innerHTML =
      battery.dischargingTime;
  }
});
