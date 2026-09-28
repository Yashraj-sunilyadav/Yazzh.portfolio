<template>
  <section class="padding-x mb-[-100svh] py-0">
    <div
      id="hero"
      class="sticky top-0 flex min-h-svh w-full items-end pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <div class="relative flex w-full flex-col items-center">
        <div class="w-full items-end overflow-visible">
          <div class="flex w-full items-start gap-10">
            <MyName />
            <Star id="star" class="hide-on-mobile translate-x-full" />
          </div>
        </div>

        <div class="lg:column-gap spacing-t grid w-full grid-cols-12">
          <div
            class="col-span-full flex flex-col items-start gap-14 md:col-span-4"
          >
            <div class="overflow-hidden">
              <svg
                id="down-arrow"
                stroke="currentColor"
                fill="none"
                stroke-width="1.25"
                viewBox="6 6 12 12"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="hide-on-mobile m-0 size-4 -translate-x-full p-0 md:size-6"
                color="#8C8C73"
                style="color: #8c8c73"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </div>

            <p class="sr-only">
              A Full-Stack &amp; App Developer. 2x Hackathon Winner. ReactJS, Flutter, Docker, AWS.
            </p>
            <p
              v-html="whoAmI"
              id="whoAmI"
              class="who-am-i text-sm md:heading-5 w-full max-w-[30ch] md:max-w-[37ch] overflow-clip leading-relaxed font-medium text-balance lg:text-start"
            ></p>

            <div class="relative origin-left overflow-hidden scale-100 sm:scale-150 mt-4 md:mt-0">
              <div id="contact-btn" class="flex -translate-y-full">
                <!-- <Button
                  :data-cal-namespace="dataCalNamespace"
                  :data-cal-link="dataCalLink"
                  :data-cal-config="dataCalConfig"
                  class="contact"
                  label="Get in touch"
                /> -->
                <Button label="Resume" url="https://drive.google.com/file/d/1Qkfb0V4aZaukwTmywLv02yW6jnr4Fb2m/view?usp=sharing" />
              </div>
            </div>
          </div>

          <div
            id="profile-container"
            class="relative col-span-12 md:col-span-4 mt-6 md:mt-0 h-[40vh] md:h-[50vh] max-w-full md:max-w-lg flex-col rounded-xl select-none flex"
          >
            <div class="overlay bg-flax-smoke-50 absolute inset-0 z-2"></div>
            <img
              id="profile-img"
              :src="anubhavformal"
              alt="Anubhav Jaiswal profile"
              class="size-full rounded-lg object-cover object-top contrast-110"
            />
          </div>

          <!-- content-end justify-self-end  -->
          <div
            class="relative col-span-12 md:col-span-4 size-full overflow-clip text-start md:text-end mt-8 md:mt-0"
          >
            <div
              id="available-for-work"
              class="flex flex-col items-start md:items-end justify-end h-full"
            >
              <p
                class="text-[10px] md:text-base block leading-snug font-medium -tracking-tight uppercase font-mono text-flax-smoke-500"
              >
                Available for freelance work
              </p>
              <h3
                class="text-4xl md:heading-1-alt font-fancy block leading-none font-bold -tracking-tight text-flax-smoke-900"
              >
                {{ AvailableForWorkDate }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { MyName, Star } from '../design';
  import { Button } from '@/components/common';
  import { anubhavformal } from '@/assets/images';
  import { getAvailableForWorkDate, textSplitterIntoChar } from '@/functions';
  // import { dataCalConfig, dataCalLink, dataCalNamespace } from '@/data';

  const whoAmI = ref(
    'A Full-Stack & App Developer. 2x Hackathon Winner. ReactJS · Flutter · Docker · AWS. Currently interning at LPU Division of Infotech.',
  );
  const AvailableForWorkDate = ref('');

  onBeforeMount(() => {
    whoAmI.value = textSplitterIntoChar(whoAmI.value);
    AvailableForWorkDate.value = getAvailableForWorkDate();
  });
</script>
