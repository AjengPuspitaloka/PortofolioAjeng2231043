soundToggle.addEventListener("change", function() {
    localStorage.setItem("sound", this.checked ? "on" : "off");
});
