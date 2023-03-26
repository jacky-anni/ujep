"use strict";(self.webpackChunkujep=self.webpackChunkujep||[]).push([[831],{1831:function(e,i,n){n.r(i),n.d(i,{EditStudents:function(){return _}});var s=n(2917),l=(n(2791),n(7689)),r=n(4729),a=n(9375),o=n(5699),t=n(1461),d=n(4277),c=n(1413),u=n(4165),m=n(5861),v=n(3975),p=n(1134),h=n(2879),x=n(9471),j=n(6403),g=n(3418),f=n(4570),b=n(5039),N=n(184),Z=function(e){var i,n,a,o,t,Z,_,C,S,A,E,w,q,y,B,L,k,F,M,O,D=e.student,U=(0,p.cI)({resolver:(0,h.X)(x.Z),defaultValues:{nom:null===D||void 0===D?void 0:D.person.nom,prenom:null===D||void 0===D?void 0:D.person.prenom,sexe:null===D||void 0===D?void 0:D.person.sexe,email:null===D||void 0===D?void 0:D.person.email,telephone:null===D||void 0===D?void 0:D.person.telephone,date_naissance:null===D||void 0===D?void 0:D.person.date_naissance,lieu_naissance:null===D||void 0===D?void 0:D.lieu_naissance,groupe_sanguin:(null===D||void 0===D?void 0:D.groupe_sanguin.charAt(0).toUpperCase())+(null===D||void 0===D?void 0:D.groupe_sanguin.slice(1)),statut_matrimonial:(null===D||void 0===D?void 0:D.statut_matrimonial.charAt(0).toUpperCase())+(null===D||void 0===D?void 0:D.statut_matrimonial.slice(1)),nif:null===D||void 0===D?void 0:D.nif,cin:null===D||void 0===D?void 0:D.cin}}),X=U.register,z=U.handleSubmit,R=U.reset,I=U.formState.errors,Q=(0,l.s0)(),T=(0,j.NL)(),V=(0,s.a)([d.Xn],(function(){return(0,r.RR)()})).data,Y=(0,g.D)(function(){var e=(0,m.Z)((0,u.Z)().mark((function e(i){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.Ov)(D.person.uuid,i);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}(),{onMutate:function(e){return T.setQueryData([d.Xn],(function(){return V.data.map((function(i){return i.id===e.id?e:i}))}))},onSuccess:function(e){(0,f.F)("success","Etudiant modifi\xe9 avec succ\xe8s"),T.invalidateQueries([d.Xn]),Q("/dashbord/profile-students/".concat(e.person.uuid))}}),G=Y.isLoading,K=Y.mutate,P=(Y.error,Y.isError);return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("form",{onSubmit:z((function(e){K(e)})),children:[P&&(0,N.jsx)(b.Z,{variant:"filled",severity:"error",className:"mb-3"}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsxs)("div",{className:"col-md-6 position-relative mb-2",children:[(0,N.jsx)("label",{children:"Entrer le nom"}),(0,N.jsx)("input",(0,c.Z)((0,c.Z)({},X("nom")),{},{className:"form-control ",placeholder:"Anizaire"})),(0,N.jsx)("span",{className:"errors-field",children:null===(i=I.nom)||void 0===i||null===(n=i.message)||void 0===n?void 0:n.toString()})]}),(0,N.jsxs)("div",{className:"col-md-6 position-relative mb-2",children:[(0,N.jsx)("label",{children:"Entrer le prenom"}),(0,N.jsx)("input",(0,c.Z)((0,c.Z)({},X("prenom")),{},{className:"form-control ",placeholder:"Anizaire"})),(0,N.jsx)("span",{className:"errors-field",children:null===(a=I.prenom)||void 0===a||null===(o=a.message)||void 0===o?void 0:o.toString()})]})]}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsxs)("div",{className:"col-md-6 position-relative mb-2",children:[(0,N.jsx)("label",{children:"Entrer le sexe"}),(0,N.jsxs)("select",(0,c.Z)((0,c.Z)({className:"form-control"},X("sexe")),{},{children:[(0,N.jsx)("option",{value:"",children:"Choisir une option"}),(0,N.jsx)("option",{value:"masculin",children:"Masculin"}),(0,N.jsx)("option",{value:"feminin",children:"Feminin"})]})),(0,N.jsx)("span",{className:"errors-field",children:null===(t=I.sexe)||void 0===t||null===(Z=t.message)||void 0===Z?void 0:Z.toString()})]}),(0,N.jsxs)("div",{className:"col-md-6 position-relative mb-2",children:[(0,N.jsx)("label",{children:"Entrer l'email"}),(0,N.jsx)("input",(0,c.Z)((0,c.Z)({},X("email")),{},{className:"form-control ",placeholder:"anizairejacky@gmail.com"})),(0,N.jsx)("span",{className:"errors-field",children:null===(_=I.email)||void 0===_||null===(C=_.message)||void 0===C?void 0:C.toString()})]})]}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsxs)("div",{className:"col-md-6 position-relative mb-2",children:[(0,N.jsx)("label",{children:"Entrer le telephone"}),(0,N.jsx)("input",(0,c.Z)((0,c.Z)({className:"form-control "},X("telephone")),{},{placeholder:"+509 3454 34 32"})),(0,N.jsx)("span",{className:"errors-field",children:null===(S=I.telephone)||void 0===S||null===(A=S.message)||void 0===A?void 0:A.toString()})]}),(0,N.jsxs)("div",{className:"col-md-6 position-relative mb-2",children:[(0,N.jsx)("label",{children:"Entrer la date de naissance"}),(0,N.jsx)("input",(0,c.Z)((0,c.Z)({className:"form-control "},X("date_naissance")),{},{placeholder:"",type:"date"})),(0,N.jsx)("span",{className:"errors-field",children:null===(E=I.date_naissance)||void 0===E||null===(w=E.message)||void 0===w?void 0:w.toString()})]})]}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsxs)("div",{className:"col-md-6 position-relative mb-2",children:[(0,N.jsx)("label",{children:"Lieu de naissance"}),(0,N.jsx)("input",(0,c.Z)((0,c.Z)({className:"form-control "},X("lieu_naissance")),{},{placeholder:"Port-Margot"})),(0,N.jsx)("span",{className:"errors-field",children:null===(q=I.lieu_naissance)||void 0===q||null===(y=q.message)||void 0===y?void 0:y.toString()})]}),(0,N.jsxs)("div",{className:"col-md-6 position-relative mb-2",children:[(0,N.jsx)("label",{children:"Groupe sanguin"}),(0,N.jsxs)("select",(0,c.Z)((0,c.Z)({className:"form-control"},X("groupe_sanguin")),{},{children:[(0,N.jsx)("option",{value:"",children:"Choisir une option"}),(0,N.jsx)("option",{value:"O+",children:"O+"}),(0,N.jsx)("option",{value:"O-",children:"O-"}),(0,N.jsx)("option",{value:"A+",children:"A+"}),(0,N.jsx)("option",{value:"A-",children:"A-"}),(0,N.jsx)("option",{value:"B+",children:"B++"}),(0,N.jsx)("option",{value:"B-",children:"B-"}),(0,N.jsx)("option",{value:"AB+",children:"AB+"}),(0,N.jsx)("option",{value:"AB-",children:"AB-"})]})),(0,N.jsx)("span",{className:"errors-field",children:null===(B=I.groupe_sanguin)||void 0===B||null===(L=B.message)||void 0===L?void 0:L.toString()})]})]}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsxs)("div",{className:"col-md-6 position-relative mb-2",children:[(0,N.jsx)("label",{children:"Etat Matrimonial"}),(0,N.jsxs)("select",(0,c.Z)((0,c.Z)({className:"form-control"},X("statut_matrimonial")),{},{children:[(0,N.jsx)("option",{value:"",children:"Choisir une option"}),(0,N.jsx)("option",{value:"C\xe9libataire",children:"C\xe9libataire"}),(0,N.jsx)("option",{value:"Mari\xe9 (e)",children:"Mari\xe9 (e)"}),(0,N.jsx)("option",{value:"Divoc\xe9 (e)",children:"Divoc\xe9 (e)"}),(0,N.jsx)("option",{value:"Union Libre",children:"Union Libre"})]})),(0,N.jsx)("span",{className:"errors-field",children:null===(k=I.statut_matrimonial)||void 0===k||null===(F=k.message)||void 0===F?void 0:F.toString()})]}),(0,N.jsxs)("div",{className:"col-md-6 position-relative mb-2",children:[(0,N.jsx)("label",{children:"Entrer le NIF"}),(0,N.jsx)("input",(0,c.Z)((0,c.Z)({className:"form-control "},X("nif")),{},{placeholder:"+9494-939-0"})),(0,N.jsx)("input",(0,c.Z)({type:"hidden",value:"233232-323",className:"form-control "},X("cin"))),(0,N.jsx)("span",{className:"errors-field",children:null===(M=I.nif)||void 0===M||null===(O=M.message)||void 0===O?void 0:O.toString()})]})]}),(0,N.jsx)(v.Z,{message:"Soumettre",loading:G}),(0,N.jsx)("button",{onClick:function(){return R()},className:"btn btn-danger",style:{fontWeight:"bold",marginLeft:"6px"},children:"Annuler"})]})})},_=function(){var e=(0,l.UO)().student,i=(0,s.a)([d.Xn,e],(function(){return(0,r.h$)(e)}),{cacheTime:0}),n=i.data,c=i.isLoading,u=i.isError,m=i.error;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(o.d,{title:"Modifier un (e) \xe9tudiant (e)",img:"users"}),(0,N.jsx)("div",{className:"bg-white",children:(0,N.jsx)("div",{className:"col-md-12 p-2",children:c?(0,N.jsx)(t.h,{}):u?(0,N.jsx)(a.K,{message:m.response.data.message}):(0,N.jsx)(Z,{student:n})})})]})}},9471:function(e,i,n){var s=n(1724),l=new Date;l.setFullYear(l.getFullYear()-18);var r=s.Ry().shape({nom:s.Z_().required("Ce champ est obligatoire !"),prenom:s.Z_().required("Ce champ est obligatoire !"),sexe:s.Z_().required("Ce champ est obligatoire !"),email:s.Z_().email("L'email est invalide").required("Ce champ est obligatoire !"),telephone:s.Z_().required("Ce champ est obligatoire !"),date_naissance:s.hT().typeError("Cette date est invalide").required("Cette date n'est pas valide!").max(l,"Vous devez avoir au moins 18 ans"),lieu_naissance:s.Z_().required("Ce champ est obligatoire !"),groupe_sanguin:s.Z_().required("Ce champ est obligatoire !"),statut_matrimonial:s.Z_().required("Ce champ est obligatoire !"),nif:s.Z_().required("Ce champ est obligatoire !")});i.Z=r}}]);
//# sourceMappingURL=831.26611c18.chunk.js.map