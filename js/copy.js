// copy.js

//複製框
const button = document.getElementById("copyBtn");
button.addEventListener("click", async ()=>{
    const text = document.getElementById("copyText").value;
    try{
        await navigator.clipboard.writeText(text);
        button.textContent = "複製完畢";
        setTimeout(()=>{
            button.textContent = "複製";
        },1500);
    }
    catch(err){
        alert("複製失敗");
    }
    button.classList.add("copy-success");

    setTimeout(()=>{
        button.classList.remove("copy-success");
    },200);
});