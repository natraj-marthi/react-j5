import React from "react";
import Player from "../player/Player";
import { getPlayer } from "../../services";
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";
import UpdatePlayer from '../update-player/UpdatePlayer';

export default class ViewPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
      modal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  componentDidMount() {
    getPlayer(this.props.match.params.id).then((res) => {
      this.setState({
        player: res.data.player,
      });
    });
  }
  render() {
    return (
      <Container fluid className="margin-top">
        <Player modal={this.toggleModal} view player={this.state.player} />
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader>Update Player</ModalHeader>
          <ModalBody>
           <UpdatePlayer/>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}
