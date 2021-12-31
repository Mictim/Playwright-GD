export class User {
    private username: string;
    private email: string;
    private password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    };

    private static randomiseString(name: string): string {
        return name + Math.round(Math.random()*10000).toString();
    };
    
    public static useRandomUser(): User {
        return new User(this.randomiseString("username"), this.randomiseString("email").concat("@1.com"), this.randomiseString("password"));
    };

    public getUsername(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }

    public getEmail(): string {
        return this.email;
    }
}