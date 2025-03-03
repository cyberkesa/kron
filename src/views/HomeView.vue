<template>
  <div class="home lg:px-0 sm:px-5">
    <HomeBanner />
    <OfferSection />
    <AboutSection />
    <AppSection />
  </div>
</template>

<script>
import HomeBanner from "@/components/home/HomeBanner.vue";
import OfferSection from "@/components/home/OfferSection.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import AppSection from "@/components/home/AppSection.vue";

export default {
  components: {
    HomeBanner,
    OfferSection,
    AboutSection,
    AppSection,
  },
  mounted() {
    document.title = 'КРОН - компания ООО "КРОН"';

    const animateBanner = () => {
      const banner = document.querySelector(".banner-animate");

      const handleScroll = () => {
        const scrollY = window.scrollY;
        const scale = 1 + scrollY * 0.0005;
        const translateY = scrollY * 0.2;

        banner.style.transform = `scale(${Math.min(
          scale,
          1.02,
        )}) translateY(${Math.min(translateY, 20)}px)`;
      };

      window.addEventListener("scroll", handleScroll);
    };

    const animateSections = () => {
      const sections = document.querySelectorAll(".section-animate");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0) scale(1)";
              entry.target.style.filter = "blur(0)";
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      );

      sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px) scale(0.98)";
        section.style.filter = "blur(2px)";
        section.style.transition = "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
        observer.observe(section);
      });
    };

    setTimeout(() => {
      animateBanner();
      animateSections();
    }, 100);
  },
};
</script>

<style>
.banner-animate {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: top center;
}

.section-animate {
  will-change: transform, opacity, filter;
}

img,
.hover-scale,
a,
button {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

img:hover,
.hover-scale:hover {
  transform: scale(1.03) translateY(-2px);
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

@media (min-width: 1024px) {
  .section-animate:hover {
    transform: scale(1.005);
  }
}
</style>
