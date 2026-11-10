// The "tell me when it's out" form ([data-waitlist]) on the home page. It posts to Macrowave's
// server without leaving the page; the server keeps the address for one email at launch.
for (const form of document.querySelectorAll("[data-waitlist]")) {
  const note = form.querySelector(".note");
  const message = form.querySelector(".msg");
  const button = form.querySelector("button[type=submit]");
  const input = form.elements.email;
  const say = (text, kind = "") => {
    note.className = `note ${kind}`.trim();
    message.textContent = text;
  };

  // The "Join the waitlist" button on a shared recipe or workout says which it came from.
  const from = new URLSearchParams(location.search).get("from");
  if (from === "recipe" || from === "workout") form.elements.source.value = from;

  const focusIfAsked = () => {
    if (location.hash === "#waitlist") input.focus();
  };
  addEventListener("hashchange", focusIfAsked);
  focusIfAsked();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    button.disabled = true;
    say("Adding you…");
    try {
      const response = await fetch(form.action, { method: "POST", body: new URLSearchParams(new FormData(form)) });
      if (response.ok) {
        form.classList.add("joined");
        say("You're on the list. We'll email you once, when it's out.", "done");
      } else if (response.status === 400) {
        say("That doesn't look like an email address.", "error");
      } else if (response.status === 429) {
        say("Too many signups from here today. Try again tomorrow.", "error");
      } else {
        say("That didn't go through. Try again in a moment.", "error");
      }
    } catch {
      say("That didn't go through. Check your connection and try again.", "error");
    } finally {
      button.disabled = false;
    }
  });
}
