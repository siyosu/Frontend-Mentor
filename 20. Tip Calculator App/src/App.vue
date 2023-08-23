<template>
  <main
    class="font-space flex min-h-screen flex-col justify-between gap-9 bg-cyan-200 md:items-center md:justify-start md:gap-[5.1rem] md:p-6 md:pt-[9.6rem]">
    <h1 class="ml-2 flex flex-col gap-1 break-words pt-10 text-center text-2xl tracking-[0.6rem] text-cyan-600 md:p-0">
      <span>SPLI</span><span>TTER</span>
    </h1>
    <div class="container md:max-w-[920px]">
      <TipForm />
    </div>
  </main>
</template>

<script>
import TipForm from "./components/TipForm.vue";
export default {
  components: {
    TipForm,
  },
};
</script>
