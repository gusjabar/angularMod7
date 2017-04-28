import { FormGroup } from "@angular/forms";
export class PasswordConfirmValidations {
    static passwordNotMatch(control: FormGroup) {
        var newPassword = control.get("newPassword").value;
        var repeatPassword = control.get("repeatPassword").value;
        console.log("new", newPassword);
        if (newPassword == '' || repeatPassword == '')
            return null;
        if (newPassword !== repeatPassword) {
            return { NotMatch: true };
        }
        return null;
    }
}