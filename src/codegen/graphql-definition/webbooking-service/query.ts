
import { gql } from '@apollo/client'
export const CheckLoginQuery = gql`
  query CheckLoginQuery 
{
  checklogin{
    id
    linkImage{
      filename
      type
      url
    }
    fullname
    email
    username
    password
    type
    roles
  }
}
`
const getSettingQuery = gql`
query getSetting {
  getSetting {
    defaultLang
  }
}`;