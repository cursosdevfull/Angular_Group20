import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export class ValidateForm {
    static validateFilterEmails(...domains: string[]): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value || control.value === "") return null

            const value = control.value

            const companyDomains = domains
            const isCompanyEmail = companyDomains.some(domain => value.endsWith(domain))

            return isCompanyEmail ? null : { emailNotCompany: true }
        }
    }

    static validateConfirmPassword(control: AbstractControl): ValidationErrors | null {
        const password = control.get("password")
        const confirmPassword = control.get("confirmPassword")

        if (!password || !confirmPassword) return null

        return password.value === confirmPassword.value ? null : { passwordsNotMatch: true }
    }
}