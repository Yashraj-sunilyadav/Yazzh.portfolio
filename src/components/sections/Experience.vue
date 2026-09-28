<template>
  <!-- common-padding  -->
  <section
    id="experience-section"
    class="common-padding relative mx-auto min-h-svh -translate-y-0 overflow-y-clip py-0 will-change-transform"
  >
    <div
      class="border-flax-smoke-300 grid w-full grid-cols-12 border-b-[1px] pb-6 md:pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <h3
        class="heading-1 max-sm:text-4xl text-flax-smoke-950 col-span-full leading-none font-bold uppercase will-change-auto"
      >
        My Professional <br class="hidden md:block" />
        Journey /
      </h3>
      <div
        class="text-flax-smoke-800 col-span-full mt-6 md:mt-[5%] flex flex-col md:flex-row justify-end items-start md:items-baseline gap-4 md:gap-10 lg:col-span-12"
      >
        <p class="text-xs md:heading-6 text-nowrap uppercase font-mono tracking-widest bg-flax-smoke-200/50 px-2 py-1 rounded md:bg-transparent md:p-0">
          ( Experience )
        </p>
        <p class="text-sm md:heading-6 font-fancy w-full text-balance md:max-w-[40ch] leading-relaxed">
          A timeline of my professional growth, from leading cloud communities to building scalable full-stack products and contributing to large-scale university systems.
        </p>
      </div>
    </div>

    <ExperienceTree />
  </section>
</template>

<script setup lang="ts">
  // import gsap from 'gsap';
  // import { ScrollTrigger } from 'gsap/all';
  // import { onMounted } from 'vue';
  import { ExperienceTree } from '../design';

  // gsap.registerPlugin(ScrollTrigger);

  // const animatePeopleSectionLeave = (id: string) => {
  //   gsap.to(id, {
  //     scrollTrigger: {
  //       trigger: id,
  //       markers: true,
  //       start: 'top 80%',
  //       end: '100% end',
  //     },
  //     duration: 0.7,
  //     y: '0',
  //   });
  // };
  // onMounted(() => {
  //   animatePeopleSectionLeave('#testimonials-section');
  // });
</script>
