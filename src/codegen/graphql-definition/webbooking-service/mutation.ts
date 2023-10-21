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
export const UpdateUserById = gql`
  mutation UdateUserByID($input: UpdateUserInput!)
  {
    updateUser(updateUserInput: $input){
      id
    }
  }
`
export const UpdateUserByIdWithPass = gql`
  mutation UpdateUserByIdWithPass($input: UpdateUserWithPassInput!)
{
  updateUserWithPass(updateUserInput: $input){
    id
  }
}
`