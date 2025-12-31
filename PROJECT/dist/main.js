Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = require("./models/Event");
const User_1 = require("./models/User");
const Registration_1 = require("./models/Registration");

const events = [];
const users = [];
const registrations = [];
let selectedEvent = null;

const eventForm = document.getElementById("eventForm");
const eventsContainer = document.getElementById("eventsContainer");
const eventDetailsSection = document.getElementById("event-details");
const eventInfo = document.getElementById("eventInfo");
const registrationForm = document.getElementById("registrationForm");

eventForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const category = document.getElementById("category").value;
    const capacity = Number(document.getElementById("capacity").value);

    const event = new Event_1.Event(title, description, date, location, category, capacity);
    events.push(event);
    eventForm.reset();
    displayEvents(events);
});

function displayEvents(eventList) {
    eventsContainer.innerHTML = "";
    eventList.forEach(function (event) {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <span class="category">${event.category}</span>
            <button>View Details</button>
        `;
        card.querySelector("button").addEventListener("click", function () {
            openEventDetails(event.id);
        });
        eventsContainer.appendChild(card);
    });
}

function openEventDetails(eventId) {
    selectedEvent = events.find(e => e.id === eventId);
    eventDetailsSection.style.display = "block";
    eventInfo.innerHTML = `
        <p><strong>Title:</strong> ${selectedEvent.title}</p>
        <p><strong>Description:</strong> ${selectedEvent.description}</p>
    `;
}

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!selectedEvent)
        return;

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;

    const eventDate = new Date(selectedEvent.date);
    if (eventDate < new Date()) {
        alert("Registration closed.");
        return;
    }

    const eventRegistrations = registrations.filter(r => r.eventId === selectedEvent.id);
    if (eventRegistrations.length >= selectedEvent.capacity) {
        alert("Event full.");
        return;
    }

    const alreadyRegistered = registrations.some(
        r => r.eventId === selectedEvent.id && r.email === email
    );
    if (alreadyRegistered) {
        alert("Already registered.");
        return;
    }

    users.push(new User_1.User(fullName, email));
    registrations.push(new Registration_1.Registration(selectedEvent.id, email));
    registrationForm.reset();
    alert("Registration successful!");
});

document.getElementById("backButton").addEventListener("click", function () {
    eventDetailsSection.style.display = "none";
});