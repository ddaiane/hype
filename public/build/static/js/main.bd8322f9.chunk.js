(this["webpackJsonphype-front"]=this["webpackJsonphype-front"]||[]).push([[0],{102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(20),o=c.n(s),r=(c(76),c(22)),i=c(9),l=(c(23),c(24)),j=c(6),d=c(68),b=c(71),h=c(69),O=c(47),x=c(65),u=c.n(x).a.create({baseURL:"https://teste-hype.herokuapp.com/api"}),m=(c(96),c(1));var p=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),o=Object(j.a)(s,2),r=o[0],l=void 0!==r&&r,x=o[1],p=Object(i.f)();function g(e){alert(e)}return Object(a.useEffect)((function(){u.get("/predios").then((function(e){n(e.data)})).catch((function(e){alert("Ocorreu um erro ao buscar predios")})),x(!1)}),[l]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(d.a,{bordered:!0,responsive:"sm",id:"tabela",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{id:"tableHead",children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Sigla"}),Object(m.jsx)(b.a,{overlay:Object(m.jsx)(h.a,{children:"Clique no nome do pr\xe9dio para ver os apartamentos associados a ele!"}),children:Object(m.jsx)("th",{children:"Nome"})}),Object(m.jsx)("th",{children:"Endere\xe7o"}),Object(m.jsx)("th",{children:"Cidade"}),Object(m.jsx)("th",{children:"Estado"}),Object(m.jsx)("th",{children:"Unidades"}),Object(m.jsx)("th",{children:"Deletar"}),Object(m.jsx)("th",{children:"Adicionar apartamento"})]})}),Object(m.jsx)("tbody",{id:"tableBody",children:c.map((function(e,t,c){return Object(m.jsxs)("tr",{className:"item",children:[Object(m.jsxs)("td",{children:[" ",t+1," "]}),Object(m.jsxs)("td",{className:"clicavel",onClick:function(){return g(e.sigla)},children:[" ",e.sigla," "]}),Object(m.jsx)("td",{className:"clicavel",onClick:function(){return g(e.sigla)},children:e.nome}),Object(m.jsx)("td",{children:e.endereco}),Object(m.jsx)("td",{children:e.cidade}),Object(m.jsx)("td",{children:e.estado}),Object(m.jsx)("td",{children:e.apartamentos}),Object(m.jsx)("td",{className:"clicavel icone",onClick:function(){return t=e.sigla,c=e.nome,void(window.confirm("Voc\xea tem certeza que deseja deletar o pr\xe9dio ".concat(c," do sistema?"))&&u.delete("/predios/".concat(t)).then((function(e){x(!0),alert("O pr\xe9dio ".concat(e.data," foi deletado do sistema"))})).catch((function(e){alert(e.response.data.message)})));var t,c},children:Object(m.jsx)(O.b,{})}),Object(m.jsx)("td",{className:"clicavel icone",onClick:function(){return p.push("cadastra-apartamento/".concat(e.sigla))},children:Object(m.jsx)(O.a,{})})]})}))})]})})},g=c(54),f=c(25);c(102);var v=function(){var e=Object(i.f)();return Object(m.jsx)(g.a,{collapseOnSelect:!0,expand:"md",variant:"dark",className:"nav mx-auto",children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(g.a.Brand,{className:"clicavel",onClick:function(){return e.push("/")},children:Object(m.jsx)("img",{src:"https://hypeempreendimentos.com.br/img/icons/icon2.png",height:"55",className:"d-inline-block align-top",alt:"logo Hype Empreendimentos"})}),Object(m.jsx)(f.a,{className:"botao",onClick:function(){return e.push("/cadastra-predio/")},children:"Novo pr\xe9dio"})]})})},C=(c(103),c(27));var N=function(){function e(e){alert(e)}return Object(m.jsxs)(C.a,{children:[Object(m.jsxs)(C.a.Item,{interval:3e3,children:[Object(m.jsx)("img",{className:"d-block w-100 slide",src:"https://hypeempreendimentos.com.br/wp/wp-content/uploads/2019/10/1.-Fachada-1_Easy-Resize.com_.jpg",alt:"Imagem pr\xe9dio Move City Habitat"}),Object(m.jsx)(C.a.Caption,{children:Object(m.jsx)("article",{className:"captionCarousel",onClick:function(){return e("MOVE")},children:Object(m.jsx)("h1",{children:"Move City Habitat"})})})]}),Object(m.jsxs)(C.a.Item,{interval:3e3,children:[Object(m.jsx)("img",{className:"d-block w-100 slide",src:"https://hypeempreendimentos.com.br/wp/wp-content/uploads/2021/02/Fachada-Noturna.jpg",alt:"Second slide"}),Object(m.jsx)(C.a.Caption,{children:Object(m.jsx)("article",{className:"captionCarousel",onClick:function(){return e("KEEP")},children:Object(m.jsx)("h1",{children:"Keep Urban Habitat"})})})]}),Object(m.jsxs)(C.a.Item,{interval:3e3,children:[Object(m.jsx)("img",{className:"d-block w-100 slide",src:"https://hypeempreendimentos.com.br/wp/wp-content/uploads/2019/06/1.jpg",alt:"Third slide"}),Object(m.jsx)(C.a.Caption,{children:Object(m.jsx)("article",{className:"captionCarousel",onClick:function(){return e("KLEE")},children:Object(m.jsx)("h1",{children:"Klee Urban Habitat"})})})]})]})};c(104);var P=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(N,{}),Object(m.jsx)("article",{className:"boxTitulo",children:Object(m.jsx)("h1",{className:"titulo",children:"Pr\xe9dios"})}),Object(m.jsx)(l.a,{fluid:"md",children:Object(m.jsx)(p,{})})]})},S=c(10),y=c(2),E=c(7),k=c(31),A=c(17);c(105);var L=function(){var e=Object(i.f)(),t=Object(a.useState)({nome:null,endereco:null,cidade:null,estado:"PR",sigla:null,apartamentos:null}),c=Object(j.a)(t,2),n=c[0],s=c[1];function o(e){s((function(t){return Object(y.a)(Object(y.a)({},t),{},Object(S.a)({},e.target.name,e.target.value))}))}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"boxForm mx-auto",children:[Object(m.jsxs)(E.a,{children:[Object(m.jsxs)(E.a.Group,{className:"mb-3",controlId:"formPredioNome",children:[Object(m.jsx)(E.a.Label,{children:"Nome do pr\xe9dio"}),Object(m.jsx)(E.a.Control,{required:!0,type:"text",name:"nome",onChange:o})]}),Object(m.jsxs)(E.a.Group,{className:"mb-3",controlId:"formPredioEndereco",children:[Object(m.jsx)(E.a.Label,{children:"Endere\xe7o"}),Object(m.jsx)(E.a.Control,{required:!0,type:"text",name:"endereco",onChange:o})]}),Object(m.jsxs)(k.a,{children:[Object(m.jsx)(A.a,{xs:8,children:Object(m.jsxs)(E.a.Group,{className:"mb-3",controlId:"formPredioCidade",children:[Object(m.jsx)(E.a.Label,{children:"Cidade"}),Object(m.jsx)(E.a.Control,{required:!0,type:"text",name:"cidade",onChange:o})]})}),Object(m.jsx)(A.a,{children:Object(m.jsxs)(E.a.Group,{className:"mb-3",controlId:"formPredioEstado",children:[Object(m.jsx)(E.a.Label,{children:"Estado"}),Object(m.jsxs)(E.a.Select,{name:"estado",onChange:o,children:[Object(m.jsx)("option",{children:"Selecione"}),Object(m.jsx)("option",{value:"AC",children:"AC"}),Object(m.jsx)("option",{value:"AL",children:"AL"}),Object(m.jsx)("option",{value:"AP",children:"AP"}),Object(m.jsx)("option",{value:"AM",children:"AM"}),Object(m.jsx)("option",{value:"BA",children:"BA"}),Object(m.jsx)("option",{value:"CE",children:"CE"}),Object(m.jsx)("option",{value:"DF",children:"DF"}),Object(m.jsx)("option",{value:"ES",children:"ES"}),Object(m.jsx)("option",{value:"GO",children:"GO"}),Object(m.jsx)("option",{value:"MA",children:"MA"}),Object(m.jsx)("option",{value:"MT",children:"MT"}),Object(m.jsx)("option",{value:"MS",children:"MS"}),Object(m.jsx)("option",{value:"MG",children:"MG"}),Object(m.jsx)("option",{value:"PA",children:"PA"}),Object(m.jsx)("option",{value:"PB",children:"PB"}),Object(m.jsx)("option",{value:"PR",children:"PR"}),Object(m.jsx)("option",{value:"PE",children:"PE"}),Object(m.jsx)("option",{value:"PI",children:"PI"}),Object(m.jsx)("option",{value:"RJ",children:"RJ"}),Object(m.jsx)("option",{value:"RN",children:"RN"}),Object(m.jsx)("option",{value:"RS",children:"RS"}),Object(m.jsx)("option",{value:"RO",children:"RO"}),Object(m.jsx)("option",{value:"RR",children:"RR"}),Object(m.jsx)("option",{value:"SC",children:"SC"}),Object(m.jsx)("option",{value:"SP",children:"SP"}),Object(m.jsx)("option",{value:"SE",children:"SE"}),Object(m.jsx)("option",{value:"TO",children:"TO"})]})]})})]}),Object(m.jsxs)(k.a,{children:[Object(m.jsx)(A.a,{xs:8,children:Object(m.jsxs)(E.a.Group,{className:"mb-3",controlId:"formPredioSigla",children:[Object(m.jsx)(E.a.Label,{children:"Sigla"}),Object(m.jsx)(E.a.Control,{required:!0,type:"text",name:"sigla",onChange:o})]})}),Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(E.a.Group,{className:"mb-3",controlId:"formPredioUnidades",children:[Object(m.jsx)(E.a.Label,{children:"Unidades"}),Object(m.jsx)(E.a.Control,{required:!0,type:"number",name:"apartamentos",onChange:o})]})})]}),Object(m.jsx)(E.a.Text,{muted:!0,children:"* Todos os campos s\xe3o obrigat\xf3rios."}),Object(m.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(m.jsx)(f.a,{className:"botao",size:"lg",onClick:function(){n.nome&&n.endereco&&n.cidade&&n.estado&&n.sigla&&n.apartamentos?u.post("/predios/",n).then((function(t){alert("Pr\xe9dio ".concat(t.data[0].nome," em ").concat(t.data[0].cidade,"-").concat(t.data[0].estado," criado com sucesso!")),e.push("/")})).catch((function(e){console.log(e)})):alert("Todos campos s\xe3o obrigat\xf3rios!")},children:"Cadastrar Novo Pr\xe9dio"})})]}),Object(m.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(m.jsx)(f.a,{className:"botao",size:"lg",onClick:function(){return e.push("/")},children:"Cancelar e voltar para home"})})]})})};c(106);var R=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(N,{}),Object(m.jsx)("article",{className:"boxTitulo",children:Object(m.jsx)("h1",{className:"titulo",children:"Novo Pr\xe9dio"})}),Object(m.jsx)(l.a,{fluid:"sm",children:Object(m.jsx)(L,{})})]})};var F=function(){var e=Object(i.f)(),t=Object(i.g)().sigla,c=Object(a.useState)({codigo:null,quartos:null,banheiros:null,suites:null,area_total:null,sigla:t}),n=Object(j.a)(c,2),s=n[0],o=n[1];function r(e){o((function(t){return Object(y.a)(Object(y.a)({},t),{},Object(S.a)({},e.target.name,e.target.value))}))}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"boxForm mx-auto",children:[Object(m.jsxs)(E.a,{children:[Object(m.jsx)(k.a,{children:Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(E.a.Group,{className:"mb-3 mx-auto",children:[Object(m.jsx)(E.a.Label,{children:"C\xf3digo do Apartamento"}),Object(m.jsx)(E.a.Control,{type:"text",name:"codigo",onChange:r})]})})}),Object(m.jsxs)(k.a,{children:[Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(E.a.Group,{className:"mb-3",children:[Object(m.jsx)(E.a.Label,{children:"Quartos"}),Object(m.jsx)(E.a.Control,{type:"number",name:"quartos",onChange:r})]})}),Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(E.a.Group,{className:"mb-3",children:[Object(m.jsx)(E.a.Label,{children:"Banheiros"}),Object(m.jsx)(E.a.Control,{type:"number",name:"banheiros",onChange:r})]})}),Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(E.a.Group,{className:"mb-3",children:[Object(m.jsx)(E.a.Label,{children:"Su\xedtes"}),Object(m.jsx)(E.a.Control,{type:"number",name:"suites",onChange:r})]})})]}),Object(m.jsx)(k.a,{children:Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(E.a.Group,{className:"mb-3 mx-auto",children:[Object(m.jsx)(E.a.Label,{children:"\xc1rea total do apartamento"}),Object(m.jsx)(E.a.Control,{type:"number",name:"area_total",onChange:r})]})})}),Object(m.jsx)(E.a.Text,{muted:!0,children:"* Todos os campos s\xe3o obrigat\xf3rios."})]}),Object(m.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(m.jsx)(f.a,{className:"botao",size:"lg",onClick:function(){console.log(s),s.codigo&&s.quartos&&s.banheiros&&s.suites&&s.sigla&&s.area_total?u.post("/apartamentos/",s).then((function(t){alert("Apartamento c\xf3digo ".concat(t.data[0].codigo," criado com sucesso no pr\xe9dio ").concat(t.data[0].predio,"!")),e.push("/")})).catch((function(e){console.log(e)})):alert("Todos campos s\xe3o obrigat\xf3rios!")},children:"Cadastrar Novo Apartamento"})}),Object(m.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(m.jsx)(f.a,{className:"botao",size:"lg",onClick:function(){return e.push("/")},children:"Cancelar e voltar para home"})})]})})};var T=function(){var e=Object(i.g)().sigla,t=Object(a.useState)({}),c=Object(j.a)(t,2),n=c[0],s=c[1],o=Object(i.f)();return Object(a.useEffect)((function(){u.get("/predios/".concat(e)).then((function(e){s(e.data[0])})).catch((function(e){alert("Sigla do pr\xe9dio informada n\xe3o existe"),o.push("/")}))}),[e]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(N,{}),Object(m.jsx)("article",{className:"boxTitulo",children:Object(m.jsxs)("h1",{className:"titulo",children:["Novo apartamento no pr\xe9dio ",n.nome]})}),Object(m.jsx)(l.a,{fluid:"sm",children:Object(m.jsx)(F,{})})]})};function G(){return Object(m.jsx)(r.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/",exact:!0,component:P}),Object(m.jsx)(i.a,{path:"/cadastra-predio",component:R}),Object(m.jsx)(i.a,{path:"/cadastra-apartamento/:sigla",component:T}),Object(m.jsx)(i.a,{path:"*",exact:!0,component:P})]})})}var I=function(){return Object(m.jsx)(r.a,{children:Object(m.jsx)(G,{})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,112)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),s(e),o(e)}))};o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),M()},76:function(e,t,c){},96:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.bd8322f9.chunk.js.map