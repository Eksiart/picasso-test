import{e as i,r as a,j as c,c as r}from"./index-a6ee37b5.js";const y=i.injectEndpoints({endpoints:e=>({getPostById:e.query({query:s=>({url:`/posts/${s}`,method:"GET"})}),getPosts:e.query({query:({page:s,limit:t})=>({url:"/posts",params:{_limit:t,_page:s}}),serializeQueryArgs:({endpointName:s})=>s,transformResponse(s,t){var _;return{posts:s,totalCount:Number((_=t==null?void 0:t.response)==null?void 0:_.headers.get("X-Total-Count"))}},merge:(s,t)=>{s.posts.push(...t.posts)},forceRefetch({currentArg:s,previousArg:t}){return(s==null?void 0:s.page)!==(t==null?void 0:t.page)}})})}),{useGetPostByIdQuery:C,useGetPostsQuery:D}=y,d="_PostDetails_1t2yy_1",p="_Title_1t2yy_10",m="_Body_1t2yy_19",z="_Loader_1t2yy_23",G={PostDetails:d,Title:p,Number:"_Number_1t2yy_15",Body:m,Loader:z},P="_left_o9ntf_1",u="_right_o9ntf_5",f="_center_o9ntf_9",x="_size_s_o9ntf_13",T="_size_m_o9ntf_17",L="_size_l_o9ntf_21",b="_size_xl_o9ntf_25",h="_bold_o9ntf_29",o={left:P,right:u,center:f,size_s:x,size_m:T,size_l:L,size_xl:b,bold:h},B={s:o.size_s,m:o.size_m,l:o.size_l,xl:o.size_xl},Q=a.memo(e=>{const{className:s,text:t,size:_="m",align:n="left",bold:l}=e;return c.jsx("p",{className:r(s,o[n],B[_],{[o.bold]:l}),children:t})}),j="_Post_1iua2_1",N="_PostTitle_1iua2_11",$="_PostBody_1iua2_15",R={Post:j,PostTitle:N,PostBody:$},g="_PostListWrapper_1nlrj_1",q="_Loader_1nlrj_9",W={PostListWrapper:g,Loader:q};export{Q as T,R as a,D as b,G as c,W as d,C as u};