import { ApiProperty } from "@nestjs/swagger";

export default class AuthUserClass {
    userId: number;
    @ApiProperty()
    username: String;
    @ApiProperty()
    password: String;
    constructor (_userId: number, _username: String, _password: String) {
        this.userId = _userId;
        this.username = _username;
        this.password = _password;
    }
}