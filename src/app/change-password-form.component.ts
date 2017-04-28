import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

import { PasswordConfirmValidations } from "./password-confirm.validations";

@Component({
    selector: "change-password-form",
    templateUrl: "./change-password-form.template.html"
})
export class ChangePasswordFormComponent {
    form: FormGroup;
    constructor(_fb: FormBuilder) {
        this.form = _fb.group({
            oldPassword: ["", Validators.required],
            newPassword: ["", Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])
            ],
            repeatPassword: ["", Validators.required]
        }, { validator: PasswordConfirmValidations.passwordNotMatch });
    }
    changePassword(): void {
        console.log(JSON.stringify(this.form.value));
    }

}
