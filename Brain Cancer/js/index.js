function handleFiles(files) {
    const fileName = document.getElementById("fileName");
    if (files.length > 0) {
        fileName.textContent = files[0].name;
    } else {
        fileName.textContent = "No file chosen";
    }
}

let result_box = document.querySelector(".result-box")

if (result_box.innerHTML.trim() === '') 
{
    result_box.style.display = "none"    
    console.log("empty")
} 
else
{
    result_box.style.display = "flex"    
    console.log("not")
}