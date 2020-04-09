import {useEffect , useState } from 'react'

const useHttp = (axios) => {
    
    const [error , setError ] = useState(null)

        
    const reqInterceptor = axios.interceptors.request.use( req => {
            setError(null)
            return req;
        } );
    const resInterceptor = axios.interceptors.response.use( res => res, err => {
            setError(err)
        } );

    useEffect( () =>  {
        axios.interceptors.request.eject( reqInterceptor );
        axios.interceptors.response.eject( resInterceptor );
    } , [reqInterceptor , resInterceptor])
    
       
    

   const errorConfirmedHandler = () => {
      setError(null)
    }
   return [error , errorConfirmedHandler]
}

export default useHttp
