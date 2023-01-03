// Fx : Display Messages
function showMessageList() {
    let messageList = JSON.parse(localStorage.getItem("messagesList"));
    let html = "";
    if (messageList) {
        messageList.forEach((message, index) => {
            html += `<tr>
            <td>${index + 1}</td>
            <td>${message.name}</td>
            <td>${message.email}</td>
            <td>${message.phone}</td>
            <td>${message.subject}</td>
            <td>${message.comments}</td>
            <td>
                <a href="#" class="btn btn-danger btn-sm" onclick="deleteMessage(${index.id})">
                    <i class="fas fa-trash"></i>
                </a>
                <a href="mailto:${message.email}" class="btn btn-primary btn-sm">
                    <i class="fas fa-reply"></i>
                </a>
            </td>
        </tr>`;
        });
    }
    $("#MessageList").html(html);
}

// Fx : Search Message
$("#table_search").keyup(function () {
    let search = $(this).val();
    let messageList = JSON.parse(localStorage.getItem("messagesList"));
    let html = "";
    if (messageList) {
        messageList.forEach((message, index) => {
            if (message.name.toLowerCase().includes(search.toLowerCase()) || message.email.toLowerCase().includes(search.toLowerCase()) || message.phone.toLowerCase().includes(search.toLowerCase()) || message.subject.toLowerCase().includes(search.toLowerCase()) || message.comments.toLowerCase().includes(search.toLowerCase())) {
                html += `<tr>
                <td>${index + 1}</td>
                <td>${message.name}</td>
                <td>${message.email}</td>
                <td>${message.phone}</td>
                <td>${message.subject}</td>
                <td>${message.comments}</td>
                <td>
                    <a href="#" class="btn btn-danger btn-sm" onclick="deleteMessage(${index})">
                        <i class="fas fa-trash"></i>
                    </a>
                    <a href="mailto:${message.email}" class="btn btn-primary btn-sm">
                        <i class="fas fa-reply"></i>
                    </a>
                </td>
            </tr>`;
            }
        });
    }
    $("#MessageList").html(html);
});

// Fx: Delete Message
function deleteMessage(id) {
    $("#deleteModal").modal("show");
    $("#deleteMessage").click(function () {
        let messageList = JSON.parse(localStorage.getItem("messagesList"));
        messageList.splice(id, 1);
        localStorage.setItem("messagesList", JSON.stringify(messageList));
        showMessageList();
        $("#deleteModal").modal("hide");
    });
    // Cancel delete
    $("#cancelDelete").click(function () {
        window.location.reload();
    });

}
// Display Messages
showMessageList()
