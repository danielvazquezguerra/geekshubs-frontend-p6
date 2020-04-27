export interface Order {
    id?: string;
    dateRent: Date;
    dateArrival: Date;
    daysRent: number;
    price: number;
    status: string;
    UserId: number;
    MovieId: number;
}
