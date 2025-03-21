/**
 * Utility function for smoother scrolling with customizable duration
 * This provides better control over scroll speed than CSS scroll-behavior
 */

// Function to handle smooth scrolling to anchor links
export const initSmoothScroll = () => {
  // Get all anchor links that point to an ID on the page
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Get the target element
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      // Scroll to the target element with a slower, smoother animation
      scrollToElement(targetElement, 1200); // 1200ms = 1.2 seconds (slower scroll)
    });
  });
};

// Helper function to scroll to an element with a specified duration
export const scrollToElement = (element: Element, duration: number = 1200) => {
  const startPosition = window.pageYOffset;
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function for a smoother, more natural feel
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  // Start the animation
  requestAnimationFrame(animation);
};

// Cubic easing function for smoother acceleration and deceleration
function easeInOutCubic(t: number): number {
  return t < 0.5 
    ? 4 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
