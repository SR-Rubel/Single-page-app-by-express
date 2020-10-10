import Dashboard from './views/Dashboard';
const navigateTo= url=>{
    history.pushState(null,null,url);
    router();
};

const router= async ()=>{
    const routers=[
        {path:"/",view: Dashboard},
        {path:"/posts",view:()=>{return "viewing posts"}},
        {path:"/settings",view:()=>{return "viewing settings"}},
    ]
    //test each route for potential match
    const potentialMatches=routers.map(route=>{
        return {
            route:route,
            isMatch:location.pathname=== route.path
        }
    });
    let match=potentialMatches.find(potentialMatche=>potentialMatche.isMatch);

    if(!match){
        match={
            route:routers[0],
            isMatch: true
        }
    }
    const view=new match.route.view();

    document.querySelector('#app').innerHTML=await view.getHtml();

    console.log(match.route.view());
};
window.addEventListener('popstate',router);
document.addEventListener("DOMContentLoaded",()=>{
    document.body.addEventListener('click',e=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    // router();
})