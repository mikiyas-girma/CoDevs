import{r as l,j as e,L as a,P as o}from"./index-CdzAe6zf.js";import{B as t}from"./button-DoYlWuKi.js";import{C as r,a as d,b as m,c as x,d as h}from"./card-B0jAPouB.js";import{I as c}from"./input-aD0iWlbi.js";import{a as j}from"./axiosInstance-CabAHzPB.js";const C=()=>{const[n,i]=l.useState([]);return l.useEffect(()=>{j.get("/projects").then(s=>{i(s.data),console.log(s.data)}).catch(s=>{console.log(s)})},[]),e.jsx(e.Fragment,{children:e.jsxs(r,{className:"min-h-screen",children:[e.jsxs(r,{className:"flex justify-around border-green-50",children:[e.jsx(a,{to:"../profile",children:e.jsx(t,{className:"m-4 border-green-700",variant:"outline",children:"My Applications"})}),e.jsx(a,{to:"../create_project",children:e.jsx(t,{className:"m-4 border-green-700",variant:"outline",children:"Create Project"})})]}),e.jsx("h2",{className:"my-7 font-serif text-xl text-center",children:"Explore Some Projects You Can Do"}),e.jsxs("div",{className:"m-auto w-96 sm:w-2/3 gap-4 flex justify-around",children:[e.jsx(c,{type:"text",placeholder:"Filter",className:"text-center mx-2"}),e.jsx(c,{type:"text",placeholder:"Search ...",className:"text-center mx-2"})]}),e.jsx("div",{className:`mx-6 my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:m-2 sm:gap-2 md:gap-4 md:mx-6 md:my-4
                                lg:grid-cols-3 flex flex-wrap`,children:n.map(s=>e.jsx("div",{className:"flex-1",children:e.jsxs(r,{className:"h-full flex flex-col",children:[e.jsxs(d,{children:[e.jsx(m,{className:"text-center",children:s.title}),e.jsx(x,{className:`text-base tracking-wider
                                                            text-current font-serif`,children:s.description})]}),e.jsx(h,{className:"mt-auto",children:e.jsx(t,{variant:"outline",asChild:!0,children:e.jsx(a,{className:"m-auto",to:`${o.PROJECT.replace(":id",s.id)}`,children:"View"})})})]})},s.id))})]})})};export{C as default};
