
// PAC Tester
const testURL = "http://google.com";
const pacFileURL = "https://raw.githubusercontent.com/mostafaafrouzi/PAC-Proxy-Configs/pac/UK.pac";

fetch(pacFileURL)
  .then((response) => response.text())
  .then((pacScript) => {
    const FindProxyForURL = new Function("url", "host", pacScript);
    const result = FindProxyForURL(testURL, "example.com");
    console.log(`Proxy for ${testURL}:`, result);
  })
  .catch((error) => {
    console.error("Error loading PAC file:", error);
  });
