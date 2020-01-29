import React, { useState } from 'react'
import './App.css'
import { Layout, Menu, Breadcrumb, Switch } from 'antd'
import Home from './pages/home/components/Home'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSearchFilter } from './store/actions/products'
import Search from './pages/home/Search/Search'

function App ({ setSearchFilter }) {
  debugger
  const [headerColor, setHeaderColor] = useState('dark')

  const changeTheme = () => {
    if (headerColor === 'dark') {
      setHeaderColor('light')
    } else {
      setHeaderColor('dark')
    }
  }

  return (
    <div className="app">
      <Switch
        style={{ position: 'absolute', right: '20px' }}
        checked={headerColor === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light" />
      <Layout>

        <div>
          <div className="logo" />
          <Menu
            theme={headerColor}
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
          </Menu>
        </div>
        <Layout>

          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} />
            <div
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >

              <Search setSearchFilter={setSearchFilter} />
              <Route path="/:id?" exact render={() => <Home />} />
            </div>
          </Layout>
        </Layout>
      </Layout>,
    </div>
  )
}

export default connect(null, { setSearchFilter })(App)
