import React, { Component } from 'react'

import { forwardInnerRef } from '@/utils/high-order-functions'
import Modal from '@/components/modal'


@forwardInnerRef

class ExampleModal extends Component {
  state = {
    isOpen: false
  }

  open = () => this.setState({ isOpen: true })

  close = () => this.setState({ isOpen: false })

  render() {
    const { isOpen } = this.state

    return (
      <Modal
        title="Good morning!"
        visible={isOpen}
        onCancel={this.close}
      >
        <h2>Hello Covid-19</h2>
        <p>My fullname is Nguyen Hong Nhung</p>
        <p>Congratulations on being infected with the Covid-19 virus</p>
      </Modal>
    )
  }
}

export default ExampleModal
