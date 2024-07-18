import{r as l,j as e,g as d,x as se,a5 as w,k as te,O as re,z as C,a6 as oe,C as le,F as ne,a7 as ie,T as ce,D as de,h as R,i as pe,R as me,a8 as _,$ as xe,X as v,m as ue,u as fe,a as f,o as A,p as ge,B as he,a9 as je,aa as ve}from"./index-DoiHr3Gj.js";import{C as D}from"./card-83DJ-H_t.js";import{S as y}from"./separator-C7a22vZM.js";const Ne="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-gray-600 rounded-full animate-spin",S=l.forwardRef((s,a)=>{const{className:t,...o}=s;return e.jsx("div",{ref:a,className:d(Ne,t),...o})});S.displayName="LoadingSpinner";var P="AlertDialog",[Ae,Fe]=se(P,[w]),p=w(),E=s=>{const{__scopeAlertDialog:a,...t}=s,o=p(a);return e.jsx(me,{...o,...t,modal:!0})};E.displayName=P;var De="AlertDialogTrigger",O=l.forwardRef((s,a)=>{const{__scopeAlertDialog:t,...o}=s,n=p(t);return e.jsx(te,{...n,...o,ref:a})});O.displayName=De;var ye="AlertDialogPortal",T=s=>{const{__scopeAlertDialog:a,...t}=s,o=p(a);return e.jsx(pe,{...o,...t})};T.displayName=ye;var we="AlertDialogOverlay",b=l.forwardRef((s,a)=>{const{__scopeAlertDialog:t,...o}=s,n=p(t);return e.jsx(re,{...n,...o,ref:a})});b.displayName=we;var h="AlertDialogContent",[Ce,Re]=Ae(h),$=l.forwardRef((s,a)=>{const{__scopeAlertDialog:t,children:o,...n}=s,i=p(t),m=l.useRef(null),g=C(a,m),x=l.useRef(null);return e.jsx(oe,{contentName:h,titleName:I,docsSlug:"alert-dialog",children:e.jsx(Ce,{scope:t,cancelRef:x,children:e.jsxs(le,{role:"alertdialog",...i,...n,ref:g,onOpenAutoFocus:ne(n.onOpenAutoFocus,c=>{var r;c.preventDefault(),(r=x.current)==null||r.focus({preventScroll:!0})}),onPointerDownOutside:c=>c.preventDefault(),onInteractOutside:c=>c.preventDefault(),children:[e.jsx(ie,{children:o}),e.jsx(Se,{contentRef:m})]})})})});$.displayName=h;var I="AlertDialogTitle",k=l.forwardRef((s,a)=>{const{__scopeAlertDialog:t,...o}=s,n=p(t);return e.jsx(ce,{...n,...o,ref:a})});k.displayName=I;var M="AlertDialogDescription",F=l.forwardRef((s,a)=>{const{__scopeAlertDialog:t,...o}=s,n=p(t);return e.jsx(de,{...n,...o,ref:a})});F.displayName=M;var _e="AlertDialogAction",z=l.forwardRef((s,a)=>{const{__scopeAlertDialog:t,...o}=s,n=p(t);return e.jsx(R,{...n,...o,ref:a})});z.displayName=_e;var L="AlertDialogCancel",q=l.forwardRef((s,a)=>{const{__scopeAlertDialog:t,...o}=s,{cancelRef:n}=Re(L,t),i=p(t),m=C(a,n);return e.jsx(R,{...i,...o,ref:m})});q.displayName=L;var Se=({contentRef:s})=>{const a=`\`${h}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${h}\` by passing a \`${M}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${h}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{var o;document.getElementById((o=s.current)==null?void 0:o.getAttribute("aria-describedby"))||console.warn(a)},[a,s]),null},Pe=E,Ee=O,Oe=T,V=b,B=$,G=z,H=q,W=k,Y=F;const Te=Pe,be=Ee,$e=Oe,X=l.forwardRef(({className:s,...a},t)=>e.jsx(V,{className:d("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...a,ref:t}));X.displayName=V.displayName;const J=l.forwardRef(({className:s,...a},t)=>e.jsxs($e,{children:[e.jsx(X,{}),e.jsx(B,{ref:t,className:d("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...a})]}));J.displayName=B.displayName;const K=({className:s,...a})=>e.jsx("div",{className:d("flex flex-col space-y-2 text-center sm:text-left",s),...a});K.displayName="AlertDialogHeader";const Q=({className:s,...a})=>e.jsx("div",{className:d("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",s),...a});Q.displayName="AlertDialogFooter";const U=l.forwardRef(({className:s,...a},t)=>e.jsx(W,{ref:t,className:d("text-lg font-semibold",s),...a}));U.displayName=W.displayName;const Z=l.forwardRef(({className:s,...a},t)=>e.jsx(Y,{ref:t,className:d("text-sm text-muted-foreground",s),...a}));Z.displayName=Y.displayName;const ee=l.forwardRef(({className:s,...a},t)=>e.jsx(G,{ref:t,className:d(_(),s),...a}));ee.displayName=G.displayName;const ae=l.forwardRef(({className:s,...a},t)=>e.jsx(H,{ref:t,className:d(_({variant:"outline"}),"mt-2 sm:mt-0",s),...a}));ae.displayName=H.displayName;const j=({iconType:s,message:a,value:t,onConfirm:o})=>{const[n,i]=l.useState(!1),[m,g]=l.useState(null),x=u=>{g(u),i(!0)},c=()=>{o(m),i(!1)},r=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[s==="check"?e.jsx(xe,{size:24,className:"cursor-pointer mx-2 text-green-500 hover:text-green-700",onClick:()=>x(t)}):e.jsx(v,{size:24,className:" mx-2 text-red-500 hover:text-red-700",onClick:()=>x(t)}),e.jsxs(Te,{open:n,onOpenChange:i,children:[e.jsx(be,{}),e.jsxs(J,{children:[e.jsx(K,{children:e.jsx(U,{children:"Confirmation"})}),e.jsx(Z,{children:a}),e.jsxs(Q,{children:[e.jsx(ae,{onClick:r,children:"Cancel"}),e.jsx(ee,{onClick:c,children:"Confirm"})]})]})]})]})},ze=()=>{const{id:s}=ue(),a=fe();f(r=>r.user.loggeduser);const t=f(r=>r.projects.currentProject),o=f(r=>r.team.team),n=f(r=>r.team.team_status);f(r=>r.team.team_error),f(r=>r.projects.creator);const i=f(r=>r.projects.status),m=f(r=>r.projects.error),g=o.some(r=>r.status=="pending"&&r.role!=="Owner"),x=o.some(r=>r.status=="approved"&&r.role!=="Owner");if(l.useEffect(()=>{a(A(s)),(!t||t.id!==s)&&(console.log("heyy"),a(ge(s)))},[s,t,a]),l.useEffect(()=>{n==="idle"&&a(A(s))},[n,a,s]),i=="loading")return e.jsx("div",{children:"Loading..."});if(i=="failed")return e.jsx("div",{children:m});if(!t)return e.jsx("div",{children:e.jsx(S,{className:"m-auto"})});const c=r=>{const u=r[0],N=r[1];N==="approved"?a(je(u)):N==="rejected"&&a(ve(u))};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"sm:w-full ",children:e.jsx(D,{className:"min-h-screen m-auto text-center",children:e.jsx("div",{className:" ",children:e.jsxs("div",{className:"m-auto sm:w-3/4 lg:w-3/4 lg:p-12 rounded-lg",children:[e.jsxs(D,{className:"m-2 p-4 md:p-2",children:[e.jsx("div",{className:"p-2 text-[#03C04A] ",children:e.jsx("p",{className:"md:text-xl text-center",children:t.title})}),e.jsx("div",{children:e.jsx("p",{className:"font-serif p-2 md:px-4 text-left m-auto lg:w-2/3",children:t.description})}),e.jsxs("div",{className:"lg:w-2/3 m-auto",children:[x||g?e.jsx("div",{className:"font-bold m-2",children:e.jsx("p",{className:"m-2",children:"Applicants "})}):e.jsx("div",{className:"font-bold m-2",children:e.jsx("p",{className:"m-2",children:"No applicants"})}),e.jsxs("div",{className:"flex flex-col",children:[g&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"font-bold text-yellow-400 p-2",children:"Pending requests"}),o.map((r,u)=>e.jsx("div",{className:"flex",children:r.status=="pending"&&r.role!=="Owner"&&e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:" w-full text-left",children:r.user.name}),e.jsx("p",{className:" w-full text-left",children:r.role}),e.jsx("p",{className:" text-yellow-500 w-full text-left",children:r.status}),e.jsx("div",{className:"m-0",children:e.jsx(j,{iconType:"check",message:"Are you sure you want to approve this applicant?",onConfirm:c,value:[r.id,"approved"]})}),e.jsx("div",{className:"m-0",children:e.jsx(j,{iconType:v,message:`Are you sure you want to reject this applicant?
                                                                                     this will remove the applicant from the team permanently`,onConfirm:c,value:[r.id,"rejected"]})})]}),e.jsx(y,{className:"mb-2"})]})},u))]}),x&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-2 font-bold text-green-400",children:"Approved requests"}),o.map((r,u)=>e.jsx("div",{className:"flex",children:r.status=="approved"&&r.role!=="Owner"&&e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex m-2",children:[e.jsx("p",{className:" w-full text-left",children:r.user.name}),e.jsx("p",{className:" w-full text-left",children:r.role}),e.jsx("p",{className:" text-green-400 w-full text-left",children:r.status}),e.jsx("div",{children:e.jsx(j,{iconType:v,message:`Are you sure you want to remove this member from the team?
                                                                                     this will remove the member from the team permanently`,className:" mx-2 text-red-500 hover:text-red-700",onConfirm:c,value:[r.id,"rejected"]})})]}),e.jsx(y,{})]})},u))]})]})]})]}),e.jsx("div",{className:"m-2 p-4",children:e.jsx("div",{children:e.jsx(he,{variant:"destructive",children:"Close Project"})})})]})})})})})};export{ze as default};
