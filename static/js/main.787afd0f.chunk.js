(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/error2.c4c5098b.gif"},103:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAyUlEQVRYw+2WuxHDIBAFVQptqAXCC90KIS04VHitECpUShmkz4mRTxbybw489vBmNt7VdxiGvr6+X5wxBiWaiXEei1QNeSSWxNOoH7HKlystIzbyvOV5gFrEVwN2z/2NR6AS8eqLdyT/j4DJfi6frEKAJdpEWKKVI3GWWyKdAAlzAAAwB1iiolSi8iU4529XLXYvkzjn9f4DcU4AAOf87g6UxHFOYA66f0MZkYlzKqIqlxHM4VCaxVXkMiKHlGh+Lmh+IOnr66uxC/l3fuTHPGsLAAAAAElFTkSuQmCC"},104:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAZklEQVRYhe2VQQoAIQwDq///s572WExSpSxkjoLJ2EMNY0w3Q+xfyTmdx17IiuVcRgAtp7JRAbYczkcE1HKoYxbDy5wmUH39R9rTPgELWMB74BerWJW4+hmxEk++Y0REzTPGNBERGzqFCxojSITvAAAAAElFTkSuQmCC"},119:function(e,t,n){e.exports=n(156)},155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=n(72),l=n(37),s=n(36),m=n(112),u=n(24),d=n(20),p="FETCH_PKMN_START",f="FETCH_PKMN_SUCCESS",k="FETCH_PKMN_FAILFETCH_PKMN_FAIL",b="LOADING_POKEMONS",g="FETCH_CURRENT_PKMN_START",E="FETCH_CURRENT_PKMN_SUCCESS",v="FETCH_CURRENT_PKMN_FAIL",h="LOADING_CURRENT_PKMN",y="FETCH_EVO_CHAIN_START",C="FETCH_EVO_CHAIN_SUCCESS",x="FETCH_EVO_CHAIN_FAIL",O="FETCH_EDIT_PKMN_START",j="FETCH_EDIT_PKMN_SUCCESS",A="FETCH_EDIT_PKMN_FAIL",T="LOADING_EDIT_PKMN",w="FETCH_ITEMS_START",N="FETCH_ITEMS_SUCCESS",P="FETCH_ITEMS_FAIL",S=function(e,t){return Number.parseFloat(e*t).toFixed(2)},I=function(e,t){return Object(d.a)({},e,t)},_=function(e){var t=e.stats,n=e.EVs,a=e.IVs,r=e.level,o=e.nature;return t.map(function(e){return{baseStat:e.base_stat,name:e.stat.name}}).map(function(t,c){var i=0;if("hp"===t.name)i="shedinja"!==e.name?Math.round((2*t.baseStat+a[c]+n[c]/4)*r/100+r+10):1;else{var l=1;o.inc===t.name?l=1.1:o.dec===t.name&&(l=.9),i=((2*t.baseStat+a[c]+n[c]/4)*r/100+5)*l}return{stat:i.toFixed(0),name:t.name}})},R={pokemons:[],selectedGen:0,selectedPokemonId:"",selectedPokemon:{},pokedexInfo:{},evolutionChain:{},isLoadingPokemons:!1,isLoadingCurrent:!1,fetchPokemonError:!1,fetchCurrentPokemonError:!1,fetchEvoChainError:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,n=I.bind(null,e);switch(t.type){case f:return function(e,t){return Object(d.a)({},e,{isLoadingPokemons:!1,pokemons:Object(u.a)(t)})}(e,t.pokemons);case k:return function(e){return I(e,{isLoadingPokemons:!1,fetchPokemonError:!0})}(e);case"CHANGE_GEN":return n({selectedGen:t.selectedGen});case E:return function(e,t){return I(e,{isLoadingCurrent:!1,selectedPokemonId:t.selectedPokemonId,selectedPokemon:t.selectedPokemon,pokedexInfo:t.pokedexInfo,fetchCurrentPokemonError:!1})}(e,t);case v:return function(e,t){return I(e,{isLoadingCurrent:!1,fetchCurrentPokemonError:!0})}(e);case b:return n({isLoadingPokemons:!0});case h:return n({isLoadingCurrent:!0});case C:return n({evolutionChain:t.evolutionChain});case j:return function(e,t){return Object(d.a)({},e,{editPokemon:Object(d.a)({},e.editPokemon,t.editPokemon)})}(e,t);default:return e}},G={pokemonTeam:[],editPokemon:{}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,n=I.bind(null,e);switch(t.type){case"ADD_TO_TEAM":return function(e,t){var n=_(t);return e.pokemonTeam.length<=6?I(e,{pokemonTeam:[].concat(Object(u.a)(e.pokemonTeam),[Object(d.a)({},t,{id:e.pokemonTeam.length,calculatedStats:n})])}):e}(e,t.addPokemon);case"REMOVE_FROM_TEAM":return function(e,t){return Object(d.a)({},e,{pokemonTeam:Object(u.a)(e.pokemonTeam).filter(function(e){return e.id!==t.id})})}(e,t);case"CHANGE_TEAM_POSITION":return n({pokemonTeam:Object(u.a)(t.newTeam)});case"EDIT_TEAM":return function(e,t){var n=Object(u.a)(e.pokemonTeam);return n.splice(t.index,1,Object(d.a)({},t.edited,{id:t.index})),Object(d.a)({},e,{pokemonTeam:n})}(e,t);default:return e}},L=n(94),M=n(25),D=n.n(M),U=n(16),B=n(57),V=n.n(B),z=[{start:0,end:151},{start:151,end:100},{start:251,end:135},{start:386,end:107},{start:493,end:156},{start:649,end:72},{start:721,end:86}],K=V.a.create({baseURL:"https://pokeapi.co/api/v2/",timeout:5e3,method:"get"}),W=D.a.mark($),Q=D.a.mark(ee),Y=D.a.mark(te),J=D.a.mark(ne),q=D.a.mark(ae),X=D.a.mark(re);function $(e){var t;return D.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(U.b)({type:b});case 3:return n.next=5,Object(U.a)(function(){return K("/pokemon/?limit=".concat(z[e.selectedGen].end,"&offset=").concat(z[e.selectedGen].start)).then(function(e){return e.data}).then(function(e){return e.results})});case 5:return t=n.sent,n.next=8,Object(U.b)({type:f,pokemons:t});case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(U.b)({type:k,error:n.t0});case 14:case"end":return n.stop()}},W,null,[[0,10]])}var Z=function(){var e=Object(L.a)(D.a.mark(function e(t){var n,a,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K("https://pokeapi.co/api/v2/pokemon/"+t.id).then(function(e){return e.data}).then(function(e){return e});case 2:return n=e.sent,a=t.id.replace(/(-[a-z]{3,})?(-x|-y)?$/,""),e.next=6,K("https://pokeapi.co/api/v2/pokemon-species/"+a).then(function(e){return e.data}).then(function(e){return e});case 6:return r=e.sent,e.abrupt("return",{selectedPokemon:n,pokedexInfo:r});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function ee(e){var t,n,a;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(U.b)({type:h});case 3:return r.next=5,Z(e);case 5:return t=r.sent,n=t.selectedPokemon,a=t.pokedexInfo,r.next=10,Object(U.b)({type:y,evoChainURL:a.evolution_chain.url});case 10:return r.next=12,Object(U.b)({type:E,selectedPokemonId:e.id,selectedPokemon:n,pokedexInfo:a});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(0),r.next=18,Object(U.b)({type:v,error:r.t0});case 18:case"end":return r.stop()}},Q,null,[[0,14]])}function te(e){var t,n,a;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(U.b)({type:T});case 3:return r.next=5,Z(e);case 5:return t=r.sent,n=t.selectedPokemon,a=t.pokedexInfo,r.next=10,Object(U.b)({type:j,editPokemon:Object(d.a)({},n,a,{selectedPokemonId:e.id})});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(U.b)({type:A,error:r.t0});case 16:case"end":return r.stop()}},Y,null,[[0,12]])}function ne(e){var t;return D.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(U.a)(function(){return V.a.get(e.evoChainURL)});case 3:return t=n.sent,n.next=6,Object(U.b)({type:C,evolutionChain:t.data});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(U.b)({type:x});case 12:case"end":return n.stop()}},J,null,[[0,8]])}function ae(e){var t;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(U.a)(function(){return K.get("/item-category")});case 3:return t=e.sent,console.log(t),e.next=7,Object(U.b)({type:N,items:t.data});case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,Object(U.b)({type:P});case 13:case"end":return e.stop()}},q,null,[[0,9]])}function re(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(p,$);case 2:return e.next=4,Object(U.c)(g,ee);case 4:return e.next=6,Object(U.c)(y,ne);case 6:return e.next=8,Object(U.c)(O,te);case 8:return e.next=10,Object(U.c)(w,ae);case 10:case"end":return e.stop()}},X)}var oe=re,ce=n(199),ie=n(110),le=n(184),se=n(95),me={fontFamily:"Early_GameBoy",src:"\n      url(".concat(n.n(se).a,") format('woff2')\n    "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"},ue=Object(ie.a)({palette:{primary:{main:"#b40923"},secondary:{main:"#0e10cc"},background:"#010101",backgroundLight:"#444343"},typography:{fontFamily:["Raleway","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},overrides:{MuiCssBaseline:{"@global":{"@font-face":[me]}}}}),de=function(e){return r.a.createElement(le.a,{theme:ue},e.children)},pe=n(22),fe=n(157),ke=n(44),be=n(159),ge=n(186),Ee=n(187),ve=function(e){var t=e.name,n=e.id,a=e.onClick,o=(e.selected,e.children),c=Object(fe.a)(function(e){return{card:{height:"100px",width:"200px",color:"white",margin:e.spacing(),textTransform:"capitalize","&:hover":{cursor:"pointer",backgroundColor:"rgba(255, 255, 255, .3)"},transition:"opacity 100ms ease",border:"2px solid white",display:"flex",justifyItems:"center",alignContent:"center"},image:{margin:"0 auto",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"50% 50%",display:"inline-block"}}})();return r.a.createElement(ge.a,{className:c.card,onClick:function(e){return a(e,t)}},r.a.createElement("img",{className:c.image,src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:t}),r.a.createElement(Ee.a,null,r.a.createElement("p",null,t),r.a.createElement("p",null,o)))},he=function(e){var t=e.items,n=e.onClick,o=e.selected;return Object(a.useMemo)(function(){return t.map(function(e,t){return r.a.createElement(ve,{onClick:n,selected:o,id:(a=e.url,a.match(/\d{1,3}\/$/)[0].split("/")[0]),key:e.name,name:e.name});var a})},[t,n,o])},ye=Object(be.a)(function(e){return{root:{flex:1,maxHeight:"100vh",overflow:"scroll",backgroundColor:e.palette.background,margin:2*e.spacing()},wrapper:Object(pe.a)({padding:4*e.spacing(),display:"flex",flexWrap:"wrap",alignItems:"center"},e.breakpoints.down("sm"),{justifyContent:"center",maxHeight:"50vh"})}}),Ce=r.a.memo(function(e){var t=e.fetchAllPokemons,n=e.selectedGen;Object(a.useEffect)(function(){t(n)},[n,t]);var o=ye(),c=e.isLoading||e.fetchPokemonError?null:r.a.createElement(he,{onClick:function(t,n){return e.history.push("/id="+n)},selected:e.selectedPokemonId,items:e.pokemons});return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.wrapper},c))}),xe=Object(s.b)(function(e){return{pokemons:e.fetchReducer.pokemons,selectedGen:e.fetchReducer.selectedGen,selectedPokemonId:e.fetchReducer.selectedPokemonId,isLoadingCurrent:e.fetchReducer.isLoadingCurrent,fetchPokemonError:e.fetchReducer.fetchPokemonError}},function(e){return{fetchAllPokemons:function(t,n){return e({type:p,selectedGen:t,count:n})}}})(Ce),Oe=n(15),je=Object(be.a)(function(e){return{root:{padding:e.spacing(),margin:e.spacing()+"px auto",border:"2px solid black",flex:1,maxWidth:"40%",color:"white",textTransform:"uppercase",fontFamily:"sans-serif"}}}),Ae=function(e){var t=e.type,n=je(),a="#BFBCB6";switch(t){case"bug":a="#9EAC24";break;case"dark":a="#2A241F";break;case"dragon":a="#6C5CBA";break;case"electric":a="#E19E1E";break;case"fairy":a="#EDA7EF";break;case"fighting":a="#603228";break;case"fire":a="#CE340C";break;case"flying":a="#6879CF";break;case"ghost":a="#444364";break;case"grass":a="#467127";break;case"ground":a="#937D52";break;case"ice":a="#72D6EF";break;case"normal":a="#BFBCB6";break;case"poison":a="#884D88";break;case"psychic":a="#D84C7B";break;case"rock":a="#998444";break;case"steel":a="#827F8C";break;case"water":a="#3C8FDC";break;default:a="white"}return r.a.createElement("div",{className:n.root,style:{backgroundColor:a}},t)},Te=function(e){var t=Object(be.a)(function(t){return{root:{height:"150px",backgroundImage:"url(".concat(e.imageLink,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"50% 50%",margin:"16px 0"}}})();return r.a.createElement("div",{className:t.root,name:e.imageLink})},we=n(188),Ne=Object(fe.a)(function(e){return{abilities:{padding:2*e.spacing(),backgroundColor:e.palette.secondary,margin:e.spacing()},hiddenAbility:{padding:2*e.spacing(),backgroundColor:e.palette.secondary,opacity:.3,margin:e.spacing()}}}),Pe=function(e){var t=e.abilities,n=e.className,a=Ne(),o=t.map(function(e){return e.is_hidden?r.a.createElement(r.a.Fragment,{key:e.ability.name},r.a.createElement("p",null,"Hidden: "),r.a.createElement("div",{className:a.hiddenAbility},e.ability.name)):r.a.createElement("div",{className:a.abilities,key:e.ability.name},e.ability.name)}).reverse();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Abilities"),r.a.createElement("div",{className:n},o))},Se=n(96),Ie=n.n(Se),_e=n(97),Re=n.n(_e),Fe=Object(be.a)(function(e){return{root:{position:"relative",border:"2px solid white",margin:2*e.spacing()+"px 0","&:hover":{cursor:"pointer"}},arrowIcon:{display:"block",position:"absolute",top:"-70%",right:"0",height:"100%",width:"5%",transform:"translate(-50%, 50%)",backgroundImage:"url(".concat(Ie.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"50% 50%"},minusIcon:{display:"block",position:"absolute",top:"-50%",right:"0",height:"100%",width:"5%",transform:"translate(-50%, 50%)",backgroundImage:"url(".concat(Re.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"50% 50%"}}}),Ge=function(e){var t=Fe();return r.a.createElement("div",{className:t.root,onClick:e.onClick},r.a.createElement("h2",null,e.children),e.show?r.a.createElement("span",{className:t.minusIcon}):r.a.createElement("div",{className:t.arrowIcon}))},He=function(e){return function(t){var n=Object(a.useState)(!1),o=Object(Oe.a)(n,2),c=o[0],i=o[1],l=c?r.a.createElement(e,Object.assign({},t,{show:c})):null;return r.a.createElement("div",{key:t.title},r.a.createElement(Ge,{onClick:function(){return i(!c)},show:c},t.title),l)}},Le=r.a.lazy(function(){return n.e(4).then(n.bind(null,205))}),Me=r.a.lazy(function(){return n.e(5).then(n.bind(null,206))}),De=r.a.lazy(function(){return n.e(3).then(n.bind(null,207))}),Ue=r.a.lazy(function(){return n.e(6).then(n.bind(null,208))}),Be=function(e){var t=e.evoChain,n=e.stats,a=e.moves,o=e.egg_groups,c={};c.evolutionChain=t?He(Le)({evoChain:t,title:"Evolution Chain"}):null,c.stats=n?He(Ue)({stats:n,title:"Stats"}):null,c.moves=a?He(Me)({moves:a,title:"Move List"}):null,c.eggGroups=o?He(De)({title:"Egg Group",eggGroups:o}):null;var i=Object.keys(c).map(function(e){return c[e]});return r.a.createElement("div",null,i)},Ve=Object(fe.a)(function(e){return{root:{minHeight:"100%",width:"100%",color:"white",textTransform:"capitalize",textAlign:"center",padding:2*e.spacing()},pokemonInfoText:{border:"2px solid white",padding:2*e.spacing(),margin:e.spacing(),display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}}),ze=function(e){var t=e.habitat,n=e.base_happiness,a=e.capture_rate,o=e.height,c=e.weight,i=e.className,l={};return l.habitat=t?r.a.createElement("p",{key:"habitat"}," Habitat: ",t.name):null,l.baseHappiness=n?r.a.createElement("p",{key:"happiness"},"Base Happiness : ",n):null,l.captureRate=a?r.a.createElement("p",{key:"capture"},"Capture Rate: ",a," "):null,l.size=o&&c?r.a.createElement(r.a.Fragment,{key:"size"},r.a.createElement("p",null,"Height: ".concat(S(o,.1)," M")),r.a.createElement("p",null,"Weight: ".concat(S(c,.1)," KG"))):null,r.a.createElement("div",{className:i},Object.keys(l).map(function(e){return l[e]}))},Ke=r.a.memo(function(e){var t=e.selectedPokemon,n=e.pokedexInfo,o=e.evoChain,c=e.evolutionClick;if(t&&n&&o){var i=n.flavor_text_entries,l=n.varieties,s=n.habitat,m=n.base_happiness,u=n.capture_rate,d=n.egg_groups,p=t.moves,f=t.height,k=t.weight,b=t.abilities,g=t.stats,E=Ve(),v="http://felixsundqvist.org/pokemon/".concat(t.name,".gif"),h={},y=i?i.filter(function(e){return"en"===e.language.name})[0]:null,C=n.genera?n.genera.filter(function(e){return"en"===e.language.name})[0]:null,x=C?r.a.createElement("h2",{key:"genus"},C.genus.toUpperCase().replace(/\xc9/,"E")):null;h.abilities=b?r.a.createElement(Pe,{className:E.pokemonInfoText,key:"abilities",abilities:b}):null,h.description=y?r.a.createElement(r.a.Fragment,{key:"description"},r.a.createElement("h2",null,"Dex Entry"),r.a.createElement("div",{className:E.pokemonInfoText},r.a.createElement("p",null,y.flavor_text))):r.a.createElement("div",{key:"loading"},"LOADING");var O=Object.keys(h).map(function(e){return h[e]}),j="http://felixsundqvist.org/pokemon/undefined.gif"!==v?r.a.createElement(Te,{imageLink:v,evolutionClick:c}):null,A=l&&l.length>1?r.a.createElement("div",{className:E.button},l.map(function(t){return t.pokemon.name.includes("totem")?null:r.a.createElement(we.a,{key:t.pokemon.name,variant:"contained",color:"secondary",style:{margin:"8px"},onClick:function(){return e.onClick(t.pokemon.name)}},t.pokemon.name)})):null,T=t.types?r.a.createElement("div",{style:{display:"flex"},key:"types"},t.types.map(function(e){return r.a.createElement(Ae,{key:e.type.name,type:e.type.name})}).reverse()):null;return r.a.createElement("div",{className:E.root},r.a.createElement(a.Suspense,{fallback:r.a.createElement("p",null,"LOADING")},j),r.a.createElement("h1",null,t.name),x,T,A,r.a.createElement(ze,{className:E.pokemonInfoText,habitat:s,base_happiness:m,capture_rate:u,height:f,weight:k,types:t.types}),O,r.a.createElement(Be,{evoChain:o,stats:g,moves:p,egg_groups:d}),r.a.createElement(we.a,{variant:"contained",color:"secondary",onClick:e.onAddClick},"Add To Team"))}}),We=n(98),Qe=n.n(We),Ye=Object(be.a)(function(e){return{root:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",height:"100%",color:"white",fontSize:"2vw",margin:"0 auto"},image:{margin:"0 auto"}}}),Je=function(){var e=Ye();return r.a.createElement("div",{className:e.root},r.a.createElement("img",{src:Qe.a,className:e.image,alt:"loading"}),r.a.createElement("h1",null,"LOADING"))},qe=n(99),Xe=n.n(qe),$e=n(100),Ze=n.n($e),et=function(e){var t=Object(a.useState)(null),n=Object(Oe.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)(function(){var t=setTimeout(function(){return c(r.a.createElement("div",null,r.a.createElement("img",{src:e.error1?Xe.a:Ze.a,alt:"error"})," ERROR"))},2e3);return function(){return clearTimeout(t)}},[e.error1]),r.a.createElement(r.a.Fragment,null,o)},tt=n(189),nt=n(190),at=n(204),rt=n(203),ot=n(202),ct=n(200),it=n(201),lt=n(191),st=n(192),mt=n(193),ut=[{name:"Adamant",inc:"attack",dec:"special-attack"},{name:"Bashful",inc:"none",dec:"none"},{name:"Bold",inc:"defense",dec:"attack"},{name:"Brave",inc:"attack",dec:"speed"},{name:"Calm",inc:"special-attack",dec:"attack"},{name:"Careful",inc:"special-defense",dec:"special-attack"},{name:"Docile",inc:"none",dec:"none"},{name:"Gentle",inc:"special-defense",dec:"defense"},{name:"Hardy",inc:"none",dec:"none"},{name:"Hasty",inc:"speed",dec:"defense"},{name:"Impish",inc:"defense",dec:"special-attack"},{name:"Jolly",inc:"speed",dec:"special-attack"},{name:"Lax",inc:"defense",dec:"special-defense"},{name:"Lonley",inc:"attack",dec:"defense"},{name:"Mild",inc:"special-attack",dec:"defense"},{name:"Modest",inc:"special-attack",dec:"attack"},{name:"Naive",inc:"speed",dec:"special-defense"},{name:"Naughty",inc:"attack",dec:"special-defense"},{name:"Quiet",inc:"special-attack",dec:"speed"},{name:"Quirky",inc:"none",dec:"none"},{name:"Rash",inc:"special-attack",dec:"special-defense"},{name:"Relaxed",inc:"defense",dec:"speed"},{name:"Sassy",inc:"special-defense",dec:"speed"},{name:"Serious",inc:"none",dec:"none"},{name:"Timid",inc:"speed",dec:"attack"}],dt=n(51),pt=function(e){var t=e.types;return r.a.createElement("div",{className:{margin:"16px auto",display:"flex"}},t.map(function(e){return r.a.createElement(Ae,{key:e.type.name,type:e.type.name})}).reverse())},ft=r.a.memo(function(e){var t=e.pokemon,n=e.configurePokemon,o=e.open,c=e.onClose,i=e.setOpen,l=e.classes,s=e.mode,m=Object(a.useState)([{move:""},{move:""},{move:""},{move:""}]),d=Object(Oe.a)(m,2),p=d[0],f=d[1],k=Object(a.useState)(""),b=Object(Oe.a)(k,2),g=b[0],E=b[1],v=Object(a.useState)(""),h=Object(Oe.a)(v,2),y=h[0],C=h[1],x=Object(a.useState)(!1),O=Object(Oe.a)(x,2),j=O[0],A=O[1],T=Object(a.useState)(!1),w=Object(Oe.a)(T,2),N=w[0],P=w[1],S=Object(a.useState)([0,0,0,0,0,0]),I=Object(Oe.a)(S,2),R=I[0],F=I[1],G=Object(a.useState)([0,0,0,0,0,0]),H=Object(Oe.a)(G,2),L=H[0],M=H[1],D=Object(a.useState)(100),U=Object(Oe.a)(D,2),B=U[0],V=U[1];Object(a.useEffect)(function(){f([{move:t.moves[0].move.name},{move:t.moves[1].move.name},{move:t.moves[2].move.name},{move:t.moves[3].move.name}]),E(t.abilities[0].ability.name),C(ut[0])},[t.abilities,t.moves]);var z=Object(a.useCallback)(function(){return 510>=L.reduce(function(e,t){return e+t})},[L]);Object(a.useEffect)(function(){z()?P(!1):P(!0)},[L,z]);var K=Object(a.useRef)(null),W=_({stats:t.stats,EVs:L,IVs:R,level:B,nature:y}),Q=function(e,t,n){var a=null;return"number"!==typeof L&&(a=Object(u.a)(L)),a[n]=t,a},Y=function(e,t){return t(e)},J=Array.from(Array(32),function(e,t){return r.a.createElement("option",{key:t,value:t},t)}),q=t.stats.map(function(e,t){return r.a.createElement(tt.a,{key:e.stat.name+t+e.base_stat},r.a.createElement(nt.a,null,e.stat.name),r.a.createElement(nt.a,null,e.base_stat),r.a.createElement(nt.a,null,R[t]),r.a.createElement(nt.a,null,L[t]),r.a.createElement(nt.a,null,W[t].stat))}),X=t.stats.map(function(e,t){return r.a.createElement("div",{key:e.stat.name,style:{display:"flex",padding:"16px"}},r.a.createElement("div",{className:l.editStats},r.a.createElement("div",{style:{flex:4}},r.a.createElement(at.a,null,e.stat.name),r.a.createElement(rt.a,{className:l.slider,id:t,ref:K,onChange:function(e,n){return function(e,t,n){K.current.focus(),M(Q(0,t,n))}(0,n,t)},value:"number"===typeof L[t]?L[t]:0,defaultValue:0,max:255,"aria-labelledby":"slider"})),r.a.createElement("div",{style:{margin:"8px"}},r.a.createElement(at.a,null,"EV's"),r.a.createElement(ot.a,{className:l.input,value:L[t],onChange:function(e){return function(e,t){M(Q(0,Number(e.target.value),t))}(e,t)},onBlur:function(e){return function(e,t){L[t]<0?M(0):L[t]>255&&M(255)}(0,t)},inputProps:{min:0,max:255,type:"number"}}))),r.a.createElement("div",{style:{margin:"8px"}},r.a.createElement(at.a,null,"IV's"),r.a.createElement(ct.a,{className:l.changeStats,value:R[t],native:!0,variant:"filled",onChange:function(e){var n=Object(u.a)(R);n[t]=+e.target.value,F(n)}},J)))}),$=Array.from(Array(4),function(e,n){return r.a.createElement("div",{className:l.move,key:n+"move"},r.a.createElement(ct.a,{value:p[n].move,onChange:function(e){return function(e,t){e.preventDefault();var n=Object(u.a)(p);if(n.map(function(n,a){return t!==a&&e.target.value===n.move}).some(function(e){return!0===e}))return n[t].move=p[t].move,A(!0);A(!1),n[t].move=e.target.value,f(n)}(e,n)},native:!0,variant:"filled"},t.moves.map(function(e){return r.a.createElement("option",{key:e.move.name,value:e.move.name},e.move.name)})))}),Z=r.a.createElement("div",{className:l.itemWrapper,style:{display:"block"}},r.a.createElement(ct.a,{className:l.select,value:y.name,native:!0,variant:"filled",onChange:function(e){return Y(ut.filter(function(t){return t.name===e.target.value})[0],C)}},ut.map(function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)})),r.a.createElement("div",null,"Increase: ",r.a.createElement("p",{style:{color:"green"}},y.inc," "),"Decrease: ",r.a.createElement("p",{style:{color:"red"}},y.dec," "))),ee=r.a.createElement("div",{className:l.itemWrapper},r.a.createElement(ct.a,{native:!0,variant:"filled",className:l.select,value:g,onChange:function(e){return Y(e.target.value,E)}},t.abilities.map(function(e){return r.a.createElement("option",{value:e.ability.name,key:e.ability.name},e.ability.name)}))),te=function(){i(!1),P(!1),n({name:t.name,level:B,moves:p,ability:g,stats:t.stats,nature:y,IVs:R,EVs:L})};return r.a.createElement(it.a,{open:o,onClose:c},r.a.createElement("div",{className:l.root},r.a.createElement(dt.a,{name:t.name}),r.a.createElement("h1",{className:l.title},t.name),r.a.createElement(pt,{types:t.types}),r.a.createElement("div",{onChange:function(e){return e.preventDefault()}},r.a.createElement("h2",null,"Stats"),r.a.createElement("div",{className:l.statsWrapper,style:{border:N?"2px solid red":null}},r.a.createElement("div",{className:l.select},r.a.createElement(at.a,null,"Level"),r.a.createElement(ot.a,{onChange:function(e){V(+e.target.value),(+e.target.value>100||e.target.value<0)&&V(100)},value:B,max:100,min:1})),r.a.createElement("div",null,N?r.a.createElement("h2",{style:{color:"red"}},"EV Total may not exceed 510"):null),X,r.a.createElement(lt.a,{style:{flex:1}},r.a.createElement(st.a,null,r.a.createElement(tt.a,null,r.a.createElement(nt.a,null,"Stat: "),r.a.createElement(nt.a,null,"Base: "),r.a.createElement(nt.a,null,"IV's"),r.a.createElement(nt.a,null,"EV's"),r.a.createElement(nt.a,null,"TOTAL"))),r.a.createElement(mt.a,null,q))),r.a.createElement("h2",null,"Ability"),ee,r.a.createElement("h2",null,"Nature"),Z,j?r.a.createElement("h2",{style:{color:"red"}},"Please select only one of each move"):r.a.createElement("h2",null,"Moves"),r.a.createElement("div",{className:l.itemWrapper,style:{border:j?"2px solid red":null}},$),"add"===s?r.a.createElement(we.a,{disabled:N||j,variant:"contained",onClick:function(){return te()}},"Add"):r.a.createElement(we.a,{disabled:N||j,variant:"contained",onClick:function(){te(),c()}},"Done"))))}),kt=n(103),bt=n.n(kt),gt=n(104),Et=n.n(gt),vt=function(e){var t=e.pokemon,n=e.open,o=e.onClose,c=e.onClickChange,i=e.removePkmn,l=e.teamMembers,s=e.fetchEditPkmn,m=e.classes,u=e.editPokemon,d=e.editTeam,p=Object(a.useState)(!1),f=Object(Oe.a)(p,2),k=f[0],b=f[1];if(console.log(t,u),Object(a.useEffect)(function(){s(t.name)},[t,s]),!t)return null;var g=k&&u?r.a.createElement(ft,{mode:"edit",classes:m,configurePokemon:function(e){return d(e,t.id)},setOpen:b,open:k,onClose:o,pokemon:u}):null;return r.a.createElement(r.a.Fragment,null,g,r.a.createElement(it.a,{open:n,onClose:o},r.a.createElement("div",{className:m.root},r.a.createElement("h1",{className:m.title},t.name),r.a.createElement(dt.a,{name:t.name}),r.a.createElement("div",null,r.a.createElement(we.a,{onClick:function(){return c("prev")}},"Prev"),r.a.createElement(we.a,{onClick:function(){return c("next")}},"Next")),r.a.createElement("div",null,Array.from(Array(l),function(e,n){return n===t.id?r.a.createElement("img",{key:t.name+n,src:Et.a,alt:"pkmn"}):r.a.createElement("img",{key:t.name+n,className:m.hover,onClick:function(){return c("set",n)},src:bt.a,alt:"pkmn"})})),r.a.createElement("div",{className:m.statsWrapper},r.a.createElement("div",null,r.a.createElement("h3",null,"Level"),r.a.createElement("p",null,t.level),r.a.createElement("h2",null,"Ability"),t.ability,r.a.createElement("h3",null,"Nature"),t.nature.name,r.a.createElement("h3",null,"Stats"),t.calculatedStats.map(function(e){var n=null;return t.nature.inc===e.name?n="green":t.nature.dec===e.name&&(n="red"),r.a.createElement("div",{key:e.name+e.stat},r.a.createElement("p",{style:{color:n}},e.name," : ",e.stat))}),r.a.createElement("h3",null,"Moveset"),r.a.createElement("div",{className:m.itemWrapper},t.moves.map(function(e){return r.a.createElement("div",{key:e.move,className:m.move},e.move)})))),r.a.createElement("div",null),r.a.createElement(we.a,{variant:"contained",color:"secondary",className:m.button,onClick:function(){b(!0)}},"Edit"),r.a.createElement(we.a,{variant:"contained",color:"primary",className:m.button,onClick:function(){i(t.id),o()}},"Remove"))))},ht=Object(fe.a)(function(e){return{root:{height:"100%",maxWidth:"80vw",backgroundColor:"white",overflow:"scroll",textAlign:"center",padding:4*e.spacing(),margin:"".concat(2*e.spacing(),"px auto")},itemWrapper:{width:"90%",height:"auto",padding:2*e.spacing(),margin:"16px auto",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",boxShadow:e.shadows[2]},statsWrapper:{width:"90%",margin:"0 auto",padding:2*e.spacing(),alignItems:"center",justifyContent:"center",boxShadow:e.shadows[2]},move:{borderRadius:"1vh",flex:"0 0 40%",boxShadow:e.shadows[0],padding:"16px",margin:"8px",textTransform:"capitalize"},title:{textTransform:"capitalize"},select:{padding:e.spacing(),margin:2*e.spacing()},editStats:{display:"flex",width:"100%",flexDirection:"row"},slider:{margin:e.spacing(),width:"80%"},stats:{padding:e.spacing(),width:"100%",textAlign:"left"},changeStats:{display:"block",flex:1,justifySelf:"flex-end",alignSelf:"flex-end"},hover:{"&:hover":{cursor:"pointer"}},button:{margin:e.spacing()}}}),yt=r.a.memo(function(e){var t=ht();if("add"!==e.mode&&"edit"!==e.mode||!e.selectedPokemon.name){if("view"===e.mode){if(!e.selectedSummary)return null;return r.a.createElement(vt,{fetchEditPkmn:e.fetchEditPkmn,editPokemon:e.editPokemon,editTeam:e.editTeam,classes:t,teamMembers:e.pokemonTeam.length,removePkmn:e.removePkmnFromTeam,pokemon:e.selectedSummary,open:e.open,onClose:e.onClose,onClickChange:function(t,n){"prev"===t&&e.selectedSummary.id>0?e.setSelectedSummary(e.pokemonTeam[e.selectedSummary.id-1]):"next"===t&&e.selectedSummary.id<6?e.setSelectedSummary(e.pokemonTeam[e.selectedSummary.id+1]):"set"===t&&e.setSelectedSummary(e.pokemonTeam[n])}})}return null}return r.a.createElement(ft,{mode:e.mode,classes:t,configurePokemon:"add"===e.mode?e.addPokemonToTeam:e.configurePokemon,setOpen:e.setOpen,open:e.open,onClose:e.onClose,pokemon:Object(d.a)({},e.selectedPokemon,e.pokedexInfo,{name:e.selectedPokemon.name})})}),Ct=Object(s.b)(function(e){return{pokemonTeam:e.teamReducer.pokemonTeam,currentGen:e.fetchReducer.selectedGen,selectedPokemon:e.fetchReducer.selectedPokemon,pokedexInfo:e.fetchReducer.pokedexInfo,editPokemon:e.fetchReducer.editPokemon}},function(e){return{genClick:function(t){return e({type:"CHANGE_GEN",selectedGen:t})},addPokemonToTeam:function(t){return e({type:"ADD_TO_TEAM",addPokemon:t})},changeTeamOrder:function(t){return e({type:"CHANGE_TEAM_POSITION",newTeam:t})},removePkmnFromTeam:function(t){return e({type:"REMOVE_FROM_TEAM",id:t})},fetchEditPkmn:function(t){return e({type:O,id:t})},editTeam:function(t,n){return e({type:"EDIT_TEAM",edited:t,index:n})}}})(yt),xt=Object(be.a)(function(e){return{root:Object(pe.a)({position:"relative",flex:1,maxHeight:"100vh",color:"white",overflow:"scroll",textTransform:"capitalize",padding:4*e.spacing(),backgroundColor:e.palette.background},e.breakpoints.down("sm"),{width:"100vw",margin:"0 auto"}),wrapper:Object(pe.a)({},e.breakpoints.down("sm"),{height:"50vh",maxHeight:"50vh"})}}),Ot=r.a.memo(function(e){var t=e.selectedPokemon,n=e.pokedexInfo,o=e.isLoadingCurrent,c=e.match,i=e.history,l=e.fetchSelectedPokemon,s=e.evoChain,m=e.fetchCurrentPokemonError,u=r.a.useState(!1),d=Object(Oe.a)(u,2),p=d[0],f=d[1],k=Object(a.useCallback)(function(){l(c.params.id)},[c.params.id,l]);Object(a.useEffect)(function(){k()},[k]);var b=xt(),g=p?r.a.createElement(Ct,{mode:"add",setOpen:f,open:p,onClose:function(){return f(!1)}}):null,E=r.a.createElement(Je,null);return o||m?m&&(E=r.a.createElement(et,{error1:!0})):E=r.a.createElement(Ke,{pokedexInfo:n,selectedPokemon:t,evoChain:s,onAddClick:function(){return f(!0)},onClick:function(e){return l(e)},evolutionClick:function(e){return i.push("/id="+e)}}),r.a.createElement(r.a.Fragment,null,g,r.a.createElement("div",{className:b.root},r.a.createElement("div",{className:b.wrapper},E)))}),jt=Object(s.b)(function(e){return{selectedPokemonId:e.fetchReducer.selectedPokemonId,selectedPokemon:e.fetchReducer.selectedPokemon,pokedexInfo:e.fetchReducer.pokedexInfo,isLoadingCurrent:e.fetchReducer.isLoadingCurrent,evoChain:e.fetchReducer.evolutionChain,fetchCurrentPokemonError:e.fetchReducer.fetchCurrentPokemonError}},function(e){return{fetchSelectedPokemon:function(t){return e({type:g,id:t})}}})(Ot),At=Object(fe.a)(function(e){return{root:Object(pe.a)({width:"100vw",height:"auto",overflow:"none",backgroundColor:e.palette.background,display:"flex"},e.breakpoints.down("md"),{flexDirection:"column-reverse",backgroundColor:e.palette.primary.main})}}),Tt=function(e){var t=At();return r.a.createElement("div",{className:t.root},r.a.createElement(ke.a,{path:"/",component:xe}),r.a.createElement(a.Suspense,{fallback:r.a.createElement("h1",null,"Loading")},r.a.createElement(ke.a,{path:"/id=:id",component:jt})))},wt=n(54),Nt=n(111),Pt=n(197),St=n(65),It=n(196),_t=n(198),Rt=n(107),Ft=n.n(Rt),Gt=n(195),Ht=n(108),Lt=n.n(Ht),Mt=n(109),Dt=n.n(Mt),Ut=n(194),Bt=Object(fe.a)(function(e){return{root:Object(pe.a)({flexGrow:1},e.breakpoints.down("md"),{flex:1,margin:e.spacing()/2})}}),Vt=function(e){var t=Bt(),n=Array.from(Array(7),function(t,n){return r.a.createElement(we.a,{key:n+"gen",onClick:function(){return e.genClick(n)},selected:e.currentGen+1===n+1},n+1)});return r.a.createElement("div",{className:t.root},r.a.createElement(Ut.a,{variant:"contained",color:"secondary"},n))},zt=n(114),Kt="PokemonPosition",Wt=function(e){var t=e.pokemon,n=e.name,o=e.movePokemon,c=Object(a.useRef)(null),i=Object(wt.d)({accept:Kt,hover:function(e,n){if(c.current){var a=e.index,r=t.id;if(a!==r){var i=c.current.getBoundingClientRect(),l=(i.bottom-i.top)/4,s=n.getClientOffset().y-i.top;a<r&&s<l||a>r&&s>2*l||(o(a,r),e.index=r)}}}}),l=Object(Oe.a)(i,2)[1],s=Object(wt.c)({item:{type:Kt,id:t.id,index:t.id},collect:function(e){return{isDragging:e.isDragging()}}}),m=Object(Oe.a)(s,2),u=m[0].isDragging?0:1;return(0,m[1])(l(c)),r.a.createElement("span",{ref:c,style:{opacity:u,borderRadius:"50%",overflow:"hidden"}},r.a.createElement(dt.a,{name:n}))},Qt=function(e){var t=Object(fe.a)(function(e){return{root:{flex:"1"},button:Object(pe.a)({borderRadius:"50%",height:"40px",width:"40px",color:"black",backgroundColor:"white",margin:e.spacing()},e.breakpoints.down("md"),{margin:e.spacing()/2})}})();return r.a.createElement(zt.a,{onClick:e.onClick,disabled:!e.pokemonInformation,edge:"end",variant:"contained",color:"white",className:t.button},e.pokemonInformation?r.a.createElement(Wt,{movePokemon:e.movePokemon,name:e.pokemonInformation.name,pokemon:e.pokemonInformation}):null)},Yt=Object(fe.a)(function(e){return{root:{backgroundColor:e.palette.primary.main,top:"auto",bottom:0},appBar:Object(pe.a)({},e.breakpoints.down("md"),{flexDirection:"column",padding:e.spacing()}),iconButton:{position:"fixed",right:0,top:0,margin:e.spacing(),color:"white","&:hover":{backgroundColor:e.palette.primary.main}}}}),Jt=function(e){var t=e.pokemonTeam,n=e.changeGen,o=e.changeTeamOrder,c=Object(a.useState)(!1),i=Object(Oe.a)(c,2),l=i[0],s=i[1],m=Object(a.useState)(!0),p=Object(Oe.a)(m,2),f=p[0],k=p[1],b=Object(a.useState)(null),g=Object(Oe.a)(b,2),E=g[0],v=g[1],h=Object(St.a)(),y=Object(Gt.a)(h.breakpoints.down("md")),C=Object(a.useCallback)(function(e,n){var a=Object(u.a)(t);a[e]=Object(d.a)({},t[n],{id:e}),a[n]=Object(d.a)({},t[e],{id:n}),o(a)},[t,o]),x=Yt();Object(a.useEffect)(function(){y&&k(!1)},[y]);var O=new Blob([JSON.stringify({pokemonTeam:t})],{type:"application/json"}),j=Array.from(Array(6),function(e,n){return r.a.createElement(Qt,{key:"pokeball"+n,onClick:function(e){return function(e,n){s(!0),v(t[n])}(0,n)},movePokemon:C,pokemonInformation:t[n]?t[n]:null,id:n})}),A=l?r.a.createElement(Ct,{mode:"view",selectedSummary:E,setSelectedSummary:v,open:l,onClose:function(){return s(!1)}}):null,T=f?r.a.createElement(Dt.a,null):r.a.createElement(Lt.a,null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(It.a,{edge:"start",color:"inherit",className:x.iconButton,onClick:function(){return k(!f)}},T),r.a.createElement(Pt.a,{className:x.root,style:{display:f?"block":"none"}},A,r.a.createElement(_t.a,{className:x.appBar},r.a.createElement(Vt,{genClick:n}),r.a.createElement(wt.b,{backend:Nt.a},r.a.createElement("div",{style:{flex:1}},j)),r.a.createElement("div",null,r.a.createElement(we.a,{onClick:function(){return Ft.a.saveAs(O,"team".concat(Date.now(),".json"))}},"Download Team JSON")))))},qt=(n(155),Object(s.b)(function(e){return{pokemonTeam:e.teamReducer.pokemonTeam,currentGen:e.fetchReducer.selectedGen}},function(e){return{genClick:function(t){return e({type:"CHANGE_GEN",selectedGen:t})},changeTeamOrder:function(t){return e({type:"CHANGE_TEAM_POSITION",newTeam:t})}}})(function(e){return r.a.createElement(de,null,r.a.createElement("div",{className:"App"},r.a.createElement(ce.a,null),r.a.createElement(Tt,null),r.a.createElement(Jt,{changeTeamOrder:e.changeTeamOrder,pokemonTeam:e.pokemonTeam,changeGen:function(t){return e.genClick(t)}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xt=Object(m.a)(),$t=Object(l.c)({fetchReducer:F,teamReducer:H}),Zt=Object(l.e)($t,Object(l.a)(Xt));Xt.run(oe),c.a.render(r.a.createElement(s.a,{store:Zt},r.a.createElement(i.a,null,r.a.createElement(qt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.name;return r.a.createElement("img",{src:"http://felixsundqvist.org/pokemon/icons/regular/".concat(t,".png"),alt:t})}},95:function(e,t,n){e.exports=n.p+"static/media/Early_GameBoy.3ada9815.ttf"},96:function(e,t,n){e.exports=n.p+"static/media/sort-down-solid.cc204b0f.svg"},97:function(e,t,n){e.exports=n.p+"static/media/minus-solid.af448422.svg"},98:function(e,t,n){e.exports=n.p+"static/media/loading.bd888bab.gif"},99:function(e,t,n){e.exports=n.p+"static/media/error.fa8aaebb.gif"}},[[119,1,2]]]);
//# sourceMappingURL=main.787afd0f.chunk.js.map