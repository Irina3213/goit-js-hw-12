import{a as v,S as B,i}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const w="https://pixabay.com/api/",S="28758072-9e3959ae97493423a95a052ce",h=async(o,e=1)=>{const a=await v(w,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});return{hits:a.data.hits,totalHits:a.data.totalHits}},r={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-more-btn"),scrollBtn:document.querySelector(".scroll-to-top"),header:document.querySelector("header")},b=new B(".gallery-item a",{captionsData:"alt",captionDelay:250}),p=o=>{const e=o.map(({webformatURL:a,largeImageURL:l,tags:t,likes:s,views:c,comments:f,downloads:L})=>`
         <li class="gallery-item">
        <a class="gallery-link" href="${l}">
            <img
                class="gallery-img"
                src="${a}"
                alt="${t}"
            />
        </a>
        <ul class="list-description">
            <li class="description">
                <h3 class="title">Likes</h3>
                <p class="text">${s}</p>
            </li>
            <li class="description">
                <h3 class="title">Views</h3>
                <p class="text">${c}</p>
            </li>
            <li class="description">
                <h3 class="title">Comments</h3>
                <p class="text">${f}</p>
            </li>
            <li class="description">
                <h3 class="title">Downloads</h3>
                <p class="text">${L}</p>
            </li>
        </ul>
    </li>
        `).join("");r.gallery.insertAdjacentHTML("beforeend",e),b.refresh()},q=()=>{r.gallery.innerHTML=""},m=()=>{r.loader.classList.remove("hidden")},y=()=>{r.loader.classList.add("hidden")},g=()=>{r.loadBtn.classList.remove("hidden")},u=()=>{r.loadBtn.classList.add("hidden")},x=()=>{const o=document.querySelector(".gallery-item"),e=(o==null?void 0:o.getBoundingClientRect().height)||0;window.scrollBy({top:e*2,behavior:"smooth"})},P=()=>{r.header.getBoundingClientRect().top<0?r.scrollBtn.classList.remove("hidden"):r.scrollBtn.classList.add("hidden")};window.addEventListener("scroll",P);let d="",n=1;r.form.addEventListener("submit",async o=>{if(o.preventDefault(),q(),d=r.input.value.trim(),n=1,!d)return i.error({message:"Please enter a search query!",position:"topRight"});m(),u();try{const{hits:e,totalHits:a}=await h(d,n);if(e.length===0)return i.error({message:`Sorry, there are no images matching your search ${d}. Please try again!`,position:"topRight"});p(e);const l=Math.ceil(a/15);n>=l?i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):g()}catch(e){i.error({title:e.message})}finally{y()}r.form.reset()});r.loadBtn.addEventListener("click",async o=>{n+=1,u(),m();try{const{hits:e,totalHits:a}=await h(d,n);p(e),setTimeout(()=>{x()},300);const l=Math.ceil(a/15);n>=l?(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):g()}catch(e){i.error({title:e.message})}finally{y()}});r.scrollBtn.addEventListener("click",o=>{o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
