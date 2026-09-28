const WHATSAPP_NUMBER="5586999999999";
const cars=[
{id:1,brand:"Toyota",name:"Corolla XEi 2.0",year:2024,km:"18.500 km",fuel:"Flex",category:"Sedan",price:148900,img:"https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=900&q=80",desc:"Sedan confortável, econômico e completo para quem busca segurança e tecnologia."},
{id:2,brand:"Volkswagen",name:"T-Cross Highline",year:2023,km:"24.100 km",fuel:"Flex",category:"SUV",price:139900,img:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",desc:"SUV moderno com ótimo espaço interno, tecnologia e desempenho."},
{id:3,brand:"BMW",name:"320i M Sport",year:2024,km:"12.800 km",fuel:"Gasolina",category:"Sedan",price:319900,img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",desc:"Performance, acabamento premium e dirigibilidade esportiva em um único carro."},
{id:4,brand:"Honda",name:"HR-V Touring",year:2023,km:"21.300 km",fuel:"Flex",category:"SUV",price:179900,img:"https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80",desc:"SUV completo e versátil, ideal para cidade e viagens."},
{id:5,brand:"Fiat",name:"Toro Ultra 2.0",year:2024,km:"15.700 km",fuel:"Diesel",category:"Picape",price:184900,img:"https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=80",desc:"Picape robusta e confortável com excelente capacidade para trabalho e lazer."},
{id:6,brand:"Chevrolet",name:"Onix Premier",year:2024,km:"9.400 km",fuel:"Flex",category:"Hatch",price:98900,img:"https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80",desc:"Compacto completo, conectado e econômico para o dia a dia."},
{id:7,brand:"Toyota",name:"Hilux SRX 2.8",year:2023,km:"32.600 km",fuel:"Diesel",category:"Picape",price:259900,img:"https://images.unsplash.com/photo-1592805144716-feeccccef5d8?auto=format&fit=crop&w=900&q=80",desc:"Picape premium com força, tecnologia e conforto."},
{id:8,brand:"Chevrolet",name:"Camaro SS 6.2 V8",year:2022,km:"14.900 km",fuel:"Gasolina",category:"Esportivo",price:389900,img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",desc:"Esportivo icônico com motor V8 e experiência de condução marcante."},
{id:9,brand:"Volkswagen",name:"Polo GTS",year:2024,km:"8.100 km",fuel:"Flex",category:"Hatch",price:119900,img:"https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",desc:"Hatch esportivo com desempenho e tecnologia para quem gosta de dirigir."}
];
const grid=document.querySelector("#carsGrid"),search=document.querySelector("#search"),brand=document.querySelector("#brand"),category=document.querySelector("#category"),sort=document.querySelector("#sort"),empty=document.querySelector("#empty");
const money=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
function render(){
let list=cars.filter(c=>(!search.value||(c.brand+" "+c.name).toLowerCase().includes(search.value.toLowerCase()))&&(!brand.value||c.brand===brand.value)&&(!category.value||c.category===category.value));
if(sort.value==="low")list.sort((a,b)=>a.price-b.price);if(sort.value==="high")list.sort((a,b)=>b.price-a.price);if(sort.value==="year")list.sort((a,b)=>b.year-a.year);
grid.innerHTML=list.map(c=>'<article class="car-card" data-id="'+c.id+'"><div class="car-image"><img src="'+c.img+'" alt="'+c.brand+" "+c.name+'" loading="lazy"><span class="tag">'+c.category+'</span></div><div class="car-body"><div class="car-brand">'+c.brand+'</div><div class="car-name">'+c.name+'</div><div class="car-specs"><span>'+c.year+'</span><span>'+c.km+'</span><span>'+c.fuel+'</span></div><div class="car-bottom"><div class="car-price">'+money(c.price)+'</div><span class="details">Ver detalhes →</span></div></div></article>').join("");
empty.style.display=list.length?"none":"block";
}
[search,brand,category,sort].forEach(el=>el.addEventListener("input",render));
const modal=document.querySelector("#modal");
function openModal(c){
document.querySelector("#modalImg").src=c.img;document.querySelector("#modalImg").alt=c.brand+" "+c.name;document.querySelector("#modalBrand").textContent=c.brand;document.querySelector("#modalTitle").textContent=c.name;document.querySelector("#modalDescription").textContent=c.desc;document.querySelector("#modalPrice").textContent=money(c.price);
document.querySelector("#modalSpecs").innerHTML="<span>"+c.year+"</span><span>"+c.km+"</span><span>"+c.fuel+"</span><span>"+c.category+"</span>";
const link="https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent("Olá! Tenho interesse no "+c.brand+" "+c.name+" ("+c.year+") anunciado no site.");
document.querySelector("#modalWhatsapp").href=link;modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
document.addEventListener("click",e=>{const card=e.target.closest(".car-card");if(card)openModal(cars.find(c=>c.id==card.dataset.id));if(e.target.matches("[data-close]"))closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.querySelector("#whatsappBtn").href="https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent("Olá! Vi o site da AutoPrime e gostaria de conhecer os veículos disponíveis.");
const menuBtn=document.querySelector("#menuBtn"),nav=document.querySelector("nav");
menuBtn.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="76px";nav.style.left="0";nav.style.right="0";nav.style.padding="20px";nav.style.background="#fff";nav.style.flexDirection="column";nav.style.borderBottom="1px solid #e4e7ec"});
render();