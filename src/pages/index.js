import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "cornflowerblue", fontSize: 50, fontWeight: 'bold'}}>
            Guide Front End
          </p>
          <h2>Je centralise ici tous les outils et libs front sympa que je découvre ainsi que de la docs et des tips sur les frameworks Js</h2>
          <br/>
          <Link to="/docs/get-started/tools">
            <Button type="primary" size="large" style={{marginRight: 10}}>Docs / Tuto</Button>
          </Link>
          <Button type="primary" size="large" href="https://github.com/d0ganoo">Github</Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage