window.addEventListener('load',()=>{
setTimeout(()=>document.getElementById('loader').classList.add('hide'),800);
});
document.getElementById('year').textContent=new Date().getFullYear();
const menuToggle=document.getElementById('menuToggle');
const navMenu=document.getElementById('navMenu');
menuToggle.addEventListener('click',()=>{
const open=navMenu.classList.toggle('open');
menuToggle.classList.toggle('open',open);
menuToggle.setAttribute('aria-expanded',open);
});
document.querySelectorAll('.nav-link').forEach(link=>{
link.addEventListener('click',()=>{
navMenu.classList.remove('open');
menuToggle.classList.remove('open');
menuToggle.setAttribute('aria-expanded','false');
});
});
const themeToggle=document.getElementById('themeToggle');
const themeIcon=themeToggle.querySelector('i');
const applyTheme=(theme)=>{
document.documentElement.setAttribute('data-theme',theme);
themeIcon.className=theme==='dark'?'fa-solid fa-sun':'fa-solid fa-moon';
};
const savedTheme=localStorage.getItem('agrinho-theme')||'light';
applyTheme(savedTheme);
themeToggle.addEventListener('click',()=>{
const current=document.documentElement.getAttribute('data-theme');
const next=current==='dark'?'light':'dark';
applyTheme(next);
localStorage.setItem('agrinho-theme',next);
});
const header=document.getElementById('header');
const progress=document.getElementById('readingProgress');
const backTop=document.getElementById('backTop');
window.addEventListener('scroll',()=>{
const y=window.scrollY;
header.classList.toggle('scrolled',y>30);
backTop.classList.toggle('show',y>500);
const total=document.documentElement.scrollHeight-window.innerHeight;
progress.style.width=`${(y/total)*100}%`;
const heroBg=document.querySelector('[data-parallax]');
if(heroBg&&y<window.innerHeight){
heroBg.style.transform=`translateY(${y*0.4}px)scale(1.05)`;
}
});
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const revealObserver=new IntersectionObserver((entries)=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add('in');
revealObserver.unobserve(e.target);
}
});
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const animateCounter=(el)=>{
const target=parseFloat(el.dataset.target);
const duration=1800;
const start=performance.now();
const isFloat=target%1!==0;
const tick=(now)=>{
const p=Math.min((now-start)/duration,1);
const eased=1-Math.pow(1-p,3);
const val=target*eased;
el.textContent=isFloat?val.toFixed(1):Math.floor(val);
if(p<1)requestAnimationFrame(tick);
else el.textContent=isFloat?target.toFixed(1):target;
};
requestAnimationFrame(tick);
};
const counterObserver=new IntersectionObserver((entries)=>{
entries.forEach(e=>{
if(e.isIntersecting){
animateCounter(e.target);
counterObserver.unobserve(e.target);
}
});
},{threshold:0.5});
document.querySelectorAll('.counter').forEach(c=>counterObserver.observe(c));
const newsData=[
{
title:'Brasil sai do Mapa da Fome da FAO',
source:'ONU News',
date:'Julho 2025',
tag:'Conquista',
description:'O relatório SOFI 2025 confirma que o Brasil reduziu a desnutrição abaixo de 2,5%,saindo oficialmente do Mapa da Fome da FAO. Cerca de 673 milhões de pessoas ainda sofrem com fome globalmente.',
url:'https://news.un.org/pt/story/2025/07/1850571'
},
{
title:'III Plano Nacional de Segurança Alimentar(Plansan)2025–2027 aprovado',
source:'Agência Gov',
date:'Março 2025',
tag:'Política Pública',
description:'O Plansan define 18 estratégias e 219 iniciativas para combater a insegurança alimentar,com foco em povos indígenas,populações da Amazônia e moradores de rua.',
url:'https://www.gov.br/secom/pt-br/assuntos/noticias/2025/03/plano-de-seguranca-alimentar-e-nutricional-projeta-que-brasil-saira-do-mapa-da-fome-ate-2026'
},
{
title:'Brasil como protagonista na segurança alimentar e energética mundial',
source:'Canal Rural/FIAP 2026',
date:'Junho 2026',
tag:'Agronegócio',
description:'O Fórum Internacional da Agropecuária(FIAP 2026)debate o papel estratégico do Brasil como fornecedor global de alimentos e soluções sustentáveis,integrando tecnologia e produção rural.',
url:'https://girodoboi.canalrural.com.br/pecuaria/fiap-2026-discute-o-papel-do-brasil-na-seguranca-alimentar-e-energetica-mundial/'
},
{
title:'Plano "Alimento no Prato" estrutura abastecimento alimentar 2025–2028',
source:'Agência Gov',
date:'Outubro 2024',
tag:'Política Pública',
description:'O Planaab foi lançado pelo presidente Lula no Dia Mundial da Alimentação,focando populações vulneráveis,fortalecimento da agricultura familiar e distribuição sustentável de alimentos.',
url:'https://agenciagov.ebc.com.br/noticias/202410/plano-nacional-de-abastecimento-alimentar-201calimento-no-prato201d-garante-seguranca-alimentar-e-sustentabilidade'
},
{
title:'Mais de 1 bilhão de toneladas de alimentos desperdiçadas por ano',
source:'ONU Brasil/PNUMA',
date:'2024',
tag:'Desperdício',
description:'O Índice Global de Desperdício de Alimentos 2024 do PNUMA aponta que o desperdício representa entre 8%e 10%das emissões globais de gases de efeito estufa — quase 5 vezes mais que o setor aéreo.',
url:'https://brasil.un.org/pt-br/264460-%C3%ADndice-de-desperd%C3%ADcio-de-alimentos-2024'
},
{
title:'Agricultura de precisão e bioeconomia:caminhos para a Amazônia sustentável',
source:'RealTime1',
date:'Fevereiro 2026',
tag:'Tecnologia',
description:'Tecnologias de monitoramento via satélite e projetos de manejo florestal sustentável surgem como alternativas à expansão predatória,posicionando o Brasil como líder em produção verde.',
url:'https://realtime1.com.br/commodities-seguranca-alimentar-2026-brasil-amazonia/'
}
];
const newsContainer=document.getElementById('newsContainer');
if(newsContainer){
newsContainer.innerHTML=newsData.map(item=>`
<article class="news-card">
<div class="news-card-body">
<span class="feed-tag">${item.tag}</span>
<div class="news-source"><i class="fa-solid fa-newspaper"></i>${item.source}·<span class="news-date">${item.date}</span></div>
<h3>${item.title}</h3>
<p>${item.description}</p>
<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-source">
<i class="fa-solid fa-arrow-up-right-from-square"></i>Ver fonte
</a>
</div>
</article>
`).join('');
}
const quizData=[
{
q:'O que é segurança alimentar?',
options:[
'Acesso regular a alimentos de qualidade para todos',
'Apenas armazenar alimentos por muito tempo',
'Comer somente alimentos industrializados',
'Reduzir a produção agrícola'
],
correct:0
},
{
q:'Qual prática agrícola ajuda a preservar o solo?',
options:[
'Queimadas frequentes',
'Monocultura intensiva',
'Rotação de culturas e plantio direto',
'Desmatamento'
],
correct:2
},
{
q:'Como os drones contribuem para a agricultura sustentável?',
options:[
'Aumentando o uso de agrotóxicos',
'Mapeando lavouras e aplicando insumos com precisão',
'Substituindo todos os agricultores',
'Servindo apenas para fotografia'
],
correct:1
},
{
q:'Quanto dos alimentos produzidos no mundo é desperdiçado?',
options:['5%','10%','Cerca de 30%','80%'],
correct:2
},
{
q:'O que caracteriza a agricultura de precisão?',
options:[
'Uso de dados,sensores e GPS para otimizar a produção',
'Plantio sem nenhum planejamento',
'Uso exclusivo de ferramentas manuais',
'Produção apenas em estufas'
],
correct:0
}
];
const quizBox=document.getElementById('quizBox');
let qIndex=0,score=0;
const renderQuestion=()=>{
const item=quizData[qIndex];
const pct=(qIndex/quizData.length)*100;
quizBox.innerHTML=`
<div class="quiz-progress"><span style="width:${pct}%"></span></div>
<p style="color:var(--muted);margin-bottom:.5rem;">Pergunta ${qIndex+1}de ${quizData.length}</p>
<h3 class="quiz-q">${item.q}</h3>
<div class="quiz-opts">
${item.options.map((o,i)=>`<button class="quiz-opt" data-i="${i}">${o}</button>`).join('')}
</div>
`;
quizBox.querySelectorAll('.quiz-opt').forEach(btn=>{
btn.addEventListener('click',()=>handleAnswer(btn,item.correct));
});
};
const handleAnswer=(btn,correctIdx)=>{
const chosen=+btn.dataset.i;
const opts=quizBox.querySelectorAll('.quiz-opt');
opts.forEach(o=>o.disabled=true);
if(chosen===correctIdx){btn.classList.add('correct');score++;}
else{
btn.classList.add('wrong');
opts[correctIdx].classList.add('correct');
}
setTimeout(()=>{
qIndex++;
if(qIndex<quizData.length)renderQuestion();
else renderResult();
},1100);
};
const renderResult=()=>{
let msg='';
const pct=(score/quizData.length)*100;
if(pct===100)msg='Excelente!Você é um(a)verdadeiro(a)defensor(a)do agro sustentável!🌱';
else if(pct>=60)msg='Muito bem!Você entende a importância da segurança alimentar!🌾';
else msg='Continue aprendendo!O futuro do planeta precisa de você. 🌍';
quizBox.innerHTML=`
<div class="quiz-result">
<i class="fa-solid fa-award" style="font-size:3rem;color:var(--green-2);margin-bottom:1rem;"></i>
<p style="color:var(--muted);">Sua pontuação</p>
<div class="score">${score}/${quizData.length}</div>
<h3>${msg}</h3>
<button class="btn btn-primary" id="quizRestart" style="margin-top:1.5rem;">
<i class="fa-solid fa-rotate-right"></i>Refazer Quiz
</button>
</div>
`;
document.getElementById('quizRestart').addEventListener('click',()=>{
qIndex=0;score=0;renderQuestion();
});
};
renderQuestion();