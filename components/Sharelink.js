import React from "react";
import Image from 'next/image'

class Share extends React.Component {
    container = React.createRef();
    state = {
      open: false,
    };
    handleButtonClick = () => {
      this.setState((state) => {
        return {
          open: !state.open,
        };
      });
    };
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = (event) => {
        if (
          this.container.current &&
          !this.container.current.contains(event.target)
        ) {
          this.setState({
            open: false,
          });
        }
      };
render(){
    return(
    <div className="containerr" ref={this.container}>
        <button type="button" className="buttonnn" onClick={this.handleButtonClick}>
        <Image src="/blutit.png" width={20} height={20} objectFit="contain"/>
        </button>
        {this.state.open && (
        <div class="dropdown">
          <h1><b>Berbagi ke</b></h1>
        <ul>
        <table>
            <tr>
              <td><Image src="/wa.png" alt="Whatsapp"width={25} height={25} objectFit="contain"/></td>
              <td><a href="https://web.whatsapp.com/">Whatsapp</a></td>
            </tr>
            <tr>
              <td><Image src="/tele.png" alt="Telegram"width={25} height={25} objectFit="contain"/></td>
              <td><a href="https://web.telegram.org/">Telegram</a></td>
            </tr>
            <tr>
              <td><Image src="/tw.png" alt="Twitter"width={25} height={25} objectFit="contain"/></td>
              <td><a href="https://twitter.com/">Twitter</a></td>
            </tr>
            <tr>
              <td><Image src="/fb.png" alt="Facebook"width={25} height={25} objectFit="contain"/></td>
              <td><a href="https://web.facebook.com/">Facebook</a></td>
            </tr>
          </table>
        </ul>
        </div>
        )}
    </div>
    );
  }
}
export default Share;

