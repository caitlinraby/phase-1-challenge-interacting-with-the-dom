const fetchVar = document.querySelector("#fetch");
    fetchVar.addEventListener('click', () => {
        fetch('https://randomuser.me/api/')
        .then(function(response) {
            return response.json();
        }) .then(function(json) {
            const firstName = json.results[0].name.first;
            const lastName = json.results[0].name.last;
            const fullName = `${firstName} ${lastName}`;
            const email = json.results[0].email;
            const pic = json.results[0].picture.thumbnail;

            var tag = document.createElement("p");
            const fullNameAndEmail = document.createTextNode(`User: ${fullName} `+` Email: ${email}`);
            tag.appendChild(fullNameAndEmail);
            var element = document.getElementById("person-container");
            element.appendChild(tag);

            var img = document.createElement('img');
            img.src = json.results[0].picture.thumbnail;
            var element = document.getElementById("person-container");
            element.appendChild(img);
                    
        })
    })




