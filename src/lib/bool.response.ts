import { ApiResponseProperty } from "@nestjs/swagger";

export default class BoolResponse {
    @ApiResponseProperty()
    success: boolean;
    constructor(_success: boolean){
        this.success = _success;
    }
}