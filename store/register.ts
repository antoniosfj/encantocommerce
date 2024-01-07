import { defineStore, skipHydrate } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

enum Sex {
  'Male' = 1,
  'Female' = 2,
  'Others' = 3,
}

interface IAddress {
  cep: string,
  state: string,
  city: string,
  street: string,
  number: number,
  complement: string,
}

interface IRegisterForm {
  // Step 1
  name: string,
  surname: string,
  cpf: string,
  sex: Sex | null,
  birth_day: number,
  birth_month: number,
  birth_year: number,
  phone: string,
  // Step 2
  address: IAddress,
  // Step 3
  email: string,
  password: string,
}

const emptyRegisterForm = (): IRegisterForm => ({
  name: '',
  surname: '',
  cpf: '',
  sex: null,
  birth_day: 1,
  birth_month: 1,
  birth_year: 2024,
  phone: '',
  address: {
    cep: '',
    state: '',
    city: '',
    street: '',
    number: 0,
    complement: ''
  },
  email: '',
  password: '',
});

const createRegisterForm = <T extends Partial<IRegisterForm>>(initialValues: T): IRegisterForm => {
  return Object.assign(emptyRegisterForm(), initialValues);
};


export const useRegisterStore = defineStore('registerForm', () => {
  const registerForm: Ref<IRegisterForm> = ref(useLocalStorage<IRegisterForm>('registerForm', createRegisterForm({})));

  return { registerForm: skipHydrate(registerForm) };
});