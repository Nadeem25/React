import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingComp() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPostData] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setPostData(response?.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPostData({})
            setError('Something Went Wrong')
        })
    }, [])

  return (
    <div>
      {loading ? 'Loading Data' : post.title }
      {error ? error : null}
    </div>
  )
}

export default DataFetchingComp
