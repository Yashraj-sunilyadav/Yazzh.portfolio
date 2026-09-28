<template>
  <div class="experience-tree mt-8 md:mt-12 w-full relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
      
      <!-- Professional Experience Column -->
      <div class="flex flex-col gap-12 md:gap-16">
        <div class="flex items-center gap-4 mb-2 md:mb-4">
          <p class="text-[10px] md:heading-6 text-flax-smoke-500 uppercase tracking-[0.2em] font-mono font-semibold">( 01 . Experience )</p>
        </div>
        
        <div
          v-for="(org, orgIndex) in experiences"
          :key="'exp-'+orgIndex"
          class="org-group relative flex flex-col gap-6 md:gap-8 ml-3 md:ml-12"
        >
          <!-- Vertical line for the organization -->
          <div
            class="absolute -left-3 top-0 h-full w-[1px] bg-gradient-to-b from-flax-smoke-400 via-flax-smoke-200 to-transparent md:-left-8"
          ></div>

          <!-- Organization Header -->
          <div 
            class="relative z-10 flex items-center gap-3 md:gap-4 -ml-[23px] md:-ml-[37px] cursor-help transition-all duration-300 hover:translate-x-2"
            @mouseenter="handleMouseEnter($event, org)"
            @mouseleave="handleMouseLeave"
            @mousemove="handleMouseMove"
          >
            <div class="size-8 md:size-10 rounded-full bg-flax-smoke-50 border border-flax-smoke-200 flex items-center justify-center shadow-lg shadow-black/10 overflow-hidden shrink-0 transition-all duration-500 hover:scale-110">
              <img v-if="org.logo" :src="org.logo" :alt="org.name" class="size-full object-cover" />
              <div v-else class="text-flax-smoke-800 text-[10px] md:text-xs font-bold uppercase tracking-tighter">{{ org.name[0] }}</div>
            </div>
            <div class="flex flex-col">
              <h4 class="text-base md:heading-4 font-bold text-flax-smoke-900 uppercase tracking-tight leading-tight">{{ org.name }}</h4>
              <p class="text-flax-smoke-600 text-[10px] md:text-sm font-mono tracking-widest">{{ org.duration }}</p>
            </div>
          </div>

          <!-- Roles within Organization -->
          <div class="flex flex-col gap-8 md:gap-10 pl-5 md:pl-10">
            <div
              v-for="(role, roleIndex) in org.roles"
              :key="roleIndex"
              class="role-node relative flex flex-col gap-1.5 md:gap-2"
            >
              <!-- Branch connector -->
              <div class="absolute -left-5 top-[12px] h-[1px] w-3 bg-flax-smoke-300 md:-left-10 md:w-8"></div>
              
              <div class="flex flex-col md:flex-row md:items-baseline md:gap-4">
                <h5 class="text-sm md:heading-5 font-fancy font-semibold text-flax-smoke-800 leading-snug">{{ role.title }}</h5>
                <p class="text-flax-smoke-500 text-[9px] md:text-xs font-mono uppercase tracking-widest mt-0.5 md:mt-0">{{ role.period }}</p>
              </div>
              
              <p v-if="role.description" class="text-flax-smoke-700 max-w-[55ch] text-[13px] md:text-sm leading-relaxed">
                {{ role.description }}
              </p>
              
              <div v-if="role.tags" class="flex flex-wrap gap-1.5 md:gap-2 mt-1 md:mt-2">
                <span
                  v-for="tag in role.tags"
                  :key="tag"
                  class="px-1.5 py-0.5 border border-flax-smoke-200 rounded-full text-[9px] md:text-[10px] uppercase text-flax-smoke-600 bg-flax-smoke-50/80"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Column -->
      <div class="flex flex-col gap-12 md:gap-16">
        <div class="flex items-center gap-4 mb-2 md:mb-4">
          <p class="text-[10px] md:heading-6 text-flax-smoke-500 uppercase tracking-[0.2em] font-mono font-semibold">( 02 . Education )</p>
        </div>

        <div
          v-for="(school, eduIndex) in educations"
          :key="'edu-'+eduIndex"
          class="org-group relative flex flex-col gap-6 md:gap-8 ml-3 md:ml-12"
        >
          <!-- Vertical line -->
          <div
            class="absolute -left-3 top-0 h-full w-[1px] bg-gradient-to-b from-flax-smoke-400 via-flax-smoke-200 to-transparent md:-left-8"
          ></div>

          <!-- Institution Header -->
          <div class="relative z-10 flex items-center gap-3 md:gap-4 -ml-[23px] md:-ml-[37px] transition-all duration-300 hover:translate-x-2">
            <div class="size-8 md:size-10 rounded-full bg-flax-smoke-50 border border-flax-smoke-200 flex items-center justify-center shadow-lg shadow-black/10 overflow-hidden shrink-0 transition-all duration-500 hover:scale-110">
              <img v-if="school.logo" :src="school.logo" :alt="school.name" class="size-full object-cover" />
              <div v-else class="text-flax-smoke-800 text-[10px] md:text-xs font-bold uppercase tracking-tighter">{{ school.name[0] }}</div>
            </div>
            <div class="flex flex-col">
              <h4 class="text-base md:heading-4 font-bold text-flax-smoke-900 uppercase tracking-tight leading-tight">{{ school.name }}</h4>
              <p class="text-flax-smoke-600 text-[10px] md:text-sm font-mono tracking-widest">{{ school.duration }}</p>
            </div>
          </div>

          <!-- Course/Grade Details -->
          <div class="flex flex-col gap-6 md:gap-8 pl-5 md:pl-10">
            <div class="role-node relative flex flex-col gap-1.5 md:gap-2">
              <div class="absolute -left-5 top-[12px] h-[1px] w-3 bg-flax-smoke-300 md:-left-10 md:w-8"></div>
              
              <div class="flex flex-col md:flex-row md:items-baseline md:gap-4">
                <h5 class="text-sm md:heading-5 font-fancy font-semibold text-flax-smoke-800 leading-snug">{{ school.degree }}</h5>
              </div>
              
              <p v-if="school.grade" class="text-flax-smoke-600 text-[10px] md:text-[11px] font-mono tracking-wide uppercase">
                Grade: <span class="text-flax-smoke-900 font-bold ml-1">{{ school.grade }}</span>
              </p>
              
              <p v-if="school.description" class="text-flax-smoke-700 max-w-[55ch] text-[13px] md:text-sm leading-relaxed mt-0.5 md:mt-1">
                {{ school.description }}
              </p>

              <div v-if="school.skills" class="flex flex-wrap gap-1.5 md:gap-2 mt-2 md:mt-3">
                <span
                  v-for="skill in school.skills"
                  :key="skill"
                  class="px-1.5 py-0.5 border border-flax-smoke-200 rounded-full text-[9px] md:text-[10px] uppercase text-flax-smoke-600 bg-flax-smoke-50/80"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Scattered Hover Previews (Desktop Only) - Teleported for viewport-relative placement -->
    <Teleport to="body">
      <div
        v-if="hoveredPreviews.length > 0"
        class="hover-preview-container fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] overflow-hidden"
        style="background: transparent;"
      >
        <div
          v-for="(img, index) in hoveredPreviews"
          :key="`${currentOrgName}-${index}`"
          class="hover-preview-item absolute top-0 left-0 opacity-0 w-fit h-fit max-w-[320px] md:max-w-[420px] rounded-xl overflow-hidden border border-flax-smoke-200 bg-white shadow-2xl shadow-black/30 p-2 flex items-center justify-center translate-gpu"
        >
          <img :src="img" alt="Experience Preview" class="w-auto h-auto max-w-full max-h-[300px] md:max-h-[350px] object-contain rounded-lg shadow-sm" />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, nextTick } from 'vue';
  import gsap from 'gsap';

  // Import images properly
  import imgAws1 from '@/assets/expimg/aws1.jpg';
  import imgAws2 from '@/assets/expimg/aws2.jpg';
  import imgAws3 from '@/assets/expimg/aws3.jpg';
  import imgEncrypt1 from '@/assets/expimg/encrypt1.jpg';
  import imgEncrypt2 from '@/assets/expimg/encrypt2.jpg';
  import imgEncrypt3 from '@/assets/expimg/encrypt3.jpg';
  import imgGokboru1 from '@/assets/expimg/gokboru1.jpg';
  import imgGokboru2 from '@/assets/expimg/gokboru2.jpg';
  import logoLpu from '@/assets/expimg/lpu_logo.png';
  import logoParkEnglish from '@/assets/expimg/parkenglishlogo.jpg';
  import logoAugustines from '@/assets/expimg/augustineslogo.webp';
  
  interface Role {
    title: string;
    period: string;
    description?: string;
    tags?: string[];
  }

  interface Experience {
    name: string;
    duration: string;
    logo?: string;
    previews?: string[];
    roles: Role[];
  }

  interface Education {
    name: string;
    duration: string;
    logo?: string;
    degree: string;
    description?: string;
    skills?: string[];
    grade?: string;
  }

  const hoveredPreviews = ref<string[]>([]);
  const currentOrgName = ref('');
  const mousePos = ref({ x: 0, y: 0 });

  const handleMouseEnter = async (e: MouseEvent, org: any) => {
    if (!org.previews || org.previews.length === 0) return;
    
    // Clean imports check
    const valid = org.previews.filter((p: any) => !!p);
    if (valid.length === 0) return;

    // Reset and trigger update
    gsap.killTweensOf('.hover-preview-item');
    currentOrgName.value = org.name;
    hoveredPreviews.value = valid;
    mousePos.value = { x: e.clientX, y: e.clientY };
    
    await nextTick();
    
    // Scattered Animation
    gsap.utils.toArray('.hover-preview-item').forEach((item: any, i: number) => {
      const angle = (i / valid.length) * Math.PI * 2;
      const dist = 120 + Math.random() * 80;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      const rot = -15 + Math.random() * 30;

      gsap.fromTo(item, 
        { 
          opacity: 0, 
          scale: 0.3,
          x: mousePos.value.x, 
          y: mousePos.value.y,
          rotate: rot * 2
        },
        { 
          opacity: 1, 
          scale: 0.85 + (Math.random() * 0.15), 
          x: mousePos.value.x + tx, 
          y: mousePos.value.y + ty,
          rotate: rot,
          duration: 0.6, 
          delay: i * 0.05,
          ease: 'power3.out' 
        }
      );

      // Subtle float
      gsap.to(item, {
        y: '+=10',
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  };

  const handleMouseLeave = () => {
    gsap.to('.hover-preview-item', {
      opacity: 0,
      scale: 0.3,
      duration: 0.3,
      ease: 'power3.in',
      onComplete: () => {
        hoveredPreviews.value = [];
        currentOrgName.value = '';
      }
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    
    gsap.to('.hover-preview-item', {
      x: (i) => {
        const angle = (i / hoveredPreviews.value.length) * Math.PI * 2;
        return x + Math.cos(angle) * (120 + i * 20);
      },
      y: (i) => {
        const angle = (i / hoveredPreviews.value.length) * Math.PI * 2;
        return y + Math.sin(angle) * (120 + i * 20);
      },
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.02
    });
  };

  const experiences: Experience[] = [
    {
      name: 'AWS Cloud Club — LPU',
      duration: '2 yrs 1 mo',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQF2RimW_spRIQ/company-logo_200_200/B56ZyYMfdlKYAI-/0/1772079939403/aws_cloud_community_lpu_logo?e=1776297600&v=beta&t=zvbqZ457dWtqBhwx4X-5RLsYw46BpOOTvsciWnJbags',
      previews: [imgAws1, imgAws2, imgAws3],
      roles: [
        {
          title: 'Executive Lead',
          period: 'Mar 2026 — Present',
          description: 'Spearheading the overall vision and community growth, leading technical workshops and strategic initiatives for 500+ members.',
          tags: ['Leadership', 'Cloud Advocacy', 'AWS'],
        },
        {
          title: 'Technical Lead',
          period: 'Jun 2025 — Mar 2026',
          description: 'Directed the technical roadmap, curated technical curricula, and mentored a team of developers on modern cloud architectures.',
          tags: ['Architecture', 'Mentorship', 'Cloud Tech'],
        },
        {
          title: 'Operation Lead',
          period: 'Dec 2024 — Jun 2025',
          description: 'Managed event logistics, cross-functional collaboration, and community engagement strategies to streamline operations.',
          tags: ['Operations', 'Collaboration', 'Management'],
        },
        {
          title: 'Core Team Member',
          period: 'Aug 2024 — Dec 2024',
          description: 'Contributed to the core initiatives and community development, assisting in project execution and event planning.',
          tags: ['Community', 'Execution', 'Teamwork'],
        },
        {
          title: 'Web Application Developer',
          period: 'Mar 2024 — Aug 2024',
          description: 'Initially joined as a developer, architecting the community website and ensuring a robust online presence.',
          tags: ['Web Dev', 'Next.js', 'Frontend'],
        },
      ],
    },
    {
      name: 'Encrypt Edge',
      duration: '5 mos',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQHzkR0v4Ao2Hw/company-logo_200_200/company-logo_200_200/0/1703539185838/encryptedge_logo?e=1776297600&v=beta&t=RfoNNKnZs78UH9mez_Cpqw9KL54YdMzoThgq3LB9x0o',
      previews: [imgEncrypt1, imgEncrypt2, imgEncrypt3],
      roles: [
        {
          title: 'Core Team',
          period: 'Nov 2025 — Present',
          description: 'Responsible for handling the technical side of the community, including website development, updates, and backend improvements, along with supporting tech-related tasks and events.',
          tags: ['Full-Stack', 'Backend', 'Website Management'],
        },
      ],
    },
    {
      name: 'Gökbörü Tech',
      duration: 'Summer 2024',
      logo: 'https://gokboru.in/bl.jpg',
      previews: [imgGokboru1, imgGokboru2],
      roles: [
        {
          title: 'Summer Trainee',
          period: 'Summer 2024',
          description: 'Completed a seasonal apprenticeship focusing on applied engineering concepts and modern technical stacks.',
          tags: ['Apprenticeship', 'Engineering', 'Learning'],
        },
      ],
    },
  ];

  const educations: Education[] = [
    {
      name: 'Lovely Professional University',
      duration: '2023 – 2027',
      logo: logoLpu,
      degree: 'Bachelor of Technology - BTech, IT',
      description: 'Major in Information Technology, focusing on modern web stacks and competitive programming.',
      skills: ['Front-End Design', 'C#', 'UI/UX', 'Cloud Computing'],
      grade: '',
    },
    {
      name: "St. Augustine's Day School",
      duration: 'Apr 2021 – Apr 2023',
      logo: logoAugustines,
      degree: 'ISC, Science',
      description: 'Higher Secondary education with a focus on Physics, Chemistry, and Mathematics.',
      grade: 'A+',
      skills: [],
    },
    {
      name: 'The Park English School',
      duration: 'Apr 2013 – Apr 2021',
      logo: logoParkEnglish,
      degree: 'ICSE, Science',
      description: 'Secondary education with a strong foundation in science and engineering fundamentals.',
      grade: 'AA+',
      skills: [],
    },
  ];

  onMounted(() => {
    gsap.from('.org-group', {
      opacity: 0,
      x: -40,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.experience-tree',
        start: 'top 80%',
      },
    });

    gsap.from('.role-node', {
      opacity: 0,
      x: -20,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.experience-tree',
        start: 'top 80%',
      },
    });
  });
</script>

<style scoped>
</style>
