function openModal(modalld){
    var modal = document.getElementById(modalld);
    modal.style.display = "block";
    setTimeout(function(){
        modal.style.opacity = "1";
    }, 100);
}
function closeModal(modalld){
var modal = document.getElementById(modalld);
modal.style.opacity = "0";
setTimeout(function(){
    modal.style.display = "none";
}, 300)
}