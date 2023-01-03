// Display Blogs
function showBlog() {
    var blogList = JSON.parse(localStorage.getItem("blogList"));
    var html = "";
    var inc = 1;
    for (var i = 0; i < blogList.length; i++) {
        html += "<tr>";
        html += "<td>" + inc++ + "</td>";
        html += "<td>" + blogList[i].title.substring(0, 25) + "...</td>";
        html += "<td>" + blogList[i].author + "</td>";
        html += "<td><a href='" + blogList[i].image + "' target='_blank'><img src='" + blogList[i].image + "' width='30' height='30'></a></td>";
        html += "<td>" + blogList[i].date + "</td>";
        html += "<td><i class='fa fa-edit' onclick='editBlog(" + blogList[i].id + ")'></i> &nbsp; <i class='fa fa-trash' onclick='deleteBlog(" + blogList[i].id + ")'></i> &nbsp;&nbsp;<i class='fa fa-eye' onclick='viewBlog(" + blogList[i].id + ")'></i> </td>";
        html += "</tr>";
    }
    console.log(html);
    $("#blogList").html(html);
}

// Add Blog
$("#addBlogForm").submit(function (e) {
    e.preventDefault();
    var title = $("#title").val();
    var description = $("#description").val();
    var author = $("#author").val();
    var image = $("#image").val();
    var date = $("#date").val();

    let errors = 0;

    if (title == "") {
        $("#titlemsg").html("Title is required");
        errors++;
    } else {
        $("#titlemsg").html("");
    }

    if (description == "") {
        $("#descriptionmsg").html("Description is required");
        errors++;
    } else {
        $("#descriptionmsg").html("");
    }

    if (author == "") {
        $("#authormsg").html("Author is required");
        errors++;
    } else {
        $("#authormsg").html("");
    }

    if (image == "") {
        $("#imagemsg").html("Image url is required");
        errors++;
    } else {
        $("#imagemsg").html("");
    }

    if (date == "") {
        $("#datemsg").html("Date is required");
        errors++;
    } else {
        $("#datemsg").html("");
    }

    if (errors == 0) {
        var blogList = JSON.parse(localStorage.getItem("blogList"));
        if (blogList == null) {
            blogList = [];
        }
        var blog = {
            id: Math.floor(Math.random() * 1000000000),
            title: title,
            description: description,
            author: author,
            image: image,
            date: date
        }
        blogList.push(blog);
        localStorage.setItem("blogList", JSON.stringify(blogList));
        $("#addBlogForm")[0].reset();
        $("#addBlog").modal("hide");
        $("#blogCreated").modal("show");
        showBlog();
    }
});

// Search Blog
$("#table_search").keyup(function () {
    var search = $("#table_search").val();
    var blogList = JSON.parse(localStorage.getItem("blogList"));
    var html = "";
    for (var i = 0; i < blogList.length; i++) {
        if (blogList[i].title.toLowerCase().includes(search.toLowerCase()) || blogList[i].author.toLowerCase().includes(search.toLowerCase()) || blogList[i].date.toLowerCase().includes(search.toLowerCase()) || blogList[i].description.toLowerCase().includes(search.toLowerCase())) {
            html += "<tr>";
            html += "<td>" + blogList[i].title.substring(0, 25) + "...</td>";
            html += "<td>" + blogList[i].description.substring(0, 25) + "...</td>";
            html += "<td>" + blogList[i].author + "</td>";
            html += "<td><a href='" + blogList[i].image + "' target='_blank'><img src='" + blogList[i].image + "' width='30' height='30'></a></td>";
            html += "<td>" + blogList[i].date + "</td>";
            html += "<td><i class='fa fa-edit' onclick='editBlog(" + blogList[i].id + ")'></i>&nbsp; <i class='fa fa-trash' onclick='deleteBlog(" + blogList[i].id + ")'></i>&nbsp;<i class='fa fa-eye' onclick='viewBlog(" + blogList[i].id + ")'></i>&nbsp;&nbsp;</td>";
            html += "</tr>";
        }
    }
    $("#blogList").html(html);
});

// View single blog
function viewBlog(id) {
    var blogList = JSON.parse(localStorage.getItem("blogList"));
    for (var i = 0; i < blogList.length; i++) {
        if (blogList[i].id == id) {
            $("#viewTitle").html(blogList[i].title);
            $("#viewDescription").html(blogList[i].description);
            $("#viewAuthor").html(blogList[i].author);
            $("#viewImage").html("<img src='" + blogList[i].image + "' style='width:180px;'>");
            $("#viewDate").html(blogList[i].date);
        }
    }
    $("#viewBlog").modal("show");
}


// View existing blog data before Update
function editBlog(id) {
    var blogList = JSON.parse(localStorage.getItem("blogList"));
    for (var i = 0; i < blogList.length; i++) {
        if (blogList[i].id == id) {
            $("#editTitle").val(blogList[i].title);
            $("#editDescription").val(blogList[i].description);
            $("#editAuthor").val(blogList[i].author);
            $("#editImage").val(blogList[i].image);
            $("#editDate").val(blogList[i].date);
            $("#editId").val(blogList[i].id);
        }
    }
    $("#editBlog").modal("show");
}

// Update Blog
$("#updateBlog").click(function (e) {
    e.preventDefault();
    var title = $("#editTitle").val();
    var description = $("#editDescription").val();
    var author = $("#editAuthor").val();
    var image = $("#editImage").val();
    var date = $("#editDate").val();
    var id = $("#editId").val();
    var blogList = JSON.parse(localStorage.getItem("blogList"));
    for (var i = 0; i < blogList.length; i++) {
        if (blogList[i].id == id) {
            blogList[i].title = title;
            blogList[i].description = description;
            blogList[i].author = author;
            blogList[i].image = image;
            blogList[i].date = date;
        }
    }
    localStorage.setItem("blogList", JSON.stringify(blogList));
    $("#editBlog").modal("hide");
    $("#blogUpdated").modal("show");
    showBlog();
});

// Ask user before deleting blog
$("#confirmDelete").click(function () {
    var id = $("#deleteId").val();
    var blogList = JSON.parse(localStorage.getItem("blogList"));
    for (var i = 0; i < blogList.length; i++) {
        if (blogList[i].id == id) {
            blogList.splice(i, 1);
        }
    }
    localStorage.setItem("blogList", JSON.stringify(blogList));
    $("#deleteBlog").modal("hide");
    showBlog();
});

// Delete Blog
function deleteBlog(id) {
    $("#deleteBlog").modal("show");
    $("#deleteId").val(id);
}


// Display Blogs
showBlog();