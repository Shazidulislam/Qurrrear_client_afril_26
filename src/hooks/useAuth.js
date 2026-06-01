
// import React, { use } from 'react'
// import { AuthContext } from '../Context/AuthContext/AuthContext'

// export default function useAuth() {
//       const authInfo = use(AuthContext)
// }

import React, { use } from 'react'
import { AuthContext } from '../Context/AuthContext/AuthContext'

const useAuth = ()=>{
    const authInfo = use(AuthContext)
    return authInfo
}

export default useAuth;
