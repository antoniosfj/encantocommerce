import { defineStore, skipHydrate } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export enum GenreEnum {
  MALE = 1,
  FEMALE = 2,
  OTHERS = 3,
}

export interface IAddress {
  cep: string,
  state: string,
  city: string,
  street: string,
  number: number,
  complement: string,
}

export interface IRegisterForm {
  // Step 1
  name: string,
  surname: string,
  cpf: string,
  genre: GenreEnum | null,
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

export const emptyRegisterForm = (): IRegisterForm => ({
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

export const createRegisterForm = <T extends Partial<IRegisterForm>>(initialValues: T): IRegisterForm => {
  return Object.assign(emptyRegisterForm(), initialValues);
};


export const useRegisterStore = defineStore('registerForm', () => {
  const registerForm: Ref<IRegisterForm> = ref(useLocalStorage<IRegisterForm>('registerForm', createRegisterForm({})));

  return { registerForm: skipHydrate(registerForm) };
});