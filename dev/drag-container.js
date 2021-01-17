import {LitElement, html, css} from 'lit-element';

class DragContainer extends LitElement {

  
  static get styles() {

    return css`
     :host,.drag-test{
        display: block;
        height :100%;
        background-color: #f0f0f0;
       ;
      }
    
    
      .board-column-header {
        position: relative;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        text-align: center;
        background:#4A9FF9;
        color: #fff;
        border-radius: 5px 5px 0 0;
        font-weight: bold;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }

     .vertical-container {
      height :100%;
      margin: 0px;
      padding: 0px;
      display: flex;
      flex-direction: column;
     
      }


    .horizontal-container {
      height: 100px;
      margin: 0px;
      padding: 0px;
      display: flex;
      flex-direction: row;
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
      endContainer:  { type: String },
      startContainer: { type: String },
    }
    
  }  
 
  
  static get properties() {   
    return {
      headerName: { type: String },
      isVerticle: { type: String },
      tests: { type: Array },
      categories: {type: Object},
 }
    
  }  
 
  updated(changedProperties) {
    if (changedProperties.has('categories')) {
        let myEvent  = new CustomEvent('categories-changed', {
        bubbles: true, 
        composed: true, 
        detail: {
            categories:this.categories,
        }
        });
        this.dispatchEvent(myEvent);  
    }
   
 }

  allowDrop(e){
    e.preventDefault();
  }

  hitTest(e) {
    this.categories= e.target;
    e.dataTransfer.setData("text", e.target);
  }

  canDrag() {
    return this.categories.isAllowdToDrag;
  }

  dragLeave(e){
   
    let dragLeaveArea=e.target;
    
    if(dragLeaveArea.tagName!="DRAG-TEST-ON"){
      dragLeaveArea.style.backgroundColor= "#f0f0f0";
    }  

  }
  
  dragEnter(e) {
  
    if(e.target.tagName=="DRAG-TEST-ON"){
        this.endContainer=e.target.getAttribute("containerName");
    }
    else{
        this.endContainer=(e.target.getAttribute("id"));
    }
     
    if(this.canDrag()){
        this.shadowRoot.getElementById(this.endContainer).style.backgroundColor = "#ADFF2F"; 
    }
  
  }

  inTheContainer() {
    console.log("RAyan");
  }

  drop(e) {  

    let dropzone = e.target;
    this.startContainer=this.categories.getAttribute("containername");
  
    if(dropzone.tagName=="DRAG-TEST-ON"){
          this.endContainer=dropzone.getAttribute("containerName");
          dropzone= this.shadowRoot.getElementById(this.endContainer);
    }
    else{
          this.endContainer=(dropzone.getAttribute("id"));
    }

    if(this.endContainer==this.startContainer){
          this.inTheContainer();
    }
    else{
        if(this.canDrag()){
           dropzone.appendChild(this.categories);
           this.categories.setAttribute("containerName", this.endContainer);
        } 
        else{
           alert("Not allowed to change");
       }
    }

  }
  
  render() {
   
    return html`
    <div class="drag-test">
      <div class="board-column-header" containerName=${this.headerName}>${this.headerName}</div>

      ${ (this.isVerticle=="true")? 
           html ` 
              <div class="vertical-container" id=${this.headerName} @drop=${this.drop} @dragover=${this.allowDrop} @dragenter=${this.dragEnter} @dragleave=${this.dragLeave}>
                      ${this.tests.map(item => html`
                      <drag-test-on  draggable="true" @dragstart=${this.hitTest}  containerName=${this.headerName} testName="${item[0]}" ?isAllowdToDrag=${item[1]}></drag-test-on>`)}
                  
              </div>`
           :html `
              <div class="horizontal-container" id=${this.headerName} @drop=${this.drop} @dragover=${this.allowDrop} @dragenter=${this.dragEnter} @dragleave=${this.dragLeave} >
                      ${this.tests.map(item => html`
                      <drag-test-on  draggable="true" @dragstart=${this.hitTest}  containerName=${this.headerName} testName="${item[0]}" ?isAllowdToDrag=${item[1]} ></drag-test-on>`)}  
              </div>`}    
      </div>
    </div>`;
  }

}

window.customElements.define('drag-container', DragContainer);
