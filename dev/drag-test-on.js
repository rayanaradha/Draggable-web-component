import {LitElement, html, css} from 'lit-element';

class DragTestOnElement extends LitElement {
  static get styles() {
    return css`
        :host {
            width: 180px;
            height: 80px;
            display: block;
            margin: 10px 20px;
            position: relative;
            padding: 13px;
            background: #fff;
            border-radius: 4px;
            font-size: 15px;
            cursor: pointer;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 70% 30%;
          grid-gap: 5px;
        
        }  

        input[type=text], select {
            width: 100%;
            padding: 10px 8px;
            margin: 4px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        input[type=submit] {
          width: 100%;
          background-color: #4CAF50;
          color: white;
          padding: 10px 16px;
          margin: 4px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        input[type=submit]:hover {
          background-color: #45a049;
        }

        .draggable-part{
        background-color:#F5F5F5;
        }
      
    `;
 }

 static get properties() {   
      return {
        TestName: { type: String },
        containerName: { type: String },
        isAllowdToDrag: { type: Boolean }
      }  
  }  


  
  render() {
      return html`
          <div class="grid-container">
              <div class="input-group">
                  <input type="text" id="input" placeholder="${this.TestName} ">  
                  <input type="submit" value="Submit">
              </div>
          <div class="draggable-part"></div>
          </div>
        
      `;
    }
}

window.customElements.define("drag-test-on",DragTestOnElement);

