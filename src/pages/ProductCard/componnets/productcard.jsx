import React from 'react'
import { Card } from 'antd'
import ButtonSortPrice from '../ButtonSort/ButtonSortPrice'
import { NavLink } from 'react-router-dom'
import { WrapperProductCard } from '../style/style'

const ProductCard = ({ products }) => {
  return (
    <div>

      <WrapperProductCard>

        {products.map(p => <div key={p.id}>
          <Card title={p.title} extra={<NavLink to={`/${p.id}` + p.id}>More</NavLink>} style={{ width: 500 }}>
            <p>{p.price} BYN </p>
            <p> {p.size.join('  :')} </p>
            {/* <p><img src={p.images[0]} alt="" /> </p> */}

          </Card>
        </div>)}
      </WrapperProductCard>

    </div>
  )
}

export default ProductCard
