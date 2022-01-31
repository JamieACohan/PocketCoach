export interface Message{
    messageContent: string;
    clientID: string;
    clientDocID: string;
    trainerID: string;
    trainerDocID: string;
    sender: boolean;
    reciever: boolean;
}