 

 const header = document.querySelector("header");
 const StickyBC = document.querySelector(".OnTheTopHome");
 const DEText = document.querySelector(".DETitle");


const FadeOnScroll = document.querySelectorAll(".main-holder")



const options = {
    rootMargin:"-110px 0px 0px 0px"

};
const observer = new IntersectionObserver (function(entries, observer)
{
  entries.forEach(entry => {
        if (!entry.isIntersecting){
            header.classList.add("backgroundBCC");
            DEText.classList.add("TextOnTopDE");
        }else{
            header.classList.remove("backgroundBCC");    
            DEText.classList.remove("TextOnTopDE");

        }
    });

},
options);
  observer.observe(StickyBC);


  const appearOptions = {
    threshold:1,
    rootMargin: "100px 0px -100px 0px"
  }

  const OnScroll = new IntersectionObserver (function(entries, OnScroll) {

    entries.forEach(entry => {
        if (!entry.isIntersecting){
                return; 
            }else{ entry.target.classList.add("appear");
            onscroll.unobserve(entry.target);
        }
    });
  },
  appearOptions);

  FadeOnScroll.forEach(fadeOn => {
      OnScroll.observe(fadeOn);
  }) 
