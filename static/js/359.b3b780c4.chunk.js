"use strict";(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[359],{3359:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var i=a(2791),r=a(5216);r.ZP.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  padding: 50px 0;
`,r.ZP.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;const s=r.ZP.div`
  font-size: 42px;
  text-align: center; 
  font-weight: 600;
  margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,o=r.ZP.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,l=(r.ZP.div`
    display: flex;
    border: 1.5px solid ${e=>{let{theme:t}=e;return t.primary}};
    color: ${e=>{let{theme:t}=e;return t.primary}};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,r.ZP.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${e=>{let{active:t,theme:a}=e;return t&&`\n    background: ${a.primary+20};\n    `}}
    &:hover {
        background: ${e=>{let{theme:t}=e;return t.primary+8}};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`,r.ZP.div`
    width: 1.5px;
    background: ${e=>{let{theme:t}=e;return t.primary}};
`,r.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`,{origin:"https://api.emailjs.com",blockHeadless:!1}),n=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{};class d{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const c=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=await fetch(l.origin+e,{method:"POST",headers:a,body:t}),r=await i.text(),s=new d(i.status,r);if(i.ok)return s;throw s},m=(e,t,a)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||"string"!==typeof a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},p=e=>e.webdriver||!e.languages||0===e.languages.length,u=()=>new d(451,"Unavailable For Headless Browser"),h=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const a=(i=t,r=e.watchVariable,i instanceof FormData?i.get(r):i[r]);var i,r;return"string"===typeof a&&e.list.includes(a)},g=()=>new d(403,"Forbidden"),x=(e,t,a)=>{setTimeout((()=>{a.removeItem(e)}),t)},b=(e,t,a)=>{if(!a.throttle)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a string"})(a.throttle,a.id);const i=a.id||t,r=((e,t,a)=>{const i=Number(a.getItem(e)||0);return t-Date.now()+i})(i,a.throttle,e);return r>0?(x(i,r,e),!0):(e.setItem(i,Date.now().toString()),x(i,a.throttle,e),!1)},f=()=>new d(429,"Too Many Requests"),y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";if(!e)return;const a=n(e);l.publicKey=a.publicKey,l.blockHeadless=a.blockHeadless,l.blockList=a.blockList,l.limitRate=a.limitRate,l.origin=a.origin||t},w=(e,t,a,i)=>{const r=n(i),s=r.publicKey||l.publicKey,o=r.blockHeadless||l.blockHeadless,d={...l.blockList,...r.blockList},x={...l.limitRate,...r.limitRate};if(o&&p(navigator))return Promise.reject(u());if(m(s,e,t),(e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(a),a&&h(d,a))return Promise.reject(g());if(b(localStorage,location.pathname,x))return Promise.reject(f());const y={lib_version:"4.1.0",user_id:s,service_id:e,template_id:t,template_params:a};return c("/api/v1.0/email/send",JSON.stringify(y),{"Content-type":"application/json"})};var j=a(184);const v=()=>{const[e,t]=(0,i.useState)(!1);return(0,j.jsxs)("section",{id:"contact",className:"flex flex-wrap justify-around gap-8 py-12 px-8",children:[(0,j.jsxs)("div",{className:"w-full md:w-1/2 text-white",children:[(0,j.jsx)(s,{children:"Contact Me"}),(0,j.jsx)(o,{children:"You're welcome to contact me with any inquiries. Let's talk about your ideas and engage in meaningful conversations."})]}),(0,j.jsx)("div",{className:"w-full md:w-1/2",children:e?(0,j.jsx)("p",{className:"text-green-500 text-sm mt-2",children:"Email sent successfully!"}):(0,j.jsxs)("form",{className:"flex flex-col",onSubmit:async e=>{console.log("submitting"),e.preventDefault(),y("bPCyv2MLqLMsNHA4C");const a={email:e.target.email.value,subject:e.target.subject.value,message:e.target.message.value};w("service_dkvy2sf","template_fjurtri",a).then((e=>{console.log("SUCCESS!",e.status,e.text),t(!0)}),(e=>{console.log("FAILED...",e)}))},children:[(0,j.jsxs)("div",{className:"mb-6",children:[(0,j.jsx)("label",{"data-aos":"fade-left","data-aos-duration":"1000",htmlFor:"email",className:"text-white block mb-2 text-lg font-medium",children:"Your email"}),(0,j.jsx)("input",{"data-aos":"fade-right","data-aos-duration":"1000",name:"email",type:"email",id:"email",required:!0,className:"bg-gray-100 border border-gray-300 placeholder-gray-400 text-gray-800 text-sm rounded-lg block w-full p-2.5",placeholder:"jacob@google.com"})]}),(0,j.jsxs)("div",{className:"mb-6",children:[(0,j.jsx)("label",{"data-aos":"fade-left","data-aos-duration":"1000",htmlFor:"subject",className:"text-white block text-lg mb-2 font-medium",children:"Subject"}),(0,j.jsx)("input",{"data-aos":"fade-right","data-aos-duration":"1000",name:"subject",type:"text",id:"subject",required:!0,className:"bg-gray-100 border border-gray-300 placeholder-gray-400 text-gray-800 text-sm rounded-lg block w-full p-2.5",placeholder:"Just saying hi"})]}),(0,j.jsxs)("div",{className:"mb-6",children:[(0,j.jsx)("label",{"data-aos":"fade-left","data-aos-duration":"1000",htmlFor:"message",className:"text-white block text-lg mb-2 font-medium",children:"Message"}),(0,j.jsx)("textarea",{"data-aos":"fade-right","data-aos-duration":"1000",name:"message",id:"message",className:"bg-gray-100 border border-gray-300 placeholder-gray-400 text-gray-800 text-sm rounded-lg block w-full p-2.5",placeholder:"Let's talk about..."})]}),(0,j.jsx)("button",{type:"submit",className:"bg-[#197FE6] hover:bg-primary-600 text-black font-medium py-2.5 px-5 rounded-lg w-full",children:"Send Message"})]})})]})}}}]);
//# sourceMappingURL=359.b3b780c4.chunk.js.map