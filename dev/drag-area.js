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
            testInTable11 : { type: Object},
            testInTable12 : { type: Object},
            testInTable13 : { type: Object},
            testInTable14 : { type: Object},
            testInTable15 : { type: Array},
            categories: {type: Object},

        }
    }
    

    constructor(){
        super();
        this.testInTable1=[["Test1-allowed","true"],["Test2-allowed","true"],["Test3","false"],["Test4","false"]];
        this.testInTable2=[["Test4-allowed","true"],["Test5-allowed","true"],["Test6","false"],["Test7","false"]];
        this.testInTable3=[["Test1-allowed","true"],["Test2-allowed","true"],["Test3","false"],["Test8","false"]];
        this.testInTable4=[["Test9-allowed","true"],["Test10","false"]];
        this.testInTable5=[["Test11-allowed","true"],["Test12","false"]];
        
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


