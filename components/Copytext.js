import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Button, Col, UncontrolledTooltip } from "reactstrap";
import Image from 'next/image'

class Datepicker extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Col lg="3" md="6">
          <CopyToClipboard
            text={"https:/www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=204%3A320"}
            onCopy={() => this.setState({ copiedText: "https:/www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=204%3A320" })}
          >
            <Button
              className="btn-icon-clipboard"
              id="tooltip982655500"
              type="button"
            ><Image src="/copy.png" alt="copy"width={20} height={20} objectFit="contain"/>
            </Button>
          </CopyToClipboard>
          <UncontrolledTooltip
            className="textcopy"
            delay={0}
            trigger="hover focus"
            target="tooltip982655500"
          >
            {this.state.copiedText === "dhttps:/www.figma.com/file/nXmrtlVVKFIXe9PxrzXBcm/Shorten-link?node-id=204%3A320"
              ? "Copied":'Salin'}
          </UncontrolledTooltip>
        </Col>
      </>
    );
  }
}

export default Datepicker;
