document.getElementById("submitBtn").addEventListener("click", function() {
    const websiteAddress = document.getElementById("websiteAddress").value;
    const bgColor = document.getElementById("bgColor").value.substr(1); // Remove '#'
    const apiUrl = `https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=${websiteAddress}&color=${bgColor}`;
  
    document.getElementById("inputArea").style.display = "none";
    document.getElementById("loadingScreen").classList.remove("hidden");
  
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept-Language': 'en-US,en;q=0.9' // Setting desired language
      }
    })
      .then(response => response.blob())
      .then(imageBlob => {
        const imageObjectUrl = URL.createObjectURL(imageBlob);
        document.getElementById("resultImg").src = imageObjectUrl;
        document.getElementById("loadingScreen").classList.add("hidden");
        document.getElementById("resultScreen").classList.remove("hidden");
  
        document.getElementById("downloadBtn").addEventListener("click", () => {
          const imageObjectUrl = URL.createObjectURL(imageBlob);
          window.open(imageObjectUrl);
        }, { once: true });
      })
      .catch(error => {
        console.error('Error fetching the screenshot:', error);
        document.getElementById("loadingScreen").classList.add("hidden");
        alert('Failed to fetch screenshot.');
      });
  });
// Get the modal
var modal = document.getElementById("helpModal");

// Get the button that opens the modal
var btn = document.getElementById("helpBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
