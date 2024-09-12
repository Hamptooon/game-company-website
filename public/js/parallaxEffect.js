window.addEventListener('scroll', e => {
    let scrollY = this.scrollY;
    let startScrollToEffect = 850;
    if(scrollY >= startScrollToEffect){
        scrollY -= startScrollToEffect;
        document.body.style.cssText += `--scrollY: ${scrollY}px;`;
        console.log(scrollY);
    }
   
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother); 
ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5
    }
);