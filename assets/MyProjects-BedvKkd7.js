import{r as l,j as e,B as a}from"./index-BqvpldWu.js";import"./label-DWwmHaIg.js";import"./textarea-CPXT2lrG.js";import{C as i,d}from"./card-DW3MVjFh.js";import{S as p}from"./separator-fFHkNccp.js";const b=()=>{const[o,h]=l.useState([{title:"Project Title",description:"This is the description of project. The Construction and Machinery Material Management System (CMMS) is a web-based application."},{title:"Project Title",description:"This is the description of project. The Construction and Machinery Material Management System (CMMS) is a web-based application."},{title:"Project Title",description:"This is the description of project. The Construction and Machinery Material Management System (CMMS) is a web-based application."}]),[r,m]=l.useState([{name:"Mikiyas Girma",status:"pending"}]),c=(t,s)=>{const n=[...r];n[t].status=s,m(n)};return e.jsx("div",{className:"m-auto w-96 sm:w-full",children:e.jsxs(i,{className:"min-h-96 flex flex-col sm:flex-row sm:m-4",children:[e.jsx("div",{className:"flex-1",children:o.map((t,s)=>e.jsxs(i,{className:"m-4 p-2",children:[e.jsx("div",{children:e.jsx("p",{children:t.title})}),e.jsx("div",{children:e.jsx("p",{className:"font-serif",children:t.description})}),e.jsx(a,{className:"mt-2",variant:"outline",children:" See Team Members "})]},s))}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-center w-full font-bold",children:"Team Members"}),e.jsx(i,{className:"m-4 p-2",children:e.jsx(d,{className:"text-left p-4",children:r.map((t,s)=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex",children:[e.jsx("p",{className:"p-2 m-2 w-full",children:t.name}),e.jsx(a,{className:"px-2 m-2",onClick:()=>c(s,"approved"),children:"Approve"}),e.jsx(a,{className:"px-2 m-2 bg-red-500",onClick:()=>c(s,"rejected"),children:"Reject"})]}),e.jsx(p,{})]},s))})})]})]})})};export{b as default};
