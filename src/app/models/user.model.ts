export class User {
    public firstname: string;
    public lastname: string;
    public id: number;
    public email: string;
    public phone_number: string;
    public where_lives: string;
    public join_date: string;
    public avatar_src: string;
    public trips_booked: number;
    public reviews_given: number;
    public on_trip: boolean;

    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.id = 0;
        this.email = "";
        this.phone_number = "";
        this.where_lives = "";
        this.join_date = "";
        this.avatar_src = "";
        this.trips_booked = 0;
        this.reviews_given = 0;
        this.on_trip = true;
    }
}