<template> 
  <div id="about" class="py-[10rem] bg-[#F5F7FF] overflow-hidden"> 
    <section class="flex sm:flex-row flex-col relative gap-[4rem] b-wrapper "> 
      <div class="w-full h-full pt-[7rem]">
        <div class="rounded-[2rem] relative z-[1] w-full"> 
          <div class="w-[70rem] aspect-square bg-[#3B57F41A] z-[-1] bottom-[25%] right-[20%] absolute rounded-full"></div>
          <img :src="about.image" class="w-full h-full rounded-[2rem]"  />
          <img src="/img/bubble2.svg" class="transform translate-y-[-40%] translate-x-[20%]" />
        </div>
      </div>
      <div class="w-full z-1">
        <div> 
          <h2 class="mb-[2rem] text-gradient-180">About Us</h2>
          
          <div v-html="about.description" ></div>
          <div class="mt-[6rem]"> 
            <a href="#consult" class="b-btn md accent">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { WizardResponse } from '~/type';
const props = defineProps<{ data?: WizardResponse }>();

const about = computed(() => {
  const image = props.data?.agency_wizard.contact.about.about_image || "/img/bg2.jpg";
  const description = props.data?.agency_wizard.contact.about.about_desc || `
  <p class="mb-[1rem]">[COMPANY NAME] is the leading provider of comprehensive online marketing solutions. We are passionate about helping businesses like yours thrive in the digital landscape. With our expertise and dedication, we are your trusted partner for all your online marketing needs.</p>
  <p class="mb-[1rem]">We offer a comprehensive suite of services to cover every aspect of your online marketing requirements. From business consulting and strategy development to social media management, content creation, email marketing, video script writing, Sales copies, Business Proposals, persuasive copywriting and so much more – we have the expertise and capabilities to elevate your brand's online presence and drive tangible results.</p>
  <p class="mb-[1rem]">We invite you to experience the power of [COMPANY NAME] and unlock your business's full potential in the digital landscape.</p>
  `
  return { image, description }
});

</script>

<style> 
    
</style>