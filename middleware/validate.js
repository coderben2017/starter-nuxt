// import axios from 'axios'

export default ({ route, query }) => {
  const { fullPath } = route
  if (fullPath.includes('/home')) {
    // eslint-disable-next-line
    console.log(1, query)
  } else if (fullPath.includes('/login')) {
    // eslint-disable-next-line
    console.log(2, query)
  }
}
