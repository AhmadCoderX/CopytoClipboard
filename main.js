$(document).ready(function(){
    // Two functions to add and remove class in the span.

    function add() {
        $(".copied").addClass("Bounce-effect")
    }
    function remove() {
        $(".copied").removeClass("Bounce-effect")
    }

    // call functions and copy text on button click
    $(".copy-btn").click(function(){
        $("#textField").select();
        document.execCommand("copy");
        add();
        setTimeout(remove, 800);
    })
});