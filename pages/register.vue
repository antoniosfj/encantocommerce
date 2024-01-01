<script setup>
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
      w-full lg:max-w-screen-sm p-10 rounded-lg bg-white dark:bg-gray-800 shadow'>
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
            <div class='flex gap-3 mb-5'>
              <div class='w-full md:w-1/2 mb-6 md:mb-0'>
                <label
                  for='name'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Nome
                </label>
                <input
                  id='name'
                  placeholder='Nome'
                  type='text'
                  required
                  class='input-default'>
              </div>
              <div class='w-full md:w-1/2 md:mb-0'>
                <label
                  for='surname'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Sobrenome
                </label>
                <input
                  id='surname'
                  placeholder='Sobrenome'
                  type='text'
                  required
                  class='input-default'>
              </div>
            </div>
            <div class='mb-5'>
              <p
                class='block mb-2 text-sm font-medium default-text-color'>
                Sexo
              </p>
              <div class='flex gap-3'>
                <div class='bg-gray-50 dark:bg-gray-700 text-sm w-full flex justify-between items-center p-0 border border-gray-300 dark:border-gray-600 rounded relative'>
                  <label
                    class='px-3 py-2 w-full'
                    for='genre_male'>Masculino</label>
                  <input
                    id='genre_male'
                    name='genre'
                    type='radio'
                    class='absolute right-2'>
                </div>
                <div class='bg-gray-50 dark:bg-gray-700 text-sm w-full flex justify-between items-center p-0 border border-gray-300 dark:border-gray-600 rounded relative'>
                  <label
                    class='px-3 py-2 w-full'
                    for='genre_female'>Feminino</label>
                  <input
                    id='genre_female'
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
                    name='genre'
                    type='radio'
                    class='absolute right-2'>
                </div>
              </div>
            </div>
            <p class='block mb-2 text-sm font-medium default-text-color'>
              Data de nascimento
            </p>
            <div class='flex gap-3 mb-5'>
              <div class='w-full md:w-1/3 mb-6 md:mb-0'>
                <select
                  id='birth_day'
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
              <div class='w-full md:w-1/3 md:mb-0'>
                <select
                  id='birth_month'
                  class='input-default'
                  name='birth_month'
                  required>
                  <option
                    value=''
                    disabled>
                    Dia
                  </option>
                  <option
                    v-for='option in monthsOptions'
                    :key='option.value'
                    :value='option.value'>
                    {{ option.text }}
                  </option>
                </select>
              </div>
              <div class='w-full md:w-1/3 md:mb-0'>
                <select
                  id='birth_year'
                  class='input-default'
                  name='birth_year'
                  required>
                  <option
                    value=''
                    disabled>
                    Dia
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
                placeholder='12.345-000'
                type='text'
                name='cep'
                required
                class='input-default'>
            </div>
            <div class='flex gap-3 mb-5'>
              <div class='w-full md:w-1/2 mb-6 md:mb-0'>
                <label
                  for='state'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Estado
                </label>
                <input
                  id='state'
                  name='state'
                  type='text'
                  required
                  class='input-default'>
              </div>
              <div class='w-full md:w-1/2 md:mb-0'>
                <label
                  for='city'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Cidade
                </label>
                <input
                  id='city'
                  name='city'
                  type='text'
                  required
                  class='input-default'>
              </div>
            </div>
            <div class='flex gap-3 mb-5'>
              <div class='w-full md:w-3/4 mb-6 md:mb-0'>
                <label
                  for='street'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Rua
                </label>
                <input
                  id='street'
                  name='street'
                  type='text'
                  required
                  class='input-default'>
              </div>
              <div class='w-full md:w-1/4 md:mb-0'>
                <label
                  for='number'
                  class='block mb-2 text-sm font-medium default-text-color'>
                  Número
                </label>
                <input
                  id='number'
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