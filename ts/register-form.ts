export class RegisterForm {
    isValid: boolean = false
    constructor(
        public email: string,
        public password: string,
        public confirmPassword: string
    ) {}

    onSubmit() {
        this.email = this.email.valueOf()
        this.password = this.password.valueOf()
        this.confirmPassword = this.confirmPassword.valueOf()

        if (this.password === this.confirmPassword) {
            this.isValid = true
        }
    }
}
