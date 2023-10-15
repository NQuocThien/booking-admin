import { gql } from '@apollo/client'
export const Login = gql`
  mutation login($input: LoginUserInput!)
{
  login(loginUserInput: $input){
    access_token
    user{
      fullname
      email
      type
      username
    }
  }
}
`