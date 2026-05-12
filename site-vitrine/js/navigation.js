export function cardClick(containerSelector) {
     const container = document.querySelector(containerSelector);
     if (!container) return;

     container.addEventListener("click", function(event) {
         if(event.target.classList.contains("cover-click")){
            const link = event.target.getAttribute("data-link");
            
            if (link) {
                window.location.href = link;
            }
     }   });
}