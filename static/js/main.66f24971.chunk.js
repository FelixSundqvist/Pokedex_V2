(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),i=n(54),l=n(30),s=n(35),m=n(85),u=n(21),d=n(28),p="FETCH_PKMN_START",f="FETCH_PKMN_SUCCESS",k="FETCH_PKMN_FAILFETCH_PKMN_FAIL",g="LOADING_POKEMONS",b="FETCH_CURRENT_PKMN_START",v="FETCH_CURRENT_PKMN_SUCCESS",E="FETCH_CURRENT_PKMN_FAIL",h="LOADING_CURRENT_PKMN",y="FETCH_EVO_CHAIN_START",C="FETCH_EVO_CHAIN_SUCCESS",x="FETCH_EVO_CHAIN_FAIL",A={pokemons:[],pokemonTeam:[{IVs:[0,0,0,0,0,0],ability:"friend-guard",id:0,moves:[{move:"pound"},{move:"double-slap"},{move:"mega-punch"},{move:"fire-punch"}],name:"jigglypuff",nature:{name:"Adamant",inc:"attack",dec:"special-attack"},stats:[{base_stat:20,effort:0,stat:{name:"speed"}},{base_stat:25,effort:0,stat:{name:"special-defense"}},{base_stat:45,effort:0,stat:{name:"special-attack"}},{base_stat:20,effort:0,stat:{name:"defense"}},{base_stat:45,effort:0,stat:{name:"attack"}},{base_stat:115,effort:2,stat:{name:"hp"}}]},{IVs:[0,0,0,0,0,0],ability:"friend-guard",id:1,moves:[{move:"pound"},{move:"double-slap"},{move:"mega-punch"},{move:"fire-punch"}],name:"zubat",nature:{name:"Adamant",inc:"attack",dec:"special-attack"},stats:[{base_stat:20,effort:0,stat:{name:"speed"}},{base_stat:25,effort:0,stat:{name:"special-defense"}},{base_stat:45,effort:0,stat:{name:"special-attack"}},{base_stat:20,effort:0,stat:{name:"defense"}},{base_stat:45,effort:0,stat:{name:"attack"}},{base_stat:115,effort:2,stat:{name:"hp"}}]},{IVs:[0,0,0,0,0,0],ability:"friend-guard",id:2,moves:[{move:"pound"},{move:"double-slap"},{move:"mega-punch"},{move:"fire-punch"}],name:"ninetales",nature:{name:"Adamant",inc:"attack",dec:"special-attack"},stats:[{base_stat:20,effort:0,stat:{name:"speed"}},{base_stat:25,effort:0,stat:{name:"special-defense"}},{base_stat:45,effort:0,stat:{name:"special-attack"}},{base_stat:20,effort:0,stat:{name:"defense"}},{base_stat:45,effort:0,stat:{name:"attack"}},{base_stat:115,effort:2,stat:{name:"hp"}}]}],selectedGen:0,selectedPokemonId:"",selectedPokemon:{},pokedexInfo:{},evolutionChain:{},isLoadingPokemons:!1,isLoadingCurrent:!1,fetchPokemonError:!1,fetchCurrentPokemonError:!1,fetchEvoChainError:!1},O=function(e,t){return Object(d.a)({},e,t)},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=O.bind(null,e);switch(t.type){case f:return function(e,t){return Object(d.a)({},e,{isLoadingPokemons:!1,pokemons:Object(u.a)(t)})}(e,t.pokemons);case k:return function(e){return O(e,{isLoadingPokemons:!1,fetchPokemonError:!0})}(e);case"CHANGE_GEN":return n({selectedGen:t.selectedGen});case v:return function(e,t){return O(e,{isLoadingCurrent:!1,selectedPokemonId:t.selectedPokemonId,selectedPokemon:t.selectedPokemon,pokedexInfo:t.pokedexInfo,fetchCurrentPokemonError:!1})}(e,t);case E:return function(e,t){return O(e,{isLoadingCurrent:!1,fetchCurrentPokemonError:!0})}(e);case g:return n({isLoadingPokemons:!0});case h:return n({isLoadingCurrent:!0});case C:return n({evolutionChain:t.evolutionChain});case"ADD_TO_TEAM":return function(e,t){return e.pokemonTeam.length<=6?O(e,{pokemonTeam:[].concat(Object(u.a)(e.pokemonTeam),[Object(d.a)({},t,{id:e.pokemonTeam.length})])}):e}(e,t.addPokemon);case"REMOVE_FROM_TEAM":return function(e,t){return Object(d.a)({},e,{pokemonTeam:Object(u.a)(e.pokemonTeam).filter(function(e){return e.id!==t.id})})}(e,t);case"CHANGE_TEAM_POSITION":return n({pokemonTeam:Object(u.a)(t.newTeam)});default:return e}},N=n(31),T=n.n(N),w=n(13),_=n(47),I=n.n(_),P=[{start:0,end:151},{start:151,end:100},{start:251,end:135},{start:386,end:107},{start:493,end:156},{start:649,end:72},{start:721,end:86}],S=I.a.create({baseURL:"https://pokeapi.co/api/v2/",timeout:5e3,method:"get"}),F=T.a.mark(U),R=T.a.mark(H),G=T.a.mark(M),L=T.a.mark(B);function U(e){var t;return T.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.b)({type:g});case 3:return n.next=5,Object(w.a)(function(){return S("/pokemon/?limit=".concat(P[e.selectedGen].end,"&offset=").concat(P[e.selectedGen].start)).then(function(e){return e.data}).then(function(e){return e.results})});case 5:return t=n.sent,n.next=8,Object(w.b)({type:f,pokemons:t});case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(w.b)({type:k,error:n.t0});case 14:case"end":return n.stop()}},F,null,[[0,10]])}function H(e){var t,n,a;return T.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(w.b)({type:h});case 3:return r.next=5,Object(w.a)(function(){return S("https://pokeapi.co/api/v2/pokemon/"+e.id).then(function(e){return e.data}).then(function(e){return e})});case 5:return t=r.sent,n=e.id.replace(/(-[a-z]{3,})?(-x|-y)?$/,""),r.next=9,Object(w.a)(function(){return S("https://pokeapi.co/api/v2/pokemon-species/"+n).then(function(e){return e.data}).then(function(e){return e})});case 9:return a=r.sent,r.next=12,Object(w.b)({type:y,evoChainURL:a.evolution_chain.url});case 12:return r.next=14,Object(w.b)({type:v,selectedPokemonId:e.id,selectedPokemon:t,pokedexInfo:a});case 14:r.next=20;break;case 16:return r.prev=16,r.t0=r.catch(0),r.next=20,Object(w.b)({type:E,error:r.t0});case 20:case"end":return r.stop()}},R,null,[[0,16]])}function M(e){var t;return T.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.a)(function(){return I.a.get(e.evoChainURL)});case 3:return t=n.sent,n.next=6,Object(w.b)({type:C,evolutionChain:t.data});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(w.b)({type:x});case 12:case"end":return n.stop()}},G,null,[[0,8]])}function B(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.c)(p,U);case 2:return e.next=4,Object(w.c)(b,H);case 4:return e.next=6,Object(w.c)(y,M);case 6:case"end":return e.stop()}},L)}var D=B,z=n(155),W=n(83),V=n(148),K=n(71),Q={fontFamily:"Early_GameBoy",src:"\n      url(".concat(n.n(K).a,") format('woff2')\n    "),unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"},Y=Object(W.a)({palette:{primary:{main:"#b40923"},secondary:{main:"#0e10cc"},background:"#010101",backgroundLight:"#444343"},typography:{fontFamily:["Raleway","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")},overrides:{MuiCssBaseline:{"@global":{"@font-face":[Q]}}}}),q=function(e){return r.a.createElement(V.a,{theme:Y},e.children)},J=n(129),X=n(38),$=n(130),Z=n(149),ee=n(150),te=function(e){var t=e.name,n=e.id,a=e.onClick,o=(e.selected,e.children),c=Object(J.a)(function(e){return{card:{height:"100px",width:"200px",color:"black",margin:e.spacing(),textTransform:"capitalize","&:hover":{cursor:"pointer",opacity:.8},transition:"opacity 100ms ease",backgroundColor:"white",display:"flex",justifyItems:"center",alignContent:"center"},image:{margin:"0 auto",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"50% 50%",display:"inline-block"}}})();return r.a.createElement(Z.a,{className:c.card,onClick:function(e){return a(e,t)}},r.a.createElement("img",{className:c.image,src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:t}),r.a.createElement(ee.a,null,r.a.createElement("p",null,t),r.a.createElement("p",null,o)))},ne=function(e,t){return Number.parseFloat(e*t).toFixed(2)},ae=function(e){var t=e.items,n=e.onClick,o=e.selected;return Object(a.useMemo)(function(){return t.map(function(e,t){return r.a.createElement(te,{onClick:n,selected:o,id:(a=e.url,a.match(/\d{1,3}\/$/)[0].split("/")[0]),key:e.name,name:e.name});var a})},[t,n,o])},re=Object($.a)(function(e){return{root:{flex:"1",height:"100%",display:"flex",overflow:"scroll",flexWrap:"wrap",alignItems:"center",padding:4*e.spacing(),margin:2*e.spacing()}}}),oe=Object(s.b)(function(e){return{pokemons:e.pokemons,selectedGen:e.selectedGen,selectedPokemonId:e.selectedPokemonId,isLoadingCurrent:e.isLoadingCurrent,fetchPokemonError:e.fetchPokemonError}},function(e){return{fetchAllPokemons:function(t){return e({type:p,selectedGen:t})}}})(function(e){var t=e.fetchAllPokemons,n=e.selectedGen;Object(a.useEffect)(function(){t(n)},[n,t]);var o=re(),c=e.isLoading||e.fetchPokemonError?null:r.a.createElement(ae,{onClick:function(t,n){return e.history.push("/id="+n)},selected:e.selectedPokemonId,items:e.pokemons});return r.a.createElement("div",{className:o.root},c)}),ce=n(11),ie=Object($.a)(function(e){return{root:{padding:e.spacing(),margin:e.spacing(),border:"2px solid black",flex:1,color:"white",textTransform:"uppercase",fontFamily:"sans-serif"}}}),le=function(e){var t=e.type,n=ie(),a="#BFBCB6";switch(t){case"bug":a="#9EAC24";break;case"dark":a="#2A241F";break;case"dragon":a="#6C5CBA";break;case"electric":a="#E19E1E";break;case"fairy":a="#EDA7EF";break;case"fighting":a="#603228";break;case"fire":a="#CE340C";break;case"flying":a="#6879CF";break;case"ghost":a="#444364";break;case"grass":a="#467127";break;case"ground":a="#937D52";break;case"ice":a="#72D6EF";break;case"normal":a="#BFBCB6";break;case"poison":a="#884D88";break;case"psychic":a="#D84C7B";break;case"rock":a="#998444";break;case"steel":a="#827F8C";break;case"water":a="#3C8FDC";break;default:a="white"}return r.a.createElement("div",{className:n.root,style:{backgroundColor:a}},t)},se=function(e){var t=Object($.a)(function(t){return{root:{height:"150px",backgroundImage:"url(".concat(e.imageLink,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"50% 50%",margin:"16px 0"}}})();return r.a.createElement("div",{className:t.root,name:e.imageLink})},me=n(151),ue=Object(J.a)(function(e){return{abilities:{padding:2*e.spacing(),backgroundColor:e.palette.secondary,margin:e.spacing()},hiddenAbility:{padding:2*e.spacing(),backgroundColor:e.palette.secondary,opacity:.3,margin:e.spacing()}}}),de=function(e){var t=e.abilities,n=e.className,a=ue(),o=t.map(function(e){return e.is_hidden?r.a.createElement(r.a.Fragment,{key:e.ability.name},r.a.createElement("p",null,"Hidden: "),r.a.createElement("div",{className:a.hiddenAbility},e.ability.name)):r.a.createElement("div",{className:a.abilities,key:e.ability.name},e.ability.name)}).reverse();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Abilities"),r.a.createElement("div",{className:n},o))},pe=n(72),fe=n.n(pe),ke=n(73),ge=n.n(ke),be=Object($.a)(function(e){return{root:{position:"relative",border:"2px solid white",margin:2*e.spacing()+"px 0","&:hover":{cursor:"pointer"}},arrowIcon:{display:"block",position:"absolute",top:"-70%",right:"0",height:"100%",width:"5%",transform:"translate(-50%, 50%)",backgroundImage:"url(".concat(fe.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"50% 50%"},minusIcon:{display:"block",position:"absolute",top:"-50%",right:"0",height:"100%",width:"5%",transform:"translate(-50%, 50%)",backgroundImage:"url(".concat(ge.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"50% 50%"}}}),ve=function(e){var t=be();return r.a.createElement("div",{className:t.root,onClick:e.onClick},r.a.createElement("h2",null,e.children),e.show?r.a.createElement("span",{className:t.minusIcon}):r.a.createElement("div",{className:t.arrowIcon}))},Ee=function(e){return function(t){var n=Object(a.useState)(!1),o=Object(ce.a)(n,2),c=o[0],i=o[1],l=c?r.a.createElement(e,Object.assign({},t,{show:c})):null;return r.a.createElement("div",{key:t.title},r.a.createElement(ve,{onClick:function(){return i(!c)},show:c},t.title),l)}},he=r.a.lazy(function(){return n.e(4).then(n.bind(null,157))}),ye=r.a.lazy(function(){return n.e(5).then(n.bind(null,158))}),Ce=r.a.lazy(function(){return n.e(3).then(n.bind(null,159))}),xe=r.a.lazy(function(){return n.e(6).then(n.bind(null,160))}),Ae=function(e){var t=e.evoChain,n=e.stats,a=e.moves,o=e.egg_groups,c={};c.evolutionChain=t?Ee(he)({evoChain:t,title:"Evolution Chain"}):null,c.stats=n?Ee(xe)({stats:n,title:"Stats"}):null,c.moves=a?Ee(ye)({moves:a,title:"Move List"}):null,c.eggGroups=o?Ee(Ce)({title:"Egg Group",eggGroups:o}):null;var i=Object.keys(c).map(function(e){return c[e]});return r.a.createElement("div",null,i)},Oe=Object(J.a)(function(e){return{root:{minHeight:"100%",width:"100%",color:"white",textTransform:"capitalize",textAlign:"center",padding:2*e.spacing()},pokemonInfoText:{border:"2px solid white",padding:2*e.spacing(),margin:e.spacing(),display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}}),je=function(e){var t=e.habitat,n=e.base_happiness,a=e.capture_rate,o=e.height,c=e.weight,i=e.className,l={};return l.habitat=t?r.a.createElement("p",{key:"habitat"}," Habitat: ",t.name):null,l.baseHappiness=n?r.a.createElement("p",{key:"happiness"},"Base Happiness : ",n):null,l.captureRate=a?r.a.createElement("p",{key:"capture"},"Capture Rate: ",a," "):null,l.size=o&&c?r.a.createElement(r.a.Fragment,{key:"size"},r.a.createElement("p",null,"Height: ".concat(ne(o,.1)," M")),r.a.createElement("p",null,"Weight: ".concat(ne(c,.1)," KG"))):null,r.a.createElement("div",{className:i},Object.keys(l).map(function(e){return l[e]}))},Ne=r.a.memo(function(e){var t=e.selectedPokemon,n=e.pokedexInfo,o=e.evoChain,c=e.evolutionClick;if(t&&n&&o){var i=n.flavor_text_entries,l=n.varieties,s=n.habitat,m=n.base_happiness,u=n.capture_rate,d=n.egg_groups,p=t.moves,f=t.height,k=t.weight,g=t.abilities,b=t.stats,v=Oe(),E="http://felixsundqvist.org/pokemon/".concat(t.name,".gif"),h={},y=i?i.filter(function(e){return"en"===e.language.name})[0]:null,C=n.genera?n.genera.filter(function(e){return"en"===e.language.name})[0]:null,x=C?r.a.createElement("h2",{key:"genus"},C.genus.toUpperCase().replace(/\xc9/,"E")):null;h.abilities=g?r.a.createElement(de,{className:v.pokemonInfoText,key:"abilities",abilities:g}):null,h.description=y?r.a.createElement(r.a.Fragment,{key:"description"},r.a.createElement("h2",null,"Dex Entry"),r.a.createElement("div",{className:v.pokemonInfoText},r.a.createElement("p",null,y.flavor_text))):r.a.createElement("div",{key:"loading"},"LOADING");var A=Object.keys(h).map(function(e){return h[e]}),O="http://felixsundqvist.org/pokemon/undefined.gif"!==E?r.a.createElement(se,{imageLink:E,evolutionClick:c}):null,j=l&&l.length>1?r.a.createElement("div",{className:v.button},l.map(function(t){return t.pokemon.name.includes("totem")?r.a.createElement(me.a,{variant:"contained",color:"secondary",style:{margin:"8px"},onClick:function(){return e.onClick(e.name)}},e.children):null})):null,N=t.types?r.a.createElement("div",{style:{display:"flex"},key:"types"},t.types.map(function(e){return r.a.createElement(le,{key:e.type.name,type:e.type.name})}).reverse()):null;return r.a.createElement("div",{className:v.root},r.a.createElement(a.Suspense,{fallback:r.a.createElement("p",null,"LOADING")},O),r.a.createElement("h1",null,t.name),x,N,j,r.a.createElement(je,{className:v.pokemonInfoText,habitat:s,base_happiness:m,capture_rate:u,height:f,weight:k,types:t.types}),A,r.a.createElement(Ae,{evoChain:o,stats:b,moves:p,egg_groups:d}),r.a.createElement(me.a,{variant:"contained",color:"secondary",onClick:e.onAddClick},"Add To Team"))}}),Te=n(74),we=n.n(Te),_e=Object($.a)(function(e){return{root:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",height:"100%",color:"white",fontSize:"2vw",zIndex:9999,margin:2*e.spacing()},image:{margin:"0 auto"}}}),Ie=function(){var e=_e();return r.a.createElement("div",{className:e.root},r.a.createElement("img",{src:we.a,className:e.image,alt:"loading"}),r.a.createElement("h1",null,"LOADING"))},Pe=n(75),Se=n.n(Pe),Fe=n(76),Re=n.n(Fe),Ge=function(e){var t=Object(a.useState)(null),n=Object(ce.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)(function(){var t=setTimeout(function(){return c(r.a.createElement("div",null,r.a.createElement("img",{src:e.error1?Se.a:Re.a,alt:"error"})," ERROR"))},2e3);return function(){return clearTimeout(t)}},[e.error1]),r.a.createElement(r.a.Fragment,null,o)},Le=n(156),Ue=[{name:"Adamant",inc:"attack",dec:"special-attack"},{name:"Bashful",inc:"none",dec:"none"},{name:"Bold",inc:"defense",dec:"attack"},{name:"Brave",inc:"attack",dec:"speed"},{name:"Calm",inc:"special-attack",dec:"attack"},{name:"Careful",inc:"special-defense",dec:"special-attack"},{name:"Docile",inc:"none",dec:"none"},{name:"Gentle",inc:"special-defense",dec:"defense"},{name:"Hardy",inc:"none",dec:"none"},{name:"Hasty",inc:"speed",dec:"defense"},{name:"Impish",inc:"defense",dec:"special-attack"},{name:"Jolly",inc:"speed",dec:"special-attack"},{name:"Lax",inc:"defense",dec:"special-defense"},{name:"Lonley",inc:"attack",dec:"defense"},{name:"Mild",inc:"special-attack",dec:"defense"},{name:"Modest",inc:"special-attack",dec:"attack"},{name:"Naive",inc:"speed",dec:"special-defense"},{name:"Naughty",inc:"attack",dec:"special-defense"},{name:"Quiet",inc:"special-attack",dec:"speed"},{name:"Quirky",inc:"none",dec:"none"},{name:"Rash",inc:"special-attack",dec:"special-defense"},{name:"Relaxed",inc:"defense",dec:"speed"},{name:"Sassy",inc:"special-defense",dec:"speed"},{name:"Serious",inc:"none",dec:"none"},{name:"Timid",inc:"speed",dec:"attack"}],He=n(43),Me=Object($.a)(function(e){return{root:{height:"100%",maxWidth:"80vw",backgroundColor:"white",overflow:"scroll",textAlign:"center",padding:4*e.spacing(),margin:"".concat(2*e.spacing(),"px auto")},itemWrapper:{width:"90%",height:"auto",padding:2*e.spacing(),margin:"16px auto",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",boxShadow:"2px 2px 4px 2px #ccc"},statsWrapper:{width:"90%",margin:"0 auto",padding:2*e.spacing(),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"2px 2px 4px 2px #ccc"},move:{borderRadius:"1vh",flex:"0 0 40%",border:"2px solid black",padding:"16px",margin:"8px",textTransform:"capitalize"},title:{textTransform:"capitalize"},select:{padding:e.spacing(),margin:2*e.spacing()},stats:{padding:e.spacing(),width:"100%",textAlign:"left",display:"flex"},changeStats:{display:"block",flex:1,justifySelf:"flex-end",alignSelf:"flex-end"},hover:{"&:hover":{cursor:"pointer"}}}}),Be=function(e){var t=e.types;return r.a.createElement("div",{className:{margin:"16px auto"}},t.map(function(e){return r.a.createElement(le,{key:e.type.name,type:e.type.name})}).reverse())},De=function(e){var t=e.pokemon,n=e.addPokemonToTeam,o=e.open,c=e.onClose,i=e.setOpen,l=Object(a.useState)([{move:""},{move:""},{move:""},{move:""}]),s=Object(ce.a)(l,2),m=s[0],d=s[1],p=Object(a.useState)(""),f=Object(ce.a)(p,2),k=f[0],g=f[1],b=Object(a.useState)(""),v=Object(ce.a)(b,2),E=v[0],h=v[1],y=Object(a.useState)(null),C=Object(ce.a)(y,2),x=C[0],A=C[1],O=Object(a.useState)([0,0,0,0,0,0]),j=Object(ce.a)(O,2),N=j[0],T=j[1];Object(a.useEffect)(function(){d([{move:t.moves[0].move.name},{move:t.moves[1].move.name},{move:t.moves[2].move.name},{move:t.moves[3].move.name}]),g(t.abilities[0].ability.name),h(Ue[0])},[t.abilities,t.moves]);var w=Me(),_=function(e,t){return t(e)},I=Array.from(Array(32),function(e,t){return r.a.createElement("option",{key:t,value:t},t)}),P=t.stats.map(function(e,t){return r.a.createElement("div",{key:e.stat.name,className:w.stats},r.a.createElement("div",{style:{flex:1}},e.stat.name,": ",e.base_stat," + ",N[t]),r.a.createElement("select",{className:w.changeStats,value:N[t],onChange:function(e){var n=Object(u.a)(N);n[t]=e.target.value,T(n)}},I))}),S=Array.from(Array(4),function(e,n){return r.a.createElement("div",{className:w.move,key:n+"move"},r.a.createElement("select",{value:m[n].move,onChange:function(e){return function(e,t){e.preventDefault();var n=Object(u.a)(m);if(n.map(function(n,a){return t!==a&&e.target.value===n.move}).some(function(e){return!0===e}))return n[t].move=m[t].move,A(r.a.createElement("h2",{style:{color:"red"}},"Please select only one of each move"));A(null),n[t].move=e.target.value,d(n)}(e,n)}},t.moves.map(function(e){return r.a.createElement("option",{key:e.move.name,value:e.move.name},e.move.name)})))}),F=r.a.createElement("div",{className:w.itemWrapper,style:{display:"block"}},r.a.createElement("select",{className:w.select,value:E.name,onChange:function(e){return _(Ue.filter(function(t){return t.name===e.target.value})[0],h)}},Ue.map(function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)})),r.a.createElement("div",null,"Increase: ",r.a.createElement("p",{style:{color:"green"}},E.inc," "),"Decrease: ",r.a.createElement("p",{style:{color:"red"}},E.dec," "))),R=r.a.createElement("div",{className:w.itemWrapper},r.a.createElement("select",{className:w.select,value:k,onChange:function(e){return _(e.target.value,g)}},t.abilities.map(function(e){return r.a.createElement("option",{value:e.ability.name,key:e.ability.name},e.ability.name)})));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Le.a,{open:o,onClose:c},r.a.createElement("div",{className:w.root},r.a.createElement("h1",{className:w.title},t.name),r.a.createElement(He.a,{name:t.name}),r.a.createElement(Be,{types:t.types}),r.a.createElement("div",{onChange:function(e){return e.preventDefault()}},r.a.createElement("h2",null,"Stats"),r.a.createElement("div",{className:w.statsWrapper},P),r.a.createElement("h2",null,"Ability"),R,r.a.createElement("h2",null,"Nature"),F,x,r.a.createElement("h2",null,"Moves"),r.a.createElement("div",{className:w.itemWrapper},S),r.a.createElement(me.a,{variant:"contained",onClick:function(){return function(e){i(!1),n({name:t.name,moves:e,ability:k,stats:t.stats,nature:E,IVs:N})}(m)}},"Add")))))},ze=Object($.a)(function(e){return{root:{position:"relative",minHeight:"100%",flex:1,color:"white",textTransform:"capitalize",padding:4*e.spacing()}}}),We=r.a.memo(function(e){var t=e.addPokemonToTeam,n=e.selectedPokemon,o=e.pokedexInfo,c=e.isLoadingCurrent,i=e.match,l=e.history,s=e.fetchSelectedPokemon,m=e.evoChain,u=e.fetchCurrentPokemonError,p=r.a.useState(!1),f=Object(ce.a)(p,2),k=f[0],g=f[1],b=Object(a.useCallback)(function(){s(i.params.id)},[i.params.id,s]);Object(a.useEffect)(function(){b()},[b]);var v=ze(),E=r.a.createElement(Ie,null);c||u?u&&(E=r.a.createElement(Ge,{error1:!0})):E=r.a.createElement(Ne,{pokedexInfo:o,selectedPokemon:n,evoChain:m,onAddClick:function(){return g(!0)},evolutionClick:function(e){return l.push("/id="+e)}});var h=k?r.a.createElement(De,{addPokemonToTeam:t,setOpen:g,open:k,onClose:function(){return g(!1)},pokemon:Object(d.a)({},n,o,{name:n.name})}):null;return r.a.createElement(r.a.Fragment,null,h,r.a.createElement("div",{className:v.root},E))}),Ve=Object(s.b)(function(e){return{selectedPokemonId:e.selectedPokemonId,selectedPokemon:e.selectedPokemon,pokedexInfo:e.pokedexInfo,isLoadingCurrent:e.isLoadingCurrent,evoChain:e.evolutionChain,fetchCurrentPokemonError:e.fetchCurrentPokemonError}},function(e){return{fetchSelectedPokemon:function(t){return e({type:b,id:t})},addPokemonToTeam:function(t){return e({type:"ADD_TO_TEAM",addPokemon:t})}}})(We),Ke=Object(J.a)(function(e){return{root:{width:"100vw",minHeight:"100vh",backgroundColor:e.palette.background,display:"flex"}}}),Qe=function(e){var t=Ke();return r.a.createElement("div",{className:t.root},r.a.createElement(X.a,{path:"/",component:oe}),r.a.createElement(a.Suspense,{fallback:r.a.createElement("h1",null,"Loading")},r.a.createElement(X.a,{path:"/id=:id",component:Ve})))},Ye=n(153),qe=n(44),Je=n(84),Xe=n(154),$e=n(152),Ze=function(e){var t=Array.from(Array(7),function(t,n){return r.a.createElement(me.a,{key:n+"gen",onClick:function(){return e.genClick(n)},selected:e.currentGen+1===n+1},n+1)});return r.a.createElement("div",{style:{flexGrow:1,padding:"8px"}}," ",r.a.createElement("p",null,"Generation:")," ",r.a.createElement($e.a,{variant:"contained",color:"secondary"},t))},et=n(131),tt="PokemonPosition",nt=function(e){var t=e.pokemon,n=e.name,o=e.movePokemon,c=Object(a.useRef)(null),i=Object(qe.d)({accept:tt,hover:function(e,n){if(c.current){var a=e.index,r=t.id;if(a!==r){var i=c.current.getBoundingClientRect(),l=(i.bottom-i.top)/4,s=n.getClientOffset().y-i.top;a<r&&s<l||a>r&&s>2*l||(o(a,r),e.index=r)}}}}),l=Object(ce.a)(i,2)[1],s=Object(qe.c)({item:{type:tt,id:t.id,index:t.id},collect:function(e){return{isDragging:e.isDragging()}}}),m=Object(ce.a)(s,2),u=m[0].isDragging?0:1;return(0,m[1])(l(c)),r.a.createElement("span",{ref:c,style:{opacity:u,borderRadius:"50%",overflow:"hidden"}},r.a.createElement(He.a,{name:n}))},at=function(e){var t=Object(J.a)(function(e){return{root:{flex:"1"},button:{borderRadius:"50%",height:"40px",width:"40px",color:"black",backgroundColor:"white",margin:e.spacing()}}})();return r.a.createElement(et.a,{onClick:e.onClick,disabled:!e.pokemonInformation,edge:"end",variant:"contained",color:"white",className:t.button},e.pokemonInformation?r.a.createElement(nt,{movePokemon:e.movePokemon,name:e.pokemonInformation.name,pokemon:e.pokemonInformation}):null)},rt=n(81),ot=n.n(rt),ct=n(82),it=n.n(ct),lt=function(e){var t=Me();return e.pokemon?r.a.createElement(Le.a,{open:e.open,onClose:e.onClose},r.a.createElement("div",{className:t.root},r.a.createElement("h1",{className:t.title},e.pokemon.name),r.a.createElement(He.a,{name:e.pokemon.name}),r.a.createElement("div",null,r.a.createElement(me.a,{onClick:function(){return e.onClickChange("prev")}},"Prev"),r.a.createElement(me.a,{onClick:function(){return e.onClickChange("next")}},"Next")),r.a.createElement("div",null,Array.from(Array(e.teamMembers),function(n,a){return a===e.pokemon.id?r.a.createElement("img",{src:it.a,alt:"pkmn"}):r.a.createElement("img",{className:t.hover,onClick:function(){return e.onClickChange("set",a)},src:ot.a,alt:"pkmn"})})),r.a.createElement("div",null,r.a.createElement("div",{className:t.statsWrapper},r.a.createElement("h2",null,"Ability"),e.pokemon.ability)),r.a.createElement("div",null,r.a.createElement("h2",null,"Nature"),r.a.createElement("div",{className:t.statsWrapper},e.pokemon.nature.name,r.a.createElement("p",null,"INC: ",e.pokemon.nature.inc,r.a.createElement("br",null),"DEC: ",e.pokemon.nature.dec))),r.a.createElement("div",null,r.a.createElement("h2",null,"Moveset"),r.a.createElement("div",{className:t.itemWrapper},e.pokemon.moves.map(function(e){return r.a.createElement("div",{className:t.move},e.move)}))),r.a.createElement(me.a,{variant:"contained",color:"primary",onClick:function(){e.removePkmn(e.pokemon.id),e.onClose()}},"Remove"))):null},st=Object(J.a)(function(e){return{root:{backgroundColor:e.palette.primary.main,flexGrow:1,top:"auto",bottom:0},iconButton:{position:"fixed",right:0,bottom:0,margin:e.spacing(),border:"2px solid white",backgroundColor:e.palette.secondary.main,color:"white","&:hover":{backgroundColor:e.palette.primary.main}}}}),mt=function(e){var t=e.pokemonTeam,n=e.changeGen,o=e.removePkmn,c=e.changeTeamOrder,i=Object(a.useState)(!1),l=Object(ce.a)(i,2),s=l[0],m=l[1],p=Object(a.useState)(null),f=Object(ce.a)(p,2),k=f[0],g=f[1],b=Object(a.useCallback)(function(e,n){var a=Object(u.a)(t);a[e]=Object(d.a)({},t[n],{id:e}),a[n]=Object(d.a)({},t[e],{id:n}),c(a)},[t,c]),v=st(),E=Array.from(Array(6),function(e,n){return r.a.createElement(at,{key:"pokeball"+n,onClick:function(e){return function(e,n){m(!0),g(t[n])}(0,n)},movePokemon:b,pokemonInformation:t[n]?t[n]:null,id:n})}),h=r.a.createElement(lt,{teamMembers:t.length,removePkmn:o,pokemon:k,open:s,onClose:function(){m(!1)},onClickChange:function(e,n){"prev"===e&&k.id>0?g(t[k.id-1]):"next"===e&&k.id<6?g(t[k.id+1]):"set"===e&&g(t[n])}});return r.a.createElement(Ye.a,{className:v.root},h,r.a.createElement(Xe.a,null,r.a.createElement(Ze,{genClick:n}),r.a.createElement(qe.b,{backend:Je.a},r.a.createElement("div",{style:{flex:1,padding:"8px"}}," ",r.a.createElement("p",null,"Team:")," ",E))))},ut=(n(126),Object(s.b)(function(e){return{pokemonTeam:e.pokemonTeam,currentGen:e.selectedGen}},function(e){return{removePkmnFromTeam:function(t){return e({type:"REMOVE_FROM_TEAM",id:t})},genClick:function(t){return e({type:"CHANGE_GEN",selectedGen:t})},changeTeamOrder:function(t){return e({type:"CHANGE_TEAM_POSITION",newTeam:t})}}})(function(e){return r.a.createElement(q,null,r.a.createElement("div",{className:"App"},r.a.createElement(z.a,null),r.a.createElement(Qe,null),r.a.createElement(mt,{changeTeamOrder:e.changeTeamOrder,removePkmn:e.removePkmnFromTeam,pokemonTeam:e.pokemonTeam,changeGen:function(t){return e.genClick(t)}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var dt=Object(m.a)(),pt=Object(l.d)(j,Object(l.a)(dt));dt.run(D),c.a.render(r.a.createElement(s.a,{store:pt},r.a.createElement(i.a,null,r.a.createElement(ut,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.name;return r.a.createElement("img",{src:"http://felixsundqvist.org/pokemon/icons/regular/".concat(t,".png"),alt:t})}},71:function(e,t,n){e.exports=n.p+"static/media/Early_GameBoy.3ada9815.ttf"},72:function(e,t,n){e.exports=n.p+"static/media/sort-down-solid.cc204b0f.svg"},73:function(e,t,n){e.exports=n.p+"static/media/minus-solid.af448422.svg"},74:function(e,t,n){e.exports=n.p+"static/media/loading.bd888bab.gif"},75:function(e,t,n){e.exports=n.p+"static/media/error.fa8aaebb.gif"},76:function(e,t,n){e.exports=n.p+"static/media/error2.c4c5098b.gif"},81:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAyUlEQVRYw+2WuxHDIBAFVQptqAXCC90KIS04VHitECpUShmkz4mRTxbybw489vBmNt7VdxiGvr6+X5wxBiWaiXEei1QNeSSWxNOoH7HKlystIzbyvOV5gFrEVwN2z/2NR6AS8eqLdyT/j4DJfi6frEKAJdpEWKKVI3GWWyKdAAlzAAAwB1iiolSi8iU4529XLXYvkzjn9f4DcU4AAOf87g6UxHFOYA66f0MZkYlzKqIqlxHM4VCaxVXkMiKHlGh+Lmh+IOnr66uxC/l3fuTHPGsLAAAAAElFTkSuQmCC"},82:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAZklEQVRYhe2VQQoAIQwDq///s572WExSpSxkjoLJ2EMNY0w3Q+xfyTmdx17IiuVcRgAtp7JRAbYczkcE1HKoYxbDy5wmUH39R9rTPgELWMB74BerWJW4+hmxEk++Y0REzTPGNBERGzqFCxojSITvAAAAAElFTkSuQmCC"},89:function(e,t,n){e.exports=n(127)}},[[89,1,2]]]);
//# sourceMappingURL=main.66f24971.chunk.js.map