import { Event } from "./models/Event";
import { User } from "./models/User";
import { Registration } from "./models/Registration";

const events: Event[] = [];
const users: User[] = [];
const registrations: Registration[] = [];

let selectedEvent: Event | null = null;

const eventForm = document.getElementById("eventForm") as HTMLFormElement;
const eventsContainer = document.getElementById("eventsContainer") as HTMLElement;
const eventDetailsSection = document.getElementById("event-details") as HTMLElement;
const eventInfo = document.getElementById("eventInfo") as HTMLElement;
const registrationForm = document.getElementById("registrationForm") as HTMLFormElement;

eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = (document.getElementById("title") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLTextAreaElement).value;
    const date = (document.getElementById("date") as HTMLInputElement).value;
    const location = (document.getElementById("location") as HTMLInputElement).value;
    const category = (document.getElementById("category") as HTMLSelectElement).value;
    const capacity = Number((document.getElementById("capacity") as HTMLInputElement).value);

    const event = new Event(title, description, date, location, category, capacity);
    events.push(event);

    eventForm.reset();
    displayEvents(events);
});

function displayEvents(eventList: Event[]) {
    eventsContainer.innerHTML = "";

    eventList.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <span class="category">${event.category}</span>
            <button data-id="${event.id}">View Details</button>
        `;

        card.querySelector("button")!.addEventListener("click", () => {
            openEventDetails(event.id);
        });

        eventsContainer.appendChild(card);
    });
}

function openEventDetails(eventId: number) {
    selectedEvent = events.find(e => e.id === eventId)!;
    eventDetailsSection.style.display = "block";

    eventInfo.innerHTML = `
        <p><strong>Title:</strong> ${selectedEvent.title}</p>
        <p><strong>Description:</strong> ${selectedEvent.description}</p>
        <p><strong>Date:</strong> ${selectedEvent.date}</p>
        <p><strong>Location:</strong> ${selectedEvent.location}</p>
        <p><strong>Category:</strong> ${selectedEvent.category}</p>
        <p><strong>Capacity:</strong> ${selectedEvent.capacity}</p>
    `;
}

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!selectedEvent) return;

    const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;

    const eventDate = new Date(selectedEvent.date);
    if (eventDate < new Date()) {
        alert("Registration closed: event date has passed.");
        return;
    }

    const eventRegistrations = registrations.filter(r => r.eventId === selectedEvent!.id);
    if (eventRegistrations.length >= selectedEvent.capacity) {
        alert("This event is full.");
        return;
    }

    const alreadyRegistered = registrations.some(
        r => r.eventId === selectedEvent!.id && r.email === email
    );
    if (alreadyRegistered) {
        alert("You are already registered for this event.");
        return;
    }

    users.push(new User(fullName, email));
    registrations.push(new Registration(selectedEvent.id, email));

    registrationForm.reset();
    alert("Registration successful!");
});

document.getElementById("backButton")!.addEventListener("click", () => {
    eventDetailsSection.style.display = "none";
});