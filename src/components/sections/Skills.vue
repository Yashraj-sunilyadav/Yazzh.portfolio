<template>
  <section
    id="skills-section"
    class="padding-x py-[1%] text-flax-smoke-200 relative z-10 overflow-y-clip bg-[#0B0B0A] shadow-2xl will-change-auto sm:mt-0"
  >
    <div class="md:column-gap grid grid-cols-12">
      <div class="hide-on-mobile overflow-hidden md:col-span-4">
        <svg
          id="down-arrow-skills"
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
        id="my-skills"
        v-html="mySkills"
        class="heading-1-alt lg:heading-1 section-heading col-span-full leading-none font-extrabold uppercase md:col-span-8 md:col-start-6 max-sm:text-3xl"
      ></h3>
    </div>

    <div class="py-[1%] mt-8 flex w-full justify-center">
      <div class="w-full mt-5 mx-auto">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-x-8">

          <div class="flex flex-col col-span-full">
            <p class="text-xs md:heading-5 font-bold uppercase mb-4 md:mb-8 text-flax-smoke-500 font-mono tracking-widest">
              ( Certificates )
            </p>
            <div class="flex flex-col gap-4 md:gap-6">
              <a
                v-for="(cert, i) in certificates"
                :key="i"
                :href="cert.link"
                target="_blank"
                rel="noopener noreferrer"
                class="skill-card flex items-start gap-4 border-b border-flax-smoke-800 pb-5 hover:bg-flax-smoke-900/10 transition-colors duration-300 cursor-pointer"
              >
                <span class="text-flax-smoke-400 heading-6 font-mono mt-1 shrink-0">{{ String(i + 1).padStart(2, '0') }}</span>
                <div class="flex flex-col gap-1 text-left">
                  <p class="text-base md:heading-5 font-fancy font-semibold text-flax-smoke-100 leading-snug">{{ cert.name }}</p>
                  <p class="text-[10px] md:heading-6 text-flax-smoke-400 uppercase tracking-[0.2em]">{{ cert.issuer }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Achievements -->
          <div class="flex flex-col col-span-full mt-8 md:mt-4">
            <p class="text-xs md:heading-5 font-bold uppercase mb-4 md:mb-8 text-flax-smoke-500 font-mono tracking-widest">
              ( Achievements )
            </p>
            <div class="flex flex-col gap-4 md:gap-6">
              <div
                v-for="(award, i) in achievements"
                :key="i"
                class="skill-card flex items-start gap-4 border-b border-flax-smoke-800 pb-5"
              >
                <span class="text-flax-smoke-400 heading-6 font-mono mt-1 shrink-0">{{ String(i + 1).padStart(2, '0') }}</span>
                <div class="flex flex-col gap-1 text-left">
                  <p class="text-base md:heading-5 font-fancy font-semibold text-flax-smoke-100 leading-snug">{{ award.title }}</p>
                  <p class="text-sm md:heading-6 text-flax-smoke-400 leading-relaxed">{{ award.description }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText, animateAboutMeSectionLeave, xToZero } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import gsap from 'gsap';

  const mySkills = ref('Certifications & Awards /');

  const certificates = [
    {
      name: 'GitHub Foundations',
      issuer: 'GitHub',
      link: 'https://www.credly.com/badges/717d4d56-f536-4797-875d-cea220e03a0d/linked_in_profile',
    },
    {
      name: 'Oracle Cloud Infrastructure 2024 Certified — Associate',
      issuer: 'Oracle',
      link: 'https://www.linkedin.com/in/anubhavxdev/overlay/Certifications/1177151946/treasury/?profileId=ACoAAEUMC58Bh2xTtoot3yHg5nGoTvlh6LUr0BE',
    },
    {
      name: 'Red Hat System Administration 1 (RH 124)',
      issuer: 'Red Hat',
      link: 'https://www.credly.com/badges/4edf246a-d47a-4ad3-a8bd-ade0a3a81f8a/linked_in_profile',
    },
  ];

  const achievements = [
    {
      title: 'AI/ML Track Winner — InnovateX Hackathon',
      description: 'Won the AI/ML track at InnovateX organized by IIIT Kalyani, competing against top student developers nationwide as part of team LogicXDev.',
    },
    {
      title: 'Executive Lead — AWS Cloud Community, LPU',
      description: 'Delivered 10+ technical sessions on AWS, cloud fundamentals, and modern web development to a community of 500+ students.',
    },
    {
      title: 'Code Canvas Portfolio Competition — Winner ',
      description: 'Recognized among the most exceptional portfolios in Code Canvas, selected for outstanding design, clarity, and overall presentation.',
    },
  ];

  onBeforeMount(() => {
    mySkills.value = textSplitterIntoChar('Certifications\u00A0& Awards\u00A0/', true, true);
  });

  onMounted(() => {
    animateSplitText(
      '#my-skills .letters',
      '#my-skills',
      1,
      0.01,
      0,
      () => {
        xToZero('#down-arrow-skills');
      },
    );

    gsap.fromTo(
      '.skill-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#skills-section',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    animateAboutMeSectionLeave('#skills-section');
  });
</script>
