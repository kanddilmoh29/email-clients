import { Validators, FormGroup } from '@angular/forms';

export class MatchPassword implements Validators {
  validate(formGroup: FormGroup) {
    const { password, passwordConfirmatio } = formGroup.value;

    if (password === passwordConfirmatio) {
      return null;
    } else {
      return { passwordDontMatch: true };
    }
  }
}
