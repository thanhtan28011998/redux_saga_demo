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
  postStore: state.post
}), {
  fetchPosts: actions.fetchPosts,
  updatePosts: actions.updatePosts
})

class Post extends Component {
  componentDidMount() {
    const { fetchPosts, postStore } = this.props
    if (!postStore.posts) fetchPosts()
  }

  _handleDelete = (id) => {
    const { updatePosts, postStore } = this.props
    updatePosts(postStore.posts.filter((post) => post.id !== id))
  }

  render() {
    const { posts, submitting } = this.props.postStore

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
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
            <h1>Posts</h1>
            <Table rowKey="id" loading={submitting === TYPES.FETCH_POSTS_REQUEST} dataSource={posts} columns={columns} />
          </Content>
        </Container>
      </Page>
    )
  }
}
export default Post
