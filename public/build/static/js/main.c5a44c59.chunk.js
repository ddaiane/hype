(this["webpackJsonphype-front"]=this["webpackJsonphype-front"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(24),o=a.n(s),r=(a(76),a(15)),i=a(9),j=(a(21),a(20)),l=a(6),d=a(45),b=a(71),h=a(69),O=a(37),u=a(66),x=a.n(u).a.create({baseURL:"https://teste-hype.herokuapp.com/api"}),m=(a(96),a(0));var p=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),o=Object(l.a)(s,2),r=o[0],j=void 0!==r&&r,u=o[1],p=Object(i.f)();function g(e){p.push("/apartamentos-predio/".concat(e))}return Object(c.useEffect)((function(){x.get("/predios").then((function(e){n(e.data)})).catch((function(e){alert("Ocorreu um erro ao buscar predios")})),u(!1)}),[j]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(d.a,{bordered:!0,responsive:"sm",id:"tabela",className:"my-5",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{id:"tableHead",children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Sigla"}),Object(m.jsx)(b.a,{overlay:Object(m.jsx)(h.a,{children:"Clique no nome do pr\xe9dio para ver os apartamentos associados a ele!"}),children:Object(m.jsx)("th",{children:"Nome"})}),Object(m.jsx)("th",{children:"Endere\xe7o"}),Object(m.jsx)("th",{children:"Cidade"}),Object(m.jsx)("th",{children:"Estado"}),Object(m.jsxs)("th",{children:["Unidades",Object(m.jsx)("br",{}),"no pr\xe9dio"]}),Object(m.jsxs)("th",{children:["Unidades",Object(m.jsx)("br",{}),"cadastradas"]}),Object(m.jsx)("th",{children:"Deletar"}),Object(m.jsxs)("th",{children:["Adicionar",Object(m.jsx)("br",{}),"apartamento"]})]})}),Object(m.jsx)("tbody",{id:"tableBody",children:a.map((function(e,t,a){return Object(m.jsxs)("tr",{className:"item",children:[Object(m.jsxs)("td",{children:[" ",t+1," "]}),Object(m.jsxs)("td",{className:"clicavel",onClick:function(){return g(e.sigla)},children:[" ",e.sigla," "]}),Object(m.jsx)("td",{className:"clicavel",onClick:function(){return g(e.sigla)},children:e.nome}),Object(m.jsx)("td",{children:e.endereco}),Object(m.jsx)("td",{children:e.cidade}),Object(m.jsx)("td",{children:e.estado}),Object(m.jsx)("td",{children:e.apartamentos}),Object(m.jsxs)("td",{children:[" ",e.unidadesCadastradas?e.unidadesCadastradas:"0"," "]}),Object(m.jsx)("td",{className:"clicavel icone",onClick:function(){return t=e.sigla,a=e.nome,void(window.confirm("Voc\xea tem certeza que deseja deletar o pr\xe9dio ".concat(a," do sistema?"))&&x.delete("/predios/".concat(t)).then((function(e){u(!0),alert("O pr\xe9dio ".concat(e.data," foi deletado do sistema"))})).catch((function(e){alert("Pr\xe9dio n\xe3o pode ser deletado. \nMotivo: ".concat(e.response.data.message))})));var t,a},children:Object(m.jsx)(O.b,{})}),Object(m.jsx)("td",{className:"clicavel icone",onClick:function(){return p.push("cadastra-apartamento/".concat(e.sigla))},children:Object(m.jsx)(O.a,{})})]})}))})]})})},g=a(55),f=a(19);a(102);var v=function(){var e=Object(i.f)();return Object(m.jsx)(g.a,{collapseOnSelect:!0,expand:"md",variant:"dark",className:"nav mx-auto",children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(g.a.Brand,{className:"clicavel",onClick:function(){return e.push("/")},children:Object(m.jsx)("img",{src:"https://hypeempreendimentos.com.br/img/icons/icon2.png",height:"55",className:"d-inline-block align-top",alt:"logo Hype Empreendimentos"})}),Object(m.jsx)(f.a,{className:"botao",onClick:function(){return e.push("/cadastra-predio/")},children:"Novo pr\xe9dio"})]})})},C=(a(103),a(27));var N=function(){var e=Object(i.f)();function t(t){e.push("/apartamentos-predio/".concat(t))}return Object(m.jsxs)(C.a,{children:[Object(m.jsxs)(C.a.Item,{interval:3e3,children:[Object(m.jsx)("img",{className:"d-block w-100 slide",src:"https://hypeempreendimentos.com.br/wp/wp-content/uploads/2019/10/1.-Fachada-1_Easy-Resize.com_.jpg",alt:"Imagem pr\xe9dio Move City Habitat"}),Object(m.jsx)(C.a.Caption,{children:Object(m.jsx)("article",{className:"captionCarousel",onClick:function(){return t("move")},children:Object(m.jsx)("h1",{children:"Move City Habitat"})})})]}),Object(m.jsxs)(C.a.Item,{interval:3e3,children:[Object(m.jsx)("img",{className:"d-block w-100 slide",src:"https://hypeempreendimentos.com.br/wp/wp-content/uploads/2021/02/Fachada-Noturna.jpg",alt:"Second slide"}),Object(m.jsx)(C.a.Caption,{children:Object(m.jsx)("article",{className:"captionCarousel",onClick:function(){return t("keep")},children:Object(m.jsx)("h1",{children:"Keep Urban Habitat"})})})]}),Object(m.jsxs)(C.a.Item,{interval:3e3,children:[Object(m.jsx)("img",{className:"d-block w-100 slide",src:"https://hypeempreendimentos.com.br/wp/wp-content/uploads/2019/06/1.jpg",alt:"Third slide"}),Object(m.jsx)(C.a.Caption,{children:Object(m.jsx)("article",{className:"captionCarousel",onClick:function(){return t("klee")},children:Object(m.jsx)("h1",{children:"Klee Urban Habitat"})})})]})]})};a(104);var S=function(){return Object(i.f)(),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(N,{}),Object(m.jsx)("article",{className:"boxTitulo",children:Object(m.jsx)("h1",{className:"titulo",children:"Pr\xe9dios"})}),Object(m.jsx)(j.a,{fluid:"md",children:Object(m.jsx)(p,{})})]})},y=a(10),P=a(2),k=a(7),E=a(31),A=a(18);a(105);var F=function(){var e=Object(i.f)(),t=Object(c.useState)({nome:null,endereco:null,cidade:null,estado:"PR",sigla:null,apartamentos:null}),a=Object(l.a)(t,2),n=a[0],s=a[1];function o(e){s((function(t){return Object(P.a)(Object(P.a)({},t),{},Object(y.a)({},e.target.name,e.target.value))}))}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"boxForm mx-auto",children:[Object(m.jsxs)(k.a,{children:[Object(m.jsxs)(k.a.Group,{className:"mb-3",controlId:"formPredioNome",children:[Object(m.jsx)(k.a.Label,{children:"Nome do pr\xe9dio"}),Object(m.jsx)(k.a.Control,{required:!0,type:"text",name:"nome",onChange:o})]}),Object(m.jsxs)(k.a.Group,{className:"mb-3",controlId:"formPredioEndereco",children:[Object(m.jsx)(k.a.Label,{children:"Endere\xe7o"}),Object(m.jsx)(k.a.Control,{required:!0,type:"text",name:"endereco",onChange:o})]}),Object(m.jsxs)(E.a,{children:[Object(m.jsx)(A.a,{xs:8,children:Object(m.jsxs)(k.a.Group,{className:"mb-3",controlId:"formPredioCidade",children:[Object(m.jsx)(k.a.Label,{children:"Cidade"}),Object(m.jsx)(k.a.Control,{required:!0,type:"text",name:"cidade",onChange:o})]})}),Object(m.jsx)(A.a,{children:Object(m.jsxs)(k.a.Group,{className:"mb-3",controlId:"formPredioEstado",children:[Object(m.jsx)(k.a.Label,{children:"Estado"}),Object(m.jsxs)(k.a.Select,{name:"estado",onChange:o,children:[Object(m.jsx)("option",{children:"Selecione"}),Object(m.jsx)("option",{value:"AC",children:"AC"}),Object(m.jsx)("option",{value:"AL",children:"AL"}),Object(m.jsx)("option",{value:"AP",children:"AP"}),Object(m.jsx)("option",{value:"AM",children:"AM"}),Object(m.jsx)("option",{value:"BA",children:"BA"}),Object(m.jsx)("option",{value:"CE",children:"CE"}),Object(m.jsx)("option",{value:"DF",children:"DF"}),Object(m.jsx)("option",{value:"ES",children:"ES"}),Object(m.jsx)("option",{value:"GO",children:"GO"}),Object(m.jsx)("option",{value:"MA",children:"MA"}),Object(m.jsx)("option",{value:"MT",children:"MT"}),Object(m.jsx)("option",{value:"MS",children:"MS"}),Object(m.jsx)("option",{value:"MG",children:"MG"}),Object(m.jsx)("option",{value:"PA",children:"PA"}),Object(m.jsx)("option",{value:"PB",children:"PB"}),Object(m.jsx)("option",{value:"PR",children:"PR"}),Object(m.jsx)("option",{value:"PE",children:"PE"}),Object(m.jsx)("option",{value:"PI",children:"PI"}),Object(m.jsx)("option",{value:"RJ",children:"RJ"}),Object(m.jsx)("option",{value:"RN",children:"RN"}),Object(m.jsx)("option",{value:"RS",children:"RS"}),Object(m.jsx)("option",{value:"RO",children:"RO"}),Object(m.jsx)("option",{value:"RR",children:"RR"}),Object(m.jsx)("option",{value:"SC",children:"SC"}),Object(m.jsx)("option",{value:"SP",children:"SP"}),Object(m.jsx)("option",{value:"SE",children:"SE"}),Object(m.jsx)("option",{value:"TO",children:"TO"})]})]})})]}),Object(m.jsxs)(E.a,{children:[Object(m.jsx)(A.a,{xs:8,children:Object(m.jsxs)(k.a.Group,{className:"mb-3",controlId:"formPredioSigla",children:[Object(m.jsx)(k.a.Label,{children:"Sigla"}),Object(m.jsx)(k.a.Control,{required:!0,type:"text",name:"sigla",onChange:o})]})}),Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(k.a.Group,{className:"mb-3",controlId:"formPredioUnidades",children:[Object(m.jsx)(k.a.Label,{children:"Unidades"}),Object(m.jsx)(k.a.Control,{required:!0,type:"number",name:"apartamentos",onChange:o})]})})]}),Object(m.jsx)(k.a.Text,{muted:!0,children:"* Todos os campos s\xe3o obrigat\xf3rios."}),Object(m.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(m.jsx)(f.a,{className:"botao",size:"lg",onClick:function(){n.nome&&n.endereco&&n.cidade&&n.estado&&n.sigla&&n.apartamentos?x.post("/predios/",n).then((function(t){alert("Pr\xe9dio ".concat(t.data[0].nome," em ").concat(t.data[0].cidade,"-").concat(t.data[0].estado," criado com sucesso!")),e.push("/")})).catch((function(e){alert("Erro no cadastro de novo pr\xe9dio.\nMotivo: ".concat(e.response.data.message))})):alert("Todos campos s\xe3o obrigat\xf3rios!")},children:"Cadastrar Novo Pr\xe9dio"})})]}),Object(m.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(m.jsx)(f.a,{className:"botaoCancel",size:"lg",onClick:function(){return e.push("/")},children:"Cancelar e voltar para home"})})]})})};a(106);var I=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(N,{}),Object(m.jsx)("article",{className:"boxTitulo",children:Object(m.jsx)("h1",{className:"titulo",children:"Novo Pr\xe9dio"})}),Object(m.jsx)(j.a,{fluid:"sm",children:Object(m.jsx)(F,{})})]})};var M=function(){var e=Object(i.f)(),t=Object(i.g)().sigla,a=Object(c.useState)({codigo:null,quartos:null,banheiros:null,suites:null,area_total:null,sigla:t}),n=Object(l.a)(a,2),s=n[0],o=n[1];function r(e){o((function(t){return Object(P.a)(Object(P.a)({},t),{},Object(y.a)({},e.target.name,e.target.value))}))}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"boxForm mx-auto",children:[Object(m.jsxs)(k.a,{children:[Object(m.jsx)(E.a,{children:Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(k.a.Group,{className:"mb-3 mx-auto",children:[Object(m.jsx)(k.a.Label,{children:"C\xf3digo do Apartamento"}),Object(m.jsx)(k.a.Control,{type:"text",name:"codigo",onChange:r})]})})}),Object(m.jsxs)(E.a,{children:[Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(k.a.Group,{className:"mb-3",children:[Object(m.jsx)(k.a.Label,{children:"Quartos"}),Object(m.jsx)(k.a.Control,{type:"number",name:"quartos",onChange:r})]})}),Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(k.a.Group,{className:"mb-3",children:[Object(m.jsx)(k.a.Label,{children:"Banheiros"}),Object(m.jsx)(k.a.Control,{type:"number",name:"banheiros",onChange:r})]})}),Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(k.a.Group,{className:"mb-3",children:[Object(m.jsx)(k.a.Label,{children:"Su\xedtes"}),Object(m.jsx)(k.a.Control,{type:"number",name:"suites",onChange:r})]})})]}),Object(m.jsx)(E.a,{children:Object(m.jsx)(A.a,{xs:4,children:Object(m.jsxs)(k.a.Group,{className:"mb-3 mx-auto",children:[Object(m.jsx)(k.a.Label,{children:"\xc1rea total do apartamento"}),Object(m.jsx)(k.a.Control,{type:"number",name:"area_total",onChange:r})]})})}),Object(m.jsx)(k.a.Text,{muted:!0,children:"* Todos os campos s\xe3o obrigat\xf3rios."})]}),Object(m.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(m.jsx)(f.a,{className:"botao",size:"lg",onClick:function(){s.codigo&&s.quartos&&s.banheiros&&s.suites&&s.sigla&&s.area_total?parseInt(s.area_total)<=1||parseInt(s.quartos)<0||parseInt(s.suites)<0||parseInt(s.banheiros)<0?alert("Valores inv\xe1lidos! \n- \xc1rea total deve ser maior que 1; \n- Quartos, banheiros e su\xedtes devem ter valores positivos."):x.post("/apartamentos/",s).then((function(a){alert("Apartamento c\xf3digo ".concat(a.data[0].codigo," criado com sucesso no pr\xe9dio ").concat(a.data[0].predio,"!")),e.push("../apartamentos-predio/".concat(t))})).catch((function(e){alert("Erro no cadastro de novo apartamento.\nMotivo: ".concat(e.response.data.message))})):alert("Todos campos s\xe3o obrigat\xf3rios!")},children:"Cadastrar Novo Apartamento"})}),Object(m.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(m.jsx)(f.a,{className:"botaoCancel",size:"lg",onClick:function(){return e.push("/")},children:"Cancelar e voltar para home"})})]})})};var R=function(){var e=Object(i.g)().sigla,t=Object(c.useState)({}),a=Object(l.a)(t,2),n=a[0],s=a[1],o=Object(i.f)();return Object(c.useEffect)((function(){x.get("/predios/".concat(e)).then((function(e){s(e.data[0])})).catch((function(e){alert("Sigla do pr\xe9dio informada n\xe3o existe"),o.push("/")}))}),[e]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(N,{}),Object(m.jsx)("article",{className:"boxTitulo",children:Object(m.jsxs)("h1",{className:"titulo",children:["Novo apartamento no pr\xe9dio ",n.nome]})}),Object(m.jsx)(j.a,{fluid:"sm",children:Object(m.jsx)(M,{})})]})};var T=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),o=Object(l.a)(s,2),r=o[0],j=void 0!==r&&r,b=o[1],h=Object(i.f)(),u=Object(i.g)().sigla;return Object(c.useEffect)((function(){x.get("/apartamentos/".concat(u)).then((function(e){n(e.data)})).catch((function(e){alert("Ocorreu um erro ao buscar apartamentos"),h.push("/")})),b(!1)}),[j,u]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(d.a,{bordered:!0,responsive:"sm",id:"tabela",className:"my-5",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{id:"tableHead",children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"C\xf3digo"}),Object(m.jsx)("th",{children:"Quartos"}),Object(m.jsx)("th",{children:"Banheiros"}),Object(m.jsx)("th",{children:"Su\xedtes"}),Object(m.jsx)("th",{children:"\xc1rea"}),Object(m.jsx)("th",{children:"Deletar"})]})}),Object(m.jsx)("tbody",{id:"tableBody",children:a.map((function(e,t,a){return Object(m.jsxs)("tr",{className:"item",children:[Object(m.jsxs)("td",{children:[t+1," "]}),Object(m.jsxs)("td",{children:[e.codigo," "]}),Object(m.jsx)("td",{children:e.quartos}),Object(m.jsx)("td",{children:e.banheiros}),Object(m.jsx)("td",{children:e.suites}),Object(m.jsxs)("td",{children:[e.area_total," m\xb2"]}),Object(m.jsx)("td",{className:"clicavel icone",onClick:function(){return function(e,t){window.confirm("Voc\xea tem certeza que deseja deletar o apartamento ".concat(t," do predio ").concat(e,"?"))&&x.delete("/apartamentos/".concat(e,"/").concat(t)).then((function(e){b(!0),alert("O apartamento ".concat(e.data.codigo," foi deletado do predio ").concat(e.data.predio))})).catch((function(e){alert("Pr\xe9dio n\xe3o pode ser deletado. \nMotivo: ".concat(e.response.data.message))}))}(e.predio,e.codigo)},children:Object(m.jsx)(O.b,{})})]})}))})]})})};var L=function(){var e=Object(i.g)().sigla,t=Object(c.useState)({}),a=Object(l.a)(t,2),n=a[0],s=a[1],o=Object(i.f)();return Object(c.useEffect)((function(){x.get("/predios/".concat(e)).then((function(e){s(e.data[0])})).catch((function(e){alert("Sigla do pr\xe9dio informada n\xe3o existe"),o.push("/")}))}),[e]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(N,{}),Object(m.jsx)("article",{className:"boxTitulo",children:Object(m.jsxs)("h1",{className:"titulo",children:["Apartamentos no pr\xe9dio ",n.nome," "]})}),Object(m.jsx)(j.a,{fluid:"md",children:Object(m.jsx)(T,{})}),Object(m.jsxs)(j.a,{fluid:"sm",children:[Object(m.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(m.jsxs)(f.a,{className:"botao",size:"lg",onClick:function(){return o.push("../cadastra-apartamento/".concat(e))},children:["Cadastrar Novo Apartamento no pr\xe9dio ",n.nome]})}),Object(m.jsx)("div",{className:"d-grid gap-2 mt-3",children:Object(m.jsx)(f.a,{className:"botaoCancel",size:"lg",onClick:function(){return o.push("/")},children:"Voltar para home"})})]})]})};function w(){return Object(m.jsx)(r.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/",exact:!0,component:S}),Object(m.jsx)(i.a,{path:"/cadastra-predio",component:I}),Object(m.jsx)(i.a,{path:"/cadastra-apartamento/:sigla",component:R}),Object(m.jsx)(i.a,{path:"/apartamentos-predio/:sigla",component:L}),Object(m.jsx)(i.a,{path:"*",exact:!0,component:S})]})})}var G=function(){return Object(m.jsx)(r.a,{children:Object(m.jsx)(w,{})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),s(e),o(e)}))};o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root")),q()},76:function(e,t,a){},96:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.c5a44c59.chunk.js.map