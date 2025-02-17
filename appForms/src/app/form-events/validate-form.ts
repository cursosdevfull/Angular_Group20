export class ValidateForm {
    email: string = "";
    password: string = "";

    isEmailValid(email: string) {
        return !!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);
    }

    isEmailEmpty(email: string) {
        return email.trim().length === 0;
    }

    isPasswordValid(password: string) {
        return !!password.match(/^(?=.*[A-Z])(?=.*\d).{5,}$/);
    }

    isPasswordEmpty(password: string) {
        return password.trim().length === 0;
    }

    isEmailError() {
        return !this.isEmailValid(this.email) && !this.isEmailEmpty(this.email);
    }

    isPasswordError() {
        return !this.isPasswordValid(this.password) && !this.isPasswordEmpty(this.password);
    }
}