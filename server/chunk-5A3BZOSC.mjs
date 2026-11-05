import './polyfills.server.mjs';
import{a as o4,b as B2,c as f4}from"./chunk-4AGMTLTU.mjs";import{b as s4}from"./chunk-I4NQ7RAU.mjs";import{$ as v,A as j,Aa as a1,B as V,Bb as a4,C as o2,Ea as l1,Eb as O,F as w2,Fa as f2,Ga as A,Ha as h,Ia as k2,Ja as A2,K as l2,Ka as P2,Na as $1,O as U1,Oa as X1,Pa as K,Ra as N,Sa as Y1,Ta as R,Tb as l4,Wa as Q1,Wb as e4,X as M2,Za as T2,_ as O1,_a as F2,ab as K1,ba as T,c as y2,cc as r4,da as E,e as J2,ea as W1,ec as i4,fc as D2,ga as q1,gb as J1,gc as n4,ia as G1,j as R1,jc as t2,kb as Z1,l as _1,o as E1,pa as F,qa as D,r as Z2,ra as j1,s as I1,sa as V1,ta as v2,ua as L2,v as Q,va as B,wa as d,xa as L,ya as b,yb as c4,z as G,za as c1}from"./chunk-RKL5S7TF.mjs";import"./chunk-YUXPWLFJ.mjs";var n0=c=>({"rotate-180":c});function s0(c,l){if(c&1){let a=f2();d(0,"div",6)(1,"div")(2,"span",7),N(3),L()(),d(4,"ul",8)(5,"li")(6,"a",9),A("click",function(){G(a);let r=h();return j(r.closeDropdown())}),V(),d(7,"svg",10),b(8,"path",11),L(),N(9),L()(),o2(),d(10,"li")(11,"a",9),A("click",function(){G(a);let r=h();return j(r.closeDropdown())}),V(),d(12,"svg",10),b(13,"path",12),L(),N(14),L()(),o2(),d(15,"li")(16,"a",13),A("click",function(){G(a);let r=h();return j(r.closeDropdown())}),V(),d(17,"svg",10),b(18,"path",14),L(),N(19," Support "),L()()(),o2(),d(20,"a",15),A("click",function(){G(a);let r=h();return j(r.signout())}),N(21),L()()}if(c&2){let a=h();v(3),R(" Hi, ",a.currentUser==null?null:a.currentUser.name," "),v(3),B("routerLink",a.isGuestUser()?"/user/signin":"/user/profile"),v(3),R(" ",a.isGuestUser()?"Signin":"Edit profile"," "),v(2),B("routerLink",a.isGuestUser()?"/user/signup":"/user/settings"),v(3),R(" ",a.isGuestUser()?"Signup":"Account settings"," "),v(7),R(" ",a.isGuestUser()?"Home":"Sign out"," ")}}var t4=(()=>{class c{authService;elementRef;isOpen=!1;subDropdownOpen=!1;currentLocale="en";isGuestUser=l2(!0);currentUser=null;constructor(a,e){this.authService=a,this.elementRef=e}ngOnInit(){console.log(localStorage.getItem("currentUser"),this.authService.currentUserValue),this.currentUser=this.authService.currentUserValue,this.currentUser?this.isGuestUser.set(!1):this.currentUser=this.authService.guestUserValue,localStorage.getItem("dir")==="rtl"||document.documentElement.getAttribute("dir")==="rtl"?(this.currentLocale="ar",document.documentElement.setAttribute("dir","rtl")):(this.currentLocale="en",document.documentElement.setAttribute("dir","ltr"))}toggleDropdown(a){a?.stopPropagation(),this.isOpen=!this.isOpen,this.isOpen||(this.subDropdownOpen=!1)}closeDropdown(){this.isOpen=!1,this.subDropdownOpen=!1}toggleSubDropdown(a){a.stopPropagation(),this.subDropdownOpen=!this.subDropdownOpen}selectLanguage(a,e){e?.stopPropagation(),this.currentLocale=a,a==="ar"?(document.documentElement.setAttribute("dir","rtl"),localStorage.setItem("dir","rtl")):(document.documentElement.setAttribute("dir","ltr"),localStorage.setItem("dir","ltr")),this.closeDropdown()}onDocumentClick(a){this.isOpen&&!this.elementRef.nativeElement.contains(a.target)&&this.closeDropdown()}signout(){this.authService.signOut(),this.closeDropdown()}static \u0275fac=function(e){return new(e||c)(T(s4),T(U1))};static \u0275cmp=E({type:c,selectors:[["user-dropdown"]],hostBindings:function(e,r){e&1&&A("click",function(n){return r.onDocumentClick(n)},O1)},decls:9,vars:6,consts:[[1,"relative"],["type","button",1,"flex","items-center","text-gray-700","dropdown-toggle","dark:text-gray-400",3,"click"],[1,"overflow-hidden","rounded-full","bg-green-900","ltr:mr-3","rtl:ml-3","h-11","w-11","text-4xl/[1.35]","shrink-0",2,"font-size","36px"],[1,"hidden","md:block","font-s","ltr:mr-1","rtl:ml-1","text-theme-sm"],["width","20","height","20","viewBox","0 0 20 20","fill","none","xmlns","http://www.w3.org/2000/svg",1,"transition-transform","duration-200","size-5","text-gray-500","dark:text-gray-400",3,"ngClass"],["d","M4.79175 7.396L10.0001 12.6043L15.2084 7.396","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],[1,"absolute","ltr:right-0","rtl:left-0","mt-[17px]","flex","w-[260px]","flex-col","rounded-2xl","border","border-gray-200","bg-white","p-3","shadow-theme-lg","dark:border-gray-800","dark:bg-gray-dark","z-50","animate-fadeIn"],[1,"block","font-medium","text-green-900","text-theme-sm","dark:text-gray-400"],[1,"flex","flex-col","gap-1","pt-4","pb-3","border-b","border-gray-200","dark:border-green-900"],[1,"group","flex","items-center","gap-3","rounded-lg","px-3","py-2","text-theme-sm","font-medium","text-green-900","hover:bg-gray-100","hover:text-gray-500","dark:text-gray-400","dark:hover:bg-white/5","dark:hover:text-gray-300",3,"click","routerLink"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"fill-gray-500","group-hover:fill-green-900","dark:fill-gray-400","dark:group-hover:fill-gray-300"],["fill-rule","evenodd","clip-rule","evenodd","d","M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z","fill",""],["fill-rule","evenodd","clip-rule","evenodd","d","M10.4858 3.5L13.5182 3.5C13.9233 3.5 14.2518 3.82851 14.2518 4.23377C14.2518 5.9529 16.1129 7.02795 17.602 6.1682C17.9528 5.96567 18.4014 6.08586 18.6039 6.43667L20.1203 9.0631C20.3229 9.41407 20.2027 9.86286 19.8517 10.0655C18.3625 10.9253 18.3625 13.0747 19.8517 13.9345C20.2026 14.1372 20.3229 14.5859 20.1203 14.9369L18.6039 17.5634C18.4013 17.9142 17.9528 18.0344 17.602 17.8318C16.1129 16.9721 14.2518 18.0471 14.2518 19.7663C14.2518 20.1715 13.9233 20.5 13.5182 20.5H10.4858C10.0804 20.5 9.75182 20.1714 9.75182 19.766C9.75182 18.0461 7.88983 16.9717 6.40067 17.8314C6.04945 18.0342 5.60037 17.9139 5.39767 17.5628L3.88167 14.937C3.67903 14.586 3.79928 14.1372 4.15026 13.9346C5.63949 13.0748 5.63946 10.9253 4.15025 10.0655C3.79926 9.86282 3.67901 9.41401 3.88165 9.06303L5.39764 6.43725C5.60034 6.08617 6.04943 5.96581 6.40065 6.16858C7.88982 7.02836 9.75182 5.9539 9.75182 4.23399C9.75182 3.82862 10.0804 3.5 10.4858 3.5ZM13.5182 2L10.4858 2C9.25201 2 8.25182 3.00019 8.25182 4.23399C8.25182 4.79884 7.64013 5.15215 7.15065 4.86955C6.08213 4.25263 4.71559 4.61859 4.0986 5.68725L2.58261 8.31303C1.96575 9.38146 2.33183 10.7477 3.40025 11.3645C3.88948 11.647 3.88947 12.3531 3.40026 12.6355C2.33184 13.2524 1.96578 14.6186 2.58263 15.687L4.09863 18.3128C4.71562 19.3814 6.08215 19.7474 7.15067 19.1305C7.64015 18.8479 8.25182 19.2012 8.25182 19.766C8.25182 20.9998 9.25201 22 10.4858 22H13.5182C14.7519 22 15.7518 20.9998 15.7518 19.7663C15.7518 19.2015 16.3632 18.8487 16.852 19.1309C17.9202 19.7476 19.2862 19.3816 19.9029 18.3134L21.4193 15.6869C22.0361 14.6185 21.6701 13.2523 20.6017 12.6355C20.1125 12.3531 20.1125 11.647 20.6017 11.3645C21.6701 10.7477 22.0362 9.38152 21.4193 8.3131L19.903 5.68667C19.2862 4.61842 17.9202 4.25241 16.852 4.86917C16.3632 5.15138 15.7518 4.79856 15.7518 4.23377C15.7518 3.00024 14.7519 2 13.5182 2ZM9.6659 11.9999C9.6659 10.7103 10.7113 9.66493 12.0009 9.66493C13.2905 9.66493 14.3359 10.7103 14.3359 11.9999C14.3359 13.2895 13.2905 14.3349 12.0009 14.3349C10.7113 14.3349 9.6659 13.2895 9.6659 11.9999ZM12.0009 8.16493C9.88289 8.16493 8.1659 9.88191 8.1659 11.9999C8.1659 14.1179 9.88289 15.8349 12.0009 15.8349C14.1189 15.8349 15.8359 14.1179 15.8359 11.9999C15.8359 9.88191 14.1189 8.16493 12.0009 8.16493Z","fill",""],["routerLink","/user/support",1,"group","flex","items-center","gap-3","rounded-lg","px-3","py-2","text-theme-sm","font-medium","text-green-900","hover:bg-gray-100","hover:text-gray-500","dark:text-gray-400","dark:hover:bg-white/5","dark:hover:text-gray-300",3,"click"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.0991 7.52507C11.0991 8.02213 11.5021 8.42507 11.9991 8.42507H12.0001C12.4972 8.42507 12.9001 8.02213 12.9001 7.52507C12.9001 7.02802 12.4972 6.62507 12.0001 6.62507H11.9991C11.5021 6.62507 11.0991 7.02802 11.0991 7.52507ZM12.0001 17.3714C11.5859 17.3714 11.2501 17.0356 11.2501 16.6214V10.9449C11.2501 10.5307 11.5859 10.1949 12.0001 10.1949C12.4143 10.1949 12.7501 10.5307 12.7501 10.9449V16.6214C12.7501 17.0356 12.4143 17.3714 12.0001 17.3714Z","fill",""],["routerLink","/home",1,"group","mt-3","flex","w-full","items-center","justify-center","gap-3","rounded-lg","border","border-gray-200","px-3","py-2","text-theme-sm","font-medium","text-green-900","hover:bg-gray-100","hover:text-gray-500","dark:border-gray-800","dark:text-gray-400","dark:hover:bg-white/5","dark:hover:text-gray-300",3,"click"]],template:function(e,r){e&1&&(d(0,"div",0)(1,"button",1),A("click",function(n){return r.toggleDropdown(n)}),d(2,"span",2),N(3),L(),d(4,"span",3),N(5),L(),V(),d(6,"svg",4),b(7,"path",5),L()(),F(8,s0,22,6,"div",6),L()),e&2&&(v(3),R(" ",r.currentUser==null||r.currentUser.name==null?null:r.currentUser.name.charAt(0)," "),v(2),Y1(r.currentUser==null?null:r.currentUser.name),v(),B("ngClass",Q1(4,n0,r.isOpen)),v(2),D(r.isOpen?8:-1))},dependencies:[O,c4,t2,D2],encapsulation:2})}return c})();var m2=(()=>{class c{isExpandedSubject=new y2(!0);isMobileOpenSubject=new y2(!1);isHoveredSubject=new y2(!1);isExpanded$=this.isExpandedSubject.asObservable();isMobileOpen$=this.isMobileOpenSubject.asObservable();isHovered$=this.isHoveredSubject.asObservable();_itemUrl="json/nav.json";_navData;_http=Q(l4);setExpanded(a){this.isExpandedSubject.next(a)}toggleExpanded(){this.isExpandedSubject.next(!this.isExpandedSubject.value)}setMobileOpen(a){this.isMobileOpenSubject.next(a)}toggleMobileOpen(){this.isMobileOpenSubject.next(!this.isMobileOpenSubject.value)}setHovered(a){this.isHoveredSubject.next(a)}getNavItems(){return this._navData?J2(this._navData):this._http.get(this._itemUrl).pipe(E1(a=>{this._navData=a}),_1(this.handleError("error with getting module info",[])))}handleError(a="operation",e){return r=>(console.error(r),console.log(`${a} failed: ${r.message}`),J2(e))}static \u0275fac=function(e){return new(e||c)};static \u0275prov=Z2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var o0=["searchInput"];function f0(c,l){c&1&&b(0,"i",10)}var m4=(()=>{class c{sidebarService;isListining=!1;isApplicationMenuOpen=!1;isMobileOpen$;searchInput;speechService=Q(o4);speakerService=Q(f4);destroyRef=Q(w2);listener_id="SEARCH_INPUT_ID";constructor(a){this.sidebarService=a,this.isMobileOpen$=this.sidebarService.isMobileOpen$,this.speechService.getTranscript().pipe(B2(this.destroyRef)).subscribe(e=>{e.id===this.listener_id&&(this.searchInput.nativeElement.value+=" "+e.text)})}handleToggle(){window.innerWidth>=1280?this.sidebarService.toggleExpanded():this.sidebarService.toggleMobileOpen()}toggleApplicationMenu(){this.isApplicationMenuOpen=!this.isApplicationMenuOpen}ngAfterViewInit(){}ngOnDestroy(){}searchHandler(){this.isListining&&(this.speakerService.speak(this.searchInput.nativeElement.value,"hi"),this.searchInput.nativeElement.value="")}handleSpeechToText(){this.isListining=!this.isListining,this.isListining?this.speechService.start(this.listener_id):this.speechService.stop()}static \u0275fac=function(e){return new(e||c)(T(m2))};static \u0275cmp=E({type:c,selectors:[["user-header"]],viewQuery:function(e,r){if(e&1&&k2(o0,5),e&2){let i;A2(i=P2())&&(r.searchInput=i.first)}},decls:19,vars:3,consts:[["searchInput",""],[1,"header-wrapper"],[1,"header-item","ml-[15%]","md:ml-0"],[1,"relative"],[1,"absolute","-translate-y-1/2","pointer-events-none","ltr:left-4","rtl:right-4","top-1/2","text-green-900"],["width","20","height","20","viewBox","0 0 20 20","fill","none",1,"fill-current","md:fill-gray-100"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z","fill",""],["type","text","placeholder","Search or type command...",1,"dark:bg-dark-100","h-11","w-full","rounded-lg","border","border-gray-200","bg-transparent","py-2.5","ltr:pl-12","ltr:pr-14","rtl:pr-12","rtl:pl-14","text-sm","text-green-900","shadow-theme-xs","placeholder:text-green-900","focus:border-brand-100","focus:outline-hidden","focus:ring-3","focus:ring-brand-500/10","dark:border-gray-800","dark:bg-gray-900","dark:bg-white/[0.03]","dark:text-white/90","dark:placeholder:text-white/30","dark:focus:border-brand-800","xl:w-[430px]",2,"padding","0 65px 0 45px"],["type","button",1,"absolute","text-[16px]","ltr:right-[60px]","rtl:left-5","top-1/2","inline-flex","-translate-y-1/2","items-center","gap-0.5","rounded-lg","border","border-gray-200","bg-gray-50","px-[7px]","py-[4.5px]","text-xs","-tracking-[0.2px]","text-green-900","dark:border-gray-800","dark:bg-white/[0.03]","dark:text-gray-400",2,"cursor","pointer",3,"click"],["aria-hidden","true",1,"fa","fa-microphone"],["aria-hidden","true",1,"fa","fa-volume-up"],["type","button",1,"absolute","ltr:right-2.5","rtl:left-2.5","top-1/2","inline-flex","-translate-y-1/2","items-center","gap-0.5","rounded-lg","border","border-gray-200","bg-gray-50","px-[7px]","py-[4.5px]","text-xs","-tracking-[0.2px]","text-green-900","dark:border-gray-800","dark:bg-white/[0.03]","dark:text-gray-400",2,"cursor","pointer",3,"click"],[1,"header-item"]],template:function(e,r){e&1&&(d(0,"div",1)(1,"div",2)(2,"form")(3,"div",3)(4,"span",4),V(),d(5,"svg",5),b(6,"path",6),L()(),o2(),b(7,"input",7,0),d(9,"div",8),A("click",function(){return r.handleSpeechToText()}),b(10,"i",9),F(11,f0,1,0,"i",10),L(),d(12,"div",11),A("click",function(){return r.searchHandler()}),d(13,"span"),N(14," \u2318 "),L(),d(15,"span"),N(16," OK "),L()()()()(),d(17,"div",12),b(18,"user-dropdown"),L()()),e&2&&(v(9),K("text-red-900",r.isListining),v(2),D(r.isListining?11:-1))},dependencies:[O,t2,t4],styles:[`.header-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;background-color:none;height:75px;width:100%;border:none;border-radius:0;box-shadow:0 0 10px #f8f7f5;font-family:Baloo;padding:0 10px}
/*# sourceMappingURL=user-header-22LQJUSK.css.map */`]})}return c})();var z4=(()=>{class c{sanitizer;constructor(a){this.sanitizer=a}transform(a){return this.sanitizer.bypassSecurityTrustHtml(a)}static \u0275fac=function(e){return new(e||c)(T(e4,16))};static \u0275pipe=q1({name:"safeHtml",type:c,pure:!0})}return c})();var t0={prefix:"fas",iconName:"mug-saucer",icon:[576,512,["coffee"],"f0f4","M64 64c0-17.7 14.3-32 32-32l352 0c70.7 0 128 57.3 128 128S518.7 288 448 288c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L64 64zm448 96c0-35.3-28.7-64-64-64l0 128c35.3 0 64-28.7 64-64zM64 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},u4=t0;function f1(c,l){(l==null||l>c.length)&&(l=c.length);for(var a=0,e=Array(l);a<l;a++)e[a]=c[a];return e}function m0(c){if(Array.isArray(c))return c}function z0(c){if(Array.isArray(c))return f1(c)}function u0(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function p4(c,l){for(var a=0;a<l.length;a++){var e=l[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,V4(e.key),e)}}function p0(c,l,a){return l&&p4(c.prototype,l),a&&p4(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function I2(c,l){var a=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||(a=S1(c))||l&&c&&typeof c.length=="number"){a&&(c=a);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(o){throw o},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,n=!0,s=!1;return{s:function(){a=a.call(c)},n:function(){var o=a.next();return n=o.done,o},e:function(o){s=!0,i=o},f:function(){try{n||a.return==null||a.return()}finally{if(s)throw i}}}}function p(c,l,a){return(l=V4(l))in c?Object.defineProperty(c,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[l]=a,c}function d0(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function M0(c,l){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var e,r,i,n,s=[],o=!0,t=!1;try{if(i=(a=a.call(c)).next,l===0){if(Object(a)!==a)return;o=!1}else for(;!(o=(e=i.call(a)).done)&&(s.push(e.value),s.length!==l);o=!0);}catch(u){t=!0,r=u}finally{try{if(!o&&a.return!=null&&(n=a.return(),Object(n)!==n))return}finally{if(t)throw r}}return s}}function v0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d4(c,l){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);l&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,e)}return a}function f(c){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?d4(Object(a),!0).forEach(function(e){p(c,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):d4(Object(a)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(a,e))})}return c}function j2(c,l){return m0(c)||M0(c,l)||S1(c,l)||v0()}function U(c){return z0(c)||d0(c)||S1(c)||L0()}function g0(c,l){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var e=a.call(c,l||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function V4(c){var l=g0(c,"string");return typeof l=="symbol"?l:l+""}function W2(c){"@babel/helpers - typeof";return W2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},W2(c)}function S1(c,l){if(c){if(typeof c=="string")return f1(c,l);var a={}.toString.call(c).slice(8,-1);return a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set"?Array.from(c):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f1(c,l):void 0}}var M4=function(){},N1={},$4={},X4=null,Y4={mark:M4,measure:M4};try{typeof window<"u"&&(N1=window),typeof document<"u"&&($4=document),typeof MutationObserver<"u"&&(X4=MutationObserver),typeof performance<"u"&&(Y4=performance)}catch{}var h0=N1.navigator||{},v4=h0.userAgent,L4=v4===void 0?"":v4,Z=N1,C=$4,g4=X4,H2=Y4,B7=!!Z.document,Y=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",Q4=~L4.indexOf("MSIE")||~L4.indexOf("Trident/"),R2,C0=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,x0=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,K4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},b0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},J4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],w="classic",b2="duotone",Z4="sharp",c3="sharp-duotone",a3="chisel",l3="etch",e3="graphite",r3="jelly",i3="jelly-duo",n3="jelly-fill",s3="mosaic",o3="notdog",f3="notdog-duo",t3="pixel",m3="slab",z3="slab-duo",u3="slab-press",p3="slab-press-duo",d3="thumbprint",M3="utility",v3="utility-duo",L3="utility-fill",g3="vellum",h3="whiteboard",S0="Classic",N0="Duotone",y0="Sharp",w0="Sharp Duotone",k0="Chisel",A0="Etch",P0="Graphite",T0="Jelly",F0="Jelly Duo",D0="Jelly Fill",B0="Mosaic",H0="Notdog",R0="Notdog Duo",_0="Pixel",E0="Slab",I0="Slab Duo",U0="Slab Press",O0="Slab Press Duo",W0="Thumbprint",q0="Utility",G0="Utility Duo",j0="Utility Fill",V0="Vellum",$0="Whiteboard",C3=[w,b2,Z4,c3,a3,l3,e3,r3,i3,n3,s3,o3,f3,t3,m3,z3,u3,p3,d3,M3,v3,L3,g3,h3],H7=(R2={},p(p(p(p(p(p(p(p(p(p(R2,w,S0),b2,N0),Z4,y0),c3,w0),a3,k0),l3,A0),e3,P0),r3,T0),i3,F0),n3,D0),p(p(p(p(p(p(p(p(p(p(R2,s3,B0),o3,H0),f3,R0),t3,_0),m3,E0),z3,I0),u3,U0),p3,O0),d3,W0),M3,q0),p(p(p(p(R2,v3,G0),L3,j0),g3,V0),h3,$0)),X0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Y0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Q0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),K0={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},x3=["fak","fa-kit","fakd","fa-kit-duotone"],h4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},J0=["kit"],Z0="kit",c6="kit-duotone",a6="Kit",l6="Kit Duotone",R7=p(p({},Z0,a6),c6,l6),e6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},r6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},i6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},C4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_2,E2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},n6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],s6="classic",o6="duotone",f6="sharp",t6="sharp-duotone",m6="chisel",z6="etch",u6="graphite",p6="jelly",d6="jelly-duo",M6="jelly-fill",v6="mosaic",L6="notdog",g6="notdog-duo",h6="pixel",C6="slab",x6="slab-duo",b6="slab-press",S6="slab-press-duo",N6="thumbprint",y6="utility",w6="utility-duo",k6="utility-fill",A6="vellum",P6="whiteboard",T6="Classic",F6="Duotone",D6="Sharp",B6="Sharp Duotone",H6="Chisel",R6="Etch",_6="Graphite",E6="Jelly",I6="Jelly Duo",U6="Jelly Fill",O6="Mosaic",W6="Notdog",q6="Notdog Duo",G6="Pixel",j6="Slab",V6="Slab Duo",$6="Slab Press",X6="Slab Press Duo",Y6="Thumbprint",Q6="Utility",K6="Utility Duo",J6="Utility Fill",Z6="Vellum",c8="Whiteboard",_7=(_2={},p(p(p(p(p(p(p(p(p(p(_2,s6,T6),o6,F6),f6,D6),t6,B6),m6,H6),z6,R6),u6,_6),p6,E6),d6,I6),M6,U6),p(p(p(p(p(p(p(p(p(p(_2,v6,O6),L6,W6),g6,q6),h6,G6),C6,j6),x6,V6),b6,$6),S6,X6),N6,Y6),y6,Q6),p(p(p(p(_2,w6,K6),k6,J6),A6,Z6),P6,c8)),a8="kit",l8="kit-duotone",e8="Kit",r8="Kit Duotone",E7=p(p({},a8,e8),l8,r8),i8={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},n8={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},t1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},s8=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],b3=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(n6,s8),o8=["solid","regular","light","thin","duotone","brands","semibold"],S3=[1,2,3,4,5,6,7,8,9,10],f8=S3.concat([11,12,13,14,15,16,17,18,19,20]),t8=["aw","fw","pull-left","pull-right"],m8=[].concat(U(Object.keys(n8)),o8,t8,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",E2.GROUP,E2.SWAP_OPACITY,E2.PRIMARY,E2.SECONDARY]).concat(S3.map(function(c){return"".concat(c,"x")})).concat(f8.map(function(c){return"w-".concat(c)})),z8={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$="___FONT_AWESOME___",m1=16,N3="fa",y3="svg-inline--fa",i2="data-fa-i2svg",z1="data-fa-pseudo-element",u8="data-fa-pseudo-element-pending",y1="data-prefix",w1="data-icon",x4="fontawesome-i2svg",p8="async",d8=["HTML","HEAD","STYLE","SCRIPT"],w3=["::before","::after",":before",":after"],k3=(function(){try{return process.env.NODE_ENV==="production"}catch{return!1}})();function S2(c){return new Proxy(c,{get:function(a,e){return e in a?a[e]:a[w]}})}var A3=f({},K4);A3[w]=f(f(f(f({},{"fa-duotone":"duotone"}),K4[w]),h4.kit),h4["kit-duotone"]);var M8=S2(A3),u1=f({},K0);u1[w]=f(f(f(f({},{duotone:"fad"}),u1[w]),C4.kit),C4["kit-duotone"]);var b4=S2(u1),p1=f({},t1);p1[w]=f(f({},p1[w]),i6.kit);var k1=S2(p1),d1=f({},i8);d1[w]=f(f({},d1[w]),e6.kit);var I7=S2(d1),v8=C0,P3="fa-layers-text",L8=x0,g8=f({},X0),U7=S2(g8),h8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],r1=b0,C8=[].concat(U(J0),U(m8)),h2=Z.FontAwesomeConfig||{};function x8(c){var l=C.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function b8(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}C&&typeof C.querySelector=="function"&&(S4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],S4.forEach(function(c){var l=j2(c,2),a=l[0],e=l[1],r=b8(x8(a));r!=null&&(h2[e]=r)}));var S4,T3={styleDefault:"solid",familyDefault:w,cssPrefix:N3,replacementClass:y3,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};h2.familyPrefix&&(h2.cssPrefix=h2.familyPrefix);var p2=f(f({},T3),h2);p2.autoReplaceSvg||(p2.observeMutations=!1);var z={};Object.keys(T3).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(a){p2[c]=a,C2.forEach(function(e){return e(z)})},get:function(){return p2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(l){p2.cssPrefix=l,C2.forEach(function(a){return a(z)})},get:function(){return p2.cssPrefix}});Z.FontAwesomeConfig=z;var C2=[];function S8(c){return C2.push(c),function(){C2.splice(C2.indexOf(c),1)}}var J=m1,W={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function N8(c){if(!(!c||!Y)){var l=C.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;for(var a=C.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=i)}return C.head.insertBefore(l,e),c}}var y8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function N4(){for(var c=12,l="";c-- >0;)l+=y8[Math.random()*62|0];return l}function d2(c){for(var l=[],a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function A1(c){return c.classList?d2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(l){return l})}function F3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w8(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,'="').concat(F3(c[a]),'" ')},"").trim()}function V2(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,": ").concat(c[a].trim(),";")},"")}function P1(c){return c.size!==W.size||c.x!==W.x||c.y!==W.y||c.rotate!==W.rotate||c.flipX||c.flipY}function k8(c){var l=c.transform,a=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(l.x*32,", ").concat(l.y*32,") "),n="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),s="rotate(".concat(l.rotate," 0 0)"),o={transform:"".concat(i," ").concat(n," ").concat(s)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:t}}function A8(c){var l=c.transform,a=c.width,e=a===void 0?m1:a,r=c.height,i=r===void 0?m1:r,n=c.startCentered,s=n===void 0?!1:n,o="";return s&&Q4?o+="translate(".concat(l.x/J-e/2,"em, ").concat(l.y/J-i/2,"em) "):s?o+="translate(calc(-50% + ".concat(l.x/J,"em), calc(-50% + ").concat(l.y/J,"em)) "):o+="translate(".concat(l.x/J,"em, ").concat(l.y/J,"em) "),o+="scale(".concat(l.size/J*(l.flipX?-1:1),", ").concat(l.size/J*(l.flipY?-1:1),") "),o+="rotate(".concat(l.rotate,"deg) "),o}var P8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function D3(){var c=N3,l=y3,a=z.cssPrefix,e=z.replacementClass,r=P8;if(a!==c||e!==l){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(l),"g");r=r.replace(i,".".concat(a,"-")).replace(n,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var y4=!1;function i1(){z.autoAddCss&&!y4&&(N8(D3()),y4=!0)}var T8={mixout:function(){return{dom:{css:D3,insertCss:i1}}},hooks:function(){return{beforeDOMElementCreation:function(){i1()},beforeI2svg:function(){i1()}}}},X=Z||{};X[$]||(X[$]={});X[$].styles||(X[$].styles={});X[$].hooks||(X[$].hooks={});X[$].shims||(X[$].shims=[]);var I=X[$],B3=[],H3=function(){C.removeEventListener("DOMContentLoaded",H3),q2=1,B3.map(function(l){return l()})},q2=!1;Y&&(q2=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),q2||C.addEventListener("DOMContentLoaded",H3));function F8(c){Y&&(q2?setTimeout(c,0):B3.push(c))}function N2(c){var l=c.tag,a=c.attributes,e=a===void 0?{}:a,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?F3(c):"<".concat(l," ").concat(w8(e),">").concat(i.map(N2).join(""),"</").concat(l,">")}function w4(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var D8=function(l,a){return function(e,r,i,n){return l.call(a,e,r,i,n)}},n1=function(l,a,e,r){var i=Object.keys(l),n=i.length,s=r!==void 0?D8(a,r):a,o,t,u;for(e===void 0?(o=1,u=l[i[0]]):(o=0,u=e);o<n;o++)t=i[o],u=s(u,l[t],t,l);return u};function R3(c){return U(c).length!==1?null:c.codePointAt(0).toString(16)}function k4(c){return Object.keys(c).reduce(function(l,a){var e=c[a],r=!!e.icon;return r?l[e.iconName]=e.icon:l[a]=e,l},{})}function M1(c,l){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=k4(l);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(c,k4(l)):I.styles[c]=f(f({},I.styles[c]||{}),i),c==="fas"&&M1("fa",l)}var x2=I.styles,B8=I.shims,_3=Object.keys(k1),H8=_3.reduce(function(c,l){return c[l]=Object.keys(k1[l]),c},{}),T1=null,E3={},I3={},U3={},O3={},W3={};function R8(c){return~C8.indexOf(c)}function _8(c,l){var a=l.split("-"),e=a[0],r=a.slice(1).join("-");return e===c&&r!==""&&!R8(r)?r:null}var q3=function(){var l=function(i){return n1(x2,function(n,s,o){return n[o]=n1(s,i,{}),n},{})};E3=l(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var s=i[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){r[o.toString(16)]=n})}return r}),I3=l(function(r,i,n){if(r[n]=n,i[2]){var s=i[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){r[o]=n})}return r}),W3=l(function(r,i,n){var s=i[2];return r[n]=n,s.forEach(function(o){r[o]=n}),r});var a="far"in x2||z.autoFetchSvg,e=n1(B8,function(r,i){var n=i[0],s=i[1],o=i[2];return s==="far"&&!a&&(s="fas"),typeof n=="string"&&(r.names[n]={prefix:s,iconName:o}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:s,iconName:o}),r},{names:{},unicodes:{}});U3=e.names,O3=e.unicodes,T1=$2(z.styleDefault,{family:z.familyDefault})};S8(function(c){T1=$2(c.styleDefault,{family:z.familyDefault})});q3();function F1(c,l){return(E3[c]||{})[l]}function E8(c,l){return(I3[c]||{})[l]}function r2(c,l){return(W3[c]||{})[l]}function G3(c){return U3[c]||{prefix:null,iconName:null}}function I8(c){var l=O3[c],a=F1("fas",c);return l||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function c2(){return T1}var j3=function(){return{prefix:null,iconName:null,rest:[]}};function U8(c){var l=w,a=_3.reduce(function(e,r){return e[r]="".concat(z.cssPrefix,"-").concat(r),e},{});return C3.forEach(function(e){(c.includes(a[e])||c.some(function(r){return H8[e].includes(r)}))&&(l=e)}),l}function $2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.family,e=a===void 0?w:a,r=M8[e][c];if(e===b2&&!c)return"fad";var i=b4[e][c]||b4[e][r],n=c in I.styles?c:null,s=i||n||null;return s}function O8(c){var l=[],a=null;return c.forEach(function(e){var r=_8(z.cssPrefix,e);r?a=r:e&&l.push(e)}),{iconName:a,rest:l}}function A4(c){return c.sort().filter(function(l,a,e){return e.indexOf(l)===a})}var P4=b3.concat(x3);function X2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.skipLookups,e=a===void 0?!1:a,r=null,i=A4(c.filter(function(M){return P4.includes(M)})),n=A4(c.filter(function(M){return!P4.includes(M)})),s=i.filter(function(M){return r=M,!J4.includes(M)}),o=j2(s,1),t=o[0],u=t===void 0?null:t,m=U8(i),g=f(f({},O8(n)),{},{prefix:$2(u,{family:m})});return f(f(f({},g),j8({values:c,family:m,styles:x2,config:z,canonical:g,givenPrefix:r})),W8(e,r,g))}function W8(c,l,a){var e=a.prefix,r=a.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var i=l==="fa"?G3(r):{},n=r2(e,r);return r=i.iconName||n||r,e=i.prefix||e,e==="far"&&!x2.far&&x2.fas&&!z.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var q8=C3.filter(function(c){return c!==w||c!==b2}),G8=Object.keys(t1).filter(function(c){return c!==w}).map(function(c){return Object.keys(t1[c])}).flat();function j8(c){var l=c.values,a=c.family,e=c.canonical,r=c.givenPrefix,i=r===void 0?"":r,n=c.styles,s=n===void 0?{}:n,o=c.config,t=o===void 0?{}:o,u=a===b2,m=l.includes("fa-duotone")||l.includes("fad"),g=t.familyDefault==="duotone",M=e.prefix==="fad"||e.prefix==="fa-duotone";if(!u&&(m||g||M)&&(e.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(e.prefix="fab"),!e.prefix&&q8.includes(a)){var S=Object.keys(s).find(function(k){return G8.includes(k)});if(S||t.autoFetchSvg){var x=Q0.get(a).defaultShortPrefixId;e.prefix=x,e.iconName=r2(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=c2()||"fas"),e}var V8=(function(){function c(){u0(this,c),this.definitions={}}return p0(c,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),n[s]),M1(s,n[s]);var o=k1[w][s];o&&M1(o,n[s]),q3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var n=r[i],s=n.prefix,o=n.iconName,t=n.icon,u=t[2];a[s]||(a[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(a[s][m]=t)}),a[s][o]=t}),a}}])})(),T4=[],z2={},u2={},$8=Object.keys(u2);function X8(c,l){var a=l.mixoutsTo;return T4=c,z2={},Object.keys(u2).forEach(function(e){$8.indexOf(e)===-1&&delete u2[e]}),T4.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(a[n]=r[n]),W2(r[n])==="object"&&Object.keys(r[n]).forEach(function(s){a[n]||(a[n]={}),a[n][s]=r[n][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(n){z2[n]||(z2[n]=[]),z2[n].push(i[n])})}e.provides&&e.provides(u2)}),a}function v1(c,l){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=z2[c]||[];return i.forEach(function(n){l=n.apply(null,[l].concat(e))}),l}function n2(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),e=1;e<l;e++)a[e-1]=arguments[e];var r=z2[c]||[];r.forEach(function(i){i.apply(null,a)})}function a2(){var c=arguments[0],l=Array.prototype.slice.call(arguments,1);return u2[c]?u2[c].apply(null,l):void 0}function L1(c){c.prefix==="fa"&&(c.prefix="fas");var l=c.iconName,a=c.prefix||c2();if(l)return l=r2(a,l)||l,w4(V3.definitions,a,l)||w4(I.styles,a,l)}var V3=new V8,Y8=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,n2("noAuto")},Q8={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(n2("beforeI2svg",l),a2("pseudoElements2svg",l),a2("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,F8(function(){J8({autoReplaceSvgRoot:a}),n2("watch",l)})}},K8={icon:function(l){if(l===null)return null;if(W2(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:r2(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var a=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],e=$2(l[0]);return{prefix:e,iconName:r2(e,a)||a}}if(typeof l=="string"&&(l.indexOf("".concat(z.cssPrefix,"-"))>-1||l.match(v8))){var r=X2(l.split(" "),{skipLookups:!0});return{prefix:r.prefix||c2(),iconName:r2(r.prefix,r.iconName)||r.iconName}}if(typeof l=="string"){var i=c2();return{prefix:i,iconName:r2(i,l)||l}}}},H={noAuto:Y8,config:z,dom:Q8,parse:K8,library:V3,findIconDefinition:L1,toHtml:N2},J8=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot,e=a===void 0?C:a;(Object.keys(I.styles).length>0||z.autoFetchSvg)&&Y&&z.autoReplaceSvg&&H.dom.i2svg({node:e})};function Y2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return N2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(Y){var e=C.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function Z8(c){var l=c.children,a=c.main,e=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(P1(n)&&a.found&&!e.found){var s=a.width,o=a.height,t={x:s/o/2,y:.5};r.style=V2(f(f({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:l}]}function c5(c){var l=c.prefix,a=c.iconName,e=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(l,"-").concat(z.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:n}),children:e}]}]}function a5(c){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(a){return a in c})}function D1(c){var l=c.icons,a=l.main,e=l.mask,r=c.prefix,i=c.iconName,n=c.transform,s=c.symbol,o=c.maskId,t=c.extra,u=c.watchable,m=u===void 0?!1:u,g=e.found?e:a,M=g.width,S=g.height,x=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(q){return t.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(t.classes).join(" "),k={children:[],attributes:f(f({},t.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:t.attributes.role||"img",viewBox:"0 0 ".concat(M," ").concat(S)})};!a5(t.attributes)&&!t.attributes["aria-hidden"]&&(k.attributes["aria-hidden"]="true"),m&&(k.attributes[i2]="");var y=f(f({},k),{},{prefix:r,iconName:i,main:a,mask:e,maskId:o,transform:n,symbol:s,styles:f({},t.styles)}),P=e.found&&a.found?a2("generateAbstractMask",y)||{children:[],attributes:{}}:a2("generateAbstractIcon",y)||{children:[],attributes:{}},_=P.children,s2=P.attributes;return y.children=_,y.attributes=s2,s?c5(y):Z8(y)}function F4(c){var l=c.content,a=c.width,e=c.height,r=c.transform,i=c.extra,n=c.watchable,s=n===void 0?!1:n,o=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(o[i2]="");var t=f({},i.styles);P1(r)&&(t.transform=A8({transform:r,startCentered:!0,width:a,height:e}),t["-webkit-transform"]=t.transform);var u=V2(t);u.length>0&&(o.style=u);var m=[];return m.push({tag:"span",attributes:o,children:[l]}),m}function l5(c){var l=c.content,a=c.extra,e=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=V2(a.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[l]}),i}var s1=I.styles;function g1(c){var l=c[0],a=c[1],e=c.slice(4),r=j2(e,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(r1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(r1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(r1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:l,height:a,icon:n}}var e5={found:!1,width:512,height:512};function r5(c,l){!k3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function h1(c,l){var a=l;return l==="fa"&&z.styleDefault!==null&&(l=c2()),new Promise(function(e,r){if(a==="fa"){var i=G3(c)||{};c=i.iconName||c,l=i.prefix||l}if(c&&l&&s1[l]&&s1[l][c]){var n=s1[l][c];return e(g1(n))}r5(c,l),e(f(f({},e5),{},{icon:z.showMissingIcons&&c?a2("missingIconAbstract")||{}:{}}))})}var D4=function(){},C1=z.measurePerformance&&H2&&H2.mark&&H2.measure?H2:{mark:D4,measure:D4},g2='FA "7.3.1"',i5=function(l){return C1.mark("".concat(g2," ").concat(l," begins")),function(){return $3(l)}},$3=function(l){C1.mark("".concat(g2," ").concat(l," ends")),C1.measure("".concat(g2," ").concat(l),"".concat(g2," ").concat(l," begins"),"".concat(g2," ").concat(l," ends"))},B1={begin:i5,end:$3},U2=function(){};function B4(c){var l=c.getAttribute?c.getAttribute(i2):null;return typeof l=="string"}function n5(c){var l=c.getAttribute?c.getAttribute(y1):null,a=c.getAttribute?c.getAttribute(w1):null;return l&&a}function s5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function o5(){if(z.autoReplaceSvg===!0)return O2.replace;var c=O2[z.autoReplaceSvg];return c||O2.replace}function f5(c){return C.createElementNS("http://www.w3.org/2000/svg",c)}function t5(c){return C.createElement(c)}function X3(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.ceFn,e=a===void 0?c.tag==="svg"?f5:t5:a;if(typeof c=="string")return C.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(X3(n,{ceFn:e}))}),r}function m5(c){var l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var O2={replace:function(l){var a=l[0];if(a.parentNode)if(l[1].forEach(function(r){a.parentNode.insertBefore(X3(r),a)}),a.getAttribute(i2)===null&&z.keepOriginalSource){var e=C.createComment(m5(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(l){var a=l[0],e=l[1];if(~A1(a).indexOf(z.replacementClass))return O2.replace(l);var r=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,o){return o===z.replacementClass||o.match(r)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var n=e.map(function(s){return N2(s)}).join(`
`);a.setAttribute(i2,""),a.innerHTML=n}};function H4(c){c()}function Y3(c,l){var a=typeof l=="function"?l:U2;if(c.length===0)a();else{var e=H4;z.mutateApproach===p8&&(e=Z.requestAnimationFrame||H4),e(function(){var r=o5(),i=B1.begin("mutate");c.map(r),i(),a()})}}var H1=!1;function Q3(){H1=!0}function x1(){H1=!1}var G2=null;function R4(c){if(g4&&z.observeMutations){var l=c.treeCallback,a=l===void 0?U2:l,e=c.nodeCallback,r=e===void 0?U2:e,i=c.pseudoElementsCallback,n=i===void 0?U2:i,s=c.observeMutationsRoot,o=s===void 0?C:s;G2=new g4(function(t){if(!H1){var u=c2();d2(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!B4(m.addedNodes[0])&&(z.searchPseudoElements&&n(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&z.searchPseudoElements&&n([m.target],!0),m.type==="attributes"&&B4(m.target)&&~h8.indexOf(m.attributeName))if(m.attributeName==="class"&&n5(m.target)){var g=X2(A1(m.target)),M=g.prefix,S=g.iconName;m.target.setAttribute(y1,M||u),S&&m.target.setAttribute(w1,S)}else s5(m.target)&&r(m.target)})}}),Y&&G2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function z5(){G2&&G2.disconnect()}function u5(c){var l=c.getAttribute("style"),a=[];return l&&(a=l.split(";").reduce(function(e,r){var i=r.split(":"),n=i[0],s=i.slice(1);return n&&s.length>0&&(e[n]=s.join(":").trim()),e},{})),a}function p5(c){var l=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=X2(A1(c));return r.prefix||(r.prefix=c2()),l&&a&&(r.prefix=l,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=E8(r.prefix,c.innerText)||F1(r.prefix,R3(c.innerText))),!r.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function d5(c){var l=d2(c.attributes).reduce(function(a,e){return a.name!=="class"&&a.name!=="style"&&(a[e.name]=e.value),a},{});return l}function M5(){return{iconName:null,prefix:null,transform:W,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=p5(c),e=a.iconName,r=a.prefix,i=a.rest,n=d5(c),s=v1("parseNodeAttributes",{},c),o=l.styleParser?u5(c):[];return f({iconName:e,prefix:r,transform:W,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:n}},s)}var v5=I.styles;function K3(c){var l=z.autoReplaceSvg==="nest"?_4(c,{styleParser:!1}):_4(c);return~l.extra.classes.indexOf(P3)?a2("generateLayersText",c,l):a2("generateSvgReplacementMutation",c,l)}function L5(){return[].concat(U(x3),U(b3))}function E4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var a=C.documentElement.classList,e=function(m){return a.add("".concat(x4,"-").concat(m))},r=function(m){return a.remove("".concat(x4,"-").concat(m))},i=z.autoFetchSvg?L5():J4.concat(Object.keys(v5));i.includes("fa")||i.push("fa");var n=[".".concat(P3,":not([").concat(i2,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(i2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var s=[];try{s=d2(c.querySelectorAll(n))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var o=B1.begin("onTree"),t=s.reduce(function(u,m){try{var g=K3(m);g&&u.push(g)}catch(M){k3||M.name==="MissingIcon"&&console.error(M)}return u},[]);return new Promise(function(u,m){Promise.all(t).then(function(g){Y3(g,function(){e("active"),e("complete"),r("pending"),typeof l=="function"&&l(),o(),u()})}).catch(function(g){o(),m(g)})})}function g5(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;K3(c).then(function(a){a&&Y3([a],l)})}function h5(c){return function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:L1(l||{}),r=a.mask;return r&&(r=(r||{}).icon?r:L1(r||{})),c(e,f(f({},a),{},{mask:r}))}}var C5=function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?W:e,i=a.symbol,n=i===void 0?!1:i,s=a.mask,o=s===void 0?null:s,t=a.maskId,u=t===void 0?null:t,m=a.classes,g=m===void 0?[]:m,M=a.attributes,S=M===void 0?{}:M,x=a.styles,k=x===void 0?{}:x;if(l){var y=l.prefix,P=l.iconName,_=l.icon;return Y2(f({type:"icon"},l),function(){return n2("beforeDOMElementCreation",{iconDefinition:l,params:a}),D1({icons:{main:g1(_),mask:o?g1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:P,transform:f(f({},W),r),symbol:n,maskId:u,extra:{attributes:S,styles:k,classes:g}})})}},x5={mixout:function(){return{icon:h5(C5)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=E4,a.nodeCallback=g5,a}}},provides:function(l){l.i2svg=function(a){var e=a.node,r=e===void 0?C:e,i=a.callback,n=i===void 0?function(){}:i;return E4(r,n)},l.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.prefix,n=e.transform,s=e.symbol,o=e.mask,t=e.maskId,u=e.extra;return new Promise(function(m,g){Promise.all([h1(r,i),o.iconName?h1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var S=j2(M,2),x=S[0],k=S[1];m([a,D1({icons:{main:x,mask:k},prefix:i,iconName:r,transform:n,symbol:s,maskId:t,extra:u,watchable:!0})])}).catch(g)})},l.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,n=a.transform,s=a.styles,o=V2(s);o.length>0&&(r.style=o);var t;return P1(n)&&(t=a2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),e.push(t||i.icon),{children:e,attributes:r}}}},b5={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return Y2({type:"layer"},function(){n2("beforeDOMElementCreation",{assembler:a,params:e});var n=[];return a(function(s){Array.isArray(s)?s.map(function(o){n=n.concat(o.abstract)}):n=n.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(U(i)).join(" ")},children:n}]})}}}},S5={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,n=e.classes,s=n===void 0?[]:n,o=e.attributes,t=o===void 0?{}:o,u=e.styles,m=u===void 0?{}:u;return Y2({type:"counter",content:a},function(){return n2("beforeDOMElementCreation",{content:a,params:e}),l5({content:a.toString(),title:i,extra:{attributes:t,styles:m,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(U(s))}})})}}}},N5={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?W:r,n=e.classes,s=n===void 0?[]:n,o=e.attributes,t=o===void 0?{}:o,u=e.styles,m=u===void 0?{}:u;return Y2({type:"text",content:a},function(){return n2("beforeDOMElementCreation",{content:a,params:e}),F4({content:a,transform:f(f({},W),i),extra:{attributes:t,styles:m,classes:["".concat(z.cssPrefix,"-layers-text")].concat(U(s))}})})}}},provides:function(l){l.generateLayersText=function(a,e){var r=e.transform,i=e.extra,n=null,s=null;if(Q4){var o=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();n=t.width/o,s=t.height/o}return Promise.resolve([a,F4({content:a.innerHTML,width:n,height:s,transform:r,extra:i,watchable:!0})])}}},J3=new RegExp('"',"ug"),I4=[1105920,1112319],U4=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Y0),z8),r6),b1=Object.keys(U4).reduce(function(c,l){return c[l.toLowerCase()]=U4[l],c},{}),y5=Object.keys(b1).reduce(function(c,l){var a=b1[l];return c[l]=a[900]||U(Object.entries(a))[0][1],c},{});function w5(c){var l=c.replace(J3,"");return R3(U(l)[0]||"")}function k5(c){var l=c.getPropertyValue("font-feature-settings").includes("ss01"),a=c.getPropertyValue("content"),e=a.replace(J3,""),r=e.codePointAt(0),i=r>=I4[0]&&r<=I4[1],n=e.length===2?e[0]===e[1]:!1;return i||n||l}function A5(c,l){var a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),r=isNaN(e)?"normal":e;return(b1[a]||{})[r]||y5[a]}function O4(c,l){var a="".concat(u8).concat(l.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(a)!==null)return e();var i=d2(c.children),n=i.filter(function(Q2){return Q2.getAttribute(z1)===l})[0],s=Z.getComputedStyle(c,l),o=s.getPropertyValue("font-family"),t=o.match(L8),u=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(n&&!t)return c.removeChild(n),e();if(t&&m!=="none"&&m!==""){var g=s.getPropertyValue("content"),M=A5(o,u),S=w5(g),x=t[0].startsWith("FontAwesome"),k=k5(s),y=F1(M,S),P=y;if(x){var _=I8(S);_.iconName&&_.prefix&&(y=_.iconName,M=_.prefix)}if(y&&!k&&(!n||n.getAttribute(y1)!==M||n.getAttribute(w1)!==P)){c.setAttribute(a,P),n&&c.removeChild(n);var s2=M5(),q=s2.extra;q.attributes[z1]=l,h1(y,M).then(function(Q2){var l0=D1(f(f({},s2),{},{icons:{main:Q2,mask:j3()},prefix:M,iconName:P,extra:q,watchable:!0})),K2=C.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(K2,c.firstChild):c.appendChild(K2),K2.outerHTML=l0.map(function(e0){return N2(e0)}).join(`
`),c.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function P5(c){return Promise.all([O4(c,"::before"),O4(c,"::after")])}function T5(c){return c.parentNode!==document.head&&!~d8.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(z1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var F5=function(l){return!!l&&w3.some(function(a){return l.includes(a)})},D5=function(l){if(!l)return[];var a=new Set,e=l.split(/,(?![^()]*\))/).map(function(o){return o.trim()});e=e.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(t){return t.trim()})});var r=I2(e),i;try{for(r.s();!(i=r.n()).done;){var n=i.value;if(F5(n)){var s=w3.reduce(function(o,t){return o.replace(t,"")},n);s!==""&&s!=="*"&&a.add(s)}}}catch(o){r.e(o)}finally{r.f()}return a};function W4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Y){var a;if(l)a=c;else if(z.searchPseudoElementsFullScan)a=c.querySelectorAll("*");else{var e=new Set,r=I2(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var n=i.value;try{var s=I2(n.cssRules),o;try{for(s.s();!(o=s.n()).done;){var t=o.value,u=D5(t.selectorText),m=I2(u),g;try{for(m.s();!(g=m.n()).done;){var M=g.value;e.add(M)}}catch(x){m.e(x)}finally{m.f()}}}catch(x){s.e(x)}finally{s.f()}}catch(x){z.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(n.href," (").concat(x.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(x){r.e(x)}finally{r.f()}if(!e.size)return;var S=Array.from(e).join(", ");try{a=c.querySelectorAll(S)}catch{}}return new Promise(function(x,k){var y=d2(a).filter(T5).map(P5),P=B1.begin("searchPseudoElements");Q3(),Promise.all(y).then(function(){P(),x1(),x()}).catch(function(){P(),x1(),k()})})}}var B5={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=W4,a}}},provides:function(l){l.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?C:e;z.searchPseudoElements&&W4(r)}}},q4=!1,H5={mixout:function(){return{dom:{unwatch:function(){Q3(),q4=!0}}}},hooks:function(){return{bootstrap:function(){R4(v1("mutationObserverCallbacks",{}))},noAuto:function(){z5()},watch:function(a){var e=a.observeMutationsRoot;q4?x1():R4(v1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},G4=function(l){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),n=i[0],s=i.slice(1).join("-");if(n&&s==="h")return e.flipX=!0,e;if(n&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(n){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},R5={mixout:function(){return{parse:{transform:function(a){return G4(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=G4(r)),a}}},provides:function(l){l.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,n=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(o," ").concat(t," ").concat(u)},g={transform:"translate(".concat(n/2*-1," -256)")},M={outer:s,inner:m,path:g};return{tag:"g",attributes:f({},M.outer),children:[{tag:"g",attributes:f({},M.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f(f({},e.icon.attributes),M.path)}]}]}}}},o1={x:0,y:0,width:"100%",height:"100%"};function j4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function _5(c){return c.tag==="g"?c.children:[c]}var E5={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?X2(r.split(" ").map(function(n){return n.trim()})):j3();return i.prefix||(i.prefix=c2()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(l){l.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,n=a.mask,s=a.maskId,o=a.transform,t=i.width,u=i.icon,m=n.width,g=n.icon,M=k8({transform:o,containerWidth:m,iconWidth:t}),S={tag:"rect",attributes:f(f({},o1),{},{fill:"white"})},x=u.children?{children:u.children.map(j4)}:{},k={tag:"g",attributes:f({},M.inner),children:[j4(f({tag:u.tag,attributes:f(f({},u.attributes),M.path)},x))]},y={tag:"g",attributes:f({},M.outer),children:[k]},P="mask-".concat(s||N4()),_="clip-".concat(s||N4()),s2={tag:"mask",attributes:f(f({},o1),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,y]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:_5(g)},s2]};return e.push(q,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(P,")")},o1)}),{children:e,attributes:r}}}},I5={provides:function(l){var a=!1;Z.matchMedia&&(a=Z.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},n),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},U5={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},O5=[T8,x5,b5,S5,N5,B5,H5,R5,E5,I5,U5];X8(O5,{mixoutsTo:H});var O7=H.noAuto,W5=H.config,W7=H.library,q5=H.dom,G5=H.parse,q7=H.findIconDefinition,G7=H.toHtml,j5=H.icon,j7=H.layer,V5=H.text,$5=H.counter;var Z3=(()=>{class c{static \u0275fac=function(e){return new(e||c)};static \u0275mod=W1({type:c});static \u0275inj=I1({})}return c})();function X5(c,l){if(c&1&&(c1(0,"span",3),N(1),a1()),c&2){let a=l.$implicit;v(),R(" ",a," ")}}var c0=(()=>{class c{currentIndex=l2(0);isAnimating=l2(!1);words=J1.required();length=0;animateId;seconds$=R1(2500);destroyRef=Q(w2);constructor(){this.seconds$.pipe(B2(this.destroyRef)).subscribe(()=>this.rotateText())}ngOnInit(){this.length=this.words().length}ngOnDestroy(){this.animateId&&clearTimeout(this.animateId)}rotateText(){this.isAnimating.set(!0),this.animateId&&clearTimeout(this.animateId),this.animateId=setTimeout(()=>{this.currentIndex.update(a=>(a+1)%this.length),this.isAnimating.set(!1)},300)}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=E({type:c,selectors:[["rotating-text"]],inputs:{words:[1,"words"]},decls:5,vars:2,consts:[[1,"inline-flex","items-center","pl-[10px]","gap-2","text-[1.3rem]","w-full",2,"vertical-align","middle"],[1,"relative","h-[1.3rem]","overflow-hidden","flex","flex-col","justify-center"],[1,"transition-transform","duration-300","ease-in-out","flex","flex-col","h-[inherit]"],[1,"h-[1.3rem]","flex","items-center","text-[#d6f0f5]"]],template:function(e,r){e&1&&(c1(0,"div",0)(1,"div",1)(2,"div",2),v2(3,X5,2,1,"span",3,V1),a1()()()),e&2&&(v(2),X1("transform","translateY(-"+r.currentIndex()*1.3+"rem)"),v(),L2(r.words()))},dependencies:[O],encapsulation:2})}return c})();var Y5=["subMenu"],Q5=(c,l)=>l.name;function K5(c,l){}function J5(c,l){if(c&1&&(b(0,"span",14),T2(1,"safeHtml")),c&2){let a=h(2).$implicit;B("innerHTML",F2(1,1,a.icon),M2)}}function Z5(c,l){if(c&1&&(b(0,"span",14),T2(1,"safeHtml")),c&2){let a=h().$implicit;B("innerHTML",F2(1,1,a.icon),M2)}}function c7(c,l){if(c&1){let a=f2();d(0,"li",21),A("click",function(){let r=G(a).$implicit,i=h(6);return j(i.selectSubMenuItem(r.name))}),F(1,Z5,2,3,"span",14),d(2,"span",22),N(3),L()()}if(c&2){let a=l.$implicit,e=h(6);K("selected",e.selectedSubMenuItem===a.name),v(),D(a.icon?1:-1),v(),B("routerLink",a.path),v(),R(" ",a.name," ")}}function a7(c,l){if(c&1&&(d(0,"ul",19),v2(1,c7,4,5,"li",20,Q5),L()),c&2){let a=h(2).$implicit;v(),L2(a.subItems)}}function l7(c,l){if(c&1){let a=f2();d(0,"div",13),A("click",function(){G(a);let r=h().$implicit,i=h(3);return j(i.toggleSubMenu(r.name))}),F(1,J5,2,3,"span",14),d(2,"span",15),N(3),L(),d(4,"span",16),V(),d(5,"svg",17),b(6,"path",18),L()()(),F(7,a7,3,0,"ul",19)}if(c&2){let a=h(),e=a.$implicit,r=a.$index,i=a.$count,n=h(3);K("last",r===i-1)("selected",n.openMenu===e.name),v(),D(e.icon?1:-1),v(2),R(" ",e.name," "),v(),K("rotated",n.openMenu===e.name),v(3),D(n.openMenu===e.name?7:-1)}}function e7(c,l){if(c&1&&(b(0,"span",14),T2(1,"safeHtml")),c&2){let a=h(2).$implicit;B("innerHTML",F2(1,1,a.icon),M2)}}function r7(c,l){if(c&1&&(d(0,"span",15),N(1),L()),c&2){let a=h(2).$implicit;v(),R(" ",a.name," ")}}function i7(c,l){if(c&1&&b(0,"rotating-text",24),c&2){let a=h(2).$implicit;B("words",a.list)}}function n7(c,l){if(c&1){let a=f2();d(0,"div",23),A("click",function(){G(a);let r=h().$implicit,i=h(3);return j(i.toggleSubMenu(r.name))}),F(1,e7,2,3,"span",14),F(2,r7,2,1,"span",15),F(3,i7,1,1,"rotating-text",24),L()}if(c&2){let a=h().$implicit,e=h(3);K("selected",e.openMenu===a.name),B("routerLink",a.path),v(),D(a.icon?1:-1),v(),D(a.name!=""?2:-1),v(),D(a.list?3:-1)}}function s7(c,l){if(c&1&&(d(0,"li"),F(1,l7,8,9)(2,n7,4,6,"div",12),L()),c&2){let a=l.$implicit;v(),D(a.subItems&&a.subItems.length>0?1:2)}}function o7(c,l){if(c&1&&(d(0,"div",10)(1,"ul",11),v2(2,s7,3,1,"li",null,j1),L()()),c&2){let a=h(2);v(2),L2(a.navItems)}}function f7(c,l){if(c&1&&F(0,K5,0,0)(1,o7,4,0,"div",10),c&2){let a=h();D(a.isLoadingnav()?0:1)}}var a0=(()=>{class c{sidebarService;router;cdr;faCoffee=u4;openMobileMenu=!1;isLoadingnav=l2(!1);navItems=[];openSubmenu=null;subMenuHeights={};subMenuRefs;isExpanded$;isMobileOpen$;isHovered$;openMenu=null;selectedSubMenuItem=null;constructor(a,e,r){this.sidebarService=a,this.router=e,this.cdr=r,this.isExpanded$=this.sidebarService.isExpanded$,this.isMobileOpen$=this.sidebarService.isMobileOpen$,this.isHovered$=this.sidebarService.isHovered$}ngOnInit(){this.isLoadingnav.set(!0),this.sidebarService.getNavItems().subscribe(a=>{this.navItems=a,console.log(this.navItems),this.isLoadingnav.set(!1)})}isActive(a){return this.router.url===a}toggleSubMenu(a){this.openMenu===a?(this.openMenu=null,this.selectSubMenuItem()):this.openMenu=a}selectSubMenuItem(a=null){this.selectedSubMenuItem=a}toggleMobileMenue(){this.openMobileMenu=!this.openMobileMenu}static \u0275fac=function(e){return new(e||c)(T(m2),T(i4),T(Z1))};static \u0275cmp=E({type:c,selectors:[["user-sidebar"]],viewQuery:function(e,r){if(e&1&&k2(Y5,5),e&2){let i;A2(i=P2())&&(r.subMenuRefs=i)}},decls:14,vars:4,consts:[["menuTemplate",""],[1,"mobile-options","flex","block","md:hidden"],[1,"w-full",2,"font-size","2rem",3,"click"],[1,"fa-solid","fa-bars"],[1,"absolute","z-20","mt-2","mobile-nav"],[3,"ngTemplateOutlet"],[1,"user-side-bar","hidden","md:block"],["routerLink","/home","routerLinkActive","active",1,"logo-container","default-bottom-border"],[1,"logo-image"],["width","25%","src","./logo.png"],[1,"main-menu-container","bg-[#07160a80]","md:bg-transparent"],[1,"flex","flex-col"],["routerLinkActive","active",1,"menu-item-custom","default-bottom-border","group","cursor-pointer","xl:justify-start","menu-item-inactive",3,"routerLink","selected"],[1,"menu-item-custom","default-bottom-border","group","cursor-pointer","xl:justify-start","menu-item-inactive",3,"click"],[3,"innerHTML"],[1,"menu-item-text"],[1,"arrow","float-right"],["width","1em","height","1em","viewBox","0 0 20 20","fill","none","xmlns","http://www.w3.org/2000/svg",1,"ms-auto","w-5","h-5","transition-transform","duration-200"],["d","M4.79175 7.396L10.0001 12.6043L15.2084 7.396","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],[1,"submenu-list"],[1,"submenu-item","default-bottom-border","ml-4",3,"selected"],[1,"submenu-item","default-bottom-border","ml-4",3,"click"],["routerLinkActive","active",1,"submenu-item-text",3,"routerLink"],["routerLinkActive","active",1,"menu-item-custom","default-bottom-border","group","cursor-pointer","xl:justify-start","menu-item-inactive",3,"click","routerLink"],[3,"words"]],template:function(e,r){if(e&1&&(d(0,"div",1)(1,"button",2),A("click",function(){return r.toggleMobileMenue()}),b(2,"i",3),L(),d(3,"nav",4),l1(4,5),L()(),d(5,"aside",6)(6,"div",7)(7,"div",8),b(8,"img",9),d(9,"span"),N(10,"Devatrip"),L()()(),l1(11,5),L(),G1(12,f7,2,1,"ng-template",null,0,K1)),e&2){let i=$1(13);v(3),K("hidden",!r.openMobileMenu),v(),B("ngTemplateOutlet",i),v(7),B("ngTemplateOutlet",i)}},dependencies:[O,a4,t2,D2,n4,Z3,c0,z4],styles:[`.user-side-bar[_ngcontent-%COMP%], .mobile-options[_ngcontent-%COMP%]{font-size:1.3rem;line-height:2.5;height:100vh;background:transparent;color:#d6f0f5;cursor:pointer;border:none;border-radius:0;box-shadow:0 0 10px #f8f7f5;font-family:Baloo}.mobile-options[_ngcontent-%COMP%]{height:75px}.mobile-nav[_ngcontent-%COMP%]{width:150px;border:none;border-radius:0;box-shadow:0 0 10px #f8f7f5;top:75px;background-color:#d2f8e240}.mobile-nav.hidden[_ngcontent-%COMP%]{display:none}.main-menu-container[_ngcontent-%COMP%], .other-options-container[_ngcontent-%COMP%], .logo-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 10px}.logo-container[_ngcontent-%COMP%]{height:75px}.logo-image[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px;gap:10px}.main-menu-container[_ngcontent-%COMP%]{overflow:auto}.menu-item-custom[_ngcontent-%COMP%], .submenu-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.default-bottom-border[_ngcontent-%COMP%]{border-bottom:1px solid #f8f7f560}.menu-item-text[_ngcontent-%COMP%]{width:100%;padding-left:10px}.menu-item-custom.selected[_ngcontent-%COMP%], .submenu-item.selected[_ngcontent-%COMP%], .menu-item-custom[_ngcontent-%COMP%]:hover, .submenu-item[_ngcontent-%COMP%]:hover{background-color:#d2f8e250}.submenu-item[_ngcontent-%COMP%]{border-inline:1px solid #f8f7f560}.submenu-item-text[_ngcontent-%COMP%]{width:100%;font-size:calc(1em - 2px);padding:0 10px}.arrow[_ngcontent-%COMP%]{transition:transform .2s ease}.arrow.rotated[_ngcontent-%COMP%]{transform:rotate(180deg);transform-origin:center;transition:transform .4s ease-in-out;cursor:pointer}
/*# sourceMappingURL=user-sidebar-AAQXHRCN.css.map */`]})}return c})();var y9=(()=>{class c{sidebarService;isExpanded$;isHovered$;isMobileOpen$;constructor(a){this.sidebarService=a,this.isExpanded$=this.sidebarService.isExpanded$,this.isHovered$=this.sidebarService.isHovered$,this.isMobileOpen$=this.sidebarService.isMobileOpen$}static \u0275fac=function(e){return new(e||c)(T(m2))};static \u0275cmp=E({type:c,selectors:[["user-dashboard"]],decls:6,vars:0,consts:[[1,"user-dsahboard-wrapper"],[1,"user-sidebar-wrapper","absolute","md:relative"],[1,"user-content-wrapper","w-full","md:w-[85%]"]],template:function(e,r){e&1&&(d(0,"div",0)(1,"div",1),b(2,"user-sidebar"),L(),d(3,"div",2),b(4,"user-header")(5,"router-outlet"),L()())},dependencies:[r4,O,m4,a0],styles:[`.user-dsahboard-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:100%;height:100vh;color:#d6f0f5;overflow:auto}.user-sidebar-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:none;width:15%;height:100%}.user-content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:none;height:100%}
/*# sourceMappingURL=user-dashboard-BO7HNDG5.css.map */`]})}return c})();export{y9 as UserDashboard};
//# sourceMappingURL=chunk-5A3BZOSC.mjs.map
