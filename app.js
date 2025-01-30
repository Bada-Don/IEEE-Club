// app.js
function renderEvents() {
    const container = document.getElementById("event-container");
    container.innerHTML = ''; // Clear any previous content

    events.forEach(event => {
        var status = event.status;
        const card = document.createElement('div');
        card.classList.add('event-card', event.status);
        if(status === 'active'){

            card.innerHTML = `
            <div class="card-content">
            <h1>${event.name}</h1>
            <div class="date_venue">
            <div class="date">
                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1200px-Google_Calendar_icon_%282020%29.svg.png" alt-"">  <h3>${event.date}</h3>
                </div>
                <div class="venue">
                <img class="logo" src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202002/Maps_Pin_FullColor-x1000.png?p5mE6zsNfbzHgIfhAD8xdamQCvveDfkN?size=750:*" alt=""><h3>${event.venue}</h3>
                </div>
            </div>
            <div class="description">${event.description}</div>
            <button class="register-btn">Register Now</button>
            </div>
            <img src="${event.img}" alt="${event.name}">
            `;
            card.classList.add('active');
        }
        else{
            card.innerHTML = `
            <img class="thumbnail" src="${event.img}" alt="${event.name}">
            <div class="card-content">
                <h1>${event.name}</h1>
                <div class="date_venue">
                <div class="date">
                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1200px-Google_Calendar_icon_%282020%29.svg.png" alt-"">  <h3>${event.date}</h3>
                </div>
                <div class="venue">
                <img class="logo" src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202002/Maps_Pin_FullColor-x1000.png?p5mE6zsNfbzHgIfhAD8xdamQCvveDfkN?size=750:*" alt=""><h3>${event.venue}</h3>
                </div>
                </div>
                <div class="description">${event.description}</div>
                <button class="">Know More</button>
            </div>
            `;
            card.classList.add('inactive');
            
        }

        container.appendChild(card);
    });
}

// Call the function to render events when the page loads
window.onload = renderEvents;
