import AbstractView from "./AbstractView";

export default class extends AbstractView{
    constructor(){
        this.setTitle("Dashboard");
    }
    async getHtml(){
        return `
        <h1>hello this is admin panel</h1>
        <p>this my first single page aplicaton</p>
        
        `
    }
}