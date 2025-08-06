import {clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'

// util func allows to put the inputs in a list of strings instead a giant strig in prder to fit in the editor nicely
// and also fixes specificity clashes
export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}

export function initSmoothScroll() {
  // Check if reduced motion is enabled
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!prefersReducedMotion) {
    // Enable CSS smooth scroll for non-Safari browsers
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      document.documentElement.classList.add('smooth-scroll');
      return;
    }

    // Manual smooth scroll for Safari
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = Math.min(800, Math.max(300, Math.abs(distance) * 0.5));
          
          let startTime = null;
          
          function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            window.scrollTo(0, startPosition + distance * ease);
            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          }
          
          function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          }
          
          requestAnimationFrame(animation);
        }
      });
    });
  }
}