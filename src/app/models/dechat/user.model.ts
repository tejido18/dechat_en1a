
export class User {

    url?: string;
    userName?: string;
    profileImage?: string;
    status?: string;
    
    constructor(userName:string = "Dummy") {
        this.userName = userName;
    }
}