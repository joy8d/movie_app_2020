(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),i=a.n(s),c=a(2),o=a.n(c),m=a(13),l=a(14),u=a(15),v=a(18),d=a(16),p=a(19),_=a(17),y=a.n(_);a(43);var g=function(e){e.id;var t=e.title,a=e.year,n=e.summary,s=e.poster,i=(e.trailer,e.genres);return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"}," ",t," "),r.a.createElement("h5",{className:"movie__year"},"  ",a,"  "),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie__summary"}," ",n," ")))},f=(a(44),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(m.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,trailer:e.yt_trailer_code,genres:e.genres})}))))}}]),t}(r.a.Component));i.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8033cb22.chunk.js.map