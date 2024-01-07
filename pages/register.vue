<script setup>

import { useRegisterStore, GenreEnum } from '@/store/register';
import { storeToRefs } from 'pinia';
const registerFormStore = useRegisterStore();
const { registerForm } = storeToRefs(registerFormStore);

const registerFormSteps = ref([
  {
    title: 'Pessoal'
  },
  {
    title: 'Endereço'
  },
  {
    title: 'Conta'
  }
]);

const step = ref(0);

const { monthsOptions, computedDayOptions, computedYears } = useOptions();

</script>

<template>
  <div class='xl:-mt-[80px] flex items-center justify-center md:h-screen px-6 py-8'>
    <div
      class='border default-text-color default-border-color
      w-full lg:max-w-xl p-10 rounded-lg bg-white dark:bg-gray-800 shadow'>
      <h2 class='text-2xl font-bold text-left'>
        Crie sua conta
      </h2>
      <p class='mt-2 mb-12 text-left text-gray-500 dark:text-gray-400'>
        Preencha o formulário abaixo para concluir o seu cadastro
      </p>
      <form>
        <the-stepper
          v-model='step'
          content-class='my-6'
          :steps='registerFormSteps'>
          <template #step1>
            <div class='grid gap-x-3 gap-y-5 mb-5 md:grid-cols-2'>
              <div>
                <label
                  for='name'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Nome
                </label>
                <input
                  id='name'
                  v-model='registerForm.name'
                  type='text'
                  required
                  class='input-default'>
              </div>
              <div>
                <label
                  for='surname'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Sobrenome
                </label>
                <input
                  id='surname'
                  v-model='registerForm.surname'
                  type='text'
                  required
                  class='input-default'>
              </div>
            </div>
            <div class='mb-5'>
              <label
                for='cpf'
                class='block mb-2 text-sm font-medium default-text-color'>
                CPF
              </label>
              <input
                id='cpf'
                v-model='registerForm.cpf'
                v-maska
                placeholder='xxx.xxx.xxx-xx'
                data-maska='###.###.###-##'
                type='text'
                name='cpf'
                required
                class='input-default'
                @maska='(event) => {
                  emit("update:modelValue", event.target.dataset.maskRawValue);
                }'>
            </div>
            <div class='mb-5'>
              <p
                class='block mb-2 text-sm font-medium default-text-color'>
                Gênero
              </p>
              <div class='grid gap-3 mb-5 md:grid-cols-3'>
                <div class='bg-gray-50 dark:bg-gray-700 text-sm w-full flex justify-between items-center p-0 border border-gray-300 dark:border-gray-600 rounded relative'>
                  <label
                    class='px-3 py-2 w-full'
                    for='genre_male'>Masculino</label>
                  <input
                    id='genre_male'
                    v-model='registerForm.genre'
                    name='genre'
                    :value='GenreEnum.MALE'
                    type='radio'
                    class='absolute right-2'>
                </div>
                <div class='bg-gray-50 dark:bg-gray-700 text-sm w-full flex justify-between items-center p-0 border border-gray-300 dark:border-gray-600 rounded relative'>
                  <label
                    class='px-3 py-2 w-full'
                    for='genre_female'>Feminino</label>
                  <input
                    id='genre_female'
                    v-model='registerForm.genre'
                    :value='GenreEnum.FEMALE'
                    name='genre'
                    type='radio'
                    class='absolute right-2'>
                </div>
                <div class='bg-gray-50 dark:bg-gray-700 text-sm w-full flex justify-between items-center p-0 border border-gray-300 dark:border-gray-600 rounded relative'>
                  <label
                    class='px-3 py-2 w-full'
                    for='genre_other'>Outros</label>
                  <input
                    id='genre_other'
                    v-model='registerForm.genre'
                    name='genre'
                    :value='GenreEnum.OTHERS'
                    type='radio'
                    class='absolute right-2'>
                </div>
              </div>
            </div>
            <p class='block mb-2 text-sm font-medium default-text-color'>
              Data de nascimento
            </p>
            <div class='grid gap-3 mb-5 md:grid-cols-3'>
              <div>
                <select
                  id='birth_day'
                  v-model='registerForm.birth_day'
                  class='input-default'
                  name='birth_day'
                  required>
                  <option
                    value=''
                    disabled>
                    Dia
                  </option>
                  <option
                    v-for='option in computedDayOptions'
                    :key='option.value'
                    :value='option.value'>
                    {{ option.text }}
                  </option>
                </select>
              </div>
              <div>
                <select
                  id='birth_month'
                  v-model='registerForm.birth_month'
                  class='input-default'
                  name='birth_month'
                  required>
                  <option
                    value=''
                    disabled>
                    Mês
                  </option>
                  <option
                    v-for='option in monthsOptions'
                    :key='option.value'
                    :value='option.value'>
                    {{ option.text }}
                  </option>
                </select>
              </div>
              <div>
                <select
                  id='birth_year'
                  v-model='registerForm.birth_year'
                  class='input-default'
                  name='birth_year'
                  required>
                  <option
                    value=''
                    disabled>
                    Ano
                  </option>
                  <option
                    v-for='option in computedYears'
                    :key='option.value'
                    :value='option.value'>
                    {{ option.text }}
                  </option>
                </select>
              </div>
            </div>
            <div class='mb-5'>
              <label
                for='phone'
                class='block mb-2 text-sm font-medium default-text-color'>
                Celular
              </label>
              <input
                id='phone'
                v-model='registerForm.phone'
                v-maska
                data-maska='(##) # ####-####'
                placeholder='47 9 1234-5678'
                type='tel'
                name='phone'
                required
                class='input-default'>
            </div>
          </template>
          <template #step2>
            <div class='mb-5'>
              <label
                for='cep'
                class='block mb-2 text-sm font-medium default-text-color'>
                CEP
              </label>
              <input
                id='cep'
                v-model='registerForm.address.cep'
                v-maska
                placeholder='12.345-000'
                data-maska='##.###-###'
                type='text'
                name='cep'
                required
                class='input-default'>
            </div>
            <div class='grid gap-x-3 gap-y-5 mb-5 md:grid-cols-2'>
              <div>
                <label
                  for='state'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Estado
                </label>
                <input
                  id='state'
                  v-model='registerForm.address.state'
                  name='state'
                  type='text'
                  required
                  class='input-default'>
              </div>
              <div>
                <label
                  for='city'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Cidade
                </label>
                <input
                  id='city'
                  v-model='registerForm.address.city'
                  name='city'
                  type='text'
                  required
                  class='input-default'>
              </div>
            </div>
            <div class='grid gap-x-3 gap-y-5 mb-5 md:grid-cols-2'>
              <div>
                <label
                  for='street'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Rua
                </label>
                <input
                  id='street'
                  v-model='registerForm.address.street'
                  name='street'
                  type='text'
                  required
                  class='input-default'>
              </div>
              <div>
                <label
                  for='number'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Número
                </label>
                <input
                  id='number'
                  v-model='registerForm.address.number'
                  name='number'
                  type='number'
                  required
                  class='input-default'>
              </div>
            </div>
            <div>
              <label
                for='complement'
                required
                class='block mb-2 text-sm font-medium default-text-color'>
                Complemento
              </label>
              <input
                id='complement'
                v-model='registerForm.address.complement'
                placeholder='Ex: Próximo ao mercado Anacleto.'
                type='complement'
                class='input-default'>
            </div>
          </template>
          <template #step3>
            <div class='mb-5'>
              <label
                for='email'
                class='block mb-2 text-sm font-medium default-text-color'>
                Email
              </label>
              <input
                id='email'
                v-model='registerForm.email'
                placeholder='fulano@empresa.com.br'
                type='email'
                required
                class='input-default'>
            </div>
            <div>
              <label
                for='password'
                required
                class='block mb-2 text-sm font-medium default-text-color'>
                Senha
              </label>
              <input
                id='password'
                v-model='registerForm.password'
                placeholder='*******************'
                type='password'
                aria-describedby='password-tip'
                class='input-default'>
              <p
                id='password-tip'
                class='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                Nós recomendamos que você use senhas fortes (com carácteres especiais, letras maiúsculas, minúsculas, etc).
              </p>
            </div>
          </template>
        </the-stepper>
        <div class='flex justify-end flex-wrap md:flex-nowrap'>
          <span
            class='md:w-full order-3 md:order-1 font-medium text-gray-500 dark:text-gray-400 mr-auto self-center'>
            Já é cadastrado?
            <a
              class='text-blue-500 hover:text-blue-800'
              href='#'>
              Logue aqui
            </a>
          </span>
          <div class='flex w-full order-2 my-4 md:my-0'>
            <button
              class='w-full btn-secondary mr-2'
              @click.prevent='step--'>
              Voltar
            </button>
            <button
              class='w-full btn-primary font-bold'
              @click.prevent='step++'>
              Próximo
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>