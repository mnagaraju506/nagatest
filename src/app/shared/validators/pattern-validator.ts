import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PatternValidator {
  public static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  public static validEmail(control: AbstractControl): ValidationErrors | null {
    const pattern = new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$');
    if (control.value && !control.value.match(pattern)) {
      return { invalidEmail: true };
    }
    return null;
  }

  public static allowOnlyNumbers(control: AbstractControl): ValidationErrors | null {
    const pattern = /^[0-9]+$/;
    if (control.value.match(pattern)) {
      return { isValid: false };
    }
    return { isValid: true };
  }

  public static passwordStrength(control: AbstractControl): ValidationErrors | null {
    const pattern = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$');
    if (!control.value.match(pattern)) {
      return { invalidPassword: true };
    }
    return null;
  }
}
