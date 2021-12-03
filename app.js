window.addEventListener("load", LoadCustomer);

function LoadCustomer() {
    var http = new XMLHttpRequest();
    http.open("GET", "https://jsonplaceholder.typicode.com/photos/");
    http.send();
    http.onreadystatechange =
        function() {
            if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.response);
                console.log(data);
                BindPhotos(data);
            }
        }
}

function BindPhotos(data) {
    var temp = ``;
    data.forEach(d => {
        temp +=
            `
            <div class="row col-md-4">
            <div class="card-4">
                 <div class="card" style="width: 18rem;">
                    <img src="${d.url}" class="card-img-top" alt="...">
                      <div class="card-body">
                           
                                 <p class="card-text">Some build on the card title and make up the bulk of the card's content.</p>
                                         <a href="#" class="btn btn-primary" onclick="RemoveItem(${d.id})">Remove</a>
                       </div>
                 </div>
            </div>
            </div>
     `
    })
    document.querySelector(".row").innerHTML = temp;
}

function RemoveItem(id) {
    fetch("https://jsonplaceholder.typicode.com/photos/" + id, { method: "DELETE" })
        .then(response => {
            console.log(response)
            if (response.ok) {
                response.json(result => {
                    console.log(result)
                })
            }
        }).catch(err => {
            console.log(err)
        })

}