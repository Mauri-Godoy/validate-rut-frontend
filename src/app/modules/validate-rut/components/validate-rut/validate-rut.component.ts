import { Component } from '@angular/core';
import { ValidateRutService } from '../../../../services/validate-rut.service';
import { ValidateRut } from '../../../../models/validate-rut.model';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validate-rut',
  templateUrl: './validate-rut.component.html'
})
export class ValidateRutComponent {

  constructor(private validateRutService: ValidateRutService,
    private toastr: ToastrService,
    private fb: FormBuilder) {
    this.initForm()
  }

  rut: string = ""
  validatorDigit: string = ""
  form!: FormGroup;

  initForm() {
    this.form = this.fb.group({
      rut: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern(/^\d+$/)]],
      validatorDigit: ["", [Validators.required, Validators.maxLength(1), Validators.pattern(/^[\dKk]$/)]]
    })
  }

  validate() {
    if (this.form.invalid) {
      this.form.markAsDirty()
    }

    const validateRut: ValidateRut = this.form.value

    this.validateRutService.validate(validateRut)
      .subscribe({
        next: (data) => {
          this.toast(data.result ? "Documento válido" : "Documento inválido", !data.result)
        },
        error: (error) =>
          this.toast(error.error.message[0] || "Ocurrio un error", true)
      })
  }

  toast(message: string, isError: boolean = false) {
    if (!isError)
      this.toastr.success(message, "", { positionClass: 'toast-bottom-center' });
    else this.toastr.error(message, "", { positionClass: 'toast-bottom-center' })
  }

  get rutField() {
    return this.form.get("rut")
  }

  get validatorDigitField() {
    return this.form.get("validatorDigit")
  }

  getValidationStyle(path: string) {
    const control: AbstractControl | null = this.form.get(path);
    const isValid: boolean = control?.valid || !control?.dirty;
    return isValid ? '' : 'shadow shadow-red-400'
  }
}
