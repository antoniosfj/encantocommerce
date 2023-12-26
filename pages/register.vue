<script setup>
const registerFormSteps = ref(['Pessoal', 'Endereço', 'Conta']);
const step = ref(0);
</script>

<template>
  <div class='lg:-mt-[80px] flex items-center justify-center md:h-screen px-6 py-8'>
    <div
      class='border default-text-color default-border-color
      w-full lg:max-w-screen-sm p-10 rounded-lg bg-white dark:bg-gray-800 shadow'>
      <h2 class='text-2xl font-bold text-left'>
        Crie sua conta
      </h2>
      <p class='mt-2 mb-12 text-left text-gray-500 dark:text-gray-400'>
        Preencha o formulário abaixo para concluir o seu cadastro
      </p>
      <the-stepper
        v-model='step'
        :steps='registerFormSteps' />
      <form class='mt-6'>
        <div class='flex flex-wrap -mx-3 mb-5'>
          <div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
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
          <div class='w-full md:w-1/2 px-3 md:mb-0'>
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
        <div class='mb-5'>
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
        <div class='flex justify-end flex-wrap md:flex-nowrap mb-6'>
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