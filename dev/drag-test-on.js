import {LitElement, html, css} from 'lit-element';

class DragTestOnElement extends LitElement {
  static get styles() {
    return css`
        :host {
            width: 120px;
            height: 20px;
            display: block;
            margin: 40px 30px 15px 30px;
            position: relative;
            padding: 13px;
            background: #fff;
            border-radius: 4px;
            font-size: 17px;
            cursor: pointer;
        }
      
    `;
 }

 static get properties() {   
      return {
        TestName: { type: String }
      }  
  }  
  
  render() {
      return html`
          <div class="box">${this.TestName}</div>
      `;
    }
}

window.customElements.define("drag-test-on",DragTestOnElement);

