import { Button, Alert } from "reactstrap"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <div>
        <div>
          <Alert color="primary">
            Hello, This is a strapi and next project with Bootstrap
          </Alert>
          &nbsp; <Button color="primary">Hello from Next!</Button>
        </div>
      </div>
    </Layout>
  )
}