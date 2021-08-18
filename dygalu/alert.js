const { value: accept } = await Swal.fire({
  title: 'Terminos y condiciones',
  input: 'checkbox',
  inputValue: 1,
  inputPlaceholder:
    'Estoy de acuerdo con los términos y condiciones',
  confirmButtonText:
    'Continue <i class="fa fa-arrow-right"></i>',
  inputValidator: (result) => {
    return !result && 'Debes estar de acuerdo con DYGALU'
  }
})

if (accept) {
  Swal.fire('Estas de Acuerdo con DYGALU :)')
}