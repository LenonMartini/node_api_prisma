class CustomErrorException extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
        this.name = 'CustomError';
    }
}

export default CustomErrorException;
