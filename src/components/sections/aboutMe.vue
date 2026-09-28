<template>
  <section
    id="about-me-section"
    class="common-padding text-flax-smoke-200 relative z-10 overflow-y-clip rounded-b-3xl bg-[#0B0B0A] shadow-2xl will-change-auto sm:mt-0"
  >
    <div class="gap-y-6 md:column-gap grid grid-cols-12">
      <div class="hide-on-mobile overflow-hidden md:col-span-4">
        <svg
          id="down-arrow-2"
          stroke="currentColor"
          fill="none"
          stroke-width="1.25"
          viewBox="6 6 12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hide-on-mobile m-0 size-20 -translate-x-full p-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      </div>

      <h3
        id="little-bit-about-me"
        v-html="aboutMe"
        class="heading-1-alt lg:heading-1 section-heading col-span-full leading-none font-extrabold uppercase md:col-span-8 md:col-start-6"
      ></h3>
    </div>

    <div class="padding-y md:column-gap mt-6 grid grid-cols-12 gap-y-10 md:gap-y-0">
      <div
        class="pointer-events-none col-span-full content-end rounded-lg select-none md:col-span-4"
      >
        <img
          :src="anubhavhoodie"
          class="aspect-[1/1.5] rounded-lg object-cover object-top contrast-110"
          alt="Headshot of Anubhav facing a camera"
        />
      </div>
      <div class="col-span-12 mt-10 md:col-span-7 md:col-start-6">
        <p
          class="heading-4 relative w-full max-w-[40ch] leading-snug font-medium text-balance"
        >
          Full-Stack Web & App Developer | 2x Hackathon Winner | Executive Lead at AWS Cloud Community.
        </p>

        <div
          class="text-flax-smoke-300 mt-[5%] flex justify-start gap-10 sm:gap-20"
        >
          <p class="heading-6 text-flax-smoke-300/85 text-center text-nowrap">
            ( ABOUT ME )
          </p>
          <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
            Hi, I'm Anubhav Jaiswal — a Full-Stack Web and App Developer with a strong interest in DevOps, currently pursuing B.Tech in Information Technology at Lovely Professional University (2023–2027). <br /><br />
            I'm a 2x Hackathon Winner, including the AI/ML Track at InnovateX organized by IIIT Kalyani. As Executive Lead at the AWS Cloud Community, I have delivered 10+ technical sessions on AWS, cloud fundamentals, and modern web development. <br /><br />
            I'm currently interning as a React Developer at LPU's Division of Infotech, contributing to a University Management System using React and Next.js. I'm also the Founder of FounDev Studio, where I build full-stack products for startups, and a Core Team member at EncryptEdge. <br /><br />
            My stack spans React, Next.js, Node.js, Express, MongoDB, MySQL, Flutter, Docker, AWS, Cloudflare, and Vercel.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    animateSplitText,
    xToZero,
    animateAboutMeSectionLeave,
  } from '@/animations';
  import { anubhavhoodie } from '@/assets/images';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const aboutMe = ref('Builder, Developer, AI\u00A0Geek\u00A0/');

  // const initialPath = ref(`M0 0H${width.value}  V${height.value} H0 Z`);
  // const targetPath = ref(
  //   `M0 0H${width.value}L${width.value * 0.9} ${height.value}H${width.value * 0.1}L0 0Z`,
  // );

  onBeforeMount(() => {
    aboutMe.value = textSplitterIntoChar(
      'Builder, Developer, AI\u00A0Geek\u00A0/',
      true,
      true,
    );
  });

  onMounted(() => {
    animateSplitText(
      '#little-bit-about-me .letters',
      '#little-bit-about-me',
      1,
      0.01,
      0,
      () => {
        xToZero('#down-arrow-2');
      },
    );

    animateAboutMeSectionLeave('#about-me-section');
  });
</script>
