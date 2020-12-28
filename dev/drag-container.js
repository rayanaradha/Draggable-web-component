import {LitElement, html, css} from 'lit-element';

class DragContainer extends LitElement {

  
  static get styles() {

    return css`
      :host {
        display: block;
        height :100%;
        background-color: #f0f0f0;
      }
    
    
      .board-column-header {
        position: relative;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        padding: 0 20px;
        text-align: center;
        background:#4A9FF9;
        color: #fff;
        border-radius: 5px 5px 0 0;
        font-weight: bold;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }

     .vertical-container {
      width:220px;
      }


    .horizontal-container {
      height: 100px;
      margin: 0px;
      padding: 0px;
      display: flex;
      flex-direction: row;
    }

    .horizontal-container slot {
      list-style: none;
      flex: 1;
      background-color: orange;
      border: 1px solid green;
    }

    .board-column-label{
       width: 120px;
       height: 20px;
       background:  #ADFF2F;
       font-size: 17px;
       margin-bottom:30px;
       margin-bottom:5px;
    }   
      
    `;
  }


  static get properties() {   
    return {
      headerName: { type: String },
      isVerticle: { type: String },
      tests: { type: Array },
      categories: {type: Object},
 }
    
  }  
 
  hitTest(e) {
    this.categories= e.target;
    e.dataTransfer.setData("text", e.target);
  }

  updated(changedProperties) {
    if (changedProperties.has('categories')) {
        let myEvent  = new CustomEvent('categories-changed', {
        bubbles: true, 
        composed: true, 
        detail: {
            categories:this.categories
        }
        });
        this.dispatchEvent(myEvent);  
    }
   
 }


  allowDrop(e){
    e.preventDefault();
  }

  drop(e) {    
      const dropzone = e.target;
      console.log(dropzone);
      dropzone.appendChild(this.categories);
      
  }

  
  render() {
    return html`
    <div class="drag-test" @drop=${this.drop} @dragover=${this.allowDrop}>
      <div class="board-column-header">${this.headerName}</div>

      <div class="board-column-label"> + new element </div>

      ${ (this.isVerticle=="true")? 
           html ` 
              <div class="vertical-container">
                      ${this.tests.map(item => html`
                      <drag-test-on id="${item}"  draggable="true" @dragstart=${this.hitTest} TestName="${item}"></drag-test-on>`)}
                  
              </div>`
           :html `
              <div class="horizontal-container">
                      ${this.tests.map(item => html`
                      <drag-test-on id="${item}"  draggable="true" @dragstart=${this.hitTest} TestName="${item}"></drag-test-on>`)}  
              </div>`}    
      </div>
    </div>`;
  }

}

window.customElements.define('drag-container', DragContainer);
