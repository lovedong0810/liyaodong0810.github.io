var ImgViewer=function(){function wr(){var n=_ge("sh_rdiv");n&&(sj_be(n,c,function(){hp_addclass(n,wi)}),sj_be(n,ci,function(){hp_removeclass(n,wi)}))}function br(){var n=_ge("hp_cellCenter");return n&&n.className.indexOf("hp_hd")!=-1&&typeof g_img!==f&&hp_defined(g_img.hdurl)&&g_img.url==g_img.hdurl?!0:!1}function di(n,t,i){var r=sj_gx(),u=hp_pushparams(["format=js","idx="+n,"n="+t,"nc="+sb_gt(),"pid=hp"]),f;_w.g_vidOn&&u.push("video=1");_H.quiz&&u.push("quiz=1");f="/HPImageArchive.aspx?"+u.join("&");r.open("GET",f,!0);sj_be(r,"readystatechange",function(){r.readyState==4&&r.status==200&&(s=kr(r.responseText),rt=Math.min(wt,n+(s&&s.images&&s.images.length)||0),i(!!s))});r.send(null)}function kr(n){if(typeof n!="string"||!n)return null;if(_w.JSON&&_w.JSON.parse)try{return _w.JSON.parse(n)}catch(t){}try{return new Function("return "+n)()}catch(t){return null}}function dr(){for(var n=0,t=s.images.length;n<t;n++)ii(n,n)}function ii(t,i){var e;if(n[t]=s.images[i]||null,vr){var r=Math.max(screen.height,screen.width),u=Math.min(screen.height,screen.width),f="//"+window.location.host+"/iod/";n[t].url=f+r+"/"+u+"/"+n[t].fullstartdate;n[t].portraiturl=f+u+"/"+r+"/"+n[t].fullstartdate}else pr&&(e="_1920x1080.jpg",n[t].url=n[t].urlbase+e);s.quiz&&(n[t].quiz=s.quiz)}function gi(i){var r=t+1;ut[r]||r>=wt?at():n[r]?nr(r):di(r,1,function(n){n?(ii(r,0),nr(r)):at();typeof i=="function"&&i(n)})}function gr(){var n=g_prefetch;n&&(n.Im&&nu(n.Im),n.Vid&&tu(n.Vid))}function nu(n){var t=new Image;t.onload=function(){var t=sj_cook.get("_SS","bIm");t=t&&t.length>=3?t.substring(t.length-3)+n.hash:n.hash;sj_cook.set("_SS","bIm",t,0,"/")};t.src=n[ft]}function tu(n){var t=sj_ce("video","prefVid"),i,u,r;try{t.setAttribute("preload","auto")}catch(f){}for(t.width=956,t.height=512,i=0,u=n.length;i<u;i++)r=sj_ce("source"),r.src=n[i][2],r.type=n[i][1],t.appendChild(r);t.style.display="none";sj_b.appendChild(t);sj_be(t,"canplaythrough",function(){var n=_ge("prefVid");n&&sj_b.removeChild(n)})}function nr(t){if(!ut[t]){at();var i=n[t],r=new Image;r.onload=function(){sj_evt.fire("onHPIVImg"+t,t);ut[t]=1};r.src=i.pano?i.pano.image:_w.g_vidOn&&i.vid?i.vid.image:i[ft]}}function iu(){var i=_ge("audioElm"),n,t;i&&i.pause();n=_ge("audioMain");n&&(n.style.display=a);t=_ge("hp_audio_info");t&&(t.style.display=a)}function ri(n){t==0||d||(t--,kt=1,tr(),ur(1,t));typeof n!==f&&n&&sj_pd(n)}function ui(n){if(t<rt-1&&!d&&!bt){var i=t+1;kt=1;bt=1;ut[i]||uu();sj_evt.bind("onHPIVImg"+i,ru,1);ur(-1,i)}typeof n!==f&&n&&sj_pd(n)}function ru(n){n[1]==t+1&&(t++,bt=0,tr())}function at(){var r=n[t],e=r[pi]=="1"?et:ot,s,h,c,l;r.vid&&(s=r.vid.dark,_ge("sh_pl").parentNode.className=s?"sh_pll":"sh_pld",_ge("sh_ps").parentNode.className=s?"sh_psl":"sh_psd",e=s?et:ot);h=e+"dis";w.className=e;c=w.href===st?yt:vt;w.style.cursor=c;t===rt-1?(i.firstChild.className=h,hp_disable(i)):(i.firstChild.className=e,hp_enable(i));t==0?(u.firstChild.className=h,hp_disable(u)):(u.firstChild.className=e,hp_enable(u));i.title=b.previous;u.title=b.next;l=kt?"nav":"";sj_evt.fire("updateHpImg",r,l);o&&typeof hpWall!==f&&(r.wp&&!r.vid?(hpWall.enabled=!0,hpWall.hash=r.hsh,o.firstChild.className=e,o.title=b.walls,o.style.cursor=vt):(hpWall.hash="",hpWall.enabled=!1,hpWall.tB(0),o.firstChild.className=h,o.title=b.walle,o.style.cursor=yt))}function uu(){i.title=b.loading}function tr(){var n,t,i;if(d=1,gt&&clearTimeout(gt),gi(),p&&p.disable(),n=_ge("vid"),_w.g_vidOn&&(VM.InFoc=0,n&&n.style.opacity!="0"&&(n.onended=null,VM.hideControls())),_ge("sh_iga")&&iu(),r&&r.style.opacity!="0"){_ge("panoControls").style.visibility=tt;e.style.backgroundImage="url()";t=_ge("sh_pps");i=_ge("sh_ppl");t&&i&&(t.style.display=a,t.tabIndex="-1",i.style.display=a,i.tabIndex="-1");ht.down(function(){e.removeChild(r);ht=r=null;ir()});return}ni.down(ir)}function ir(){var s;e.style.display=a;var i=n[t],r=_ge("vid"),f=_ge("sc_mktb"),o=n[t].fullstartdate,h=o.substr(0,8)+"_"+o.substr(8,4),u;if(r&&_w.g_vidOn&&VM&&(r.pause&&!r.paused&&r.pause(),r.style.display="none",sj_so(r,0),VM.Loaded=!1,_w.g_vid=null,i.vid)){if(fi(i.vid.caption,i.copyrightlink),u="url('"+i.vid.image+"')",e.style.backgroundImage=u,e.style.display=vi,i.vid.loop){r.onended=VM.play;try{r.setAttribute("loop","true")}catch(c){}}else{r.onended=VM.end;try{r.removeAttribute("loop")}catch(c){}}_w.g_vid=i.vid.sources;VM.InFoc=1;VM.sa_vid_ld(fu);ni.up(rr)}i.pano&&ei(i.pano,!1);i.vid||(fi(i.copyright,i.copyrightlink),u=i[ft],i.pano&&(u=i.pano.image),u="url('"+u+"')",e.style.backgroundImage=u,e.style.filter=sb_i8l?"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+i[ft]+"', sizingMethod='scale') progid:DXImageTransform.Microsoft.Alpha(opacity=0);":"",e.style.display=vi,ni.up(rr));sj_evt.fire("onHPImgViewerNavigation",h);f&&(s=_ge("hp_husb"),f.style.display=!!s||i.vid||i.pano?"none":"block")}function fi(n,t){var i=typeof t==f||t==""||t==st,r=_ge("musCard");r?w.href=st:(w.title=n,w.href=i?st:t,w.style.cursor=i?yt:vt)}function fu(){var n=_ge("vid");n&&VM&&VM.InFoc&&(VM._autoPlay===!1?VM.pause():VM.play(),VM.Loaded=!0,n.style.display="block",sj_so(n,100))}function rr(){var e,s,l,r,a,h,v,w,i,o,u,c;if(d=0,e=n[t],_w.g_hot&&(!e.pano||e.pano.hs===!0)){for(s=e.hs,i=0,c=s.length;i<c;i++){if(i>=s.length){typeof g_triggerElems!==f&&(g_triggerElems[i].isHotSpotDisabled=!0);continue}else typeof g_triggerElems!==f&&(g_triggerElems[i].isHotSpotDisabled=!1);l=i+1;r=s[i];a=_ge("sc_hst"+l);a.style.left=r.locx+"%";a.style.top=r.locy+"%";h=_ge("sc_hs"+l);h.href=r.link;h.firstChild.innerHTML=r.desc;h.firstChild.nextSibling.innerHTML=r.query}p&&p.intro(1)}var b=_ge("hp_pgNav"),k=b?2:0,y=_ge("hp_pgbar");if(y)for(v=y.getElementsByTagName("h3"),w=e.msg,i=0,c=v.length;i<c;i++){if(o=w[i],!o)break;if(u=v[i+k],!u)break;u.parentNode.id!==cr&&(u.innerHTML=o.title,u.nextSibling.innerHTML=o.text,u.nextSibling.href=o.link)}}function ur(n){if(typeof hpl!==f){if(hpl&&(y=hpl),y&&y.ssd){var t=y.ssd,i=new Date(parseInt(t.substr(0,4),10),t.substr(4,2)-1,parseInt(t.substr(6,2),10)+n);y.ssd=i.getFullYear().toString()+fr(i.getMonth()+1)+fr(i.getDate())+"_"+t.substr(9,4)}y&&(hpl=y)}}function fr(n){return(n<10?"0":"")+n}function eu(n){var t,u,i;if(fi(n.cap,n.caplink),n.spots)for(t=0,u=n.spots.length;t<u;t++)i=n.spots[t],Pano.CreateHotspot(i[0],i[1],i[2]);d=1;r.style.opacity=0;e.style.opacity=1;r.style.visibility=l;ht.up(function(){var t,i,r,u,f,e;_ge("panoControls").style.visibility=l;t="hpVideoPause";sj_evt.bind(pt,function(){Pano.StopAnimation()});i=!0;n.an===!0&&(r=sj_cook&&sj_cook.get("SRCHHPGUSR","HAP"),r&&r!="0"&&(i=!1),_w.g_hpLocal&&(u=localStorage.getItemE(t),u!=null&&u===1&&(i=!1)),i?gt=sb_st(function(){Pano.IdleAnimate()},500):Pano.StopAnimation());f=_ge("panoPause");e=_ge("panoPlay");f&&e&&(sj_be(f,c,function(){_w.g_hpLocal&&localStorage.setItemE(t,1,1440);Pano.StopAnimation()}),sj_be(e,c,function(){_w.g_hpLocal&&localStorage.removeItem(t);Pano.IdleAnimate(!0)}));d=0})}function h(n){return sj_ce(ar,n)}function ou(){var o,u,w,b,f,nt,n,k;if(_ge("panoDiv")||(r=h("panoDiv"),e.appendChild(r),ht=_anim.fadeE(r,yi)),o=_ge("hp_ctrls"),o&&!_ge("panoControls")){var s=h("panoLeft"),l=h("panoRight"),a=h("panoUp"),v=h("panoDown"),y=h("panoZoomIn"),p=h("panoZoomOut"),i=h("panoPosition");i.appendChild(a);i.appendChild(s);i.appendChild(l);i.appendChild(v);u=h("panoControlSet");u.appendChild(p);u.appendChild(i);u.appendChild(y);w=h("panoControls");w.appendChild(u);b=[s,l,a,v,y,p];function t(n,t){Pano.SetCameraFidelity(!1);dt=!1;d(n,t)}function d(n,t){dt==!1?(Pano.MovePano(n,t),sb_st(sj_wf(d,n,t),25)):Pano.SetCameraFidelity(!0)}function g(n){dt=!0;var t=sj_et(n);r&&t.id!="sh_ppl"&&t.id!="sh_pps"&&Pano.StopAnimation()}for(f=0,nt=b.length;f<nt;f++)sj_be(b[f],li,g);sj_be(_d,li,g);sj_be(y,c,sj_wf(t,"z",1));sj_be(p,c,sj_wf(t,"z",-1));sj_be(_w,lr,function(){r&&Pano.StopAnimation()});n=.05;k=_G&&_G.RTL===!0;sj_be(s,c,sj_wf(t,"x",k?-n:n));sj_be(l,c,sj_wf(t,"x",k?n:-n));sj_be(a,c,sj_wf(t,"y",n));sj_be(v,c,sj_wf(t,"y",-n));sj_be(_w,"blur",function(){r&&Pano.StopAnimation()});o.appendChild(w)}}function ei(n,t){function i(){ou();n.hs===!1&&p&&p.disable();var t=_w.location.search.indexOf("debug=1")!=-1,i="?h="+_w.location.host,u=sb_gt();Pano.InitializePano(n.url,r,function(){eu(n);_w.hp_llog&&hp_llog("Pano",sb_gt()-u)},t,n.pos,n.maxfov,i);sj_evt.fire("onPanoComplete")}_H.startTm&&t&&_w.hp_llog&&hp_llog("PanoStart",sb_gt()-_H.startTm);typeof Pano===f?(sj_evt.bind("onPanoLoad",function(){i()}),sj_jb("HomepagePano_c"),sj_be(_w,"resize",function(){r&&typeof Pano!==f&&typeof Pano.SetViewportSize===hr&&Pano.SetViewportSize(r.offsetWidth,r.offsetHeight)})):i()}function su(){oi(k)}function oi(n){sj_evt&&sj_evt.fire(pt,n)}function hu(){var e="DHPImpression",o="data-maximpression",t=_ge("dhp"),i,r,u,n,f;if(t&&t.hasAttribute(o)&&(i=parseInt(t.getAttribute(o)),_w.localStorage&&!isNaN(i)))try{if(r=localStorage.getItem(e),u=r!=null?parseInt(r):0,u<i)localStorage.setItem(e,u+1);else return!0}catch(s){HPL_er(s,"checkDHPCookie")}return(n=sj_cook&&sj_cook.get("_UR","D"),f=sj_cook&&sj_cook.get("_UR","DHP"),n&&n!="0"&&n!="1"||f&&f!="0")?!0:!1}function cu(){var t="isHomepage",i="http://"+_d.domain+"/",r=i.replace(/www\./i,""),n=lu();return n?er(n,t,i)||er(n,t,r):0}function er(n,t,i){try{return n[t](i)}catch(r){return 0}}function lu(){var n=_ge("dhp_detect");return n||(n=sj_ce("span","dhp_detect"),n.style.behavior="url(#default#homepage)",sj_b.appendChild(n)),n}function or(){if(hu()||cu())v&&(v.style.display=a),ti&&(ti.style.display=a);else if(ct&&v&&v.style.display!=a){var n=v.offsetLeft;(!lt||lt&&lt.clientWidth<ki)&&(n-=ki);v.style.visibility=n<ct.offsetLeft+ct.clientWidth?tt:l}}var vt="pointer",yt="default",f="undefined",hr="function",l="visible",tt="hidden",cr="hp_pgps",k="focus",g="click",ci="keydown",c="mousedown",li="mouseup",it="mouseover",lr="mousewheel",ai="touchstart",pt="hpsbact",ar="div",vi="block",a="none",wt=8,yi=500,rt=0,t=0,bt=0,y=null,kt=0,n=[],ut=[],p,ft="url",pi="bot",e=_ge("bgDiv"),vr=_ge("bgDivPortrait"),i=_ge("sh_igl"),u=_ge("sh_igr"),o=_ge("sh_igw"),d=0,w=_ge("sh_cp"),et="sc_light",ot="sc_dark",wi="no_outline",st="javascript:void(0)",s=null,dt=!0,yr="ontouchstart"in _w,r=null,gt=null,nt=_ge("sb_form_q"),bi=nt&&nt.parentNode,b,ni=_anim.fadeE(e,yi),ht,ct=_ge("sc_hdu"),v=_ge("dhp"),ti=_ge("dhplink"),lt=_ge("id_h"),ki=300,pr=br();if(i&&u&&(wr(),_w.hpPanoLoad=function(n){ei(n,!0)},!_w.g_IMVL)){typeof _w.g_IMVL!==f&&(_w.g_IMVL=1);sj_evt.bind("onHPHS",function(n){p=n[1]},1);nt&&(sj_be(nt,k,su),sj_be(nt,ci,oi),bi&&sj_be(bi,g,oi));sj_evt.bind("onRBComplete",function(){var n=_w.sched;_w.g_hptse&&n&&n.schedule({ns:"H",task:function(){n.complete("H")}});gr()},1);ct&&(v||ti)&&lt&&(sj_evt.bind("dhplink",or,1),sj_be(_w,"resize",or,!1));var au=new RegExp("[\\?&]ssd=([^&#]*)"),si=au.exec(_w.location.href),sr=1,hi;si!=null&&si[1]!=null&&(hi=si[1].replace("_",""),sr=wt);di(0,sr,function(r){function f(n){sb_st(sj_wf(gi,n),1);sj_ue(i,it,f);sj_ue(u,it,f);sj_ue(i,k,f);sj_ue(u,k,f)}var e,c,a,v,h,y,p;if(r){if(t=0,hi!=null)for(dr(),e=0;e<rt;e++)n[e].fullstartdate==hi&&(t=e);else ii(0,0);b=b||s.tooltips;sj_be(i,g,ui);sj_be(u,g,ri);i.firstChild.style.visibility=l;u.firstChild.style.visibility=l;c=_ge("sh_igf");c&&(c.firstChild.style.visibility=l);a=_ge("sh_pl");v=_ge("sh_ps");at();i.firstChild.className=n[t][pi]=="1"?et:ot;hp_enable(i);n[t].pano?ei(n[t].pano,!0):n[t].vid&&(h=n[t].vid.dark,a.parentNode.className=h?"sh_pll":"sh_pld",v.parentNode.className=h?"sh_psl":"sh_psd",i.firstChild.className=h?et:ot);y=function(i){sj_pd(i);t==0&&n&&n.length==1?f(sj_wf(ui,i)):ui(i)};p=function(i){sj_pd(i);t==0&&n&&n.length==1?f(sj_wf(ri,i)):ri(i)};yr&&(sj_be(i,ai,y),sj_be(u,ai,p));sj_be(i,it,f);sj_be(u,it,f);sj_be(i,k,f);sj_be(u,k,f);o&&hpWall&&(_G.Mkt=="zh-CN"?sj_be(o,g,hpWall.dLFree):sj_be(o,g,hpWall.dL))}}),function(){var o="px",k="click",s="block",d="none",h="height",c="HPTBD",t=400,g=43,nt=35,it=1,rt=.5,a=_ge("sh_igf"),u=_ge("hp_sw_hdr"),n=u?u.style:null,v=_ge("sb_foot"),y=_ge("sb_form_q"),p=y&&y.parentNode,w=_ge("sh_fu"),i,f,e,r=!1;if(a&&v&&p){var ut=function(){i=u?_anim.animE(u,h,0,g,{duration:t,unit:o}):null;f=_anim.animE(v,h,0,nt,{duration:t,unit:o});e=_anim.fadeE(p,t,t,rt,it);sj_be(a,k,ot);sj_evt.bind(pt,b)},ft=function(){n&&(n.display=d,n.overflow=l);r=!0;sj_evt.fire(c)},et=function(){n&&(n.overflow=l);r=!1;sj_evt.fire(c)},ot=function(n){r?b():st();sj_pd(n)},st=function(){r||(n&&(n.display=s,n.overflow=tt),_w.bhptb&&bhptb.hide&&bhptb.hide(t),_w.bhppgb&&bhppgb.hide&&bhppgb.hide(t),_w.bhpnav&&bhpnav.hide&&bhpnav.hide(),i&&i.revert(ft),f.revert(),e.down(),w.className="hpcSmall")},b=function(){r&&(n&&(n.display=s,n.overflow=tt),_w.bhptb&&bhptb.show&&bhptb.show(t),_w.bhppgb&&bhppgb.show&&bhppgb.show(t),_w.bhpnav&&bhpnav.show&&bhpnav.show(),i&&i.start(et),f.start(),e.up(),w.className="hpcFull")};ut()}}()}};sj_evt.bind("onBgSet",ImgViewer,1)