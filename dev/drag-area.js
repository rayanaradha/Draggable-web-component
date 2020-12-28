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
        this.testInTable1=["Test1","Test2","Test3","Test4"];
        this.testInTable2=["Test5","Test6","Test7","Test8"];
        this.testInTable3=["Test9","Test10","Test11","Test12"];
        this.testInTable4=["Test13","Test14"];
        this.testInTable5=["Test15","Test16"];
        
    }    

    handleCategoriesChanged(e) {
        this.categories = e.detail.categories;
    
    }

    render() {
        return html`
            <div class="grid-container">

                <div class="vertical-grid-container">
                    <drag-container headerName="Table 01 - vertical" isVerticle="true" .tests="${this.testInTable1}" .categories=${this.categories}  @categories-changed="${this.handleCategoriesChanged}"></drag-container>
                    <drag-container headerName="Table 02 - vertical" isVerticle="true" .tests="${this.testInTable2}" .categories=${this.categories}  @categories-changed="${this.handleCategoriesChanged}"></drag-container>
                    <drag-container headerName="Table 03 - vertical" isVerticle="true" .tests="${this.testInTable3}" .categories=${this.categories}  @categories-changed="${this.handleCategoriesChanged}"></drag-container>       
                </div>    

                <div class="horizontal-grid-container">
                    <drag-container headerName="Table 04 - horizontal" isVerticle="false" .tests="${this.testInTable4}" .categories=${this.categories}  @categories-changed="${this.handleCategoriesChanged}"></drag-container>
                    <drag-container headerName="Table 05 - horizontal" isVerticle="false" .tests="${this.testInTable5}" .categories=${this.categories}  @categories-changed="${this.handleCategoriesChanged}"></drag-container>
                </div>
            
            </div> 
        `;
    }
   
}

window.customElements.define("drag-area", DragArea);


