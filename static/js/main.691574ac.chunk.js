(this["webpackJsonpmovie-library"]=this["webpackJsonpmovie-library"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},46:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),i=c(16),a=c.n(i),s=(c(35),c(8)),o=c(3),l=c(4),u=(c(36),c(25)),d=c(5),j=c.n(d),b=c(12),v=(c(38),"cd6ab41bec3df2441243a2dc0142c38d"),m=function(){var e=Object(b.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={getHomeList:function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/movie/popular?api_key=".concat(v));case 2:return e.t0=e.sent,e.t1={slug:"Popular",title:"Popular",item:e.t0,id:0},e.next=6,m("/discover/movie?with_genre=28&api_key=".concat(v));case 6:return e.t2=e.sent,e.t3={slug:"action",title:"Action",item:e.t2,id:28},e.next=10,m("/discover/movie?with_genre=35&api_key=".concat(v));case 10:return e.t4=e.sent,e.t5={slug:"comedy",title:"Comedy",item:e.t4,id:35},e.next=14,m("/discover/movie?with_genre=27&api_key=".concat(v));case 14:return e.t6=e.sent,e.t7={slug:"horror",title:"Horror",item:e.t6,id:27},e.next=18,m("/discover/movie?with_genre=10749&api_key=".concat(v));case 18:return e.t8=e.sent,e.t9={slug:"romance",title:"Romance",item:e.t8,id:10402},e.next=22,m("/discover/movie?with_genre=99&api_key=".concat(v));case 22:return e.t10=e.sent,e.t11={slug:"documentary",title:"Documentary",item:e.t10,id:99},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11]);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovies:function(){var e=Object(b.a)(j.a.mark((function e(t,c,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==c){e.next=6;break}return e.next=3,m("/movie/popular?api_key=".concat(v,"&page=").concat(r,"&include_adult=false"));case 3:return e.abrupt("return",e.sent);case 6:if(!(c>0)){e.next=12;break}return e.next=9,m("/discover/movie?with_genres=".concat(c,"&api_key=").concat(v,"&page=").concat(r,"&include_adult=false"));case 9:return e.abrupt("return",e.sent);case 12:if(""===t){e.next=18;break}return e.next=15,m("/search/movie?query=".concat(t,"&api_key=").concat(v,"&language=en-US&page=").concat(r,"&include_adult=false"));case 15:return e.abrupt("return",e.sent);case 18:return e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e)})));return function(t,c,r){return e.apply(this,arguments)}}(),getTrailer:function(){var e=Object(b.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t){e.next=15;break}return e.next=3,m("/movie/".concat(t,"/videos?api_key=").concat(v,"&language=en-US"));case 3:if(!(c=e.sent).status_code){e.next=8;break}return e.abrupt("return","false");case 8:if(0!==c.results.length){e.next=12;break}return e.abrupt("return","false");case 12:return e.abrupt("return",c.results[0].key);case 13:e.next=16;break;case 15:return e.abrupt("return");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=(c(39),c(1));var O=function(e){return Object(x.jsx)("div",{className:"movie_card",onClick:e.onClick,children:Object(x.jsx)("div",{className:"movie_img",children:Object(x.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.image),alt:"thumbnail"})})})},p=(c(41),c(27)),f=c.n(p);var g=function(e){var t=Object(r.useState)(),c=Object(s.a)(t,2),n=c[0],i=c[1];return Object(r.useEffect)((function(){(function(){var t=Object(b.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getTrailer(e.movieId);case 2:c=t.sent,i(c);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()})),e.rowId<=e.infoId&&e.rowId>=e.infoId-4&&e.bool?Object(x.jsxs)("div",{className:"movie_info",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(e.image,")"),backgroundPosition:"center",backgroundSize:"cover"},children:[Object(x.jsx)("div",{className:"overlay"}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsx)("div",{className:"movie_title",children:Object(x.jsx)("p",{children:e.title})}),Object(x.jsx)("div",{className:"overview",children:Object(x.jsx)("p",{children:e.overview})}),Object(x.jsxs)("div",{className:"more_info",children:[Object(x.jsxs)("div",{className:"votes",children:[Object(x.jsx)(f.a,{className:"star",fontSize:"large"}),Object(x.jsx)("p",{children:e.votes})]}),Object(x.jsx)("div",{className:"date",children:Object(x.jsx)("p",{children:e.date})})]})]}),Object(x.jsx)("div",{className:"video",children:Object(x.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})}),Object(x.jsx)("div",{className:"close",onClick:e.onClick,children:Object(x.jsx)("p",{children:"X"})})]}):null},y=(c(46),c(28)),k=c.n(y);var w=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k.a,{className:"menu_icon",onClick:function(){n(""===c?"active":"")}}),Object(x.jsx)("div",{className:"side_bar ".concat(c),children:Object(x.jsxs)("div",{className:"categories",children:[Object(x.jsx)("div",{className:"genre",children:Object(x.jsx)("p",{children:"Genres"})}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/action",children:"Action"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/adventure",children:"Adventure"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/animation",children:"Animation"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/comedy",children:"Comedy"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/crime",children:"Crime"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/documentary",children:"Documentary"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/drama",children:"Drama"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/family",children:"Family"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/fantasy",children:"Fantasy"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/history",children:"History"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/horror",children:"Horror"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/music",children:"Music"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/mistery",children:"Mistery"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/romance",children:"Romance"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/syfy",children:"Science Fiction"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/thriller",children:"Thriller"})}),Object(x.jsx)("li",{children:Object(x.jsx)(o.b,{to:"/war",children:"War"})})]})]})})]})};var _=function(e){var t=Object(r.useState)([]),c=Object(s.a)(t,2),n=c[0],i=c[1],a=Object(r.useState)(2),o=Object(s.a)(a,2),l=o[0],d=o[1];Object(r.useEffect)((function(){(function(){var t=Object(b.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getMovies(e.str,e.id,1);case 2:c=t.sent,i(c.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.str,e.id]);var v=4,m=Object(r.useState)({bool:!1,image:void 0,title:void 0,overview:void 0,date:void 0,votes:void 0,key:void 0}),p=Object(s.a)(m,2),f=p[0],y=p[1],k=function(){y({bool:!1})},_=function(){var t=Object(b.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getMovies(e.str,e.id,l);case 2:c=t.sent,i((function(e){return[].concat(Object(u.a)(e),Object(u.a)(c.results))})),d((function(e){return e+1}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)(w,{}),Object(x.jsx)("div",{className:"title",children:Object(x.jsx)("p",{children:e.title})}),Object(x.jsx)("div",{className:"movie_list",children:n&&n.map((function(e,t){return Object(x.jsxs)(r.Fragment,{children:[Object(x.jsx)(O,{className:"movie_card",title:e.title,image:e.poster_path,infoImage:e.backdrop_path,overview:e.overview,onClick:function(){return r=t,void y({bool:!0,image:(c=e).backdrop_path?c.backdrop_path:void 0,title:c.title?c.title:"",overview:c.overview?c.overview:"",date:c.release_date?c.release_date.slice(0,4):"",votes:c.vote_average?c.vote_average:"",movieId:c.id,key:r});var c,r}},e.id),(c=t,c===v||c===n.length-1?(v+=5,Object(x.jsx)(g,{bool:f.bool,rowId:f.key,infoId:c,movieId:f.movieId,image:f.image,title:f.title,overview:f.overview,date:f.date,votes:f.votes,onClick:k},c)):null)]},t);var c}))}),void 0!==n?Object(x.jsx)("div",{className:"more_btn",children:Object(x.jsx)("button",{onClick:_,children:"More"})}):null]})})},N=(c(49),c(29)),A=c.n(N);var S=function(e){var t=Object(l.f)(),c=Object(r.useState)(""),n=Object(s.a)(c,2),i=n[0],a=n[1];return Object(x.jsxs)("div",{className:"navbar",children:[Object(x.jsx)("div",{className:"home",children:Object(x.jsx)(o.b,{to:"/",children:Object(x.jsx)(A.a,{className:"home_icon",fontSize:"large"})})}),Object(x.jsx)("div",{className:"input_field",children:Object(x.jsx)("div",{className:"input",children:Object(x.jsxs)("form",{className:"form",onSubmit:function(c){return function(c){""===i?(e.click(c,i),a("")):(t.push("/results"),e.click(c,i),a(""))}(c)},children:[Object(x.jsx)("input",{className:"search_input",type:"text",placeholder:"Search...",style:{backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAl0lEQVQ4y83TTQqCYBSFYQcOawvpGnQqtD1dgEvI3FQKYnsovsHTtAStDyI6w8N9uf9J8t9SOZkwOaneBadar2qlW0CLoFHYKTQC2q1iCI5PzlFgtTAd6oVXo1sDZpQLr8S8BtywX3h73GMzXGN76L81pZU99HGb7jHKP7ml2VmVJEYMss+PMTfEItnPkItDzGNlUeG/1gNQx9gqKvwkpwAAAABJRU5ErkJggg==",")")},value:i,onChange:function(e){return a(e.target.value)}}),Object(x.jsx)("input",{className:"submit_search",type:"submit",value:"search"})]})})})]})};var C=function(){var e=[{slug:"action",title:"Action",id:28},{slug:"adventure",title:"Adventure",id:12},{slug:"animation",title:"Animation",id:16},{slug:"comedy",title:"Comedy",id:35},{slug:"crime",title:"Crime",id:80},{slug:"documentary",title:"Documentary",id:99},{slug:"drama",title:"Drama",id:18},{slug:"family",title:"Family",id:10751},{slug:"fantasy",title:"Fantasy",id:14},{slug:"history",title:"History",id:36},{slug:"horror",title:"Horror",id:27},{slug:"music",title:"Music",id:10402},{slug:"mistery",title:"Mistery",id:9648},{slug:"romance",title:"Romance",id:10402},{slug:"syfy",title:"Science Fiction",id:878},{slug:"thriller",title:"Thriller",id:53},{slug:"war",title:"War",id:10752}],t=Object(r.useState)(""),c=Object(s.a)(t,2),n=c[0],i=c[1];return Object(x.jsx)(o.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(S,{click:function(e,t){e.preventDefault(),""!==t&&i(t)}}),Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",children:Object(x.jsx)(_,{str:void 0,id:0,title:"Popular"})}),Object(x.jsx)(l.a,{path:"/results",children:Object(x.jsx)(_,{str:n,id:-1,title:"Results..."})}),e&&e.map((function(e,t){return Object(x.jsx)(l.a,{path:"/".concat(e.slug),children:Object(x.jsx)(_,{id:e.id,title:e.title})},t)}))]})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),i(e),a(e)}))};a.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),I()}},[[51,1,2]]]);
//# sourceMappingURL=main.691574ac.chunk.js.map