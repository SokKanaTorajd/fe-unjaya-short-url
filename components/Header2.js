import Link from 'next/link'
import Image from 'next/image'
import React from "react";

  class Header2 extends React.Component {
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
      <>
      <div className="headdash">
        <div className='navbardash'>
            <div className="header">
              <h1>Unjaya.id</h1>
            </div>
            <div className="headernya">
                <div className="akun">
                  <Image src="/Group.png" alt="akun" width={23} height={23}/>
                </div>
                <div className="dashb">
                  <h2>Wijatama Diwangkara</h2>
                </div>
                <div className="poly"  ref={this.container}>
                  <button type='button' className='buttonnn' onClick={this.handleButtonClick}>
                  <Image src="/polygon.png" alt="poly" width={25} height={8}/>
                  </button>
                </div>
            </div>
        </div>
      </div>
      {this.state.open &&(
      <div className="userbin" id='userbin'>
          <p>
          <Image src="/dasbor.png"alt="akun" width={16} height={16} padding-right={10} />
            <Link href='/dashboard'>
                <a className="btn-dashboard">  Dasboard</a> 
            </Link>
          </p>

          <p>
            <Image src="/pengaturan.png"alt="akun" width={16} height={16} padding-right={10} />
            <Link href='/setting'>
                <a className="btn-setting">  Pengaturan</a> 
            </Link>
          </p>
          <p>
          <Image src="/out.png"alt="akun" width={14} height={14} padding-right={10} />
          <Link href='/index'>
              <a>  Keluar</a>
          </Link>
          </p>
      </div>
      )}
  </>  
  );}
}

export default Header2;