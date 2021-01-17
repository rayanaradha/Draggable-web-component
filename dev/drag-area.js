import {LitElement, html, css} from 'lit-element';
import "./drag-test-on.js";
import "./drag-container.js";

class DragArea extends LitElement {
    
    static get styles() {
        return css`
            .grid-container{
                display: grid; 
                align-content: center;
                justify-content: center;
                grid-template-columns: auto auto;
                grid-gap: 15px;
                padding: 10px; 
            }

            .vertical-grid-container {
                display: grid; 
                align-content: center;
                justify-content: center;
                grid-template-columns: auto auto auto;
                grid-gap: 15px;
                padding: 10px; 
                
            }
            
            .horizontal-grid-container{
                display: grid; 
                align-content: center;
                justify-content: center;
                grid-template-rows: auto auto;
                grid-gap: 15px;
                padding: 10px; 
            }

        `;
    }

    static get properties(){
        return{
            verticalTable1Headers : { type: Array},
            horizontalTable1Headers : { type: Array},
            testInTable11 : { type: Array},
            testInTable12 : { type: Array},
            testInTable13 : { type: Array},
            testInTable14 : { type: Array},
            testInTable15 : { type: Array},
            categories: {type: Object},

        }
    }
    

    constructor(){
        super();
        this.testInTable1=[["Test1-allowed",true],["Test2-allowed",true],["Test3",false],["Test4",false]];
        this.testInTable2=[["Test5-allowed",true],["Test6-allowed",true],["Test7",false],["Test8",false]];
        this.testInTable3=[["Test9-allowed",true],["Test10-allowed",true],["Test11",false],["Test12",false]];
        this.testInTable4=[["Test13-allowed",true],["Test14",false]];
        this.testInTable5=[["Test15-allowed",true],["Test16",false]];
        this.verticalTable1Headers=[["Table 01 - vertical",this.testInTable1],["Table 02 - vertical",this.testInTable2],["Table 03 - vertical",this.testInTable3]];
        this.horizontalTable1Headers=[["Table 01 - horizontal",this.testInTable4],["Table 02 - horizontal",this.testInTable5]];
       
        
    }    

    handleCategoriesChanged(e) {
        this.categories = e.detail.categories;
    }

    render() {
        return html`
            <div class="grid-container">

                <div class="vertical-grid-container"> 
                    ${this.verticalTable1Headers.map(item => html`
                    <drag-container headerName=${item[0]} isVerticle="true" .tests=${item[1]} .categories=${this.categories}  @categories-changed="${this.handleCategoriesChanged}"></drag-container>`)}
                </div>    

                <div class="horizontal-grid-container">
                    ${this.horizontalTable1Headers.map(item => html`
                    <drag-container headerName=${item[0]} isVerticle="false" .tests=${item[1]} .categories=${this.categories}  @categories-changed="${this.handleCategoriesChanged}"></drag-container>`)}
                </div>
            
            </div> 
        `;
    }
   
}

window.customElements.define("drag-area", DragArea);

