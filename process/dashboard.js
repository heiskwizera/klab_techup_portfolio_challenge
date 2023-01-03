let totalMessages = localStorage.getItem("messagesList") ? JSON.parse(localStorage.getItem("messagesList")).length : 0;
let totalBlogs = localStorage.getItem("blogList") ? JSON.parse(localStorage.getItem("blogList")).length : 0;
document.getElementById("totalBlogs").innerHTML = totalBlogs;
document.getElementById("totalMessages").innerHTML = totalMessages;