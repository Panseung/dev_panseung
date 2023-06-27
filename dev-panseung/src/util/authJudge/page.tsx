'use client'

import _ from "lodash"
import { useDispatch } from "react-redux"
import { changeAccessRight, changeLogin } from "../store"
import { useSession } from "next-auth/react"

export default function AuthJudge() {
  const dispatch = useDispatch()
  const session :object = useSession()
  const data :object = _.get( session, 'data' ) || {}
  const user :object = _.get( data, 'user' ) || {}
  const email :string = _.get( user, 'email' ) || ''

  // 로그인 판단
  const isLogin :boolean = _.isNull(_.get(session, 'data')) ? false : true
  dispatch(changeLogin( isLogin ))
  // 매니저 판단
  const isManager :boolean = email == 'jodie9596@gmail.com' ? true : false
  dispatch(changeAccessRight( isManager ))

  return (
    <>
    </>
  )

}