$(document).ready(()=>{
    setInterval(() => {
        var date = new Date()
        $('.time').text(date.toTimeString());
    }, 1000);
})