let blogList = JSON.parse(localStorage.getItem("blogList"));
var html = "";
for (let i = 0; i < blogList.length; i++) {
   html += `
   <div class="col-lg-4" style="padding-top:15px;">
      <div class="blog-box-item">
         <div class="blog-img">
            <a href="#">
               <figure class="mb-0">
                  <img src="${blogList[i].image}" alt="blog-img" class="img-fluid">
               </figure>
            </a>
         </div>
         <div class="blog-content">
            <div class="blog-auteher-title">
               <span>By ${blogList[i].author}</span>
               <span class="float-lg-right">${blogList[i].date}</span>
            </div>
            <a href="#">
               <h4>${blogList[i].title}</h4>
            </a>
            <p>
               ${blogList[i].description}
            </p>
            <a href="#">Read More</a>
         </div>
      </div>
   </div>
   `;
}

$(".BlogList").html(html);