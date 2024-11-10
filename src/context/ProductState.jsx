import React, { useState } from 'react'
import ProductContext from './productContext'

const ProductState = (props) => {
  let p1 = {
    name: "apple",
    price: 100
  }
  const articles = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Hannah Rabinowitz",
      "title": "DOJ announces charges in Iranian plot to kill Donald Trump - CNN",
      "description": "The Justice Department on Friday announced federal charges in a thwarted Iranian plot to kill Donald Trump before the presidential election.",
      "url": "https://www.cnn.com/2024/11/08/politics/doj-charges-three-iranian-plot-to-kill-donald-trump/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24309752020097.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-11-09T08:02:00Z",
      "content": "The Justice Department on Friday announced federal charges in a thwarted Iranian plot to kill Donald Trump before the presidential election.\r\nAccording to court documents, Iranian officials asked Far… [+4801 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "At least 24 killed in Pakistan train station bomb blast, police say - Reuters",
      "description": "At least 24 people were killed and more than 40 injured in a bomb blast at a railway station in Quetta in southwestern Pakistan on Saturday, police and other officials told Reuters.",
      "url": "https://www.reuters.com/world/asia-pacific/least-4-killed-30-injured-train-station-blast-southwestern-pakistan-2024-11-09/",
      "urlToImage": "https://www.reuters.com/resizer/v2/5IQVOBWCRJL6ZNG24KGNC7Y7CU.jpg?auth=a0f7a9a8d55983a20005b2de0f5d4ab62522ab47252580aad7a5e63160a23e3a&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-11-09T07:01:00Z",
      "content": null
    },
    {
      "source": {
        "id": "reuters1",
        "name": "Reuters1"
      },
      "author": "Reuters1",
      "title": "At least 24 killed in Pakistan train station bomb blast, police say - Reuters",
      "description": "At least 24 people were killed and more than 40 injured in a bomb blast at a railway station in Quetta in southwestern Pakistan on Saturday, police and other officials told Reuters.",
      "url": "https://www.reuters.com/world/asia-pacific/least-4-killed-30-injured-train-station-blast-southwestern-pakistan-2024-11-09/",
      "urlToImage": "https://www.reuters.com/resizer/v2/5IQVOBWCRJL6ZNG24KGNC7Y7CU.jpg?auth=a0f7a9a8d55983a20005b2de0f5d4ab62522ab47252580aad7a5e63160a23e3a&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-11-09T07:01:00Z",
      "content": null
    }
  ]
  const [product, setProduct] = useState(p1)
  const [news, setNews] = useState(articles)

  const update = () => {
    setTimeout(() => {
      setProduct({
        name: "orange",
        price: 50
      })
    }, 5000);
  }
  return (
    <ProductContext.Provider value={{ product, update , news }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
