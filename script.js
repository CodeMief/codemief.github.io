// Replacing the Emotes with the user Emote / image input
const emote_input = document.querySelector("#emoteInput");
let uploaded_emote = "";

emote_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_emote = reader.result;
    const imageElements = document.querySelectorAll(".emote");
    imageElements.forEach((element) => {
      element.src = uploaded_emote;
    });
    console.log(uploaded_emote);
  });
  reader.readAsDataURL(this.files[0]);
});

// Replacing the Badges with the user Badge / image input
const badge_input = document.querySelector("#badgeInput");
let uploaded_badge = "";

badge_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_badge = reader.result;
    const imageElements = document.querySelectorAll(".badge");
    imageElements.forEach((element) => {
      element.src = uploaded_badge;
    });
    console.log(uploaded_badge);
  });
  reader.readAsDataURL(this.files[0]);
});
