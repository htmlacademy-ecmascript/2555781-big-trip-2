(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",l="week",o="month",d="quarter",c="year",p="date",u="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),r=n-s<0,a=t.clone().add(i+(r?-1:1),o);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:c,w:l,d:a,D:p,h:r,m:s,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=h;var g=function(e){return e instanceof M},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var l=t.name;b[l]=t,s=l}return!i&&s&&(y=s),s||!i&&y},w=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},T=m;T.l=$,T.i=g,T.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var _=h.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(v);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return T},_.isValid=function(){return!(this.$d.toString()===u)},_.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return w(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<w(e)},_.$g=function(e,t,n){return T.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,d=!!T.u(t)||t,u=T.p(e),v=function(e,t){var i=T.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return d?i:i.endOf(a)},f=function(e,t){return T.w(n.toDate()[e].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,_=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case c:return d?v(1,0):v(31,11);case o:return d?v(1,_):v(0,_+1);case l:var b=this.$locale().weekStart||0,g=(h<b?h+7:h)-b;return v(d?m-g:m+(6-g),_);case a:case p:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var l,d=T.p(e),u="set"+(this.$u?"UTC":""),v=(l={},l[a]=u+"Date",l[p]=u+"Date",l[o]=u+"Month",l[c]=u+"FullYear",l[r]=u+"Hours",l[s]=u+"Minutes",l[i]=u+"Seconds",l[n]=u+"Milliseconds",l)[d],f=d===a?this.$D+(t-this.$W):t;if(d===o||d===c){var h=this.clone().set(p,1);h.$d[v](f),h.init(),this.$d=h.set(p,Math.min(this.$D,h.daysInMonth())).$d}else v&&this.$d[v](f);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[T.p(e)]()},_.add=function(n,d){var p,u=this;n=Number(n);var v=T.p(d),f=function(e){var t=w(u);return T.w(t.date(t.date()+Math.round(e*n)),u)};if(v===o)return this.set(o,this.$M+n);if(v===c)return this.set(c,this.$y+n);if(v===a)return f(1);if(v===l)return f(7);var h=(p={},p[s]=e,p[r]=t,p[i]=1e3,p)[v]||1,_=this.$d.getTime()+n*h;return T.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=T.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,d=n.months,c=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},p=function(e){return T.s(r%12||12,e,"0")},v=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:T.s(l+1,2,"0"),MMM:c(n.monthsShort,l,d,3),MMMM:c(d,l),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:T.s(r,2,"0"),h:p(1),hh:p(2),a:v(r,a,!0),A:v(r,a,!1),m:String(a),mm:T.s(a,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(e,t){return t||h[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,p,u){var v,f=T.p(p),h=w(n),_=(h.utcOffset()-this.utcOffset())*e,m=this-h,y=T.m(this,h);return y=(v={},v[c]=y/12,v[o]=y,v[d]=y/3,v[l]=(m-_)/6048e5,v[a]=(m-_)/864e5,v[r]=m/t,v[s]=m/e,v[i]=m/1e3,v)[f]||m,u?y:T.a(y)},_.daysInMonth=function(){return this.endOf(o).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return T.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},h}(),S=M.prototype;return w.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",o],["$y",c],["$D",p]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,M,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=b[y],w.Ls=b,w.p={},w}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e="afterbegin";function t(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function i(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}var s=n(484),r=n.n(s);const a=[{type:"taxi",offers:[]},{type:"bus",offers:[{id:"31",title:"1Upgrade to a business class",price:120},{id:"32",title:"1Add luggage",price:200},{id:"33",title:"1Switch to comfort class",price:300}]},{type:"train",offers:[{id:"31",title:"2Upgrade to a business class",price:120},{id:"32",title:"2Add luggage",price:200},{id:"33",title:"2Switch to comfort class",price:300}]},{type:"ship",offers:[{id:"31",title:"3Upgrade to a business class",price:120},{id:"32",title:"3Add luggage",price:200},{id:"33",title:"3Switch to comfort class",price:300}]},{type:"drive",offers:[]},{type:"flight",offers:[{id:"31",title:"4Upgrade to a business class",price:120},{id:"32",title:"4Add luggage",price:200},{id:"33",title:"4Switch to comfort class",price:300}]},{type:"check-in",offers:[{id:"31",title:"5Upgrade to a business class",price:120},{id:"32",title:"5Add luggage",price:200},{id:"33",title:"5Switch to comfort class",price:300}]},{type:"sightseeing",offers:[{id:"31",title:"6Upgrade to a business class",price:120},{id:"32",title:"6Add luggage",price:200},{id:"33",title:"6Switch to comfort class",price:300}]},{type:"restaurant",offers:[{id:"31",title:"Upgrade to a business class",price:120},{id:"32",title:"Add luggage",price:200},{id:"33",title:"Switch to comfort class",price:300}]}],l=[{id:"1",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[]},{id:"2",description:"Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.",name:"Geneva",pictures:[{src:"https://loremflickr.com/248/152?random=2",description:"Geneva parliament building"},{src:"https://loremflickr.com/248/152?random=20",description:"Geneva parliament building"}]},{id:"3",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Amsterdam",pictures:[{src:"https://loremflickr.com/248/152?random=3",description:"Amsterdam parliament building"}]},{id:"4",description:"Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:"Cardiff",pictures:[{src:"https://loremflickr.com/248/152?random=4",description:"Cardiff parliament building"}]},{id:"5",description:"Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.",name:"Belfast",pictures:[{src:"https://loremflickr.com/248/152?random=5",description:"Belfast parliament building"}]},{id:"6",description:"Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.",name:"Leeds",pictures:[{src:"https://loremflickr.com/248/152?random=6",description:"Leeds parliament building"}]},{id:"7",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.",name:"Manchester ",pictures:[{src:"https://loremflickr.com/248/152?random=7",description:"Manchester  parliament building"}]},{id:"8",description:"Swansea, is a beautiful city, a true asian pearl, with crowded streets.",name:"Swansea",pictures:[{src:"https://loremflickr.com/248/152?random=8",description:"Swansea parliament building"}]},{id:"9",description:"Glasgow, is a beautiful city, a true asian pearl, with crowded streets.",name:"Glasgow",pictures:[{src:"https://loremflickr.com/248/152?random=9",description:"Glasgow parliament building"}]}],o=e=>e?r()(e).format("DD/MM/YY HH:mm"):"",d=e=>e?r()(e).format("HH:mm"):"",c=e=>e.charAt(0).toUpperCase()+e.slice(1),p=e=>a.find((t=>t.type===e)),u=e=>null===e||""===e||0===e.length;class v{constructor({point:e}){this.point=e}getTemplate(){return(e=>{const{basePrice:t,dateFrom:n,dateTo:i,isFavorite:s,offers:a,type:o,destination:u}=e,v=d(n),f=d(i),h=(_=n)?r()(_).format("MMM DD"):"";var _;const m=c(o),y=s?"event__favorite-btn--active":"",b=(e=>l.find((t=>t.id===e)).name)(u);return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="${h}">${h}</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${m} ${b}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="${v}">${v}</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="${f}">${f}</time>\n                  </p>\n                  <p class="event__duration">30M</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${t}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                ${((e,t)=>p(t).offers.map((({id:t,title:n,price:i})=>e.includes(t)?`<ul class="event__selected-offers">\n                  <li class="event__offer">\n                    <span class="event__offer-title">${n}</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">${i}</span>\n                  </li>\n                </ul>`:"")).join(""))(a,o)}\n                </ul>\n                <button class="event__favorite-btn ${y}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>`})(this.point)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class f{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n              <div class="trip-sort__item  trip-sort__item--day">\n                <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n                <label class="trip-sort__btn" for="sort-day">Day</label>\n              </div>\n              <div class="trip-sort__item  trip-sort__item--event">\n                <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n                <label class="trip-sort__btn" for="sort-event">Event</label>\n              </div>\n              <div class="trip-sort__item  trip-sort__item--time">\n                <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n                <label class="trip-sort__btn" for="sort-time">Time</label>\n              </div>\n              <div class="trip-sort__item  trip-sort__item--price">\n                <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n                <label class="trip-sort__btn" for="sort-price">Price</label>\n              </div>\n              <div class="trip-sort__item  trip-sort__item--offer">\n                <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n                <label class="trip-sort__btn" for="sort-offer">Offers</label>\n              </div>\n            </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class h{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const _=e=>{const{basePrice:t,dateFrom:n,dateTo:i,destination:s,id:r,offers:a,type:d}=e,v=o(n),f=o(i);return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle${r}">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle${r}" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n\n                        <div class="event__type-item">\n                          <input id="event-type-taxi-${r}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-${r}">Taxi</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-bus-${r}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-${r}">Bus</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-train-${r}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                          <label class="event__type-label  event__type-label--train" for="event-type-train-${r}">Train</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-ship-${r}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-${r}">Ship</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-drive-${r}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-${r}">Drive</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-flight-${r}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-${r}">Flight</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-check-in-${r}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-${r}">Check-in</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-sightseeing-${r}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-${r}">Sightseeing</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-restaurant-${r}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-${r}">Restaurant</label>\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-${r}">\n                      ${c(d)}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-${r}" type="text" name="event-destination" value="Chamonix" list="destination-list-${r}">\n                    <datalist id="destination-list-${r}">${l.map((({name:e})=>`<option value="${e}"></option>`))}\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-${r}">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-${r}" type="text" name="event-start-time" value="${v}">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-${r}">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-${r}" type="text" name="event-end-time" value="${f}">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-${r}">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-${r}" type="text" name="event-price" value="${t}">\n                  </div>\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Delete</button>\n                  <button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>\n                </header>\n\n                    ${((e,t)=>{const n=p(t).offers;return u(n)?"":`<section class="event__details">\n                  <section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                    ${n.map((({id:n,title:i,price:s})=>`<div class="event__offer-selector"><input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}-${n}" type="checkbox" name="event-offer-${t}" ${e.includes(n)?"checked":""}>\n            <label class="event__offer-label" for="event-offer-${t}-${n}">\n                <span class="event__offer-title">${i}</span>\n                &plus;&euro;&nbsp;\n                <span class="event__offer-price">${s}</span>\n            </label> </div>`)).join("")}</div>\n          </section>`})(a,d)}\n\n                  ${(e=>{if(u(e))return"";const t=(n=e,l.find((e=>e.id===n)));var n;const i=t.pictures;return`<section class="event__details">\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${t.description}</p>\n\n        <div class="event__photos-container">\n          <div class="event__photos-tape">\n            ${i.map((({src:e,description:t})=>`<img class="event__photo" src="${e}" alt="${t}">`)).join("")}\n          </div>\n        </div>\n      </section>\n    </section>`})(s)}\n                </section>\n              </form>\n              </li>`};class m{constructor({point:e}){this.point=e}getTemplate(){return _(this.point)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const y=[{id:"f1",basePrice:1100,dateFrom:"2019-06-10T23:55:56.845Z",dateTo:"2019-07-11T23:23:13.375Z",destination:"1",isFavorite:!0,offers:["31","32","33"],type:"taxi"},{id:"f2",basePrice:800,dateFrom:"2018-05-10T19:55:56.845Z",dateTo:"2018-05-11T11:19:13.375Z",destination:"2",isFavorite:!0,offers:["31","32","33"],type:"bus"},{id:"f3",basePrice:700,dateFrom:"2017-01-10T20:55:56.845Z",dateTo:"2017-01-11T11:20:13.375Z",destination:"3",isFavorite:!1,offers:["31","32","33"],type:"train"},{id:"f4",basePrice:600,dateFrom:"2016-07-10T21:55:56.845Z",dateTo:"2016-07-11T11:21:13.375Z",destination:"4",isFavorite:!0,offers:["31","33"],type:"ship"},{id:"f5",basePrice:500,dateFrom:"2015-12-10T18:55:56.845Z",dateTo:"2015-12-11T11:18:13.375Z",destination:"5",isFavorite:!1,offers:["32","33"],type:"drive"},{id:"f6",basePrice:400,dateFrom:"2020-11-10T17:55:56.845Z",dateTo:"2020-11-11T11:17:13.375Z",destination:"6",isFavorite:!0,offers:["32"],type:"flight"},{id:"f7",basePrice:300,dateFrom:"2021-07-10T15:55:56.845Z",dateTo:"2021-07-11T11:15:13.375Z",destination:"7",isFavorite:!1,offers:["31","32","33"],type:"check-in"},{id:"f8",basePrice:200,dateFrom:"2022-07-10T14:55:56.845Z",dateTo:"2022-07-11T11:14:13.375Z",destination:"8",isFavorite:!0,offers:["31","32","33"],type:"sightseeing"},{id:"f9",basePrice:100,dateFrom:"2023-09-10T13:55:56.845Z",dateTo:"2023-09-11T11:13:13.375Z",destination:"8",isFavorite:!1,offers:["31"],type:"restaurant"}],b=()=>{return(e=y)[Math.floor(Math.random()*e.length)];var e},g=document.querySelector(".trip-events"),$=document.querySelector(".trip-controls__filters"),w=document.querySelector(".trip-main"),T=new class{points=Array.from({length:3},b);offers=a;destinations=l;getPoint(){return this.points}};i(new class{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n            <div class="trip-info__main">\n              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n              <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n            </div>\n\n            <p class="trip-info__cost">\n              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n            </p>\n          </section>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},w,e),i(new class{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},$,e);const M=new class{TaskListComponent=new h;constructor({boardContainer:e,pointsModel:t}){this.boardContainer=e,this.pointsModel=t}init(){this.boardPoints=[...this.pointsModel.getPoint()],i(new f,this.boardContainer),i(this.TaskListComponent,this.boardContainer),i(new m({point:this.boardPoints[0]}),this.TaskListComponent.getElement());for(let e=0;e<this.boardPoints.length;e++)i(new v({point:this.boardPoints[e]}),this.TaskListComponent.getElement())}}({boardContainer:g,pointsModel:T});M.init()})()})();
//# sourceMappingURL=bundle.74a363ad09b83220e307.js.map