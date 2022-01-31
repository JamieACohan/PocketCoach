export interface Roles{
    user?: boolean;
    trainer?: boolean;
    admin?: boolean;
}

export interface User{
    displayName: string;
    firstName: string;
    surname: string;
    age: number;
    email: string;
    password: string;
    role: number;
    sex: string;
    country: string;
    city: string;
    hasPaid: boolean;
    trainerId: string;
    image: any;
    expiryDate: string;
    userDoc: string;
    clientID: string;

    //Trainer
    reviews: number;
    qualification: string;
    isAvailable: boolean
    price: number;
    clientCount: number;
    maxClients: number;
    specialties: string;
    experience: number;
    certification: string;
    spacesLeft: number;
    duration: number;
    watchersCount: number;
    watchers: any;
    
    // clientList

}