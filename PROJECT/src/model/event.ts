export class Event {
    static nextId = 1;

    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    category: string;
    capacity: number;

    constructor(
        title: string,
        description: string,
        date: string,
        location: string,
        category: string,
        capacity: number
    ) {
        this.id = Event.nextId++;
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.category = category;
        this.capacity = capacity;
    }
}