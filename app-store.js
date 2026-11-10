// Macrowave's App Store ID: the number in its apps.apple.com link. Every "Get Macrowave" button
// on the site ([data-app-store]) points there once it's set, and the waitlist form goes away.
// Until then the buttons lead to the waitlist on the home page, and [data-app-store-note]
// elements swap to their pre-launch wording.
// Once it's live, also give each page Safari's Smart App Banner in <head>:
//   <meta name="apple-itunes-app" content="app-id=<ID>">
const APP_STORE_ID = "";

for (const button of document.querySelectorAll("[data-app-store]")) {
  if (APP_STORE_ID) {
    button.href = `https://apps.apple.com/app/id${APP_STORE_ID}`;
  } else {
    const from = location.pathname.startsWith("/r/") ? "recipe" : location.pathname.startsWith("/w/") ? "workout" : "";
    button.textContent = "Join the waitlist";
    button.href = document.getElementById("waitlist") ? "#waitlist" : `/${from ? `?from=${from}` : ""}#waitlist`;
  }
}
if (APP_STORE_ID) {
  for (const form of document.querySelectorAll("[data-waitlist]")) form.hidden = true;
} else {
  for (const note of document.querySelectorAll("[data-app-store-note]")) note.textContent = note.dataset.appStoreNote;
}
