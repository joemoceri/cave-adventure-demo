(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{FQ1g:function(t,e,a){"use strict";a.r(e),a.d(e,"AboutModule",function(){return j});var r=a("tyNb"),o=a("fXoL"),i=a("ofXK");a("XNiG"),a("quSY"),a("LRne"),a("vkgz"),a("Kj3r"),a("pLZG"),a("lJxs"),a("IzEk");var s=a("8LU1");let n;try{n="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(M){n=!1}let c=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Object(i.n)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!n)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(o.C))},t.\u0275prov=Object(o.Hb)({factory:function(){return new t(Object(o.Rb)(o.C))},token:t,providedIn:"root"}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({}),t})();a("HDdC"),"undefined"!=typeof Element&&Element;const h="cdk-high-contrast-black-on-white",l="cdk-high-contrast-white-on-black",f="cdk-high-contrast-active";let d=(()=>{class t{constructor(t,e){this._platform=t,this._document=e}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const e=this._document.defaultView||window,a=e&&e.getComputedStyle?e.getComputedStyle(t):null,r=(a&&a.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),r){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove(f),t.remove(h),t.remove(l);const e=this.getHighContrastMode();1===e?(t.add(f),t.add(h)):2===e&&(t.add(f),t.add(l))}}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(c),o.Rb(i.c))},t.\u0275prov=Object(o.Hb)({factory:function(){return new t(Object(o.Rb)(c),Object(o.Rb)(i.c))},token:t,providedIn:"root"}),t})();var p=a("cH1L");const g=new o.P("11.2.6");a("JX91"),a("R1ws");const m=new o.P("11.2.6"),u=new o.r("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});let w,k=(()=>{class t{constructor(t,e,a){this._hasDoneGlobalChecks=!1,this._document=a,t._applyBodyHighContrastModeCssClasses(),this._sanityChecks=e,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}_getWindow(){const t=this._document.defaultView||window;return"object"==typeof t&&t?t:null}_checksAreEnabled(){return Object(o.W)()&&!this._isTestEnv()}_isTestEnv(){const t=this._getWindow();return t&&(t.__karma__||t.jasmine)}_checkDoctypeIsDefined(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.doctype)&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}_checkThemeIsPresent(){if(!this._checksAreEnabled()||!1===this._sanityChecks||!this._sanityChecks.theme||!this._document.body||"function"!=typeof getComputedStyle)return;const t=this._document.createElement("div");t.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(t);const e=getComputedStyle(t);e&&"none"!==e.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(t)}_checkCdkVersionMatch(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.version)&&m.full!==g.full&&console.warn("The Angular Material version ("+m.full+") does not match the Angular CDK version ("+g.full+").\nPlease ensure the versions of these two packages exactly match.")}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(d),o.Rb(u,8),o.Rb(i.c))},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[p.a],p.a]}),t})();try{w="undefined"!=typeof Intl}catch(M){w=!1}let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[k,b],k]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[v,k],k]}),t})();a("cp0P"),a("JIr8"),a("nYR2"),a("w1tV"),a("bOdf"),a("jhN1");let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[k],k]}),t})(),O=(()=>{class t{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(t){this._vertical=Object(s.a)(t)}get inset(){return this._inset}set inset(t){this._inset=Object(s.a)(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Fb({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,e){2&t&&(o.Cb("aria-orientation",e.vertical?"vertical":"horizontal"),o.Db("mat-divider-vertical",e.vertical)("mat-divider-horizontal",!e.vertical)("mat-divider-inset",e.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,e){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],encapsulation:2,changeDetection:0}),t})(),N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[k],k]}),t})();var I=a("XiUz");let C=(()=>{class t{constructor(t){this.router=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["about"]],decls:206,vars:0,consts:[["id","about"],["id","about-form-wrapper","fxLayout","column","fxLayoutAlign","start start","fxFlex","100"],["id","about-form"],["fxLayout","row","fxLayout.sm","column","fxLayout.xs","column","fxLayoutAlign","start start"],["fxLayout","column","fxFlex","50",2,"padding-right","10px"],[2,"margin-top","0px"],["href","https://en.wikipedia.org/wiki/C_Sharp_(programming_language)","target","_blank"],["href","https://en.wikipedia.org/wiki/SQL","target","_blank"],["href","https://en.wikipedia.org/wiki/Programmer","target","_blank"],["href","https://en.wikipedia.org/wiki/C_(programming_language)","target","_blank"],["href","https://www.python.org/","target","_blank"],["href","https://docs.python.org/3.3/library/turtle.html?highlight=turtle","target","_blank"],["href","https://processing.org/","target","_blank"],["href","https://www.openprocessing.org/user/38862","target","_blank"],["href","https://unity.com/","target","_blank"],["href","https://en.wikipedia.org/wiki/Web_developer","target","_blank"],["href","https://www.microsoft.com/en-us/sql-server/default.aspx","target","_blank"],["href","https://www.mysql.com/","target","_blank"],["href","https://www.postgresql.org/","target","_blank"],["href","https://aws.amazon.com/","target","_blank"],["href","https://aws.amazon.com/ec2/","target","_blank"],["href","https://en.wikipedia.org/wiki/Message_queue","target","_blank"],["href","https://aws.amazon.com/sqs/","target","_blank"],["href","https://aws.amazon.com/ses/","target","_blank"],["href","https://aws.amazon.com/elasticbeanstalk/","target","_blank"],["href","https://aws.amazon.com/rds/","target","_blank"],["href","https://en.wikipedia.org/wiki/AWS_Lambda","target","_blank"],["href","https://azure.microsoft.com","target","_blank"],["href","https://azure.microsoft.com/en-us/services/key-vault/","target","_blank"],["href","https://docs.microsoft.com/en-us/azure/app-service/webjobs-create","target","_blank"],["href","https://en.wikipedia.org/wiki/WebRTC","target","_blank"],["href","https://www.samesurf.com/","target","_blank"],["href","https://www.twilio.com/","target","_blank"],[2,"clear","both"],[2,"border-top-width","1px","border-top-color","#000"],["href","https://www.salesforce.com/","target","_blank"],["href","https://www.five9.com/","target","_blank"],["href","https://en.wikipedia.org/wiki/Representational_state_transfer","target","_blank"],["href","https://en.wikipedia.org/wiki/SOAP","target","_blank"],["href","https://www.apple.com/ios/app-store/","target","_blank"],["href","https://en.wikipedia.org/wiki/Google_Play","target","_blank"],["href","https://www.behance.net/gallery/84034917/Box-Copter-Hero","target","_blank"],["href","https://www.behance.net/gallery/84035813/Symbol-Match","target","_blank"],["href","https://www.behance.net/gallery/110004715/Swingin-In-Caves","target","_blank"],["href","https://www.npmjs.com/package/angularjs-chart-service","target","_blank"],["href","https://www.npmjs.com/package/angularjs-datatables-service","target","_blank"],["href","https://www.npmjs.com/","target","_blank"],["href","https://www.nuget.org/packages/FieldMapper/","target","_blank"],["href","https://www.nuget.org/packages/GoogleAnalyticsService/","target","_blank"],["href","https://www.nuget.org/","target","_blank"],["href","https://medium.com/@jmoceri34","target","_blank"],["href","https://github.com/jmoceri34","target","_blank",2,"align-content","center"],["href","https://www.behance.net/joemoceri","target","_blank"],["href","https://trello.com/b/veVOUR1r/main-planning-board","target","_blank"],[2,"padding-left","0px"],["href","mailto:jmoceri34@gmail.com"],["href","https://stackoverflow.com/users/8293151/jmoceri","target","_blank",2,"align-content","center"],["src","assets/images/icons/stack-overflow-icon.png",2,"width","32px","height","32px"],["src","assets/images/icons/GitHub-Mark-32px.png",2,"width","32px","height","32px"],["src","assets/images/icons/Monogram.png",2,"width","32px","height","32px"],["href","https://www.npmjs.com/~jmoceri","target","_blank"],["src","assets/images/icons/n-64.png",2,"width","32px","height","32px"],["href","https://www.nuget.org/profiles/jmoceri","target","_blank"],["src","assets/images/icons/nuget.png",2,"width","32px","height","32px"],["src","assets/images/icons/processing.png",2,"width","32px","height","32px"],["src","assets/images/icons/behance.png"],[2,"border-top-width","2px","border-top-color","#000"],["fxLayout","column","fxFlex","50"],["src","assets/images/avatar-512.png",1,"about-photo"],["src","assets/images/avatar-512.2.png",1,"about-photo"]],template:function(t,e){1&t&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"div",2),o.Ob(3,"div",3),o.Ob(4,"div",4),o.Ob(5,"div"),o.Ob(6,"div"),o.Ob(7,"h1",5),o.fc(8," Joe Moceri "),o.Nb(),o.Ob(9,"p"),o.fc(10," I'm a Full Stack "),o.Ob(11,"a",6),o.fc(12,"C#"),o.Nb(),o.fc(13,", "),o.Ob(14,"a",7),o.fc(15,"SQL"),o.Nb(),o.fc(16,", "),o.Ob(17,"a",8),o.fc(18,"Software Developer"),o.Nb(),o.fc(19,". I started writing code in 2011 using "),o.Ob(20,"a",9),o.fc(21,"C"),o.Nb(),o.fc(22," first then "),o.Ob(23,"a",10),o.fc(24,"Python"),o.Nb(),o.fc(25,", which was much easier to work with. Using the "),o.Ob(26,"a",11),o.fc(27,"Python Turtle"),o.Nb(),o.fc(28," I drew my first graphic on screen, and I was hooked on coding ever since. Software has always fascinated me, I wanted to write code for video games and eventually I learned how to do this first using "),o.Ob(29,"a",12),o.fc(30,"Processing"),o.Nb(),o.fc(31," ("),o.Ob(32,"a",13),o.fc(33,"sketches here"),o.Nb(),o.fc(34,"). I wanted to work with a more popular game engine and I started using "),o.Ob(35,"a",14),o.fc(36,"Unity3D"),o.Nb(),o.fc(37,", which introduced me to C#. From there I began my work as a "),o.Ob(38,"a",15),o.fc(39,"Web Developer"),o.Nb(),o.fc(40,", where I starting working with databases such as "),o.Ob(41,"a",16),o.fc(42,"SQL Server"),o.Nb(),o.fc(43,", "),o.Ob(44,"a",17),o.fc(45,"MySQL"),o.Nb(),o.fc(46," and "),o.Ob(47,"a",18),o.fc(48,"PostgreSQL"),o.Nb(),o.fc(49,". I started working with "),o.Ob(50,"a",19),o.fc(51,"Amazon Web Services"),o.Nb(),o.fc(52," including "),o.Ob(53,"a",20),o.fc(54,"EC2"),o.Nb(),o.fc(55,", their service for "),o.Ob(56,"a",21),o.fc(57,"message queues"),o.Nb(),o.fc(58," ("),o.Ob(59,"a",22),o.fc(60,"SQS"),o.Nb(),o.fc(61,"), "),o.Ob(62,"a",23),o.fc(63,"Simple Email Service"),o.Nb(),o.fc(64,", "),o.Ob(65,"a",24),o.fc(66,"Elastic Beanstalk"),o.Nb(),o.fc(67,", "),o.Ob(68,"a",25),o.fc(69,"RDS"),o.Nb(),o.fc(70,", and "),o.Ob(71,"a",26),o.fc(72,"Lambda"),o.Nb(),o.fc(73,". I also began working with "),o.Ob(74,"a",27),o.fc(75,"Microsoft Azure"),o.Nb(),o.fc(76," including "),o.Ob(77,"a",28),o.fc(78,"Key Vault"),o.Nb(),o.fc(79," and "),o.Ob(80,"a",29),o.fc(81,"WebJobs"),o.Nb(),o.fc(82,". After, I spent time working with "),o.Ob(83,"a",30),o.fc(84,"WebRTC"),o.Nb(),o.fc(85," and two integrations with 3rd-party providers "),o.Ob(86,"a",31),o.fc(87,"samesurf"),o.Nb(),o.fc(88," and "),o.Ob(89,"a",32),o.fc(90,"Twilio"),o.Nb(),o.fc(91," for video chat, the ability to text phones using a web browser, and other real-time communications. "),o.Nb(),o.Nb(),o.Ob(92,"h1",33),o.fc(93,"Career"),o.Nb(),o.Mb(94,"mat-divider",34),o.Ob(95,"p"),o.fc(96," In the past I've written code for enterprise and public-facing web apps and video games in addition to integrations with many cloud-based enterprise systems including "),o.Ob(97,"a",35),o.fc(98,"Salesforce"),o.Nb(),o.fc(99,", "),o.Ob(100,"a",36),o.fc(101,"Five9"),o.Nb(),o.fc(102,", "),o.Ob(103,"a",32),o.fc(104,"Twilio"),o.Nb(),o.fc(105,", and many more. I've worked with "),o.Ob(106,"a",37),o.fc(107,"REST"),o.Nb(),o.fc(108," and "),o.Ob(109,"a",38),o.fc(110,"SOAP"),o.Nb(),o.fc(111," APIs, consuming (both) and creating (REST). I also created 3 mobile games that were available on the "),o.Ob(112,"a",39),o.fc(113,"Apple App Store"),o.Nb(),o.fc(114," and "),o.Ob(115,"a",40),o.fc(116,"Google Play"),o.Nb(),o.fc(117,": "),o.Ob(118,"a",41),o.fc(119,"Boxcopter Hero"),o.Nb(),o.fc(120,", "),o.Ob(121,"a",42),o.fc(122,"Symbol Match"),o.Nb(),o.fc(123,", and "),o.Ob(124,"a",43),o.fc(125,"Swingin' In Caves"),o.Nb(),o.fc(126,". Check out "),o.Ob(127,"a",44),o.fc(128,"angularjs-chart-service"),o.Nb(),o.fc(129,", a really useful service wrapper for angular-chart.js and "),o.Ob(130,"a",45),o.fc(131,"angularjs-datatables-service"),o.Nb(),o.fc(132,", which integrates with AngularJS DataTables, both available on "),o.Ob(133,"a",46),o.fc(134,"NPM"),o.Nb(),o.fc(135,". Check out "),o.Ob(136,"a",47),o.fc(137,"Field Mapper"),o.Nb(),o.fc(138,", a really useful tool for mapping data from text data, such as the body of an email, and "),o.Ob(139,"a",48),o.fc(140,"Google Analytics Service"),o.Nb(),o.fc(141,", which is great for working with Google Analytics metrics and dimensions and returning it in a C# DataTable friendly format, both available on "),o.Ob(142,"a",49),o.fc(143,"NuGet"),o.Nb(),o.fc(144,". Check out some of the posts I wrote on C#, SQL, and more over at "),o.Ob(145,"a",50),o.fc(146,"Medium"),o.Nb(),o.fc(147,". You can see code samples on "),o.Ob(148,"a",51),o.fc(149,"GitHub"),o.Nb(),o.fc(150,", on "),o.Ob(151,"a",13),o.fc(152,"Open Processing"),o.Nb(),o.fc(153," you can play pong, and over at "),o.Ob(154,"a",52),o.fc(155,"Behance"),o.Nb(),o.fc(156," you can see a history of my past work. "),o.Nb(),o.Ob(157,"p"),o.fc(158,"To see the latest in what I'm up to, head over to my trello board "),o.Ob(159,"a",53),o.fc(160,"here"),o.Nb(),o.fc(161,"."),o.Nb(),o.Ob(162,"p"),o.fc(163," If you would like to reach me professionally (in case of fire, or to say hi), please do so by email, thanks! "),o.Nb(),o.Ob(164,"h1",54),o.fc(165," Contact "),o.Nb(),o.Mb(166,"mat-divider",34),o.Ob(167,"p"),o.fc(168," Email "),o.Ob(169,"a",55),o.fc(170,"jmoceri34@gmail.com"),o.Nb(),o.Nb(),o.Ob(171,"h1"),o.fc(172," Links "),o.Nb(),o.Mb(173,"mat-divider",34),o.Ob(174,"p"),o.Ob(175,"a",56),o.Mb(176,"img",57),o.fc(177," Stack Overflow"),o.Nb(),o.Nb(),o.Ob(178,"p"),o.Ob(179,"a",51),o.Mb(180,"img",58),o.fc(181," GitHub"),o.Nb(),o.Nb(),o.Ob(182,"p"),o.Ob(183,"a",50),o.Mb(184,"img",59),o.fc(185," Medium"),o.Nb(),o.Nb(),o.Ob(186,"p"),o.Ob(187,"a",60),o.Mb(188,"img",61),o.fc(189," NPM"),o.Nb(),o.Nb(),o.Ob(190,"p"),o.Ob(191,"a",62),o.Mb(192,"img",63),o.fc(193," NuGet"),o.Nb(),o.Nb(),o.Ob(194,"p"),o.Ob(195,"a",13),o.Mb(196,"img",64),o.fc(197," Open Processing"),o.Nb(),o.Nb(),o.Ob(198,"p"),o.Ob(199,"a",52),o.Mb(200,"img",65),o.fc(201," Behance"),o.Nb(),o.Nb(),o.Mb(202,"mat-divider",66),o.Nb(),o.Nb(),o.Ob(203,"div",67),o.Mb(204,"img",68),o.Mb(205,"img",69),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb())},directives:[I.c,I.b,I.a,O],styles:["about #about{background-color:#fff;width:100%;background-size:cover}about #about #about-form-wrapper{flex:1 0 auto!important;-webkit-flex:1 0 auto!important;justify-content:flex-start!important}about #about #about-form-wrapper #about-form{background-color:#fff;max-width:100%;padding:12px}about #about #about-form-wrapper #about-form mat-icon{color:#8e7bff;display:none!important}about #about p{padding-top:6px}about .about-photo{max-width:512px}"],encapsulation:2}),t})();var x=a("YUcS");const S=[{path:"",component:C}];let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({imports:[[r.b.forChild(S),_,y,N,x.a]]}),t})()}}]);