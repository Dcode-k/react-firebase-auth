import React,{useRef} from 'react'
import { Form, Button, Card,Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link,useNavigate} from 'react-router-dom'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const { login} = useAuth()
    const navigate = useNavigate()

    const handleSubmit =async (e) => {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch (error) { 
            setError("Error signing up")
        }
        setLoading(false)
    }
  return (
      <>
          <Card>
              <Card.Body>
                  <Card.Title>Login</Card.Title>
                  {/* { currentUser.email} */}
                  {error && <Alert varient="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                          <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
                        </Form.Group>
                      <Form.Group id="password">
                          <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter email" ref={passwordRef} required/>
                        </Form.Group>
                      <Button className='w-100' disabled={loading} type='submit'>Login</Button>
                  </Form>
                  <div className='w-100 text-center mt-2'>
                      <Link to="/forgot-password">Forgot Password ?</Link>
                   </div>
              </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
             Need an account? <Link to="/signup">Sign Up</Link>
          </div>
      </>
  )
}

export default Login