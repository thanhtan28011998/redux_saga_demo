import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Page from '@/components/page'
import Container from '@/components/container'
import Button from '@/components/button'
import { actions, TYPES } from '@/store/actions'
import Table from '@/components/table'

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 20px;
  }
`
@connect((state) => ({
  commentStore: state.comment
}), {
  fetchComments: actions.fetchComments,
  updateComments: actions.updateComments
})

class Comment extends Component {
  componentDidMount() {
    const { fetchComments, commentStore } = this.props
    if (!commentStore.comments) fetchComments()
  }

  _handleDelete = (id) => {
    const { updateComments, commentStore } = this.props
    updateComments(commentStore.comments.filter((comment) => comment.id !== id))
  }

  _handleDetails = () => {

  }

  render() {
    const { comments, submitting } = this.props.commentStore
    // console.log(comments);

    const columns = [
      {
        title: 'Post ID',
        dataIndex: 'postId',
        key: 'postId'
      },
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Body',
        dataIndex: 'body',
        key: 'body'
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (record) => (
          <div style={{ display: 'flex' }}>
            {/* console.log(text, record, index) */}
            <div style={{ marginRight: '10px' }}>
                <Button type="primary" size="large" ghost onClick={this._handleDetails}>Detail</Button>
            </div>
            <div>
                <Button type="danger" size="large" ghost onClick={() => this._handleDelete(record.id)}>Delete</Button>
            </div>
          </div>
        )
      }
    ]

    return (
      <Page>
        <Container>
          <Content>
            <h1>Comments</h1>
            <Table rowKey="id" loading={submitting === TYPES.FETCH_COMMENTS_REQUEST} dataSource={comments} columns={columns} />
          </Content>
        </Container>
      </Page>
    )
  }
}
export default Comment
