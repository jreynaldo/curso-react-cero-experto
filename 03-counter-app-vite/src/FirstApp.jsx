import PropTypes from 'prop-types'

export default function FirstApp({title}) {
  return (
    <>
    <h1>{title}</h1>
    <p>nuevo reynaldo</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string
}
