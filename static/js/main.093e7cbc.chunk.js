(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{213:function(e,t,n){e.exports=n(470)},220:function(e,t,n){},222:function(e,t,n){},470:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),l=n.n(o),i=(n(218),n(220),n(10)),s=n(13),c=n(15),u=n(14),h=n(16),m=(n(222),n(33)),d=n.n(m),p=n(47),g=n.n(p),f=n(90),b=n.n(f),C=n(93),v=n.n(C),E=n(92),y=n.n(E),S=n(91),x=n.n(S),w=(r.a.Component,n(46)),k=n(38),O={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},H=(r.a.Component,n(475)),B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={newPaletteAnchor:null,loginAnchor:null,signUpAnchor:null},n.handleClickPalette=function(e){return n.setState({newPaletteAnchor:e.currentTarget})},n.handleClosePalette=function(){return n.setState({newPaletteAnchor:null})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state;e.newPaletteAnchor,e.loginAnchor;return r.a.createElement("div",{style:{padding:"24px"}},r.a.createElement(d.a,{component:H.a,to:"/generate/hsl"},"From HSL"),r.a.createElement(d.a,{component:H.a,to:"/generate/custom"},"Custom"),r.a.createElement(d.a,{component:H.a,to:"/generate/picture"},"From Picture"))}}]),t}(a.Component),j=n(480),L=n(479),M=function e(t,n,a,r){var o=this;switch(Object(i.a)(this,e),this.createChangedHSLColor=function(e,t){var n=t.hueChange,a=t.satChange,r=t.lightChange,l=e.hsl,i=(l.hue+n)%360,s=l.sat+a;s=100==s?s:s%100;var c=l.light+r;c=100==c?c:c%100,o.setAllFromHSL(i,s,c)},this.setAllFromHex=function(e){o.HEXString=e,o.rgb=o.HexToRGB(),o.setAllFromRGB(o.rgb.r,o.rgb.g,o.rgb.b)},this.setAllFromRGB=function(e,t,n){o.rgb={r:e,g:t,b:n},o.hsl=o.RGBtoHSL(e,t,n),o.setColorCSSStrings()},this.setAllFromHSL=function(e,t,n){o.hsl={hue:e,sat:t,light:n},o.rgb=o.HSLtoRGB(e,t,n),o.setColorCSSStrings()},this.setColorCSSStrings=function(){o.setRGBString(),o.setHSLString(),o.RGBtoHex()},this.setRGBString=function(){o.RGBString="rgb("+o.rgb.r+", "+o.rgb.g+", "+o.rgb.b+")"},this.setHSLString=function(){o.HSLString="hsl("+o.hsl.hue+", "+o.hsl.sat+", "+o.hsl.light+")"},this.RGBtoHex=function(){return o.HEXString="#"+o.numberToHex(parseInt(o.rgb.r))+o.numberToHex(parseInt(o.rgb.g))+o.numberToHex(parseInt(o.rgb.b)),o.HEXString},this.numberToHex=function(e){var t=e.toString(16);return 1==t.length?"0"+t:t},this.RGBtoHSL=function(e,t,n){e/=255,t/=255,n/=255;var a,r,o=Math.max(e,t,n),l=Math.min(e,t,n),i=(o+l)/2;if(o==l)a=r=0;else{var s=o-l;switch(r=i>.5?s/(2-o-l):s/(o+l),o){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4}a/=6}var c={hue:Math.round(360*a),sat:Math.round(100*r),light:Math.round(100*i)};return c.hue=360==c.hue?0:c.hue,c},this.HSLtoRGB=function(e,t,n){var a,r,o;if(e/=360,n/=100,0==(t/=100))a=r=o=n;else{var l=function(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e},i=n<.5?n*(1+t):n+t-n*t,s=2*n-i;a=l(s,i,e+1/3),r=l(s,i,e),o=l(s,i,e-1/3)}return{r:Math.round(255*a),g:Math.round(255*r),b:Math.round(255*o)}},this.HSLtoHex=function(e,t,n){return o.rgb=o.HSLtoRGB(e,t,n),o.RGBtoHex()},this.extractNumberFromHex=function(e,t){return parseInt(o.HEXString.substring(e,t),16)},this.HexToRGB=function(){return{r:o.extractNumberFromHex(1,3),g:o.extractNumberFromHex(3,5),b:o.extractNumberFromHex(5,7)}},this.HexToHSL=function(e){return o.rgb=o.HexToRGB(e),o.RGBtoHex()},r){case"RGB":this.setAllFromRGB(t,n,a);break;case"HSL":this.setAllFromHSL(t,n,a);break;case"Hex":this.setAllFromHex(t);break;case"ChangeColor":this.createChangedHSLColor(t,n)}},F=function(e,t,n){e/=255,t/=255,n/=255;var a,r,o=Math.max(e,t,n),l=Math.min(e,t,n),i=(o+l)/2;if(o==l)a=r=0;else{var s=o-l;switch(r=i>.5?s/(2-o-l):s/(o+l),o){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4}a/=6}var c={hue:Math.round(360*a),sat:Math.round(100*r),light:Math.round(100*i)};return c.hue=360==c.hue?0:c.hue,c},A=function(e){return{type:"CHANGE_COLOR",color:e}},R={baseColor:new M(200,20,50,"HSL")},P=n(32),T=n(36),N=n(129),I=function(e){return r.a.createElement("div",{class:"ant-form-item-label"},r.a.createElement("label",{class:"",title:e.title},e.title))},D=n(477),G=n(476),z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={allowClrChange:!1,allowSatChange:!1,mouseDownMainCanvas:!1,mouseDownSatCanvas:!1,pickerCirclePositionX:0,pickerCirclePositionY:0,saturationRectPositionY:0,selectedColor:new M(200,20,50,"HSL")},n.componentDidMount=function(){n.generateMainCanvas(n.props.baseColor),n.generateSatCanvas(n.props.baseColor),document.addEventListener("mouseup",n.setMouseDownToFalse,!1),document.addEventListener("mouseup",n.setSatMouseDownToFalse,!1)},n.generateMainCanvas=function(e){for(var t=e.hsl.sat,n=document.getElementById("main-canvas-color-picker").getContext("2d"),a=0;a<360;a+=1){var r=n.createLinearGradient(a,0,a,200);r.addColorStop(0,"hsl("+a+","+t+"%,0%)"),r.addColorStop(.5,"hsl("+a+","+t+"%,50%)"),r.addColorStop(1,"hsl("+a+","+t+"%,100%)"),n.fillStyle=r,n.fillRect(a,0,a,200)}},n.generateSatCanvas=function(e){for(var t=e.hsl.hue,n=e.hsl.light,a=document.getElementById("saturation-canvas-color-picker").getContext("2d"),r=0;r<202;r+=2)for(var o=0;o<10;o+=1)a.fillStyle="hsl("+t+", "+r/2+"%, "+n+"%)",a.fillRect(o,r,o,r+2)},n.enableColorChange=function(){return n.setState({allowClrChange:!0})},n.disableColorChange=function(){return n.setState({allowClrChange:!1})},n.handleMouseDownMainCanvas=function(e){n.setMouseDownToTrue(),n.enableColorChange(),n.setColorFromMainCanvas(e.clientX,e.clientY)},n.handleMouseMoveMainCanvas=function(e){n.state.mouseDownMainCanvas&&n.state.allowClrChange&&n.setColorFromMainCanvas(e.clientX,e.clientY)},n.setMouseDownToTrue=function(){return n.setState({mouseDownMainCanvas:!0})},n.setMouseDownToFalse=function(){return n.setState({mouseDownMainCanvas:!1})},n.setColorFromMainCanvas=function(e,t){var a=document.getElementById("main-canvas-color-picker").getBoundingClientRect(),r=e-a.left,o=t-a.top,l=Math.round(r),i=n.props.baseColor.hsl.sat,s=Math.round(o/2),c=new M(l,i,s,"HSL");n.setState({selectedColor:c}),n.props.changeBaseColor(c),n.generateSatCanvas(c)},n.handleMouseDownSatCanvas=function(e){n.setSatMouseDownToTrue(),n.enableColorChange(),n.setColorFromSatCanvas(e.clientY)},n.handleMouseMoveSatCanvas=function(e){n.state.mouseDownSatCanvas&&n.state.allowClrChange&&n.setColorFromSatCanvas(e.clientY)},n.setSatMouseDownToTrue=function(){return n.setState({mouseDownSatCanvas:!0})},n.setSatMouseDownToFalse=function(){return n.setState({mouseDownSatCanvas:!1})},n.setColorFromSatCanvas=function(e){var t=e-document.getElementById("saturation-canvas-color-picker").getBoundingClientRect().top;if(!(t<0||t>200)){var a=n.props.baseColor.hsl,r=a.hue,o=Math.round(t/2),l=a.light,i=new M(r,o,l,"HSL");n.props.changeBaseColor(i),n.setState({selectedColor:i}),n.generateMainCanvas(i)}},n.handleFormInput=function(e){n.props.changeBaseColor(e),n.generateMainCanvas(e),n.generateSatCanvas(e)},n.getNumberPickerInput=function(e,t,n,a){return r.a.createElement(D.a,{size:"small",style:{width:"60px"},type:"number",id:e,min:"0",max:t,value:n,onChange:a})},n.setFromHue=function(e){return n.handleFormInput(new M(e.target.value,n.props.baseColor.hsl.sat,n.props.baseColor.hsl.light,"HSL"))},n.setFromSat=function(e){return n.handleFormInput(new M(n.props.baseColor.hsl.hue,e.target.value,n.props.baseColor.hsl.light,"HSL"))},n.setFromLight=function(e){return n.handleFormInput(new M(n.props.baseColor.hsl.hue,n.props.baseColor.hsl.sat,e.target.value,"HSL"))},n.setFromRed=function(e){return n.handleFormInput(new M(e.target.value,n.props.baseColor.rgb.g,n.props.baseColor.rgb.b,"RGB"))},n.setFromGreen=function(e){return n.handleFormInput(new M(n.props.baseColor.rgb.r,e.target.value,n.props.baseColor.rgb.b,"RGB"))},n.setFromBlue=function(e){return n.handleFormInput(new M(n.props.baseColor.rgb.r,n.props.baseColor.rgb.g,e.target.value,"RGB"))},n.setFromHex=function(e){return n.handleFormInput(new M(e.target.value,0,0,"Hex"))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.baseColor,t=e.hsl,n=t.hue,a=t.sat,o=t.light,l=e.rgb,i=l.r,s=l.g,c=l.b,u=e.HEXString;return r.a.createElement("div",{style:{margin:"24px"}},r.a.createElement(G.a,{style:{background:"#f5f5f5"},bordered:!1},r.a.createElement("h2",{style:{textAlign:"left"}},"Pick Color"),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("div",{id:"pickerCircle",style:{width:"16px",height:"16px",border:"1px solid",borderColor:o>50?"#757575":"white",borderRadius:"15px",marginLeft:n-8+"px",marginTop:2*o-8+"px",backgroundColor:u,position:"absolute",zIndex:100}}),r.a.createElement(N.Throttle,{time:"20",handler:"onMouseMove"},r.a.createElement("canvas",{height:"200",width:"360",id:"main-canvas-color-picker",style:{display:"inline",position:"relative",float:"left"},onMouseDown:this.handleMouseDownMainCanvas,onMouseMove:this.handleMouseMoveMainCanvas,onMouseLeave:this.disableColorChange,onMouseEnter:this.enableColorChange}))),r.a.createElement("div",{style:{display:"inline-block",marginLeft:"10px"}},r.a.createElement("div",{id:"saturationCircle",style:{position:"absolute",display:"inline",marginLeft:"-6px",width:"24px",height:"7px",border:"1px solid",borderColor:o>50?"#757575":"#d9d9d9",borderRadius:"3px",marginTop:2*a-5+"px",backgroundColor:u}}),r.a.createElement(N.Throttle,{time:"20",handler:"onMouseMove"},r.a.createElement("canvas",{height:"200",width:"10",id:"saturation-canvas-color-picker",style:{display:"inline",marginRight:"7px",border:"1px solid #d9d9d9"},onMouseDown:this.handleMouseDownSatCanvas,onMouseMove:this.handleMouseMoveSatCanvas,onMouseLeave:this.disableColorChange,onMouseEnter:this.enableColorChange}))),r.a.createElement("div",{style:{width:"400px"}},r.a.createElement("div",{style:{display:"inline-block",width:"83px",margin:"24px"}},r.a.createElement("div",null," ",r.a.createElement(I,{title:"H"}),this.getNumberPickerInput("H",359,n,this.setFromHue)," "),r.a.createElement("div",null," ",r.a.createElement(I,{title:"S"}),this.getNumberPickerInput("S",100,a,this.setFromSat)," "),r.a.createElement("div",null," ",r.a.createElement(I,{title:"L"}),this.getNumberPickerInput("L",100,o,this.setFromLight)," ")),r.a.createElement("div",{style:{display:"inline-block",width:"83px",margin:"18px"}},r.a.createElement("div",null," ",r.a.createElement(I,{title:"R"}),this.getNumberPickerInput("R",255,i,this.setFromRed)),r.a.createElement("div",null," ",r.a.createElement(I,{title:"G"}),this.getNumberPickerInput("G",255,s,this.setFromGreen)),r.a.createElement("div",null," ",r.a.createElement(I,{title:"B"}),this.getNumberPickerInput("B",255,c,this.setFromBlue)," ")),r.a.createElement("div",{style:{display:"inline-block",margin:"18px",width:"113px"}},r.a.createElement("div",{style:{padding:"35px 56px",backgroundColor:u,display:"inline-block"}}),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement(I,{title:"Hex"})," ",r.a.createElement(D.a,{size:"small",style:{width:"72px"},type:"text",id:"Hex",value:u,onChange:this.setFromHex}))),r.a.createElement("div",{style:{width:"100%",display:"block"}}))))}}]),t}(a.Component),U=Object(T.b)(function(e){return{baseColor:e.BaseColorReducer.baseColor}},function(e){return Object(P.a)({changeBaseColor:A},e)})(z),X=n(126),J=n.n(X),V=function(e){return{type:"SELECT_COLOR",color:e}},W={selected:new M(200,20,50,"HSL").HEXString},Y=n(57),q=n.n(Y),_=function(e){var t=JSON.stringify(e),n="data:application/json;charset=utf-8,"+encodeURIComponent(t),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download","palette.json"),a.click()},Z=n(471),K=n(54),Q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hueChange:10,satChange:0,lightChange:8,hueStep:10,satStep:1,lightStep:1,numberOfColors:130,clickedColor:0,selectedPreset:"None"},n.handleHueChange=function(e){return n.setState({hueChange:e.target.value,selectedPreset:"None"})},n.handleSatChange=function(e){return n.setState({satChange:e.target.value,selectedPreset:"None"})},n.handleLightChange=function(e){return n.setState({lightChange:e.target.value,selectedPreset:"None"})},n.handleHueStepChange=function(e){return n.setState({hueStep:e.target.value,selectedPreset:"None"})},n.handleSatStepChange=function(e){return n.setState({satStep:e.target.value,selectedPreset:"None"})},n.handleLightStepChange=function(e){return n.setState({lightStep:e.target.value,selectedPreset:"None"})},n.handleNumberOfColorsChange=function(e){var t=e.target.value;(t>0&&t<144||""==t)&&n.setState({numberOfColors:t,selectedPreset:"None"})},n.selectPreset=function(e){var t=e.target.value;switch(n.setState({selectedPreset:t}),t){case"Analogous":n.setAnalogous();case"Adjacent":n.setAdjacent();case"Tetrad":n.setTetrad();case"Triad":n.setTriad()}},n.reset=function(){n.setState({selectedPreset:"None"}),n.setFilters(10,0,8,1,1,1,6)},n.setAnalogous=function(){return n.setFilters(30,20,20,16,5,1,60)},n.setTetrad=function(){return n.setFilters(30,20,20,16,5,1,60)},n.setMonochromatic=function(){return n.setFilters(30,20,20,16,5,1,60)},n.setAdjacent=function(){return n.setFilters(30,20,20,16,5,1,60)},n.setTriad=function(){return n.setFilters(30,20,20,16,5,1,60)},n.setFilters=function(e,t,a,r,o,l,i){return n.setState({hueChange:e,satChange:t,lightChange:a,hueStep:r,satStep:o,lightStep:l,numberOfColors:i})},n.handleSelectColor=function(e,t){n.setState({clickedColor:t}),n.props.selectColor(e)},n.exportJSON=function(){for(var e=document.getElementById("generated-colors").getElementsByTagName("div"),t={},n=0;n<e.length;n++)t["color"+n]=e[n].attributes.backgroundColor;_(t)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.baseColor,n=t.hsl.hue,a=t.hsl.sat,o=t.hsl.light,l=new M(0,0,0,"RGB"),i=this.state,s=i.hueChange,c=i.satChange,u=i.lightChange,h=i.hueStep,m=i.satStep,d=i.lightStep,p=i.selectedPreset,g=i.numberOfColors,f=i.clickedColor;return r.a.createElement("div",{style:{margin:"24px",width:"440px"}},r.a.createElement(G.a,{style:{background:"#f5f5f5"},bordered:!1},r.a.createElement("h2",{style:{textAlign:"left"}},"Palette ",r.a.createElement(Z.a,{style:{float:"right"},onClick:this.exportJSON}," Export JSON")),r.a.createElement("br",null),r.a.createElement("div",{id:"generated-colors",style:{height:"330px"}},Array.apply(null,{length:g}).map(function(t,i){var p=(n+Math.floor(i/h)*s)%360,g=(a+Math.floor(i/m)*c)%101,b=(o+Math.floor(i/d)*u)%101,C=l.HSLtoHex(p,g,b);return r.a.createElement("div",{onClick:function(){return e.handleSelectColor(C,i)},style:{backgroundColor:C,borderRadius:f==i?"15px":"0",padding:"15px",display:"inline-block",margin:"-2.5px 0"}})})),r.a.createElement("br",null),r.a.createElement("h2",{style:{textAlign:"left"}},"Filters ",r.a.createElement(K.a,{type:"reload",size:"small",style:{float:"right"},onClick:this.reset})),r.a.createElement("div",null,r.a.createElement("h3",null,"Changes:",r.a.createElement("span",{style:{fontSize:"14px",marginLeft:"12px"}},r.a.createElement("span",null,r.a.createElement(I,{title:"H"}),r.a.createElement(D.a,{size:"small",style:{width:"60px"},type:"number",min:"0",max:"360",value:s,onChange:this.handleHueChange})),r.a.createElement("span",{style:{margin:"24px"}},r.a.createElement(I,{title:"S",style:{margin:"24px"}}),r.a.createElement(D.a,{size:"small",style:{width:"60px"},type:"number",min:"0",max:"360",value:c,onChange:this.handleSatChange})),r.a.createElement("span",null,r.a.createElement(I,{title:"L",style:{marginLeft:"24px"}}),r.a.createElement(D.a,{size:"small",style:{width:"60px"},type:"number",min:"0",max:"360",value:u,onChange:this.handleLightChange}))))),r.a.createElement("div",null,r.a.createElement("h3",null,"Steps:",r.a.createElement("span",{style:{fontSize:"14px",marginLeft:"12px"}},r.a.createElement("span",null,r.a.createElement(I,{title:"H"}),r.a.createElement(D.a,{size:"small",style:{width:"60px"},type:"number",min:"0",max:"360",value:h,onChange:this.handleHueStepChange})),r.a.createElement("span",{style:{margin:"24px"}},r.a.createElement(I,{title:"S",style:{marginLeft:"24px"}}),r.a.createElement(D.a,{size:"small",style:{width:"60px"},type:"number",min:"0",max:"360",value:m,onChange:this.handleSatStepChange})),r.a.createElement("span",null,r.a.createElement(I,{title:"L",style:{marginLeft:"24px"}}),r.a.createElement(D.a,{size:"small",style:{width:"60px"},type:"number",min:"0",max:"360",value:d,onChange:this.handleLightStepChange}))))),r.a.createElement("div",null,r.a.createElement("h3",null,"Preset:",r.a.createElement(J.a,{value:p,onChange:this.selectPreset,style:{marginLeft:"12px"}},r.a.createElement(q.a,{value:"None"}," ",r.a.createElement("em",null,"None")),r.a.createElement(q.a,{value:"Analogous"},r.a.createElement("em",null,"Analogous")),r.a.createElement(q.a,{value:"Adjacent"},r.a.createElement("em",null,"Adjacent")),r.a.createElement(q.a,{value:"Triad"},r.a.createElement("em",null,"Triad")),r.a.createElement(q.a,{value:"Tetrad"},r.a.createElement("em",null,"Tetrad"))," "),r.a.createElement("span",{style:{margin:"24px"}},r.a.createElement(I,{title:"Number Of Colors"}),r.a.createElement(D.a,{size:"small",style:{width:"60px"},type:"number",min:"0",max:"360",value:g,onChange:this.handleNumberOfColorsChange}))))),r.a.createElement("br",null))}}]),t}(a.Component),$=Object(T.b)(function(e){return{baseColor:e.BaseColorReducer.baseColor}},function(e){return Object(P.a)({selectColor:V},e)})(Q),ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=n.initialState,n.reset=function(){return n.setState(n.initialState)},n.setColor=function(e,t){e.stopPropagation();var a=n.state.components;a[t]=n.props.selected,n.setState({components:a})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this,n=this.state.components,a=n.appBar,o=n.title,l=n.header,i=(n.header2,n.background),s=n.primaryButton,c=n.secondaryButton,u=n.successButton,h=n.dangerButton,m=n.infoButton,d=n.primaryButtonFont,p=n.secondaryButtonFont,g=n.successButtonFont,f=n.dangerButtonFont,b=n.infoButtonFont,C=n.paragraph,v=this.props.selected,E=new M(v,0,0,"Hex").hsl.light>50?"black":"white";return r.a.createElement(G.a,{bordered:!1,headStyle:{backgroundColor:v},style:{width:"500px",margin:"24px",background:"#f5f5f5"}},r.a.createElement("h2",{style:{margin:"15px 0"}},"Apply Color:",r.a.createElement(Z.a,{style:{float:"right",marginLeft:"5px"},onClick:function(){return _(n)}}," ExportJSON  "),r.a.createElement(Z.a,{style:{float:"right"},onClick:this.reset}," ",r.a.createElement(K.a,{type:"reload"}),"  ")),r.a.createElement("h3",{style:{backgroundColor:v,padding:"15px 0",textAlign:"center",color:E,border:"1px solid "+E}},v),r.a.createElement("div",{style:{width:"450px",display:"inline-block"}},r.a.createElement(G.a,(e={style:{},id:"try-background",onClick:function(e){return t.setColor(e,"background")}},Object(w.a)(e,"style",{backgroundColor:i}),Object(w.a)(e,"headStyle",{backgroundColor:a}),Object(w.a)(e,"title",r.a.createElement("h3",{id:"try-title",style:{color:o},onClick:function(e){return t.setColor(e,"title")}},"Awesome Title")),e),r.a.createElement("h3",{style:{color:l},id:"try-header",onClick:function(e){return t.setColor(e,"header")}}," Header "),r.a.createElement("p",{id:"try-text",style:{color:C},onClick:function(e){return t.setColor(e,"paragraph")}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",r.a.createElement("br",null),r.a.createElement("br",null),"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("br",null),r.a.createElement("div",{style:{margin:"15px 0"}},r.a.createElement(Z.a,{onClick:function(e){return t.setColor(e,"primaryButton")},id:"try-button-primary",style:{backgroundColor:s,color:d}},r.a.createElement("div",{onClick:function(e){return t.setColor(e,"primaryButtonFont")},onMouseOver:function(e){return e.stopPropagation()},id:"try-button-primary-font"},"Primary ")),r.a.createElement(Z.a,{id:"try-button-secondary",onClick:function(e){return t.setColor(e,"secondaryButton")},style:{backgroundColor:c,color:p,marginLeft:"15px"}},r.a.createElement("div",{onClick:function(e){return t.setColor(e,"secondaryButtonFont")},id:"try-button-secondary-font"}," Secondary"))),r.a.createElement("div",{style:{margin:"15px 0"}},r.a.createElement(Z.a,{onClick:function(e){return t.setColor(e,"successButton")},id:"try-button-success",style:{backgroundColor:u,color:g}},r.a.createElement("div",{onClick:function(e){return t.setColor(e,"successButtonFont")},id:"try-button-success-font"},r.a.createElement(K.a,{type:"check-circle"})," Success")),r.a.createElement(Z.a,{onClick:function(e){return t.setColor(e,"infoButton")},id:"try-button-info",style:{backgroundColor:m,color:b,marginLeft:"15px"}},r.a.createElement("div",{onClick:function(e){return t.setColor(e,"infoButtonFont")},id:"try-button-info-font"},r.a.createElement(K.a,{type:"info-circle"})," Info")),r.a.createElement(Z.a,{onClick:function(e){return t.setColor(e,"dangerButton")},id:"try-button-danger",style:{backgroundColor:h,color:f,marginLeft:"15px"}},r.a.createElement("div",{onClick:function(e){return t.setColor(e,"dangerButtonFont")},id:"try-button-danger-font"},r.a.createElement(K.a,{type:"warning"})," Danger"))))))}},{key:"initialState",get:function(){return{components:{appBar:"#ffffff",title:"#353535",header:"#353535",header2:"#353535",background:"#ffffff",primaryButton:"#ffffff",secondaryButton:"#ffffff",successButton:"#ffffff",dangerButton:"#ffffff",infoButton:"#ffffff",primaryButtonFont:"#353535",secondaryButtonFont:"#353535",successButtonFont:"#353535",dangerButtonFont:"#353535",infoButtonFont:"#353535",paragraph:"#353535"}}}}]),t}(a.Component),te=Object(T.b)(function(e){return{selected:e.SelectedColorReducer.selected}},function(e){})(ee),ne=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"inline-block",verticalAlign:"top"}},r.a.createElement(te,null)),r.a.createElement("div",{style:{display:"inline-block",verticalAlign:"top"}}," ",r.a.createElement($,null)," "),r.a.createElement("div",{style:{display:"inline-block",verticalAlign:"top"}}," ",r.a.createElement(U,null)," "))}}]),t}(a.Component),ae=n(17),re=n.n(ae),oe=n(127),le=n.n(oe),ie=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={colors:[],clickedColor:0},n.componentDidMount=function(){return n.setState({colors:[n.props.baseColor.HEXString]})},n.handleColorClick=function(e,t,a){var r=n.state.colors;r[a]=n.props.baseColor.HEXString,n.selectColor(e,r,t)},n.selectColor=function(e,t,a){n.setState({colors:t,clickedColor:a}),n.props.selectColor(e),n.props.changeBaseColor(new M(e,0,0,"Hex"))},n.addNewColor=function(e,t){var a=n.state.colors;a[t]=e,a.push(e),n.selectColor(e,a,a.length-1)},n.exportJSON=function(){return _(n.state.colors)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state.colors);var t=this.props.baseColor.HEXString,n=this.state.clickedColor;return r.a.createElement(re.a,{container:!0,spacing:8,style:{width:"400px"}},r.a.createElement(re.a,{item:!0,xs:12},r.a.createElement("button",{onClick:this.exportJSON}," Export JSON")),r.a.createElement(re.a,{item:!0,xs:12},r.a.createElement("div",{id:"generated-colors",style:{display:"flex",flexWrap:"wrap"}},this.state.colors.map(function(a,o){return r.a.createElement("div",{onClick:function(){return e.handleColorClick(a,o,n)},style:{backgroundColor:n==o?t:a,borderRadius:n==o?"30px":"0",padding:"30px",display:"block"}})}),r.a.createElement("div",{onClick:function(){return e.addNewColor(t,n)},style:{border:"gray solid 1px",display:"block",width:"60px",height:"60px"}},r.a.createElement(le.a,{style:{margin:"auto",marginTop:"15px"}})))))}}]),t}(a.Component),se=Object(T.b)(function(e){return{baseColor:e.BaseColorReducer.baseColor}},function(e){return Object(P.a)({selectColor:V,changeBaseColor:A},e)})(ie),ce=n(55),ue=n.n(ce),he=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(re.a,{container:!0,spacing:24},r.a.createElement(re.a,{item:!0,xs:3},r.a.createElement(ue.a,null,r.a.createElement(U,null),r.a.createElement(se,null))),r.a.createElement(re.a,{item:!0,xs:9},r.a.createElement(ue.a,null,r.a.createElement(te,null))))}}]),t}(a.Component),me=(n(455),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={palette1:[],palette2:[],palette3:[],palette4:[],palette5:[],palette6:[],palette7:[],palette8:[],clickedColor:0,image:"",imagePreviewUrl:""},n.handleSubmit=function(e){e.preventDefault();var t=new Image;t.src=n.state.imagePreviewUrl;var a=document.createElement("canvas");a.width=t.width,a.height=t.height;var r=a.getContext("2d");r.drawImage(t,0,0);var o=r.getImageData(0,0,t.width,t.height).data,l=function(e,t){for(var n=0;n<t;n++)e.push({totalHue:0,totalSat:0,totalLight:0,number:0})},i=[],s=[],c=[],u=[];l(i,12),l(s,24),l(c,48),l(u,72);var h=function(e,t,n){var a=0!=e.hue?Math.floor(e.hue/n):0;t[a].totalHue+=e.hue,t[a].totalSat+=e.sat,t[a].totalLight+=e.light,t[a].number+=1},m=function(e,t){for(var n=0;n<t;n++)e.push({light:{totalHue:0,totalSat:0,totalLight:0,number:0},dark:{totalHue:0,totalSat:0,totalLight:0,number:0}})},d=[],p=[],g=[],f=[];m(d,12),m(p,24),m(g,48),m(f,72);for(var b=function(e,t,n){var a=0!=e.hue?Math.floor(e.hue/n):0,r=e.light>50?t[a].light:t[a].dark;r.totalHue+=e.hue,r.totalSat+=e.sat,r.totalLight+=e.light,r.number+=1},C=0;C<o.length-4;C+=4){var v=o[C],E=o[C+1],y=o[C+2],S=F(v,E,y);h(S,i,30),h(S,s,15),h(S,c,7.5),h(S,u,5),b(S,d,30),b(S,p,15),b(S,g,7.5),b(S,f,5)}var x=function(e){return"hsl("+e.totalHue/e.number+", "+e.totalSat/e.number+"%, "+e.totalLight/e.number+"% )"},w=i.map(x),k=s.map(x),O=c.map(x),H=u.map(x),B=function(e){var t=e.map(function(e){var t=e.light,n="hsl("+t.totalHue/t.number+", "+t.totalSat/t.number+"%, "+t.totalLight/t.number+"% )",a=e.dark;return{dark:"hsl("+a.totalHue/a.number+", "+a.totalSat/a.number+"%, "+a.totalLight/a.number+"% )",light:n}}),n=t.map(function(e){return e.dark}),a=t.map(function(e){return e.light}),r=[];return r=(r=r.concat(n)).concat(a)},j=B(d),L=B(p),M=B(g),A=B(f);n.setState({palette1:w,palette2:k,palette3:O,palette4:H,palette5:j,palette6:L,palette7:M,palette8:A})},n.handleImageChange=function(e){e.preventDefault();var t=new FileReader,a=e.target.files[0];t.onloadend=function(){return n.setState({image:a,imagePreviewUrl:t.result})},t.readAsDataURL(a)},n.getTiles=function(e){var t="";return 0!=e.length&&(t=e.map(function(e){return r.a.createElement(re.a,{item:!0,xs:1}," ",r.a.createElement("div",{style:{padding:"30px",backgroundColor:e}})," ")})),t},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.imagePreviewUrl,n=null;n=t?r.a.createElement("img",{id:"uploaded-image",src:t,style:{width:"400px"}}):r.a.createElement("div",{className:"previewText"},"Please select an Image for Preview");var a=this.getTiles(this.state.palette1),o=this.getTiles(this.state.palette2),l=this.getTiles(this.state.palette3),i=this.getTiles(this.state.palette4),s=this.getTiles(this.state.palette5),c=this.getTiles(this.state.palette6),u=this.getTiles(this.state.palette7),h=this.getTiles(this.state.palette8);return r.a.createElement("div",{className:"previewComponent"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{className:"fileInput",type:"file",onChange:function(t){return e.handleImageChange(t)}}),r.a.createElement("button",{className:"submitButton",type:"submit",onClick:function(t){return e.handleSubmit(t)}},"Upload Image")),r.a.createElement("div",{className:"imgPreview"}," ",n," "),r.a.createElement("canvas",{id:"canv"}),r.a.createElement("h3",null," Version 1 (12, by Hue) "),r.a.createElement(re.a,{container:!0,spacing:0,style:{width:"400px"}},a),r.a.createElement("h3",null," Version 2 (24, by Hue) "),r.a.createElement(re.a,{container:!0,spacing:0,style:{width:"400px"}},o),r.a.createElement("h3",null," Version 3 (48, by Hue) "),r.a.createElement(re.a,{container:!0,spacing:0,style:{width:"400px"}},l),r.a.createElement("h3",null," Version 4 (72, by Hue) "),r.a.createElement(re.a,{container:!0,spacing:0,style:{width:"400px"}},i),r.a.createElement("h3",null," Version 5 (12, by Hue and Light) "),r.a.createElement(re.a,{container:!0,spacing:0,style:{width:"400px"}},s),r.a.createElement("h3",null," Version 6 (24, by Hue and Light) "),r.a.createElement(re.a,{container:!0,spacing:0,style:{width:"400px"}},c),r.a.createElement("h3",null," Version 7 (48, by Hue and Light) "),r.a.createElement(re.a,{container:!0,spacing:0,style:{width:"400px"}},u),r.a.createElement("h3",null," Version 8 (72, by Hue and Light) "),r.a.createElement(re.a,{container:!0,spacing:0,style:{width:"400px"}},h))}}]),t}(a.Component)),de=Object(T.b)(function(e){return{baseColor:e.BaseColorReducer.baseColor}},function(e){return Object(P.a)({selectColor:V,changeBaseColor:A},e)})(me),pe=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(re.a,{container:!0,spacing:24},r.a.createElement(re.a,{item:!0,xs:3},r.a.createElement(ue.a,null,r.a.createElement(de,null))),r.a.createElement(re.a,{item:!0,xs:9},r.a.createElement(ue.a,null,r.a.createElement(te,null))))}}]),t}(a.Component),ge=n(207),fe=n.n(ge),be=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={palettes:[1,1,1,1,1,1,1,1,1,1,1,1]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(re.a,{container:!0,spacing:24,style:{marginTop:"24px"}},this.state.palettes.map(function(e){return r.a.createElement(re.a,{item:!0,xs:3}," ",r.a.createElement(fe.a,{style:{padding:"50px"}},"A")," ")}))}}]),t}(a.Component),Ce=function(){return r.a.createElement("main",null,r.a.createElement(j.a,null,r.a.createElement(L.a,{exact:!0,path:"/generate/hsl",component:ne}),r.a.createElement(L.a,{path:"/generate/custom",component:he}),r.a.createElement(L.a,{path:"/generate/picture",component:pe}),r.a.createElement(L.a,{path:"/community",component:be})))},ve=r.a.createContext(null),Ee=ve,ye=n(209),Se=n.n(ye),xe=(n(468),{apiKey:"AIzaSyB1JWce7ZQ-7DyJXBo5pIMnIZ-ndiki_m8",authDomain:"awesome-cpg.firebaseapp.com",databaseURL:"https://awesome-cpg.firebaseio.com",projectId:"awesome-cpg",storageBucket:"awesome-cpg.appspot.com",messagingSenderId:"641260986127"}),we=function e(){var t=this;Object(i.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},Se.a.initializeApp(xe)},ke=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Ee.Consumer,null,function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),r.a.createElement(B,{firebase:e}),r.a.createElement(Ce,null))})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=Object(P.b)({BaseColorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return"CHANGE_COLOR"==t.type?Object(k.a)({},e,{baseColor:t.color}):e},SelectedColorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return"SELECT_COLOR"==t.type?Object(k.a)({},e,{selected:t.color}):e}}),He=n(478),Be=Object(P.c)(Oe);l.a.render(r.a.createElement(T.a,{store:Be},r.a.createElement(He.a,null,r.a.createElement(Ee.Provider,{value:new we},r.a.createElement(ke,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[213,2,1]]]);
//# sourceMappingURL=main.093e7cbc.chunk.js.map