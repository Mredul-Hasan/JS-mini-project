const spacing =  document.querySelector('#spacing');
const blur =  document.querySelector('#blur');
const base =  document.querySelector('#base');

spacing.addEventListener('change', handleChange);
blur.addEventListener('change', handleChange);
base.addEventListener('change', handleChange);

function handleChange(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}` , this.value +suffix)
}