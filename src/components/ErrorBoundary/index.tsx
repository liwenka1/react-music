import { useRouteError } from 'react-router-dom'

interface ErrorType {
  statusText: string
  message: string
}

const ErrorBoundary: React.FC = () => {
  const error = useRouteError() as ErrorType

  return (
    <div style={{ padding: '12px' }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  )
}

export default ErrorBoundary
